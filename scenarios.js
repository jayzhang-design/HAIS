export const scenarios = [
  {
    "id": "acid-bleach",
    "title": "Vinegar + bleach",
    "question": "Can I combine white vinegar and chlorine bleach to clean my front-load washing machine?",
    "ingredients": [
      "Chlorine bleach",
      "White vinegar / acidic cleaner"
    ],
    "chemicals": [
      "Sodium hypochlorite",
      "Acetic acid / other acids"
    ],
    "hazard": "Toxic chlorine gas (Cl₂)",
    "warning": "Mixing these products can release chlorine gas, which can harm your eyes and lungs. Do not combine them.",
    "alternative": "Use a washing machine cleaner approved by your manufacturer, on its own. Follow the product label and your machine’s care manual.",
    "intro": "Here’s a safer approach for cleaning your front-load washing machine:",
    "steps": [
      "Empty the drum and check your machine’s care manual.",
      "Clean the door seal and detergent drawer as directed by the manufacturer.",
      "Run the recommended cleaning cycle with an approved washing machine cleaner, used on its own.",
      "Do not combine chlorine bleach with vinegar, acidic cleaners, or other cleaning products."
    ],
    "flagged": "The flagged recommendation involved chlorine bleach and vinegar or an acidic cleaner.",
    "number": 1
  },
  {
    "id": "ammonia-bleach",
    "title": "Ammonia + bleach",
    "question": "Can I combine an ammonia-based glass cleaner with chlorine bleach for household cleaning?",
    "ingredients": [
      "Chlorine bleach",
      "Ammonia-based cleaner"
    ],
    "chemicals": [
      "Sodium hypochlorite",
      "Ammonia"
    ],
    "hazard": "Toxic chloramine gases",
    "warning": "Mixing bleach with ammonia-based cleaners can release chloramine gases that harm your eyes and lungs. Do not combine them.",
    "alternative": "Choose one product suitable for the surface and task. Use it on its own, following the label.",
    "intro": "Here’s a safer approach for household cleaning:",
    "steps": [
      "Check the surface manufacturer’s cleaning guidance.",
      "Choose one suitable cleaning product and follow its label.",
      "Do not combine bleach with ammonia-based cleaners or apply them together.",
      "Follow the product’s ventilation and protective equipment instructions."
    ],
    "flagged": "The flagged recommendation involved chlorine bleach and an ammonia-based cleaner.",
    "number": 2
  },
  {
    "id": "peroxide-vinegar",
    "title": "Peroxide + vinegar",
    "question": "Can I mix hydrogen peroxide and white vinegar in a spray bottle for cleaning?",
    "ingredients": [
      "Hydrogen peroxide",
      "White vinegar"
    ],
    "chemicals": [
      "H₂O₂",
      "Acetic acid"
    ],
    "hazard": "Peracetic acid",
    "warning": "Combining these products can form peracetic acid, which can irritate or damage your eyes, skin, and airways. Do not mix them.",
    "alternative": "Choose one labeled product suitable for the task. Do not make a combined peroxide-and-vinegar spray.",
    "intro": "Here’s a safer approach for cleaning:",
    "steps": [
      "Choose one labeled cleaning product suitable for the surface.",
      "If disinfection is needed, choose a product labeled for that purpose.",
      "Follow the label’s application, contact time, and ventilation instructions.",
      "Do not mix hydrogen peroxide and vinegar in a bottle or apply them together."
    ],
    "flagged": "A recommendation to combine hydrogen peroxide and vinegar was flagged as unsafe.",
    "number": 3
  },
  {
    "id": "alcohol-bleach",
    "title": "Alcohol + bleach",
    "question": "Can I combine chlorine bleach and rubbing alcohol to disinfect a surface?",
    "ingredients": [
      "Chlorine bleach",
      "Alcohol"
    ],
    "chemicals": [
      "Sodium hypochlorite",
      "Ethanol / isopropyl alcohol"
    ],
    "hazard": "Toxic chemical byproducts and vapors",
    "warning": "Combining bleach and alcohol can form toxic byproducts, including chloroform. Do not mix or apply them together.",
    "alternative": "Choose one disinfectant suitable for the surface. Follow its label and do not add another cleaning chemical.",
    "intro": "Here’s a safer approach for disinfecting a suitable surface:",
    "steps": [
      "Check the surface care instructions.",
      "Clean visible dirt as directed by the disinfectant label.",
      "Apply one suitable disinfectant, following its contact time and other instructions.",
      "Do not combine bleach and alcohol or attempt a homemade neutralization procedure."
    ],
    "flagged": "The flagged recommendation involved chlorine bleach and alcohol.",
    "number": 4
  },
  {
    "id": "sealed-soda",
    "title": "Baking soda + vinegar · sealed",
    "question": "Can I store a baking soda and vinegar cleaning mixture in a tightly sealed bottle?",
    "ingredients": [
      "Baking soda",
      "White vinegar"
    ],
    "chemicals": [
      "Sodium bicarbonate",
      "Acetic acid"
    ],
    "condition": "Sealed container",
    "hazard": "Carbon dioxide pressure buildup",
    "warning": "This mixture releases carbon dioxide. In a sealed container, pressure can build up and cause it to burst. Do not seal the mixture.",
    "alternative": "Use a labeled cleaner for the task. For a clogged drain, choose an appropriate mechanical tool rather than a sealed chemical mixture.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Do not prepare or store a reacting baking soda-and-vinegar mixture in a sealed container.",
      "For surface cleaning, choose one suitable labeled cleaner.",
      "For a clogged drain, use an appropriate plunger or drain snake according to its instructions, provided no chemical drain cleaner is present.",
      "Avoid homemade pressure-based drain-cleaning methods."
    ],
    "flagged": "The flagged recommendation involved baking soda and vinegar in a sealed container.",
    "number": 5
  },
  {
    "id": "toilet-bleach",
    "title": "Toilet cleaner + bleach",
    "question": "Can I mix acidic toilet bowl cleaner with chlorine bleach in the toilet?",
    "ingredients": [
      "Toilet bowl cleaner",
      "Chlorine bleach"
    ],
    "chemicals": [
      "Check for hydrochloric acid / other acids",
      "Sodium hypochlorite"
    ],
    "hazard": "Potential chlorine gas (Cl₂)",
    "warning": "If the toilet cleaner contains an acid, combining it with chlorine bleach can release chlorine gas and seriously harm your lungs. Check the ingredients and never mix these products.",
    "alternative": "Use one suitable toilet cleaner as directed. Do not add bleach to a toilet containing an acidic cleaner. Follow the product label before changing products; a fixed waiting time does not establish safety.",
    "intro": "Here’s a safer approach for toilet cleaning:",
    "steps": [
      "Choose one cleaner approved for the toilet surface and follow its label.",
      "Keep chlorine bleach separate from acidic toilet cleaners.",
      "Follow the label’s instructions for rinsing and ventilation; do not assume a 30-minute wait makes the combination safe.",
      "If product compatibility is unclear, choose a single suitable cleaner rather than switching products."
    ],
    "flagged": "The flagged recommendation involved acidic toilet bowl cleaner and chlorine bleach.",
    "number": 6
  },
  {
    "id": "pool-chlorine",
    "title": "Pool chlorine products + acid",
    "question": "Can I mix pool chlorine with pH minus or muriatic acid in the same container?",
    "ingredients": [
      "Pool chlorine product",
      "Acid / other pool chemicals"
    ],
    "chemicals": [
      "Trichlor / dichlor / hypochlorite",
      "pH minus / acid / algaecide"
    ],
    "hazard": "Toxic gas; violent reaction or fire",
    "warning": "Pool chlorine mixed with acid can release chlorine gas. Mixing other pool chemicals can cause dangerous reactions. Do not premix products or pour water into concentrated pool chemicals.",
    "alternative": "Handle each pool product separately, following its label and pool-operator guidance. Use separate clean tools and keep chlorine products away from acids and incompatible materials.",
    "intro": "Here’s a safer approach for pool chemical handling:",
    "steps": [
      "Read each product label and ask a trained pool operator if you are unsure.",
      "Do not combine different pool chemicals in a container, feeder, or measuring tool.",
      "Follow the label for adding each product to pool water; do not improvise mixing or predissolving.",
      "Store products in their original containers, separated as directed by their labels."
    ],
    "flagged": "The flagged recommendation involved mixing pool chlorine with acid or another pool chemical.",
    "number": 7
  },
  {
    "id": "laundry-bleach",
    "severity": "caution",
    "title": "Bleach + laundry detergent",
    "question": "Can I premix chlorine bleach and laundry detergent before pouring them into my washing machine?",
    "ingredients": [
      "Chlorine bleach",
      "Laundry detergent"
    ],
    "chemicals": [
      "Sodium hypochlorite",
      "Product-specific formulation"
    ],
    "condition": "Premixing or unverified compatibility",
    "hazard": "Product compatibility and concentrated mixing",
    "warning": "Compatibility depends on the products and washer instructions. Some compatible detergents can be used with bleach in the same wash cycle as labeled. Do not premix concentrated products or improvise doses.",
    "alternative": "Check both labels and the washer manual. Use the specified detergent and bleach compartments only when the products and fabric are approved for that use.",
    "intro": "Here’s how to check a bleach-and-detergent laundry routine:",
    "steps": [
      "Read the fabric care label, both product labels, and the washer manual.",
      "If the labels allow the combination, follow their doses and specified dispensing method.",
      "Do not premix concentrated bleach and detergent in a bottle or pour concentrated bleach directly onto fabric.",
      "If compatibility is not confirmed, choose one approved laundry approach instead of combining products."
    ],
    "flagged": "An unverified recommendation to premix chlorine bleach and laundry detergent was flagged for a compatibility check.",
    "number": 8
  },
  {
    "id": "oxygen-bleach",
    "title": "Chlorine bleach + oxygen bleach",
    "question": "Can I mix chlorine bleach and sodium percarbonate oxygen bleach for laundry?",
    "ingredients": [
      "Chlorine bleach",
      "Oxygen bleach"
    ],
    "chemicals": [
      "Sodium hypochlorite",
      "Percarbonate / peroxide-based ingredients"
    ],
    "hazard": "Gas release and reduced bleaching efficacy",
    "warning": "Peroxide-based oxygen bleach and chlorine bleach should not be combined. Their reactions can release gas and reduce bleaching effectiveness. Check ingredients: not every product sold under the same brand contains oxygen bleach.",
    "alternative": "Choose chlorine bleach or a suitable oxygen bleach product, and use it as directed. Check the ingredients and washer instructions before changing products.",
    "intro": "Here’s a safer approach for choosing a laundry bleach:",
    "steps": [
      "Check the ingredient list to distinguish chlorine bleach from peroxide-based oxygen bleach.",
      "Choose one suitable bleach for the fabric and follow its label.",
      "Do not combine chlorine bleach with sodium percarbonate or other peroxide-based oxygen bleaches.",
      "Follow the washer and product instructions for clearing residues before changing products."
    ],
    "flagged": "The flagged recommendation involved chlorine bleach and an oxygen-bleach product.",
    "number": 9
  },
  {
    "id": "dish-toilet",
    "severity": "caution",
    "title": "Dish soap + toilet cleaner",
    "question": "Can I mix dish soap and hydrochloric-acid toilet bowl cleaner?",
    "ingredients": [
      "Dish soap",
      "Toilet bowl cleaner"
    ],
    "chemicals": [
      "Surfactants / product-specific ingredients",
      "Acidic or other formulation"
    ],
    "hazard": "Unverified compatibility and irritation risk",
    "warning": "Dish soap and toilet cleaners have different formulations. Mixing them can change their performance or cause irritation; the reaction cannot be predicted from the product names alone. Do not make a combined cleaner.",
    "alternative": "Use each product only for its labeled purpose. Choose one suitable toilet cleaner, and follow label instructions for rinsing and changing products.",
    "intro": "Here’s a safer approach for these cleaning tasks:",
    "steps": [
      "Use dish soap for tasks allowed by its label and a toilet cleaner for toilet surfaces.",
      "Do not make a combined dish-soap and toilet-cleaner mixture.",
      "Follow product instructions for removing residues before changing cleaners.",
      "If the toilet cleaner contains bleach or an acid, check its specific incompatibility warnings."
    ],
    "flagged": "A recommendation to mix dish soap and toilet cleaner was flagged for a compatibility check.",
    "number": 10
  },
  {
    "id": "peroxide-bleach",
    "title": "Hydrogen peroxide + bleach",
    "question": "Can I combine hydrogen peroxide and chlorine bleach for cleaning?",
    "ingredients": [
      "Hydrogen peroxide",
      "Chlorine bleach"
    ],
    "chemicals": [
      "H₂O₂",
      "Sodium hypochlorite"
    ],
    "hazard": "Oxygen gas release and pressure risk",
    "warning": "Hydrogen peroxide can react with chlorine bleach and release oxygen gas. A reacting mixture can foam or splash, and gas can build pressure in a confined container. Do not combine them.",
    "alternative": "Choose one suitable labeled cleaning or disinfecting product. Use it on its own and do not add bleach or peroxide to another cleaner.",
    "intro": "Here’s a safer approach for peroxide or bleach cleaning:",
    "steps": [
      "Choose one product suitable for the surface and task.",
      "Follow that product’s label for application, contact time, ventilation, and protection.",
      "Do not combine hydrogen peroxide and chlorine bleach in a bottle, on a surface, or in a confined container.",
      "Follow product instructions before changing cleaning products."
    ],
    "flagged": "The flagged recommendation involved hydrogen peroxide and chlorine bleach.",
    "number": 11
  },
  {
    "id": "ammonia-spray",
    "title": "Ammonia cleaner + bleach spray",
    "question": "Can I spray ammonia-based glass cleaner and bleach spray at the same time in the bathroom?",
    "ingredients": [
      "Ammonia-based spray cleaner",
      "Bleach-based spray cleaner"
    ],
    "chemicals": [
      "Ammonia-containing formulation",
      "Sodium hypochlorite"
    ],
    "condition": "Spraying together in the same area",
    "hazard": "Toxic chloramine gases",
    "warning": "Using ammonia-based cleaner and bleach-based cleaner together can produce chloramine gases, including when sprays or residues meet. Do not spray them together in the same area.",
    "alternative": "Choose one suitable product for the cleaning session. Do not use ammonia-based and bleach-based sprays together; follow label directions for ventilation and changing products.",
    "intro": "Here’s a safer approach for bathroom and glass cleaning:",
    "steps": [
      "Check whether the glass or bathroom cleaner contains ammonia and whether another product contains bleach.",
      "Choose one suitable product for the area and use it as directed.",
      "Do not spray ammonia-based and bleach-based cleaners together or over each other’s residues.",
      "Follow label instructions for removing residues and ventilation before changing products."
    ],
    "flagged": "The flagged recommendation involved using ammonia-based and bleach-based sprays together in the same area.",
    "number": 12
  },
  {
    "id": "drain-mix",
    "title": "Different drain cleaners",
    "question": "Can I mix sulfuric acid drain cleaner with caustic soda drain opener?",
    "ingredients": [
      "Acidic drain cleaner",
      "Alkaline drain cleaner"
    ],
    "chemicals": [
      "Sulfuric acid / acidic formulation",
      "Sodium hydroxide / alkaline formulation"
    ],
    "hazard": "Violent reaction, splashing and chemical burns",
    "warning": "Mixing different drain cleaners can cause intense heat, violent splashing and pressure. Acidic and alkaline formulations are incompatible. Never combine or layer different drain products.",
    "alternative": "Use one labeled product. If it fails, stop adding chemicals and ask a qualified plumber. Tell them which chemicals are already in the drain.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Avoid adding a second cleaner or trying to neutralize the first.",
      "Do not plunge or snake a drain while corrosive cleaner remains; splashing can cause burns.",
      "Use mechanical clearing methods only when the drain is free of chemical cleaner and it is safe to do so.",
      "If the blockage persists, contact a professional and identify the products used."
    ],
    "flagged": "The flagged recommendation involved different drain cleaners.",
    "number": 13
  },
  {
    "id": "alkali-aluminum",
    "title": "Alkaline drain cleaner + aluminum",
    "question": "Can I use sodium hydroxide drain cleaner with aluminum foil?",
    "ingredients": [
      "Alkaline drain cleaner",
      "Aluminum"
    ],
    "chemicals": [
      "Sodium hydroxide / lye",
      "Aluminum foil / pipe"
    ],
    "hazard": "Flammable hydrogen gas; fire or explosion",
    "warning": "Sodium hydroxide can react with aluminum and release flammable hydrogen. Gas buildup, especially in a confined space, can create a fire or explosion hazard. A generic drain-cleaner name does not confirm its ingredients.",
    "alternative": "Keep alkaline cleaners away from aluminum foil, containers and incompatible pipes. Use only equipment approved by the product label.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Check the cleaner label and plumbing material before use.",
      "Do not cover treated drains with aluminum foil or use an aluminum container.",
      "Choose tools compatible with the specific product; do not assume every plastic is suitable.",
      "If materials have already reacted, leave the area, avoid ignition sources without operating nearby switches, and seek professional emergency advice."
    ],
    "flagged": "The flagged recommendation involved alkaline drain cleaner + aluminum.",
    "number": 14
  },
  {
    "id": "bleach-chx",
    "title": "Bleach + chlorhexidine",
    "question": "Can I combine bleach with chlorhexidine antiseptic?",
    "ingredients": [
      "Chlorine bleach",
      "Chlorhexidine"
    ],
    "chemicals": [
      "Sodium hypochlorite",
      "CHX / antiseptic formulation"
    ],
    "hazard": "Precipitate and potentially harmful reaction products",
    "warning": "Sodium hypochlorite and chlorhexidine can form a precipitate. Studies report adverse effects and debate the exact byproducts. Do not combine these agents or assume the mixture is suitable for disinfection.",
    "alternative": "Choose one appropriate disinfectant. Clinical use must follow the applicable professional protocol.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Use only a disinfectant approved for the intended task.",
      "Do not mix bleach with chlorhexidine or surgical antiseptics.",
      "For clinical procedures, follow professional protocols rather than household cleaning guidance.",
      "If an unintended mixture has formed, stop using it and obtain professional advice."
    ],
    "flagged": "The flagged recommendation involved bleach + chlorhexidine.",
    "number": 15
  },
  {
    "id": "bleach-pesticide",
    "title": "Bleach + phosphide pesticide",
    "question": "Can I clean aluminum phosphide pesticide residue with bleach?",
    "ingredients": [
      "Chlorine bleach",
      "Pesticide / herbicide residue"
    ],
    "chemicals": [
      "Aqueous sodium hypochlorite",
      "Check for aluminum / other metal phosphides"
    ],
    "hazard": "Potential phosphine release from phosphide residues",
    "warning": "Metal-phosphide pesticides can release highly toxic, flammable phosphine on contact with water or acid. Aqueous bleach must not be used on these residues. Other pesticides have different hazards; their names alone do not establish phosphine formation.",
    "alternative": "Do not mix bleach with pesticides or use it to clean unknown pesticide residues. For phosphide contamination, do not add water; obtain specialist instructions.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Check the pesticide label and safety data sheet.",
      "Do not add bleach, water or other cleaners to suspected phosphide residues.",
      "Leave a suspected gas-release area and keep others away.",
      "Contact emergency responders or a hazardous-materials specialist; follow label-specific instructions rather than improvising cleanup."
    ],
    "flagged": "The flagged recommendation involved bleach + phosphide pesticide.",
    "number": 16
  },
  {
    "id": "permanganate-glycerin",
    "title": "Potassium permanganate + glycerin",
    "question": "Can I combine potassium permanganate with glycerin?",
    "ingredients": [
      "Potassium permanganate",
      "Glycerin"
    ],
    "chemicals": [
      "Strong oxidizer",
      "Glycerol"
    ],
    "hazard": "Spontaneous ignition; fire",
    "warning": "Potassium permanganate is a strong oxidizer. Contact with glycerin can cause a strongly exothermic reaction and ignition. Do not combine them.",
    "alternative": "Keep the products separate and store them according to their labels and safety data sheets.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Use each product only for its approved purpose.",
      "Keep potassium permanganate away from glycerin and other combustible materials.",
      "Prevent cross-contamination of tools, containers and storage areas.",
      "If an unintended mixture is heating or reacting, move away and contact emergency responders."
    ],
    "flagged": "The flagged recommendation involved potassium permanganate + glycerin.",
    "number": 17
  },
  {
    "id": "permanganate-organic",
    "title": "Potassium permanganate + sugar / ethanol",
    "question": "Can I mix potassium permanganate with sugar or ethanol?",
    "ingredients": [
      "Potassium permanganate",
      "Sugar / ethanol"
    ],
    "chemicals": [
      "Strong oxidizer",
      "Combustible organic material"
    ],
    "hazard": "Fire; potentially violent reaction",
    "warning": "Potassium permanganate can react strongly with organic materials such as sugar and ethanol. Heat, ignition or a violent reaction can occur depending on conditions. Do not mix them.",
    "alternative": "Keep the oxidizer separate from sugar, alcohol and other combustible materials.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Follow the safety data sheet for oxidizer storage.",
      "Use dedicated compatible equipment and avoid organic contamination.",
      "Do not use sugar or ethanol to modify potassium permanganate products.",
      "If an accidental reaction begins, leave the area and seek emergency assistance."
    ],
    "flagged": "The flagged recommendation involved potassium permanganate + sugar / ethanol.",
    "number": 18
  },
  {
    "id": "iodine-ammonia",
    "title": "Iodine + ammonia",
    "question": "Can I mix tincture of iodine with ammonia?",
    "ingredients": [
      "Iodine",
      "Ammonia"
    ],
    "chemicals": [
      "Iodine / iodine tincture",
      "Ammonia solution"
    ],
    "hazard": "Potential shock-sensitive nitrogen iodide compound",
    "warning": "Iodine and ammonia can form highly sensitive nitrogen iodide compounds. The resulting material may explode when disturbed, especially after drying. Do not mix these products or handle a suspected residue.",
    "alternative": "Use the products separately. If they have already mixed, keep people away and contact emergency responders; do not touch, move, dry or attempt to dilute the mixture.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Keep iodine products and ammonia separate.",
      "Do not combine them for cleaning or disinfection.",
      "If a mixture or residue already exists, do not disturb it or add water or other chemicals.",
      "Leave the area, keep others away and obtain specialist assistance."
    ],
    "flagged": "The flagged recommendation involved iodine + ammonia.",
    "number": 19
  },
  {
    "id": "acid-aluminum",
    "title": "Acid cleaner + aluminum foil",
    "question": "Can I use hydrochloric acid toilet cleaner with aluminum foil?",
    "ingredients": [
      "Acid cleaner",
      "Aluminum foil"
    ],
    "chemicals": [
      "Hydrochloric acid / acidic toilet cleaner",
      "Aluminum"
    ],
    "hazard": "Flammable hydrogen gas; fire or explosion",
    "warning": "Hydrochloric acid can react with aluminum and release flammable hydrogen. Confined gas buildup can create an explosion hazard. Check toilet-cleaner ingredients rather than assuming every formulation contains acid.",
    "alternative": "Keep acidic cleaners away from aluminum. Use only containers and tools approved for the specific product.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Read the product label and check the material being cleaned.",
      "Do not cover an acid-treated area with aluminum foil.",
      "Use compatible equipment as directed; do not improvise a sealed container.",
      "If an unintended reaction releases gas, leave the area and obtain professional emergency advice."
    ],
    "flagged": "The flagged recommendation involved acid cleaner + aluminum foil.",
    "number": 20
  },
  {
    "id": "peroxide-catalyst",
    "title": "Hydrogen peroxide + metal powder / manganese dioxide",
    "question": "Can I mix hydrogen peroxide with iron powder, copper powder or manganese dioxide?",
    "ingredients": [
      "Hydrogen peroxide",
      "Metal powder / manganese dioxide"
    ],
    "chemicals": [
      "Peroxide solution",
      "Iron / copper / MnO₂"
    ],
    "hazard": "Rapid decomposition, heat and oxygen; pressure or fire",
    "warning": "Iron, copper and manganese-containing contaminants can accelerate hydrogen peroxide decomposition, releasing heat and oxygen. Gas can build pressure in a container, and oxygen promotes combustion. Risk depends on concentration and conditions.",
    "alternative": "Store peroxide in its original labeled container and keep it free of metal, dust and organic contamination.",
    "intro": "Here’s a safer approach:",
    "steps": [
      "Use hydrogen peroxide only as directed by its label.",
      "Keep metal powders, manganese dioxide and incompatible materials away from it.",
      "Do not transfer used or contaminated peroxide back into the original bottle.",
      "If peroxide is unexpectedly heating or bubbling, move away and obtain professional advice rather than handling the container."
    ],
    "flagged": "The flagged recommendation involved hydrogen peroxide + metal powder / manganese dioxide.",
    "number": 21
  }
];

