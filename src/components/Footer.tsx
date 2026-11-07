import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck, Leaf, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Language } from '../data/translations';
import { EsporTecLogo } from './EsporTecLogo';

interface FooterProps {
  onOpenQuoteModal: (subject?: string) => void;
  onNavigate: (sectionId: string) => void;
  lang?: Language;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenQuoteModal, 
  onNavigate,
  lang = 'FR'
}) => {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Brand Info & Address */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block py-1">
              <EsporTecLogo 
                className="h-14 sm:h-16 w-auto" 
                withBaseline={true}
                lightMode={false}
              />
            </div>

            <p className="text-xs font-semibold text-lime-400 italic">
              {lang === 'ES' 
                ? '«La calidad medioambiental vista desde el suelo»' 
                : '« La qualité environnementale vue du sol »'}
            </p>

            <p className="text-xs text-slate-400 leading-relaxed">
              {lang === 'ES'
                ? "Fabricante de pavimentos exteriores ecológicos de alta gama desde 1997. Ligante patentado de cemento de vidrio ECO'STABIL®."
                : 'Créatrice de revêtements de sols extérieurs haut de gamme et écologiques depuis 1997. Liant ciment de verre breveté ECOSTABIL®.'}
            </p>

            <div className="flex items-start gap-2.5 text-xs text-slate-300 pt-1">
              <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <div>{COMPANY_INFO.address}</div>
                <div>{COMPANY_INFO.postalCode} {COMPANY_INFO.city} · {lang === 'ES' ? 'Europa' : 'France'}</div>
              </div>
            </div>
          </div>

          {/* Direct Phone & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-emerald-900/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="text-lg font-black text-white hover:text-lime-400 transition-colors block"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  <span>{lang === 'ES' ? 'Lunes a Viernes: 8:00 - 18:30' : COMPANY_INFO.phoneHours}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-9 h-9 rounded-xl bg-slate-900 border border-emerald-900/50 flex items-center justify-center text-emerald-400 shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-xs font-semibold text-slate-300 hover:text-lime-400 transition-colors truncate"
              >
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>

          {/* Quick links & sectors */}
          <div className="lg:col-span-2 space-y-2 text-xs">
            <span className="font-bold text-white uppercase tracking-wider block mb-1">
              {lang === 'ES' ? 'Navegación' : 'Navigation'}
            </span>
            <div className="flex flex-col gap-1.5 text-slate-400">
              <button
                onClick={() => onNavigate('solutions')}
                className="hover:text-lime-400 transition-colors text-left"
              >
                {lang === 'ES' ? 'Soluciones de pavimentos' : 'Nos solutions de sols'}
              </button>
              <button
                onClick={() => onNavigate('comparatif')}
                className="hover:text-lime-400 transition-colors text-left"
              >
                {lang === 'ES' ? 'Tabla comparativa' : 'Tableau comparatif'}
              </button>
              <button
                onClick={() => onNavigate('innovation')}
                className="hover:text-lime-400 transition-colors text-left"
              >
                {lang === 'ES' ? 'Cemento de vidrio e I+D' : 'Ciment de verre & R&D'}
              </button>
              <button
                onClick={() => onNavigate('realisations')}
                className="hover:text-lime-400 transition-colors text-left"
              >
                {lang === 'ES' ? 'Obras de referencia' : 'Réalisations en France'}
              </button>
              <button
                onClick={() => onNavigate('calculateur')}
                className="hover:text-lime-400 transition-colors text-left"
              >
                {lang === 'ES' ? 'Calculadora de m²' : 'Simulateur de m²'}
              </button>
              <button
                onClick={() => onNavigate('prescripteurs')}
                className="hover:text-lime-400 transition-colors text-left"
              >
                {lang === 'ES' ? 'Ayuntamientos y Pliegos' : 'Espace Mairies & CCTP'}
              </button>
              <button
                onClick={() => onNavigate('faq')}
                className="hover:text-lime-400 transition-colors text-left font-semibold text-slate-300"
              >
                {lang === 'ES' ? 'Preguntas Frecuentes (FAQ)' : 'Foire Aux Questions (FAQ)'}
              </button>
            </div>
          </div>

          {/* CTA Box */}
          <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-center">
            <button
              onClick={() => onOpenQuoteModal('Footer CTA')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-lg shadow-emerald-950/50 transition-all flex items-center justify-center gap-2 cursor-pointer group"
            >
              <div className="text-left">
                <div className="text-[11px] font-normal opacity-90">
                  {lang === 'ES' ? 'Solicitar un estudio' : 'Demander une étude'}
                </div>
                <div className="text-base font-extrabold -mt-0.5">
                  {lang === 'ES' ? 'Contactar ahora →' : 'Nous contacter →'}
                </div>
              </div>
            </button>
            <span className="text-[11px] text-slate-400 mt-2 text-right">
              {lang === 'ES' ? 'Suministro en camiones volquete en toda la Península y Europa' : 'Livraisons camions bennes France entière'}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="border-t border-slate-900 bg-black/60 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <span>© {new Date().getFullYear()} ESPORTEC Eco-Industriel</span>
            <span className="mx-2">·</span>
            <span>{lang === 'ES' ? 'Pavimentos exteriores estabilizados ecológicos' : 'Revêtements de sols extérieurs stabilisés'}</span>
            <span className="mx-2">·</span>
            <span className="hover:text-slate-200 cursor-pointer">{lang === 'ES' ? 'Aviso legal' : 'Mentions légales'}</span>
            <span className="mx-2">·</span>
            <span className="hover:text-slate-200 cursor-pointer">{lang === 'ES' ? 'Política de privacidad' : 'Politique de confidentialité'}</span>
          </div>

          {/* Eco Entreprises Badge matching mockup */}
          <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
            <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <Leaf className="w-3.5 h-3.5" />
            </div>
            <span className="text-[11px] font-medium text-slate-300">
              {lang === 'ES' ? 'Miembro de la red europea de' : 'Membre du réseau'}{' '}
              <strong className="text-emerald-400 font-bold">eco-entreprises</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
