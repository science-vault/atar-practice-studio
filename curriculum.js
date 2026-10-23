// Navigation labels summarise 2026 SCSA ATAR syllabus content. Official sources below.
window.CURRICULUM = [
{subject:'Physics',icon:'⚛',accent:'#6e65cf',tint:'#eeecfc',slug:'physics',years:{11:[
[1,'Motion, forces and energy',[['p11-motion','Linear motion and forces'],['p11-momentum','Momentum and impulse'],['p11-energy','Work, energy and power'],['p11-thermal','Thermal energy']]],
[2,'Waves, nuclear and electrical physics',[['p11-waves','Waves and sound'],['p11-nuclear','Ionising radiation and nuclear reactions'],['p11-electric','Electrical forces and energy']]]],12:[
[3,'Gravity and relativity',[['p12-static','Static equilibrium and centre of mass'],['p12-circle','Circular motion'],['p12-gravity','Gravity and projectile motion'],['p12-relativity','Relativity']]],
[4,'Electromagnetism and modern physics',[['p12-em','Electromagnetism'],['p12-induction','Induction and electrical power'],['p12-quantum','Quantum theory and atomic models'],['p12-universe','The Standard Model and the Big Bang']]]]}},
{subject:'Chemistry',icon:'⚗',accent:'#bc8a42',tint:'#fcf2e2',slug:'chemistry',years:{11:[
[1,'Chemical fundamentals: structure, properties and reactions',[['c11-atomic','Atomic structure and periodicity'],['c11-bonding','Bonding, structure and properties'],['c11-reactions','Chemical reactions and energy'],['c11-moles','Moles and chemical calculations']]],
[2,'Molecular interactions and reactions',[['c11-gases','Gases and intermolecular forces'],['c11-solutions','Water and aqueous solutions'],['c11-acids','Acids and bases'],['c11-rates','Reaction rates']]]],12:[
[3,'Equilibrium, acids and bases, and redox reactions',[['c12-equilibrium','Chemical equilibrium'],['c12-acids','Acids, bases and buffers'],['c12-redox','Redox and electrochemistry']]],
[4,'Organic chemistry and chemical synthesis',[['c12-organic','Organic structure and properties'],['c12-organic-reactions','Organic reactions and polymers'],['c12-synthesis','Chemical synthesis and analysis']]]]}},
{subject:'Biology',icon:'❧',accent:'#4d9c82',tint:'#e8f5ee',slug:'biology',years:{11:[
[1,'Ecosystems and biodiversity',[['b11-diversity','Biodiversity and classification'],['b11-ecosystems','Ecosystems and interactions'],['b11-conservation','Ecosystem change and conservation']]],
[2,'From single cells to multicellular organisms',[['b11-cells','Cell structure and function'],['b11-metabolism','Cell transport and metabolism'],['b11-systems','Multicellular organisation and systems']]]],12:[
[3,'Continuity of species',[['b12-dna','DNA and inheritance'],['b12-evolution','Evolution and natural selection'],['b12-speciation','Population genetics and speciation']]],
[4,'Surviving in a changing environment',[['b12-homeostasis','Homeostasis and environmental responses'],['b12-disease','Infectious disease'],['b12-immunity','Defence and disease control']]]]}},
{subject:'Human Biology',icon:'♙',accent:'#cc7795',tint:'#fbeef3',slug:'human-biology',years:{11:[
[1,'The functioning human body',[['h11-cells','Cells and metabolism'],['h11-digestion','Digestion and absorption'],['h11-transport','Respiration and circulation'],['h11-excretion','Excretion and body functioning']]],
[2,'Reproduction and inheritance',[['h11-reproduction','Reproduction and development'],['h11-division','Cell division'],['h11-inheritance','DNA and inheritance']]]],12:[
[3,'Homeostasis and disease',[['h12-nervous','Nervous and endocrine coordination'],['h12-homeostasis','Homeostatic regulation'],['h12-disease','Disease and immunity']]],
[4,'Human variation and evolution',[['h12-variation','Human variation and population genetics'],['h12-evidence','Evidence for evolution'],['h12-human','Primate and human evolution']]]]}},
{subject:'Psychology',icon:'◉',accent:'#6e94c2',tint:'#eaf1fa',slug:'psychology',years:{11:[
[1,'Biological and lifespan psychology',[['s11-biological','Biological bases of behaviour'],['s11-lifespan','Lifespan development'],['s11-inquiry','Science inquiry and research methods']]],
[2,'Attitudes, stereotypes and social influence',[['s11-attitudes','Attitudes and attribution'],['s11-stereotypes','Stereotypes, prejudice and discrimination'],['s11-social','Social influence and behaviour']]]],12:[
[3,'Memory and learning',[['s12-memory','Memory, attention and forgetting'],['s12-learning','Learning theories'],['s12-inquiry','Science inquiry and research methods']]],
[4,'Psychology of motivation, wellbeing and health',[['s12-motivation','Motivation and wellbeing'],['s12-stress','Stress and coping'],['s12-sleep','Sleep and health']]]]}}
];


