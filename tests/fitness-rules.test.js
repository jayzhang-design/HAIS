import test from 'node:test';
import assert from 'node:assert/strict';
import {detectFitnessRisks} from '../rules.js';
import {fitnessScenarios,medicalScenarios,foodScenarios,digitalScenarios,scenarios} from '../scenarios.js';
import {getFitnessNormalReply} from '../normal-replies.js';
const ids=input=>detectFitnessRisks(input).map(s=>s.number);
test('all nine fitness questions route correctly',()=>{for(const s of fitnessScenarios)assert.deepEqual(ids(s.question),[s.number],s.number);});
test('Chinese fitness aliases and paired conditions',()=>{
const cases=[
['肩膀痛还可以硬撑继续卧推吗','FT1'],
['训练后肌肉剧烈酸痛走路困难还要硬练吗','FT2'],
['发烧还能高强度锻炼出汗排毒吗','FT3'],
['空腹头晕还继续长跑','FT4'],
['新手可以直接大重量深蹲吗','FT5'],
['崴脚吃止痛药参加决赛','FT6'],
['胫骨疼还想增加跑量提高配速','FT7'],
['高温天气跑步不喝水','FT8'],
['刚刚肌肉拉伤能立即热敷按摩吗','FT9']];
for(const [input,number] of cases)assert.deepEqual(ids(input),[number],input);
assert.deepEqual(ids('Hot yoga while dehydrated'),['FT8']);
assert.deepEqual(ids('Severe muscle pain with dark urine after training'),['FT2']);
});
test('neutral fitness topics and safer methods do not imply injury',()=>{
for(const input of ['joint pain','DOMS','soreness','marathon','beginner','deadlift','heel strike','massage','How do I start light deadlift training as a beginner?','I have mild DOMS and plan a gentle walk','I have a mild cold but no fever and want light exercise','Run in cool weather with water','I have a chronic strained back from years ago; is heat useful?','What is fasted cardio?'])assert.deepEqual(ids(input),[],input);
assert.deepEqual(ids('Do not push through joint pain during exercise.'),[]);
});
test('fitness matching is isolated and independent risks can coexist',()=>{
for(const s of [...scenarios,...digitalScenarios,...foodScenarios,...medicalScenarios])assert.deepEqual(ids(s.question),[],s.id);
assert.deepEqual(ids('A beginner plans heavy squats. It is hot weather with no water during this workout.'),['FT5','FT8']);
assert.deepEqual(ids('Shoulder pain while lifting heavy. I just pulled a muscle and want deep massage.'),['FT1','FT9']);
});
test('fitness content avoids universal clearance rules and unsafe emergency advice',()=>{
const byNumber=n=>fitnessScenarios.find(s=>s.number===n);
assert.match(byNumber('FT2').steps.join(' '),/Do not wait for dark urine/);
assert.match(byNumber('FT3').steps.join(' '),/Do not apply one fixed/);
assert.match(byNumber('FT5').steps.join(' '),/Do not use a fixed number of months/);
assert.match(byNumber('FT6').steps.join(' '),/not automatic/);
assert.match(byNumber('FT7').steps.join(' '),/not treat a ten-percent increase as automatically safe/);
assert.match(byNumber('FT8').steps.join(' '),/Do not give drinks to someone confused/);
const reply=getFitnessNormalReply();assert.equal(reply.steps.length,5);assert.doesNotMatch(JSON.stringify(reply),/verification code|cleaning product|prescribed dose/iu);reply.steps[0].title='changed';assert.notEqual(getFitnessNormalReply().steps[0].title,'changed');
});

test('complete five-category catalogue has 66 unique entries',()=>{const all=[...scenarios,...digitalScenarios,...foodScenarios,...medicalScenarios,...fitnessScenarios];assert.deepEqual([scenarios.length,digitalScenarios.length,foodScenarios.length,medicalScenarios.length,fitnessScenarios.length],[21,12,12,12,9]);assert.equal(all.length,66);assert.equal(new Set(all.map(s=>s.id)).size,66);});