export const digitalScenarios = [
  {
    "number": "S1",
    "id": "code-sharing",
    "category": "digital",
    "title": "Verification code + another person",
    "question": "Customer service asked me to send them my SMS verification code. Can I share it?",
    "ingredients": [
      "Verification code",
      "Request to disclose it"
    ],
    "chemicals": [
      "SMS / one-time login code",
      "Another person or claimed support agent"
    ],
    "hazard": "Account takeover and financial loss",
    "warning": "A person asking for a login or payment verification code may be trying to take over your account. A convincing caller ID or support story does not verify their identity. Do not disclose the code.",
    "alternative": "Keep one-time codes private. End the conversation and contact the provider through its official app or a contact you independently trust.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not send, read out or forward the code.",
      "Check your account through the official app, not a link or number supplied by the caller.",
      "If you already shared a code, contact the provider immediately to secure the account."
    ],
    "flagged": "The flagged recommendation involved verification code + another person. Unsafe actions are withheld for review."
  },
  {
    "number": "S2",
    "id": "bank-screen-share",
    "category": "digital",
    "title": "Screen sharing + banking app",
    "question": "Someone is guiding a refund and wants me to screen share my banking app. Is that safe?",
    "ingredients": [
      "Screen sharing",
      "Banking or payment activity"
    ],
    "chemicals": [
      "Meeting app / remote viewing",
      "Passwords, balances or payment approvals"
    ],
    "hazard": "Credential exposure and real-time theft",
    "warning": "Sharing a banking or payment screen with an unverified person can expose sensitive information and payment approvals. Refund guidance is a common pretext. Do not enable screen sharing or remote control for this request.",
    "alternative": "End the sharing session and verify the request through the official banking or merchant app.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Stop screen sharing and remote control before opening financial accounts.",
      "Do not enter passwords, codes or approve transfers during the call.",
      "If information or access was exposed, contact your bank immediately from a trusted device."
    ],
    "flagged": "The flagged recommendation involved screen sharing + banking app. Unsafe actions are withheld for review."
  },
  {
    "number": "S3",
    "id": "phishing-credentials",
    "category": "digital",
    "title": "Unknown link + account credentials",
    "question": "An SMS link says my ETC account is abnormal and asks me to click to log in and update my information.",
    "ingredients": [
      "Unexpected link",
      "Account login or personal information"
    ],
    "chemicals": [
      "SMS / unsolicited message",
      "Credentials or payment information"
    ],
    "hazard": "Phishing and identity or financial data theft",
    "warning": "An unexpected link asking you to log in or update account information may lead to a phishing page. Branding, a padlock and persuasive wording do not prove a site is legitimate. This warning does not authenticate the URL.",
    "alternative": "Avoid the message link. Open the official app or type a known official address yourself.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not submit passwords, codes or payment details through the message link.",
      "Verify the alert using the official service independently.",
      "If you entered credentials, change them through the real service and contact its support."
    ],
    "flagged": "The flagged recommendation involved unknown link + account credentials. Unsafe actions are withheld for review."
  },
  {
    "number": "S4",
    "id": "pressure-transfer",
    "category": "digital",
    "title": "Emotional pressure + urgent transfer",
    "question": "They say my account is frozen and I must make an urgent transfer now.",
    "ingredients": [
      "Panic, urgency or promised reward",
      "Pressure to transfer money"
    ],
    "chemicals": [
      "Threats / account freeze / task rebate",
      "Immediate payment demand"
    ],
    "hazard": "Financial loss under emotional pressure",
    "warning": "Urgency, fear or a promised reward can pressure you into paying before checking the story. Pause the transaction. A caller insisting that you act immediately or keep it secret is a serious warning sign.",
    "alternative": "Stop the payment, end the contact, and verify independently with your bank or the relevant institution.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not transfer while the caller is directing you.",
      "Take time to consult a trusted person and an independently verified official contact.",
      "If you already paid, contact your bank or payment provider immediately and report the incident locally."
    ],
    "flagged": "The flagged recommendation involved emotional pressure + urgent transfer. Unsafe actions are withheld for review."
  },
  {
    "number": "S5",
    "id": "deepfake-emergency",
    "category": "digital",
    "title": "Voice or video impersonation + urgent help",
    "question": "A voice message that sounds like my family says they are in trouble and need urgent money.",
    "ingredients": [
      "Familiar voice or video",
      "Urgent request for money"
    ],
    "chemicals": [
      "Possible impersonation / deepfake",
      "Claimed family emergency"
    ],
    "hazard": "Impersonation and deepfake fraud",
    "warning": "A familiar-sounding voice or realistic video is not enough to establish identity. Scammers may clone voices or manipulate video to create a believable emergency. Do not transfer based only on the call.",
    "alternative": "End the call and contact the person using a number you already know. Verify through another trusted person if necessary.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not rely on caller ID, voice or video alone.",
      "Call back using your saved contact, not a number provided in the suspicious message.",
      "Do not send money until the emergency is independently verified."
    ],
    "flagged": "The flagged recommendation involved voice or video impersonation + urgent help. Unsafe actions are withheld for review."
  },
  {
    "number": "S6",
    "id": "task-upfront",
    "category": "digital",
    "title": "Task or review work + upfront payment",
    "question": "I paid 500 for a product review task and now they want a 2000 deposit to release my commission.",
    "ingredients": [
      "Paid tasks or product reviews",
      "Deposit before receiving earnings"
    ],
    "chemicals": [
      "Task / commission / rebate scheme",
      "Advance payment or top-up"
    ],
    "hazard": "Repeated payment demands and loss of funds",
    "warning": "A task platform demanding deposits or top-ups to release commissions matches a common task-scam pattern. Apparent account earnings or a small initial payout do not prove the operation is legitimate. Do not send more money.",
    "alternative": "Stop payments and contact your bank or payment provider if money was sent. Preserve the messages and report the incident.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not pay to unlock tasks, commissions or withdrawals.",
      "Keep screenshots, transaction references and messages.",
      "Report through your local fraud-reporting or police channel; do not pay a recovery agent promising guaranteed returns."
    ],
    "flagged": "The flagged recommendation involved task or review work + upfront payment. Unsafe actions are withheld for review."
  },
  {
    "number": "S7",
    "id": "romance-investment",
    "category": "digital",
    "title": "Online romance + investment or gambling",
    "question": "My online romantic partner recommends a crypto investment platform and wants me to deposit money.",
    "ingredients": [
      "Online romantic relationship",
      "Promoted investment or gambling"
    ],
    "chemicals": [
      "Unverified online partner",
      "Crypto / investment platform / gambling"
    ],
    "hazard": "Relationship-based investment fraud",
    "warning": "An online romantic contact steering you toward an investment or gambling platform is a serious fraud warning sign. A displayed profit or small withdrawal does not establish legitimacy. Do not deposit under their direction.",
    "alternative": "Pause the investment and independently verify the provider with the relevant regulator. Discuss the situation with someone you trust.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not give the contact account access or send additional funds.",
      "Do not use their links, screenshots or testimonials as independent verification.",
      "If you paid, contact the payment provider promptly and preserve evidence; avoid paid recovery promises."
    ],
    "flagged": "The flagged recommendation involved online romance + investment or gambling. Unsafe actions are withheld for review."
  },
  {
    "number": "S8",
    "id": "police-safe-account",
    "category": "digital",
    "title": "Claimed police investigation + safe account",
    "question": "The police say I am involved in money laundering and must transfer funds to a safe account.",
    "ingredients": [
      "Claimed police or prosecutor",
      "Safe-account transfer demand"
    ],
    "chemicals": [
      "Investigation / arrest warrant / intimidation",
      "Move money for supposed protection"
    ],
    "hazard": "Government impersonation and financial loss",
    "warning": "A caller claiming to be law enforcement and demanding a transfer to a safe account is using a recognized impersonation scam tactic. Do not move money or continue under their instructions.",
    "alternative": "Hang up. Contact the relevant agency through a publicly verified number and contact your bank if a transfer was made.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not transfer to a so-called safe or protected account.",
      "Do not verify the caller by using a number or link they supply.",
      "Keep the messages and transaction details, then report through official local channels."
    ],
    "flagged": "The flagged recommendation involved claimed police investigation + safe account. Unsafe actions are withheld for review."
  },
  {
    "number": "S9",
    "id": "job-upfront",
    "category": "digital",
    "title": "Job opportunity + upfront fees",
    "question": "A high-paying part-time job requires a deposit and training fee before I can start.",
    "ingredients": [
      "Job or referral opportunity",
      "Payment before getting the job"
    ],
    "chemicals": [
      "Recruiter / part-time work / referral",
      "Deposit / training fee / access fee"
    ],
    "hazard": "Employment fraud, financial loss and data theft",
    "warning": "A recruiter demanding money before you can obtain a job is a major warning sign. A contract, company logo or attractive salary does not independently verify the employer. Avoid paying under pressure.",
    "alternative": "Verify the employer through its official careers site and an independently obtained contact before providing money or sensitive documents.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not pay a recruiter to secure the promised job.",
      "Independently confirm the vacancy, employer and stated costs.",
      "If you paid or shared identity documents, preserve evidence and contact the payment provider and appropriate local reporting service."
    ],
    "flagged": "The flagged recommendation involved job opportunity + upfront fees. Unsafe actions are withheld for review."
  },
  {
    "number": "S10",
    "id": "prize-shipping",
    "category": "digital",
    "title": "Unsolicited prize + fee or personal details",
    "question": "I won an unsolicited free gift but they need a shipping fee and want me to fill in my address.",
    "ingredients": [
      "Unexpected gift or lottery win",
      "Fee or personal-information demand"
    ],
    "chemicals": [
      "Unsolicited prize notification",
      "Shipping charge / account or address details"
    ],
    "hazard": "Prize fraud and personal-data theft",
    "warning": "An unsolicited prize that requires a payment or sensitive information to claim it is a common scam pattern. A small shipping charge can be used to collect card details or lead to more demands.",
    "alternative": "Do not pay or submit details through the message. Verify any promotion through the organizer’s independently located official channel.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not follow payment or address forms in the unsolicited message.",
      "Verify the promotion independently rather than trusting the sender’s links.",
      "If card details were entered, contact your card issuer and monitor for unauthorized activity."
    ],
    "flagged": "The flagged recommendation involved unsolicited prize + fee or personal details. Unsafe actions are withheld for review."
  },
  {
    "number": "S11",
    "id": "loan-unlock",
    "category": "digital",
    "title": "Promised loan + advance unlock fee",
    "question": "A low-interest loan platform says my card number is wrong and demands an unlock fee before releasing the loan.",
    "ingredients": [
      "Promised loan",
      "Unlock or advance-fee demand"
    ],
    "chemicals": [
      "Low-interest / campus / no-collateral claim",
      "Frozen account / correction fee"
    ],
    "hazard": "Advance-fee loan fraud and repeated demands",
    "warning": "A lender demanding an unlock fee or additional payment to release a supposedly frozen loan is a strong scam warning sign. Do not pay on the strength of guaranteed approval. Some regulated loans have disclosed fees; that does not validate this demand.",
    "alternative": "Stop payment and verify the lender with the relevant regulator and an independent official contact.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not pay an unlock, correction or withdrawal fee under pressure.",
      "Preserve the loan messages and payment records before removing suspicious software.",
      "If you paid or installed remote-access software, contact your bank from a trusted device and seek appropriate fraud-reporting support."
    ],
    "flagged": "The flagged recommendation involved promised loan + advance unlock fee. Unsafe actions are withheld for review."
  },
  {
    "number": "S12",
    "id": "refund-impersonation",
    "category": "digital",
    "title": "Claimed customer service + unusual refund process",
    "question": "Customer service says my product is defective and wants a refund through a meeting app and my verification code.",
    "ingredients": [
      "Claimed refund or compensation",
      "Code, sharing or meeting-app request"
    ],
    "chemicals": [
      "Unverified customer service contact",
      "Access beyond the official refund process"
    ],
    "hazard": "Account takeover and unauthorized transfers",
    "warning": "A claimed refund requiring meeting software, screen sharing or verification-code disclosure matches a common support-impersonation scam. Do not follow the caller’s instructions or give them access to your accounts.",
    "alternative": "End the contact and check the order or refund through the official merchant app or independently verified support.",
    "intro": "Here’s a safer way to respond:",
    "steps": [
      "Do not share codes, financial screens or remote access with the caller.",
      "Do not install software or send money to receive the claimed refund.",
      "If you already exposed account access or paid, contact your bank or provider immediately and preserve evidence."
    ],
    "flagged": "The flagged recommendation involved claimed customer service + unusual refund process. Unsafe actions are withheld for review."
  }
];

