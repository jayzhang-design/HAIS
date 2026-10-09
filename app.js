import {scenarios} from './scenarios.js';
import {detectRisks} from './rules.js';
import {streamReply} from './stream.js';
import {getNormalReply} from './normal-replies.js';
const $ = id => document.getElementById(id);
const chatIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11a9 9 0 0 1-9 9H3v-9a9 9 0 0 1 18 0Z"/></svg>';
const brandMark='<span class="assistant-monogram" aria-hidden="true">HAIS</span>';
const shield='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6Z"/><path d="m8 12 3 3 5-6"/></svg>';
const triangle='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 10 18H2Z"/><path d="M12 9v5m0 3v1"/></svg>';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let sequence=0;
const chats=[{id:++sequence,title:'Washing machine maintenance',messages:[],draft:''},{id:++sequence,title:'Living room clean-up',messages:[],draft:''},{id:++sequence,title:'Kitchen cleaning checklist',messages:[],draft:''}];
let currentId=chats[0].id;
let pending=null;
let confirmStage=false;
const current=()=>chats.find(c=>c.id===currentId);
function updateControls(){
const busy=Boolean(pending);
$('prompt').disabled=busy;
$('send').disabled=busy||!$('prompt').value.trim();
$('new-chat').disabled=busy;
document.querySelectorAll('#conversations button').forEach(b=>b.disabled=busy);
}
function renderNav(){
$('conversations').innerHTML=chats.map(c=>'<button data-chat="'+c.id+'" class="'+(c.id===currentId?'active':'')+'" '+(pending?'disabled':'')+' aria-current="'+(c.id===currentId?'page':'false')+'">'+chatIcon+'<span class="chat-name">'+esc(c.title)+'</span></button>').join('');
$('chat-title').textContent=current().title;
}
function assistant(content,id){return '<div data-message="'+id+'" class="assistant-message"><div class="assistant-icon">'+brandMark+'</div><div class="assistant-content"><div class="assistant-label"><strong>HAIS</strong><span>YOUR EVERYDAY ASSISTANT</span></div>'+content+'</div></div>';}
function renderResult(msg){
const risks=scenarios.filter(s=>msg.risks.includes(s.id));
const cautionOnly=risks.length>0&&risks.every(s=>s.severity==='caution');
let body='';
if(msg.state==='safe'||msg.state==='marked'){
const marked=msg.state==='marked';
body='<div class="status '+(marked?'flagged':'')+'">'+shield+'<div><strong>'+(marked?(cautionOnly?'Flagged response · Review the guidance':'Flagged response · Do not follow the hidden advice'):(cautionOnly?'Safer approach selected':'Safer approach applied'))+'</strong><span>'+(marked?(cautionOnly?'Unverified mixing instructions remain hidden. Review the guidance below.':'Hazardous instructions remain hidden. Review the safer alternative below.'):(cautionOnly?'Follow product labels and care instructions to confirm compatibility.':'Hazardous advice has been replaced with a safer alternative.'))+'</span></div></div>';
body+=risks.map(s=>'<div class="result-section"><div class="reply">'+(risks.length>1?'<h3>'+esc(s.title)+'</h3>':'')+(marked?'<p>'+esc(s.flagged)+'</p><div class="hidden-advice">'+(s.severity==='caution'?'[Unverified mixing instructions hidden]':'[Hazardous instructions hidden]')+'</div><p>'+esc(s.warning)+'</p><p><strong>Safer alternative</strong><br>'+esc(s.alternative)+'</p>':'<p>'+esc(s.intro)+'</p><ol>'+s.steps.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ol>')+'</div></div>').join('');
body+='<div class="result-tools"><button class="text-button" data-replay="'+msg.id+'">↻ Ask again</button>'+(marked?'<button class="text-button" data-safe="'+msg.id+'">Use the safer approach</button>':'')+'</div>';
}else if(msg.state==='thinking'){
body='<div class="thinking"><span class="dots">•••</span> Thinking through a safe answer…</div><div class="skeleton"><i></i><i></i><i></i></div>';
}else if(msg.state==='paused'){
body='<div class="skeleton"><i></i><i></i><i></i></div><div class="paused">'+shield+'Response paused · Please review the safety warning</div>';
}else{
const reply=msg.normalReply||getNormalReply(msg.question);
body='<div class="reply"><p>'+esc(reply.intro)+'</p>'+(reply.steps.length?'<ol class="principles-list">'+reply.steps.map(s=>'<li><strong>'+esc(s.title)+':</strong> '+esc(s.text)+'</li>').join('')+'</ol>':'')+'</div>';
}
return assistant(body,msg.id);
}
function renderMessages(){
const chat=current();
$('messages').innerHTML=chat.messages.length?chat.messages.map(m=>m.role==='user'?'<div class="user-message"><div class="bubble">'+esc(m.text)+'</div><div class="avatar"><img src="logo/logoface.jpg" alt="Your profile photo"></div></div>':renderResult(m)).join(''):'<div class="welcome"><div class="assistant-icon">'+brandMark+'</div><h1>How can I help you clean safely?</h1><p>Ask a question about everyday cleaning. HAIS helps you choose a safer approach.</p><div class="example-title">SUGGESTED QUESTIONS</div><div class="examples">'+scenarios.map(s=>'<button class="example" data-example="'+s.id+'"><strong>'+s.number+'. '+esc(s.title)+'</strong>'+esc(s.question)+'</button>').join('')+'</div></div>';
if(chat.messages.length) $('messages').scrollTop=$('messages').scrollHeight;
}
function selectChat(id){
if(pending)return;
current().draft=$('prompt').value;
currentId=id;
$('prompt').value=current().draft;
$('app').classList.remove('menu-open');
renderNav();renderMessages();updateControls();$('prompt').focus();
}
$('conversations').addEventListener('click',e=>{const b=e.target.closest('[data-chat]');if(b)selectChat(Number(b.dataset.chat));});
$('new-chat').addEventListener('click',()=>{if(pending)return;chats.unshift({id:++sequence,title:'New conversation',messages:[],draft:''});selectChat(chats[0].id);});
$('menu').addEventListener('click',()=>$('app').classList.toggle('menu-open'));
$('prompt').addEventListener('input',()=>{current().draft=$('prompt').value;updateControls();});
$('prompt').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();$('composer').requestSubmit();}});
$('messages').addEventListener('click',e=>{
const example=e.target.closest('[data-example]');
if(example&&!pending){$('prompt').value=scenarios.find(s=>s.id===example.dataset.example).question;current().draft=$('prompt').value;updateControls();$('prompt').focus();}
const replay=e.target.closest('[data-replay]');
if(replay&&!pending){const m=current().messages.find(m=>m.id===Number(replay.dataset.replay));$('prompt').value=m.question;updateControls();submit();}
const safe=e.target.closest('[data-safe]');
if(safe&&!pending){const msg=current().messages.find(m=>m.id===Number(safe.dataset.safe));msg.state='safe';pending={chatId:currentId,messageId:msg.id};renderNav();renderMessages();updateControls();animateReply(msg);}
});
function renderModal(risks){
const cautionOnly=risks.every(s=>s.severity==='caution');
$('warning-description').textContent=cautionOnly?'We paused this answer to check whether these products can be used together.':'We paused this answer because it contains a potentially hazardous cleaning recommendation.';
$('confirmation').textContent=cautionOnly?'This recommendation needs a product compatibility check. You can review a marked version with unverified mixing instructions hidden.':'The original response contains unsafe advice. Do not follow it. You can review a marked version with hazardous instructions hidden.';
confirmStage=false;
$('confirmation').hidden=true;
$('review').innerHTML='Review the flagged response <span>›</span>';
$('risk-cards').innerHTML=risks.map(s=>'<div class="risk-card '+(s.severity==='caution'?'compatibility':'')+'"><div class="risk-tag">'+triangle+(s.severity==='caution'?'PRODUCT COMPATIBILITY CHECK':'HAZARDOUS COMBINATION DETECTED')+'</div><div class="ingredients"><div><strong>'+esc(s.ingredients[0])+'</strong><small>'+esc(s.chemicals[0])+'</small></div><b>+</b><div><strong>'+esc(s.ingredients[1])+'</strong><small>'+esc(s.chemicals[1])+'</small></div></div>'+(s.condition?'<div class="condition">Condition: '+esc(s.condition)+'</div>':'')+'<div class="hazard"><span>×</span><strong>'+esc(s.hazard)+'</strong></div><p>'+esc(s.warning)+'</p></div>').join('');
$('alternative-text').textContent=risks.length===1?risks[0].alternative:'Choose a suitable product for each task and follow its label. The safer reply will address each flagged combination separately.';
$('warning').showModal();
$('warning').querySelector('.dialog-body').scrollTop=0;
$('accept').focus();
}
function submit(){
const text=$('prompt').value.trim();
if(!text||pending)return;
const chat=current();
const risks=detectRisks(text);
const msg={id:++sequence,role:'assistant',state:'thinking',risks:risks.map(s=>s.id),question:text,normalReply:getNormalReply()};
chat.messages.push({id:++sequence,role:'user',text},msg);
if(chat.title==='New conversation')chat.title=text.length>42?text.slice(0,42)+'…':text;
chat.draft='';$('prompt').value='';
pending={chatId:chat.id,messageId:msg.id};
renderNav();renderMessages();updateControls();
window.setTimeout(()=>{
msg.state=risks.length?'paused':'generic';
renderMessages();
if(risks.length)renderModal(risks);
else{animateReply(msg);}
},1500);
}
$('composer').addEventListener('submit',e=>{e.preventDefault();submit();});
function resolve(state){
if(!pending)return;
const chat=chats.find(c=>c.id===pending.chatId);
const msg=chat.messages.find(m=>m.id===pending.messageId);
msg.state=state;
$('warning').close();renderMessages();updateControls();animateReply(msg);
}
async function animateReply(msg){
const root=document.querySelector('[data-message="'+msg.id+'"]');
await streamReply(root,{scrollContainer:$('messages')});
pending=null;renderNav();updateControls();$('prompt').focus();
}
$('accept').addEventListener('click',()=>resolve('safe'));
$('review').addEventListener('click',()=>{
if(confirmStage){resolve('marked');return;}
confirmStage=true;$('confirmation').hidden=false;
$('review').innerHTML='I understand · View marked response <span>›</span>';
$('confirmation').scrollIntoView({block:'nearest'});$('review').focus();
});
$('warning').addEventListener('cancel',e=>e.preventDefault());
renderNav();renderMessages();updateControls();
