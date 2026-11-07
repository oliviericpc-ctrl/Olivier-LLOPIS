import React from 'react';
import { History, Award, CheckCircle2, Globe2, Sparkles, Building2, ShieldCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Language } from '../data/translations';

interface AboutSectionProps {
  onOpenQuoteModal: (subject?: string) => void;
  lang?: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ 
  onOpenQuoteModal,
  lang = 'FR'
}) => {
  const milestones = lang === 'ES' ? [
    {
      year: '1997',
      title: 'Creación de ESPORTEC',
      description: 'Fundación con la ambición pionera de unir alta tecnicidad de pavimentos exteriores y economía circular.'
    },
    {
      year: '2004',
      title: "Patente Ligante Cemento de Vidrio ECO'STABIL®",
      description: 'Obtención de la patente y primeros premios a la innovación con el respaldo institucional del BRGM y Eco-Emballages.'
    },
    {
      year: '2016',
      title: 'Dimensión Europea',
      description: 'Alianza estratégica con un gran grupo industrial español, acelerando la diversificación y la capacidad de suministro en camiones basculantes en toda Europa.'
    },
    {
      year: 'Actualidad',
      title: 'I+D avanzada y Eco-industria',
      description: 'Desarrollo de nuevos ligantes a base de escorias, morteros técnicos, pavimentos continuos de alta resistencia química y prefabricación descarbonizada.'
    }
  ] : [
    {
      year: '1997',
      title: 'Création d’ESPORTEC',
      description: 'Fondation avec l’ambition pionnière d’associer haute technicité des sols extérieurs et écologie circulaire.'
    },
    {
      year: '2004',
      title: 'Brevet Liant Ciment de Verre ECOSTABIL®',
      description: 'Brevetage et premiers prix d’innovation avec le soutien institutionnel du BRGM et d’Eco-Emballages.'
    },
    {
      year: '2016',
      title: 'Dimension Européenne',
      description: 'Alliance stratégique avec un groupe industriel espagnol, accélérant la diversification et la capacité de livraison en bennes sur toute l’Europe.'
    },
    {
      year: 'Aujourd’hui',
      title: 'R&D de pointe & Éco-industrie',
      description: 'Développement de nouveaux liants à base de scories, mortiers spéciaux, chapes lisses à haute résistance chimique et préfabrication durable.'
    }
  ];

  return (
    <section id="a-propos" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-2 h-9 bg-emerald-600 rounded-full inline-block" />
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {lang === 'ES' ? 'Acerca de ESPORTEC ECO-INDUSTRIEL' : 'À propos d’ESPORTEC ECO-INDUSTRIEL'}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {lang === 'ES' 
                ? 'Creadores de pavimentos exteriores de alta gama desde 1997, ESPORTEC es el referente pionero en soluciones estabilizadas ecológicas a base de cemento de vidrio reciclado.'
                : 'Créatrice de revêtements de sols extérieurs haut de gamme depuis 1997, ESPORTEC s’est imposée comme le pionnier français des sols stabilisés écologiques au ciment de verre recyclé.'}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'ES' ? (
                <>
                  Desde nuestros orígenes, nuestra vocación ha sido aunar <strong className="text-slate-900">innovación y ecología</strong>. Desarrollamos un ligante pionero a base de cemento de vidrio: <strong className="text-emerald-700 font-bold">ECO'STABIL®</strong>, patentado y galardonado por los más prestigiosos organismos ambientales europeos.
                </>
              ) : (
                <>
                  Dès le départ, notre volonté a été d’associer <strong className="text-slate-900">innovation et écologie</strong>. Nous avons donc mis au point un liant inédit à base de ciment de verre : <strong className="text-emerald-700 font-bold">L’ECOSTABIL</strong>, breveté et primé par les plus hautes instances environnementales.
                </>
              )}
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              {lang === 'ES'
                ? 'A lo largo de nuestra trayectoria, hemos contado con respaldos institucionales y científicos de primer nivel (BRGM, Eco-emballages) hasta nuestra integración con un grupo industrial español de referencia, aportando una sólida dimensión europea. Hoy, esta sinergia nos permite avanzar en nuevas gamas y responder a las exigencias de las mayores obras en España, Francia y toda Europa.'
                : 'Tout au long de notre histoire, nous avons bénéficié de soutiens majeurs (BRGM, Eco-emballages) jusqu’à notre association avec un groupe espagnol de premier plan, conférant une dimension européenne à notre entreprise. Aujourd’hui, cette synergie nous permet de franchir de nouvelles étapes dans la diversification de nos gammes et de répondre aux chantiers les plus exigeants de France et d’Europe.'}
            </p>

            {/* Commitments list */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block">
                    {lang === 'ES' ? 'Alta Calidad Ambiental (HQE / Verde)' : 'Haute Qualité Environnementale (HQE)'}
                  </strong>
                  <span className="text-slate-500">
                    {lang === 'ES' ? 'Valorización de vidrios de deconstrucción y parabrisas.' : 'Valorisation des verres de déconstruction et pare-brise.'}
                  </span>
                </div>
              </div>

              <div className="p-3.5 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block">
                    {lang === 'ES' ? 'Suministro en Península y Europa' : 'Livraisons toute France'}
                  </strong>
                  <span className="text-slate-500">
                    {lang === 'ES' ? 'Camiones volquete, tráileres basculantes o cisternas directas a obra.' : 'Camions bennes, semi-remorques ou citernes direct chantier.'}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Reunión y presentación de empresa' : 'Rencontre & présentation société')}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md shadow-emerald-700/20 rounded-xl transition-all cursor-pointer"
              >
                <span>{lang === 'ES' ? 'Contactar con nuestra dirección técnica' : 'Échanger avec notre direction technique'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Timeline & History card */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                  {lang === 'ES' ? 'Nuestra Trayectoria' : 'Notre Trajectoire'}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                {lang === 'ES' ? '1997 → Actualidad' : '1997 → Aujourd’hui'}
              </span>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-y-0 before:left-3.5 before:w-0.5 before:bg-slate-200">
              {milestones.map((m, idx) => (
                <div key={idx} className="relative flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-mono text-[10px] font-bold shrink-0 shadow-xs ring-4 ring-white">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-black text-emerald-700 font-mono">{m.year}</span>
                      <span className="text-sm font-bold text-slate-900">{m.title}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {m.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                {lang === 'ES' ? 'Sello Eco-Empresa' : 'Label Eco-Entreprises'}
              </span>
              <span>{lang === 'ES' ? 'Sede central y plantas asociadas' : 'Tournefeuille (31)'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
