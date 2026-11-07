import { SolutionItem, RealisationProject, PrescriberDoc } from '../types';

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'enverr-paq',
    title: "ENVERR'PAQ®",
    category: 'urbain',
    subtitle: 'Voirie légère, aménagements extérieurs & accès pompiers',
    description: "Revêtement stabilisé très résistant formulé avec 10% de ciment de verre breveté ECO'STABIL®. Aspect naturel mettant en valeur les grains apparents, haute portance (34 MPa) et maniabilité exceptionnelle pour voies pompiers, pistes cyclables et parvis.",
    applications: [
      'Voies pompiers & voiries légères de desserte',
      'Pistes cyclables & cheminements PMR',
      'Aires de jeux & parcours de santé',
      'Zones inondables & zones à forte pente'
    ],
    thickness: '5 à 10 cm',
    permeability: 'K > 1,8 × 10⁻⁴ m/s (Infiltration verticale instantanée)',
    bearingCapacity: 'Rc maxi 34 MPa · Masse volumique 2,15 à 2,3 t/m³',
    ecologicalBenefits: [
      '10% ciment de verre breveté ECOSTABIL® issu du recyclage',
      '100% recyclable avec granulat naturel ou sable de béton recyclé',
      'Jusqu’à 5 fois moins d’émissions de gaz à effet de serre vs enrobé'
    ],
    badge: 'Voirie Légère & Pompiers',
    icon: 'Building2',
    imageAlt: 'Revêtement ENVERR’PAQ® voirie légère et accès pompiers'
  },
  {
    id: 'decoverr',
    title: "D'ECOVERR®",
    category: 'urbain',
    subtitle: 'Cheminements urbains, mobilités douces & mobilités partagées',
    description: "Revêtement stabilisé lisse ou semi-lisse offrant une circulation fluide tout en conservant un aspect chaleureux et naturel. Résistance mécanique maximale jusqu'à 38 MPa (certifiée en laboratoire BRGM-INSA).",
    applications: [
      'Cheminements urbains piétons & pistes cyclables',
      'Stationnements perméables & voies pompiers',
      'Places, parvis d’écoles et d’établissements publics',
      'Possibilité de marquage au sol à la peinture'
    ],
    thickness: '5 à 8 cm',
    permeability: 'Drainant & perméable (lutte contre les îlots de chaleur)',
    bearingCapacity: 'Rc maxi 38 MPa · Masse volumique 2,14 à 2,3 t/m³',
    ecologicalBenefits: [
      '12 à 14% de ciment de verre breveté ECO’STABIL®',
      'Bâchage obligatoire & auto-cicatrisation par l’humidité',
      'Empreinte carbone divisée par plus de 4 par rapport au béton/enrobé'
    ],
    badge: 'Mobilités Douces & Urbain',
    icon: 'Building2',
    imageAlt: 'Cheminement urbain D’ECOVERR® lisse et régulier'
  },
  {
    id: 'stabipaq',
    title: 'STABIPAQ®',
    category: 'paysager',
    subtitle: 'Stabilisé renforcé à l’aspect naturel pour parcs et jardins',
    description: "Spécialement conçu pour les cheminements et parcs paysagers. Offre une forte cohésion et une réduction significative des grains libres tout en conservant l'authenticité et la teinte minérale du terroir.",
    applications: [
      'Allées de parcs, jardins publics et sites classés',
      'Cheminements piétons, cycles et accès PMR',
      'Aires de jeux et espaces de loisirs en pleine nature',
      'Sentiers littoraux, voies vertes et cimetières paysagers'
    ],
    thickness: '4 à 6 cm',
    permeability: 'K > 2,0 × 10⁻⁴ m/s (Nourrit les nappes et les arbres)',
    bearingCapacity: 'Forte cohésion sur pentes jusqu’à 8% sans ravinement',
    ecologicalBenefits: [
      'Aspect terre battue naturelle sans aucune poussière en été',
      'Liant spécifique à base de verre recyclé à température ambiante',
      'Neutre pour la biodiversité, les cours d’eau et les racines'
    ],
    badge: 'Parcs & Patrimoine',
    icon: 'Trees',
    imageAlt: 'Allée paysagère STABIPAQ® en parc arboré'
  },
  {
    id: 'stabilises-sportifs',
    title: "STABIL'SPORT®",
    category: 'sportif',
    subtitle: 'Terrains multisports, boulodromes, football & pelote basque',
    description: "La solution de référence pour des terrains sportifs durables et performants. Couche stabilisée de 6 à 7 cm offrant un drainage vertical instantané (zéro flaque après la pluie) et un confort articulaire sécurisant.",
    applications: [
      'Terrains multisports scolaires et communaux',
      'Boulodromes et terrains de pétanque officiels',
      'Aires de pelote basque, frontons et padel plein air',
      'Terrains de football stabilisés & anneaux d’athlétisme'
    ],
    thickness: '6 à 7 cm',
    permeability: 'Drainage direct vertical immédiat > 100 mm/h',
    bearingCapacity: 'Absorption des chocs certifiée · Réduction de gel-dégel',
    ecologicalBenefits: [
      '100% naturel, sans aucun microplastique ni granule polluant',
      'Entretien très réduit : pas de décompactage régulier',
      'Moins d’interventions mécaniques et longévité certifiée'
    ],
    badge: 'Produit Phare Sportif',
    icon: 'Trophy',
    imageAlt: 'Terrain de sport STABIL’SPORT® avec buts et clôture'
  }
];

