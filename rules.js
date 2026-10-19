import {scenarios,digitalScenarios,foodScenarios,medicalScenarios,fitnessScenarios} from './scenarios.js';
// Deterministic routing with ingredient groups and specific-scenario precedence.
const groups = {
drain:/\b(?:drain cleaners?|drain openers?|drano|liquid fire)\b|管道(?:疏通剂|清洁剂)|疏通剂|下水道清洁剂/iu,
alkali:/\b(?:caustic soda|sodium hydroxide|lye)\b|烧碱|火碱|氢氧化钠/iu,
aluminum:/\b(?:aluminum|aluminium)(?: foil| pipe)?\b|铝箔|铝管|铝容器|铝/iu,
chx:/\b(?:chlorhexidine|chx|surgical antiseptic)\b|氯己定|洗必泰|手术消毒剂/iu,
pesticide:/\b(?:pesticides?|herbicides?|phosphide|aluminum phosphide|aluminium phosphide|zinc phosphide)\b|农药|杀虫剂|除草剂|磷化铝|磷化锌|磷化物/iu,
permanganate:/\b(?:potassium permanganate|kmno4)\b|高锰酸钾/iu,
glycerin:/\b(?:glycerin|glycerine|glycerol)\b|甘油|丙三醇/iu,
sugarEthanol:/\b(?:sugar|ethanol|ethyl alcohol)\b|糖|乙醇|酒精/iu,
iodine:/\b(?:iodine|tincture of iodine)\b|碘酊|碘/iu,
catalyst:/\b(?:iron powder|copper powder|manganese dioxide|mno2)\b|铁粉|铜粉|二氧化锰/iu,

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
const differentDrains=g.drain&&((g.acid&&g.alkali)||/\b(?:two|different|another|second) (?:types? of )?drain (?:cleaners?|openers?)\b|不同(?:类型)?(?:的)?疏通剂|两种(?:管道)?疏通剂/iu.test(s)||(/\bdrano\b/iu.test(s)&&/\bliquid fire\b/iu.test(s)));
if(differentDrains)ids.push('drain-mix');
if((g.alkali||g.drain)&&g.aluminum)ids.push('alkali-aluminum');
if(g.bleach&&g.chx)ids.push('bleach-chx');
if(g.bleach&&g.pesticide)ids.push('bleach-pesticide');
if(g.permanganate&&g.glycerin)ids.push('permanganate-glycerin');
if(g.permanganate&&g.sugarEthanol)ids.push('permanganate-organic');
if(g.iodine&&g.ammonia)ids.push('iodine-ammonia');
if((g.acid||g.toilet)&&g.aluminum)ids.push('acid-aluminum');
if(g.peroxide&&g.catalyst)ids.push('peroxide-catalyst');
return ids;
}
export function detectRisks(input){
const ids=new Set(String(input).split(/[.!?。！？;；\n]+/u).flatMap(sentenceRisks));
return scenarios.filter(s=>ids.has(s.id));
}

