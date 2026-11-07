import React, { useState } from 'react';
import { 
  Check, 
  X, 
  AlertTriangle, 
  HelpCircle, 
  Sparkles, 
  Leaf, 
  Droplets, 
  Sun, 
  ShieldCheck, 
  Coins, 
  Trees, 
  ArrowRight,
  TestTube2
} from 'lucide-react';

import { Language } from '../data/translations';
import { COMPARISON_CRITERIA_ES } from '../data/spanishContent';

interface ComparisonTableSectionProps {
  onOpenQuoteModal: (subject?: string) => void;
  lang?: Language;
}

export const ComparisonTableSection: React.FC<ComparisonTableSectionProps> = ({
  onOpenQuoteModal,
  lang = 'FR',
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'carbone' | 'technique' | 'economique'>('all');

  const criteriaFR = [
    {
      category: 'carbone',
      categoryLabel: 'Environnement & Climat',
      label: 'Empreinte Carbone & Clinker',
      sublabel: 'Émissions équivalent CO₂ à la fabrication et mise en œuvre',
      esportec: {
        score: 'excellent',
        badge: '-80% de CO₂e',
        text: '0% clinker. Liant au ciment de verre 100% recyclé issu de la collecte locale, fabrication à froid (~15 kg CO₂e/t).'
      },
      enrobe: {
        score: 'bad',
        badge: 'Forte empreinte',
        text: 'Chauffage lourd à 160°C en centrale d’enrobage, bitume issu du raffinage pétrolier (~65 kg CO₂e/t).'
      },
      beton: {
        score: 'bad',
        badge: 'Très émissif',
        text: 'Clinker cuit à 1450°C générant une décarbonatation massive du calcaire (~250 kg CO₂e/m³).'
      },
      stabiliseTrad: {
        score: 'medium',
        badge: 'Moyen à élevé',
        text: 'Utilisation de ciments Portland classiques ou chaux calcinée fortement émissifs.'
      }
    },
    {
      category: 'technique',
      categoryLabel: 'Hydrologie & Climat',
      label: 'Perméabilité & Infiltration pluviale',
      sublabel: 'Capacité de désimperméabilisation et réalimentation de la nappe',
      esportec: {
        score: 'excellent',
        badge: '100% Perméable',
        text: 'Coefficient K > 1,5 × 10⁻⁴ m/s. Zéro ruissellement, infiltration totale à la parcelle, recharge naturelle des nappes.'
      },
      enrobe: {
        score: 'bad',
        badge: '100% Imperméable',
        text: 'Surcharge les réseaux d’assainissement pluvial. Nécessite caniveaux, séparateurs d’hydrocarbures et bassins de rétention.'
      },
      beton: {
        score: 'bad',
        badge: 'Imperméable',
        text: 'Surfaces étanches provoquant des inondations urbaines de surface (bétons poreux onéreux et vite colmatés).'
      },
      stabiliseTrad: {
        score: 'medium',
        badge: 'Partielle & temporaire',
        text: 'Encroûtement rapide en surface diminuant drastiquement la perméabilité après 1 ou 2 hivers.'
      }
    },
    {
      category: 'technique',
      categoryLabel: 'Confort Urbain',
      label: 'Lutte contre les Îlots de Chaleur (ICU)',
      sublabel: 'Comportement thermique en période estivale et albédo',
      esportec: {
        score: 'excellent',
        badge: 'Albédo élevé · Fraîcheur',
        text: 'Teintes claires naturelles du sable. Réflectance solaire élevée, pas d’accumulation calorifique nocturne.'
      },
      enrobe: {
        score: 'bad',
        badge: '+15°C à +20°C au sol',
        text: 'Couleur noire agissant comme un absorbeur thermique majeur, restituant la chaleur toute la nuit en milieu urbain.'
      },
      beton: {
        score: 'medium',
        badge: 'Chaleur résiduelle',
        text: 'Inertie thermique massive restituant la chaleur en soirée, réverbération solaire parfois éblouissante.'
      },
      stabiliseTrad: {
        score: 'good',
        badge: 'Bonne réflectance',
        text: 'Teinte claire mais dégagement important de poussière volatile en période de sécheresse estivale.'
      }
    },
    {
      category: 'technique',
      categoryLabel: 'Performance & Résistance',
      label: 'Auto-cicatrisation & Durabilité mécanique',
      sublabel: 'Tenue face aux intempéries, gel-dégel et circulation',
      esportec: {
        score: 'excellent',
        badge: 'Auto-cicatrisant (humidité)',
        text: 'Le ciment de verre breveté ECO’STABIL® se réactive naturellement au contact de l’eau. Rc max 34 à 38 MPa, portance EV2 ≥ 50 MPa.'
      },
      enrobe: {
        score: 'bad',
        badge: 'Orniérage & Nids de poule',
        text: 'Ramollissement sous canicule (>40°C), fissuration par le gel, pelage de surface nécessitant des reprofilages répétés.'
      },
      beton: {
        score: 'good',
        badge: 'Rigide mais fissurant',
        text: 'Fissuration inévitable exigeant des joints de dilatation réguliers, reprises visibles et très coûteuses.'
      },
      stabiliseTrad: {
        score: 'bad',
        badge: 'Décohésion & Ravinement',
        text: 'Érosion rapide sous les pluies battantes, formation de ravines, détachement continu des gravillons en surface.'
      }
    },
    {
      category: 'technique',
      categoryLabel: 'Contrôle & Traçabilité',
      label: 'Contrôle Qualité & Laboratoire externe',
      sublabel: 'Garanties d’exécution et certification sur chantier',
      esportec: {
        score: 'excellent',
        badge: 'Laboratoire externe certifié',
        text: 'Accompagnement systématique avec laboratoire externe indépendant : contrôle formulations in situ, portance EV2 à la plaque et PV officiel.'
      },
      enrobe: {
        score: 'medium',
        badge: 'Contrôle standard',
        text: 'Contrôles ponctuels de compacité et température à la sortie du finisseur par les équipes internes.'
      },
      beton: {
        score: 'good',
        badge: 'Éprouvettes béton',
        text: 'Essais normalisés d’écrasement d’éprouvettes réalisés en centrale à béton.'
      },
      stabiliseTrad: {
        score: 'bad',
        badge: 'Rarement contrôlé',
        text: 'Dosages souvent approximatifs « à la vue » sur chantier, sans essai systématique de portance.'
      }
    },
    {
      category: 'economique',
      categoryLabel: 'Financement & Subventions',
      label: 'Subventions Collectivités (Fonds Vert)',
      sublabel: 'Éligibilité aux aides financières d’État et Agences de l’Eau',
      esportec: {
        score: 'excellent',
        badge: '40% à 70% subventionné',
        text: 'Éligibilité prioritaire aux programmes de désimperméabilisation des Agences de l’Eau, Fonds Vert et cours oasis communales.'
      },
      enrobe: {
        score: 'bad',
        badge: '0 € · Taxé',
        text: 'Exclu des aides environnementales. Soumis aux redevances d’eaux pluviales et taxes sur l’imperméabilisation.'
      },
      beton: {
        score: 'bad',
        badge: 'Non subventionné',
        text: 'Inéligible aux aides à la désimperméabilisation dans ses versions standards coulées étanches.'
      },
      stabiliseTrad: {
        score: 'medium',
        badge: 'Éligibilité incertaine',
        text: 'Dossiers complexes souvent recalés par manque de garanties de perméabilité pérenne dans le temps.'
      }
    },
    {
      category: 'technique',
      categoryLabel: 'Esthétique & Santé',
      label: 'Intégration Paysagère & Santé des Usagers',
      sublabel: 'Harmonie avec l’environnement, confort PMR et émissions de COV',
      esportec: {
        score: 'excellent',
        badge: 'Minéral pur · Zéro COV',
        text: 'Aspect authentique des sables de région, confort de roulement PMR et vélo, odeur neutre, sans aucun rejet toxique pour les végétaux et sols.'
      },
      enrobe: {
        score: 'bad',
        badge: 'Odeurs & Rejets HAP',
        text: 'Vapeurs d’hydrocarbures à la pose, aspect goudron noir dénaturant les sites patrimoniaux et paysagers.'
      },
      beton: {
        score: 'medium',
        badge: 'Minéral artificiel',
        text: 'Aspect dalle béton grise et rigide, impact visuel agressif dans les parcs et espaces naturels.'
      },
      stabiliseTrad: {
        score: 'good',
        badge: 'Naturel mais boueux',
        text: 'Bel aspect initial mais devient boueux par temps de pluie et poussiéreux par temps sec.'
      }
    }
  ];

  const criteria = lang === 'ES' ? COMPARISON_CRITERIA_ES : criteriaFR;

  const filteredCriteria = selectedFilter === 'all'
    ? criteria
    : criteria.filter((c) => c.category === selectedFilter);

  const getStatusIcon = (score: string) => {
    switch (score) {
      case 'excellent':
        return <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />;
      case 'good':
        return <Check className="w-4 h-4 text-emerald-600" />;
      case 'medium':
        return <AlertTriangle className="w-4 h-4 text-amber-500" />;
      case 'bad':
        return <X className="w-4 h-4 text-rose-500 stroke-[2.5]" />;
      default:
        return <HelpCircle className="w-4 h-4 text-slate-400" />;
    }
  };

  const getBadgeClass = (score: string) => {
    switch (score) {
      case 'excellent':
        return 'bg-emerald-100 text-emerald-900 border-emerald-300 font-extrabold';
      case 'good':
        return 'bg-green-50 text-green-800 border-green-200 font-bold';
      case 'medium':
        return 'bg-amber-50 text-amber-900 border-amber-200 font-semibold';
      case 'bad':
        return 'bg-rose-50 text-rose-900 border-rose-200 font-semibold';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section id="comparatif" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold text-lime-400 uppercase tracking-wider bg-slate-800 px-3 py-1 rounded-md mb-3 border border-slate-700">
              <TestTube2 className="w-4 h-4 text-lime-400" />
              <span>{lang === 'ES' ? 'ARGUMENTOS TÉCNICOS Y COMPARATIVA' : 'ARGUMENTS TECHNIQUES & COMPARAISON CONCURRENCE'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {lang === 'ES'
                ? 'Tabla comparativa: ESPORTEC vs Soluciones convencionales'
                : 'Tableau comparatif : ESPORTEC vs Solutions conventionnelles'}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-3xl">
              {lang === 'ES'
                ? '¿Por qué prescribir el cemento de vidrio patentado ECO’STABIL® frente a un asfalto bituminoso derivado del petróleo, un hormigón al clínker o un estabilizado tradicional?'
                : 'Pourquoi prescrire le ciment de verre breveté ECO’STABIL® plutôt qu’un enrobé bitumineux pétrolier, un béton traditionnel au clinker ou un stabilisé classique ?'}
            </p>
          </div>

          {/* Interactive filter toggle */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-800/90 rounded-xl border border-slate-700 self-start lg:self-auto shrink-0">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'all'
                  ? 'bg-lime-400 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lang === 'ES' ? `Todos (${criteria.length})` : `Tous les critères (${criteria.length})`}
            </button>
            <button
              onClick={() => setSelectedFilter('carbone')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'carbone'
                  ? 'bg-lime-400 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lang === 'ES' ? 'Carbono y Clima' : 'Carbone & Climat'}
            </button>
            <button
              onClick={() => setSelectedFilter('technique')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'technique'
                  ? 'bg-lime-400 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lang === 'ES' ? 'Técnica y Obra' : 'Technique & Chantier'}
            </button>
            <button
              onClick={() => setSelectedFilter('economique')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                selectedFilter === 'economique'
                  ? 'bg-lime-400 text-slate-950 font-bold shadow-xs'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {lang === 'ES' ? 'Subvenciones' : 'Subventions'}
            </button>
          </div>
        </div>

        {/* Highlights summary pills */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/80">
            <span className="text-lime-400 text-xs font-bold block mb-1">0% CLINKER</span>
            <span className="text-white font-black text-lg block leading-tight">-80% de CO₂</span>
            <span className="text-slate-400 text-xs mt-1 block">
              {lang === 'ES' ? 'Fabricación en frío vs 160°C asfalto' : 'Fabrication à froid vs 160°C enrobé'}
            </span>
          </div>

          <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/80">
            <span className="text-emerald-400 text-xs font-bold block mb-1">
              {lang === 'ES' ? 'DESIMPERMEABILIZACIÓN' : 'DÉSIMPERMÉABILISATION'}
            </span>
            <span className="text-white font-black text-lg block leading-tight">100% Perméable</span>
            <span className="text-slate-400 text-xs mt-1 block">
              {lang === 'ES' ? 'Infiltración directa a la parcela' : 'Infiltration directe à la parcelle'}
            </span>
          </div>

          <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/80">
            <span className="text-lime-400 text-xs font-bold block mb-1">
              {lang === 'ES' ? 'CONTROL TÉCNICO' : 'CONTRÔLE QUALITÉ'}
            </span>
            <span className="text-white font-black text-lg block leading-tight">
              {lang === 'ES' ? 'Labo Homologado' : 'Labo Externe'}
            </span>
            <span className="text-slate-400 text-xs mt-1 block">
              {lang === 'ES' ? 'Control in situ y carga EV2' : 'Contrôle in situ & portance EV2'}
            </span>
          </div>

          <div className="bg-slate-800/70 p-4 rounded-2xl border border-slate-700/80">
            <span className="text-emerald-400 text-xs font-bold block mb-1">
              {lang === 'ES' ? 'FINANCIACIÓN' : 'FINANCEMENT AIDÉ'}
            </span>
            <span className="text-white font-black text-lg block leading-tight">
              {lang === 'ES' ? '40 a 70% Ayudas' : '40 à 70% Aides'}
            </span>
            <span className="text-slate-400 text-xs mt-1 block">
              {lang === 'ES' ? 'Planes ambientales y FEDER' : 'Fonds Vert & Agences de l\'Eau'}
            </span>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden text-slate-800">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[850px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-100">
                  <th className="p-4 sm:p-5 w-1/4 text-xs font-extrabold uppercase tracking-wider text-slate-700">
                    {lang === 'ES' ? 'Criterios y Exigencias' : 'Critères & Exigences'}
                  </th>
                  <th className="p-4 sm:p-5 w-1/4 bg-emerald-700 text-white border-x border-emerald-800 shadow-sm relative">
                    <div className="flex items-center justify-between">
                      <span className="font-black text-base text-white tracking-wide">
                        ESPORTEC®
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-wider bg-lime-400 text-slate-950 px-2 py-0.5 rounded shadow-2xs">
                        {lang === 'ES' ? 'RECOMENDADO' : 'RECOMMANDÉ'}
                      </span>
                    </div>
                    <div className="text-[11px] text-emerald-100 font-medium mt-0.5">
                      {lang === 'ES' ? 'Ligante patentado ECO’STABIL® (Vidrio)' : 'Liant breveté ECO’STABIL® (Verre)'}
                    </div>
                  </th>
                  <th className="p-4 sm:p-5 w-1/6 text-xs font-bold text-slate-700 bg-slate-50">
                    <span className="block font-bold text-slate-900 text-sm">
                      {lang === 'ES' ? 'Asfalto en caliente' : 'Enrobé bitumineux'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {lang === 'ES' ? 'A 160°C' : 'À chaud (160°C)'}
                    </span>
                  </th>
                  <th className="p-4 sm:p-5 w-1/6 text-xs font-bold text-slate-700 bg-slate-50">
                    <span className="block font-bold text-slate-900 text-sm">
                      {lang === 'ES' ? 'Hormigón desactivado' : 'Béton désactivé'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {lang === 'ES' ? 'Cemento Portland' : 'Ciment Portland'}
                    </span>
                  </th>
                  <th className="p-4 sm:p-5 w-1/6 text-xs font-bold text-slate-700 bg-slate-50">
                    <span className="block font-bold text-slate-900 text-sm">
                      {lang === 'ES' ? 'Estabilizado clásico' : 'Stabilisé classique'}
                    </span>
                    <span className="text-[11px] text-slate-500 font-normal">
                      {lang === 'ES' ? 'A la cal o cemento' : 'À la chaux ou ciment'}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs">
                {filteredCriteria.map((item, idx) => (
                  <tr 
                    key={idx} 
                    className={`hover:bg-slate-50/80 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}`}
                  >
                    {/* Criterion Label */}
                    <td className="p-4 sm:p-5 align-top">
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-0.5">
                        {item.categoryLabel}
                      </div>
                      <div className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                        {item.sublabel}
                      </div>
                    </td>

                    {/* ESPORTEC (Winner / Highlight Column) */}
                    <td className="p-4 sm:p-5 align-top bg-emerald-50/50 border-x border-emerald-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0">
                          {getStatusIcon(item.esportec.score)}
                        </div>
                        <span className={`inline-block text-[11px] px-2 py-0.5 rounded border ${getBadgeClass(item.esportec.score)}`}>
                          {item.esportec.badge}
                        </span>
                      </div>
                      <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-relaxed">
                        {item.esportec.text}
                      </p>
                    </td>

                    {/* Enrobé à chaud */}
                    <td className="p-4 sm:p-5 align-top">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="shrink-0">
                          {getStatusIcon(item.enrobe.score)}
                        </div>
                        <span className={`inline-block text-[10px] px-1.5 py-0.5 rounded border ${getBadgeClass(item.enrobe.score)}`}>
                          {item.enrobe.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.enrobe.text}
                      </p>
                    </td>

                    {/* Béton désactivé */}
                    <td className="p-4 sm:p-5 align-top">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="shrink-0">
                          {getStatusIcon(item.beton.score)}
                        </div>
                        <span className={`inline-block text-[10px] px-1.5 py-0.5 rounded border ${getBadgeClass(item.beton.score)}`}>
                          {item.beton.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.beton.text}
                      </p>
                    </td>

                    {/* Stabilisé classique */}
                    <td className="p-4 sm:p-5 align-top">
                      <div className="flex items-center gap-1.5 mb-2">
                        <div className="shrink-0">
                          {getStatusIcon(item.stabiliseTrad.score)}
                        </div>
                        <span className={`inline-block text-[10px] px-1.5 py-0.5 rounded border ${getBadgeClass(item.stabiliseTrad.score)}`}>
                          {item.stabiliseTrad.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.stabiliseTrad.text}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom callout inside table card */}
          <div className="p-5 sm:p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-200">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold text-lime-400 uppercase tracking-wider flex items-center justify-center sm:justify-start gap-2">
                <ShieldCheck className="w-4 h-4 text-lime-400" />
                <span>
                  {lang === 'ES'
                    ? 'OFICINA TÉCNICA Y CONTROL CON LABORATORIO EXTERNO'
                    : 'BUREAU D\'ÉTUDES & VALIDATION LABORATOIRE EXTERNE'}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {lang === 'ES'
                  ? 'Cada formulación de firme ESPORTEC se valida con nuestro laboratorio externo independiente para certificar la capacidad portante EV2 y la permeabilidad in situ.'
                  : 'Chaque formulation de sol ESPORTEC est validée avec notre laboratoire externe indépendant pour certifier la portance EV2 et la perméabilité.'}
              </p>
            </div>

            <button
              onClick={() => onOpenQuoteModal(lang === 'ES' ? 'Comparativa técnica y solicitud de estudio' : 'Comparatif technique & demande d’étude comparative')}
              className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-lime-400 hover:bg-lime-300 transition-colors shadow-md flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>
                {lang === 'ES'
                  ? 'Solicitar un estudio comparativo para su proyecto'
                  : 'Demander une étude comparative pour votre projet'}
              </span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
