import React, { useState } from 'react';
import { Leaf, Award, Recycle, Users2, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers } from 'lucide-react';
import { Language } from '../data/translations';

interface ProductSpotlightProps {
  onOpenProductSheet: (productId: string) => void;
  onOpenQuoteModal: (subject?: string) => void;
  lang?: Language;
}

export const ProductSpotlight: React.FC<ProductSpotlightProps> = ({
  onOpenProductSheet,
  onOpenQuoteModal,
  lang = 'FR',
}) => {
  const [selectedProduct, setSelectedProduct] = useState<'enverr-paq' | 'decoverr' | 'stabipaq' | 'stabil-sport'>('enverr-paq');

  const productDataFR = {
    'enverr-paq': {
      title: "ENVERR'PAQ®",
      badgeText: "VOIRIE LÉGÈRE & AMÉNAGEMENTS",
      subtitle: "Le revêtement stabilisé très résistant pour voirie légère et accès pompiers",
      description: "Formulé avec 10% de ciment de verre breveté ECO'STABIL®, ENVERR'PAQ® offre un aspect naturel mettant en valeur les granulats en surface. Très solide (Rc maxi 34 MPa), il est idéal pour les voies pompiers, pistes cyclables, aires de jeux et zones inondables ou à forte pente.",
      points: [
        "Masse volumique certifiée : 2,15 à 2,3 t/m³ (suivant sable)",
        "10% de ciment de verre breveté ECO'STABIL®",
        "Émet jusqu’à 5 fois moins de gaz à effet de serre vs enrobé",
        "Auto-cicatrisation par l’humidité et résistance aux intempéries",
        "Coupe type : 5 à 10 cm sur GNT 0/20 ou 0/31.5 et géotextile"
      ],
      thickness: "5 à 10 cm",
      badges: [
        { label: "Rc 34 MPa", icon: "shield", desc: "Haute portance" },
        { label: "Densité 2,15", icon: "sparkles", desc: "Masse volumique" },
        { label: "Bas Carbone", icon: "recycle", desc: "-75% de CO₂" }
      ]
    },
    'decoverr': {
      title: "D'ECOVERR®",
      badgeText: "CHEMINEMENTS URBAINS & MOBILITÉS",
      subtitle: "Revêtement stabilisé lisse ou semi-lisse pour cheminements urbains",
      description: "Solution esthétique et performante pour les mobilités douces, parvis et stationnements perméables. Résistance mécanique maximale de 38 MPa (certifiée BRGM-INSA) tout en préservant la fraîcheur des sols urbains.",
      points: [
        "Résistance à la compression maximale : 38 MPa (BRGM-INSA)",
        "Masse volumique : 2,14 à 2,3 t/m³",
        "12 à 14% de ciment de verre breveté ECO'STABIL®",
        "Possibilité de marquage au sol à la peinture",
        "Bâchage obligatoire pour une cure optimale"
      ],
      thickness: "5 à 8 cm",
      badges: [
        { label: "Rc 38 MPa", icon: "shield", desc: "Résistance max" },
        { label: "Mobilité douce", icon: "sparkles", desc: "Surface lisse" },
        { label: "Auto-cicatrisant", icon: "recycle", desc: "Régénéré par l'eau" }
      ]
    },
    'stabipaq': {
      title: "STABIPAQ®",
      badgeText: "PARCS, VOIES VERTES & PATRIMOINE",
      subtitle: "Stabilisé renforcé à l'aspect naturel pour cheminements et jardins",
      description: "Spécialement conçu pour les parcs publics, sites naturels et espaces de loisirs. Il offre une forte cohésion et une réduction drastique des grains libres tout en conservant l'authenticité des sables locaux.",
      points: [
        "Aspect naturel authentique, intégration harmonieuse",
        "Réduction des grains libres pour une surface propre et agréable",
        "Excellente tenue dans le temps et résistance aux intempéries",
        "100% Perméable à l'eau (nourrit les arbres et la nappe)",
        "Adapté aux piétons, vélos, poussettes et accès PMR"
      ],
      thickness: "4 à 6 cm",
      badges: [
        { label: "Zéro poussière", icon: "sparkles", desc: "Confort estival" },
        { label: "PMR Conforme", icon: "shield", desc: "Circulation fluide" },
        { label: "100% Perméable", icon: "recycle", desc: "Infiltration totale" }
      ]
    },
    'stabil-sport': {
      title: "STABIL'SPORT®",
      badgeText: "TERRAINS SPORTIFS & MULTISPORTS",
      subtitle: "La solution de référence pour terrains sportifs durables et performants",
      description: "Couche sableuse stabilisée de 6 à 7 cm d’épaisseur, à base de ciment de verre et de sable concassé sélectionné. Offre un confort articulaire sécurisant, un drainage vertical instantané et une praticabilité 365 jours par an.",
      points: [
        "Drainage vertical instantané : zéro flaque, praticable après l'averse",
        "Surface souple et sécurisante pour amortir les réceptions",
        "Naturel et durable : sans aucun granule microplastique nocif",
        "Entretien très réduit : finis les reprofilages fréquents",
        "Polyvalent : multisports, boulodrome / pétanque, football, pelote"
      ],
      thickness: "6 à 7 cm",
      badges: [
        { label: "Drainage direct", icon: "sparkles", desc: "> 100 mm/h" },
        { label: "Anti-blessure", icon: "shield", desc: "Amorti articulaire" },
        { label: "Multisports", icon: "recycle", desc: "Homologué" }
      ]
    }
  };

  const productDataES = {
    'enverr-paq': {
      title: "ENVERR'PAQ®",
      badgeText: "VIALES LIGEROS Y BOMBEROS",
      subtitle: "El pavimento estabilizado de gran resistencia para viales ligeros y accesos de bomberos",
      description: "Formulado con un 10% de cemento de vidrio patentado ECO'STABIL®, ENVERR'PAQ® resalta la belleza del árido natural en superficie. Gran capacidad portante (Rc máx 34 MPa), idóneo para viales de bomberos, carriles bici y zonas de fuerte pendiente.",
      points: [
        "Densidad compactada certificada: 2,15 a 2,3 t/m³ (según árido)",
        "10% de cemento de vidrio patentado ECO'STABIL®",
        "Emite hasta 5 veces menos gases de efecto invernadero vs asfalto",
        "Autorreparación por humedad y gran resistencia a intemperie",
        "Sección tipo: 5 a 10 cm sobre zahorra 0/20 o 0/32 y geotextil"
      ],
      thickness: "5 a 10 cm",
      badges: [
        { label: "Rc 34 MPa", icon: "shield", desc: "Alta portanza" },
        { label: "Densidad 2,15", icon: "sparkles", desc: "Masa volumétrica" },
        { label: "Bajo Carbono", icon: "recycle", desc: "-75% de CO₂" }
      ]
    },
    'decoverr': {
      title: "D'ECOVERR®",
      badgeText: "CAMINOS URBANOS Y MOVILIDAD",
      subtitle: "Pavimento estabilizado liso o semiliso para paseos urbanos y movilidad blanda",
      description: "Solución estética y eficaz para carriles bici, plazas y aparcamientos drenantes. Resistencia mecánica de hasta 38 MPa (certificada BRGM-INSA) manteniendo la frescura de los suelos urbanos.",
      points: [
        "Resistencia a compresión máxima: 38 MPa (BRGM-INSA)",
        "Densidad compactada: 2,14 a 2,3 t/m³",
        "12 a 14% de cemento de vidrio patentado ECO'STABIL®",
        "Posibilidad de señalización horizontal con pintura",
        "Curado con lámina de plástico para máxima resistencia"
      ],
      thickness: "5 a 8 cm",
      badges: [
        { label: "Rc 38 MPa", icon: "shield", desc: "Resistencia máx" },
        { label: "Movilidad blanda", icon: "sparkles", desc: "Superficie lisa" },
        { label: "Autorreparable", icon: "recycle", desc: "Reactivo con agua" }
      ]
    },
    'stabipaq': {
      title: "STABIPAQ®",
      badgeText: "PARQUES, VÍAS VERDES Y PATRIMONIO",
      subtitle: "Estabilizado reforzado de aspecto natural para paseos en parques y jardines",
      description: "Especialmente diseñado para parques públicos, senderos y entornos paisajísticos. Gran cohesión y fuerte reducción del árido suelto, preservando el color autóctono del terreno.",
      points: [
        "Aspecto natural auténtico, integración armónica",
        "Reducción del árido suelto para una rodadura limpia y agradable",
        "Excelente durabilidad y resistencia contrastada a lluvias",
        "100% Permeable al agua (nutre raíces y acuíferos)",
        "Apto para peatones, bicicletas, carritos y accesibilidad PMR"
      ],
      thickness: "4 a 6 cm",
      badges: [
        { label: "Cero polvo", icon: "sparkles", desc: "Confort estival" },
        { label: "Apto PMR", icon: "shield", desc: "Circulación fluida" },
        { label: "100% Permeable", icon: "recycle", desc: "Infiltración total" }
      ]
    },
    'stabil-sport': {
      title: "STABIL'SPORT®",
      badgeText: "PISTAS DEPORTIVAS Y POLIDEPORTIVOS",
      subtitle: "La solución de referencia para equipamientos deportivos duraderos al aire libre",
      description: "Capa de arena estabilizada de 6 a 7 cm con cemento de vidrio y arena triturada seleccionada. Gran absorción articular, drenaje vertical inmediato y operatividad 365 días al año.",
      points: [
        "Drenaje vertical inmediato: sin charcos, utilizable tras la lluvia",
        "Superficie flexible y segura que amortigua las caídas",
        "100% Natural: sin microplásticos ni gránulos de caucho nocivos",
        "Mantenimiento mínimo: adiós a los continuos recompactados",
        "Polivalente: multideporte, petanca/boleras, fútbol, frontón"
      ],
      thickness: "6 a 7 cm",
      badges: [
        { label: "Drenaje directo", icon: "sparkles", desc: "> 100 mm/h" },
        { label: "Antilesiones", icon: "shield", desc: "Amortiguación" },
        { label: "Multideporte", icon: "recycle", desc: "Homologado" }
      ]
    }
  };

  const productData = lang === 'ES' ? productDataES : productDataFR;

  const current = productData[selectedProduct];

  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Pourquoi choisir ESPORTEC ? */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-9 bg-emerald-600 rounded-full inline-block" />
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {lang === 'ES' ? '¿Por qué elegir ESPORTEC?' : 'Pourquoi choisir ESPORTEC ?'}
                </h2>
              </div>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {lang === 'ES'
                  ? 'Desde hace más de 25 años combinamos ingeniería de materiales, circularidad y logística integral de suministro en España y Francia.'
                  : 'Depuis plus de 25 ans, nous combinons ingénierie des matériaux, circularité environnementale et maîtrise logistique des chantiers partout en France.'}
              </p>
            </div>

            {/* The 4 Grid Items matching mockup */}
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Leaf className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {lang === 'ES' ? 'Soluciones duraderas' : 'Des solutions durables'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {lang === 'ES'
                      ? 'Pavimentos naturales, de alta resistencia y durabilidad frente al tránsito, la lluvia y las heladas.'
                      : 'Des revêtements naturels, performants et pérennes qui résistent aux intempéries et au gel sans faïençage.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {lang === 'ES' ? 'Economía circular' : 'Une démarche environnementale'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {lang === 'ES'
                      ? 'Materiales responsables procedentes de residuos de vidrio no aprovechables en la industria convencional.'
                      : 'Des matériaux responsables issus du recyclage des verres ultimes non valorisables en verrerie traditionnelle.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {lang === 'ES' ? 'Experiencia técnica contrastada' : 'Une expertise technique'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {lang === 'ES'
                      ? 'Más de 25 años de experiencia (desde 1997) en pavimentos estabilizados con patentes reconocidas.'
                      : 'Plus de 25 ans d’expérience (depuis 1997) dans les sols stabilisés avec liants brevetés et primés.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-emerald-300 transition-colors">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Users2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {lang === 'ES' ? 'Acompañamiento a medida' : 'Un accompagnement sur mesure'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                    {lang === 'ES'
                      ? 'Desde la formulación técnica en laboratorio hasta la entrega directa en camiones volquete en obra.'
                      : 'Du conseil de formulation à la réalisation et à la livraison directe en camions bennes sur vos chantiers.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: PRODUIT PHARE card */}
          <div className="lg:col-span-7">
            {/* Interactive selector between products */}
            <div className="flex flex-wrap items-center gap-2 mb-5 p-1.5 bg-slate-100 rounded-2xl border border-slate-200 w-fit">
              <button
                onClick={() => setSelectedProduct('enverr-paq')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  selectedProduct === 'enverr-paq'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ENVERR’PAQ® ({lang === 'ES' ? 'Viales' : 'Voirie'})
              </button>
              <button
                onClick={() => setSelectedProduct('decoverr')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  selectedProduct === 'decoverr'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                D’ECOVERR® ({lang === 'ES' ? 'Urbano' : 'Urbain'})
              </button>
              <button
                onClick={() => setSelectedProduct('stabipaq')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  selectedProduct === 'stabipaq'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                STABIPAQ® ({lang === 'ES' ? 'Parques' : 'Parcs'})
              </button>
              <button
                onClick={() => setSelectedProduct('stabil-sport')}
                className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                  selectedProduct === 'stabil-sport'
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                STABIL’SPORT® ({lang === 'ES' ? 'Deporte' : 'Sport'})
              </button>
            </div>

            {/* Spotlight Card */}
            <div className="bg-gradient-to-br from-white via-emerald-50/30 to-lime-50/40 rounded-3xl border-2 border-emerald-300 shadow-xl overflow-hidden p-6 sm:p-8 relative">
              <div className="grid sm:grid-cols-12 gap-8 items-start">
                {/* Left part of card: Text & Checklist */}
                <div className="sm:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 tracking-wider uppercase bg-emerald-100/90 px-3 py-1.5 rounded-lg border border-emerald-300">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>{current.badgeText}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-base font-bold text-emerald-700">
                    {current.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2.5 pt-2">
                    {current.points.map((pt, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="font-medium">{pt}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action CTA */}
                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => onOpenProductSheet(selectedProduct)}
                      className="inline-flex items-center gap-2 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 rounded-xl shadow-md shadow-emerald-700/20 transition-all cursor-pointer group"
                    >
                      <span>{lang === 'ES' ? 'Ver ficha del producto' : 'Découvrir la fiche produit'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(lang === 'ES' ? `Solicitud de proyecto y pliego para ${current.title}` : `Demande d'étude projet & CCTP pour ${current.title}`)}
                      className="px-4 py-3.5 text-xs sm:text-sm font-semibold text-slate-700 hover:text-emerald-700 bg-white border border-slate-300 hover:border-emerald-300 rounded-xl transition-colors cursor-pointer"
                    >
                      {lang === 'ES' ? 'Solicitar estudio técnico y pliego' : 'Demander une étude projet & CCTP'}
                    </button>
                  </div>
                </div>

                {/* Right part of card: Badges & Macro Zoom */}
                <div className="sm:col-span-4 flex flex-col gap-3">
                  {current.badges.map((b, i) => (
                    <div
                      key={i}
                      className="p-3 bg-white/95 rounded-xl border border-slate-200/80 shadow-xs flex items-center gap-3"
                    >
                      <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                        {i === 0 && <Recycle className="w-5 h-5" />}
                        {i === 1 && <Sparkles className="w-5 h-5" />}
                        {i === 2 && <ShieldCheck className="w-5 h-5" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900">{b.label}</div>
                        <div className="text-[11px] text-slate-500">{b.desc}</div>
                      </div>
                    </div>
                  ))}

                  {/* Real Chantier Application Photo */}
                  <div className="mt-2 rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm relative group bg-slate-900">
                    <img
                      src="/assets/chantier_rouleau_compactage.jpg"
                      alt="Chantier d'application et compactage sol stabilisé ESPORTEC"
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 saturate-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/20 pointer-events-none" />
                    
                    <div className="absolute top-2 left-2 z-10">
                      <span className="text-[10px] font-bold text-emerald-950 bg-emerald-100/90 px-2 py-0.5 rounded shadow-xs border border-emerald-300">
                        Photo Chantier
                      </span>
                    </div>

                    <div className="absolute bottom-2 left-3 right-3 z-10 text-white">
                      <span className="text-xs font-bold block truncate">
                        Compactage au rouleau vibrant
                      </span>
                      <span className="text-[10px] text-lime-300 font-medium block">
                        Finition lisse & cohésion immédiate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
