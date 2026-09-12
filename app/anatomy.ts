export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac'|'pregnancy';
export const SYSTEMS: {id:SystemId;name:string;color:string;description:string}[] = [
 {id:'skeletal',name:'Squelette',color:'#e2d9ba',description:'Les os constituent l\'armature de soutien du corps, protègent les organes et offrent des points d\'ancrage aux muscles. Leur tissu interne stocke également des minéraux et produit des cellules sanguines.'},
 {id:'muscular',name:'Muscles',color:'#a85b50',description:'Les muscles squelettiques génèrent le mouvement en tirant sur leurs insertions. Associés aux tendons, ils mobilisent les articulations, stabilisent la posture et produisent de la chaleur.'},
 {id:'cardiac',name:'Cœur',color:'#b96760',description:'Le cœur est une pompe musculaire à quatre cavités. Ses valves dirigent le sang vers les circulations pulmonaire et systémique.'},
 {id:'sensory',name:'Organes sensoriels',color:'#b0c8ce',description:'Ces structures contribuent aux sens spéciaux, notamment la vue, l\'ouïe et l\'équilibre. Leurs tissus spécialisés détectent les stimuli et collaborent avec le système nerveux pour transmettre l\'information.'},
 {id:'arterial',name:'Artères',color:'#c05245',description:'Le cœur propulse le sang dans la circulation. Les artères conduisent le sang depuis le cœur vers les tissus ou, dans la circulation pulmonaire, vers les poumons.'},
 {id:'venous',name:'Veines',color:'#527c9f',description:'Les veines ramènent le sang vers le cœur. Les réseaux superficiels et profonds collectent le sang des tissus ; les veines pulmonaires ramènent le sang oxygéné depuis les poumons.'},
 {id:'nervous',name:'Système nerveux',color:'#d8b565',description:'L\'encéphale, la moelle épinière et les nerfs périphériques transmettent et traitent les signaux. Ils assurent la sensation, le mouvement, la coordination et la régulation automatique des fonctions corporelles.'},
 {id:'respiratory',name:'Respiratoire',color:'#b98991',description:'Les voies aériennes acheminent l\'air vers les poumons, où l\'oxygène et le dioxyde de carbone s\'échangent entre l\'air et le sang. La respiration repose sur les variations de pression produites par les muscles respiratoires.'},
 {id:'digestive',name:'Digestif',color:'#b8916b',description:'Le tube digestif décompose les aliments, absorbe les nutriments et l\'eau, et évacue les déchets. Les organes accessoires fournissent la bile et les enzymes digestives.'},
 {id:'urinary',name:'Urinaire',color:'#b47961',description:'Les reins filtrent le sang et régulent l\'équilibre hydrique, électrolytique et acido-basique. L\'urine chemine par les uretères jusqu\'à la vessie et est évacuée par l\'urètre.'},
 {id:'lymphatic',name:'Lymphatique',color:'#879f7c',description:'Les vaisseaux lymphatiques restituent l\'excès de liquide interstitiel à la circulation. Les nœuds lymphatiques et les autres organes lymphoïdes assurent la surveillance immunitaire et les réponses immunes.'},
 {id:'endocrine',name:'Endocrinien',color:'#c5a09a',description:'Les organes endocriniens libèrent des hormones dans le sang pour coordonner des processus tels que le métabolisme, la croissance, les réponses au stress et la reproduction.'},
 {id:'reproductive',name:'Reproducteur',color:'#bda098',description:'Les structures reproductrices masculines représentées ici participent à la production, la maturation et le transport des spermatozoïdes, ainsi qu\'à la production d\'hormones sexuelles.'},
 {id:'integumentary',name:'Surface corporelle',color:'#ba9b7d',description:'La surface corporelle constitue une référence anatomique externe. Le système tégumentaire forme une barrière protectrice et contribue à la sensation et à la thermorégulation.'},
 {id:'connective',name:'Tissu conjonctif',color:'#aec3bb',description:'Le cartilage, les ligaments et autres tissus conjonctifs soutiennent, relient et séparent les structures. Ils stabilisent notamment les articulations et répartissent les charges mécaniques.'},
];
export interface Part {id:string;name:string;conceptId:string;system:SystemId;chunk:number;positions:number;normals:number;indices:number;vertexCount:number;indexCount:number;bounds:[number[],number[]]}
export interface Concept {id:string;name:string;elements:string[]}
export interface Atlas {version:string;sex?:'male'|'female';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number;system?:SystemId;parts?:number}[];triangles:number}
export type View = 'three-quarter'|'front'|'back'|'side';
export interface SceneState {inspectorOpen?:boolean;explode:number;visible:SystemId[];selected:string[];isolate:boolean;view:View;rotate:boolean;reset:number}
export const DEFAULT_VISIBLE:SystemId[] = ['cardiac','sensory','skeletal','muscular','arterial','venous','nervous','respiratory','digestive','urinary','lymphatic','endocrine','reproductive','connective'];
export const EXPLANATIONS:Record<string,string> = {
 'heart':'Pompe musculaire située dans le thorax. Sa partie droite envoie le sang vers les poumons ; sa partie gauche l\'envoie dans la circulation systémique.',
 'liver':'Grand organe situé sous la partie droite du diaphragme. Il traite les nutriments absorbés, produit la bile et synthétise de nombreuses protéines circulant dans le sang.',
 'brain':'Organe central du système nerveux. Ses régions interconnectées sous-tendent la perception, le mouvement, la mémoire, le langage et la régulation des fonctions corporelles.',
 'stomach':'Chambre musculaire entre l\'œsophage et l\'intestin grêle. Il stocke et mélange les aliments avec l\'acide et les enzymes avant de les libérer dans le duodénum.',
 'spleen':'Organe lymphoïde dans le quadrant supérieur gauche de l\'abdomen. Il filtre le sang, élimine les globules rouges vieillissants et participe aux réponses immunitaires.',
 'pancreas':'Organe abdominal aux rôles digestif et endocrinien. Il fournit des enzymes à l\'intestin grêle et libère des hormones dont l\'insuline et le glucagon.',
 'urinary bladder':'Réservoir musculaire dans le pelvis qui stocke l\'urine acheminée par les uretères depuis les reins.',
 'trachea':'La voie aérienne principale reliant le larynx aux bronches. Ses arceaux cartilagineux maintiennent les voies aériennes ouvertes lors de la respiration.',
 'diaphragm':'Muscle large séparant le thorax de l\'abdomen. Sa contraction augmente le volume thoracique et contribue à l\'inspiration.',

 'kidney':'A paired organ at the back of the abdomen. Its nephrons filter blood, reabsorb what the body needs, and produce urine that drains into the ureter.',
 'ureter':'A muscular tube carrying urine from the kidney to the bladder. Waves of contraction move urine along it rather than gravity alone.',
 'urethra':'The final passage carrying urine from the bladder out of the body.',
 'right lung':'The right lung has three lobes. Air arriving through the bronchial tree reaches alveoli, where oxygen and carbon dioxide exchange with the blood.',
 'left lung':'The left lung has two lobes, leaving room for the heart. Its bronchial tree ends in alveoli where gas exchange takes place.',
 'bronchus':'The airways branching from the trachea into each lung, dividing repeatedly into smaller passages that end at the alveoli.',
 'esophagus':'A muscular tube from the pharynx to the stomach. Coordinated waves of contraction carry swallowed food downward.',
 'small intestine':'The long, coiled segment where most chemical digestion and nutrient absorption occur, beginning at the duodenum.',
 'large intestine':'The final segment of the digestive tract. It absorbs water and salts and forms and stores the residue for elimination.',
 'duodenum':'The first part of the small intestine. Bile and pancreatic enzymes enter here to continue digestion.',
 'gallbladder':'A small sac beneath the liver that concentrates and stores bile, releasing it into the duodenum.',
 'rectum':'The terminal part of the large intestine, which stores residue before elimination.',
 'cecum':'The pouch at the start of the large intestine, where the small intestine joins it.',
 'testis':'A paired organ producing sperm and testosterone. Its seminiferous tubules are the site of sperm formation.',
 'epididymis':'A coiled duct on the testis where sperm mature and are stored before transport.',
 'seminal vesicle':'A paired gland contributing much of the fluid volume of semen, including sugars that support sperm.',
 'prostate':'A gland surrounding the start of the urethra. Its secretions form part of the seminal fluid.',
 'right atrium':'The chamber receiving deoxygenated blood from the body through the venae cavae. It empties into the right ventricle.',
 'left atrium':'The chamber receiving oxygenated blood from the lungs through the pulmonary veins. It empties into the left ventricle.',
 'right ventricle':'The chamber pumping deoxygenated blood into the pulmonary artery and on to the lungs. Its wall is thinner than the left ventricle because the pulmonary circuit is a low-pressure one.',
 'left ventricle':'The chamber pumping oxygenated blood into the aorta and around the body. Its thick muscular wall generates the pressure the systemic circuit needs.',
 'tricuspid valve':'The valve between the right atrium and right ventricle. Its three leaflets close during ventricular contraction to stop blood flowing back into the atrium.',
 'mitral valve':'The valve between the left atrium and left ventricle, also called the bicuspid valve. Its two leaflets close during ventricular contraction.',
 'pulmonary valve':'The valve at the exit of the right ventricle. Its three cusps close as the ventricle relaxes, preventing backflow from the pulmonary artery.',
 'aortic valve':'The valve at the exit of the left ventricle. Its three cusps close as the ventricle relaxes, holding blood in the aorta.',
 'ovary':'A paired organ producing ova and the hormones estrogen and progesterone. Follicles within it mature and release an ovum at ovulation.',
 'uterus':'The muscular organ in which an embryo implants and develops. Its inner lining, the endometrium, thickens and is shed across the menstrual cycle.',
 'fallopian tube':'The paired tube carrying an ovum from the ovary toward the uterus. Fertilization normally occurs in its ampulla.',
 'vagina':'The muscular canal from the cervix to the exterior, forming the birth canal and receiving the penis during intercourse.',
 'lungs':'The paired organs of gas exchange. Air reaching their alveoli exchanges oxygen and carbon dioxide with the surrounding capillaries.',
};

