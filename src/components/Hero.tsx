import React from 'react';
import { ArrowRight, Leaf, ShieldCheck, Droplets, ThermometerSnowflake, Recycle, Truck, Calculator, Play } from 'lucide-react';
import { Language, TRANSLATIONS } from '../data/translations';

interface HeroProps {
  onDiscoverSolutions: () => void;
  onOpenCalculator: () => void;
  onOpenQuoteModal: (subject?: string) => void;
  onOpenVideoModal?: () => void;
  lang?: Language;
}

export const Hero: React.FC<HeroProps> = ({
  onDiscoverSolutions,
  onOpenCalculator,
  onOpenQuoteModal,
  onOpenVideoModal,
  lang = 'FR',
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      {/* Background imagery with subtle overlay scrim for WCAG AA readability */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/aistudio/4DCF8CE6-1C0E-4B5D-846F-76C4D53688FF_636cb695.jpeg"
          alt="Aménagement stabilisé ESPORTEC en environnement naturel et arboré"
          className="w-full h-full object-cover object-center opacity-30 filter brightness-90 saturate-110"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.15),transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-20 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-8 space-y-7">
            {/* Tagline kicker (enlarged readable text) */}
            <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wider text-lime-400 uppercase bg-slate-900/80 border border-slate-700/80 px-3.5 py-1.5 rounded-full">
              <span>{t.hero.kicker1}</span>
              <span className="text-slate-500">·</span>
              <span>{t.hero.kicker2}</span>
              <span className="text-slate-500">·</span>
              <span>{t.hero.kicker3}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight" style={{ textWrap: 'balance' }}>
              {t.hero.titleStart}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-emerald-400 to-green-400">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle - Increased font size and breathing room */}
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onDiscoverSolutions}
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-base text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-lg shadow-emerald-700/30 transition-all transform active:scale-95 group cursor-pointer"
              >
                <span>{t.hero.btnSolutions}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCalculator}
                className="inline-flex items-center gap-2.5 px-6 py-4 rounded-xl font-bold text-base text-slate-100 bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700 shadow-md backdrop-blur-xs transition-colors cursor-pointer"
              >
                <Calculator className="w-5 h-5 text-lime-400" />
                <span>{t.hero.btnSimulate}</span>
              </button>

              {onOpenVideoModal && (
                <button
                  onClick={onOpenVideoModal}
                  className="inline-flex items-center gap-2.5 px-5 py-4 rounded-xl font-bold text-base text-white bg-slate-900/90 hover:bg-slate-800/90 border border-emerald-500/50 shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-6 h-6 rounded-full bg-lime-400 text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span>{lang === 'ES' ? 'Vídeo proceso (25s)' : 'Vidéo process (25s)'}</span>
                </button>
              )}

              <button
                onClick={() => onOpenQuoteModal('Contact rapide Hero')}
                className="inline-flex items-center gap-2 px-4 py-3.5 text-base font-semibold text-lime-300 hover:text-white transition-colors underline decoration-lime-400/60 underline-offset-4 cursor-pointer"
              >
                {t.hero.btnQuote}
              </button>
            </div>

            {/* Logistics & Delivery banner - Clear legible badges */}
            <div className="pt-3 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-lg border border-emerald-500/30 shrink-0">
                  <Truck className="w-5 h-5" />
                </div>
                <span className="font-medium text-slate-200">
                  {t.hero.truckDelivery}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-lime-400 shrink-0" />
                <span className="text-slate-300 font-medium">
                  {t.hero.factoryDelivery}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shrink-0" />
                <span className="text-slate-300 font-medium">
                  {t.hero.mobileSilo}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Key Trust Signals & Clear Stats */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Eco Leaf Badge - Airy and readable */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-lime-500 to-emerald-600 flex items-center justify-center shrink-0 shadow-lg">
                  <Leaf className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white leading-snug">
                    {t.hero.ecoBadgeTitle}
                  </h2>
                  <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
                    {t.hero.ecoBadgeDesc}
                  </p>
                </div>
              </div>

              {/* 3 Phases teaser - larger text */}
              <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-3 gap-2.5 text-center">
                <div className="bg-slate-900/70 rounded-xl p-2.5 border border-slate-700/60">
                  <span className="block text-lime-400 font-extrabold text-sm">{lang === 'ES' ? 'Fase 1' : 'Phase 1'}</span>
                  <span className="text-xs text-slate-300 font-medium">{lang === 'ES' ? 'Fraguado rápido' : 'Prise rapide'}</span>
                </div>
                <div className="bg-slate-900/70 rounded-xl p-2.5 border border-slate-700/60">
                  <span className="block text-emerald-400 font-extrabold text-sm">{lang === 'ES' ? 'Fase 2' : 'Phase 2'}</span>
                  <span className="text-xs text-slate-300 font-medium">{lang === 'ES' ? 'Cohesión 28d' : 'Cohésion 28j'}</span>
                </div>
                <div className="bg-slate-900/70 rounded-xl p-2.5 border border-slate-700/60">
                  <span className="block text-green-300 font-extrabold text-sm">{lang === 'ES' ? 'Fase 3' : 'Phase 3'}</span>
                  <span className="text-xs text-slate-300 font-medium">{lang === 'ES' ? '+30 años' : '30 ans'}</span>
                </div>
              </div>
            </div>

            {/* Key Stats Cards */}
            <div className="grid grid-cols-2 gap-4 text-slate-200">
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-center">
                <div className="text-3xl font-black text-white tabular-nums">1997</div>
                <div className="text-slate-300 text-xs sm:text-sm mt-1 font-semibold">{t.hero.statExperience}</div>
              </div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 text-center">
                <div className="text-3xl font-black text-emerald-400 tabular-nums">100%</div>
                <div className="text-slate-300 text-xs sm:text-sm mt-1 font-semibold">{t.hero.statPermeable}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Five Pillars Strip - Comfortable readable font size */}
      <div className="relative z-10 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {t.hero.pillars.map((pillar, idx) => {
              const icons = [Leaf, ShieldCheck, Droplets, ThermometerSnowflake, Recycle];
              const IconComp = icons[idx % icons.length];
              return (
                <div key={idx} className="flex items-center gap-3.5 py-1">
                  <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase tracking-wider">{pillar.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 font-medium">{pillar.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