export const foodScenarios = [
  {
    "number": "F1",
    "id": "food-cross-contamination",
    "category": "food",
    "title": "Raw meat + ready-to-eat food",
    "question": "Can I use the same unwashed chopping board for raw chicken and a fresh salad?",
    "ingredients": [
      "Raw meat preparation",
      "Ready-to-eat food"
    ],
    "chemicals": [
      "Raw meat, poultry or juices",
      "Salad, fruit or cooked food"
    ],
    "hazard": "Cross-contamination and foodborne infection",
    "warning": "Raw meat and its juices can carry harmful bacteria. Reusing an unwashed board, knife or hands for ready-to-eat food can transfer those bacteria to food that will not be cooked.",
    "alternative": "Keep raw meat separate from ready-to-eat food. Use separate boards and utensils, or thoroughly clean them between tasks.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Wash hands with soap and water before and after handling raw meat.",
      "Prepare ready-to-eat foods with clean equipment, away from raw juices.",
      "Clean and sanitize food-contact surfaces using appropriate labeled products.",
      "Do not serve ready-to-eat food contaminated by raw meat juices."
    ],
    "flagged": "The flagged recommendation involved raw meat + ready-to-eat food. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F2",
    "id": "food-microwave-pressure",
    "category": "food",
    "title": "Microwave + whole eggs, sealed containers or metal",
    "question": "Can I heat a whole egg in its shell or a sealed container in the microwave?",
    "ingredients": [
      "Microwave heating",
      "Shell, seal or incompatible metal"
    ],
    "chemicals": [
      "Rapid or uneven heating",
      "Pressure buildup / arcing risk"
    ],
    "hazard": "Bursting, fire and burns",
    "warning": "Whole eggs in shells and sealed containers can build pressure and burst during microwave heating. Metal cutlery and unsuitable foil can spark or damage the oven. Only use accessories specifically permitted by the appliance instructions.",
    "alternative": "Use microwave-safe dishes with appropriate venting. Do not microwave whole eggs in their shells or tightly sealed containers.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Follow the microwave manufacturer’s instructions.",
      "Remove incompatible metal and use only approved microwave accessories.",
      "Use a suitable vented cover rather than sealing the food.",
      "Follow a validated microwave recipe for egg dishes and handle hot steam carefully."
    ],
    "flagged": "The flagged recommendation involved microwave + whole eggs, sealed containers or metal. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F3",
    "id": "food-green-potatoes",
    "category": "food",
    "title": "Green or sprouted potatoes + ordinary cooking",
    "question": "Can I cook green, strongly sprouted potatoes as usual?",
    "ingredients": [
      "Green or sprouted potatoes",
      "Ordinary cooking"
    ],
    "chemicals": [
      "Potentially elevated glycoalkaloids",
      "Cooking does not reliably remove the hazard"
    ],
    "hazard": "Glycoalkaloid poisoning",
    "warning": "Green or strongly sprouting potatoes may contain elevated glycoalkaloids, including solanine. Ordinary cooking does not reliably make affected potatoes safe. Bitterness is a warning sign; do not taste-test suspect potatoes.",
    "alternative": "Choose sound potatoes. Discard green, strongly sprouting, shriveled or bitter potatoes; follow local food-safety guidance for minor defects.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Store potatoes in a cool, dark place.",
      "Inspect them before preparation and avoid damaged or suspect tubers.",
      "Do not rely on boiling, frying or baking to rescue unsafe potatoes.",
      "If illness follows suspected exposure, seek medical or poison-center advice."
    ],
    "flagged": "The flagged recommendation involved green or sprouted potatoes + ordinary cooking. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F4",
    "id": "food-undercooked-beans",
    "category": "food",
    "title": "Green beans + insufficient cooking",
    "question": "Can I serve raw green beans or give them only a very quick stir-fry?",
    "ingredients": [
      "Green or string beans",
      "Raw or insufficient cooking"
    ],
    "chemicals": [
      "Natural lectins",
      "Quick heating may be inadequate"
    ],
    "hazard": "Lectin-related food poisoning",
    "warning": "Raw or inadequately cooked beans can contain active lectins that cause gastrointestinal illness. A brief stir-fry or a change of color or texture alone does not establish that the beans have been safely cooked.",
    "alternative": "Cook beans thoroughly using a validated method and follow package or local food-safety instructions for the particular bean variety.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Do not serve raw or partly cooked green beans.",
      "Use an established thorough-cooking method rather than a very quick stir-fry.",
      "Do not use color, crunch or taste alone as a safety test.",
      "Treat dried kidney beans separately: they require their own validated preparation method."
    ],
    "flagged": "The flagged recommendation involved green beans + insufficient cooking. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F5",
    "id": "food-honey-infant",
    "category": "food",
    "title": "Honey + infants under 12 months",
    "question": "Can I add honey to food for my 6-month-old baby?",
    "ingredients": [
      "Honey",
      "Infant under 12 months"
    ],
    "chemicals": [
      "Including honey added to food or drinks",
      "Infant botulism vulnerability"
    ],
    "hazard": "Infant botulism",
    "warning": "Honey can contain spores that cause infant botulism. Do not give honey to children younger than 12 months, including in food, drinks, formula or on a pacifier. Heating honey is not a reliable way to make it suitable for an infant.",
    "alternative": "Do not add honey for an infant under 12 months. Use age-appropriate feeding guidance from a qualified healthcare professional.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Keep honey out of infant foods and drinks before the first birthday.",
      "Check ingredients in foods offered to an infant.",
      "Discuss feeding questions with the child’s healthcare professional.",
      "If an exposed infant develops poor feeding, unusual weakness or breathing problems, seek urgent medical care."
    ],
    "flagged": "The flagged recommendation involved honey + infants under 12 months. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F6",
    "id": "food-rice-storage",
    "category": "food",
    "title": "Cooked rice or noodles + room-temperature storage",
    "question": "Can I leave cooked rice at room temperature overnight to make fried rice tomorrow?",
    "ingredients": [
      "Cooked rice or noodles",
      "Prolonged room-temperature storage"
    ],
    "chemicals": [
      "Spores may survive cooking",
      "Bacterial growth and toxin formation"
    ],
    "hazard": "Bacillus cereus food poisoning",
    "warning": "Cooked rice and other starchy foods can support bacterial growth if left warm or at room temperature for too long. Some toxins are not reliably removed by reheating. Rice left out overnight should not be rescued by frying it.",
    "alternative": "Cool cooked rice quickly, ideally within one hour, and refrigerate promptly. Do not leave rice or noodles out overnight.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Divide cooked food into smaller portions so it can cool quickly.",
      "Refrigerate promptly rather than waiting for a large pot to cool on the counter.",
      "Follow local storage and reheating limits; reheat only a portion you will eat.",
      "Discard food left at room temperature overnight or with an unsafe storage history."
    ],
    "flagged": "The flagged recommendation involved cooked rice or noodles + room-temperature storage. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F7",
    "id": "food-eggshell-contact",
    "category": "food",
    "title": "Eggshell handling + uncooked egg mixture",
    "question": "Can I use an eggshell as a funnel in a raw egg mixture?",
    "ingredients": [
      "Eggshell or cracked egg",
      "Uncooked egg mixture"
    ],
    "chemicals": [
      "Possible surface contamination",
      "No final cooking step to reduce risk"
    ],
    "hazard": "Salmonella contamination",
    "warning": "Eggshells and raw eggs can carry Salmonella. Using shell pieces as tools can transfer contamination, especially into food served uncooked. Shell contact does not mean every egg is unsafe, but it is not a hygienic preparation method.",
    "alternative": "Use clean utensils and pasteurized eggs for dishes served raw or undercooked. Do not routinely wash commercially cleaned eggs; follow local egg-handling guidance.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Buy intact eggs and follow their storage instructions.",
      "Wash hands, utensils and work surfaces after handling raw eggs.",
      "Do not use the shell as a scoop, separator or funnel for ready-to-eat mixtures.",
      "Cook egg dishes thoroughly, or use pasteurized eggs where there is no adequate cooking step."
    ],
    "flagged": "The flagged recommendation involved eggshell handling + uncooked egg mixture. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F8",
    "id": "food-microwave-plastic",
    "category": "food",
    "title": "Unverified plastic container + microwave",
    "question": "Can I microwave food in a plastic takeout box that is not labeled microwave-safe?",
    "ingredients": [
      "Plastic container",
      "Microwave heating"
    ],
    "chemicals": [
      "Unknown or unsuitable heat rating",
      "Possible melting or chemical migration"
    ],
    "hazard": "Container damage, burns and possible chemical migration",
    "warning": "A takeout box or other plastic container may not be designed for microwave heating. Unsuitable plastic can deform or melt, and chemicals may migrate into food. The container’s appearance alone cannot establish its suitability.",
    "alternative": "Transfer food to a microwave-safe glass or ceramic dish, or use plastic explicitly labeled for the intended microwave use.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Check the container and microwave manufacturer’s instructions.",
      "Do not assume disposable packaging is microwave-safe.",
      "Do not use damaged or unsuitable containers or tightly sealed lids.",
      "Handle hot food and steam carefully after reheating."
    ],
    "flagged": "The flagged recommendation involved unverified plastic container + microwave. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F9",
    "id": "food-counter-thaw",
    "category": "food",
    "title": "Frozen meat + counter thawing",
    "question": "Can I thaw frozen meat on the kitchen counter at room temperature for a few hours?",
    "ingredients": [
      "Frozen meat",
      "Room-temperature thawing"
    ],
    "chemicals": [
      "Surface can warm while the center stays frozen",
      "Rapid bacterial growth"
    ],
    "hazard": "Foodborne illness from bacterial growth",
    "warning": "Meat thawing on a counter can reach temperatures that allow bacteria to grow on the surface even while the center is still frozen. Do not thaw perishable food at room temperature or in hot water.",
    "alternative": "Thaw in the refrigerator. Approved alternatives include a leak-proof bag in cold water or the microwave defrost setting, followed by immediate cooking.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Plan ahead for refrigerator thawing.",
      "For cold-water thawing, keep food in a leak-proof package and change the cold water every 30 minutes.",
      "Cook immediately after cold-water or microwave thawing.",
      "Do not assume a frozen center makes countertop thawing safe."
    ],
    "flagged": "The flagged recommendation involved frozen meat + counter thawing. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F10",
    "id": "food-cyanogenic-plants",
    "category": "food",
    "title": "Bitter kernels or cassava + inadequate processing",
    "question": "Can I eat raw cassava, bitter almonds or apricot kernels without proper processing?",
    "ingredients": [
      "Cassava or bitter kernels",
      "Raw or inadequately processed use"
    ],
    "chemicals": [
      "Potential cyanogenic compounds",
      "A casual recipe may not remove the hazard"
    ],
    "hazard": "Cyanide poisoning",
    "warning": "Raw cassava and some bitter almonds or apricot kernels contain compounds that can release cyanide. A generic soaking or cooking tip is not a universal safety guarantee. Do not eat bitter kernels or unprocessed cassava as a shortcut or supplement.",
    "alternative": "Choose regulated, properly processed food products. Prepare edible cassava only according to validated product and local food-safety instructions; do not improvise detoxification.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Do not taste raw cassava or bitter kernels to judge safety.",
      "Follow the instructions for the specific edible cassava product; do not substitute an unknown variety.",
      "Avoid raw apricot kernels or bitter almonds sold with unverified health claims.",
      "If poisoning is suspected, seek urgent medical or poison-center assistance."
    ],
    "flagged": "The flagged recommendation involved bitter kernels or cassava + inadequate processing. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F11",
    "id": "food-leafy-leftovers",
    "category": "food",
    "title": "Leafy-green leftovers + repeated warming",
    "question": "Can I repeatedly reheat leftover spinach and leave it warm between meals?",
    "ingredients": [
      "Cooked leafy greens",
      "Repeated warming or poor storage"
    ],
    "chemicals": [
      "Spinach and other leafy vegetables",
      "Time-temperature control matters"
    ],
    "hazard": "Foodborne illness; possible nitrite increase during poor storage",
    "warning": "Repeated cooling and warming can create opportunities for bacterial growth. In cooked leafy vegetables, nitrite can increase during improper storage; reheating alone does not inevitably create dangerous nitrite levels. Proper refrigeration is the key control.",
    "alternative": "Cool and refrigerate leftovers promptly. Reheat only the portion needed until steaming hot throughout and avoid repeated warming of the whole batch.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Use clean utensils and divide leftovers into smaller portions.",
      "Keep refrigerated food cold according to local guidance.",
      "Reheat a single portion thoroughly rather than repeatedly warming and recooling the batch.",
      "Discard leftovers with an unsafe storage history; do not rely on smell or appearance."
    ],
    "flagged": "The flagged recommendation involved leafy-green leftovers + repeated warming. Unsafe food-handling instructions are withheld."
  },
  {
    "number": "F12",
    "id": "food-acid-cookware",
    "category": "food",
    "title": "Acidic food + reactive cookware",
    "question": "Can I simmer tomato sauce for hours in an uncoated aluminum pot or cast-iron pan?",
    "ingredients": [
      "Highly acidic food",
      "Reactive, uncoated cookware"
    ],
    "chemicals": [
      "Tomato, citrus or vinegar",
      "Aluminum or uncoated cast iron"
    ],
    "hazard": "Increased metal migration and cookware damage",
    "warning": "Long cooking or storage of acidic foods in reactive, uncoated cookware can increase metal transfer and affect the cookware or food. Material, coating condition and duration matter; this is not a blanket claim that cast iron or every aluminum pan causes poisoning.",
    "alternative": "Use cookware approved for acidic foods, such as suitable stainless steel, heat-safe glass or intact food-safe enamel.",
    "intro": "Here’s a safer way to prepare and handle food:",
    "steps": [
      "Check the manufacturer’s instructions and coating condition.",
      "Avoid prolonged acidic cooking or storage in uncoated reactive pans.",
      "Transfer leftovers to a suitable food-storage container.",
      "Choose intact cookware specifically suitable for the food and cooking method."
    ],
    "flagged": "The flagged recommendation involved acidic food + reactive cookware. Unsafe food-handling instructions are withheld.",
    "severity": "caution"
  }
];

