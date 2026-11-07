import { SolutionItem, RealisationProject, PrescriberDoc } from '../types';
import { Language } from './translations';
import { SOLUTIONS, REALISATIONS, THREE_PHASES, PRESCRIBER_DOCS } from './mockData';

export const SOLUTIONS_ES: SolutionItem[] = [
  {
    id: 'enverr-paq',
    title: "ENVERR'PAQ®",
    category: 'urbain',
    subtitle: 'Viales de tráfico ligero, viales de servicio y accesos de bomberos',
    description: "Pavimento estabilizado de altísima resistencia formulado con un 10% de cemento de vidrio patentado ECO'STABIL®. Aspecto natural que resalta los áridos locales, gran capacidad portante (Rc máx 34 MPa) y excelente maniobrabilidad para viales de bomberos, carriles bici y plazas públicas.",
    applications: [
      'Vías de bomberos y viales de servicio con tráfico ligero',
      'Carriles bici y senderos peatonales accesibles (PMR)',
      'Áreas infantiles y circuitos de calistenia/salud',
      'Zonas inundables y pendientes pronunciadas'
    ],
    thickness: '5 a 10 cm',
    permeability: 'K > 1,8 × 10⁻⁴ m/s (Infiltración vertical instantánea sin escorrentía)',
    bearingCapacity: 'Rc máx 34 MPa · Densidad compactada 2,15 a 2,30 t/m³',
    ecologicalBenefits: [
      '10% de cemento de vidrio patentado ECOSTABIL® procedente de reciclaje',
      '100% reciclable con áridos naturales o arena de hormigón reciclado',
      'Hasta 5 veces menos emisiones de efecto invernadero vs asfalto'
    ],
    badge: 'Viales Ligeros & Bomberos',
    icon: 'Building2',
    imageAlt: 'Pavimento ENVERR’PAQ® para tráfico ligero y bomberos'
  },
  {
    id: 'decoverr',
    title: "D'ECOVERR®",
    category: 'urbain',
    subtitle: 'Caminos urbanos, movilidad sostenible y espacios compartidos',
    description: "Pavimento estabilizado liso o semiliso que ofrece un rodar cómodo y seguro, conservando un aspecto cálido y natural. Resistencia mecánica superior hasta 38 MPa (certificada en laboratorio BRGM-INSA).",
    applications: [
      'Paseos urbanos peatonales y carriles bici',
      'Aparcamientos permeables y vías de evacuación',
      'Plazas, accesos escolares y recintos públicos',
      'Apto para señalización horizontal con pintura'
    ],
    thickness: '5 a 8 cm',
    permeability: 'Drenante y permeable (combate activamente las islas de calor)',
    bearingCapacity: 'Rc máx 38 MPa · Densidad compactada 2,14 a 2,30 t/m³',
    ecologicalBenefits: [
      '12 a 14% de cemento de vidrio patentado ECO’STABIL®',
      'Curado con lámina plástica y autorreparación por humedad',
      'Huella de carbono 4 veces inferior a la del hormigón o asfalto'
    ],
    badge: 'Movilidad Urbana & Sostenible',
    icon: 'Building2',
    imageAlt: 'Pavimento urbano D’ECOVERR® liso y continuo'
  },
  {
    id: 'stabipaq',
    title: 'STABIPAQ®',
    category: 'paysager',
    subtitle: 'Estabilizado reforzado de aspecto natural para parques y jardines',
    description: "Especialmente diseñado para senderos y entornos paisajísticos. Gran cohesión y notable reducción del árido suelto en superficie, manteniendo la autenticidad y tonalidad mineral del terreno.",
    applications: [
      'Paseos en parques, jardines históricos y espacios protegidos',
      'Caminos peatonales, itinerarios ciclistas y accesos PMR',
      'Áreas recreativas y zonas de descanso en la naturaleza',
      'Senderos litorales, vías verdes y cementerios paisajísticos'
    ],
    thickness: '4 a 6 cm',
    permeability: 'K > 2,0 × 10⁻⁴ m/s (Alimenta acuíferos y arbolado)',
    bearingCapacity: 'Elevada cohesión en pendientes de hasta el 8% sin cárcavas',
    ecologicalBenefits: [
      'Aspecto de tierra batida natural sin polvo en época estival',
      'Ligante específico a base de vidrio micronizado a temperatura ambiente',
      'Totalmente inocuo para la biodiversidad, arbolado y acuíferos'
    ],
    badge: 'Parques y Patrimonio',
    icon: 'Trees',
    imageAlt: 'Sendero paisajístico STABIPAQ® en parque arbolado'
  },
  {
    id: 'stabilises-sportifs',
    title: "STABIL'SPORT®",
    category: 'sportif',
    subtitle: 'Pistas polideportivas, boleras/petanca, fútbol y frontones',
    description: "La solución de referencia para equipamientos deportivos exteriores duraderos. Capa estabilizada de 6 a 7 cm con drenaje vertical inmediato (sin charcos) y excelente absorción de impactos.",
    applications: [
      'Pistas polideportivas escolares y municipales',
      'Boleras y pistas de petanca homologadas',
      'Frontones, pelota vasca y pistas de pádel exteriores',
      'Campos de fútbol estabilizados y anillos de atletismo'
    ],
    thickness: '6 a 7 cm',
    permeability: 'Drenaje vertical directo instantáneo > 100 mm/h',
    bearingCapacity: 'Amortiguación certificada · Gran resistencia a ciclos hielo-deshielo',
    ecologicalBenefits: [
      '100% natural, sin microplásticos ni gránulos de caucho',
      'Mantenimiento mínimo: sin necesidad de descompactación periódica',
      'Larga vida útil probada y reducción de costes operativos'
    ],
    badge: 'Gama Deportiva Estrella',
    icon: 'Trophy',
    imageAlt: 'Pista deportiva STABIL’SPORT® con equipamiento y vallado'
  }
];

