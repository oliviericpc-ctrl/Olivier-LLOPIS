import React, { useState } from 'react';
import { X, Download, CheckCircle2 } from 'lucide-react';
import { SolutionItem } from '../types';
import { Language } from '../data/translations';

interface TechnicalSheetModalProps {
  solution: SolutionItem | null;
  onClose: () => void;
  onRequestQuote: (productName: string) => void;
  lang?: Language;
}

export const TechnicalSheetModal: React.FC<TechnicalSheetModalProps> = ({
  solution,
  onClose,
  onRequestQuote,
  lang = 'FR'
}) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  if (!solution) return null;

  const handleSimulateDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between shrink-0">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-lime-400">
              {lang === 'ES' ? 'Ficha Técnica de Prescripción · Pliego CCTP' : 'Fiche Technique Prescripteur · CCTP'}
            </div>
            <h3 className="text-xl sm:text-2xl font-black mt-0.5">
              {solution.title}
            </h3>
            <p className="text-xs text-slate-300 mt-1">{solution.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          {/* Download Notification if clicked */}
          {downloadSuccess && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                {lang === 'ES' 
                  ? `Descarga de la ficha técnica y pliego CCTP en curso para ${solution.title}.` 
                  : `Téléchargement du descriptif technique CCTP en cours pour ${solution.title}.`}
              </span>
            </div>
          )}

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {lang === 'ES' ? 'Presentación y Principios Generales' : 'Présentation & Principes Généraux'}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600">
              {solution.description}
            </p>
          </div>

          {/* Mechanical & Hydraulic Specifications Table */}
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              {lang === 'ES' ? 'Características Físico-Mecánicas' : 'Caractéristiques Physico-Mécaniques'}
            </h4>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[11px]">{lang === 'ES' ? 'Espesor compactado' : 'Épaisseur compactée'}</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{solution.thickness}</span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[11px]">{lang === 'ES' ? 'Permeabilidad hidráulica' : 'Perméabilité hydraulique'}</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{solution.permeability}</span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[11px]">{lang === 'ES' ? 'Capacidad portante' : 'Module de portance'}</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">{solution.bearingCapacity}</span>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <span className="text-slate-400 block text-[11px]">{lang === 'ES' ? 'Naturaleza del ligante' : 'Nature du liant minéral'}</span>
                <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                  {lang === 'ES' ? "Cemento de vidrio ECO'STABIL®" : 'Ciment de verre ECOSTABIL®'}
                </span>
              </div>
            </div>
          </div>

          {/* Typical Layer Cross Section Structure */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              {lang === 'ES' ? 'Sección tipo de estructura recomendada' : 'Coupe type de structure recommandée'}
            </h4>
            <div className="space-y-2 text-xs">
              <div className="p-3 bg-emerald-50/90 border border-emerald-300 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-emerald-950 block">
                    {lang === 'ES' 
                      ? `1. Pavimento estabilizado continuo ESPORTEC (${solution.thickness})` 
                      : `1. Couche de roulement stabilisée ESPORTEC (${solution.thickness})`}
                  </span>
                  <span className="text-emerald-700 text-[11px]">
                    {lang === 'ES'
                      ? "Árido seleccionado 0/4 o 0/6 mezclado con ligante patentado ECO'STABIL®"
                      : 'Sable concassé 0/4 ou 0/6 malaxé avec liant ciment de verre breveté ECOSTABIL®'}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                  {lang === 'ES' ? 'Acabado' : 'Finition'}
                </span>
              </div>

              <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-800 block">
                    {lang === 'ES' ? '2. Capa de base drenante (15 a 20 cm)' : '2. Couche de fondation drainante (15 à 20 cm)'}
                  </span>
                  <span className="text-slate-600 text-[11px]">
                    {lang === 'ES' ? 'Zahorra artificial drenante GNT 0/20 o 0/31.5 permeable' : 'Grave non traitée drainante GNT 0/20 ou 0/31.5 perméable'}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-slate-600">
                  {lang === 'ES' ? 'Base' : 'Assise'}
                </span>
              </div>

              <div className="p-3 bg-stone-100 border border-stone-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-stone-800 block">
                    {lang === 'ES' ? '3. Geotextil anticontaminante + Explanada compactada' : '3. Géotextile anti-contaminant + Fond de forme compacté'}
                  </span>
                  <span className="text-stone-600 text-[11px]">
                    {lang === 'ES' ? 'Capacidad portante mínima soporte EV2 ≥ 30 MPa' : 'Portance minimale support EV2 ≥ 30 MPa'}
                  </span>
                </div>
                <span className="font-mono text-xs font-bold text-stone-600">
                  {lang === 'ES' ? 'Soporte' : 'Support'}
                </span>
              </div>
            </div>
          </div>

          {/* Environmental benefits */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {lang === 'ES' ? 'Ventajas Ambientales y Normativas' : 'Atouts Environnementaux & Réglementaires'}
            </h4>
            <div className="space-y-1.5">
              {solution.ecologicalBenefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <button
            onClick={handleSimulateDownload}
            className="px-4 py-2.5 rounded-xl font-bold text-xs text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
          >
            <Download className="w-4 h-4 text-emerald-600" />
            <span>{lang === 'ES' ? 'Descargar ficha PDF y Pliego CCTP (Word)' : 'Télécharger la fiche PDF & CCTP (Word)'}</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onRequestQuote(solution.title);
            }}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md transition-all cursor-pointer"
          >
            {lang === 'ES' ? 'Solicitar presupuesto para este producto' : 'Demander un devis pour ce produit'}
          </button>
        </div>
      </div>
    </div>
  );
};
