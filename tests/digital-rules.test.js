import test from 'node:test';
import assert from 'node:assert/strict';
import {detectDigitalRisks,detectRisks} from '../rules.js';
import {digitalScenarios} from '../scenarios.js';
import {getDigitalNormalReply} from '../normal-replies.js';
const ids=input=>detectDigitalRisks(input).map(s=>s.number);
test('all twelve digital examples select their specific scenario',()=>{for(const s of digitalScenarios)assert.deepEqual(ids(s.question),[s.number],s.number+': '+s.question);});
test('Chinese fraud patterns and specific precedence',()=>{
const cases=[
['客服要我把短信验证码发给他','S1'],
['对方让我共享屏幕打开银行软件办理退款','S2'],
['短信里有链接让我登录更新信息','S3'],
['对方说账户冻结要我马上转账','S4'],
['家人的语音说出事了急用钱','S5'],
['刷单任务要我先付押金才能提现','S6'],
['网恋恋人推荐虚拟币投资平台','S7'],
['警察说涉嫌洗钱让我转账到安全账户','S8'],
['高薪兼职入职前要交培训费','S9'],
['中奖要付运费并填地址','S10'],
['贷款放款前要交解冻费','S11'],
['客服说退款需要下载会议软件并提供验证码','S12']
];
for(const [input,number] of cases)assert.deepEqual(ids(input),[number],input);
});
test('isolated topics and legitimate neutral requests do not imply fraud',()=>{
for(const input of ['verification code','bank app','investment','training fee','loan','Zoom meeting','I opened my bank app','How do I enable two-factor authentication?','My employer scheduled a Zoom meeting','I have an online romantic partner','What is a disclosed loan application fee?'])assert.deepEqual(ids(input),[],input);
assert.deepEqual(ids('Do not share verification codes.'),[]);
});
test('category rules remain separate and independent patterns can coexist',()=>{
assert.deepEqual(ids('Can I mix bleach and vinegar?'),[]);
for(const s of digitalScenarios)assert.deepEqual(detectRisks(s.question),[]);
assert.deepEqual(ids('A product review task requires a deposit. My online romantic partner wants a crypto investment.'),['S6','S7']);
});
test('digital fallback is independent and contains no cleaning content',()=>{
const a=getDigitalNormalReply();assert.equal(a.steps.length,5);assert.doesNotMatch(JSON.stringify(a),/bleach|cleaning|ventilation/iu);a.steps[0].title='changed';assert.notEqual(getDigitalNormalReply().steps[0].title,'changed');
});