export const REALISATIONS_ES: RealisationProject[] = [
  {
    id: 'rea-1',
    title: 'Adecuación urbana - Plaza central',
    category: 'urbain',
    location: 'Plaza municipal',
    department: 'Haute-Garonne (31)',
    region: 'Occitania / Eje Pirineos',
    surface: '1 250 m²',
    year: '2023',
    productUsed: 'ECOSTABIL® Urbano 0/4 Calizo',
    description: 'Desimpermeabilización integral del centro urbano y puesta en valor del patrimonio con un pavimento estabilizado, cálido y drenante.',
    highlights: ['Accesibilidad PMR homologada', 'Cero charcos en otoño e invierno', 'Excepcional confort térmico en verano']
  },
  {
    id: 'rea-2',
    title: 'Pista polideportiva municipal',
    category: 'multisports',
    location: 'Entidad local municipal',
    department: 'Haute-Garonne (31)',
    region: 'Occitania / Sur de Francia',
    surface: '850 m²',
    year: '2022',
    productUsed: 'STABIL’SPORT® Multideporte 0/6',
    description: 'Sustitución de un antiguo terreno embarrado por un complejo multideporte escolar utilizable los 365 días del año.',
    highlights: ['Practicable todo el año', 'Confort articular validado por docentes', 'Suministro en volquetes directo a obra']
  },
  {
    id: 'rea-3',
    title: 'Paseo paisajístico en Parque Botánico',
    category: 'paysager',
    location: 'Parque público',
    department: 'Gironde (33)',
    region: 'Nueva Aquitania',
    surface: '3 200 m²',
    year: '2023',
    productUsed: 'ECOSTABIL® Paisaje Sílico-Calizo',
    description: 'Creación de una red de senderos sombreados integrados armónicamente con la vegetación autóctona protegida.',
    highlights: ['Permeabilidad total sin imbornales', 'Protección del sistema radicular', 'Ausencia de polvo con viento seco']
  },
  {
    id: 'rea-4',
    title: 'Club de petanca y pistas de juego',
    category: 'petanque',
    location: 'Complejo lúdico comarcal',
    department: 'Tarn (81)',
    region: 'Occitania',
    surface: '620 m²',
    year: '2024',
    productUsed: 'STABIL’SPORT® Petanca Especial',
    description: '16 pistas de petanca con una firmeza superficial homogénea para campeonatos oficiales y uso recreativo.',
    highlights: ['Rodadura uniforme y estable', 'Resistente al impacto repetido de bolas', 'Drenaje inmediato tras tormentas']
  },
  {
    id: 'rea-5',
    title: 'Campo de fútbol estabilizado de entrenamiento',
    category: 'football',
    location: 'Ciudad deportiva metropolitana',
    department: 'Haute-Garonne (31)',
    region: 'Occitania',
    surface: '6 800 m²',
    year: '2021',
    productUsed: 'STABIL’SPORT® Fútbol 0/6',
    description: 'Campo de gran formato para entrenamientos invernales y descanso de los terrenos de césped natural frágiles.',
    highlights: ['Permite más de 30h de juego semanal', 'Sin deformaciones bajo tacos deportivos', 'Mantenimiento fácil con cepillo de arrastre']
  },
  {
    id: 'rea-6',
    title: 'Vía verde ciclable y peatonal fluvial',
    category: 'paysager',
    location: 'Riberas y sendero fluvial',
    department: 'Isère (38)',
    region: 'Auvernia-Ródano-Alpes',
    surface: '4 500 m²',
    year: '2024',
    productUsed: 'ECOSTABIL® Vía Sostenible Granítica',
    description: 'Pavimento natural continuo para ciclistas urbanos y senderistas a lo largo de 2,5 km de ribera.',
    highlights: ['Rodadura ciclista muy cómoda', 'Integración en zona protegida Natura 2000', 'Perfecto comportamiento frente a crecidas']
  }
];

