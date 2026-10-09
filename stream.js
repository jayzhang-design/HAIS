// Reveals text nodes without interpreting partial HTML or exposing withheld advice.
export async function streamReply(root, {delay=22, chunk=2, scrollContainer}={}) {
const replies=[...root.querySelectorAll('.reply')];
const entries=[];
for(const reply of replies){
const walker=document.createTreeWalker(reply,NodeFilter.SHOW_TEXT);
while(walker.nextNode()){
const node=walker.currentNode;
if(!node.textContent.trim())continue;
const block=node.parentElement.closest('p,li,h3,.hidden-advice');
entries.push({node,text:Array.from(node.textContent),block,atomic:Boolean(node.parentElement.closest('.hidden-advice'))});
}
}
const blocks=new Set(entries.map(e=>e.block).filter(Boolean));
blocks.forEach(b=>b.classList.add('stream-pending'));
entries.forEach(e=>e.node.textContent='');
const tools=root.querySelector('.result-tools');
if(tools)tools.hidden=true;
root.classList.add('streaming');root.setAttribute('aria-busy','true');
const cursor=document.createElement('span');cursor.className='typing-cursor';cursor.setAttribute('aria-hidden','true');
const wait=()=>new Promise(resolve=>setTimeout(resolve,delay));
for(const entry of entries){
entry.block?.classList.remove('stream-pending');
const list=entry.block?.closest('ol');
if(list)list.classList.remove('stream-pending');
entry.node.parentNode.insertBefore(cursor,entry.node.nextSibling);
if(entry.atomic){entry.node.textContent=entry.text.join('');continue;}
for(let i=0;i<entry.text.length;i+=chunk){
const follow=scrollContainer&&scrollContainer.scrollHeight-scrollContainer.scrollTop-scrollContainer.clientHeight<110;
entry.node.appendData(entry.text.slice(i,i+chunk).join(''));
if(follow)scrollContainer.scrollTop=scrollContainer.scrollHeight;
await wait();
}
}
cursor.remove();blocks.forEach(b=>b.classList.remove('stream-pending'));
root.classList.remove('streaming');root.removeAttribute('aria-busy');
if(tools)tools.hidden=false;
}
