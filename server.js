import http from 'node:http';
import {readFile} from 'node:fs/promises';
import {networkInterfaces} from 'node:os';

const args=process.argv.slice(2);
const lan=args.includes('--lan');
const option=(name,fallback)=>{const i=args.indexOf(name);return i<0?fallback:args[i+1];};
const port=Number(option('--port',lan?'18473':'4173'));
const host=option('--host',lan?'0.0.0.0':'127.0.0.1');
if(!Number.isInteger(port)||port<1||port>65535)throw new Error('Invalid port');
const files=new Set(['index.html','styles.css','app.js','scenarios.js','rules.js','stream.js','normal-replies.js','logo/logoface.jpg']);
const mime={html:'text/html',css:'text/css',js:'text/javascript',jpg:'image/jpeg'};
const server=http.createServer(async(req,res)=>{
const name=new URL(req.url,'http://localhost').pathname.slice(1)||'index.html';
if(!files.has(name)){res.writeHead(404);res.end('Not found');return;}
try{const data=await readFile(new URL(name,import.meta.url));const type=mime[name.split('.').pop()];res.writeHead(200,{'Content-Type':type+(type.startsWith('text/')?'; charset=utf-8':''),'Cache-Control':'no-store'});res.end(data);}catch{res.writeHead(500);res.end('Unable to read file');}
});
server.on('error',error=>{
console.error(error.code==='EADDRINUSE'?'HAIS port '+port+' is already in use. Choose another port with --port; no existing service was stopped.':error.message);
process.exitCode=1;
});
server.listen(port,host,()=>{
console.log('HAIS: http://'+(host==='0.0.0.0'?'127.0.0.1':host)+':'+port);
if(lan)for(const addresses of Object.values(networkInterfaces()))for(const a of addresses||[])if(a.family==='IPv4'&&!a.internal)console.log('Network address: http://'+a.address+':'+port);
});