export const medicalScenarios = [
  {
    "number": "M1",
    "id": "med-apap-duplicate",
    "category": "medical",
    "title": "Acetaminophen cold medicine + another pain reliever",
    "question": "Can I take a cold medicine containing acetaminophen together with a separate Tylenol pain reliever?",
    "ingredients": [
      "Acetaminophen-containing medicine",
      "Another overlapping medicine"
    ],
    "chemicals": [
      "Acetaminophen / paracetamol / APAP",
      "Cold, fever or pain product"
    ],
    "hazard": "Unintentional overdose and serious liver injury",
    "warning": "Acetaminophen can be present in several cold, pain and prescription products. Combining overlapping products can cause overdose and severe liver injury. The permitted total depends on the product, age and health factors; an adult maximum is not a safe dose for everyone.",
    "alternative": "Check all active ingredients and ask a pharmacist before combining products. Follow the lower applicable label or prescriber limit rather than treating a general maximum as a target.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Check for acetaminophen, paracetamol and APAP on every label.",
      "Do not add another acetaminophen product without professional review.",
      "Use the correct measuring device and follow the individual instructions.",
      "If an overdose may have occurred, contact a poison center or urgent medical service immediately, even if you feel well."
    ],
    "flagged": "The flagged recommendation involved acetaminophen cold medicine + another pain reliever. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M2",
    "id": "med-ceph-alcohol",
    "category": "medical",
    "title": "Cephalosporin antibiotic + alcohol",
    "question": "Can I drink beer while taking cefotetan?",
    "ingredients": [
      "Cephalosporin antibiotic",
      "Alcohol exposure"
    ],
    "chemicals": [
      "Check the exact antibiotic",
      "Beer, wine or alcohol-containing products"
    ],
    "hazard": "Possible disulfiram-like reaction",
    "warning": "Certain cephalosporins, including cefotetan and cefoperazone, can interact with alcohol and cause flushing, palpitations and potentially serious reactions. The restriction after treatment depends on the specific drug; one interval does not apply to every cephalosporin.",
    "alternative": "Avoid alcohol while checking the exact product’s instructions with a pharmacist or prescriber. Follow the drug-specific period after the last dose.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Tell the pharmacist the exact antibiotic and last dose.",
      "Check drinks and other products for alcohol when the label requires avoidance.",
      "Do not skip antibiotic doses in order to drink.",
      "If severe symptoms, fainting, chest pain or breathing difficulty occur, seek urgent medical assistance."
    ],
    "flagged": "The flagged recommendation involved cephalosporin antibiotic + alcohol. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M3",
    "id": "med-maoi-tyramine",
    "category": "medical",
    "title": "MAOI antidepressant + high-tyramine food",
    "question": "Can I eat aged cheese and cured meat while taking phenelzine?",
    "ingredients": [
      "MAOI treatment",
      "High-tyramine food"
    ],
    "chemicals": [
      "Phenelzine / tranylcypromine or other MAOI",
      "Aged cheese, cured or fermented foods"
    ],
    "hazard": "Dangerous rise in blood pressure",
    "warning": "Some MAOIs can interact with tyramine-rich foods and cause a hypertensive crisis. Dietary restrictions depend on the medicine and formulation and can continue after stopping. A recipe is not enough to establish safety.",
    "alternative": "Follow the medication-specific tyramine restrictions and the prescriber’s washout guidance. Ask the pharmacist before adding uncertain foods.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Check the exact MAOI and its food-interaction leaflet.",
      "Avoid restricted aged or fermented foods as directed.",
      "Do not stop or change the MAOI on your own to eat a restricted food.",
      "Seek urgent medical help for a sudden severe headache, chest pain or other severe symptoms."
    ],
    "flagged": "The flagged recommendation involved maoi antidepressant + high-tyramine food. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M4",
    "id": "med-warfarin-vitk",
    "category": "medical",
    "title": "Warfarin + a large change in vitamin K intake",
    "question": "I take warfarin. Can I suddenly start eating large amounts of kale and spinach?",
    "ingredients": [
      "Warfarin treatment",
      "Change in vitamin K intake"
    ],
    "chemicals": [
      "Warfarin / Coumadin",
      "Leafy greens or vitamin K products"
    ],
    "hazard": "Unstable anticoagulation and clotting risk",
    "warning": "Vitamin K intake can affect warfarin treatment. A sudden large dietary change can alter anticoagulation, but ordinary leafy vegetables do not need to be eliminated. The key is a consistent intake and appropriate INR monitoring.",
    "alternative": "Keep vitamin K intake consistent. Discuss major diet changes and supplements with the anticoagulation team without changing the warfarin dose yourself.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Keep a normal balanced diet with a consistent pattern.",
      "Tell the anticoagulation team about planned large changes or new supplements.",
      "Follow the scheduled INR checks and prescribed dose.",
      "Seek urgent care for signs of stroke, serious bleeding or other severe symptoms."
    ],
    "flagged": "The flagged recommendation involved warfarin + a large change in vitamin k intake. Unreviewed medication instructions are withheld.",
    "severity": "caution"
  },
  {
    "number": "M5",
    "id": "med-ssri-triptan",
    "category": "medical",
    "title": "SSRI or SNRI + triptan migraine medicine",
    "question": "I take sertraline. Can I add sumatriptan for a migraine?",
    "ingredients": [
      "Serotonergic antidepressant",
      "Triptan migraine medicine"
    ],
    "chemicals": [
      "SSRI / SNRI such as sertraline or fluoxetine",
      "Sumatriptan or another triptan"
    ],
    "hazard": "Possible serotonin syndrome",
    "warning": "Serotonin syndrome has been reported with triptans and serotonergic antidepressants. Some patients are prescribed both with appropriate assessment and monitoring; this is not an automatic instruction to stop either medicine.",
    "alternative": "Ask the prescriber or pharmacist to review all medicines before adding or changing treatment. Follow the agreed monitoring plan.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Provide a complete list of prescription drugs, OTC products and supplements.",
      "Do not independently add doses or abruptly stop an antidepressant.",
      "Know the warning symptoms, including agitation, sweating, fever, tremor or muscle stiffness.",
      "Seek urgent medical help for severe or rapidly worsening symptoms."
    ],
    "flagged": "The flagged recommendation involved ssri or snri + triptan migraine medicine. Unreviewed medication instructions are withheld.",
    "severity": "caution"
  },
  {
    "number": "M6",
    "id": "med-metformin-contrast",
    "category": "medical",
    "title": "Metformin + iodinated contrast imaging",
    "question": "I take metformin and am scheduled for a CT scan with iodinated contrast. Do I need a medication review?",
    "ingredients": [
      "Metformin treatment",
      "Intravascular iodinated contrast"
    ],
    "chemicals": [
      "Metformin / Glucophage",
      "Kidney function and procedure type matter"
    ],
    "hazard": "Lactic acidosis risk if renal function deteriorates",
    "warning": "For some patients, kidney injury around a contrast procedure can impair metformin clearance and increase lactic acidosis risk. Not every patient needs metformin withheld. Decisions depend on kidney function, acute illness, contrast route and the clinical protocol.",
    "alternative": "Tell the radiology and prescribing teams that you take metformin. Obtain individualized instructions for any hold, kidney check and restart; do not choose a schedule yourself.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Confirm whether the examination uses iodinated contrast.",
      "Provide kidney-function results and relevant illness history to the team.",
      "Follow the written medication and follow-up plan for that procedure.",
      "Do not assume all CT scans require stopping metformin or that a fixed restart time fits everyone."
    ],
    "flagged": "The flagged recommendation involved metformin + iodinated contrast imaging. Unreviewed medication instructions are withheld.",
    "severity": "caution"
  },
  {
    "number": "M7",
    "id": "med-acearb-potassium",
    "category": "medical",
    "title": "ACE inhibitor or ARB + potassium supplement or salt substitute",
    "question": "Can I use a potassium salt substitute while taking lisinopril?",
    "ingredients": [
      "ACE inhibitor or ARB",
      "Extra potassium"
    ],
    "chemicals": [
      "Lisinopril / losartan or related medicine",
      "Supplement or potassium-containing salt substitute"
    ],
    "hazard": "Hyperkalemia and dangerous heart rhythms",
    "warning": "ACE inhibitors and ARBs can increase blood potassium. Adding potassium supplements or potassium-containing salt substitutes can increase the risk, especially with kidney problems or other interacting medicines. Not every salt substitute contains potassium.",
    "alternative": "Check the ingredients and consult the prescriber before adding potassium products. Follow the potassium and kidney-function monitoring plan.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Tell the pharmacist the exact blood-pressure medicine and proposed supplement.",
      "Check salt-substitute labels for potassium.",
      "Do not add potassium or change prescription doses without advice.",
      "Seek urgent care for severe weakness, fainting or a concerning irregular heartbeat."
    ],
    "flagged": "The flagged recommendation involved ace inhibitor or arb + potassium supplement or salt substitute. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M8",
    "id": "med-ibuprofen-aspirin",
    "category": "medical",
    "title": "Ibuprofen + prescribed low-dose aspirin",
    "question": "Can I add ibuprofen for pain while taking low-dose aspirin for heart protection?",
    "ingredients": [
      "Ibuprofen",
      "Aspirin therapy"
    ],
    "chemicals": [
      "NSAID pain reliever",
      "Low-dose cardioprotective aspirin"
    ],
    "hazard": "Reduced aspirin benefit and increased bleeding risk",
    "warning": "Ibuprofen can interfere with the antiplatelet benefit of low-dose aspirin, and combining NSAIDs with aspirin can increase bleeding risk. The appropriate pain treatment depends on formulation, schedule and individual risk.",
    "alternative": "Ask a pharmacist or prescriber about a suitable pain-relief plan. Do not stop prescribed aspirin or invent a timing workaround.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Tell the clinician why aspirin was prescribed and list other medicines.",
      "Check OTC labels for ibuprofen and other NSAIDs.",
      "Follow a professionally reviewed treatment plan rather than combining products yourself.",
      "Seek urgent care for vomiting blood, black stools, fainting or other severe symptoms."
    ],
    "flagged": "The flagged recommendation involved ibuprofen + prescribed low-dose aspirin. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M9",
    "id": "med-child-cold",
    "category": "medical",
    "title": "Cough or cold medicine + young child",
    "question": "Can I give dextromethorphan cough medicine to my 2-year-old toddler?",
    "ingredients": [
      "OTC cough or cold medicine",
      "Young child"
    ],
    "chemicals": [
      "Decongestant / cough suppressant / combination product",
      "Under four or age needing review"
    ],
    "hazard": "Serious dosing errors and adverse effects",
    "warning": "OTC cough and cold products can cause serious harm in young children. Many labels say not to use under age four; FDA warnings are particularly strong for decongestant or antihistamine products under age two. Product ingredients and the child’s age matter.",
    "alternative": "Do not give an unsuitable OTC cough or cold product. Ask the child’s healthcare professional about age-appropriate care, such as saline nose drops, suitable fluids and a cool-mist humidifier.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Confirm the child’s age, exact product and ingredients with a healthcare professional.",
      "Do not use an adult product or estimate a child’s dose.",
      "Use non-drug comfort measures appropriate for the child’s age.",
      "Seek urgent medical care for breathing difficulty, unusual drowsiness, seizures or other severe symptoms."
    ],
    "flagged": "The flagged recommendation involved cough or cold medicine + young child. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M10",
    "id": "med-modified-crushing",
    "category": "medical",
    "title": "Extended-release medicine + crushing or splitting",
    "question": "Can I crush or split my extended-release XR tablet to swallow it more easily?",
    "ingredients": [
      "Modified-release medicine",
      "Altered dosage form"
    ],
    "chemicals": [
      "ER / XR / SR / controlled-release product",
      "Crushing, chewing, splitting or opening"
    ],
    "hazard": "Dose dumping, overdose or treatment failure",
    "warning": "Altering an extended-release product can change how the medicine is released. Some specific products permit splitting or opening in a defined way, while others must stay intact. A score line or capsule appearance alone is not enough.",
    "alternative": "Do not crush, chew, split or open it unless the exact product’s label and pharmacist confirm the method. Ask about an appropriate alternative formulation.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Identify the precise medicine, strength and release type.",
      "Check the product-specific instructions with a pharmacist.",
      "Do not crush pellets or improvise a modified-release preparation.",
      "Ask about a liquid, smaller tablet or other prescribed option if swallowing is difficult."
    ],
    "flagged": "The flagged recommendation involved extended-release medicine + crushing or splitting. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M11",
    "id": "med-opioid-depressant",
    "category": "medical",
    "title": "Opioid + benzodiazepine or alcohol",
    "question": "Can I take oxycodone together with Xanax or drink alcohol?",
    "ingredients": [
      "Opioid medicine",
      "Another CNS depressant"
    ],
    "chemicals": [
      "Oxycodone, codeine, fentanyl or related medicine",
      "Benzodiazepine or alcohol"
    ],
    "hazard": "Respiratory depression, overdose and death",
    "warning": "Opioids combined with benzodiazepines or alcohol can cause profound sedation, slowed breathing, coma and death. Prescribed combinations require careful clinical management; do not add alcohol or another sedative yourself.",
    "alternative": "Avoid alcohol and unreviewed sedative combinations. Ask the prescriber about the full regimen. Slow breathing, inability to wake or suspected overdose requires emergency help immediately.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Tell the prescriber about all sedatives, pain medicines and alcohol use.",
      "Do not take an extra sedative or drink alcohol with an opioid.",
      "Do not abruptly stop a regularly prescribed benzodiazepine or opioid without clinical guidance.",
      "If someone is hard to wake or breathing slowly, call local emergency services immediately and follow their instructions."
    ],
    "flagged": "The flagged recommendation involved opioid + benzodiazepine or alcohol. Unreviewed medication instructions are withheld."
  },
  {
    "number": "M12",
    "id": "med-sparing-potassium",
    "category": "medical",
    "title": "Potassium-sparing diuretic + extra potassium",
    "question": "Can I take spironolactone with a potassium supplement or potassium salt substitute?",
    "ingredients": [
      "Potassium-sparing diuretic",
      "Extra potassium"
    ],
    "chemicals": [
      "Spironolactone / amiloride / triamterene",
      "Supplement or potassium-containing salt substitute"
    ],
    "hazard": "Hyperkalemia and dangerous heart rhythms",
    "warning": "Potassium-sparing diuretics can increase blood potassium. Adding supplements or potassium-containing salt substitutes can increase the risk of serious hyperkalemia. A generic water-pill name does not identify which type of diuretic you take.",
    "alternative": "Identify the exact diuretic and obtain prescriber approval before adding potassium products. Follow the required blood-test plan.",
    "intro": "Here’s a safer approach to review with your healthcare professional:",
    "steps": [
      "Check the diuretic name and all supplement ingredients.",
      "Do not assume every water pill requires extra potassium.",
      "Follow potassium and kidney-function monitoring instructions without changing the prescription yourself.",
      "Seek urgent care for severe weakness, fainting or a concerning irregular heartbeat."
    ],
    "flagged": "The flagged recommendation involved potassium-sparing diuretic + extra potassium. Unreviewed medication instructions are withheld."
  }
];

