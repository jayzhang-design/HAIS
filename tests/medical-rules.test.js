import test from 'node:test';
import assert from 'node:assert/strict';
import {detectMedicalRisks,detectFoodRisks,detectDigitalRisks} from '../rules.js';
import {medicalScenarios,foodScenarios,digitalScenarios,scenarios} from '../scenarios.js';
import {getMedicalNormalReply} from '../normal-replies.js';
const ids=input=>detectMedicalRisks(input).map(s=>s.number);
test('all twelve medication examples route correctly',()=>{for(const s of medicalScenarios)assert.deepEqual(ids(s.question),[s.number],s.number);});
test('Chinese medical aliases and paired conditions',()=>{
const cases=[
['含对乙酰氨基酚的感冒药和泰诺一起吃','M1'],
['头孢替坦能和啤酒一起用吗','M2'],
['苯乙肼能吃陈年奶酪吗','M3'],
['华法林期间突然大量吃菠菜','M4'],
['舍曲林和舒马曲坦一起服用','M5'],
['二甲双胍做增强CT用碘造影剂','M6'],
['赖诺普利可以加含钾盐吗','M7'],
['布洛芬加阿司匹林一起吃','M8'],
['2岁宝宝能吃右美沙芬止咳药吗','M9'],
['缓释片可以碾碎吃吗','M10'],
['羟考酮和阿普唑仑合用','M11'],
['螺内酯能用补钾产品吗','M12']];
for(const [input,number] of cases)assert.deepEqual(ids(input),[number],input);
assert.deepEqual(ids('Codeine and wine'),['M11']);
assert.deepEqual(ids('Cefoperazone and alcohol'),['M2']);
assert.deepEqual(ids('Cough medicine for a child under four years old'),['M9']);
});
test('neutral medicines, older child and product-specific safe statements avoid false alarms',()=>{
for(const input of ['acetaminophen','metformin','SSRI','triptan','spironolactone','potassium supplement','How do I take Tylenol Cold medicine?','Metformin for a CT scan without contrast','A cold medicine for my 6-year-old child','Cough medicine for a four-year-old child','Warfarin with consistent vitamin K intake','Lisinopril and a potassium-free salt substitute','Cefotetan and alcohol-free mouthwash','Split an extended-release tablet when the product label allows it','My doctor works in the ER on crush injuries'])assert.deepEqual(ids(input),[],input);
assert.deepEqual(ids('Do not combine oxycodone and alcohol.'),[]);
});
test('medical category is isolated and independent risks can coexist',()=>{
for(const s of [...scenarios,...digitalScenarios,...foodScenarios])assert.deepEqual(ids(s.question),[],s.id);
for(const s of medicalScenarios){assert.deepEqual(detectDigitalRisks(s.question),[],s.id);assert.deepEqual(detectFoodRisks(s.question),[],s.id);}
assert.deepEqual(ids('I take lisinopril and spironolactone and want a potassium supplement.'),['M7','M12']);
});
test('medical content avoids blanket cessation and generalized dosing',()=>{
assert.match(medicalScenarios.find(s=>s.number==='M5').warning,/not an automatic instruction to stop/);
assert.match(medicalScenarios.find(s=>s.number==='M6').warning,/Not every patient needs/);
assert.match(medicalScenarios.find(s=>s.number==='M2').warning,/one interval does not apply/);
assert.match(medicalScenarios.find(s=>s.number==='M1').alternative,/lower applicable label or prescriber limit/);
assert.match(medicalScenarios.find(s=>s.number==='M11').steps.join(' '),/Do not abruptly stop/);
const reply=getMedicalNormalReply();assert.equal(reply.steps.length,5);assert.doesNotMatch(JSON.stringify(reply),/cleaning|verification code|food preparation/iu);reply.steps[0].title='changed';assert.notEqual(getMedicalNormalReply().steps[0].title,'changed');
});