export const THREE_PHASES_ES = [
  {
    phase: 'Fase 1',
    timing: 'Inmediata (0 a 48h)',
    title: 'Fraguado inicial y apertura rápida al tránsito',
    description: 'Tras la compactación con rodillo tándem ligero, el ligante a base de cemento de vidrio inicia una rápida cristalización. La superficie queda operativa con celeridad para maquinaria ligera y peatones, evitando retrasos en el calendario de obra.',
    icon: 'Timer',
    techDetail: 'Resistencia inicial que asegura la cohesión inmediata del árido triturado.'
  },
  {
    phase: 'Fase 2',
    timing: 'Medio plazo (28 días)',
    title: 'Consolidación de la cohesión estructural',
    description: 'La reacción puzolánica avanza y une íntimamente los granos de arena mediante enlaces silicatados estables. La capacidad portante alcanza su valor nominal (EV2 ≥ 50 MPa), admitiendo el paso puntual de vehículos de mantenimiento o emergencia.',
    icon: 'ShieldCheck',
    techDetail: 'Elevada resistencia a cizallamiento y neutralización del polvo volátil por fijación microscópica.'
  },
  {
    phase: 'Fase 3',
    timing: 'Largo plazo (1 a más de 10 años)',
    title: 'Mineralización continua y durabilidad decenal',
    description: 'A diferencia de los asfaltos que se oxidan o de las cales que se lixivian, el cemento de vidrio continúa mineralizándose en simbiosis con la humedad del terreno. El firme gana solidez con el paso de los años sin fisurar jamás.',
    icon: 'Sparkles',
    techDetail: 'Estructura cristalina autorreparable frente a microtensiones mecánicas y ciclos de helada.'
  }
];

export interface FaqItem {
  id: string;
  category: 'ecostabil' | 'permeabilite' | 'livraison' | 'pose-entretien' | 'marches';
  question: string;
  answer: string;
  badge: string;
  highlights?: string[];
}