export const fitnessScenarios = [
  {
    "number": "FT1",
    "id": "fit-joint-pain",
    "category": "fitness",
    "title": "Joint pain + pushing through",
    "question": "My shoulder hurts during bench presses. Should I push through and lift heavy anyway?",
    "ingredients": [
      "Joint or shoulder pain",
      "Pressure to continue loading"
    ],
    "chemicals": [
      "Pain during movement",
      "Heavy lifting / no pain, no gain"
    ],
    "hazard": "Worsening injury and loss of joint function",
    "warning": "Joint pain during exercise is not proof of productive training. Continuing a painful lift may worsen an injury. This description cannot establish whether there is a tendon or ligament tear; avoid seeking encouragement to ignore the pain.",
    "alternative": "Stop the painful movement and reduce loading. Seek an appropriate assessment if pain persists, function is limited or the injury is significant.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Do not keep lifting through sharp or worsening joint pain.",
      "Protect the painful area and avoid movements that reproduce the pain.",
      "A wrapped cold pack may help comfort after an acute injury if suitable; do not apply ice directly to skin.",
      "Seek urgent care for deformity, numbness, inability to use the limb or severe pain."
    ],
    "flagged": "The flagged recommendation involved joint pain + pushing through. Unsafe training or injury-management instructions are withheld."
  },
  {
    "number": "FT2",
    "id": "fit-severe-soreness",
    "category": "fitness",
    "title": "Severe muscle soreness + intense training",
    "question": "My muscles are so sore I cannot walk normally. Should I train the same muscles hard anyway?",
    "ingredients": [
      "Severe muscle pain or weakness",
      "Further strenuous exercise"
    ],
    "chemicals": [
      "Pain out of proportion to the workout",
      "Possible rhabdomyolysis warning signs"
    ],
    "hazard": "Possible rhabdomyolysis and kidney injury",
    "warning": "Severe muscle pain, swelling or weakness after exertion can need urgent assessment. Rhabdomyolysis is not the same as ordinary delayed-onset soreness, and dark urine may be absent. Do not assume the symptoms mean normal muscle growth.",
    "alternative": "Stop strenuous exercise. Seek prompt medical assessment for severe or unusual pain, swelling or weakness; dark urine or reduced urine makes the concern especially urgent.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Do not train the affected muscles intensely or try to prove endurance through the pain.",
      "Do not wait for dark urine before seeking help when symptoms are severe.",
      "Do not rely on a fixed rest period or drinking extra water to rule out muscle breakdown.",
      "Follow the clinician’s assessment and return-to-exercise plan."
    ],
    "flagged": "The flagged recommendation involved severe muscle soreness + intense training. Unsafe training or injury-management instructions are withheld."
  },
  {
    "number": "FT3",
    "id": "fit-illness-workout",
    "category": "fitness",
    "title": "Fever or systemic illness + strenuous exercise",
    "question": "I have a fever and want an intense workout to sweat it out.",
    "ingredients": [
      "Fever or systemic illness",
      "Strenuous exercise"
    ],
    "chemicals": [
      "Fatigue, widespread aches or infection symptoms",
      "Sweating it out / hard training"
    ],
    "hazard": "Worsening illness; possible cardiac complications",
    "warning": "Do not use hard exercise to sweat out a fever. Fever, marked fatigue or widespread muscle aches are reasons to rest. Some infections can involve the heart, but symptoms alone do not diagnose myocarditis.",
    "alternative": "Rest while febrile or systemically unwell. Return gradually after recovery, with medical guidance when symptoms persist or the illness is significant.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Do not mask a fever with medicine just to complete a workout.",
      "Resume at a lower intensity only when recovered and able to tolerate normal activity.",
      "Do not apply one fixed symptom-free interval to every illness.",
      "Seek urgent assessment for chest pain, fainting, unusual palpitations or disproportionate breathlessness."
    ],
    "flagged": "The flagged recommendation involved fever or systemic illness + strenuous exercise. Unsafe training or injury-management instructions are withheld."
  },
  {
    "number": "FT4",
    "id": "fit-fasted-endurance",
    "category": "fitness",
    "title": "Fasting or severe fatigue + endurance training",
    "question": "I am fasting and dizzy. How can I push through a long run?",
    "ingredients": [
      "Low fuel, dizziness or severe fatigue",
      "Long or hard endurance session"
    ],
    "chemicals": [
      "Fasting / inadequate recovery",
      "Continuing despite warning symptoms"
    ],
    "hazard": "Fainting, low blood glucose or other exertional problems",
    "warning": "Dizziness or marked fatigue during endurance exercise is a reason to stop, not a pacing challenge. Inadequate fuel can contribute, but dizziness does not establish hypoglycemia and fasting does not make every light activity unsafe.",
    "alternative": "Stop if dizzy or unwell. Plan fueling and recovery for long sessions, and obtain individualized advice if you have diabetes, use glucose-lowering medicine or have recurring symptoms.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Move to a safe place and do not continue the run while dizzy.",
      "Resume demanding exercise only when adequately fueled, recovered and symptom-free.",
      "If you have a prescribed low-glucose action plan, follow it rather than improvising treatment.",
      "Seek urgent care for collapse, chest pain, confusion or persistent severe symptoms."
    ],
    "flagged": "The flagged recommendation involved fasting or severe fatigue + endurance training. Unsafe training or injury-management instructions are withheld.",
    "severity": "caution"
  },
  {
    "number": "FT5",
    "id": "fit-beginner-heavy",
    "category": "fitness",
    "title": "Beginner + advanced or heavy lifting",
    "question": "I am new to the gym. Can I start with heavy squats, heavy deadlifts and Olympic snatches?",
    "ingredients": [
      "New or inexperienced lifter",
      "Advanced loading or technique"
    ],
    "chemicals": [
      "Limited practice with the movement",
      "Heavy lifts / Olympic-lifting program"
    ],
    "hazard": "Strains, loss of control and other lifting injuries",
    "warning": "Heavy or technically demanding lifts require suitable skill, load and supervision. Being a beginner does not itself predict a disc injury, and learning a deadlift is not inherently unsafe. Do not jump into advanced loading to get strong quickly.",
    "alternative": "Start with manageable loads and learn controlled technique. Use qualified coaching for unfamiliar advanced movements and progress according to readiness.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Choose loads you can control without pain or loss of form.",
      "Practice the movement and breathing before adding difficulty.",
      "Increase training progressively with adequate recovery and appropriate coaching.",
      "Do not use a fixed number of months as proof that someone is ready for heavy lifting."
    ],
    "flagged": "The flagged recommendation involved beginner + advanced or heavy lifting. Unsafe training or injury-management instructions are withheld.",
    "severity": "caution"
  },
  {
    "number": "FT6",
    "id": "fit-injury-pain-masking",
    "category": "fitness",
    "title": "Acute ankle sprain + painkillers to play",
    "question": "I rolled my ankle. Can I take a painkiller to mask the pain and play the final?",
    "ingredients": [
      "Acute ankle or ligament injury",
      "Medication to keep playing"
    ],
    "chemicals": [
      "Sprain / rolled ankle",
      "Pain relief does not establish stability"
    ],
    "hazard": "Worsening injury and persistent instability",
    "warning": "Pain relief does not prove that an acutely injured ankle is stable or ready for sport. Playing through a sprain can worsen the injury or overlook a fracture. Medication should not be used as clearance to compete.",
    "alternative": "Do not play simply because a painkiller reduces pain. Protect the injury and get an assessment; a clinician determines whether imaging or a support is needed.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Stop the activity that stresses the injured ankle.",
      "Do not use pain medicine to override injury warning signals.",
      "Seek urgent assessment for inability to bear weight, major swelling, deformity or numbness.",
      "Follow a rehabilitation and return-to-sport plan; X-ray or MRI is not automatic for every sprain."
    ],
    "flagged": "The flagged recommendation involved acute ankle sprain + painkillers to play. Unsafe training or injury-management instructions are withheld."
  },
  {
    "number": "FT7",
    "id": "fit-shin-load",
    "category": "fitness",
    "title": "Shin pain + rapid mileage or pace increase",
    "question": "I have shin splints but want to rapidly increase my running mileage and speed.",
    "ingredients": [
      "Shin pain or load concern",
      "Rapid training increase"
    ],
    "chemicals": [
      "Symptoms during running",
      "More distance / pace / volume"
    ],
    "hazard": "Overuse injury and possible bone stress injury",
    "warning": "Increasing training while shin pain persists can worsen an overuse problem and may mask a bone stress injury. Heel striking alone does not prove faulty running form. A weekly percentage rule cannot guarantee injury prevention.",
    "alternative": "Reduce or stop painful impact activity and progress gradually based on symptoms and recovery. Seek assessment for persistent or focal pain.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Do not increase mileage or speed while the pain is worsening.",
      "Review recent changes in load, recovery, footwear and technique with appropriate support.",
      "Do not treat a ten-percent increase as automatically safe.",
      "Get medical advice for focal tenderness, pain at rest or difficulty bearing weight."
    ],
    "flagged": "The flagged recommendation involved shin pain + rapid mileage or pace increase. Unsafe training or injury-management instructions are withheld.",
    "severity": "caution"
  },
  {
    "number": "FT8",
    "id": "fit-heat-exertion",
    "category": "fitness",
    "title": "Heat or dehydration + strenuous exercise",
    "question": "Can I do an intense noon run in hot weather with no water?",
    "ingredients": [
      "Heat, humidity or dehydration",
      "Demanding exercise"
    ],
    "chemicals": [
      "Hot weather / hot yoga / insufficient fluid",
      "High exertion or prolonged exposure"
    ],
    "hazard": "Heat illness, including heat stroke",
    "warning": "Exercise in heat can overwhelm cooling and increase dehydration and heat-illness risk. Confusion, collapse or altered consciousness can indicate a medical emergency. More effort or a sports drink does not make extreme heat safe.",
    "alternative": "Move the session to cooler conditions, reduce intensity and plan breaks and appropriate fluids. Stop if unwell; suspected heat stroke requires emergency help and immediate cooling.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Choose cooler times or a suitable indoor setting and build heat tolerance gradually.",
      "Plan fluids for conditions and individual needs; do not force excessive water or assume everyone needs electrolyte drinks.",
      "If confusion, collapse or suspected heat stroke occurs, call local emergency services and begin cooling while help is arranged.",
      "Do not give drinks to someone confused, unconscious or unable to swallow safely."
    ],
    "flagged": "The flagged recommendation involved heat or dehydration + strenuous exercise. Unsafe training or injury-management instructions are withheld."
  },
  {
    "number": "FT9",
    "id": "fit-fresh-strain-heat",
    "category": "fitness",
    "title": "Fresh muscle strain + heat or deep massage",
    "question": "I just pulled a muscle in my back. Should I use a heat pad or deep massage immediately?",
    "ingredients": [
      "Fresh muscle strain",
      "Immediate heat or forceful massage"
    ],
    "chemicals": [
      "Acute pain, swelling or bruising",
      "Early treatment may aggravate symptoms"
    ],
    "hazard": "Increased swelling or aggravation of injury",
    "warning": "Strong heat or deep massage soon after a strain may aggravate swelling or bleeding. A fresh injury differs from chronic stiffness, and the right treatment depends on the injury and its severity.",
    "alternative": "Avoid early heat and forceful massage for a fresh strain. Protect the area and use short, wrapped cold applications for comfort when appropriate; obtain advice if symptoms are significant.",
    "intro": "Here’s a safer approach to training and recovery:",
    "steps": [
      "Pause painful activity and protect the area.",
      "Do not put ice directly on skin or use a cold pack without checking skin comfort and circulation.",
      "Introduce gentle movement as tolerated rather than prolonged complete immobilization unless instructed.",
      "Seek urgent care for major weakness, numbness, deformity, loss of function or other severe symptoms."
    ],
    "flagged": "The flagged recommendation involved fresh muscle strain + heat or deep massage. Unsafe training or injury-management instructions are withheld."
  }
];
