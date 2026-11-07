import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  Leaf, 
  Truck, 
  Droplets, 
  Wrench, 
  FileText, 
  Phone, 
  Send, 
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { getLocalizedFaqs } from '../data/spanishContent';
import { Language } from '../data/translations';

interface FaqSectionProps {
  onOpenQuoteModal: (subject?: string) => void;
  onNavigateToContact: () => void;
  lang?: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  onOpenQuoteModal,
  onNavigateToContact,
  lang = 'FR'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set(['faq-1', 'faq-3', 'faq-5']));

  const faqItems = getLocalizedFaqs(lang);

  const categories = lang === 'ES' ? [
    { id: 'all', label: 'Todas las preguntas', count: faqItems.length },
    { id: 'ecostabil', label: "Ligante ECO'STABIL®", icon: Leaf },
    { id: 'permeabilite', label: 'Permeabilidad e ICU', icon: Droplets },
    { id: 'livraison', label: 'Suministro y Camiones', icon: Truck },
    { id: 'pose-entretien', label: 'Puesta en obra', icon: Wrench },
    { id: 'marches', label: 'CCTP y Licitaciones', icon: FileText }
  ] : [
    { id: 'all', label: 'Toutes les questions', count: faqItems.length },
    { id: 'ecostabil', label: 'Liant ECOSTABIL®', icon: Leaf },
    { id: 'permeabilite', label: 'Perméabilité & ICU', icon: Droplets },
    { id: 'livraison', label: 'Livraison & Camions', icon: Truck },
    { id: 'pose-entretien', label: 'Mise en œuvre', icon: Wrench },
    { id: 'marches', label: 'CCTP & Marchés', icon: FileText }
  ];

  const filteredFaqs = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      if (!normalizedQuery) return matchesCategory;

      const matchesSearch = 
        item.question.toLowerCase().includes(normalizedQuery) ||
        item.answer.toLowerCase().includes(normalizedQuery) ||
        item.badge.toLowerCase().includes(normalizedQuery) ||
        (item.highlights && item.highlights.some(h => h.toLowerCase().includes(normalizedQuery)));

      return matchesCategory && matchesSearch;
    });
  }, [faqItems, selectedCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleExpandAll = () => {
    setExpandedIds(new Set(faqItems.map((item) => item.id)));
  };

  const handleCollapseAll = () => {
    setExpandedIds(new Set());
  };

  return (
    <section id="faq" className="py-20 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full mb-3 border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'ES' ? 'Preguntas Frecuentes' : 'Foire Aux Questions'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'ES' ? 'Todo lo que necesita saber sobre nuestros pavimentos estabilizados' : 'Tout ce que vous devez savoir sur nos sols stabilisés'}
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed">
            {lang === 'ES' ? (
              <>
                Consulte las respuestas de nuestro departamento técnico sobre el ligante de cemento de vidrio <strong className="text-emerald-800">ECO'STABIL®</strong>, la permeabilidad y el suministro a pie de obra en toda la Península y Europa.
              </>
            ) : (
              <>
                Consultez les réponses de notre bureau d’études sur le liant au ciment de verre <strong className="text-emerald-800">ECOSTABIL®</strong>, la perméabilité des sols et nos modalités de livraison en bennes sur toute la France.
              </>
            )}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={lang === 'ES' 
                ? 'Buscar una pregunta (ej.: camión volquete, lluvia, espesor, patente, drenaje...)' 
                : 'Rechercher une question (ex : camion benne, pluie, épaisseur, brevet, perméabilité...)'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-hidden focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 shadow-2xs transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-lg cursor-pointer"
                aria-label={lang === 'ES' ? 'Borrar búsqueda' : 'Effacer la recherche'}
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-emerald-700 text-white font-bold shadow-xs scale-102'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {Icon && <Icon className="w-3.5 h-3.5 shrink-0" />}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Expand / Collapse Controls */}
            <div className="hidden sm:flex items-center gap-2 text-xs font-medium text-slate-500">
              <button
                onClick={handleExpandAll}
                className="hover:text-emerald-700 transition-colors cursor-pointer"
              >
                {lang === 'ES' ? 'Desplegar todo' : 'Tout ouvrir'}
              </button>
              <span>·</span>
              <button
                onClick={handleCollapseAll}
                className="hover:text-emerald-700 transition-colors cursor-pointer"
              >
                {lang === 'ES' ? 'Plegar todo' : 'Tout fermer'}
              </button>
            </div>
          </div>
        </div>

        {/* Accordion Questions List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 border border-slate-200 text-center space-y-3 shadow-2xs">
              <HelpCircle className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="text-base font-bold text-slate-800">
                {lang === 'ES' ? 'No se encontraron resultados' : 'Aucun résultat trouvé'}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {lang === 'ES' 
                  ? `Ninguna pregunta coincide con su búsqueda « ${searchQuery} ». Nuestros técnicos están a su disposición para responderle directamente.`
                  : `Aucune question ne correspond à votre recherche « ${searchQuery} ». Nos techniciens restent à votre écoute pour vous répondre directement.`}
              </p>
              <div className="pt-2 flex justify-center gap-3">
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer"
                >
                  {lang === 'ES' ? 'Restablecer búsqueda' : 'Réinitialiser la recherche'}
                </button>
                <button
                  onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Consulta técnica soporte' : 'Question technique support')}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 text-white hover:bg-emerald-700 cursor-pointer"
                >
                  {lang === 'ES' ? 'Enviar mi consulta al equipo' : 'Poser ma question au support'}
                </button>
              </div>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isExpanded = expandedIds.has(faq.id);
              return (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                    isExpanded 
                      ? 'border-emerald-300 ring-2 ring-emerald-500/10' 
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {/* Accordion Trigger */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isExpanded}
                    className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer group focus:outline-hidden"
                  >
                    <div className="space-y-1.5 flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold text-emerald-800 bg-emerald-50 border border-emerald-200">
                          {faq.badge}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                        {faq.question}
                      </h3>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isExpanded
                          ? 'bg-emerald-100 text-emerald-800 rotate-180'
                          : 'bg-slate-100 text-slate-500 group-hover:bg-slate-200'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Accordion Body */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-700 text-sm leading-relaxed border-t border-slate-100 animate-in fade-in duration-200">
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {faq.answer}
                      </p>

                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="mt-4 pt-4 border-t border-slate-100 bg-emerald-50/50 -mx-5 sm:-mx-6 -mb-6 px-5 sm:px-6 py-4">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900 block mb-2">
                            {lang === 'ES' ? 'Puntos clave a recordar:' : 'Points clés à retenir :'}
                          </span>
                          <div className="grid sm:grid-cols-3 gap-2">
                            {faq.highlights.map((highlight, hIdx) => (
                              <div
                                key={hIdx}
                                className="flex items-start gap-2 text-xs text-emerald-950 font-medium"
                              >
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                <span>{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Support Help Banner */}
        <div className="max-w-4xl mx-auto mt-12 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-lime-400 uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-lime-400" />
              <span>{lang === 'ES' ? 'Asistencia técnica y Estudios de suelo' : 'Assistance technique & Études de sol'}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {lang === 'ES' ? '¿Su pregunta no aparece en la lista?' : 'Votre question n\'apparaît pas dans la liste ?'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {lang === 'ES'
                ? 'Nuestros ingenieros y especialistas le responden en menos de 24h laborables sobre las particularidades de su obra o áridos locales.'
                : 'Nos ingénieurs et technico-commerciaux vous répondent directement sous 24h ouvrées sur vos spécificités de chantier ou de sol régional.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full md:w-auto">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full sm:w-auto px-5 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-900 bg-white hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Consulta técnica FAQ' : 'Question spécifique support FAQ')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md shadow-emerald-950/40 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'ES' ? 'Enviar mi consulta' : 'Poser ma question'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