export const FAQS_ES: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'ecostabil',
    badge: 'Ligante ECOSTABIL®',
    question: "¿Qué es el ligante ECOSTABIL® y en qué se diferencia del cemento tradicional?",
    answer: "ECOSTABIL® es un ligante mineral patentado y premiado, formulado con cemento de vidrio micronizado procedente de residuos vítreos no aprovechables en la industria del vidrio hueco convencional (derribos, parabrisas laminados, etc.). A diferencia del cemento Portland ordinario, cuya cocción a 1450°C genera masivas emisiones de CO₂, ECOSTABIL® se elabora sin clínker convencional y a baja temperatura. Proporciona a los áridos una firmeza duradera sin efecto de losa rígida, elimina el riesgo de fisuración por retracción y mantiene el aspecto natural de la arena local.",
    highlights: [
      'Valorización de residuos de vidrio (economía circular 100%)',
      'Huella de carbono drásticamente reducida frente al cemento Portland (-80%)',
      'Sin agrietamientos ni roturas, estética mineral preservada'
    ]
  },
  {
    id: 'faq-2',
    category: 'ecostabil',
    badge: 'Cinética I+D',
    question: "¿Cómo funciona la cinética de fraguado en 3 fases de ECOSTABIL®?",
    answer: "La patente de nuestro ligante se basa en una reacción mineral en tres etapas: 1) Fraguado inmediato (0 a 48h) que inmoviliza la estructura para permitir el paso peatonal y evitar el lavado por lluvias intensas; 2) Fraguado a medio plazo (28 días) que consolida la resistencia mecánica frente al tránsito y maquinaria; 3) Fraguado a largo plazo (plurianual) mediante recarbonatación activa en contacto con la humedad del suelo, otorgando más de 25-30 años de vida útil sin reblandecerse en verano.",
    highlights: [
      'Fase 1: apertura rápida y resistencia inmediata al agua de lluvia',
      'Fase 2: capacidad portante óptima y cohesión a 28 días (EV2 ≥ 50 MPa)',
      'Fase 3: durabilidad decenal inmune a rayos UV y heladas'
    ]
  },
  {
    id: 'faq-3',
    category: 'permeabilite',
    badge: 'Leyes Climáticas & Sin Escorrentía',
    question: "¿Cuál es el coeficiente de permeabilidad de un pavimento estabilizado ESPORTEC?",
    answer: "Nuestros pavimentos formulados con ECOSTABIL® cuentan con una permeabilidad certificada en laboratorio de entre K = 10⁻⁴ m/s y 10⁻³ m/s, lo que representa una capacidad de infiltración natural de 50 a más de 150 litros/m²/hora. Esta tasa supera con creces la intensidad de las mayores lluvias torrenciales de diseño. Responden a la perfección a las normativas de desimpermeabilización del suelo, gestión de aguas pluviales a la parcela y directivas europeas de biodiversidad.",
    highlights: [
      'Permeabilidad K ≥ 10⁻⁴ m/s (infiltración directa de lluvia a la parcela)',
      'Sin colectores pluviales: ahorro notable en redes y zanjas de drenaje',
      'Recarga de acuíferos subterráneos y eliminación total de charcos'
    ]
  },
  {
    id: 'faq-4',
    category: 'permeabilite',
    badge: 'Islas de Calor Urbanas',
    question: "¿Ayudan los pavimentos ESPORTEC a combatir las islas de calor urbanas?",
    answer: "Sí, es una de sus mayores ventajas avaladas por técnicos municipales y paisajistas. Gracias a la utilización de arenas naturales claras y a la total ausencia de betún asfáltico negro, el suelo presenta un elevado albedo (reflectancia solar > 0,35). Además, su estructura microporosa favorece la evapotranspiración de la humedad profunda, reduciendo la temperatura superficial entre 8°C y 15°C respecto al asfalto negro convencional en olas de calor.",
    highlights: [
      'Albedo elevado: reflexión eficaz de la radiación solar incidente',
      'Temperatura de 8°C a 15°C más baja en comparación con el asfalto',
      'Ambiente térmico fresco para patios de colegios, parques y plazas'
    ]
  },
  {
    id: 'faq-5',
    category: 'livraison',
    badge: 'Logística & Silo Móvil',
    question: "¿Cuáles son las modalidades de suministro, plantas asociadas y silos móviles?",
    answer: "ESPORTEC ofrece 3 sistemas flexibles de suministro en España y Francia: 1) Entrega en mezcla lista para extender en camiones volquete 8x4 (15 a 18 t) o semirremolques basculantes (25 a 30 t); 2) Suministro desde nuestra red de plantas de hormigón asociadas para minimizar trayectos de transporte; 3) Instalación de un silo móvil directamente en su obra para el almacenamiento y dosificación automatizada de ECOSTABIL® en proyectos de más de 2 000 m².",
    highlights: [
      'Suministros en camiones volquete y tráileres en España y Francia',
      'Red colaborativa con plantas de hormigón y áridos locales',
      'Silo móvil en obra para suministro ininterrumpido a granel'
    ]
  },
  {
    id: 'faq-6',
    category: 'livraison',
    badge: 'Accesos de Obra',
    question: "¿Qué requisitos de acceso deben cumplir los camiones volquete en obra?",
    answer: "El acceso debe ser transitable y despejado para vehículos pesados de 32 t (rígidos 8x4) o 44 t (tráiler). Es necesario un gálibo libre de al menos 4 metros bajo puentes o tendidos eléctricos durante el tránsito, y de 7 a 8 metros de altura libre durante el basculamiento. En cascos históricos, calles estrechas o accesos restringidos, prevemos camiones más compactos o un punto de acopio intermedio con transbordo en dumper de obra.",
    highlights: [
      'Revisión previa de accesos con nuestro departamento logístico',
      'Soluciones para calles peatonales estrechas o accesos con restricciones',
      'Coordinación directa entre logística y el jefe de obra'
    ]
  },
  {
    id: 'faq-7',
    category: 'pose-entretien',
    badge: 'Puesta en Obra',
    question: "¿Qué espesor compactado se recomienda según el uso previsto?",
    answer: "El espesor compactado varía según la intensidad de carga: 4 a 5 cm para paseos peatonales y senderos en parques; 5 a 6 cm para plazas públicas, patios de colegios y accesos PMR; 6 a 7 cm para pistas polideportivas (STABIL'SPORT®) y campos de petanca; 7 a 8 cm para viales con paso ocasional de vehículos de emergencia o servicio (sobre base drenante de zahorra 0/20 o 0/32 de 15 a 20 cm).",
    highlights: [
      '4 a 5 cm: senderos peatonales y parques ajardinados',
      '5 a 6 cm: plazas públicas, patios escolares y accesos PMR',
      '6 a 7 cm: pistas multideporte, fútbol estabilizado y petanca'
    ]
  },
  {
    id: 'faq-8',
    category: 'pose-entretien',
    badge: 'Mantenimiento',
    question: "¿Qué mantenimiento requiere un firme estabilizado ESPORTEC con los años?",
    answer: "El mantenimiento es sumamente sencillo y económico: un barrido mecánico suave o soplado de hojas en otoño para evitar la acumulación vegetal húmeda. La mineralización del ciment de verre inhibe el arraigo de malas hierbas, eliminando tratamientos químicos. Tras 8 o 10 años de uso intensivo, un aporte superficial de 1 cm de arena estabilizada con rehumectación y rulado renueva el firme por completo sin demolición previa.",
    highlights: [
      'Mantenimiento muy económico: soplado y barrido suave',
      'Inhibición natural de maleza sin fitosanitarios',
      'Regeneración superficial sencilla sin levantamiento de base'
    ]
  },
  {
    id: 'faq-9',
    category: 'marches',
    badge: 'Pliegos Técnicos',
    question: "¿Cómo prescribir ECOSTABIL® en pliegos de contratación pública?",
    answer: "Para facilitar la redacción técnica en proyectos de obra pública, ESPORTEC facilita pliegos de prescripciones técnicas (CCTP / Pliegos de bases) listos para insertar en expedientes de licitación. Especifican la composición del ligante puzolánico de vidrio reciclado, granulometría recomendada (0/4 o 0/6), pautas de compactación y ensayos de recepción en obra (EV2 ≥ 50 MPa). Puede descargarlos en el Espacio Prescriptores o solicitar asesoramiento a nuestros ingenieros.",
    highlights: [
      'Pliegos tipo en formato editable Word y PDF',
      'Conforme a buenas prácticas de ingeniería civil y compras verdes',
      'Asesoramiento técnico gratuito de nuestro equipo en 24h'
    ]
  }
];

