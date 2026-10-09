import {scenarios} from './scenarios.js';
// Deterministic routing with ingredient groups and specific-scenario precedence.
const groups = {
bleach:/\b(?:chlorine bleach|bleach|sodium hypochlorite|chlorine disinfectant|chlorine spray)\b|漂白(?:剂|水)|次氯酸钠|含氯(?:消毒剂|清洁剂|喷雾)|84\s*(?:消毒液|消毒剂|disinfectant)/iu,
vinegar:/\b(?:white vinegar|vinegar|acetic acid)\b|白醋|醋|乙酸|醋酸/iu,
acid:/\b(?:acid(?:ic)? cleaner|acidic mold remover|hydrochloric acid|sulfuric acid|muriatic acid|pH minus)\b|酸性(?:清洁剂|洁厕剂|除霉剂)|盐酸|硫酸|降酸剂|pH\s*降低剂/iu,
toilet:/\b(?:toilet bowl cleaner|toilet cleaner)\b|洁厕灵|洁厕剂|马桶清洁剂/iu,
ammonia:/\bammonia(?:-based|[- ]containing)?\b|氨水|含氨|氨基清洁剂/iu,
peroxide:/\b(?:hydrogen peroxide|h2o2|h₂o₂)\b|双氧水|过氧化氢/iu,
alcohol:/\b(?:alcohol|ethanol|isopropyl alcohol|isopropanol)\b|酒精|乙醇|异丙醇/iu,
soda:/\b(?:baking soda|sodium bicarbonate)\b|小苏打|碳酸氢钠/iu,
sealed:/\b(?:sealed|airtight|air-tight|tightly closed|closed container|closed bottle|seal|cap it|lid on)\b|密闭|密封|封口|拧紧|盖紧/iu,
pool:/\b(?:pool chlorine|pool chemicals?|trichlor|dichlor|sodium hypochlorite\s*\(pool\))\b|sodium hypochlorite\s*\(pool\)|泳池氯|泳池消毒剂|泳池化学品|三氯异氰尿酸|二氯异氰尿酸/iu,
poolOther:/\b(?:pH minus|muriatic acid|algaecide|quaternary ammonium|calcium hypochlorite)\b|降酸剂|除藻剂|季铵盐|次氯酸钙/iu,
laundry:/\b(?:laundry detergent|washing powder|laundry soap)\b|洗衣液|洗衣粉|洗衣剂/iu,
oxygen:/\b(?:oxygen bleach|sodium percarbonate|sodium perborate|explosion salt|oxiclean|oxi clean)\b|氧系漂白|氧漂|过碳酸钠|过硼酸钠|爆炸盐/iu,
dish:/\b(?:dish soap|dishwashing liquid|dish detergent|washing[- ]up liquid)\b|洗洁精|洗碗液/iu,
spray:/\b(?:spray|spraying|sprayed|sprays)\b|喷雾|喷洒|喷/iu,
glassBathroom:/\b(?:glass cleaner|bathroom cleaner)\b|玻璃清洁剂|玻璃水|浴室清洁剂/iu
};
const normalize=s=>String(s).normalize('NFKC').toLowerCase();
function sentenceRisks(sentence){
const s=normalize(sentence);
if(/\b(?:do not|don't|never|avoid|without)\s+(?:ever\s+)?(?:mix|combine|seal|use.*together)|不要(?:把.*)?(?:混|密封|封)|不能混|切勿|禁止混|不混合|不混用|不密封|不要混用/iu.test(s))return [];
const g=Object.fromEntries(Object.entries(groups).map(([key,re])=>[key,re.test(s)]));
// Remove named oxygen/non-chlorine products before checking for a separate chlorine product.
const chlorineText=s.replace(/\b(?:non[- ]chlorine|oxygen) bleach\b|氧系漂白(?:剂|水)?|无氯漂白(?:剂|水)?/giu,'');
g.bleach=groups.bleach.test(chlorineText);
if(/\b(?:open|unsealed|uncovered) (?:container|bottle|bowl)|not sealed|not airtight|敞口|开放容器|未密封/iu.test(s)&&!/then seal|然后密封|再密封/iu.test(s))g.sealed=false;
g.ammonia=groups.ammonia.test(s.replace(/\bammonia[- ]free\b|不含氨|无氨/giu,''));
const ids=[];
const poolMix=g.pool&&(g.acid||g.vinegar||g.ammonia||g.poolOther||/\b(?:other|different) pool chemicals\b|其他泳池化学品/iu.test(s));
const toiletMix=g.bleach&&g.toilet&&!/\b(?:non[- ]acidic|acid[- ]free)\b|非酸性|不含酸/iu.test(s);
const sprayMix=g.bleach&&g.ammonia&&g.glassBathroom&&g.spray;
if(poolMix)ids.push('pool-chlorine');
if(!poolMix){
if(toiletMix)ids.push('toilet-bleach');
if(g.bleach&&(g.vinegar||g.acid)&&!toiletMix)ids.push('acid-bleach');
if(sprayMix)ids.push('ammonia-spray');
else if(g.bleach&&g.ammonia)ids.push('ammonia-bleach');
}
if(g.peroxide&&g.vinegar)ids.push('peroxide-vinegar');
if(g.bleach&&g.alcohol)ids.push('alcohol-bleach');
if(g.soda&&g.vinegar&&g.sealed)ids.push('sealed-soda');
const approvedLaundry=/\b(?:label[- ]approved|as directed by (?:the )?labels?|approved bleach dispenser)\b|按标签允许|标签认可|专用漂白剂槽/iu.test(s);
const premix=/\b(?:premix|pre[- ]mix|concentrated|same bottle)\b|预混|浓缩|同一瓶|混合瓶/iu.test(s);
if(g.bleach&&g.laundry&&(!approvedLaundry||premix))ids.push('laundry-bleach');
if(g.bleach&&g.oxygen)ids.push('oxygen-bleach');
if(g.dish&&g.toilet)ids.push('dish-toilet');
if(g.bleach&&g.peroxide)ids.push('peroxide-bleach');
return ids;
}
export function detectRisks(input){
const ids=new Set(String(input).split(/[.!?。！？;；\n]+/u).flatMap(sentenceRisks));
return scenarios.filter(s=>ids.has(s.id));
}