export const REALISATIONS: RealisationProject[] = [
  {
    id: 'rea-1',
    title: 'Aménagement urbain - Place centrale',
    category: 'urbain',
    location: 'Place de village',
    department: 'Haute-Garonne (31)',
    region: 'Occitanie',
    surface: '1 250 m²',
    year: '2023',
    productUsed: 'ECOSTABIL® Urbain 0/4 Calcaire',
    description: 'Désimperméabilisation complète du centre-bourg et mise en valeur du patrimoine avec un sol stabilisé chaleureux et drainant.',
    highlights: ['Accessibilité PMR certifiée', 'Zéro flaque d’eau en automne', 'Confort thermique d’été remarquable']
  },
  {
    id: 'rea-2',
    title: 'Terrain multisports communal',
    category: 'multisports',
    location: 'Collectivité territoriale',
    department: 'Haute-Garonne (31)',
    region: 'Occitanie',
    surface: '850 m²',
    year: '2022',
    productUsed: 'STABIL’SPORT® Multisports 0/6',
    description: 'Remplacement d’un vieux terrain boueux par un complexe multisports scolaire praticable par tous les temps.',
    highlights: ['Praticabilité 365j/an', 'Confort articulaire approuvé par les enseignants', 'Livraison bennes direct chantier']
  },
  {
    id: 'rea-3',
    title: 'Allée paysagère du Parc Floral',
    category: 'paysager',
    location: 'Parc communal',
    department: 'Gironde (33)',
    region: 'Nouvelle-Aquitaine',
    surface: '3 200 m²',
    year: '2023',
    productUsed: 'ECOSTABIL® Paysage Silico-Calcaire',
    description: 'Création d’un réseau de cheminements doux ombragés s’intégrant harmonieusement à la végétation préservée.',
    highlights: ['Perméabilité totale sans caniveaux', 'Préservation du système racinaire', 'Absence de poussière par vent sec']
  },
  {
    id: 'rea-4',
    title: 'Boulodrome & Terrains de pétanque',
    category: 'petanque',
    location: 'Base de loisirs intercommunale',
    department: 'Tarn (81)',
    region: 'Occitanie',
    surface: '620 m²',
    year: '2024',
    productUsed: 'STABIL’SPORT® Pétanque Spécifique',
    description: '16 cadres de pétanque avec une fermeté de surface constante pour les tournois officiels et le loisir.',
    highlights: ['Roulant franc et stable', 'Résiste aux impacts de boules', 'Drainage immédiat après orages']
  },
  {
    id: 'rea-5',
    title: 'Terrain de football stabilisé d’entraînement',
    category: 'football',
    location: 'Complexe sportif métropolitain',
    department: 'Haute-Garonne (31)',
    region: 'Occitanie',
    surface: '6 800 m²',
    year: '2021',
    productUsed: 'STABIL’SPORT® Football 0/6',
    description: 'Terrain grand format pour les entraînements d’hiver et le soulagement des pelouses naturelles fragilisées.',
    highlights: ['Permet 30h de jeu hebdomadaire', 'Zéro déformation sous crampons', 'Entretien simplifié au balai traîne']
  },
  {
    id: 'rea-6',
    title: 'Voie verte cyclable et piétonne',
    category: 'paysager',
    location: 'Berges et voie douce',
    department: 'Isère (38)',
    region: 'Auvergne-Rhône-Alpes',
    surface: '4 500 m²',
    year: '2024',
    productUsed: 'ECOSTABIL® Voie Douce Granitique',
    description: 'Revêtement naturel continu pour cyclistes du quotidien et marcheurs sur 2,5 km linéaires le long de la rivière.',
    highlights: ['Roulement vélo agréable', 'Intégration en zone Natura 2000', 'Tenue parfaite face aux crues saisonnières']
  }
];