export const PRESCRIBERS_ES = {
  header: {
    kicker: 'ESPACIO PRESCRIPTORES Y LICITACIONES',
    title: 'Asesoramiento técnico para proyectos públicos y privados',
    desc: 'Un acompañamiento integral a medida para ayuntamientos, diputaciones, proyectistas, paisajistas y constructoras en España y Francia.'
  },
  audiences: [
    {
      id: 'mairie',
      title: 'Ayuntamientos y Entes Públicos',
      kicker: 'Acompañamiento integral & Visión territorial',
      pitch: 'Acompañamiento de principio a fin: desimpermeabilización de suelos, renaturalización urbana, patios escolares climáticos y acceso a subvenciones europeas y autonómicas.',
      advantages: [
        'Visión global del municipio: patios escolares sostenibles, movilidad blanda, vías verdes, parques y plazas',
        'Asesoramiento en solicitud de ayudas ambientales y fondos de resiliencia urbana (40% a 70% subvencionado)',
        'Control de calidad y seguimiento técnico con laboratorio externo independiente homologado en cada obra',
        'Cumplimiento de objetivos de huella de carbono, accesibilidad PMR y cero fitosanitarios',
        'Firme de larguísima vida útil sin necesidad de reasfaltados continuos'
      ]
    },
    {
      id: 'bureau-etudes',
      title: 'Ingenierías y Proyectistas',
      kicker: 'Cálculo & Dimensionamiento',
      pitch: 'Datos certificados y contrastados en laboratorio para sus memorias de dimensionamiento de firmes y gestión de aguas pluviales a la parcela.',
      advantages: [
        'Ensayos de permeabilidad in situ homologados K > 1,5 × 10⁻⁴ m/s',
        'Capacidad portante asegurada EV2 ≥ 50 MPa tras 28 días de curado',
        'Pliegos de prescripciones técnicas (CCTP) editables listos para licitación',
        'Control de fórmulas y ensayos de granulometría con laboratorio externo independiente'
      ]
    },
    {
      id: 'architecte',
      title: 'Arquitectos y Paisajistas',
      kicker: 'Diseño & Integración Paisajística',
      pitch: 'Realce los espacios exteriores preservando la identidad mineral y estética del entorno. Aspecto cálido de arena natural sin los inconvenientes del polvo.',
      advantages: [
        'Amplia gama de tonalidades de arenas locales (calizas, ocres, graníticas, silíceas)',
        'Máximo respeto al sistema radicular del arbolado y parterres adyacentes',
        'Confort térmico estival contrastado (alto albedo reflectante que evita la acumulación de calor)',
        'Validación técnica de áridos locales con laboratorio externo independiente'
      ]
    },
    {
      id: 'tp',
      title: 'Empresas de Obra Civil y Contratas',
      kicker: 'Ejecución & Logística de Obra',
      pitch: 'Agilice sus tajos de obra con una logística fiable y una puesta en obra mediante maquinaria convencional de extendido y compactación.',
      advantages: [
        'Extendido con motoniveladora, extendedora de asfalto o regla vibrante',
        'Compactación sencilla con rodillo tándem vibrante ligero (1 a 2,5 toneladas)',
        'Suministro programado en camiones volquete o silo móvil continuo',
        'Rápida apertura al tránsito que optimiza los plazos de entrega'
      ]
    }
  ]
};

