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

// Broad topic groups retain existing question IDs and progress.
window.TOPIC_GROUPS = {
 'p11-momentum':'p11-motion','p11-energy':'p11-motion',
 'p12-circle':'p12-static','p12-gravity':'p12-static','p12-induction':'p12-em','p12-universe':'p12-quantum',
 'c11-bonding':'c11-atomic','c11-moles':'c11-reactions','c11-solutions':'c11-gases',
 'c12-organic-reactions':'c12-organic','c12-synthesis':'c12-organic',
 'b11-conservation':'b11-ecosystems','b11-metabolism':'b11-cells',
 'b12-speciation':'b12-evolution','b12-immunity':'b12-disease',
 'h11-division':'h11-inheritance','h12-nervous':'h12-homeostasis','h12-human':'h12-evidence',
 's11-stereotypes':'s11-attitudes','s12-stress':'s12-motivation','s12-sleep':'s12-motivation'
};
const broadLabels={
 'p11-motion':'Mechanics','p11-thermal':'Thermal physics','p11-waves':'Waves','p11-nuclear':'Nuclear physics','p11-electric':'Electricity',
 'p12-static':'Mechanics and gravity','p12-relativity':'Relativity','p12-em':'Electromagnetism','p12-quantum':'Modern physics',
 'c11-atomic':'Atomic structure and bonding','c11-reactions':'Chemical reactions','c11-gases':'Molecular interactions','c11-acids':'Acids and bases','c11-rates':'Reaction rates',
 'c12-equilibrium':'Equilibrium','c12-acids':'Acids and bases','c12-redox':'Redox','c12-organic':'Organic chemistry',
 'b11-diversity':'Biodiversity','b11-ecosystems':'Ecology','b11-cells':'Cell biology','b11-systems':'Body systems',
 'b12-dna':'Genetics','b12-evolution':'Evolution','b12-homeostasis':'Homeostasis','b12-disease':'Disease and immunity',
 'h11-cells':'Cell biology','h11-digestion':'Digestion','h11-transport':'Respiration and circulation','h11-excretion':'Excretion',
 'h11-reproduction':'Reproduction','h11-inheritance':'Genetics',
 'h12-homeostasis':'Homeostasis','h12-disease':'Disease and immunity','h12-variation':'Genetics','h12-evidence':'Evolution',
 's11-biological':'Biological psychology','s11-lifespan':'Development','s11-inquiry':'Research methods','s11-attitudes':'Attitudes and stereotypes','s11-social':'Social influence',
 's12-memory':'Memory','s12-learning':'Learning','s12-inquiry':'Research methods','s12-motivation':'Motivation, wellbeing and health'
};
for(const subject of window.CURRICULUM)for(const units of Object.values(subject.years))for(const unit of units){
 const seen=new Set();unit[2]=unit[2].flatMap(([id,label])=>{id=window.TOPIC_GROUPS[id]||id;if(seen.has(id))return [];seen.add(id);return [[id,broadLabels[id]||label]]});
}

// Verified public Step Up In Education chapter headings (23 October 2026).
// https://www.stepupineducation.com/subjects/my-subjects/physics-unit-1-and-2/
Object.assign(window.TOPIC_GROUPS,{'p11-motion':'p11-motion','p11-momentum':'p11-motion','p11-energy':'p11-thermal','p11-thermal':'p11-thermal'});
const stepUpPhysics=window.CURRICULUM.find(s=>s.subject==='Physics');
stepUpPhysics.years[11][0][2]=[['p11-motion','Motion and Forces'],['p11-thermal','Mechanical and Thermal Energy']];
stepUpPhysics.years[11][1][2]=[['p11-waves','Waves'],['p11-nuclear','Ionising Radiation and Nuclear Reactions'],['p11-electric','Electrical Forces and Energy']];
stepUpPhysics.topicSource={11:{label:'Step Up In Education chapter headings',url:'https://www.stepupineducation.com/subjects/my-subjects/physics-unit-1-and-2/'}};
