import React from 'react';
import { X, MapPin, Calendar, Layers, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { RealisationProject } from '../types';
import { Language } from '../data/translations';

interface ProjectDetailModalProps {
  project: RealisationProject | null;
  onClose: () => void;
  onRequestQuote: (subject: string) => void;
  lang?: Language;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuote,
  lang = 'FR'
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Visual Header */}
        <div className="relative p-6 sm:p-8 bg-slate-900 text-white overflow-hidden">
          <div className="relative z-10 flex items-start justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 text-[11px] font-bold text-lime-400 uppercase tracking-wider bg-emerald-950/80 border border-emerald-800 px-2.5 py-0.5 rounded">
                {project.category} · {lang === 'ES' ? 'Obra de referencia' : 'Réalisation de référence'}
              </div>
              <h3 className="text-xl sm:text-2xl font-black mt-2">
                {project.title}
              </h3>
              <div className="flex items-center gap-2 text-xs text-slate-300 mt-1">
                <MapPin className="w-3.5 h-3.5 text-lime-400" />
                <span>{project.location} ({project.department}) · {project.region}</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-slate-700">
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
              {lang === 'ES' ? 'Presentación del proyecto' : 'Présentation du projet'}
            </h4>
            <p className="text-sm leading-relaxed text-slate-600">
              {project.description}
            </p>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-400 block">{lang === 'ES' ? 'Superficie' : 'Surface'}</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">{project.surface}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-400 block">{lang === 'ES' ? 'Año' : 'Année'}</span>
              <span className="text-base font-extrabold text-slate-900 mt-0.5 block">{project.year}</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-[11px] text-slate-400 block">{lang === 'ES' ? 'Formulación' : 'Formulation'}</span>
              <span className="text-xs font-bold text-emerald-700 mt-1 block truncate" title={project.productUsed}>
                {project.productUsed.split(' ')[0]}
              </span>
            </div>
          </div>

          {/* Highlights checklist */}
          <div>
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              {lang === 'ES' ? 'Puntos clave y experiencia en obra' : 'Points forts & Retours d’expérience'}
            </h4>
            <div className="space-y-2">
              {project.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200 text-xs text-emerald-950 flex items-center justify-between">
            <div>
              <span className="font-bold block text-emerald-900">
                {lang === 'ES' ? '¿Tiene un proyecto similar?' : 'Vous avez un projet similaire ?'}
              </span>
              <span className="text-[11px] text-emerald-700">
                {lang === 'ES' 
                  ? 'Podemos organizar una visita de referencia o facilitarle asesoramiento directo.' 
                  : 'Nous pouvons organiser une visite sur site ou vous transmettre les contacts de référence.'}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-600 hover:text-slate-900 transition-colors"
          >
            {lang === 'ES' ? 'Cerrar' : 'Fermer'}
          </button>
          <button
            onClick={() => {
              onClose();
              onRequestQuote(lang === 'ES' ? `Proyecto inspirado en: ${project.title}` : `Projet inspiré par : ${project.title}`);
            }}
            className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>{lang === 'ES' ? 'Estudiar un proyecto similar' : 'Étudier un projet similaire'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