export const COMPARISON_CRITERIA_ES = [
  {
    category: 'carbone',
    categoryLabel: 'Medio Ambiente & Clima',
    label: 'Huella de Carbono & Clínker',
    sublabel: 'Emisiones equivalentes de CO₂ en fabricación y puesta en obra',
    esportec: {
      score: 'excellent',
      badge: '-80% de CO₂e',
      text: '0% clínker. Ligante a base de cemento de vidrio 100% reciclado local, fabricación en frío (~15 kg CO₂e/t).'
    },
    enrobe: {
      score: 'bad',
      badge: 'Alta huella de CO₂',
      text: 'Fabricación a alta temperatura (160°C) en planta de asfalto con betún derivado del petróleo (~65 kg CO₂e/t).'
    },
    beton: {
      score: 'bad',
      badge: 'Muy contaminante',
      text: 'Clínker cocido a 1450°C con masiva descarbonatación de calizas (~250 kg CO₂e/m³).'
    },
    stabiliseTrad: {
      score: 'medium',
      badge: 'Medio a alto',
      text: 'Uso de cementos Portland convencionales o cal viva con elevada huella energética.'
    }
  },
  {
    category: 'technique',
    categoryLabel: 'Hidrología & Drenaje',
    label: 'Permeabilidad e Infiltración de Lluvias',
    sublabel: 'Capacidad de desimpermeabilización y recarga de acuíferos',
    esportec: {
      score: 'excellent',
      badge: '100% Permeable',
      text: 'Coeficiente K > 1,5 × 10⁻⁴ m/s. Cero escorrentía, infiltración total in situ, recarga limpia de acuíferos subterráneos.'
    },
    enrobe: {
      score: 'bad',
      badge: '100% Impermeable',
      text: 'Sobrecarga colectores y arroyos. Requiere cunetas, separadores de hidrocarburos y costosos tanques de tormenta.'
    },
    beton: {
      score: 'bad',
      badge: 'Impermeable',
      text: 'Superficie estanca que genera charcos e inundaciones (el hormigón poroso es caro y se colmata con rapidez).'
    },
    stabiliseTrad: {
      score: 'medium',
      badge: 'Parcial y temporal',
      text: 'Costra superficial que reduce drásticamente la capacidad de drenaje tras los primeros inviernos.'
    }
  },
  {
    category: 'technique',
    categoryLabel: 'Confort Urbano',
    label: 'Lucha contra las Islas de Calor Urbanas',
    sublabel: 'Comportamiento térmico en verano y capacidad de albedo',
    esportec: {
      score: 'excellent',
      badge: 'Albedo alto · Frescor',
      text: 'Tonos claros y naturales de la arena. Elevada reflectancia solar que evita el almacenamiento nocturno de calor.'
    },
    enrobe: {
      score: 'bad',
      badge: '+15°C a +20°C en suelo',
      text: 'Superficie negra que absorbe la radiación solar y desprende calor sofocante durante la noche urbana.'
    },
    beton: {
      score: 'medium',
      badge: 'Calor residual',
      text: 'Inercia térmica pesada que desprende calor acumulado, con reverberación solar deslumbrante.'
    },
    stabiliseTrad: {
      score: 'good',
      badge: 'Buena reflectancia',
      text: 'Tonalidad clara pero con desprendimiento masivo de polvo en suspensión en épocas de sequía.'
    }
  },
  {
    category: 'technique',
    categoryLabel: 'Rendimiento & Durabilidad',
    label: 'Autorreparación y Resistencia Mecánica',
    sublabel: 'Comportamiento ante heladas, lluvias torrenciales y tránsito rodado',
    esportec: {
      score: 'excellent',
      badge: 'Autorreparable (humedad)',
      text: 'El cemento de vidrio patentado ECO’STABIL® se reactiva de manera natural con el agua. Rc máx 34 a 38 MPa, portanza EV2 ≥ 50 MPa.'
    },
    enrobe: {
      score: 'bad',
      badge: 'Roderas y baches',
      text: 'Reblandecimiento con temperaturas estivales (>40°C), agrietamiento por heladas y necesidad de continuos parches.'
    },
    beton: {
      score: 'good',
      badge: 'Rígido pero fisura',
      text: 'Fisuras inevitables que exigen juntas de dilatación periódicas; reparaciones muy visibles y costosas.'
    },
    stabiliseTrad: {
      score: 'bad',
      badge: 'Desgaste y cárcavas',
      text: 'Erosión acelerada con lluvias intensas, formación de roderas y pérdida constante de gravilla suelta.'
    }
  },
  {
    category: 'technique',
    categoryLabel: 'Control de Calidad',
    label: 'Control Técnico con Laboratorio Externo',
    sublabel: 'Garantías de ensayo y homologación in situ en obra',
    esportec: {
      score: 'excellent',
      badge: 'Laboratorio homologado',
      text: 'Seguimiento técnico riguroso con laboratorio externo independiente: control de formulación in situ, ensayo de placa EV2 y acta oficial.'
    },
    enrobe: {
      score: 'medium',
      badge: 'Control estándar',
      text: 'Ensayos puntuales de temperatura y compactación realizados por el propio personal de la contrata.'
    },
    beton: {
      score: 'good',
      badge: 'Probetas de hormigón',
      text: 'Rotura normalizada de probetas a compresión preparadas en planta de hormigón.'
    },
    stabiliseTrad: {
      score: 'bad',
      badge: 'Sin control reglado',
      text: 'Dosificaciones muchas veces a ojo en la propia obra, sin comprobación sistemática de capacidad portante.'
    }
  },
  {
    category: 'economique',
    categoryLabel: 'Financiación & Fondos',
    label: 'Subvenciones Públicas y Fondos Europeos',
    sublabel: 'Elegibilidad para ayudas ambientales de desimpermeabilización',
    esportec: {
      score: 'excellent',
      badge: '40% a 70% Subvencionado',
      text: 'Prioridad en programas de renaturalización urbana, planes de resiliencia hídrica, zonas de bajas emisiones y fondos FEDER.'
    },
    enrobe: {
      score: 'bad',
      badge: '0 € · Canon por vertido',
      text: 'Excluido de convocatorias ambientales y penalizado por cánones de vertido pluvial al alcantarillado.'
    },
    beton: {
      score: 'bad',
      badge: 'No subvencionable',
      text: 'Inadmisible en programas de drenaje urbano sostenible en sus ejecuciones tradicionales continuas.'
    },
    stabiliseTrad: {
      score: 'medium',
      badge: 'Elegibilidad dudosa',
      text: 'Expedientes a menudo rechazados por falta de justificación técnica sobre su durabilidad drenante.'
    }
  },
  {
    category: 'technique',
    categoryLabel: 'Estética & Salud',
    label: 'Integración Paisajística y Salud Ciudadana',
    sublabel: 'Armonía con la naturaleza, accesibilidad y compuestos volátiles',
    esportec: {
      score: 'excellent',
      badge: 'Mineral puro · Sin COV',
      text: 'Aspecto noble de las arenas locales, rodadura cómoda para sillas de ruedas y carritos, inodoro y sin lixiviados tóxicos.'
    },
    enrobe: {
      score: 'bad',
      badge: 'Olor a betún & HAP',
      text: 'Vapores y emanaciones de hidrocarburos durante la ejecución, estética negra industrial poco acorde con parques.'
    },
    beton: {
      score: 'medium',
      badge: 'Mineral artificial',
      text: 'Superficie de losa de hormigón gris, fría y masiva, con gran impacto visual en entornos naturales.'
    },
    stabiliseTrad: {
      score: 'good',
      badge: 'Natural pero embarrado',
      text: 'Agradable al inicio pero se transforma en barro con las lluvias y en polvareda con tiempo seco.'
    }
  }
];