export const THREE_PHASES = [
  {
    phase: 'Phase 1',
    timing: 'Immédiate (0 à 48h)',
    title: 'Prise initiale & Praticabilité rapide',
    description: 'Dès le compactage avec rouleau tandem léger, le liant ciment de verre amorce une cristallisation rapide. La surface devient praticable rapidement pour les engins de chantier légers et les piétons, évitant tout blocage du planning.',
    icon: 'Timer',
    techDetail: 'Résistance initiale garantissant la cohésion immédiate du granulat concassé.'
  },
  {
    phase: 'Phase 2',
    timing: 'Moyen terme (28 jours)',
    title: 'Montée en cohésion structurelle',
    description: 'La réaction pouzzolanique progresse et lie intimement les grains de sable par liaisons silicatées. La portance atteint son plein régime de calcul (EV2 ≥ 50 MPa), autorisant le passage ponctuel de véhicules d’entretien ou de secours.',
    icon: 'ShieldCheck',
    techDetail: 'Résistance au cisaillement et neutralisation des poussières volatiles par fixation microscopique.'
  },
  {
    phase: 'Phase 3',
    timing: 'Long terme (1 à 10+ ans)',
    title: 'Minéralisation continue & Durabilité trentenaire',
    description: 'Contrairement aux enrobés qui s’oxydent ou aux chaux qui se délavent, le ciment de verre continue de se minéraliser en symbiose avec l’humidité naturelle du sol. Le revêtement gagne en solidité au fil des décennies sans jamais faïencer.',
    icon: 'Sparkles',
    techDetail: 'Structure cristalline auto-cicatrisante face aux micro-tensions mécaniques et cycles gel/dégel.'
  }
];

export const PRESCRIBER_DOCS: PrescriberDoc[] = [
  {
    id: 'cctp-ecostabil-urbain',
    title: 'CCTP Type - Revêtement de sol stabilisé écologique au ciment de verre ECOSTABIL®',
    targetAudience: 'Bureaux d’études VRD & Architectes',
    pages: 8,
    format: 'DOCX / PDF',
    description: 'Clauses techniques types prêtes à insérer dans vos dossiers d’appels d’offres publics et privés (terrassement, sous-couche, épaisseur, dosage, compactage et réception).',
    downloadCount: 1420
  },
  {
    id: 'ft-stabil-sport',
    title: 'Fiche Technique & Performances STABIL’SPORT® (Multisports & Pétanque)',
    targetAudience: 'Services des Sports, Mairies & Clubs',
    pages: 4,
    format: 'PDF',
    description: 'Courbes de perméabilité, essais de dureté Clegg, résistance au poinçonnement et protocole d’entretien simplifié.',
    downloadCount: 980
  },
  {
    id: 'guide-desimpermeabilisation',
    title: 'Guide d’aide à la décision : Désimperméabilisation et éligibilité Fonds Vert',
    targetAudience: 'Mairies & Collectivités Territoriales',
    pages: 12,
    format: 'PDF',
    description: 'Calcul d’abattement des eaux pluviales à la parcelle, taux d’infiltration et arguments pour les dossiers de subventions territoriales.',
    downloadCount: 2150
  },
  {
    id: 'ft-ecostabil-liant',
    title: 'Fiche Produit Liant Pur ECOSTABIL® (Centrales à béton & mélangeurs TP)',
    targetAudience: 'Entreprises de Travaux Publics & Centrales',
    pages: 6,
    format: 'PDF',
    description: 'Données techniques de formulation pour mélange en centrale ou malaxage in situ, fiches de sécurité et stockage en silos/big bags.',
    downloadCount: 740
  }
];

export const COMPANY_INFO = {
  name: 'ESPORTEC ECO-INDUSTRIEL',
  baseline: 'La qualité environnementale vue du sol',
  founded: 1997,
  address: '39, Chemin de Fournaulis',
  postalCode: 'FR - 31170',
  city: 'Tournefeuille',
  country: 'France',
  phone: '+33 (0)5.62.74.01.61',
  phoneDisplay: '05 62 74 01 61',
  phoneHours: 'Du lundi au vendredi 9h-12h / 14h-18h',
  email: 'siege@esportec.com',
  deliveryZone: 'France entière (camions bennes, centrale partenaire ou silo mobile sur chantier)',
  logisticsOptions: [
    'Livraisons en camions bennes 8x4 et semi-remorques 30t sur toute la France',
    'Départ usine ou réseau de centrales à béton partenaires régionales',
    'Mise à disposition de silos mobiles sur chantier pour grands volumes'
  ],
  partners: ['BRGM', 'Eco-emballages', 'Réseau Éco-entreprises', 'Groupe Européen Partenaire'],
  rdPrograms: ['Liants à base de scories', 'Mortiers spéciaux', 'Ciments pour chapes lisses haute résistance chimique', 'Préfabrication écologique']
};
