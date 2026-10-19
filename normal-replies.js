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

export function getDigitalNormalReply(){
return {topic:'digital',language:'en',intro:'Here are five principles for safer digital and financial decisions:',steps:[
{title:'Pause before acting',text:'Do not let urgency, threats or promised rewards pressure you into a payment or account change.'},
{title:'Verify independently',text:'Use an official app or a website or phone number you already trust. Do not rely on contact details supplied in a suspicious message.'},
{title:'Protect account access',text:'Keep passwords and one-time login or payment codes private. Do not give an unverified caller screen-sharing or remote access.'},
{title:'Check payment requests',text:'Do not pay to unlock task earnings or comply with a so-called safe-account transfer. Independently verify unusual payment demands.'},
{title:'Act quickly after exposure',text:'Contact your bank, payment provider or account provider promptly if money or access was exposed. Preserve evidence and use your local official fraud-reporting channel.'}
].map(s=>({...s}))};
}

export function getFoodNormalReply(){
return {topic:'food',language:'en',intro:'Here are five principles for safer food preparation:',steps:[
{title:'Keep clean',text:'Wash hands and clean food-contact equipment. Follow local guidance for produce and eggs; do not wash raw meat as a substitute for cooking.'},
{title:'Separate raw and ready-to-eat',text:'Keep raw meat, poultry, eggs and their juices away from food that will not be cooked. Use clean, separate utensils and boards.'},
{title:'Cook thoroughly',text:'Follow validated cooking instructions for the food. Use a food thermometer where appropriate rather than relying on color or texture alone.'},
{title:'Control storage temperature',text:'Refrigerate perishable leftovers promptly, thaw food safely, and follow local storage limits. Reheating cannot reliably rescue food stored unsafely.'},
{title:'Choose suitable food and equipment',text:'Use food from reliable sources and equipment approved for its intended use. Discard food with an unsafe storage history; seek medical advice if serious foodborne illness is suspected.'}
].map(step=>({...step}))};
}

export function getMedicalNormalReply(){
return {topic:'medical',language:'en',intro:'Here are five principles for safer medication decisions:',steps:[
{title:'Identify the exact products',text:'Check active ingredients, strength and release type. Include OTC medicines, supplements and alcohol when reviewing a combination.'},
{title:'Check before combining',text:'Ask a pharmacist or prescriber to assess your full medicine list, age, medical conditions and possible duplicate ingredients.'},
{title:'Follow your individual plan',text:'Do not start, stop, double, split or change a prescribed medicine on your own. General maximums or timing rules are not personalized instructions.'},
{title:'Keep the care team informed',text:'Tell clinicians about medicines before procedures, new diets or supplements. Follow any agreed monitoring and written instructions.'},
{title:'Recognize urgent problems',text:'Seek urgent medical help for breathing difficulty, inability to wake, severe allergic symptoms or other severe reactions. If overdose is possible, contact urgent medical services or a poison center without waiting for symptoms.'}
].map(step=>({...step}))};
}

export function getFitnessNormalReply(){
return {topic:'fitness',language:'en',intro:'Here are five principles for safer training and recovery:',steps:[
{title:'Respond to warning symptoms',text:'Stop painful exercise or activity causing dizziness or unusual weakness. Severe or worsening symptoms need appropriate medical assessment rather than motivational advice.'},
{title:'Progress gradually',text:'Match load, intensity and skill demands to your current ability and recovery. A fixed percentage or calendar deadline does not guarantee readiness.'},
{title:'Build technique and recovery',text:'Practice controlled movement, use suitable equipment and allow adequate recovery. Ask a qualified coach or clinician about unfamiliar lifts or persistent pain.'},
{title:'Plan for conditions and fueling',text:'Adjust sessions for illness, heat, fatigue and available food and fluids. Do not use hard exercise to sweat out a fever or force excessive water.'},
{title:'Recognize emergencies',text:'Seek urgent help for collapse, confusion, chest pain, severe breathlessness or major loss of function. Severe muscle pain or weakness after exertion also needs assessment; do not wait for dark urine.'}
].map(step=>({...step}))};
}