export const FAQS_FR: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'ecostabil',
    badge: 'Liant ECOSTABIL®',
    question: "Qu'est-ce que le liant ECOSTABIL® et en quoi diffère-t-il d'un ciment classique ?",
    answer: "L'ECOSTABIL® est un liant minéral breveté et primé, conçu à base de ciment de verre micronisé issu de déchets ultimes non recyclables dans la verrerie conventionnelle (bouteilles, verres de déconstruction, pare-brise). Contrairement au ciment Portland traditionnel dont la cuisson à 1450°C émet d'importantes quantités de CO₂, l'ECOSTABIL® est formulé sans clinker conventionnel. Il apporte aux sables concassés une résistance remarquable sans effet de dalle rigide, supprime tout risque de fissuration par retrait et préserve l'aspect chaud et naturel de la pierre locale.",
    highlights: [
      'Valorisation de déchets ultimes de verre (économie circulaire)',
      'Bilan carbone considérablement allégé par rapport au ciment Portland',
      'Pas de fissuration, aspect naturel sableux conservé'
    ]
  },
  {
    id: 'faq-2',
    category: 'ecostabil',
    badge: 'Cinétique R&D',
    question: "Comment fonctionne la cinétique des 3 phases de prise de l'ECOSTABIL® ?",
    answer: "Le brevet de notre liant repose sur une réaction minérale en 3 étapes complémentaires : 1) Prise immédiate (0 à 48h) qui fige rapidement la structure pour autoriser la circulation piétonne et immuniser la surface contre le lessivage par les pluies torrentielles ; 2) Prise à moyen terme (28 jours) qui déploie la résistance mécanique face aux passages répétés et engins d'entretien ; 3) Prise à très long terme (pluriannuelle) par carbonatation continue avec l'humidité du sol, conférant une pérennité supérieure à 25-30 ans sans ramollissement estival.",
    highlights: [
      'Phase 1 : praticabilité express & résistance aux intempéries immédiate',
      'Phase 2 : compacité et portance optimale à 28 jours',
      'Phase 3 : durabilité trentenaire sans dégradation aux UV ni au gel'
    ]
  },
  {
    id: 'faq-3',
    category: 'permeabilite',
    badge: 'Loi Climat & Zéro Ruissellement',
    question: "Quel est le taux de perméabilité d'un sol stabilisé ESPORTEC ?",
    answer: "Nos sols stabilisés à l'ECOSTABIL® présentent une perméabilité certifiée en laboratoire comprise entre K = 10⁻⁴ m/s et 10⁻³ m/s, soit une capacité d'infiltration naturelle de 50 à plus de 150 litres/m²/heure. Cette perméabilité élevée est largement supérieure aux intensités des pluies orageuses décennales ou centennales. Nos revêtements répondent parfaitement aux obligations de désimperméabilisation des sols, aux exigences du Coefficient de Biotope par Surface (CBS) et à la doctrine Zéro Artificialisation Nette (ZAN).",
    highlights: [
      'Perméabilité K ≥ 10⁻⁴ m/s (infiltration directe des eaux pluviales)',
      'Zéro réseau pluvial : réduction des coûts de voirie et de caniveaux',
      'Recharge directe des nappes phréatiques et zéro flaque résiduelle'
    ]
  },
  {
    id: 'faq-4',
    category: 'permeabilite',
    badge: 'Îlots de Chaleur Urbains',
    question: "Le sol stabilisé ESPORTEC lutte-t-il contre les îlots de chaleur urbains (ICU) ?",
    answer: "Oui, c'est l'un de ses atouts majeurs reconnus par les architectes et paysagistes. Grâce à l'emploi de sables naturels aux teintes claires locales et à l'absence de bitume noir caloporteur, le sol possède un albédo élevé (réflectance solaire > 0,35). Sa matrice microporeuse permet en outre l'évapotranspiration de l'humidité du sous-sol, permettant de réduire la température de surface de 8°C à 15°C par rapport à un enrobé ou un asphalte noir lors des canicules estivales.",
    highlights: [
      'Albédo élevé : réflexion du rayonnement solaire',
      'Température de surface inférieure de 8°C à 15°C par rapport à l’enrobé',
      'Ambiance thermique fraîche pour cours d’écoles, parcs et places'
    ]
  },
  {
    id: 'faq-5',
    category: 'livraison',
    badge: 'Logistique & Silo Mobile',
    question: "Quelles sont les modalités de livraison, centrales partenaires et silos mobiles ?",
    answer: "ESPORTEC propose 3 modes d'approvisionnement flexibles sur toute la France métropolitaine : 1) Livraison en mélange prêt à l'emploi par camions bennes 8x4 (15 à 18 t) ou semi-remorques bennes (25 à 30 t) départ usine ; 2) Départ depuis notre réseau de centrales à béton partenaires locales pour minimiser les distances de transport ; 3) Mise en place d'un silo mobile directement sur votre chantier avec contrôle d'un laboratoire externe indépendant pour le stockage et dosage automatisé de l'ECOSTABIL® en continu lors des projets de grande envergure (> 2 000 m²).",
    highlights: [
      'Livraisons en camions bennes 8x4 et semi-remorques toute France',
      'Réseau étendu de centrales à béton partenaires régionales',
      'Silo mobile avec contrôle laboratoire externe sur chantier'
    ]
  },
  {
    id: 'faq-6',
    category: 'livraison',
    badge: 'Accès Chantier',
    question: "Quelles sont les conditions requises pour l'accès des camions bennes sur mon chantier ?",
    answer: "L'accès doit être carrossable et dégagé pour des véhicules lourds de PTAC 32 t (porteur 8x4) ou 44 t (semi-remorque). Une hauteur libre minimale de 4 mètres doit être garantie sous les ponts et lignes électriques lors du déplacement, et d'au moins 7 à 8 mètres lors du bennage en déchargement. En cas de voirie urbaine étroite, de passage sous porche ou d'accès restreint, nos équipes logistiques prévoient des porteurs compacts ou un point de dépotage intermédiaire avec reprise par dumper de chantier.",
    highlights: [
      'Contrôle préalable des accès lors de votre demande de chiffrage',
      'Solutions alternatives en cas de ruelles étroites ou d’accès contraint',
      'Coordination directe entre notre logisticien et votre chef de chantier'
    ]
  },
  {
    id: 'faq-7',
    category: 'pose-entretien',
    badge: 'Mise en Œuvre',
    question: "Quelle est l'épaisseur recommandée selon le type d'aménagement ?",
    answer: "L'épaisseur compactée varie selon la sollicitation mécanique : 4 à 5 cm pour les allées piétonnes douces et sentiers de promenade ; 5 à 6 cm pour les parvis de mairies, cours d'écoles et cheminements PMR ; 6 à 7 cm pour les terrains multisports (STABIL'SPORT®) et boulodromes ; 7 à 8 cm pour les voies d'accès occasionnelles de véhicules de secours ou d'entretien des espaces verts (sur couche de fondation drainante GNT 0/20 ou 0/31.5 de 15 à 20 cm).",
    highlights: [
      '4 à 5 cm : allées piétonnes & parcs paysagers',
      '5 à 6 cm : parvis urbains, cours d’écoles & accès PMR',
      '6 à 7 cm : terrains multisports, football stabilisé & pétanque'
    ]
  },
  {
    id: 'faq-8',
    category: 'pose-entretien',
    badge: 'Maintenance',
    question: "Quel entretien nécessite un sol stabilisé ESPORTEC au fil des saisons ?",
    answer: "L'entretien d'un sol stabilisé à l'ECOSTABIL® est remarquablement économique et simple : un balayage mécanique doux ou un soufflage des feuilles mortes en automne pour éviter la macération végétale suffit. La dureté minérale apportée par le ciment de verre inhibe le développement des mauvaises herbes, supprimant le besoin de désherbage chimique. En cas d'usure superficielle après 8 à 10 ans, un rechargement d'un lit de sable stabilisé de 1 cm avec ré-arrosage et cylindrage remet le sol à neuf sans démolition.",
    highlights: [
      'Entretien très réduit : soufflage et balayage à brosses souples',
      'Inhibition naturelle de la germination des mauvaises herbes',
      'Rénovation superficielle aisée sans déconstruction de l’assise'
    ]
  },
  {
    id: 'faq-9',
    category: 'marches',
    badge: 'Prescription & CCTP',
    question: "Comment prescrire l'ECOSTABIL® dans un CCTP de marché public d'aménagement ?",
    answer: "Pour sécuriser vos appels d'offres publics, ESPORTEC met à votre disposition des trames CCTP types pré-rédigées conformes aux normes AFNOR et aux guides techniques du Cerema. Ces fiches précisent la nature du liant au ciment de verre recyclé, le fuseau granulométrique du sable recommandé (0/4 ou 0/6), les protocoles de compactage et les essais de portance de réception (EV2 ≥ 50 MPa). Vous pouvez télécharger ces trames dans notre Espace Prescripteurs ou demander une assistance technique directe.",
    highlights: [
      'CCTP types téléchargeables en format Word éditable et PDF',
      'Conformité aux règles d’art Cerema et critères d’achats éco-responsables',
      'Assistance gratuite de notre bureau d’études sous 24h'
    ]
  }
];

// Helper functions for components
export function getLocalizedSolutions(lang: Language): SolutionItem[] {
  return lang === 'ES' ? SOLUTIONS_ES : SOLUTIONS;
}

export function getLocalizedRealisations(lang: Language): RealisationProject[] {
  return lang === 'ES' ? REALISATIONS_ES : REALISATIONS;
}

export function getLocalizedThreePhases(lang: Language) {
  return lang === 'ES' ? THREE_PHASES_ES : THREE_PHASES;
}

export function getLocalizedFaqs(lang: Language): FaqItem[] {
  return lang === 'ES' ? FAQS_ES : FAQS_FR;
}
