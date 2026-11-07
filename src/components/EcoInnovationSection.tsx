import React, { useState, useRef } from 'react';
import { Microscope, Timer, ShieldCheck, Sparkles, ChevronRight, Recycle, ArrowRight, FlaskConical, Building, Flame, Check, Film, Play, Image as ImageIcon } from 'lucide-react';
import { THREE_PHASES, COMPANY_INFO } from '../data/mockData';
import { getLocalizedThreePhases } from '../data/spanishContent';
import { Language } from '../data/translations';
import { EsporTecLogo } from './EsporTecLogo';

interface EcoInnovationProps {
  onOpenQuoteModal: (subject?: string) => void;
  lang?: Language;
}

export const EcoInnovationSection: React.FC<EcoInnovationProps> = ({ 
  onOpenQuoteModal,
  lang = 'FR'
}) => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [mediaTab, setMediaTab] = useState<'video' | 'poster'>('video');
  const videoRef = useRef<HTMLVideoElement>(null);
  const phases = getLocalizedThreePhases(lang);

  const handleSeek = (timeSec: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeSec;
      videoRef.current.play().catch(() => {});
    }
  };

  const steps = lang === 'ES' ? [
    {
      title: 'Vidrios últimos no reciclables',
      description: 'Recogida de residuos vítreos rechazados por la cadena tradicional: lunas de demolición, parabrisas laminados, vidrios complejos y envases no recuperables.',
      badge: 'Yacimiento inagotable',
      icon: Recycle
    },
    {
      title: 'Micronización ultrafina sin cocción',
      description: 'Molienda mecánica de alta precisión a temperatura ambiente. Cero hornos de clinkerización emisores de CO₂, reduciendo en más del 75% la huella de carbono.',
      badge: 'Bajo Carbono (-75% CO₂)',
      icon: FlaskConical
    },
    {
      title: "Ligante ECO'STABIL® patentado",
      description: 'Polvo puzolánico reactivo patentado con el respaldo del BRGM y Eco-emballages, creando enlaces silicatados permanentes con los áridos locales.',
      badge: 'Patente y Certificaciones',
      icon: ShieldCheck
    },
    {
      title: 'Puesta en obra y 3 fases de fraguado',
      description: 'Mezcla con áridos locales triturados, extendido mediante motoniveladora o extendedora y compactación. El pavimento gana resistencia en el tiempo sin degradarse.',
      badge: 'Durabilidad +30 años',
      icon: Sparkles
    }
  ] : [
    {
      title: 'Verres ultimes non recyclables',
      description: 'Collecte des déchets verriers rejetés par la filière verrière classique : vitrages de déconstruction, pare-brise feuilletés, verres composites et emballages complexes.',
      badge: 'Gisement infini',
      icon: Recycle
    },
    {
      title: 'Micronisation ultra-fine sans cuisson',
      description: 'Broyage mécanique de haute précision à température ambiante. Zéro four de clinkerisation énergivore, divisant par plus de 4 l’empreinte carbone du liant.',
      badge: 'Bas Carbone (-75% CO₂)',
      icon: FlaskConical
    },
    {
      title: 'Liant ECOSTABIL® breveté',
      description: 'Poudre pouzzolanique réactive brevetée avec le soutien du BRGM et Eco-emballages, formant des liaisons silicatées indestructibles avec les sables locaux.',
      badge: 'Brevet & Labels',
      icon: ShieldCheck
    },
    {
      title: 'Mise en œuvre & 3 phases de prise',
      description: 'Mélange avec des sables locaux concassés, étalage par niveleuse ou finisseur, compactage. Le sol se bonifie avec le temps sans altération.',
      badge: 'Durabilité 30 ans',
      icon: Sparkles
    }
  ];

  const rdPrograms = lang === 'ES' ? [
    'Ligantes ultra-reactivos para tráfico pesado y plataformas logísticas',
    'Matrices estabilizadas descarbonizadas para suelos salinos o complejos',
    'Formulaciones específicas para hormigón drenante sin clínker',
    'Tratamiento in situ de suelos con silo móvil y dosificación automatizada con control de laboratorio externo'
  ] : COMPANY_INFO.rdPrograms;

  return (
    <section id="innovation" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-8 bg-emerald-500 rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {lang === 'ES' ? 'Innovación I+D al servicio del medio ambiente' : 'L’innovation R&D au service de l’écologie'}
            </h2>
          </div>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {lang === 'ES' ? (
              <>
                Desde 1997, ESPORTEC une la innovación técnica a la máxima calidad ambiental. Nuestro revolucionario ligante <span className="text-lime-400 font-bold">ECO'STABIL®</span> transforma los residuos últimos de vidrio en un cemento mineral ecológico de altísima resistencia.
              </>
            ) : (
              <>
                Dès 1997, ESPORTEC a choisi d’associer innovation technique et haute qualité environnementale. Notre liant révolutionnaire <span className="text-lime-400 font-bold">ECOSTABIL®</span> transforme les déchets ultimes de verre en un ciment minéral de très haute résistance.
              </>
            )}
          </p>
        </div>

        {/* Official Fabrication & Industrial Visual Showcase with Video Player */}
        <div className="mt-14 bg-gradient-to-br from-slate-950 to-slate-900 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Visual media preview: Video player by default, with chapter jumps and poster toggle */}
            <div className="lg:col-span-6 relative flex flex-col gap-3">
              {/* Media Switcher Buttons */}
              <div className="flex items-center gap-2 p-1 bg-slate-900 rounded-xl border border-slate-800 self-start">
                <button
                  onClick={() => setMediaTab('video')}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    mediaTab === 'video'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Film className="w-3.5 h-3.5 text-lime-400" />
                  <span>{lang === 'ES' ? 'Vídeo del proceso (25s)' : 'Vidéo du process (25s)'}</span>
                </button>
                <button
                  onClick={() => setMediaTab('poster')}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    mediaTab === 'poster'
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>{lang === 'ES' ? 'Infografía oficial' : 'Infographie officielle'}</span>
                </button>
              </div>

              {mediaTab === 'video' ? (
                <div className="relative rounded-2xl overflow-hidden border border-emerald-500/40 shadow-2xl bg-black group">
                  <video
                    ref={videoRef}
                    src="/assets/aistudio/My_first_board_ESPORTEC_-_Promo_25smp4_50Rvzq7G_c41fd130.mp4"
                    controls
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full aspect-video object-cover bg-black"
                  />
                  {/* Overlay badge */}
                  <div className="absolute top-3 left-3 pointer-events-none z-10">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-950 bg-lime-400 px-2.5 py-1 rounded shadow-md border border-lime-300">
                      {lang === 'ES' ? 'Vídeo Oficial 25s' : 'Vidéo Officielle 25s'}
                    </span>
                  </div>

                  {/* Chapter Seek Navigation */}
                  <div className="p-3 bg-slate-950/95 border-t border-slate-800 flex flex-wrap items-center justify-between gap-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {lang === 'ES' ? 'Capítulos :' : 'Chapitres :'}
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5">
                      <button
                        onClick={() => handleSeek(0)}
                        className="px-2 py-1 rounded text-[11px] font-semibold bg-slate-800 hover:bg-emerald-700 text-slate-200 transition-colors border border-slate-700 cursor-pointer"
                      >
                        0s · {lang === 'ES' ? 'Vidrio' : 'Verre'}
                      </button>
                      <button
                        onClick={() => handleSeek(5)}
                        className="px-2 py-1 rounded text-[11px] font-semibold bg-slate-800 hover:bg-emerald-700 text-slate-200 transition-colors border border-slate-700 cursor-pointer"
                      >
                        5s · {lang === 'ES' ? 'Mezcla' : 'Malaxage'}
                      </button>
                      <button
                        onClick={() => handleSeek(9)}
                        className="px-2 py-1 rounded text-[11px] font-semibold bg-slate-800 hover:bg-emerald-700 text-slate-200 transition-colors border border-slate-700 cursor-pointer"
                      >
                        9s · {lang === 'ES' ? 'Obra' : 'Chantier'}
                      </button>
                      <button
                        onClick={() => handleSeek(14)}
                        className="px-2 py-1 rounded text-[11px] font-semibold bg-slate-800 hover:bg-emerald-700 text-slate-200 transition-colors border border-slate-700 cursor-pointer"
                      >
                        14s · {lang === 'ES' ? 'Suelo acabado' : 'Sol fini'}
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-black">
                  <img
                    src="/assets/aistudio/ESPORTEC_visuel_2_fabrication_7b854fd0.png"
                    alt="Processus de fabrication ESPORTEC Éco-Industriel - La qualité environnementale vue du sol"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 text-center">
                    <span className="text-xs font-bold text-white bg-slate-900/90 backdrop-blur-xs px-3.5 py-1.5 rounded-full border border-slate-700 shadow-md">
                      {lang === 'ES' ? 'Lámina oficial · Proceso de fabricación industrial' : 'Affiche officielle · Processus de fabrication'}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Description & 3 Steps breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-3 py-1.5 rounded-lg">
                    <span>{lang === 'ES' ? 'SECTOR ECO-INDUSTRIAL EUROPEO' : 'FILIÈRE ÉCO-INDUSTRIELLE FRANÇAISE'}</span>
                  </div>
                  <div className="hidden sm:block h-6 w-px bg-slate-800" />
                  <EsporTecLogo className="h-8 sm:h-9 w-auto" withBaseline={false} lightMode={false} />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {lang === 'ES' ? 'De la materia prima reciclada al suministro en obra' : 'De la matière recyclée à la livraison sur chantier'}
                </h3>
                <p className="text-base font-semibold text-emerald-300 italic mt-1.5">
                  {lang === 'ES' ? '«La calidad medioambiental al servicio de los suelos»' : '« La qualité environnementale au service des sols »'}
                </p>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mt-2.5">
                  {lang === 'ES' 
                    ? 'Nuestras plantas industriales transforman los yacimientos de vidrio no reciclables en ligantes minerales ecológicos de altísimo rendimiento para sus obras en toda la Península Ibérica y Europa.'
                    : 'Notre outil de production transforme les gisements de verre rejetés par l’industrie verrière en liants minéraux écologiques de très haute performance pour vos chantiers partout en France et en Espagne.'}
                </p>
              </div>

              {/* The 3 numbered steps from the official infographic */}
              <div className="grid sm:grid-cols-3 gap-3.5">
                <div className="p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/30 hover:border-emerald-500 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-lime-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-xs">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                    {lang === 'ES' ? 'Materia reciclada' : 'Matière recyclée'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {lang === 'ES' 
                      ? 'Calcín de vidrio de envases, derribos y parabrisas no recuperables.' 
                      : "Cullet de verre d'emballages, déconstruction et pare-brise non recyclables."}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/30 hover:border-emerald-500 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-lime-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-xs">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                    {lang === 'ES' ? 'Formulación en planta' : 'Formulation en centrale'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {lang === 'ES' 
                      ? 'Control automatizado de dosificación, humedad y reactividad mineral.' 
                      : 'Contrôle automatisé des dosages, de l’hygrométrie et de la réactivité minérale.'}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-800/80 border border-emerald-500/30 hover:border-emerald-500 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-lime-600 text-white font-black text-sm flex items-center justify-center mb-3 shadow-xs">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-1.5">
                    {lang === 'ES' ? 'Transporte y suministro' : 'Transport & livraison'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {lang === 'ES' 
                      ? 'Distribución directa en camiones volquete y tráileres basculantes a pie de obra.' 
                      : 'Acheminement direct en camions bennes et semi-remorques sur toute la France.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Visita de obra piloto o planta asociada' : 'Visite de chantier pilote ou centrale partenaire')}
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md transition-all cursor-pointer"
                >
                  {lang === 'ES' ? 'Visitar una obra de referencia o planta asociada' : 'Visiter un chantier pilote ou une centrale partenaire'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Economy Flow Diagram */}
        <div className="mt-14">
          <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-6 flex items-center gap-2">
            <Recycle className="w-4 h-4" />
            <span>
              {lang === 'ES' ? 'El ciclo eco-industrial del cemento de vidrio ESPORTEC' : 'Le cycle éco-industriel du ciment de verre ESPORTEC'}
            </span>
          </h3>

          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-emerald-500/60 transition-all flex flex-col justify-between relative group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-lime-400 font-mono">0{idx + 1}.</span>
                    <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-950/80 border border-emerald-800 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-emerald-900/60 flex items-center justify-center text-lime-400 mb-4 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                  </div>

                  <div className="pt-2 border-t border-slate-700/50 flex items-center text-[11px] text-slate-400">
                    <span>{lang === 'ES' ? `Fase ${idx + 1} de 4` : `Étape ${idx + 1} sur 4`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Deep Dive: The 3 Phases of Setting (Key Patent Property) */}
        <div className="mt-16 bg-slate-800/60 rounded-3xl border border-slate-700 p-6 sm:p-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-lime-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-1 rounded-md">
                {lang === 'ES' ? 'Propiedad exclusiva patentada' : 'Propriété exclusive brevetée'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'ES' ? 'Las tres fases de fraguado químico' : 'Les trois phases de prise chimique'}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {lang === 'ES' 
                  ? 'A partir de este ligante a base de cemento de vidrio, hemos desarrollado características excepcionales. La cinética de reacción se desarrolla en 3 etapas clave para combinar facilidad de aplicación y resistencia garantizada por más de 30 años.'
                  : 'De ce nouveau liant au ciment de verre, nous avons tiré des caractéristiques spécifiques exceptionnelles. La cinétique de réaction s’effectue en 3 temps clés pour allier facilité d’application et résistance trentenaire.'}
              </p>

              {/* Phase Selector Buttons */}
              <div className="space-y-2 pt-2">
                {phases.map((p, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedPhase(index)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                      selectedPhase === index
                        ? 'bg-gradient-to-r from-emerald-600 to-lime-600 text-white border-lime-400 shadow-lg shadow-emerald-950/40'
                        : 'bg-slate-900/60 text-slate-300 border-slate-700 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    <div>
                      <span className={`text-xs font-bold block ${selectedPhase === index ? 'text-white' : 'text-lime-400'}`}>
                        {p.phase} · {p.timing}
                      </span>
                      <span className="text-sm font-semibold">{p.title}</span>
                    </div>
                    <ChevronRight className={`w-5 h-5 shrink-0 ${selectedPhase === index ? 'translate-x-1' : ''} transition-transform`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Phase Detail Showcase */}
            <div className="lg:col-span-7 bg-slate-950 rounded-2xl p-6 sm:p-8 border border-slate-700/80 relative">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-lime-400">
                  {phases[selectedPhase]?.phase} · {lang === 'ES' ? 'HORIZONTE' : 'HORIZON'} : {phases[selectedPhase]?.timing}
                </span>
                <span className="text-xs text-slate-400">{lang === 'ES' ? 'Cinética de fraguado' : 'Cinétique de prise'}</span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3">
                {phases[selectedPhase]?.title}
              </h4>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {phases[selectedPhase]?.description}
              </p>

              <div className="bg-slate-900 rounded-xl p-4 border border-slate-800 mb-6">
                <div className="text-xs font-bold text-lime-400 uppercase tracking-wider mb-1">
                  {lang === 'ES' ? 'Detalle técnico y comportamiento del suelo:' : 'Détail technique & comportement du sol :'}
                </div>
                <div className="text-xs text-slate-300">
                  {phases[selectedPhase]?.techDetail}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>{lang === 'ES' ? 'Sin lavado ni arrastre por lluvias torrenciales' : 'Aucun délavage par les pluies torrentielles'}</span>
                </div>
                <button
                  onClick={() => onOpenQuoteModal(lang === 'ES' ? `Consulta I+D - ${phases[selectedPhase]?.phase}` : `Question R&D - ${phases[selectedPhase]?.phase}`)}
                  className="text-lime-400 hover:text-lime-300 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>{lang === 'ES' ? 'Solicitar el estudio técnico completo' : 'Demander l’étude complète'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Future R&D Pipeline & European Expansion */}
        <div className="mt-14 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="bg-slate-800/70 rounded-2xl p-6 sm:p-8 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-lime-400 flex items-center justify-center mb-4">
                <Microscope className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'ES' ? 'El futuro de la gama I+D ESPORTEC' : 'Le futur de la gamme R&D ESPORTEC'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {lang === 'ES'
                  ? 'Nuestro departamento de I+D desarrolla continuamente nuevos ligantes y materiales ecológicos de vanguardia para responder a las exigencias más estrictas de la ingeniería civil y edificación:'
                  : 'Notre département R&D développe continuellement de nouveaux liants et matériaux écologiques innovants pour répondre aux exigences les plus sévères de l’industrie et des travaux publics :'}
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                {rdPrograms.map((prog, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                    <span>{prog}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-slate-400">
              {lang === 'ES' ? 'Desarrollos patentados en curso de homologación en laboratorio' : 'Développements brevetés en cours de validation laboratoire'}
            </div>
          </div>

          <div className="bg-slate-800/70 rounded-2xl p-6 sm:p-8 border border-slate-700/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Building className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {lang === 'ES' ? 'Dimensión europea y Socios históricos' : 'Dimension européenne & Partenaires historiques'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {lang === 'ES'
                  ? 'Desde su fundación en 1997, ESPORTEC ha contado con respaldos científicos y técnicos de referencia (BRGM, Eco-emballages). Nuestra alianza estratégica con un gran grupo industrial español consolida nuestra dimensión europea, multiplicando nuestras capacidades productivas y logísticas.'
                  : 'Depuis sa création en 1997, ESPORTEC a bénéficié de soutiens scientifiques de premier plan (BRGM, Eco-emballages). Notre association stratégique avec un groupe espagnol majeur a ouvert une envergure européenne, démultipliant nos capacités industrielles et logistiques.'}
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                  <div className="text-xs font-bold text-white">BRGM & Eco-Emballages</div>
                  <div className="text-[11px] text-slate-400">
                    {lang === 'ES' ? 'Validación y respaldo científico' : 'Validation & soutien scientifique'}
                  </div>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700">
                  <div className="text-xs font-bold text-white">
                    {lang === 'ES' ? 'Grupo Industrial Europeo' : 'Groupe Industriel Européen'}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {lang === 'ES' ? 'Sinergia de I+D y despliegue logístico' : 'Synergie R&D et déploiement'}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700/60 text-xs text-slate-400">
              {lang === 'ES' 
                ? 'Sede histórica en Tournefeuille (31) y centros de distribución internacional'
                : 'Site de Tournefeuille (31) · Siège historique et commercial France'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
