import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, ShieldCheck, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Language } from '../data/translations';
import { EsporTecLogo } from './EsporTecLogo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSubject?: string;
  lang?: Language;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ 
  isOpen, 
  onClose, 
  initialSubject,
  lang = 'FR'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(lang === 'ES' ? 'Espacios urbanos / Plaza pública' : 'Urbain / Place publique');
  const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header bar */}
        <div className="flex items-center justify-between p-6 bg-slate-900 text-white">
          <div className="flex items-center gap-3.5">
            <div className="bg-white rounded-xl p-2 shrink-0 shadow-xs">
              <EsporTecLogo 
                className="h-10 sm:h-11 w-auto" 
                withBaseline={false}
                lightMode={true}
              />
            </div>
            <div>
              <div className="text-[11px] font-semibold text-lime-400 italic">
                {lang === 'ES' ? '«La calidad medioambiental vista desde el suelo»' : '« La qualité environnementale vue du sol »'}
              </div>
              <h3 className="text-lg font-bold text-white">
                {lang === 'ES' ? 'Solicitud de estudio y presupuesto' : 'Demande d’étude personnalisée & chiffrage'}
              </h3>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">
                {lang === 'ES' ? '¡Solicitud registrada!' : 'Demande enregistrée !'}
              </h4>
              <p className="text-sm text-slate-600">
                {lang === 'ES' ? (
                  <>
                    Gracias <strong className="text-slate-800">{name}</strong>. Nuestro departamento técnico analiza su proyecto ({projectType}) y le contactará en menos de 24 horas.
                  </>
                ) : (
                  <>
                    Merci <strong className="text-slate-800">{name}</strong>. Notre service technique analyse votre projet ({projectType}) et vous contactera sous 24 heures.
                  </>
                )}
              </p>
              <div className="pt-4 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>
                    {lang === 'ES' 
                      ? `¿Atención inmediata? Llame al ${COMPANY_INFO.phoneDisplay}` 
                      : `Besoin immédiat ? Appelez le ${COMPANY_INFO.phoneDisplay}`}
                  </span>
                </a>
                <button
                  onClick={handleClose}
                  className="py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 transition-colors"
                >
                  {lang === 'ES' ? 'Cerrar' : 'Fermer'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-slate-500">
                {lang === 'ES' 
                  ? 'Indique algunos datos para que nuestro departamento técnico prepare su estimación personalizada:' 
                  : 'Précisez quelques informations afin que notre bureau d’études prépare votre estimation personnalisée :'}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {lang === 'ES' ? 'Tipo de proyecto *' : 'Type de projet *'}
                </label>
                <select
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                  className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                >
                  {lang === 'ES' ? (
                    <>
                      <option value="Espacios urbanos / Plaza pública">Espacios urbanos (Plaza, accesos, patios escolares)</option>
                      <option value="Parques y paseos paisajísticos">Paseos de parques, vías verdes, accesibilidad PMR</option>
                      <option value="Pista polideportiva / STABIL’SPORT®">Pistas polideportivas / STABIL’SPORT®</option>
                      <option value="Pistas de petanca">Pistas de petanca y juegos</option>
                      <option value="Campo de fútbol estabilizado">Campo de fútbol de entrenamiento</option>
                      <option value="Suministro ligante puro ECO'STABIL®">Suministro de ligante ECO'STABIL® a granel</option>
                    </>
                  ) : (
                    <>
                      <option value="Urbain / Place publique">Aménagement urbain (Parvis, place, cours d’école)</option>
                      <option value="Parcs & Allées paysagères">Allées de parc, voies vertes, cheminements PMR</option>
                      <option value="Terrain multisports / STABIL’SPORT®">Terrain multisports / STABIL’SPORT®</option>
                      <option value="Terrain de pétanque / Boulodrome">Boulodrome & terrain de pétanque</option>
                      <option value="Terrain de football stabilisé">Terrain de football d’entraînement</option>
                      <option value="Fourniture liant pur ECOSTABIL®">Fourniture de liant ECOSTABIL® en vrac</option>
                    </>
                  )}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ES' ? 'Superficie estimada (m²)' : 'Surface estimée (m²)'}
                  </label>
                  <input
                    type="number"
                    placeholder="Ex : 750"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ES' ? 'Ciudad o Código Postal' : 'Ville ou Code Postal'}
                  </label>
                  <input
                    type="text"
                    placeholder={lang === 'ES' ? 'Ej.: 28001 Madrid' : 'Ex : 31170 Tournefeuille'}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ES' ? 'Nombre y Apellidos *' : 'Nom & Prénom *'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={lang === 'ES' ? 'Carlos Gómez' : 'Jean Dupont'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ES' ? 'Teléfono directo *' : 'Téléphone *'}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+34 6XX XX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'ES' ? 'Email profesional *' : 'Email professionnel *'}
                </label>
                <input
                  type="email"
                  required
                  placeholder="contacto@empresa.es"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {lang === 'ES' ? 'Mensaje o requerimientos particulares' : 'Message ou contraintes particulières'}
                </label>
                <textarea
                  rows={2}
                  placeholder={lang === 'ES' ? 'Ej.: Plazos requeridos, accesibilidad para camiones...' : 'Ex : Délais souhaités, accès chantier pour camions bennes...'}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:outline-hidden"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'ES' ? 'Enviar mi solicitud de estudio' : 'Envoyer ma demande d’étude gratuite'}</span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {lang === 'ES' 
                    ? 'Fabricante europeo desde 1997 · Respuesta en menos de 24h' 
                    : 'Fabricant français depuis 1997 · Réponse sous 24h'}
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