const digitalGroups={
code:/\b(?:verification code|sms code|sms verification code|one[- ]time (?:code|password)|otp)\b|验证码|短信码|动态码/iu,
shareCode:/\b(?:share|send|tell|give|read out|forward|request|ask|asked|wants?)\b|发给|发送|告诉|提供|索要|要我|要求|分享|转发/iu,
screen:/\b(?:screen shar(?:e|ing)|share (?:my|the|your) screen|remote (?:access|control))\b|共享屏幕|屏幕共享|远程控制|远程协助/iu,
bank:/\b(?:bank(?:ing)? app|payment app|bank account|banking|online bank)\b|银行|网银|支付(?:宝|软件|应用)|付款/iu,
refund:/\b(?:refund|compensation|defective product)\b|退款|退费|赔偿|理赔|商品有问题/iu,
support:/\b(?:customer service|support agent|support staff|customer support)\b|客服|售后/iu,
meeting:/\b(?:meeting app|meeting software|zoom(?: meeting)?|download.*meeting)\b|会议软件|会议应用|下载会议|腾讯会议/iu,
link:/\b(?:sms link|unknown link|unsolicited link|phishing link|text link|message link)\b|短信.*链接|陌生链接|不明链接|钓鱼链接|收到.*链接/iu,
credentials:/\b(?:log ?in|credentials|password|update (?:my |your )?(?:info|information)|account details|etc abnormal|account is abnormal)\b|登录|密码|更新信息|账户异常|账号异常|etc异常/iu,
pressure:/\b(?:urgent|immediately|right now|money laundering|account freez(?:e|ing)|account is frozen|frozen account|panic|task rebate)\b|紧急|马上|立即|洗钱|账户冻结|账号冻结|安全账户|返利|恐慌/iu,
transfer:/\b(?:transfer|send money|move (?:my |your )?(?:money|funds)|pay now)\b|转账|汇款|转钱|打款|付款/iu,
family:/\b(?:family|relative|friend|son|daughter|mother|father|loved one)\b|家人|亲人|朋友|孩子|儿子|女儿|父亲|母亲|亲属/iu,
voice:/\b(?:voice(?: message| call)?|video(?: call)?|deepfake|ai face swap|voice clon(?:e|ing))\b|语音|声音|视频|换脸|克隆声/iu,
helpMoney:/\b(?:urgent money|urgent help|in trouble|emergency|needs? (?:urgent )?money|send money)\b|急用钱|出事|救急|紧急.*钱|急需|求救|转钱/iu,
task:/\b(?:task(?: scam)?|product review|review task|task rebate|rate products)\b|刷单|做任务|任务返利|商品评价/iu,
fee:/\b(?:upfront|advance payment|deposit|training fee|unlock fee|shipping fee|top[- ]?up|pay.*(?:first|before)|paid|fee|commission.*stuck)\b|垫付|先付|预付|押金|保证金|培训费|解冻费|运费|充值|交钱|已付|支付.*才能/iu,
romance:/\b(?:online romance|romantic partner|online (?:boyfriend|girlfriend|partner)|love interest|pig butchering)\b|网恋|恋人|杀猪盘|网上.*(?:男友|女友)|交友/iu,
investment:/\b(?:invest(?:ment|ing)?|investment platform|gambling|crypto(?:currency)?)\b|投资|赌博|博彩|虚拟币|加密货币|理财平台/iu,
police:/\b(?:police|prosecutor|law enforcement|arrest warrant)\b|警察|公安|检察|逮捕令|通缉令/iu,
safeAccount:/\b(?:safe|protected|secure) account\b|安全账户|保护账户|监管账户/iu,
job:/\b(?:high[- ]paying job|job|referral|recruiter|part[- ]time|employment)\b|高薪|工作|招聘|入职|内推|兼职/iu,
prize:/\b(?:free gift|lottery win|won.*(?:prize|gift)|prize|sweepstakes)\b|免费礼物|中奖|奖品|赠品/iu,
address:/\b(?:fill.*address|address|personal details|card details)\b|填.*地址|个人信息|银行卡信息/iu,
loan:/\b(?:loan|lender|no collateral)\b|贷款|校园贷|借款|放款|无抵押/iu
};
export function detectDigitalRisks(input){
const s=normalize(input);
if(/\b(?:never|do not|don't)\s+(?:share|send|pay|transfer|click|enable)|不要(?:分享|发送|提供|转账|付款|点击)|切勿/iu.test(s))return [];
const g=Object.fromEntries(Object.entries(digitalGroups).map(([k,re])=>[k,re.test(s)]));
const ids=new Set();
const refundSupport=g.support&&g.refund&&(g.meeting||g.code||g.screen);
const policeSafe=g.police&&g.safeAccount;
if(refundSupport)ids.add('refund-impersonation');
if(!refundSupport){
if(g.code&&g.shareCode)ids.add('code-sharing');
if(g.screen&&(g.bank||g.refund))ids.add('bank-screen-share');
}
if(g.link&&g.credentials)ids.add('phishing-credentials');
if(policeSafe)ids.add('police-safe-account');
else if(g.pressure&&g.transfer)ids.add('pressure-transfer');
if(g.voice&&g.family&&g.helpMoney)ids.add('deepfake-emergency');
if(g.task&&g.fee)ids.add('task-upfront');
if(g.romance&&g.investment)ids.add('romance-investment');
if(g.job&&g.fee&&!(g.task&&g.fee))ids.add('job-upfront');
if(g.prize&&(g.fee||g.address))ids.add('prize-shipping');
if(g.loan&&g.fee&&/\b(?:unlock fee|advance[- ]fee|upfront|frozen|release|before|guaranteed|card number.*wrong)\b|解冻|冻结|放款前|先交|先付|卡号错误/iu.test(s))ids.add('loan-unlock');
return digitalScenarios.filter(s=>ids.has(s.id));
}

const foodGroups={
rawMeat:/\braw (?:meat|chicken|poultry|beef|pork|turkey|fish)\b|生肉|生鸡肉|生禽肉|生牛肉|生猪肉|生鱼/iu,
readyFood:/\b(?:ready[- ]to[- ]eat|salad|fruit|cooked food)\b|即食|沙拉|水果|熟食/iu,
board:/\b(?:chopping board|cutting board|knife|knives|same board|cross[- ]contamination)\b|砧板|菜板|刀具|交叉污染/iu,
microwave:/\bmicrowav(?:e|ing)\b|微波炉|微波加热/iu,
wholeEgg:/\b(?:whole eggs?|eggs? in (?:its|their|the) shells?|shell[- ]on eggs?)\b|带壳(?:鸡)?蛋|整颗(?:鸡)?蛋|整只鸡蛋/iu,
sealed:/\b(?:sealed|airtight|tightly closed) (?:container|box|jar|bottle|lid)\b|密封容器|密闭容器|密封盒|密封瓶|盖紧/iu,
metal:/\b(?:metal cutlery|metal utensils?|metal objects?|aluminu[mn] (?:foil|pan|pot)|aluminium foil|foil|fork|spoon)\b|金属餐具|铝箔|锡纸|金属容器/iu,
potato:/\b(?:sprouted|sprouting|green|germinating) potato(?:es)?\b|发芽(?:的)?土豆|发芽(?:的)?马铃薯|变绿(?:的)?土豆|绿色土豆|龙葵素/iu,
beans:/\b(?:green beans?|string beans?)\b|四季豆|菜豆|芸豆|青豆/iu,
undercooked:/\b(?:raw|undercooked|incomplete cooking|very quick|quick stir[- ]fry|brief(?:ly) stir[- ]fry|partly cooked)\b|生吃|未熟|没熟|不熟|半生|快炒|略炒|生的/iu,
honey:/\bhoney\b|蜂蜜/iu,
infant:/\b(?:baby|babies|infant|under (?:1|one) year|under (?:12|twelve) months?|\d+[- ]months?(?:[- ]old)?)\b|宝宝|婴儿|婴幼儿|未满一岁|一岁以下|个月/iu,
starch:/\b(?:(?:cooked|leftover|fried) (?:rice|noodles?)|rice|noodles?)\b|剩饭|米饭|面条|炒饭/iu,
room:/\b(?:room temperature|overnight|counter(?:top)?|left out|leave.*out)\b|室温|常温|隔夜|放一夜|放过夜|台面|外面过夜/iu,
shell:/\b(?:eggshell|egg shell|shell pieces?|cracked eggs?)\b|蛋壳|破壳蛋|裂壳蛋/iu,
eggLiquid:/\b(?:raw egg|uncooked egg|egg (?:mixture|liquid)|funnel|separator|separate eggs|scoop)\b|蛋液|生鸡蛋|生蛋|漏斗|分蛋|分离蛋黄/iu,
plastic:/\b(?:plastic (?:container|box|takeout)|takeout box|takeaway (?:box|container)|plastic)\b|塑料|外卖盒|一次性餐盒/iu,
frozenMeat:/\bfrozen (?:meat|chicken|beef|poultry|pork|fish)\b|冻肉|冷冻肉|冻鸡肉|冷冻鸡肉|冷冻鱼/iu,
thaw:/\b(?:thaw(?:ing)?|defrost(?:ing)?)\b|解冻/iu,
cyanogenic:/\b(?:bitter almonds?|apricot kernels?|raw cassava|unprocessed cassava|cassava)\b|苦杏仁|杏核仁|生木薯|木薯/iu,
greens:/\b(?:spinach|leafy greens?|leafy vegetables?)\b|菠菜|绿叶菜|叶菜/iu,
leftover:/\b(?:leftover|leftovers|reheat(?:ing)?|nitrite)\b|剩菜|剩菠菜|再加热|反复加热|亚硝酸盐/iu,
repeat:/\b(?:repeated(?:ly)?|again and again|multiple times|twice|warm between|leave.*warm|nitrite)\b|反复|多次|两次|保温|亚硝酸盐/iu,
acidFood:/\b(?:tomato(?: sauce)?|lemon juice|vinegar|acidic food|citrus)\b|番茄|西红柿|柠檬汁|醋|酸性食物/iu,
reactive:/\b(?:aluminum|aluminium) (?:pot|pan|cookware)|\bcast[- ]iron(?: pan| pot| cookware)?\b|铝锅|铝制锅|铸铁锅|铁锅/iu
};
export function detectFoodRisks(input){
const s=normalize(input);
if(/\b(?:never|do not|don't|avoid)\s+(?:eat|serve|microwave|thaw|reuse)|不要(?:吃|食用|生吃|用同|微波|室温解冻)|切勿/iu.test(s))return [];
const g=Object.fromEntries(Object.entries(foodGroups).map(([k,re])=>[k,re.test(s)]));
const ids=new Set();
const separateBoards=/\b(?:separate (?:cutting |chopping )?boards|washed.*(?:board|knife)|clean (?:cutting |chopping )?board)\b|生熟分开|不同菜板|清洗.*菜板/iu.test(s)&&!/unwashed|未洗|没洗/iu.test(s);
if(g.rawMeat&&g.readyFood&&g.board&&!separateBoards)ids.add('food-cross-contamination');
const permittedMetal=/\b(?:manufacturer[- ]approved|approved microwave accessory)\b|厂家明确允许/iu.test(s);
if(g.microwave&&(g.wholeEgg||g.sealed||(g.metal&&!permittedMetal)))ids.add('food-microwave-pressure');
if(g.potato)ids.add('food-green-potatoes');
if(g.beans&&g.undercooked)ids.add('food-undercooked-beans');
const month=s.match(/(\d+)\s*[- ]?months?(?:[- ]old)?|([0-9]+)\s*个月/iu);
const year=s.match(/(\d+)\s*[- ]?years?(?:[- ]old)?|([0-9]+)\s*岁/iu);
const ageUnder=/under|younger than|less than|not yet|以下|未满|不到|未到/iu.test(s);
const explicitlyOlder=!ageUnder&&((month&&Number(month[1]||month[2])>=12)||(year&&Number(year[1]||year[2])>=1)||/\bone[- ]year[- ]old\b|一岁/iu.test(s));
if(g.honey&&g.infant&&!explicitlyOlder)ids.add('food-honey-infant');
const refrigerated=/\b(?:refrigerat(?:ed|or|e)|fridge)\b|冰箱|冷藏/iu.test(s);
const explicitCounter=/\b(?:room temperature|counter(?:top)?|left out)\b|室温|常温|台面/iu.test(s);
if(g.starch&&g.room&&(!refrigerated||explicitCounter))ids.add('food-rice-storage');
if(g.shell&&g.eggLiquid)ids.add('food-eggshell-contact');
const safePlastic=/\b(?:labeled|labelled|marked|approved|use (?:a |my )?)\s*(?:for )?microwave[- ]safe\b|明确标注.*微波|可微波标识/iu.test(s)&&!/not (?:labeled|labelled|marked|microwave)|non[- ]microwave|未标|没有标|不可微波/iu.test(s);
if(g.plastic&&g.microwave&&!safePlastic)ids.add('food-microwave-plastic');
if(g.frozenMeat&&g.thaw&&explicitCounter)ids.add('food-counter-thaw');
if(g.cyanogenic&&!/\b(?:properly processed|ready[- ]to[- ]eat|commercially processed)\b|正规加工|充分加工|即食/iu.test(s))ids.add('food-cyanogenic-plants');
if(g.greens&&g.leftover&&g.repeat)ids.add('food-leafy-leftovers');
const protectedSurface=/\b(?:enameled|enamelled|anodized|nonreactive)\b|搪瓷|阳极氧化|不锈钢内胆/iu.test(s)&&!/uncoated|bare|涂层破损/iu.test(s);
if(g.acidFood&&g.reactive&&!protectedSurface)ids.add('food-acid-cookware');
return foodScenarios.filter(s=>ids.has(s.id));
}

const medicalGroups={
apap:/\b(?:acetaminophen|paracetamol|tylenol|apap)\b|对乙酰氨基酚|扑热息痛|泰诺/iu,
cold:/\b(?:cold medicine|cough medicine|cough syrup|cough and cold|cough or cold|pseudoephedrine|dextromethorphan)\b|感冒药|止咳药|止咳糖浆|伪麻黄碱|右美沙芬/iu,
combine:/\b(?:with|and|plus|together|separate|another|additional|double dosing|two products)\b|同时|一起|另|再服|搭配|合用|叠加|重复|两种/iu,
duplicate:/\b(?:double dos(?:e|ing)|two acetaminophen|overlapping|duplicate)\b|重复用药|重复服|叠加剂量/iu,
ceph:/\b(?:cephalosporins?|cefotetan|cefoperazone)\b|头孢(?:菌素|替坦|哌酮)?/iu,
alcohol:/\b(?:alcohol|beer|wine|drinking)\b|酒精|啤酒|葡萄酒|喝酒|白酒/iu,
maoi:/\b(?:maois?|tranylcypromine|phenelzine|monoamine oxidase inhibitors?)\b|单胺氧化酶抑制剂|反苯环丙胺|苯乙肼/iu,
tyramine:/\b(?:tyramine|aged cheese|cured meat|fermented soy|soy sauce|draft beer)\b|酪胺|陈年奶酪|腌肉|发酵大豆|酱油/iu,
warfarin:/\b(?:warfarin|coumadin)\b|华法林/iu,
vitK:/\b(?:vitamin k|leafy greens|spinach|kale)\b|维生素k|维生素 k|绿叶菜|菠菜|羽衣甘蓝/iu,
ssri:/\b(?:ssris?|snris?|sertraline|fluoxetine|paroxetine|escitalopram|citalopram|venlafaxine|duloxetine)\b|舍曲林|氟西汀|帕罗西汀|艾司西酞普兰|文拉法辛|度洛西汀/iu,
triptan:/\b(?:triptans?|sumatriptan|rizatriptan|zolmitriptan)\b|曲普坦|舒马曲坦|利扎曲普坦|佐米曲普坦/iu,
metformin:/\b(?:metformin|glucophage)\b|二甲双胍|格华止/iu,
contrast:/\b(?:iodinated contrast|contrast dye|contrast[- ]enhanced ct|ct (?:scan )?with (?:iodinated )?contrast)\b|含碘(?:对比剂|造影剂)|碘造影剂|造影剂|增强ct|增强 ct/iu,
acearb:/\b(?:ace inhibitors?|arbs?|lisinopril|losartan|enalapril|ramipril|valsartan|candesartan)\b|普利|沙坦|血管紧张素.*(?:抑制剂|拮抗剂)/iu,
potassium:/\b(?:potassium supplements?|potassium[- ]containing salt substitutes?|potassium salt substitute|salt substitutes?)\b|钾补充剂|补钾|含钾盐|低钠盐|代盐/iu,
ibuprofen:/\bibuprofen\b|布洛芬/iu,
aspirin:/\baspirin\b|阿司匹林/iu,
child:/\b(?:child|children|kid|kids|toddler|infant|baby|under (?:4|four)|\d+[- ]year[- ]old)\b|孩子|儿童|幼儿|婴儿|宝宝|小孩/iu,
modified:/\b(?:extended[- ]release|controlled[- ]release|sustained[- ]release|modified[- ]release)\b|缓释|控释/iu,
releaseCode:/\b(?:er|xr|sr|cr|xl)\b/iu,
dosageForm:/\b(?:tablet|pill|capsule|medicine|medication)\b|片剂|药片|胶囊|药物/iu,
alter:/\b(?:crush|crushing|split|splitting|chew|chewing|open|opening)\b|碾碎|压碎|掰开|掰碎|分割|嚼|打开胶囊/iu,
opioid:/\b(?:opioids?|codeine|oxycodone|fentanyl|morphine|hydrocodone|tramadol)\b|阿片|可待因|羟考酮|芬太尼|吗啡|曲马多/iu,
benzo:/\b(?:benzodiazepines?|xanax|valium|alprazolam|diazepam|lorazepam|clonazepam)\b|苯二氮|阿普唑仑|地西泮|劳拉西泮|氯硝西泮/iu,
sparing:/\b(?:spironolactone|amiloride|triamterene|eplerenone|potassium[- ]sparing diuretics?|water pill)\b|螺内酯|阿米洛利|氨苯蝶啶|依普利酮|保钾利尿剂|水丸/iu
};
export function detectMedicalRisks(input){
const s=normalize(input);
if(/\b(?:never|do not|don't)\s+(?:combine|mix|crush|split)|不要(?:合用|混服|碾碎|掰开)|切勿/iu.test(s))return [];
const g=Object.fromEntries(Object.entries(medicalGroups).map(([k,re])=>[k,re.test(s)]));
g.alcohol=medicalGroups.alcohol.test(s.replace(/\balcohol[- ]free\b|\bnon[- ]alcoholic\b|无酒精/giu,''));
g.potassium=g.potassium&&!/\bpotassium[- ]free\b|不含钾|无钾/iu.test(s);
const ids=new Set();
const apapNames=s.match(/\b(?:acetaminophen|paracetamol|tylenol|apap)\b|对乙酰氨基酚|扑热息痛|泰诺/giu)||[];
if(g.apap&&(g.duplicate||(g.cold&&g.combine)||(apapNames.length>=2&&g.combine)))ids.add('med-apap-duplicate');
if(g.ceph&&g.alcohol)ids.add('med-ceph-alcohol');
if(g.maoi&&g.tyramine)ids.add('med-maoi-tyramine');
const consistentK=/\b(?:consistent|same amount|unchanged intake)\b|摄入稳定|保持一致|摄入不变/iu.test(s);
if(g.warfarin&&g.vitK&&!consistentK)ids.add('med-warfarin-vitk');
if(g.ssri&&g.triptan)ids.add('med-ssri-triptan');
if(g.metformin&&g.contrast&&!/\b(?:non[- ]contrast|without contrast|no contrast)\b|不使用造影剂|无对比剂|不增强/iu.test(s))ids.add('med-metformin-contrast');
if(g.acearb&&g.potassium)ids.add('med-acearb-potassium');
if(g.ibuprofen&&g.aspirin)ids.add('med-ibuprofen-aspirin');
const ageText=s.replace(/\b(one|two|three|four|five|six)(?=[- ]years?)/giu,n=>String({one:1,two:2,three:3,four:4,five:5,six:6}[n.toLowerCase()]));
const years=ageText.match(/(\d+)\s*[- ]?years?(?:[- ]old)?|([0-9]+)\s*岁/iu);
const months=ageText.match(/(\d+)\s*[- ]?months?(?:[- ]old)?|([0-9]+)\s*个月/iu);
const under=/under|younger than|less than|not yet|以下|未满|不到/iu.test(s);
const older=!under&&((years&&Number(years[1]||years[2])>=4)||(months&&Number(months[1]||months[2])>=48));
if(g.cold&&g.child&&!older)ids.add('med-child-cold');
const explicitlyPermitted=/\b(?:label explicitly permits|pharmacist confirmed|product label allows)\b|说明书明确允许|药师确认可以/iu.test(s);
if((g.modified||(g.releaseCode&&g.dosageForm))&&g.alter&&!explicitlyPermitted)ids.add('med-modified-crushing');
if(g.opioid&&(g.benzo||g.alcohol))ids.add('med-opioid-depressant');
if(g.sparing&&g.potassium)ids.add('med-sparing-potassium');
return medicalScenarios.filter(s=>ids.has(s.id));
}

const fitnessGroups={
joint:/\b(?:joint pain|shoulder pain|shoulder (?:hurts|painful)|painful joint|knee pain)\b|关节痛|肩痛|肩膀疼|肩膀痛|膝盖疼|膝痛/iu,
push:/\b(?:push through|no pain no gain|train anyway|lift(?:ing)? heavy|continue despite|work through)\b|硬撑|忍痛|顶着疼|继续练|继续重训/iu,
exercise:/\b(?:workout|exercise|training|train|bench press(?:es)?|lifting|run|running|marathon|sport|game|squats?|deadlifts?)\b|锻炼|训练|健身|卧推|举重|跑步|长跑|马拉松|比赛|深蹲|硬拉/iu,
soreness:/\b(?:soreness|sore|doms|muscle pain|muscles?.*sore)\b|肌肉酸痛|肌肉疼|酸痛|延迟性肌肉/iu,
severe:/\b(?:severe|cannot walk|can.t walk|dark urine|tea[- ]colored|cola[- ]colored|weakness|swelling|train anyway|train.*hard)\b|剧烈|严重|走不了|无法走|走路困难|深色尿|茶色尿|酱油尿|无力|肿胀|硬练/iu,
fever:/\bfever\b|发烧|发热/iu,
ill:/\b(?:fever|cold|sick|illness|flu|viral infection)\b|发烧|发热|感冒|生病|病毒感染/iu,
intense:/\b(?:intense|high[- ]intensity|hard workout|extreme|sweat(?:ing)? (?:it|a cold) out|strenuous|marathon)\b|高强度|剧烈运动|大强度|出汗排毒|出身汗|发汗|马拉松/iu,
fasting:/\b(?:fasting|fasted|intermittent fasting|without food)\b|空腹|断食|禁食|没吃东西/iu,
fatigue:/\b(?:dizzy|dizziness|exhausted|extreme fatigue|severely fatigued|faint)\b|头晕|眩晕|精疲力尽|极度疲劳|快晕/iu,
endurance:/\b(?:endurance|marathon|long run|long[- ]distance|fasted cardio|hard run|long[- ]duration)\b|耐力|马拉松|长跑|长距离|空腹有氧/iu,
beginner:/\b(?:beginner|new to (?:the )?gym|new lifter|novice|first workout)\b|新手|刚健身|健身初学|刚入健身房/iu,
advanced:/\b(?:advanced|olympic|snatch(?:es)?|clean and jerk|heavy (?:squats?|deadlifts?|lifting|weights?)|max(?:imum)? lift|one[- ]rep max)\b|高级计划|奥举|抓举|挺举|大重量|极限重量/iu,
sprain:/\b(?:sprained ankle|rolled (?:my |an |the )?ankle|ankle sprain|sprained ligament)\b|踝扭伤|脚踝扭伤|崴脚|扭伤韧带|韧带扭伤/iu,
painkiller:/\b(?:painkillers?|pain medicine|ibuprofen|mask (?:the )?pain|painkiller masking)\b|止痛药|镇痛药|布洛芬|掩盖疼痛/iu,
play:/\b(?:play (?:the )?(?:game|finals?|match)|compete|competition|return to (?:play|sport)|finals?)\b|上场|比赛|决赛|参赛|带伤踢|带伤打/iu,
shin:/\b(?:shin splints|shin pain|heel strik(?:e|ing)|pain.*shins?)\b|胫骨痛|胫骨疼|胫骨内侧疼|胫骨应力|脚跟着地/iu,
increase:/\b(?:increase.*(?:mileage|pace|speed|volume)|rapidly increase|running fast|double.*mileage|more.*mileage)\b|增加跑量|提高配速|加跑量|加大跑量|加速跑|翻倍跑量/iu,
heat:/\b(?:hot weather|high heat|heatwave|heat wave|high humidity|hot yoga|extreme heat|dehydrat(?:ed|ion)|no water)\b|高温|酷暑|热浪|闷热|高湿|脱水|不喝水|没水|热瑜伽/iu,
strain:/\b(?:pulled muscle|pulled a muscle|strained back|muscle strain|muscle tear|fresh strain|acute strain)\b|肌肉拉伤|腰拉伤|拉伤肌肉|腰部拉伤|肌肉撕裂/iu,
acute:/\b(?:just|fresh|acute|today|immediately|new injury|first.*hours?)\b|刚刚|刚拉伤|新伤|急性|当天|立即|马上/iu,
heatMassage:/\b(?:heat pad|heating pad|heat therapy|hot pack|massage|heat)\b|热敷|加热垫|按摩|揉搓/iu
};
export function detectFitnessRisks(input){
const s=normalize(input);
if(/\b(?:do not|don't|never)\s+(?:push through|train through|exercise with a fever)|不要(?:忍痛|硬撑|带伤训练)|切勿/iu.test(s))return [];
const g=Object.fromEntries(Object.entries(fitnessGroups).map(([k,re])=>[k,re.test(s)]));
const feverText=s.replace(/\b(?:no fever|without (?:a )?fever|fever[- ]free)\b|没有发烧|没有发热|不发烧|无发热/giu,'');
g.fever=fitnessGroups.fever.test(feverText);
g.ill=fitnessGroups.ill.test(feverText.replace(/\bcold weather\b|寒冷天气/giu,''));
const ids=new Set();
const injuryPlay=g.sprain&&g.painkiller&&g.play;
if(g.joint&&(g.push||g.exercise)&&!injuryPlay)ids.add('fit-joint-pain');
if(g.soreness&&g.severe)ids.add('fit-severe-soreness');
if(g.exercise&&(g.fever||(g.ill&&g.intense)))ids.add('fit-illness-workout');
if((g.fasting||g.fatigue)&&g.endurance&&(g.fatigue||g.intense||/\blong run|marathon|long[- ]distance\b|长跑|马拉松|长距离/iu.test(s)))ids.add('fit-fasted-endurance');
if(g.beginner&&g.advanced)ids.add('fit-beginner-heavy');
if(injuryPlay)ids.add('fit-injury-pain-masking');
if(g.shin&&g.increase)ids.add('fit-shin-load');
if(g.heat&&(g.exercise||/\bhot yoga\b|热瑜伽/iu.test(s)))ids.add('fit-heat-exertion');
const chronic=/\b(?:chronic|old injury|years ago|months ago)\b|慢性|陈旧伤|几年前|几个月前/iu.test(s);
if(g.strain&&g.heatMassage&&(!chronic||g.acute))ids.add('fit-fresh-strain-heat');
return fitnessScenarios.filter(s=>ids.has(s.id));
}