/** Focused study modes.
 *
 * Each mode narrows the atlas to the systems one topic actually needs, which
 * with system-pure chunks is also all that gets downloaded. `systems` is kept
 * deliberately tight: the heart concept, for example, reaches into muscular,
 * arterial and venous geometry, and pulling those in would cost 19 MB to look
 * at the chambers and valves.
 */
/** A focused study mode is a guided walkthrough, not another way to switch a
 * system on: it narrows the atlas to the systems one topic needs, then steps
 * through named structures in the order they are taught, framing and explaining
 * each. Every step lists candidate concept ids and the first present in the
 * loaded atlas wins — the two reference bodies use different vocabularies
 * (BodyParts3D is FMA, the Human Reference Atlas is HRA), and steps that
 * resolve in neither are skipped rather than duplicating a mode per body. */
export interface Mode {id:string;name:string;systems:SystemId[];summary:string;tour:string[][]}
export const MODES: Mode[] = [
 {id:'heart',name:'Heart',systems:['cardiac'],summary:'Follow blood through the four chambers and the valves that keep it moving one way.',
  tour:[['FMA7096','HRA:VH_F_right_atrium'],['FMA7234'],['FMA7098','HRA:VH_F_right_ventricle'],['FMA7246'],['FMA7097','HRA:VH_F_left_atrium'],['FMA7235'],['FMA7101','HRA:VH_F_left_ventricle'],['FMA7236'],['FMA7088','HRA:VH_F_heart']]},
 {id:'respiratory',name:'Respiratory',systems:['respiratory'],summary:'Follow air from the trachea down the bronchial tree into both lungs.',
  tour:[['FMA7394','HRA:VH_F_trachea'],['FMA7409'],['FMA7309'],['FMA7310'],['HRA:VH_F_lungs']]},
 {id:'digestive',name:'Digestive',systems:['digestive'],summary:'Follow a meal from esophagus to rectum, past the liver and pancreas.',
  tour:[['FMA7131'],['FMA7148'],['FMA7206'],['FMA7200','HRA:VH_F_small_intestine'],['FMA7201'],['FMA14541'],['FMA14544'],['FMA7197','HRA:VH_F_liver'],['FMA7202'],['FMA7198']]},
 {id:'kidney',name:'Kidney',systems:['urinary'],summary:'Follow urine from the kidney down the ureter to the bladder and out.',
  tour:[['FMA7203','HRA:VH_F_kidney'],['FMA9704','HRA:VH_F_renal_pelvis_ureter'],['FMA15900','HRA:VH_F_urinary_bladder'],['FMA19667']]},
 {id:'reproductive',name:'Reproductive',systems:['reproductive'],summary:'The reproductive tract, its gametes and the accessory structures around it.',
  tour:[['FMA7210','HRA:VH_F_ovary'],['FMA18255','HRA:VH_F_fallopian_tube'],['FMA19386','HRA:VH_F_uterus'],['FMA9600','HRA:VH_F_vagina']]},
];