// Supplied Step Up In Education screenshots: 23 October 2026.
window.TOPIC_GROUPS = {
  "p11-momentum": "p11-motion",
  "p11-energy": "p11-thermal",
  "p12-circle": "p12-static",
  "p12-gravity": "p12-static",
  "p12-induction": "p12-em",
  "c11-moles": "c11-reactions",
  "c11-acids": "c11-solutions",
  "c12-organic-reactions": "c12-organic",
  "h11-transport": "h11-circulation",
  "b11-conservation": "b11-ecosystems",
  "b11-metabolism": "b11-cells",
  "b12-speciation": "b12-evolution",
  "b12-immunity": "b12-disease",
  "s11-stereotypes": "s11-attitudes",
  "s12-stress": "s12-motivation",
  "s12-sleep": "s12-motivation"
};
const suppliedTopicYears = {
  "Chemistry": {
    "11": [
      [
        1,
        "Chemical fundamentals: structure, properties and reactions",
        [
          [
            "c11-atomic",
            "Atomic Structure",
            [
              "Atomic Structure",
              "The Periodic Table",
              "Isotopes and Mass Spectrometry",
              "Atomic Absorption Spectroscopy"
            ]
          ],
          [
            "c11-bonding",
            "Materials and Bonding",
            [
              "Compounds and Mixtures",
              "Ionic Bonding",
              "Metallic Bonding",
              "Covalent Bonding",
              "Nanomaterials"
            ]
          ],
          [
            "c11-carbon",
            "Carbon Chemistry",
            [
              "Carbon and Covalent Network Solids",
              "Hydrocarbons Structure and Naming",
              "Reactions of Hydrocarbons"
            ]
          ],
          [
            "c11-reactions",
            "Chemical Reactions",
            [
              "The Mole",
              "Stoichiometry",
              "Percentage Composition",
              "Energy Changes and Fuels"
            ]
          ]
        ]
      ],
      [
        2,
        "Molecular interactions and reactions",
        [
          [
            "c11-gases",
            "Intermolecular Theory and Gases",
            [
              "Molecular Shapes and Polarity",
              "Intermolecular Forces",
              "Kinetic Theory and Gases",
              "Molar Volume and Gas Calculations",
              "Chromatography"
            ]
          ],
          [
            "c11-solutions",
            "Solutions and Acidity",
            [
              "Solubility",
              "Solution Concentration",
              "Precipitation Reactions",
              "Acid Base Theory and pH",
              "Reactions of Acids and Bases",
              "Water"
            ]
          ],
          [
            "c11-rates",
            "Rates of Reaction",
            [
              "Rates of Reaction",
              "Factors Affecting Rates of Reaction"
            ]
          ]
        ]
      ],
      [
        0,
        "Across units",
        [
          [
            "c11-mixed",
            "Mixed topics",
            []
          ]
        ]
      ]
    ],
    "12": [
      [
        3,
        "Equilibrium, Acids and Bases, and Redox Reactions",
        [
          [
            "c12-equilibrium",
            "Rates and Equilibrium",
            [
              "Rates of Reaction",
              "Reversible Reactions and Equilibrium",
              "Changes to Equilibrium",
              "Equilibrium Law",
              "Ocean Equilibrium"
            ]
          ],
          [
            "c12-acids",
            "Acids and Bases",
            [
              "Acid-Base Theories",
              "Autoionisation of Water and pH",
              "Acid-Base Strength and Salts",
              "Buffers",
              "Acid-Base Titrations",
              "Titration Calculations"
            ]
          ],
          [
            "c12-redox",
            "Oxidation and Reduction",
            [
              "Redox Reactions and Oxidation Numbers",
              "Redox Equations",
              "Galvanic Cells",
              "Electrolysis",
              "Batteries and Fuel Cells",
              "Corrosion"
            ]
          ]
        ]
      ],
      [
        4,
        "Organic Chemistry and Chemical Synthesis",
        [
          [
            "c12-organic",
            "Organic Chemistry",
            [
              "Hydrocarbons Review",
              "Functional Groups",
              "Reactions of Organic Compounds",
              "Empirical Formula",
              "Polymers",
              "Amino Acids and Proteins"
            ]
          ],
          [
            "c12-synthesis",
            "Synthesis",
            [
              "Chemical Synthesis and Yield",
              "Limiting Reagent and Yield Calculations",
              "Biodiesel, Ethanol and Ethyl Ethanoate",
              "Soaps and Plastics"
            ]
          ]
        ]
      ],
      [
        0,
        "Across units",
        [
          [
            "c12-mixed",
            "Mixed topics",
            []
          ]
        ]
      ]
    ]
  },
  "Human Biology": {
    "11": [
      [
        1,
        "The Functioning Human",
        [
          [
            "h11-cells",
            "Cellular Processes",
            [
              "Cells and Tissues",
              "Cell Membrane and Transport",
              "Organic Compounds, Enzymes and Metabolism"
            ]
          ],
          [
            "h11-digestion",
            "Digestive System",
            []
          ],
          [
            "h11-excretion",
            "Excretory System",
            []
          ],
          [
            "h11-respiratory",
            "Respiratory System",
            []
          ],
          [
            "h11-circulation",
            "Circulatory System",
            [
              "Heart, Vessels and Circulation",
              "Blood, Grouping Systems and Diseases"
            ]
          ],
          [
            "h11-musculoskeletal",
            "Musculoskeletal System",
            [
              "Bones, Cartilage and Joints",
              "Muscles"
            ]
          ]
        ]
      ],
      [
        2,
        "Reproduction and Inheritance",
        [
          [
            "h11-dna",
            "DNA, Protein Synthesis and Gene Expression",
            []
          ],
          [
            "h11-division",
            "Mitosis and Cancer",
            []
          ],
          [
            "h11-inheritance",
            "Inheritance",
            [
              "Terminology, Modes of Inheritance and Punnett Squares",
              "Pedigrees and Genetic Counselling"
            ]
          ],
          [
            "h11-reproduction",
            "Reproduction",
            [
              "The Reproductive System and Sexual Intercourse",
              "Gametogenesis and Variation",
              "Reproductive Hormones and Cycles",
              "Contraception and STIs",
              "Embryonic Development and Stem Cells",
              "Foetal Development and Reproductive Technologies",
              "Birth and Breast Feeding"
            ]
          ]
        ]
      ],
      [
        0,
        "Across units",
        [
          [
            "h11-mixed",
            "Mixed topics",
            []
          ]
        ]
      ]
    ],
    "12": [
      [
        3,
        "Homeostasis and disease",
        [
          [
            "h12-endocrine",
            "The Endocrine System",
            [
              "Hormone Types, Hypothalamus and Pituitary Gland",
              "Endocrine Glands and Disorders"
            ]
          ],
          [
            "h12-nervous",
            "The Nervous System",
            [
              "Neurons, Action Potentials and Synapses",
              "Nervous System Divisions",
              "The Brain and Spinal Cord"
            ]
          ],
          [
            "h12-homeostasis",
            "Homeostatic Control",
            [
              "Blood Glucose and Gas Concentration Regulation",
              "Body Temperature Regulation",
              "Body Fluid Regulation"
            ]
          ],
          [
            "h12-disease",
            "Immunity",
            [
              "Pathogens and Non-Specific Defences",
              "Specific Defences, Immunity and Treatments"
            ]
          ]
        ]
      ],
      [
        4,
        "Human variation and evolution",
        [
          [
            "h12-variation",
            "Evolutionary Mechanisms",
            [
              "Sources of Variation",
              "Evolutionary Mechanisms"
            ]
          ],
          [
            "h12-evidence",
            "Evidence for Evolution",
            [
              "Fossils and Dating Methods",
              "Comparative Studies"
            ]
          ],
          [
            "h12-human",
            "Human Evolution",
            [
              "Humans as Primates and Bipedalism",
              "The Hominins"
            ]
          ],
          [
            "h12-biotech",
            "Biotechnology",
            [
              "Biotechnology"
            ]
          ]
        ]
      ],
      [
        0,
        "Across units",
        [
          [
            "h12-mixed",
            "Mixed topics",
            []
          ]
        ]
      ]
    ]
  },
  "Physics": {
    "11": [
      [
        1,
        "Motion, forces and energy",
        [
          [
            "p11-motion",
            "Motion and Forces",
            [
              "Displacement in Two Dimensions",
              "Velocity in Two Dimensions",
              "Acceleration in Two Dimensions",
              "Graphical Representation of Motion",
              "Equations of Motion",
              "Vertical Motion Under Gravity",
              "Newton’s Laws",
              "Complex Scenarios for Newton’s Second Law",
              "Coefficients of Friction",
              "Inclined Planes",
              "Momentum and Impulse"
            ]
          ],
          [
            "p11-thermal",
            "Mechanical and Thermal Energy",
            [
              "Mechanical Energy, Work and Power",
              "Conservation of Mechanical Energy",
              "Kinetic Theory and Internal Energy",
              "Specific Heat Capacity",
              "Latent Heat",
              "Heating and Cooling Curves",
              "Thermal Equilibrium",
              "Heat Pumps"
            ]
          ]
        ]
      ],
      [
        2,
        "Waves, nuclear and electrical physics",
        [
          [
            "p11-waves",
            "Waves",
            [
              "Introducing Waves",
              "Wave Applications using Reflection and Refraction",
              "Interference",
              "Resonance and Standing Waves"
            ]
          ],
          [
            "p11-nuclear",
            "Ionising Radiation and Nuclear Reactions",
            [
              "Radioactive Nuclei",
              "Nuclear Reactions",
              "Half Life",
              "Dosage and Applications",
              "Energy and Momentum in Nuclear Events",
              "Nuclear Fission and its Applications",
              "Nuclear Fusion and its Applications"
            ]
          ],
          [
            "p11-electric",
            "Electrical Forces and Energy",
            [
              "Voltage and Current",
              "Resistance and Ohm’s Law",
              "Energy and Power",
              "Series Circuits",
              "Parallel Circuits",
              "Compound Circuits",
              "Electrical Safety"
            ]
          ]
        ]
      ],
      [
        0,
        "Across units",
        [
          [
            "p11-inquiry",
            "Science Inquiry Skills",
            [
              "Rearranging Equations",
              "Scientific Notation and Units",
              "Uncertainty of Measurements",
              "Uncertainty of Calculated Values",
              "Graphing with Uncertainty"
            ]
          ],
          [
            "p11-mixed",
            "Mixed topics",
            []
          ]
        ]
      ]
    ],
    "12": [
      [
        3,
        "Gravity and Relativity",
        [
          [
            "p12-static",
            "Newtonian Motion within Gravitational Fields",
            [
              "Gravitational Fields and Forces",
              "Inclined Planes",
              "Projectile Motion",
              "Horizontal Circular Motion",
              "Vertical Circular Motion",
              "Satellite Motion",
              "Work and Energy in a Gravitational Field",
              "Static Equilibrium"
            ]
          ],
          [
            "p12-relativity",
            "Relativity",
            [
              "Postulates of Special Relativity",
              "Time Dilation and Length Contraction",
              "Relativistic Addition of Velocities",
              "Relativistic Energy and Momentum*",
              "General Relativity"
            ]
          ]
        ]
      ],
      [
        4,
        "Electromagnetism and Modern Physics",
        [
          [
            "p12-em",
            "Electromagnetism",
            [
              "Electric Fields and Forces",
              "Work and Energy in Uniform Electric Fields",
              "Magnetic Fields",
              "Magnetic Force on Moving Charge",
              "Applications of Electric and Magnetic Fields",
              "Electric Motors",
              "Electromagnetic Induction",
              "Generators",
              "Transformers and Power Transmission",
              "Further Applications of Induction"
            ]
          ],
          [
            "p12-quantum",
            "Wave-Particle Duality and the Quantum Theory",
            [
              "A Wave Model of Light",
              "A Particle Model of Light",
              "Atomic Spectra",
              "Applications of Energy Levels",
              "Matter Waves"
            ]
          ],
          [
            "p12-universe",
            "Cosmology",
            [
              "Big Bang Theory"
            ]
          ]
        ]
      ],
      [
        0,
        "Across units",
        [
          [
            "p12-mixed",
            "Mixed topics",
            []
          ]
        ]
      ]
    ]
  }
};
for(const subject of window.CURRICULUM){const years=suppliedTopicYears[subject.subject];if(!years)continue;subject.years=years;subject.topicSource={11:{label:'Step Up In Education headings · supplied screenshots'},12:{label:'Step Up In Education headings · supplied screenshots'}};}

// Preserve the existing broad groups for subjects outside this screenshot update.
const otherTopicLabels={'b11-diversity':'Biodiversity','b11-ecosystems':'Ecology','b11-cells':'Cell biology','b11-systems':'Body systems','b12-dna':'Genetics','b12-evolution':'Evolution','b12-homeostasis':'Homeostasis','b12-disease':'Disease and immunity','s11-biological':'Biological psychology','s11-lifespan':'Development','s11-inquiry':'Research methods','s11-attitudes':'Attitudes and stereotypes','s11-social':'Social influence','s12-memory':'Memory','s12-learning':'Learning','s12-inquiry':'Research methods','s12-motivation':'Motivation, wellbeing and health'};
for(const subject of window.CURRICULUM){if(suppliedTopicYears[subject.subject])continue;for(const units of Object.values(subject.years))for(const unit of units){const seen=new Set();unit[2]=unit[2].flatMap(([id,label])=>{id=window.TOPIC_GROUPS[id]||id;if(seen.has(id))return [];seen.add(id);return [[id,otherTopicLabels[id]||label]]});}}
