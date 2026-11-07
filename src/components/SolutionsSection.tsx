import React, { useState } from 'react';
import { Building2, Trees, Trophy, ArrowRight, CheckCircle2, ChevronRight, Layers, Droplets, Gauge } from 'lucide-react';
import { getLocalizedSolutions } from '../data/spanishContent';
import { SolutionItem } from '../types';
import { Language } from '../data/translations';

interface SolutionsSectionProps {
  onSelectSolution: (solution: SolutionItem) => void;
  onOpenQuoteModal: (subject?: string) => void;
  lang?: Language;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onSelectSolution,
  onOpenQuoteModal,
  lang = 'FR',
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const solutions = getLocalizedSolutions(lang);

  const filteredSolutions = activeTab === 'all'
    ? solutions
    : solutions.filter((s) => s.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2':
        return <Building2 className="w-6 h-6 text-emerald-700" />;
      case 'Trees':
        return <Trees className="w-6 h-6 text-emerald-600" />;
      case 'Trophy':
        return <Trophy className="w-6 h-6 text-lime-600" />;
      default:
        return <Building2 className="w-6 h-6 text-emerald-700" />;
    }
  };

  const getCardImage = (id: string) => {
    switch (id) {
      case 'enverr-paq':
        return {
          image: '/assets/aistudio/1BB34A5D-AB46-4FF3-A8DE-FEE02D81BC53_0481373c.jpeg',
          alt: "Chantier voirie légère et accès pompiers ENVERR'PAQ® ESPORTEC au finisseur",
          bg: 'from-emerald-50 via-stone-50 to-emerald-100/40',
          accent: 'border-emerald-300',
          tag: "ENVERR'PAQ® · Rc 34 MPa",
          tagColor: 'bg-emerald-100 text-emerald-950 font-bold border border-emerald-300'
        };
      case 'decoverr':
        return {
          image: '/assets/aistudio/5CB23655-3E42-44FE-98E1-5067A49E583C_1d922e74.jpeg',
          alt: "Chantier cheminement urbain Banque de France D'ECOVERR® ESPORTEC",
          bg: 'from-teal-50 via-slate-50 to-emerald-100/40',
          accent: 'border-teal-300',
          tag: "D'ECOVERR® · Rc 38 MPa",
          tagColor: 'bg-teal-100 text-teal-950 font-bold border border-teal-300'
        };
      case 'stabipaq':
      case 'stabilises-paysagers':
        return {
          image: '/assets/aistudio/4DCF8CE6-1C0E-4B5D-846F-76C4D53688FF_636cb695.jpeg',
          alt: 'Chantier stabilisé parcs et allée arborée STABIPAQ® ESPORTEC',
          bg: 'from-emerald-100 via-green-50 to-stone-100',
          accent: 'border-emerald-300',
          tag: 'STABIPAQ® · Parcs & Patrimoine',
          tagColor: 'bg-emerald-100 text-emerald-900 font-bold border border-emerald-300'
        };
      case 'stabilises-sportifs':
      case 'stabil-sport':
        return {
          image: '/assets/chantier_sportif_clean.jpg',
          alt: 'Chantier stabilisé sportif ESPORTEC - Terrain multisports STABIL’SPORT',
          bg: 'from-emerald-100/60 via-lime-50 to-green-100',
          accent: 'border-lime-300',
          tag: 'STABIL’SPORT® Breveté',
          tagColor: 'bg-lime-100 text-emerald-950 font-bold border border-lime-300'
        };
      default:
        return {
          image: '/assets/aistudio/2B97740B-86B6-4AF5-9FFA-A34CCF2CF54F_88911dbe.jpeg',
          alt: 'Chantier application stabilisé ESPORTEC',
          bg: 'from-slate-100 to-stone-100',
          accent: 'border-slate-200',
          tag: 'Gamme ESPORTEC',
          tagColor: 'bg-slate-100 text-slate-800'
        };
    }
  };

  return (
    <section id="solutions" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with green accent stripe */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <span className="w-2 h-9 bg-emerald-600 rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'ES' ? 'Nuestras soluciones' : 'Nos solutions'}
              </h2>
            </div>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
              {lang === 'ES'
                ? 'Pavimentos estabilizados adaptados a todos sus proyectos de urbanización exterior, aunando rendimiento técnico, sostenibilidad y estética mineral.'
                : 'Des revêtements stabilisés adaptés à tous vos projets d’aménagement extérieur, alliant performance technique, respect de l’environnement et esthétique naturelle.'}
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-xs self-start md:self-auto shrink-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'all'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? 'Todas' : 'Tous'}
            </button>
            <button
              onClick={() => setActiveTab('urbain')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'urbain'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? 'Urbanos' : 'Urbains'}
            </button>
            <button
              onClick={() => setActiveTab('paysager')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'paysager'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? 'Paisajismo' : 'Paysagers'}
            </button>
            <button
              onClick={() => setActiveTab('sportif')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'sportif'
                  ? 'bg-emerald-700 text-white shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ES' ? 'Deportes' : 'Sportifs'}
            </button>
          </div>
        </div>

        {/* 3 Solution Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => {
            const visual = getCardImage(solution.id);
            return (
              <div
                key={solution.id}
                className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
              >
                {/* Visual Top Preview with Real Chantier Photo */}
                <div className="relative h-56 w-full overflow-hidden border-b border-slate-100 bg-slate-900">
                  <img
                    src={visual.image}
                    alt={visual.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95 saturate-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-black/30 pointer-events-none" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between">
                    <span className={`text-xs font-bold px-3 py-1 rounded-md tracking-wide shadow-xs ${visual.tagColor}`}>
                      {visual.tag}
                    </span>
                    <span className="text-xs font-bold text-white bg-slate-900/80 backdrop-blur-xs px-3 py-1 rounded-md border border-slate-700/80 shadow-xs">
                      Ép. {solution.thickness}
                    </span>
                  </div>

                  {/* Overlapping circular icon badge matching mockup */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 border border-slate-200">
                        {getIcon(solution.icon)}
                      </div>
                      <div className="text-white drop-shadow-sm">
                        <span className="text-xs font-bold uppercase tracking-wider text-lime-400 block">
                          Chantier Réalisé
                        </span>
                        <span className="text-sm font-bold block text-white/95">
                          {solution.title}
                        </span>
                      </div>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/95 text-slate-800 flex items-center justify-center shadow-md group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-sm font-bold text-emerald-700 mt-1">
                      {solution.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-slate-600 mt-3 line-clamp-3 leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Applications checklist */}
                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider block mb-2">
                        Applications idéales :
                      </span>
                      {solution.applications.slice(0, 3).map((app, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action footer */}
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => onSelectSolution(solution)}
                      className="text-sm font-bold text-slate-800 hover:text-emerald-700 flex items-center gap-1.5 transition-colors group/btn cursor-pointer"
                    >
                      <span>{lang === 'ES' ? 'Ficha técnica y pliego' : 'Fiche technique & CCTP'}</span>
                      <ChevronRight className="w-4 h-4 text-emerald-600 group-hover/btn:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenQuoteModal(`${lang === 'ES' ? 'Solicitud para' : 'Demande pour'} ${solution.title}`)}
                      className="w-10 h-10 rounded-xl bg-emerald-50 hover:bg-emerald-600 text-emerald-800 hover:text-white flex items-center justify-center transition-all shadow-xs cursor-pointer border border-emerald-200"
                      title={lang === 'ES' ? 'Solicitar presupuesto' : 'Demander une étude'}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Prescription notice strip */}
        <div className="mt-12 bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-800 text-lime-400 flex items-center justify-center shrink-0 border border-emerald-700">
              <Layers className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">
                {lang === 'ES'
                  ? '¿Es arquitecto, proyectista o técnico municipal?'
                  : 'Vous êtes architecte, bureau d’études ou collectivité ?'}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-200 mt-1">
                {lang === 'ES'
                  ? 'Facilitamos pliegos de bases completos (CCTP), curvas de permeabilidad y asistencia de puesta en obra para licitaciones.'
                  : 'Nous fournissons les CCTP complets, essais de perméabilité in situ et préconisations de mise en œuvre pour vos dossiers d’appels d’offres.'}
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Solicitud de pliegos técnicos y fichas prescriptores' : 'Demande CCTP & Fiches Prescripteurs')}
            className="px-6 py-3.5 text-xs sm:text-sm font-bold text-slate-900 bg-lime-400 hover:bg-lime-300 rounded-xl transition-all shadow-md whitespace-nowrap cursor-pointer shrink-0"
          >
            {lang === 'ES' ? 'Descargar pliegos técnicos CCTP' : 'Télécharger les descriptifs CCTP'}
          </button>
        </div>
      </div>
    </section>
  );
};
