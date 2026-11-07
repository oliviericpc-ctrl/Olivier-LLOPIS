import React, { useState } from 'react';
import { Eye, CheckCircle2, Sparkles, Layers, Droplets, Sun, Footprints, ShieldCheck, ArrowRight, Compass } from 'lucide-react';
import { Language } from '../data/translations';

interface PavementShowcaseSectionProps {
  onOpenQuoteModal: (subject?: string) => void;
  lang?: Language;
}

export const PavementShowcaseSection: React.FC<PavementShowcaseSectionProps> = ({
  onOpenQuoteModal,
  lang = 'FR',
}) => {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const showcaseItemsFR = [
    {
      id: 'banque-de-france',
      title: 'Promenade urbaine de prestige & abords de monuments',
      location: 'Site Banque de France · Centre-ville',
      image: '/assets/aistudio/5CB23655-3E42-44FE-98E1-5067A49E583C_1d922e74.jpeg',
      badge: 'Rendu Fini · Ocre Doré',
      description:
        'Aspect de sable compacté chaleureux avec bordures de délimitation en pavés de granit. Surface parfaitement plane, homogène et continue, sans joints de dilatation inesthétiques.',
      highlights: [
        'Teinte ocre naturelle issue des sables de carrière régionaux',
        'Bordures pavées granitiques pour un raccordement paysager soigné',
        'Accessibilité totale PMR, vélos, poussettes et talons aiguilles',
        '100% perméable : infiltration instantanée des pluies sans flaques'
      ]
    },
    {
      id: 'allee-platane',
      title: 'Grande allée piétonne arborée sans joints ni bitume',
      location: 'Promenade publique sous platanes centenaires',
      image: '/assets/aistudio/4DCF8CE6-1C0E-4B5D-846F-76C4D53688FF_636cb695.jpeg',
      badge: 'Rendu Fini · Grande Allée',
      description:
        'Perspective continue sur plusieurs centaines de mètres. Le sol stabilisé ESPORTEC respecte la respiration racinaire des arbres et évite les fissures destructrices causées par les racines sous le goudron.',
      highlights: [
        'Zéro fissuration ni déformation provoquée par les racines des arbres',
        'Absence de joints de dilatation : un ruban minéral pur et élégant',
        'Fraîcheur préservée en été : jusqu’à 15°C de moins au sol que l’enrobé noir',
        'Auto-cicatrisation permanente activée par l’humidité ambiante'
      ]
    },
    {
      id: 'finition-courbe',
      title: 'Cheminement courbe au pied des architectures',
      location: 'Aménagement piétonnier d’écoquartier',
      image: '/assets/aistudio/2B97740B-86B6-4AF5-9FFA-A34CCF2CF54F_88911dbe.jpeg',
      badge: 'Rendu Fini · Texture Naturelle',
      description:
        'Intégration millimétrique le long des maçonneries et murets. La texture du sol offre la douceur visuelle d’un chemin en terre battue tout en assurant la solidité d’un sol pérenne.',
      highlights: [
        'Finition soignée contre les maçonneries, bordures ou pieds d’arbres',
        'Grain fin antidérapant, doux au toucher et non abrasif',
        'Zéro boue lors des hivers pluvieux, zéro nuage de poussière en été',
        'Cohésion progressive renforcée sur 3 ans grâce à la silice active'
      ]
    },
    {
      id: 'finisseur-pose',
      title: 'Mise en œuvre mécanisée au finisseur d’enrobé',
      location: 'Chantier en cours d’application par entreprise TP',
      image: '/assets/aistudio/1BB34A5D-AB46-4FF3-A8DE-FEE02D81BC53_0481373c.jpeg',
      badge: 'Mise en Œuvre · Au Finisseur',
      description:
        'Le sol stabilisé ESPORTEC se pose avec le matériel routier standard des entreprises de travaux publics (finisseur ou niveleuse, compacteur à rouleau vibrant).',
      highlights: [
        'Application à grand rendement journalier (jusqu’à 1 500 m²/jour)',
        'Régularité d’épaisseur et nivellement laser parfait',
        'Fabrication in situ par silo mobile ou centrale partenaire',
        'Compactage au rouleau tándem pour atteindre 2,15 t/m³ de masse volumique'
      ]
    }
  ];

  const showcaseItemsES = [
    {
      id: 'banque-de-france',
      title: 'Paseo urbano de referencia y accesos a edificios históricos',
      location: 'Entorno monumental · Centro urbano',
      image: '/assets/aistudio/5CB23655-3E42-44FE-98E1-5067A49E583C_1d922e74.jpeg',
      badge: 'Acabado Final · Ocre Dorado',
      description:
        'Aspecto cálido de arena compactada natural rematada con bordillos de granito. Superficie perfectamente plana, continua y sin juntas de dilatación antiestéticas.',
      highlights: [
        'Tonalidad ocre natural procedente de canteras regionales',
        'Bordillos de adoquín granítico para una perfecta integración paisajística',
        'Accesibilidad total para PMR, sillas de ruedas, carritos y bicicletas',
        '100% drenante: infiltración inmediata de aguas pluviales sin charcos'
      ]
    },
    {
      id: 'allee-platane',
      title: 'Gran avenida peatonal arbolada sin juntas ni asfalto negro',
      location: 'Paseo público arbolado',
      image: '/assets/aistudio/4DCF8CE6-1C0E-4B5D-846F-76C4D53688FF_636cb695.jpeg',
      badge: 'Acabado Final · Gran Avenida',
      description:
        'Perspectiva continua de varios cientos de metros. El pavimento estabilizado ESPORTEC respeta la oxigenación de las raíces de los árboles y no se agrieta por su crecimiento.',
      highlights: [
        'Sin roturas ni grietas producidas por las raíces de los árboles',
        'Ausencia total de juntas de dilatación: pavimento continuo y elegante',
        'Suelo fresco en verano: hasta 15°C menos de temperatura respecto al asfalto',
        'Autorreparación permanente reactivada por la humedad ambiente'
      ]
    },
    {
      id: 'finition-courbe',
      title: 'Sendero curvo junto a fachadas arquitectónicas',
      location: 'Urbanización peatonal y ecobarrio',
      image: '/assets/aistudio/2B97740B-86B6-4AF5-9FFA-A34CCF2CF54F_88911dbe.jpeg',
      badge: 'Acabado Final · Textura Natural',
      description:
        'Encuentros precisos contra muros y zócalos. Ofrece la suavidad estética de un sendero de tierra compactada con la resistencia de una solución técnica duradera.',
      highlights: [
        'Encuentros limpios con fachadas, muretes o alcorques',
        'Grano fino antideslizante, agradable al paso y no abrasivo',
        'Cero barro en invierno y cero polvo en los meses de calor',
        'Consolidación progresiva durante 3 años por mineralización silícea'
      ]
    },
    {
      id: 'finisseur-pose',
      title: 'Puesta en obra mecanizada con extendedora de asfalto',
      location: 'Obra en ejecución por contrata de obra civil',
      image: '/assets/aistudio/1BB34A5D-AB46-4FF3-A8DE-FEE02D81BC53_0481373c.jpeg',
      badge: 'Ejecución · Con Extendedora',
      description:
        'El pavimento ESPORTEC se aplica con la maquinaria habitual de obra civil (extendedora o motoniveladora y rodillo vibrante tándem).',
      highlights: [
        'Alto rendimiento diario de ejecución (hasta 1.500 m²/día)',
        'Espesor constante y nivelación milimétrica por control topográfico',
        'Mezcla in situ con silo móvil o suministro desde planta',
        'Compactación con rodillo para alcanzar densidad compactada de 2,15 t/m³'
      ]
    }
  ];

  const items = lang === 'ES' ? showcaseItemsES : showcaseItemsFR;
  const currentItem = items[activePhoto];

  return (
    <section id="aspect-visuel" className="py-20 bg-stone-900 text-white relative overflow-hidden border-b border-stone-800">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-black tracking-widest text-lime-400 uppercase bg-stone-800/90 border border-stone-700 px-3.5 py-1.5 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-lime-400" />
            <span>{lang === 'ES' ? 'ASPECTO Y ACABADO REAL EN OBRA' : 'ASPECT & RENDU VISUEL RÉEL SUR CHANTIER'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {lang === 'ES'
              ? '¿Cómo queda realmente un pavimento ESPORTEC?'
              : 'À quoi ressemble vraiment un sol ESPORTEC ?'}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-stone-300 leading-relaxed">
            {lang === 'ES'
              ? 'Ni asfalto negro que retiene el calor, ni hormigón gris con juntas de dilatación, ni gravilla suelta que se dispersa: descubra la belleza mineral auténtica, la textura de arena compactada y la planimetría de nuestros pavimentos en fotos de obras reales.'
              : 'Ni enrobé noir surchauffé, ni dalle béton avec joints qui cassent, ni gravier meuble instable : découvrez l’aspect minéral noble, la texture sableuse compactée et la planimétrie parfaite de nos revêtements stabilisés sur des chantiers réels.'}
          </p>
        </div>

        {/* Featured Big Showcase Card */}
        <div className="bg-stone-950/90 rounded-3xl border border-stone-800 shadow-2xl overflow-hidden p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Big Main Image with Badges */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-xl bg-stone-900 group aspect-[4/3] sm:aspect-[16/11]">
                <img
                  src={currentItem.image}
                  alt={currentItem.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 saturate-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-stone-950/30 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="text-xs font-black tracking-wide text-stone-950 bg-lime-400 px-3 py-1.5 rounded-lg shadow-md border border-lime-300">
                    {currentItem.badge}
                  </span>
                  <span className="text-xs font-bold text-white bg-stone-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-stone-700 shadow-md">
                    {currentItem.location}
                  </span>
                </div>

                {/* Bottom title on image */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                  <h3 className="text-lg sm:text-xl font-black text-white drop-shadow-md">
                    {currentItem.title}
                  </h3>
                </div>
              </div>
            </div>

            {/* Details & Highlights for Active Image */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  {lang === 'ES' ? 'Análisis estético y constructivo' : 'Détail esthétique & constructif'}
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {currentItem.title}
                </h3>
                <p className="text-sm sm:text-base text-stone-300 mt-3 leading-relaxed">
                  {currentItem.description}
                </p>

                {/* Key attributes checklist */}
                <div className="mt-6 space-y-3 pt-4 border-t border-stone-800">
                  {currentItem.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-stone-200">
                      <CheckCircle2 className="w-5 h-5 text-lime-400 shrink-0 mt-0.5" />
                      <span className="font-medium leading-snug">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(lang === 'ES' ? `Consulta sobre acabado visual: ${currentItem.title}` : `Question sur le rendu visuel : ${currentItem.title}`)}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-stone-950 bg-lime-400 hover:bg-lime-300 transition-colors shadow-lg cursor-pointer"
                >
                  <span>{lang === 'ES' ? 'Pedir presupuesto para mi proyecto' : 'Demander une étude pour mon projet'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnails switcher underneath */}
          <div className="mt-8 pt-6 border-t border-stone-800">
            <span className="text-xs font-bold text-stone-400 uppercase tracking-wider block mb-3">
              {lang === 'ES' ? 'Haga clic para ver otras obras reales :' : 'Cliquez pour explorer les autres chantiers réels :'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {items.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setActivePhoto(idx)}
                  className={`relative rounded-xl overflow-hidden p-2 text-left transition-all border cursor-pointer ${
                    activePhoto === idx
                      ? 'border-lime-400 bg-stone-800 shadow-md ring-2 ring-lime-400/40'
                      : 'border-stone-800 bg-stone-900/60 hover:border-stone-700 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="h-20 sm:h-24 w-full rounded-lg overflow-hidden bg-stone-950 mb-2 relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    {activePhoto === idx && (
                      <div className="absolute inset-0 bg-lime-400/15 pointer-events-none" />
                    )}
                  </div>
                  <span className="text-xs font-bold text-white block truncate">
                    {item.badge}
                  </span>
                  <span className="text-[11px] text-stone-400 block truncate">
                    {item.location}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Technical Texture & Aesthetic Characteristics Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4 border border-lime-400/20">
              <Footprints className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              {lang === 'ES' ? 'Textura mineral natural' : 'Texture minérale naturelle'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'ES'
                ? 'Aspecto visual de arena compactada auténtica. Cómodo y seguro para caminar descalzo, sin aristas cortantes ni gravilla suelta que golpee calzados.'
                : 'L’aspect chaleureux et noble d’un sable compacté naturel. Confortable et sûr pour la marche pieds nus, sans arêtes vives ni gravillons projetés.'}
            </p>
          </div>

          <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80">
            <div className="w-12 h-12 rounded-xl bg-emerald-400/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-400/20">
              <Compass className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              {lang === 'ES' ? 'Colores según áridos locales' : 'Teintes selon sables locaux'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'ES'
                ? 'Ocre dorado, beige calizo, gris granítico o rosáceo. Adaptamos la fórmula a las canteras de su provincia para respetar el paisaje protegido.'
                : 'Ocre provençal, beige calcaire de Champagne, gris granitique ou rosé. Nous adaptons la formulation aux carrières de votre région pour respecter le patrimoine classé.'}
            </p>
          </div>

          <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80">
            <div className="w-12 h-12 rounded-xl bg-teal-400/10 text-teal-400 flex items-center justify-center mb-4 border border-teal-400/20">
              <Layers className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              {lang === 'ES' ? 'Continuo sin juntas de corte' : 'Continu sans joints sécants'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'ES'
                ? 'A diferencia de las losas de hormigón que exigen juntas cada 4 metros, ESPORTEC se aplica en un manto continuo continuo sin ranuras donde nazca maleza.'
                : 'Contrairement aux dalles béton qui exigent des joints tous les 4 mètres propices aux mauvaises herbes, ESPORTEC s’étend en un tapis continu et sans découpe.'}
            </p>
          </div>

          <div className="bg-stone-800/80 rounded-2xl p-6 border border-stone-700/80">
            <div className="w-12 h-12 rounded-xl bg-lime-400/10 text-lime-400 flex items-center justify-center mb-4 border border-lime-400/20">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-white mb-2">
              {lang === 'ES' ? 'Fresco en verano y sin barro' : 'Fraîcheur d’été & zéro boue'}
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {lang === 'ES'
                ? 'No se ablanda ni huele a betún bajo 40°C de calor (albedo claro). En invierno, el agua se infiltra en segundos evitando la formación de barro.'
                : 'Ne fond pas et ne dégage aucune odeur de goudron lors des canicules à 40°C. En hiver, l’eau s’évacue verticalement en quelques secondes sans former de boue.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
