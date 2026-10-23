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

// Stable, selectable subtopic IDs for question classification and assessment building.
window.SUBTOPICS = {
  "p11-motion-s1": {
    "id": "p11-motion-s1",
    "label": "Displacement in Two Dimensions",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s2": {
    "id": "p11-motion-s2",
    "label": "Velocity in Two Dimensions",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s3": {
    "id": "p11-motion-s3",
    "label": "Acceleration in Two Dimensions",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s4": {
    "id": "p11-motion-s4",
    "label": "Graphical Representation of Motion",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s5": {
    "id": "p11-motion-s5",
    "label": "Equations of Motion",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s6": {
    "id": "p11-motion-s6",
    "label": "Vertical Motion Under Gravity",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s7": {
    "id": "p11-motion-s7",
    "label": "Newton’s Laws",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s8": {
    "id": "p11-motion-s8",
    "label": "Complex Scenarios for Newton’s Second Law",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s9": {
    "id": "p11-motion-s9",
    "label": "Coefficients of Friction",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s10": {
    "id": "p11-motion-s10",
    "label": "Inclined Planes",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-motion-s11": {
    "id": "p11-motion-s11",
    "label": "Momentum and Impulse",
    "topicId": "p11-motion",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s1": {
    "id": "p11-thermal-s1",
    "label": "Mechanical Energy, Work and Power",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s2": {
    "id": "p11-thermal-s2",
    "label": "Conservation of Mechanical Energy",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s3": {
    "id": "p11-thermal-s3",
    "label": "Kinetic Theory and Internal Energy",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s4": {
    "id": "p11-thermal-s4",
    "label": "Specific Heat Capacity",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s5": {
    "id": "p11-thermal-s5",
    "label": "Latent Heat",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s6": {
    "id": "p11-thermal-s6",
    "label": "Heating and Cooling Curves",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s7": {
    "id": "p11-thermal-s7",
    "label": "Thermal Equilibrium",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-thermal-s8": {
    "id": "p11-thermal-s8",
    "label": "Heat Pumps",
    "topicId": "p11-thermal",
    "subject": "Physics",
    "year": 11,
    "unit": 1
  },
  "p11-waves-s1": {
    "id": "p11-waves-s1",
    "label": "Introducing Waves",
    "topicId": "p11-waves",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-waves-s2": {
    "id": "p11-waves-s2",
    "label": "Wave Applications using Reflection and Refraction",
    "topicId": "p11-waves",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-waves-s3": {
    "id": "p11-waves-s3",
    "label": "Interference",
    "topicId": "p11-waves",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-waves-s4": {
    "id": "p11-waves-s4",
    "label": "Resonance and Standing Waves",
    "topicId": "p11-waves",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-nuclear-s1": {
    "id": "p11-nuclear-s1",
    "label": "Radioactive Nuclei",
    "topicId": "p11-nuclear",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-nuclear-s2": {
    "id": "p11-nuclear-s2",
    "label": "Nuclear Reactions",
    "topicId": "p11-nuclear",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-nuclear-s3": {
    "id": "p11-nuclear-s3",
    "label": "Half Life",
    "topicId": "p11-nuclear",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-nuclear-s4": {
    "id": "p11-nuclear-s4",
    "label": "Dosage and Applications",
    "topicId": "p11-nuclear",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-nuclear-s5": {
    "id": "p11-nuclear-s5",
    "label": "Energy and Momentum in Nuclear Events",
    "topicId": "p11-nuclear",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-nuclear-s6": {
    "id": "p11-nuclear-s6",
    "label": "Nuclear Fission and its Applications",
    "topicId": "p11-nuclear",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-nuclear-s7": {
    "id": "p11-nuclear-s7",
    "label": "Nuclear Fusion and its Applications",
    "topicId": "p11-nuclear",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-electric-s1": {
    "id": "p11-electric-s1",
    "label": "Voltage and Current",
    "topicId": "p11-electric",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-electric-s2": {
    "id": "p11-electric-s2",
    "label": "Resistance and Ohm’s Law",
    "topicId": "p11-electric",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-electric-s3": {
    "id": "p11-electric-s3",
    "label": "Energy and Power",
    "topicId": "p11-electric",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-electric-s4": {
    "id": "p11-electric-s4",
    "label": "Series Circuits",
    "topicId": "p11-electric",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-electric-s5": {
    "id": "p11-electric-s5",
    "label": "Parallel Circuits",
    "topicId": "p11-electric",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-electric-s6": {
    "id": "p11-electric-s6",
    "label": "Compound Circuits",
    "topicId": "p11-electric",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-electric-s7": {
    "id": "p11-electric-s7",
    "label": "Electrical Safety",
    "topicId": "p11-electric",
    "subject": "Physics",
    "year": 11,
    "unit": 2
  },
  "p11-inquiry-s1": {
    "id": "p11-inquiry-s1",
    "label": "Rearranging Equations",
    "topicId": "p11-inquiry",
    "subject": "Physics",
    "year": 11,
    "unit": 0
  },
  "p11-inquiry-s2": {
    "id": "p11-inquiry-s2",
    "label": "Scientific Notation and Units",
    "topicId": "p11-inquiry",
    "subject": "Physics",
    "year": 11,
    "unit": 0
  },
  "p11-inquiry-s3": {
    "id": "p11-inquiry-s3",
    "label": "Uncertainty of Measurements",
    "topicId": "p11-inquiry",
    "subject": "Physics",
    "year": 11,
    "unit": 0
  },
  "p11-inquiry-s4": {
    "id": "p11-inquiry-s4",
    "label": "Uncertainty of Calculated Values",
    "topicId": "p11-inquiry",
    "subject": "Physics",
    "year": 11,
    "unit": 0
  },
  "p11-inquiry-s5": {
    "id": "p11-inquiry-s5",
    "label": "Graphing with Uncertainty",
    "topicId": "p11-inquiry",
    "subject": "Physics",
    "year": 11,
    "unit": 0
  },
  "p12-static-s1": {
    "id": "p12-static-s1",
    "label": "Gravitational Fields and Forces",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-static-s2": {
    "id": "p12-static-s2",
    "label": "Inclined Planes",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-static-s3": {
    "id": "p12-static-s3",
    "label": "Projectile Motion",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-static-s4": {
    "id": "p12-static-s4",
    "label": "Horizontal Circular Motion",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-static-s5": {
    "id": "p12-static-s5",
    "label": "Vertical Circular Motion",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-static-s6": {
    "id": "p12-static-s6",
    "label": "Satellite Motion",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-static-s7": {
    "id": "p12-static-s7",
    "label": "Work and Energy in a Gravitational Field",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-static-s8": {
    "id": "p12-static-s8",
    "label": "Static Equilibrium",
    "topicId": "p12-static",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-relativity-s1": {
    "id": "p12-relativity-s1",
    "label": "Postulates of Special Relativity",
    "topicId": "p12-relativity",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-relativity-s2": {
    "id": "p12-relativity-s2",
    "label": "Time Dilation and Length Contraction",
    "topicId": "p12-relativity",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-relativity-s3": {
    "id": "p12-relativity-s3",
    "label": "Relativistic Addition of Velocities",
    "topicId": "p12-relativity",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-relativity-s4": {
    "id": "p12-relativity-s4",
    "label": "Relativistic Energy and Momentum*",
    "topicId": "p12-relativity",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-relativity-s5": {
    "id": "p12-relativity-s5",
    "label": "General Relativity",
    "topicId": "p12-relativity",
    "subject": "Physics",
    "year": 12,
    "unit": 3
  },
  "p12-em-s1": {
    "id": "p12-em-s1",
    "label": "Electric Fields and Forces",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s2": {
    "id": "p12-em-s2",
    "label": "Work and Energy in Uniform Electric Fields",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s3": {
    "id": "p12-em-s3",
    "label": "Magnetic Fields",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s4": {
    "id": "p12-em-s4",
    "label": "Magnetic Force on Moving Charge",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s5": {
    "id": "p12-em-s5",
    "label": "Applications of Electric and Magnetic Fields",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s6": {
    "id": "p12-em-s6",
    "label": "Electric Motors",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s7": {
    "id": "p12-em-s7",
    "label": "Electromagnetic Induction",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s8": {
    "id": "p12-em-s8",
    "label": "Generators",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s9": {
    "id": "p12-em-s9",
    "label": "Transformers and Power Transmission",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-em-s10": {
    "id": "p12-em-s10",
    "label": "Further Applications of Induction",
    "topicId": "p12-em",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-quantum-s1": {
    "id": "p12-quantum-s1",
    "label": "A Wave Model of Light",
    "topicId": "p12-quantum",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-quantum-s2": {
    "id": "p12-quantum-s2",
    "label": "A Particle Model of Light",
    "topicId": "p12-quantum",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-quantum-s3": {
    "id": "p12-quantum-s3",
    "label": "Atomic Spectra",
    "topicId": "p12-quantum",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-quantum-s4": {
    "id": "p12-quantum-s4",
    "label": "Applications of Energy Levels",
    "topicId": "p12-quantum",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-quantum-s5": {
    "id": "p12-quantum-s5",
    "label": "Matter Waves",
    "topicId": "p12-quantum",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "p12-universe-s1": {
    "id": "p12-universe-s1",
    "label": "Big Bang Theory",
    "topicId": "p12-universe",
    "subject": "Physics",
    "year": 12,
    "unit": 4
  },
  "c11-atomic-s1": {
    "id": "c11-atomic-s1",
    "label": "Atomic Structure",
    "topicId": "c11-atomic",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-atomic-s2": {
    "id": "c11-atomic-s2",
    "label": "The Periodic Table",
    "topicId": "c11-atomic",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-atomic-s3": {
    "id": "c11-atomic-s3",
    "label": "Isotopes and Mass Spectrometry",
    "topicId": "c11-atomic",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-atomic-s4": {
    "id": "c11-atomic-s4",
    "label": "Atomic Absorption Spectroscopy",
    "topicId": "c11-atomic",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-bonding-s1": {
    "id": "c11-bonding-s1",
    "label": "Compounds and Mixtures",
    "topicId": "c11-bonding",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-bonding-s2": {
    "id": "c11-bonding-s2",
    "label": "Ionic Bonding",
    "topicId": "c11-bonding",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-bonding-s3": {
    "id": "c11-bonding-s3",
    "label": "Metallic Bonding",
    "topicId": "c11-bonding",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-bonding-s4": {
    "id": "c11-bonding-s4",
    "label": "Covalent Bonding",
    "topicId": "c11-bonding",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-bonding-s5": {
    "id": "c11-bonding-s5",
    "label": "Nanomaterials",
    "topicId": "c11-bonding",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-carbon-s1": {
    "id": "c11-carbon-s1",
    "label": "Carbon and Covalent Network Solids",
    "topicId": "c11-carbon",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-carbon-s2": {
    "id": "c11-carbon-s2",
    "label": "Hydrocarbons Structure and Naming",
    "topicId": "c11-carbon",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-carbon-s3": {
    "id": "c11-carbon-s3",
    "label": "Reactions of Hydrocarbons",
    "topicId": "c11-carbon",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-reactions-s1": {
    "id": "c11-reactions-s1",
    "label": "The Mole",
    "topicId": "c11-reactions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-reactions-s2": {
    "id": "c11-reactions-s2",
    "label": "Stoichiometry",
    "topicId": "c11-reactions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-reactions-s3": {
    "id": "c11-reactions-s3",
    "label": "Percentage Composition",
    "topicId": "c11-reactions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-reactions-s4": {
    "id": "c11-reactions-s4",
    "label": "Energy Changes and Fuels",
    "topicId": "c11-reactions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 1
  },
  "c11-gases-s1": {
    "id": "c11-gases-s1",
    "label": "Molecular Shapes and Polarity",
    "topicId": "c11-gases",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-gases-s2": {
    "id": "c11-gases-s2",
    "label": "Intermolecular Forces",
    "topicId": "c11-gases",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-gases-s3": {
    "id": "c11-gases-s3",
    "label": "Kinetic Theory and Gases",
    "topicId": "c11-gases",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-gases-s4": {
    "id": "c11-gases-s4",
    "label": "Molar Volume and Gas Calculations",
    "topicId": "c11-gases",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-gases-s5": {
    "id": "c11-gases-s5",
    "label": "Chromatography",
    "topicId": "c11-gases",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-solutions-s1": {
    "id": "c11-solutions-s1",
    "label": "Solubility",
    "topicId": "c11-solutions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-solutions-s2": {
    "id": "c11-solutions-s2",
    "label": "Solution Concentration",
    "topicId": "c11-solutions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-solutions-s3": {
    "id": "c11-solutions-s3",
    "label": "Precipitation Reactions",
    "topicId": "c11-solutions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-solutions-s4": {
    "id": "c11-solutions-s4",
    "label": "Acid Base Theory and pH",
    "topicId": "c11-solutions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-solutions-s5": {
    "id": "c11-solutions-s5",
    "label": "Reactions of Acids and Bases",
    "topicId": "c11-solutions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-solutions-s6": {
    "id": "c11-solutions-s6",
    "label": "Water",
    "topicId": "c11-solutions",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-rates-s1": {
    "id": "c11-rates-s1",
    "label": "Rates of Reaction",
    "topicId": "c11-rates",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c11-rates-s2": {
    "id": "c11-rates-s2",
    "label": "Factors Affecting Rates of Reaction",
    "topicId": "c11-rates",
    "subject": "Chemistry",
    "year": 11,
    "unit": 2
  },
  "c12-equilibrium-s1": {
    "id": "c12-equilibrium-s1",
    "label": "Rates of Reaction",
    "topicId": "c12-equilibrium",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-equilibrium-s2": {
    "id": "c12-equilibrium-s2",
    "label": "Reversible Reactions and Equilibrium",
    "topicId": "c12-equilibrium",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-equilibrium-s3": {
    "id": "c12-equilibrium-s3",
    "label": "Changes to Equilibrium",
    "topicId": "c12-equilibrium",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-equilibrium-s4": {
    "id": "c12-equilibrium-s4",
    "label": "Equilibrium Law",
    "topicId": "c12-equilibrium",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-equilibrium-s5": {
    "id": "c12-equilibrium-s5",
    "label": "Ocean Equilibrium",
    "topicId": "c12-equilibrium",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-acids-s1": {
    "id": "c12-acids-s1",
    "label": "Acid-Base Theories",
    "topicId": "c12-acids",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-acids-s2": {
    "id": "c12-acids-s2",
    "label": "Autoionisation of Water and pH",
    "topicId": "c12-acids",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-acids-s3": {
    "id": "c12-acids-s3",
    "label": "Acid-Base Strength and Salts",
    "topicId": "c12-acids",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-acids-s4": {
    "id": "c12-acids-s4",
    "label": "Buffers",
    "topicId": "c12-acids",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-acids-s5": {
    "id": "c12-acids-s5",
    "label": "Acid-Base Titrations",
    "topicId": "c12-acids",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-acids-s6": {
    "id": "c12-acids-s6",
    "label": "Titration Calculations",
    "topicId": "c12-acids",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-redox-s1": {
    "id": "c12-redox-s1",
    "label": "Redox Reactions and Oxidation Numbers",
    "topicId": "c12-redox",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-redox-s2": {
    "id": "c12-redox-s2",
    "label": "Redox Equations",
    "topicId": "c12-redox",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-redox-s3": {
    "id": "c12-redox-s3",
    "label": "Galvanic Cells",
    "topicId": "c12-redox",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-redox-s4": {
    "id": "c12-redox-s4",
    "label": "Electrolysis",
    "topicId": "c12-redox",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-redox-s5": {
    "id": "c12-redox-s5",
    "label": "Batteries and Fuel Cells",
    "topicId": "c12-redox",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-redox-s6": {
    "id": "c12-redox-s6",
    "label": "Corrosion",
    "topicId": "c12-redox",
    "subject": "Chemistry",
    "year": 12,
    "unit": 3
  },
  "c12-organic-s1": {
    "id": "c12-organic-s1",
    "label": "Hydrocarbons Review",
    "topicId": "c12-organic",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-organic-s2": {
    "id": "c12-organic-s2",
    "label": "Functional Groups",
    "topicId": "c12-organic",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-organic-s3": {
    "id": "c12-organic-s3",
    "label": "Reactions of Organic Compounds",
    "topicId": "c12-organic",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-organic-s4": {
    "id": "c12-organic-s4",
    "label": "Empirical Formula",
    "topicId": "c12-organic",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-organic-s5": {
    "id": "c12-organic-s5",
    "label": "Polymers",
    "topicId": "c12-organic",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-organic-s6": {
    "id": "c12-organic-s6",
    "label": "Amino Acids and Proteins",
    "topicId": "c12-organic",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-synthesis-s1": {
    "id": "c12-synthesis-s1",
    "label": "Chemical Synthesis and Yield",
    "topicId": "c12-synthesis",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-synthesis-s2": {
    "id": "c12-synthesis-s2",
    "label": "Limiting Reagent and Yield Calculations",
    "topicId": "c12-synthesis",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-synthesis-s3": {
    "id": "c12-synthesis-s3",
    "label": "Biodiesel, Ethanol and Ethyl Ethanoate",
    "topicId": "c12-synthesis",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "c12-synthesis-s4": {
    "id": "c12-synthesis-s4",
    "label": "Soaps and Plastics",
    "topicId": "c12-synthesis",
    "subject": "Chemistry",
    "year": 12,
    "unit": 4
  },
  "b11-diversity-s1": {
    "id": "b11-diversity-s1",
    "label": "Biodiversity",
    "topicId": "b11-diversity",
    "subject": "Biology",
    "year": 11,
    "unit": 1
  },
  "b11-ecosystems-s1": {
    "id": "b11-ecosystems-s1",
    "label": "Ecology",
    "topicId": "b11-ecosystems",
    "subject": "Biology",
    "year": 11,
    "unit": 1
  },
  "b11-cells-s1": {
    "id": "b11-cells-s1",
    "label": "Cell biology",
    "topicId": "b11-cells",
    "subject": "Biology",
    "year": 11,
    "unit": 2
  },
  "b11-systems-s1": {
    "id": "b11-systems-s1",
    "label": "Body systems",
    "topicId": "b11-systems",
    "subject": "Biology",
    "year": 11,
    "unit": 2
  },
  "b12-dna-s1": {
    "id": "b12-dna-s1",
    "label": "Genetics",
    "topicId": "b12-dna",
    "subject": "Biology",
    "year": 12,
    "unit": 3
  },
  "b12-evolution-s1": {
    "id": "b12-evolution-s1",
    "label": "Evolution",
    "topicId": "b12-evolution",
    "subject": "Biology",
    "year": 12,
    "unit": 3
  },
  "b12-homeostasis-s1": {
    "id": "b12-homeostasis-s1",
    "label": "Homeostasis",
    "topicId": "b12-homeostasis",
    "subject": "Biology",
    "year": 12,
    "unit": 4
  },
  "b12-disease-s1": {
    "id": "b12-disease-s1",
    "label": "Disease and immunity",
    "topicId": "b12-disease",
    "subject": "Biology",
    "year": 12,
    "unit": 4
  },
  "h11-cells-s1": {
    "id": "h11-cells-s1",
    "label": "Cells and Tissues",
    "topicId": "h11-cells",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-cells-s2": {
    "id": "h11-cells-s2",
    "label": "Cell Membrane and Transport",
    "topicId": "h11-cells",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-cells-s3": {
    "id": "h11-cells-s3",
    "label": "Organic Compounds, Enzymes and Metabolism",
    "topicId": "h11-cells",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-digestion-s1": {
    "id": "h11-digestion-s1",
    "label": "Digestive System",
    "topicId": "h11-digestion",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-excretion-s1": {
    "id": "h11-excretion-s1",
    "label": "Excretory System",
    "topicId": "h11-excretion",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-respiratory-s1": {
    "id": "h11-respiratory-s1",
    "label": "Respiratory System",
    "topicId": "h11-respiratory",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-circulation-s1": {
    "id": "h11-circulation-s1",
    "label": "Heart, Vessels and Circulation",
    "topicId": "h11-circulation",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-circulation-s2": {
    "id": "h11-circulation-s2",
    "label": "Blood, Grouping Systems and Diseases",
    "topicId": "h11-circulation",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-musculoskeletal-s1": {
    "id": "h11-musculoskeletal-s1",
    "label": "Bones, Cartilage and Joints",
    "topicId": "h11-musculoskeletal",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-musculoskeletal-s2": {
    "id": "h11-musculoskeletal-s2",
    "label": "Muscles",
    "topicId": "h11-musculoskeletal",
    "subject": "Human Biology",
    "year": 11,
    "unit": 1
  },
  "h11-dna-s1": {
    "id": "h11-dna-s1",
    "label": "DNA, Protein Synthesis and Gene Expression",
    "topicId": "h11-dna",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-division-s1": {
    "id": "h11-division-s1",
    "label": "Mitosis and Cancer",
    "topicId": "h11-division",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-inheritance-s1": {
    "id": "h11-inheritance-s1",
    "label": "Terminology, Modes of Inheritance and Punnett Squares",
    "topicId": "h11-inheritance",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-inheritance-s2": {
    "id": "h11-inheritance-s2",
    "label": "Pedigrees and Genetic Counselling",
    "topicId": "h11-inheritance",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-reproduction-s1": {
    "id": "h11-reproduction-s1",
    "label": "The Reproductive System and Sexual Intercourse",
    "topicId": "h11-reproduction",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-reproduction-s2": {
    "id": "h11-reproduction-s2",
    "label": "Gametogenesis and Variation",
    "topicId": "h11-reproduction",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-reproduction-s3": {
    "id": "h11-reproduction-s3",
    "label": "Reproductive Hormones and Cycles",
    "topicId": "h11-reproduction",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-reproduction-s4": {
    "id": "h11-reproduction-s4",
    "label": "Contraception and STIs",
    "topicId": "h11-reproduction",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-reproduction-s5": {
    "id": "h11-reproduction-s5",
    "label": "Embryonic Development and Stem Cells",
    "topicId": "h11-reproduction",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-reproduction-s6": {
    "id": "h11-reproduction-s6",
    "label": "Foetal Development and Reproductive Technologies",
    "topicId": "h11-reproduction",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h11-reproduction-s7": {
    "id": "h11-reproduction-s7",
    "label": "Birth and Breast Feeding",
    "topicId": "h11-reproduction",
    "subject": "Human Biology",
    "year": 11,
    "unit": 2
  },
  "h12-endocrine-s1": {
    "id": "h12-endocrine-s1",
    "label": "Hormone Types, Hypothalamus and Pituitary Gland",
    "topicId": "h12-endocrine",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-endocrine-s2": {
    "id": "h12-endocrine-s2",
    "label": "Endocrine Glands and Disorders",
    "topicId": "h12-endocrine",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-nervous-s1": {
    "id": "h12-nervous-s1",
    "label": "Neurons, Action Potentials and Synapses",
    "topicId": "h12-nervous",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-nervous-s2": {
    "id": "h12-nervous-s2",
    "label": "Nervous System Divisions",
    "topicId": "h12-nervous",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-nervous-s3": {
    "id": "h12-nervous-s3",
    "label": "The Brain and Spinal Cord",
    "topicId": "h12-nervous",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-homeostasis-s1": {
    "id": "h12-homeostasis-s1",
    "label": "Blood Glucose and Gas Concentration Regulation",
    "topicId": "h12-homeostasis",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-homeostasis-s2": {
    "id": "h12-homeostasis-s2",
    "label": "Body Temperature Regulation",
    "topicId": "h12-homeostasis",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-homeostasis-s3": {
    "id": "h12-homeostasis-s3",
    "label": "Body Fluid Regulation",
    "topicId": "h12-homeostasis",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-disease-s1": {
    "id": "h12-disease-s1",
    "label": "Pathogens and Non-Specific Defences",
    "topicId": "h12-disease",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-disease-s2": {
    "id": "h12-disease-s2",
    "label": "Specific Defences, Immunity and Treatments",
    "topicId": "h12-disease",
    "subject": "Human Biology",
    "year": 12,
    "unit": 3
  },
  "h12-variation-s1": {
    "id": "h12-variation-s1",
    "label": "Sources of Variation",
    "topicId": "h12-variation",
    "subject": "Human Biology",
    "year": 12,
    "unit": 4
  },
  "h12-variation-s2": {
    "id": "h12-variation-s2",
    "label": "Evolutionary Mechanisms",
    "topicId": "h12-variation",
    "subject": "Human Biology",
    "year": 12,
    "unit": 4
  },
  "h12-evidence-s1": {
    "id": "h12-evidence-s1",
    "label": "Fossils and Dating Methods",
    "topicId": "h12-evidence",
    "subject": "Human Biology",
    "year": 12,
    "unit": 4
  },
  "h12-evidence-s2": {
    "id": "h12-evidence-s2",
    "label": "Comparative Studies",
    "topicId": "h12-evidence",
    "subject": "Human Biology",
    "year": 12,
    "unit": 4
  },
  "h12-human-s1": {
    "id": "h12-human-s1",
    "label": "Humans as Primates and Bipedalism",
    "topicId": "h12-human",
    "subject": "Human Biology",
    "year": 12,
    "unit": 4
  },
  "h12-human-s2": {
    "id": "h12-human-s2",
    "label": "The Hominins",
    "topicId": "h12-human",
    "subject": "Human Biology",
    "year": 12,
    "unit": 4
  },
  "h12-biotech-s1": {
    "id": "h12-biotech-s1",
    "label": "Biotechnology",
    "topicId": "h12-biotech",
    "subject": "Human Biology",
    "year": 12,
    "unit": 4
  },
  "s11-biological-s1": {
    "id": "s11-biological-s1",
    "label": "Biological psychology",
    "topicId": "s11-biological",
    "subject": "Psychology",
    "year": 11,
    "unit": 1
  },
  "s11-lifespan-s1": {
    "id": "s11-lifespan-s1",
    "label": "Development",
    "topicId": "s11-lifespan",
    "subject": "Psychology",
    "year": 11,
    "unit": 1
  },
  "s11-inquiry-s1": {
    "id": "s11-inquiry-s1",
    "label": "Research methods",
    "topicId": "s11-inquiry",
    "subject": "Psychology",
    "year": 11,
    "unit": 1
  },
  "s11-attitudes-s1": {
    "id": "s11-attitudes-s1",
    "label": "Attitudes and stereotypes",
    "topicId": "s11-attitudes",
    "subject": "Psychology",
    "year": 11,
    "unit": 2
  },
  "s11-social-s1": {
    "id": "s11-social-s1",
    "label": "Social influence",
    "topicId": "s11-social",
    "subject": "Psychology",
    "year": 11,
    "unit": 2
  },
  "s12-memory-s1": {
    "id": "s12-memory-s1",
    "label": "Memory",
    "topicId": "s12-memory",
    "subject": "Psychology",
    "year": 12,
    "unit": 3
  },
  "s12-learning-s1": {
    "id": "s12-learning-s1",
    "label": "Learning",
    "topicId": "s12-learning",
    "subject": "Psychology",
    "year": 12,
    "unit": 3
  },
  "s12-inquiry-s1": {
    "id": "s12-inquiry-s1",
    "label": "Research methods",
    "topicId": "s12-inquiry",
    "subject": "Psychology",
    "year": 12,
    "unit": 3
  },
  "s12-motivation-s1": {
    "id": "s12-motivation-s1",
    "label": "Motivation, wellbeing and health",
    "topicId": "s12-motivation",
    "subject": "Psychology",
    "year": 12,
    "unit": 4
  }
};
window.QUESTION_TYPES = {
  "multipart": "Multipart",
  "multiple_choice": "Multiple choice",
  "short_answer": "Short answer",
  "calculation": "Calculation",
  "extended_response": "Extended response",
  "graphing": "Graphing",
  "diagram": "Diagram / labelling",
  "data_interpretation": "Data interpretation",
  "table_completion": "Table completion",
  "scientific_inquiry": "Scientific inquiry",
  "equation": "Equation / symbolic response"
};

// Cross-cutting skills found in uploaded Human Biology papers.
for (const u of window.CURRICULUM.find(s=>s.subject==='Human Biology').years[12]) for (const t of u[2]) {
 if(t[0]==='h12-homeostasis')t[2].push('Homeostasis and Negative Feedback');
 if(t[0]==='h12-mixed')t[2].push('Scientific Inquiry and Data Skills');
}
window.SUBTOPICS['h12-homeostasis-s4']={id:'h12-homeostasis-s4',label:'Homeostasis and Negative Feedback',topicId:'h12-homeostasis',subject:'Human Biology',year:12,unit:3};
window.SUBTOPICS['h12-mixed-s1']={id:'h12-mixed-s1',label:'Scientific Inquiry and Data Skills',topicId:'h12-mixed',subject:'Human Biology',year:12,unit:0};

window.QUESTION_TYPES.multipart='Multipart';
