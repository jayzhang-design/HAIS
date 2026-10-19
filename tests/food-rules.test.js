import test from 'node:test';
import assert from 'node:assert/strict';
import {detectFoodRisks,detectRisks,detectDigitalRisks} from '../rules.js';
import {foodScenarios,digitalScenarios,scenarios} from '../scenarios.js';
import {getFoodNormalReply} from '../normal-replies.js';
const ids=s=>detectFoodRisks(s).map(x=>x.number);
test('all twelve food questions select their scenario',()=>{for(const s of foodScenarios)assert.deepEqual(ids(s.question),[s.number],s.number);});
test('Chinese food aliases and paired conditions',()=>{
const cases=[
['生鸡肉和沙拉用同一块没洗的菜板','F1'],
['带壳鸡蛋能放微波炉吗','F2'],
['发芽土豆可以做菜吗','F3'],
['四季豆快炒一下生吃可以吗','F4'],
['6个月宝宝可以吃蜂蜜吗','F5'],
['米饭放室温过夜再炒饭','F6'],
['用蛋壳作漏斗接生蛋液','F7'],
['没有标明可微波的塑料外卖盒能微波加热吗','F8'],
['冻肉放台面室温解冻','F9'],
['生木薯和苦杏仁可以直接吃吗','F10'],
['剩菠菜可以反复加热吗','F11'],
['番茄在铝锅炖几个小时','F12']];
for(const [input,id] of cases)assert.deepEqual(ids(input),[id],input);
assert.deepEqual(ids('Can I cook a green potato?'),['F3']);
assert.deepEqual(ids('Honey for an infant under 12 months'),['F5']);
assert.deepEqual(ids('未满12个月的宝宝可以吃蜂蜜吗'),['F5']);
assert.deepEqual(ids('Can my one-year-old baby have honey?'),[]);
assert.deepEqual(ids('Microwave metal cutlery'),['F2']);
assert.deepEqual(ids('Microwave a sealed container'),['F2']);
assert.deepEqual(ids('Leftover noodles at room temperature overnight'),['F6']);
});
test('ordinary food queries and stated safe methods do not warn',()=>{
for(const s of ['honey','microwave','chopping board','raw meat','salad','green beans','plastic container','leftover spinach','Can I give honey to my 18-month-old baby?','Honey for a 2-year-old child','Use separate chopping boards for raw chicken and salad','Use a plastic container labeled microwave-safe','Thaw frozen meat in the refrigerator','Leftover rice refrigerated overnight','Reheat leftover spinach once until hot','Simmer tomato sauce in an enameled cast-iron pan','Eat commercially processed cassava'])assert.deepEqual(ids(s),[],s);
assert.deepEqual(ids('Do not thaw frozen meat on the counter.'),[]);
});
test('food matching is isolated and can return independent risks',()=>{
for(const s of [...scenarios,...digitalScenarios])assert.deepEqual(ids(s.question),[],s.id);
for(const s of foodScenarios)assert.deepEqual(detectDigitalRisks(s.question),[],s.id);
assert.deepEqual(ids('A 6-month-old baby wants honey. Frozen meat is thawing on the counter.'),['F5','F9']);
assert.deepEqual(detectRisks('raw chicken and salad on the same board'),[]);
});
test('food replies avoid unsafe blanket claims and separate fallback data',()=>{
const egg=foodScenarios.find(s=>s.number==='F7');assert.match(egg.alternative,/Do not routinely wash/);
const greens=foodScenarios.find(s=>s.number==='F11');assert.match(greens.warning,/reheating alone does not inevitably/);
const beans=foodScenarios.find(s=>s.number==='F4');assert.match(beans.warning,/color or texture alone does not/);
const food=getFoodNormalReply();assert.equal(food.steps.length,5);assert.doesNotMatch(JSON.stringify(food),/verification code|cleaning chemicals/iu);food.steps[0].title='changed';assert.notEqual(getFoodNormalReply().steps[0].title,'changed');
});
