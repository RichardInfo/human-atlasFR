export type SystemId = 'skeletal'|'muscular'|'arterial'|'venous'|'nervous'|'digestive'|'respiratory'|'urinary'|'reproductive'|'lymphatic'|'endocrine'|'integumentary'|'connective'|'sensory'|'cardiac';
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
export interface Atlas {version:string;sex?:'male';source?:string;scope?:string;parts:Part[];concepts:Concept[];chunks:{url:string;bytes:number;gzip?:string;gzipBytes?:number}[];triangles:number}
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
};
export function explanation(name:string,system:SystemId){return EXPLANATIONS[name.toLowerCase()] ?? SYSTEMS.find(s=>s.id===system)?.description ?? '';}