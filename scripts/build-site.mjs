import {copyFile,mkdir,writeFile} from 'node:fs/promises';
const assets=['index.html','styles.css','app.js','scenarios.js','rules.js','stream.js','normal-replies.js','logo/logoface.jpg'];
for(const file of assets){await mkdir(new URL('../dist/'+file.substring(0,file.lastIndexOf('/')+1),import.meta.url),{recursive:true});await copyFile(new URL('../'+file,import.meta.url),new URL('../dist/'+file,import.meta.url));}
await writeFile(new URL('../dist/.nojekyll',import.meta.url),'');
console.log('Website files prepared in dist/');
