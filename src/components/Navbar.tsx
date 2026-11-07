import React, { useState } from 'react';
import { Phone, ChevronRight, Menu, X, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { EsporTecLogo } from './EsporTecLogo';
import { Language, TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  onOpenQuoteModal: (initialSubject?: string) => void;
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  currentLang: Language;
  onSelectLang: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenQuoteModal, 
  activeSection, 
  onNavigate,
  currentLang,
  onSelectLang
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang];

  const navLinks = [
    { id: 'accueil', label: t.navbar.links.accueil },
    { id: 'solutions', label: t.navbar.links.solutions },
    { id: 'aspect-visuel', label: currentLang === 'ES' ? 'Acabado Real' : 'Rendu Réel' },
    { id: 'innovation', label: t.navbar.links.innovation },
    { id: 'comparatif', label: t.navbar.links.comparatif },
    { id: 'realisations', label: t.navbar.links.realisations },
    { id: 'prescripteurs', label: t.navbar.links.prescripteurs },
    { id: 'faq', label: t.navbar.links.faq },
    { id: 'contact', label: t.navbar.links.contact }
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      {/* Top micro-bar for phone & language */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 md:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-slate-200 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              {t.navbar.badge1}
            </span>
            <span className="hidden sm:inline text-slate-500">|</span>
            <span className="hidden sm:inline text-slate-300 font-normal">
              {t.navbar.badge2}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 font-semibold text-lime-400 hover:text-lime-300 transition-colors"
            >
              <Phone className="w-4 h-4 text-lime-400" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
              <span className="hidden md:inline text-slate-400 font-normal">({COMPANY_INFO.phoneHours})</span>
            </a>

            {/* Language Switch: FR / ES only (EN removed as requested) */}
            <div className="flex items-center gap-1.5 pl-3 border-l border-slate-700 text-xs font-bold text-slate-300">
              <Globe className="w-3.5 h-3.5 text-lime-400 mr-0.5" />
              <button
                onClick={() => onSelectLang('FR')}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  currentLang === 'FR' 
                    ? 'bg-emerald-600 text-white font-black shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Version française"
              >
                FR
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => onSelectLang('ES')}
                className={`px-2 py-0.5 rounded transition-all cursor-pointer ${
                  currentLang === 'ES' 
                    ? 'bg-emerald-600 text-white font-black shadow-xs' 
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Versión española"
              >
                ES
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24 gap-6">
          {/* Zone 1: Official Vector/Raster Logo */}
          <button
            onClick={() => handleLinkClick('accueil')}
            className="flex items-center gap-3 text-left group focus:outline-hidden shrink-0 cursor-pointer py-1"
            title="ESPORTEC Eco-Industriel"
          >
            <EsporTecLogo 
              className="h-10 sm:h-12 md:h-13 w-auto transition-transform group-hover:scale-102" 
              withBaseline={true}
              lightMode={true}
            />
          </button>

          {/* Zone 2: Navigation Links (Single-line whitespace-nowrap, enlarged readable fonts) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-base font-semibold text-slate-700">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-2.5 whitespace-nowrap transition-colors duration-150 hover:text-emerald-700 ${
                    isActive ? 'text-emerald-700 font-bold' : 'text-slate-700'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-lime-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA Button (Green) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenQuoteModal(currentLang === 'ES' ? 'Solicitud de presupuesto general' : 'Demande générale')}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-sm sm:text-base font-bold text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 rounded-xl shadow-md shadow-emerald-700/20 transition-all transform active:scale-95 whitespace-nowrap shrink-0 group cursor-pointer"
            >
              <span>{t.navbar.studyBtn}</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 hover:text-slate-900 rounded-xl hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7 text-emerald-700" /> : <Menu className="w-7 h-7 text-slate-800" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'bg-emerald-50 text-emerald-700 font-bold border-l-4 border-emerald-600'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-50 text-emerald-800 text-base font-semibold hover:bg-emerald-100 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal('Demande mobile');
                }}
                className="w-full py-3.5 px-4 rounded-xl text-center text-base font-bold text-white bg-gradient-to-r from-emerald-600 to-lime-600 shadow-md hover:from-emerald-700 hover:to-lime-700 transition-all cursor-pointer"
              >
                {t.navbar.studyBtn}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

