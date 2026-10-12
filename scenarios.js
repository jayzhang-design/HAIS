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
