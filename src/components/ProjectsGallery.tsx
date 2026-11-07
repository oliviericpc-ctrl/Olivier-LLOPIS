import React, { useState } from 'react';
import { MapPin, ChevronRight, Filter, Eye, Calendar, Maximize2, ShieldCheck, ArrowRight, Truck, CheckCircle2 } from 'lucide-react';
import { getLocalizedRealisations } from '../data/spanishContent';
import { RealisationProject } from '../types';
import { Language } from '../data/translations';

interface ProjectsGalleryProps {
  onSelectProject: (project: RealisationProject) => void;
  onOpenQuoteModal: (subject?: string) => void;
  lang?: Language;
}

export const ProjectsGallery: React.FC<ProjectsGalleryProps> = ({
  onSelectProject,
  onOpenQuoteModal,
  lang = 'FR',
}) => {
  const [filter, setFilter] = useState<string>('all');
  const realisations = getLocalizedRealisations(lang);

  const filteredProjects = filter === 'all'
    ? realisations
    : realisations.filter((p) => {
        if (filter === 'urbain') return p.category === 'urbain';
        if (filter === 'paysager') return p.category === 'paysager';
        if (filter === 'sportif') return ['sportif', 'multisports', 'petanque', 'football'].includes(p.category);
        return true;
      });

  const getProjectVisual = (project: RealisationProject) => {
    switch (project.category) {
      case 'urbain':
        return {
          image: '/assets/chantier_urbain_clean.jpg',
          gradient: 'from-stone-200 via-amber-50 to-emerald-100/50',
          accent: 'text-emerald-950 bg-emerald-100 font-bold border border-emerald-300',
          type: 'Urbain'
        };
      case 'multisports':
        return {
          image: '/assets/chantier_sportif_clean.jpg',
          gradient: 'from-emerald-200 via-lime-100 to-stone-200',
          accent: 'text-emerald-950 bg-lime-100 font-bold border border-lime-300',
          type: 'Multisports'
        };
      case 'paysager':
        return {
          image: '/assets/chantier_paysager_clean.jpg',
          gradient: 'from-emerald-200 via-green-100 to-stone-200',
          accent: 'text-emerald-950 bg-emerald-100 font-bold border border-emerald-300',
          type: 'Paysager'
        };
      case 'petanque':
        return {
          image: '/assets/chantier_rouleau_compactage.jpg',
          gradient: 'from-stone-300 via-stone-200 to-lime-100',
          accent: 'text-stone-900 bg-stone-200 font-bold border border-stone-300',
          type: 'Pétanque'
        };
      case 'football':
        return {
          image: '/assets/chantier_sportif_clean.jpg',
          gradient: 'from-green-200 via-emerald-100 to-amber-100',
          accent: 'text-emerald-950 bg-emerald-100 font-bold border border-emerald-300',
          type: 'Football'
        };
      default:
        return {
          image: '/assets/chantier_rouleau_compactage.jpg',
          gradient: 'from-slate-200 to-stone-200',
          accent: 'text-slate-800 bg-slate-100 font-bold',
          type: 'Projet'
        };
    }
  };

  return (
    <section id="realisations" className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-9 bg-emerald-600 rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'ES' ? 'Nuestras obras y realizaciones' : 'Nos réalisations'}
              </h2>
            </div>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              {lang === 'ES'
                ? 'Proyectos de referencia ejecutados para ayuntamientos, clubes deportivos, promotores y contratas en España y Francia.'
                : 'Des projets variés pour des collectivités, établissements sportifs, aménageurs et entreprises sur toute la France.'}
            </p>
          </div>

          {/* Interactive filter pills */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto shrink-0">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'all'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? `Todas (${realisations.length})` : `Toutes (${realisations.length})`}
            </button>
            <button
              onClick={() => setFilter('urbain')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'urbain'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? 'Urbano' : 'Urbain'}
            </button>
            <button
              onClick={() => setFilter('paysager')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'paysager'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? 'Paisajismo' : 'Paysager'}
            </button>
            <button
              onClick={() => setFilter('sportif')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                filter === 'sportif'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? 'Deportes' : 'Sport'}
            </button>
          </div>
        </div>

        {/* 3-Step Real Jobsite Sequence: Silo Mobile Silo B2M -> Préparation Finisseur -> Rendu Fini */}
        <div className="mb-16 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-lime-400 uppercase tracking-wider bg-slate-800/80 px-3 py-1 rounded-md mb-2 border border-slate-700">
                <span>
                  {lang === 'ES'
                    ? 'CENTROS HISTÓRICOS · ACCESOS DIFÍCILES · OBRAS AISLADAS · SIN PLANTA BPE'
                    : 'CHANTIERS CENTRE-VILLE · ACCÈS DIFFICILES · CHANTIER ISOLÉ · SANS CENTRALE BPE'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {lang === 'ES'
                  ? 'Obras en centros históricos, accesos difíciles, obras aisladas, sin planta de hormigón BPE...'
                  : 'Chantiers centre-ville, accès difficiles, chantier isolé, pas de centrale BPE...'}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
                {lang === 'ES'
                  ? 'Gracias al silo móvil automatizado Silo B2M instalado in situ, ESPORTEC fabrica el pavimento directamente en el corazón de su obra, al pie de las fachadas o en entornos rurales aislados, sin depender de plantas exteriores ni bloquear el tráfico.'
                  : 'Grâce au silo mobile automatisé Silo B2M installé in situ, ESPORTEC fabrique le revêtement directement sur votre chantier, au pied des façades ou en site isolé, sans dépendre d’une centrale à béton extérieure ni bloquer les rues étroites.'}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 self-start md:self-auto shrink-0">
              <a
                href="https://www.silob2m.com/silo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-colors shadow-md border border-slate-200"
              >
                <span>{lang === 'ES' ? 'Tecnología Silo B2M ↗' : 'Technologie Silo B2M ↗'}</span>
              </a>

              <a
                href="https://drive.google.com/drive/folders/1CdrIIzXl2JFPpva1ObBfxrSy1xe0RqiZ?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-emerald-950 bg-lime-400 hover:bg-lime-300 transition-colors shadow-md"
              >
                <span>{lang === 'ES' ? 'Fototeca Google Drive' : 'Photothèque Google Drive'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1: Silo mobile B2M in situ with ESPORTEC logo badge */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src="/assets/aistudio/image_15651a49.png"
                  alt="Silo mobile B2M en centre-ville historique avec logo ESPORTEC"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                {/* Step badge */}
                <div className="absolute top-3 left-3 bg-slate-900/90 text-lime-400 text-xs font-black px-2.5 py-1 rounded-md border border-slate-700 z-10">
                  {lang === 'ES' ? 'FASE 1' : 'ÉTAPE 1'}
                </div>

                {/* ESPORTEC Logo directly on Silo Visual */}
                <div className="absolute top-3 right-3 z-10 bg-slate-900/95 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-lime-400/40 shadow-lg flex items-center gap-2">
                  <img
                    src="/assets/esportec_logo_official_white.png"
                    alt="Logo ESPORTEC sur Silo B2M"
                    className="h-5 w-auto object-contain"
                  />
                  <span className="text-[10px] font-black tracking-wider text-lime-300 uppercase">
                    In Situ
                  </span>
                </div>

                {/* Overlay caption on bottom of image */}
                <div className="absolute bottom-2.5 left-3 right-3 z-10 flex items-center justify-between text-white">
                  <span className="text-xs font-bold text-white drop-shadow-sm truncate">
                    {lang === 'ES' ? 'Silo B2M en centro histórico' : 'Silos B2M en centre ancien'}
                  </span>
                  <a
                    href="https://www.silob2m.com/silo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-lime-400 hover:text-white underline decoration-lime-400 shrink-0 ml-2"
                  >
                    silob2m.com ↗
                  </a>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5 flex items-center justify-between">
                    <span>{lang === 'ES' ? '1. Silo móvil Silo B2M in situ' : '1. Silo mobile Silo B2M in situ'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {lang === 'ES'
                      ? 'Emplazamiento autónomo del silo móvil Silo B2M en plazas peatonales o accesos estrechos. Dosificación automatizada de cemento de vidrio ECO\'STABIL® con áridos locales sin depender de plantas BPE lejanas.'
                      : 'Implantation autonome du silo mobile Silo B2M sur place (places piétonnes, ruelles étroites, chantiers isolés). Dosage automatisé du ciment de verre ECO\'STABIL® et malaxage continu sans rotations de camions toupies.'}
                  </p>
                  <div className="mt-2.5 p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-[11px] text-emerald-200">
                    <strong className="text-lime-300 block mb-0.5">
                      {lang === 'ES'
                        ? 'Acompañamiento con laboratorio externo independiente:'
                        : 'Accompagnement laboratoire externe indépendant :'}
                    </strong>
                    {lang === 'ES'
                      ? 'Control de formulación in situ, análisis de humedad óptima (Proctor) y ensayo de carga con placa EV2 en cada obra equipada con silo móvil.'
                      : 'Contrôle des formulations in situ, analyse de la teneur en eau optimale (Proctor) et validation de portance EV2 sur chaque chantier équipé de silo mobile.'}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/60 text-xs text-lime-400 font-semibold flex items-center justify-between">
                  <span>{lang === 'ES' ? 'Cero residuos · Cero bolsas' : 'Zéro déchet de sacs'}</span>
                  <span>{lang === 'ES' ? 'Control de calidad labo' : 'Labo externe certifié'}</span>
                </div>
              </div>
            </div>

            {/* Step 2: Finisseur paver & Rouleau compactage */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src="/assets/aistudio/1BB34A5D-AB46-4FF3-A8DE-FEE02D81BC53_0481373c.jpeg"
                  alt="Application au finisseur d'enrobé et compactage au rouleau"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-3 left-3 bg-slate-900/90 text-lime-400 text-xs font-black px-2.5 py-1 rounded-md border border-slate-700 z-10">
                  {lang === 'ES' ? 'FASE 2' : 'ÉTAPE 2'}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 z-10 text-white">
                  <span className="text-xs font-bold text-white drop-shadow-sm block truncate">
                    {lang === 'ES' ? 'Extendido con extendedora' : 'Pose mécanisée au finisseur'}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">
                    {lang === 'ES' ? '2. Extendido al finisseur y compactación' : '2. Étalage au finisseur & Compactage au rouleau'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {lang === 'ES'
                      ? 'Extendido regular con extendedora o motoniveladora sobre base drenante GNT. Regulación de espesor de 5 a 10 cm y compactación con rodillo vibrante tándem para alcanzar densidad 2,15 t/m³.'
                      : 'Mise en œuvre à la niveleuse ou au finisseur sur fond de forme drainant GNT 0/20. Nivellement laser, épaisseur 5 à 10 cm et compactage au rouleau vibrant (masse volumique 2,15 à 2,3 t/m³).'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/60 text-xs text-emerald-400 font-semibold flex items-center justify-between">
                  <span>{lang === 'ES' ? 'Densidad 2,15 t/m³' : 'Masse volumique 2,15 t/m³'}</span>
                  <span>{lang === 'ES' ? 'Portanza EV2 garantizada' : 'Portance certifiée EV2'}</span>
                </div>
              </div>
            </div>

            {/* Step 3: Rendu Fini Banque de France */}
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 overflow-hidden flex flex-col group">
              <div className="relative h-56 overflow-hidden bg-slate-950">
                <img
                  src="/assets/aistudio/5CB23655-3E42-44FE-98E1-5067A49E583C_1d922e74.jpeg"
                  alt="Rendu fini Banque de France sol stabilisé perméable"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none" />

                <div className="absolute top-3 left-3 bg-slate-900/90 text-emerald-400 text-xs font-black px-2.5 py-1 rounded-md border border-slate-700 z-10">
                  {lang === 'ES' ? 'FASE 3' : 'ÉTAPE 3'}
                </div>

                <div className="absolute bottom-2.5 left-3 right-3 z-10 text-white">
                  <span className="text-xs font-bold text-white drop-shadow-sm block truncate">
                    {lang === 'ES' ? 'Paseo Banque de France finalizado' : 'Promenade Banque de France terminée'}
                  </span>
                </div>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-white mb-1.5">
                    {lang === 'ES' ? '3. Acabado mineral natural y apertura al uso' : '3. Rendu fini minéral & circulation ouverte'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                    {lang === 'ES'
                      ? 'Superficie mineral ocre dorado, rematada con adoquín granítico y 100% transitable por peatones, personas con movilidad reducida (PMR), bicicletas y vehículos ligeros.'
                      : 'Surface minérale ocre doré chaleureuse bordée de pavés granitiques. Praticable en continu pour piétons, personnes à mobilité réduite (norme PMR), poussettes, vélos et véhicules de service.'}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-700/60 text-xs text-lime-400 font-semibold flex items-center justify-between">
                  <span>{lang === 'ES' ? '100% Drenante' : '100% Drenant'}</span>
                  <span>{lang === 'ES' ? 'Sin juntas de dilatación' : 'Zéro joint de dilatation'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Realisations Grid with Integrated Delivery & Logistics Card in the Empty Space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const visual = getProjectVisual(project);
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer hover:-translate-y-1 hover:border-emerald-300"
              >
                {/* Visual Thumbnail with real chantier photo */}
                <div className="h-44 relative p-3 flex flex-col justify-between overflow-hidden bg-slate-900">
                  <img
                    src={visual.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 filter brightness-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/30 pointer-events-none" />

                  {/* Badges on thumb */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded shadow-xs ${visual.accent}`}>
                      {visual.type}
                    </span>
                    <span className="text-[10px] font-bold text-white bg-slate-900/80 backdrop-blur-xs px-2 py-0.5 rounded shadow-2xs border border-slate-700/60">
                      {project.surface}
                    </span>
                  </div>

                  {/* Bottom hover reveal */}
                  <div className="relative z-10 flex items-center justify-end">
                    <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                      {project.title.split(' - ')[0]}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-semibold mt-1">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{project.location} – {project.region}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="font-mono text-slate-400">{lang === 'ES' ? 'Año' : 'Année'} {project.year}</span>
                    <span className="text-emerald-700 font-bold group-hover:translate-x-0.5 transition-transform">
                      {lang === 'ES' ? 'Ver detalles →' : 'Détails →'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Integrated National Delivery & Logistics Card: Fills the remaining empty columns */}
          <div
            className={`bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 rounded-2xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-xl border border-emerald-900/60 transition-all ${
              filter === 'urbain' || filter === 'paysager'
                ? 'col-span-1 sm:col-span-1 lg:col-span-2'
                : filter === 'sportif'
                ? 'col-span-1 sm:col-span-2 lg:col-span-3'
                : 'col-span-1 sm:col-span-1 lg:col-span-1'
            }`}
          >
            <div>
              {/* Header Badge */}
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-lime-400 mb-3">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-lime-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <Truck className="w-3.5 h-3.5" />
                </div>
                <span>
                  {lang === 'ES'
                    ? 'Suministros y obras en España y Francia'
                    : 'Chantiers & livraisons sur toute la France'}
                </span>
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-base sm:text-lg font-black text-white leading-snug">
                {lang === 'ES'
                  ? 'Logística integral en camiones volquete y tráileres'
                  : 'Logistique rodée en camions bennes et semi-remorques'}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {lang === 'ES'
                  ? 'Suministramos directamente a obra en camiones volquete o aprovisionamos sus plantas de hormigón y mezclas bituminosas tanto en España como en Francia.'
                  : 'Approvisionnement direct sur le lieu de mise en œuvre en camions bennes 8x4 et semi-remorques 30t, ou livraison de vos centrales d’enrobés et de béton.'}
              </p>

              {/* Bullet Points when span is wide */}
              <div className={`mt-4 pt-3 border-t border-slate-800 grid gap-2 text-xs text-emerald-200 ${
                filter === 'sportif' ? 'sm:grid-cols-3' : filter === 'urbain' || filter === 'paysager' ? 'sm:grid-cols-2' : 'grid-cols-1'
              }`}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
                  <span>{lang === 'ES' ? 'Directo a obra o planta BPE' : 'Direct chantier ou centrale'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{lang === 'ES' ? 'Silo móvil B2M in situ disponible' : 'Silo mobile Silo B2M in situ'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-lime-400 shrink-0" />
                  <span>{lang === 'ES' ? 'Cobertura nacional y España' : 'Occitanie, N-Aquitaine, IDF, ARA'}</span>
                </div>
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400 font-medium">
                {lang === 'ES' ? 'Flota certificada' : 'Délais sous 48h à 72h'}
              </span>

              <button
                onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Presupuesto de logística y transporte' : 'Devis livraison logistique')}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md transition-all cursor-pointer"
              >
                <span>{lang === 'ES' ? 'Consultar plazos' : 'Vérifier les délais'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
