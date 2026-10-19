import {scenarios,digitalScenarios,foodScenarios,medicalScenarios,fitnessScenarios} from './scenarios.js';
import {detectRisks,detectDigitalRisks,detectFoodRisks,detectMedicalRisks,detectFitnessRisks} from './rules.js';
import {streamReply} from './stream.js';
import {getNormalReply,getDigitalNormalReply,getFoodNormalReply,getMedicalNormalReply,getFitnessNormalReply} from './normal-replies.js';
const categoryContent={chemical:{scenarios,detect:detectRisks,normalReply:getNormalReply},digital:{scenarios:digitalScenarios,detect:detectDigitalRisks,normalReply:getDigitalNormalReply},food:{scenarios:foodScenarios,detect:detectFoodRisks,normalReply:getFoodNormalReply},medical:{scenarios:medicalScenarios,detect:detectMedicalRisks,normalReply:getMedicalNormalReply},fitness:{scenarios:fitnessScenarios,detect:detectFitnessRisks,normalReply:getFitnessNormalReply}};
const allScenarios=[...scenarios,...digitalScenarios,...foodScenarios,...medicalScenarios,...fitnessScenarios];
const $ = id => document.getElementById(id);
const chatIcon='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 11a9 9 0 0 1-9 9H3v-9a9 9 0 0 1 18 0Z"/></svg>';
const brandMark='<span class="assistant-monogram" aria-hidden="true">HAIS</span>';
const shield='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 8 3v6c0 4-4 7-8 9-4-2-8-5-8-9V6Z"/><path d="m8 12 3 3 5-6"/></svg>';
const triangle='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><path d="m12 3 10 18H2Z"/><path d="M12 9v5m0 3v1"/></svg>';
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let sequence=0;
const categories=[
  {
    "key": "chemical",
    "title": "Chemical & Physical Safety",
    "available": true,
    "heading": "How can I help you handle chemicals safely?",
    "description": "Explore chemical combinations and everyday handling risks. HAIS helps you choose a safer approach.",
    "placeholder": "Ask about chemical and physical safety…"
  },
  {
    "key": "digital",
    "title": "Digital & Financial Safety",
    "available": true,
    "heading": "How can I help you avoid scams?",
    "description": "Explore suspicious messages, payment requests and account risks. HAIS helps you pause and verify before acting.",
    "placeholder": "Ask about scams, account security or suspicious payment requests…"
  },
  {
    "key": "food",
    "title": "Food & Biological Safety",
    "available": true,
    "heading": "How can I help you handle food safely?",
    "description": "Explore food preparation, cooking and storage risks. HAIS helps you make safer choices in the kitchen.",
    "placeholder": "Ask about food preparation, storage or biological safety…"
  },
  {
    "key": "medical",
    "title": "Medical & Pharmaceutical Safety",
    "available": true,
    "heading": "How can I help you use medicines safely?",
    "description": "Explore medicine combinations and common use risks. HAIS helps you identify questions to discuss with a healthcare professional.",
    "placeholder": "Ask about medicine combinations, labels or medication safety…"
  },
  {
    "key": "fitness",
    "title": "Fitness & Injury Safety",
    "available": true,
    "heading": "How can I help you exercise safely?",
    "description": "Explore training, recovery and injury risks. HAIS helps you recognize when to adjust, pause or seek support.",
    "placeholder": "Ask about training, recovery or injury safety…"
  }
];
const chats=categories.map(category=>({id:++sequence,title:category.title,category:category.key,messages:[],draft:''}));
let currentId=chats[0].id;
let pending=null;
let confirmStage=false;
const current=()=>chats.find(c=>c.id===currentId);
const currentCategory=()=>categories.find(c=>c.key===current().category);
function updateControls(){
const busy=Boolean(pending);
$('prompt').disabled=busy||!currentCategory().available;
$('prompt').placeholder=currentCategory().placeholder;
$('send').disabled=busy||!currentCategory().available||!$('prompt').value.trim();
document.querySelectorAll('#conversations button').forEach(b=>b.disabled=busy);
}
function renderNav(){
$('conversations').innerHTML=chats.map(c=>'<button data-chat="'+c.id+'" class="'+(c.id===currentId?'active':'')+'" '+(pending?'disabled':'')+' aria-current="'+(c.id===currentId?'page':'false')+'">'+chatIcon+'<span class="chat-name">'+esc(c.title)+'</span></button>').join('');
$('chat-title').textContent=current().title;
}
function assistant(content,id){return '<div data-message="'+id+'" class="assistant-message"><div class="assistant-icon">'+brandMark+'</div><div class="assistant-content"><div class="assistant-label"><strong>HAIS</strong><span>YOUR EVERYDAY ASSISTANT</span></div>'+content+'</div></div>';}
function renderResult(msg){
const risks=allScenarios.filter(s=>msg.risks.includes(s.id));
const digital=msg.category==='digital';
const food=msg.category==='food';
const medical=msg.category==='medical';
const fitness=msg.category==='fitness';
const cautionOnly=risks.length>0&&risks.every(s=>s.severity==='caution');
let body='';
if(msg.state==='safe'||msg.state==='marked'){
const marked=msg.state==='marked';
body='<div class="status '+(marked?'flagged':'')+'">'+shield+'<div><strong>'+(marked?(cautionOnly?'Flagged response · Review the guidance':'Flagged response · Do not follow the hidden advice'):(cautionOnly?'Safer approach selected':'Safer approach applied'))+'</strong><span>'+(marked?(fitness?'Unsafe training instructions remain hidden. Review the safer recovery and training guidance.':medical?'Unreviewed medication instructions remain hidden. Follow your healthcare professional’s guidance.':food?'Unsafe food-handling instructions remain hidden. Review the guidance below.':cautionOnly?'Unverified mixing instructions remain hidden. Review the guidance below.':'Hazardous instructions remain hidden. Review the safer alternative below.'):(digital?'Potentially unsafe actions have been replaced with verification and account-protection steps.':food?'Unsafe food-handling advice has been replaced with safer preparation and storage guidance.':medical?'Unreviewed medication advice has been replaced with guidance for professional review.':fitness?'Unsafe training advice has been replaced with safer training and recovery guidance.':cautionOnly?'Follow product labels and care instructions to confirm compatibility.':'Hazardous advice has been replaced with a safer alternative.'))+'</span></div></div>';
body+=risks.map(s=>'<div class="result-section"><div class="reply">'+(risks.length>1?'<h3>'+esc(s.title)+'</h3>':'')+(marked?'<p>'+esc(s.flagged)+'</p><div class="hidden-advice">'+(digital?'[Unsafe actions withheld]':food?'[Unsafe food-handling instructions withheld]':medical?'[Unreviewed medication instructions withheld]':fitness?'[Unsafe training instructions withheld]':s.severity==='caution'?'[Unverified mixing instructions hidden]':'[Hazardous instructions hidden]')+'</div><p>'+esc(s.warning)+'</p><p><strong>Safer alternative</strong><br>'+esc(s.alternative)+'</p>':'<p>'+esc(s.intro)+'</p><ol>'+s.steps.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ol>')+'</div></div>').join('');
body+='<div class="result-tools"><button class="text-button" data-replay="'+msg.id+'">↻ Ask again</button>'+(marked?'<button class="text-button" data-safe="'+msg.id+'">Use the safer approach</button>':'')+'</div>';
}else if(msg.state==='thinking'){
body='<div class="thinking"><span class="dots">•••</span> Thinking through a safe answer…</div><div class="skeleton"><i></i><i></i><i></i></div>';
}else if(msg.state==='paused'){
body='<div class="skeleton"><i></i><i></i><i></i></div><div class="paused">'+shield+'Response paused · Please review the safety warning</div>';
}else{
const reply=msg.normalReply||categoryContent[msg.category||'chemical'].normalReply();
body='<div class="reply"><p>'+esc(reply.intro)+'</p>'+(reply.steps.length?'<ol class="principles-list">'+reply.steps.map(s=>'<li><strong>'+esc(s.title)+':</strong> '+esc(s.text)+'</li>').join('')+'</ol>':'')+'</div>';
}
return assistant(body,msg.id);
}
function renderMessages(){
const chat=current();
const category=currentCategory();
const examples=category.available?'<div class="example-title">SUGGESTED QUESTIONS</div><div class="examples">'+categoryContent[category.key].scenarios.map((s,index)=>'<button class="example" data-example="'+s.id+'"><strong>'+(index+1)+'. '+esc(s.title)+'</strong>'+esc(s.question)+'</button>').join('')+'</div>':'<div class="category-empty" role="status">'+shield+'<strong>Guidance is being prepared</strong><p>Safety guidance for this category is being prepared. Please explore another category.</p></div>';
$('messages').innerHTML=chat.messages.length?chat.messages.map(m=>m.role==='user'?'<div class="user-message"><div class="bubble">'+esc(m.text)+'</div><div class="avatar"><img src="logo/logoface.jpg" alt="Your profile photo"></div></div>':renderResult(m)).join(''):'<div class="welcome"><div class="assistant-icon">'+brandMark+'</div><h1>'+esc(category.heading)+'</h1><p>'+esc(category.description)+'</p>'+examples+'</div>';
if(chat.messages.length)$('messages').scrollTop=$('messages').scrollHeight;
else $('messages').scrollTop=0;
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
$('menu').addEventListener('click',()=>$('app').classList.toggle('menu-open'));
$('prompt').addEventListener('input',()=>{current().draft=$('prompt').value;updateControls();});
$('prompt').addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey&&!e.isComposing){e.preventDefault();$('composer').requestSubmit();}});
$('messages').addEventListener('click',e=>{
const example=e.target.closest('[data-example]');
if(example&&!pending){$('prompt').value=allScenarios.find(s=>s.id===example.dataset.example).question;current().draft=$('prompt').value;updateControls();$('prompt').focus();}
const replay=e.target.closest('[data-replay]');
if(replay&&!pending){const m=current().messages.find(m=>m.id===Number(replay.dataset.replay));$('prompt').value=m.question;updateControls();submit();}
const safe=e.target.closest('[data-safe]');
if(safe&&!pending){const msg=current().messages.find(m=>m.id===Number(safe.dataset.safe));msg.state='safe';pending={chatId:currentId,messageId:msg.id};renderNav();renderMessages();updateControls();animateReply(msg);}
});
function renderModal(risks){
const digital=currentCategory().key==='digital';
const food=currentCategory().key==='food';
const medical=currentCategory().key==='medical';
const fitness=currentCategory().key==='fitness';
$('warning-title').textContent=digital?'Pause before you share or pay.':food?'Let’s keep your food preparation safe.':medical?'Check before combining medicines.':fitness?'Pause and check your training plan.':'Let’s keep your cleaning routine safe.';
$('warning').querySelector('.alternative strong').textContent=digital?'There’s a safer way to respond.':food?'There’s a safer way to handle food.':medical?'Review the plan with your healthcare professional.':fitness?'Choose a safer way to train and recover.':'There’s a safer way to clean.';
const cautionOnly=risks.every(s=>s.severity==='caution');
$('warning-description').textContent=digital?'We paused this answer because this request matches a potential fraud pattern. Verify independently before taking action.':food?'We paused this answer because this preparation or storage method may create a food-safety risk.':medical?'We paused this answer because a medicine combination or administration method needs a safety review. Do not change prescribed treatment on your own.':fitness?'We paused this answer because this training or recovery plan may increase injury or illness risk. Do not push through warning symptoms.':cautionOnly?'We paused this answer to check whether these products can be used together.':'We paused this answer because it contains a potentially hazardous cleaning recommendation.';
$('confirmation').textContent=digital?'This request may put your money or account at risk. You can review a marked response with unsafe actions withheld.':food?'The original recommendation may involve unsafe food handling. You can review a marked response with unsafe instructions withheld.':medical?'You can review a marked response with unreviewed medication instructions withheld. This is not an instruction to start, stop or change treatment.':fitness?'You can review a marked response with unsafe training and injury-management instructions withheld. Do not treat encouragement as clearance to continue.':cautionOnly?'This recommendation needs a product compatibility check. You can review a marked version with unverified mixing instructions hidden.':'The original response contains unsafe advice. Do not follow it. You can review a marked version with hazardous instructions hidden.';
confirmStage=false;
$('confirmation').hidden=true;
$('review').innerHTML='Review the flagged response <span>›</span>';
$('risk-cards').innerHTML=risks.map(s=>'<div class="risk-card '+(s.severity==='caution'?'compatibility':'')+'"><div class="risk-tag">'+triangle+(digital?'POTENTIAL FRAUD PATTERN DETECTED':food?(s.severity==='caution'?'FOOD CONTACT COMPATIBILITY CHECK':'FOOD SAFETY RISK DETECTED'):medical?(s.severity==='caution'?'CLINICAL REVIEW NEEDED':'MEDICATION SAFETY RISK DETECTED'):fitness?(s.severity==='caution'?'TRAINING PLAN REVIEW NEEDED':'FITNESS SAFETY RISK DETECTED'):s.severity==='caution'?'PRODUCT COMPATIBILITY CHECK':'HAZARDOUS COMBINATION DETECTED')+'</div><div class="ingredients"><div><strong>'+esc(s.ingredients[0])+'</strong><small>'+esc(s.chemicals[0])+'</small></div><b>+</b><div><strong>'+esc(s.ingredients[1])+'</strong><small>'+esc(s.chemicals[1])+'</small></div></div>'+(s.condition?'<div class="condition">Condition: '+esc(s.condition)+'</div>':'')+'<div class="hazard"><span>×</span><strong>'+esc(s.hazard)+'</strong></div><p>'+esc(s.warning)+'</p></div>').join('');
$('alternative-text').textContent=risks.length===1?risks[0].alternative:digital?'Pause sharing and payments. Verify each request independently through trusted official channels.':food?'Use safe preparation, storage and equipment choices. The safer reply will address each flagged food-handling concern.':medical?'Ask a pharmacist or prescriber to review the complete medicine list. Do not make unreviewed dose or treatment changes.':fitness?'Pause painful or unsafe activity and review load, recovery and conditions. Seek medical assessment for concerning symptoms.':'Choose a suitable product for each task and follow its label. The safer reply will address each flagged combination separately.';
$('warning').showModal();
$('warning').querySelector('.dialog-body').scrollTop=0;
$('accept').focus();
}
function submit(){
const text=$('prompt').value.trim();
if(!text||pending||!currentCategory().available)return;
const chat=current();
const risks=categoryContent[chat.category].detect(text);
const msg={id:++sequence,role:'assistant',state:'thinking',risks:risks.map(s=>s.id),question:text,category:chat.category,normalReply:categoryContent[chat.category].normalReply()};
chat.messages.push({id:++sequence,role:'user',text},msg);
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
