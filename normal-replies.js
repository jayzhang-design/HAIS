// Shared fallback requested for every input without a demo risk match.
const steps = [
{title:'Read the label',text:'Before use, read the product’s signal words, hazard statements, and directions. Pay attention to CAUTION, WARNING, or DANGER where present, and follow the stated precautions.'},
{title:'One-product principle',text:'Unless the label explicitly directs otherwise, do not mix different cleaning products. “Mixing makes it stronger” is usually false and can produce toxic gas or reduce effectiveness.'},
{title:'Ventilation and protection',text:'Use products in a well-ventilated area. Open a window or use an exhaust fan as directed. Wear gloves and eye protection when required by the label.'},
{title:'Emergency guidance',text:'If coughing, chest tightness, difficulty breathing, or eye irritation occurs after mixing, leave the area immediately and get fresh air. Do not delay leaving to open windows. For difficulty breathing or other serious symptoms, call your local emergency number immediately (U.S.: 911). For advice after exposure, contact your local poison center (U.S.: 1-800-222-1222).'},
{title:'One-line principle',text:'Clean first, then disinfect if needed: use one product at a time; do not mix or layer products. Follow the product label.'}
];
export function getNormalReply(){
return {topic:null,language:'en',intro:'Here are five principles for safer household cleaning:',steps:steps.map(step=>({...step}))};
}
