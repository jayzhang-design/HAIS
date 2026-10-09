import test from 'node:test';
import assert from 'node:assert/strict';
import {detectRisks} from '../rules.js';
import {scenarios} from '../scenarios.js';
const ids=s=>detectRisks(s).map(x=>x.id);
test('all twelve example questions route to the correct scenario',()=>{for(const s of scenarios)assert.deepEqual(ids(s.question),[s.id]);});
test('Chinese aliases and combined hazards',()=>{
assert.deepEqual(ids('白醋和84消毒液能一起用吗'),['acid-bleach']);
assert.deepEqual(ids('氨水和次氯酸钠混合'),['ammonia-bleach']);
assert.deepEqual(ids('双氧水与白醋一起喷'),['peroxide-vinegar']);
assert.deepEqual(ids('酒精和含氯消毒剂混合'),['alcohol-bleach']);
assert.deepEqual(ids('把小苏打和醋放在密封瓶里'),['sealed-soda']);
assert.deepEqual(ids('Mix bleach with vinegar and ammonia'),['acid-bleach','ammonia-bleach']);
});
test('isolated ingredients and unrelated substrings do not trigger',()=>{
for(const s of ['bleach','white vinegar','ammonia','alcohol','baking soda','Use an alcoholic beverage','glass cleaner','toilet bowl cleaner','disinfectant spray'])assert.deepEqual(ids(s),[]);
});
test('sealed condition is required',()=>{
assert.deepEqual(ids('baking soda and vinegar in an open bowl'),[]);
assert.deepEqual(ids('baking soda and vinegar in an unsealed bottle'),[]);
assert.deepEqual(ids('baking soda and vinegar in a bottle that is not sealed'),[]);
});
test('explicit safe statements are not unsafe proposals',()=>{
for(const s of ['Never mix bleach and vinegar.','Do not combine bleach and ammonia.','不要混用白醋和漂白剂','Use peroxide without mixing vinegar.','Do not seal baking soda and vinegar.'])assert.deepEqual(ids(s),[]);
assert.deepEqual(ids('Never mix bleach and vinegar. Can I combine ammonia and bleach?'),['ammonia-bleach']);
});
test('oxygen bleach is not chlorine bleach',()=>{
assert.deepEqual(ids('Mix oxygen bleach and vinegar'),[]);
assert.deepEqual(ids('Mix non-chlorine bleach and vinegar'),[]);
});
test('history is not part of the detector input',()=>{
assert.deepEqual(ids('bleach'),[]);
assert.deepEqual(ids('vinegar'),[]);
});
test('input is normalized and duplicates produce one card',()=>{
assert.deepEqual(ids('Mix BLEACH and VINEGAR. Mix bleach and vinegar.'),['acid-bleach']);
});

test('new Chinese scenarios and specific precedence',()=>{
const cases=[
['洁厕灵和84消毒液混用',['toilet-bleach']],
['泳池氯与除藻剂混合',['pool-chlorine']],
['漂白剂和洗衣液混用',['laundry-bleach']],
['84消毒液和爆炸盐一起用',['oxygen-bleach']],
['洗洁精和洁厕剂混合',['dish-toilet']],
['双氧水与漂白剂混合',['peroxide-bleach']],
['含氨玻璃清洁剂和含氯喷雾同时喷洒',['ammonia-spray']],
['Mix ammonia-based glass cleaner and bleach',['ammonia-bleach']],
['Mix sodium hypochlorite (pool) with muriatic acid',['pool-chlorine']],
['Mix bleach with oxygen bleach',['oxygen-bleach']],
['Use laundry detergent and bleach as directed by the labels',[]],
['Premix concentrated laundry detergent and bleach as directed by the labels',['laundry-bleach']],
['Spray ammonia-free glass cleaner and bleach',[]]
];
for(const [input,expected] of cases)assert.deepEqual(ids(input),expected,input);
});
test('independent scenarios are retained across sentences',()=>{
assert.deepEqual(ids('Mix acidic toilet bowl cleaner and bleach. Mix ammonia-based glass cleaner and bleach spray.'),['toilet-bleach','ammonia-spray']);
});
