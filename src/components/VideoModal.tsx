import React, { useRef, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { Language } from '../data/translations';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang?: Language;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  lang = 'FR',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const steps = lang === 'ES' ? [
    { time: 0, label: '01. Vidrio reciclado' },
    { time: 5, label: '02. Mezcla y formulación' },
    { time: 9, label: '03. Puesta en obra' },
    { time: 14, label: '04. Acabado mineral' }
  ] : [
    { time: 0, label: '01. Verre recyclé' },
    { time: 5, label: '02. Malaxage & liant' },
    { time: 9, label: '03. Mise en œuvre' },
    { time: 14, label: '04. Rendu fini minéral' }
  ];

  const handleSeek = (timeSec: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime = timeSec;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-slate-950 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/80">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-lime-400 animate-pulse" />
            <h3 className="text-base sm:text-lg font-black text-white">
              {lang === 'ES' ? 'Vídeo del proceso ESPORTEC (25s)' : 'Vidéo du processus ESPORTEC (25s)'}
            </h3>
            <span className="hidden sm:inline text-xs font-semibold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-md border border-emerald-800">
              {lang === 'ES' ? 'De la materia al suelo acabado' : 'De la matière au sol fini'}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative bg-black aspect-video flex items-center justify-center">
          <video
            ref={videoRef}
            src="/assets/aistudio/My_first_board_ESPORTEC_-_Promo_25smp4_50Rvzq7G_c41fd130.mp4"
            controls
            playsInline
            className="w-full h-full object-contain"
          />
        </div>

        {/* Interactive Timeline Stepper */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-1">
              {lang === 'ES' ? 'Secuencias :' : 'Séquences :'}
            </span>
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleSeek(s.time)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-emerald-700 text-slate-200 hover:text-white transition-colors border border-slate-700 cursor-pointer"
              >
                {s.label}
              </button>
            ))}
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer shrink-0"
          >
            {lang === 'ES' ? 'Cerrar el vídeo' : 'Fermer la vidéo'}
          </button>
        </div>
      </div>
    </div>
  );
};