/** The reference bodies this viewer ships. */
export interface Body {id:'male'|'female';label:string;file:string;source:string}
export const BODIES: Body[] = [
 {id:'male',label:'Male',file:'atlas.json',source:'BodyParts3D'},
 {id:'female',label:'Female',file:'atlas-female.json',source:'Human Reference Atlas'},
];
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}

/** The steps of a mode's walkthrough that this atlas can actually show.
 *
 * A step resolves to the first of its candidate concepts present here, and is
 * kept only if that concept has geometry inside the mode's own systems — a step
 * that does not would drag in systems the mode deliberately excludes.
 */
export function tourFor(atlas:Atlas,mode:Mode):Concept[]{
 const systemOf=new Map(atlas.parts.map(p=>[p.id,p.system]));
 const byId=new Map(atlas.concepts.map(c=>[c.id,c]));
 const steps:Concept[]=[];
 for(const step of mode.tour){
  const concept=step.map(id=>byId.get(id)).find(Boolean);
  if(!concept||steps.some(s=>s.id===concept.id))continue;
  if(concept.elements.some(e=>mode.systems.includes(systemOf.get(e) as SystemId)))steps.push(concept);
 }
 return steps;
}

/** A concept's parts within the systems on screen.
 *
 * Concepts cross systems — the heart concept reaches into muscular, arterial
 * and venous geometry — so selecting one whole would fetch systems the viewer
 * has hidden. Falls back to the full concept when the filter leaves nothing.
 */
export function elementsWithin(concept:Concept,parts:Map<string,Part>,systems:SystemId[]){
 const inside=concept.elements.filter(id=>{const p=parts.get(id);return !!p&&systems.includes(p.system);});
 return inside.length?inside:concept.elements;
}
