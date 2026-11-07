import React, { useState } from 'react';
import { Landmark, Compass, Ruler, HardHat, FileText, Download, CheckCircle, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { PRESCRIBER_DOCS } from '../data/mockData';
import { PRESCRIBERS_ES } from '../data/spanishContent';
import { PrescriberDoc } from '../types';
import { Language } from '../data/translations';

interface PrescribersHubProps {
  onOpenQuoteModal: (subject?: string) => void;
  onDownloadDoc: (doc: PrescriberDoc) => void;
  lang?: Language;
}

export const PrescribersHub: React.FC<PrescribersHubProps> = ({
  onOpenQuoteModal,
  onDownloadDoc,
  lang = 'FR',
}) => {
  const [activeAudience, setActiveAudience] = useState<'mairie' | 'bureau-etudes' | 'architecte' | 'tp'>('mairie');

  const audiencesFR = [
    {
      id: 'mairie',
      title: 'Mairies & Collectivités',
      icon: Landmark,
      kicker: 'Accompagnement projet & Vision globale',
      pitch: 'Accompagnement de A à Z : intégrez la désimperméabilisation, le Zéro Artificialisation Nette (ZAN), la résilience climatique et sécurisez jusqu’à 70% de subventions (Fonds Vert, Agences de l’Eau).',
      advantages: [
        'Vision globale du territoire : cours d’écoles oasis, mobilités douces, voies vertes, parcs et cimetières',
        'Montage et sécurisation des subventions Agences de l’Eau & Fonds Vert (40% à 70% d’aides)',
        'Accompagnement technique avec laboratoire externe indépendant agréé pour chaque opération',
        'Conformité stricte ZAN, loi Climat & Résilience et zéro entretien phytosanitaire (loi Labbé)',
        'Accessibilité PMR certifiée pour personnes à mobilité réduite, poussettes et vélos'
      ]
    },
    {
      id: 'bureau-etudes',
      title: 'Bureaux d’études VRD',
      icon: Ruler,
      kicker: 'Ingénierie & Dimensionnement',
      pitch: 'Intégrez des données fiables et testées en laboratoire dans vos calculs de dimensionnement de chaussées et d’abattement des eaux pluviales à la parcelle.',
      advantages: [
        'Essais de perméabilité in situ certifiés K > 1,5 × 10⁻⁴ m/s',
        'Portance garantie EV2 ≥ 50 MPa après 28 jours de prise',
        'CCTP type modifiable prêt à intégrer aux Dossiers de Consultation des Entreprises (DCE)',
        'Accompagnement laboratoire externe indépendant pour le contrôle des formulations'
      ]
    },
    {
      id: 'architecte',
      title: 'Architectes & Paysagistes',
      icon: Compass,
      kicker: 'Création & Esthétique',
      pitch: 'Sublimez les espaces extérieurs en préservant l’identité minérale des terroirs. Un aspect terre battue ou sable naturel sans l’inconvénient de la poussière.',
      advantages: [
        'Large palette de teintes régionales (calcaires dorés, ocres, porphyres, gris clair)',
        'Respect du système racinaire des arbres et des massifs végétaux voisins',
        'Confort thermique d’été remarquable (fort albédo réfléchissant la chaleur)',
        'Validation technique des teintes et granulats avec laboratoire externe indépendant'
      ]
    },
    {
      id: 'tp',
      title: 'Entreprises de TP & Poseurs',
      icon: HardHat,
      kicker: 'Mise en œuvre & Logistique',
      pitch: 'Facilitez vos opérations de chantier grâce à une logistique fiable et une mise en œuvre classique sans matériel spécifique coûteux.',
      advantages: [
        'Mise en œuvre au finisseur, à la niveleuse ou à la règle vibrante',
        'Compactage simple au rouleau tandem vibrant léger (600 kg à 2 t)',
        'Livraison cadencée en camions bennes ou semi-remorques sur toute la France',
        'Praticabilité rapide évitant les retards de phasage chantier'
      ]
    }
  ];

  const audiences = lang === 'ES'
    ? PRESCRIBERS_ES.audiences.map((aud, i) => ({ ...aud, icon: audiencesFR[i].icon }))
    : audiencesFR;

  const currentAudience = audiences.find((a) => a.id === activeAudience) || audiences[0];
  const AudienceIcon = currentAudience.icon;

  return (
    <section id="prescripteurs" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3">
            <span className="w-2 h-9 bg-emerald-600 rounded-full inline-block" />
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {lang === 'ES' ? PRESCRIBERS_ES.header.title : 'Espace Prescripteurs & Marchés'}
            </h2>
          </div>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            {lang === 'ES'
              ? PRESCRIBERS_ES.header.desc
              : 'Un accompagnement sur-mesure pour chaque acteur de l’aménagement : mairies, bureaux d’études, architectes paysagistes et applicateurs.'}
          </p>
        </div>

        {/* 4 Audience Tab Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {audiences.map((aud) => {
            const Icon = aud.icon;
            const isSelected = activeAudience === aud.id;
            return (
              <button
                key={aud.id}
                onClick={() => setActiveAudience(aud.id as any)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-white/60 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isSelected ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {isSelected && (
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                      {lang === 'ES' ? 'Activo' : 'Actif'}
                    </span>
                  )}
                </div>
                <div>
                  <span className="text-[11px] font-semibold text-slate-400 block">{aud.kicker}</span>
                  <span className="text-sm font-bold text-slate-900 leading-tight block mt-0.5">{aud.title}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Audience Content Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md mb-12">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200">
                <AudienceIcon className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'ES' ? `Guía para ${currentAudience.title}` : `Guide pour ${currentAudience.title}`}</span>
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900">
                {currentAudience.pitch}
              </h3>

              <div className="space-y-2.5 pt-2">
                {currentAudience.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenQuoteModal(lang === 'ES' ? `Acompañamiento de proyecto y visión territorial - ${currentAudience.title}` : `Accompagnement de projet & vision globale - ${currentAudience.title}`)}
                  className="px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md shadow-emerald-700/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>{lang === 'ES' ? 'Solicitar acompañamiento de proyecto' : 'Demander un accompagnement de projet'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => onOpenQuoteModal(lang === 'ES' ? `Diagnóstico de parcela y drenaje - ${currentAudience.title}` : `Diagnostic de site & étude ZAN - ${currentAudience.title}`)}
                  className="px-4 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer border border-slate-200"
                >
                  {lang === 'ES' ? 'Diagnóstico de parcela y drenaje' : 'Diagnostic de site & étude ZAN'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                {lang === 'ES' ? 'Documentos y recursos técnicos' : 'Documents & Ressources téléchargeables'}
              </div>
              <div className="space-y-2.5">
                {PRESCRIBER_DOCS.slice(0, 3).map((doc) => (
                  <div
                    key={doc.id}
                    onClick={() => onDownloadDoc(doc)}
                    className="p-3 bg-white rounded-xl border border-slate-200 hover:border-emerald-500 hover:shadow-xs transition-all flex items-center justify-between gap-3 cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-emerald-600 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
                          {doc.title}
                        </div>
                        <div className="text-[11px] text-slate-500">
                          {doc.format} · {doc.pages} {lang === 'ES' ? 'págs.' : 'pages'} · {doc.targetAudience}
                        </div>
                      </div>
                    </div>
                    <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 shrink-0" />
                  </div>
                ))}
              </div>

              {/* Flyer Commercial France Preview */}
              <div className="pt-3 border-t border-slate-200">
                <div className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200">
                  <div className="w-12 h-16 rounded-lg overflow-hidden border border-slate-200 shrink-0 shadow-2xs">
                    <img
                      src="/assets/aistudio/AF089656-62C0-4A6A-B198-018C44CDECAE_3caae124.png"
                      alt="Service Commercial France ESPORTEC Eco-Industriel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-slate-900 truncate">
                      {lang === 'ES' ? 'Folleto Servicio Técnico y Comercial' : 'Plaquette Service Commercial France'}
                    </div>
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {lang === 'ES'
                        ? 'Síntesis de los 5 pilares ambientales y fichas técnicas para proyectos de licitación.'
                        : 'Synthèse des 5 piliers environnementaux et fiches techniques pour vos commissions d\'urbanisme.'}
                    </p>
                  </div>
                  <button
                    onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Solicitud de folleto técnico y comercial' : 'Demande plaquette Service Commercial France')}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 whitespace-nowrap cursor-pointer shrink-0"
                  >
                    {lang === 'ES' ? 'Solicitar →' : 'Demander →'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
