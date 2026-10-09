import test from 'node:test';
import assert from 'node:assert/strict';
import {getNormalReply} from '../normal-replies.js';
test('unmatched questions share the same five principles',()=>{
const expected=getNormalReply('How do I clean my washer?');
for(const input of ['Clean the kitchen','洗衣机怎么清洁','How often?','Hello','Explain quantum entanglement'])assert.deepEqual(getNormalReply(input),expected);
assert.equal(expected.steps.length,5);
assert.deepEqual(expected.steps.map(s=>s.title),['Read the label','One-product principle','Ventilation and protection','Emergency guidance','One-line principle']);
});
test('emergency advice distinguishes serious symptoms and U.S. phone numbers',()=>{
const text=getNormalReply().steps[3].text;
assert.match(text,/difficulty breathing.*immediately/i);
assert.match(text,/U.S.: 911/);assert.match(text,/U.S.: 1-800-222-1222/);
assert.match(text,/Do not delay leaving/);
});
test('returned reply data is independent between messages',()=>{
const first=getNormalReply();first.steps[0].title='changed';assert.equal(getNormalReply().steps[0].title,'Read the label');
});
