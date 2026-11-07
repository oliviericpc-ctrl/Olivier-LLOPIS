import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Truck, Send, CheckCircle2, AlertCircle, ShieldCheck, Building2, User } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { Language } from '../data/translations';
import { EsporTecLogo } from './EsporTecLogo';

interface ContactQuoteSectionProps {
  initialSubject?: string;
  prefilledCalculation?: {
    areaM2: number;
    thicknessCm: number;
    usageLabel: string;
    volumeM3: number;
    totalWeightTonnes: number;
    binderTonnes: number;
    trucksNeeded: number;
  } | null;
  lang?: Language;
}

export const ContactQuoteSection: React.FC<ContactQuoteSectionProps> = ({
  initialSubject,
  prefilledCalculation,
  lang = 'FR'
}) => {
  const defaultSubject = lang === 'ES' 
    ? 'Solicitud de presupuesto y estudio técnico' 
    : 'Demande de devis & étude personnalisée';

  const [profile, setProfile] = useState<'mairie' | 'architecte' | 'bureau-etudes' | 'tp' | 'autre'>('mairie');
  const [subject, setSubject] = useState<string>(initialSubject || defaultSubject);
  const [name, setName] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [postalCode, setPostalCode] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [area, setArea] = useState<string>(prefilledCalculation ? String(prefilledCalculation.areaM2) : '');
  const [message, setMessage] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  useEffect(() => {
    if (initialSubject) {
      setSubject(initialSubject);
    }
  }, [initialSubject]);

  useEffect(() => {
    if (prefilledCalculation) {
      setArea(String(prefilledCalculation.areaM2));
      setMessage((prev) => {
        const calcSummary = lang === 'ES'
          ? `[Datos del simulador : Superficie = ${prefilledCalculation.areaM2} m², Espesor = ${prefilledCalculation.thicknessCm} cm, Uso = ${prefilledCalculation.usageLabel}, Volumen = ${prefilledCalculation.volumeM3} m³, Ligante ECO'STABIL® = ${prefilledCalculation.binderTonnes} t, Camiones estimados = ~${prefilledCalculation.trucksNeeded}]. `
          : `[Données du simulateur : Surface = ${prefilledCalculation.areaM2} m², Épaisseur = ${prefilledCalculation.thicknessCm} cm, Usage = ${prefilledCalculation.usageLabel}, Volume = ${prefilledCalculation.volumeM3} m³, Liant ECOSTABIL® = ${prefilledCalculation.binderTonnes} t, Camions bennes estimés = ~${prefilledCalculation.trucksNeeded}]. `;
        return prev ? `${calcSummary}\n${prev}` : calcSummary;
      });
    }
  }, [prefilledCalculation, lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError(lang === 'ES' ? 'Por favor indique su nombre completo.' : 'Veuillez renseigner votre nom complet.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setFormError(lang === 'ES' ? 'Por favor indique un correo electrónico válido.' : 'Veuillez renseigner une adresse email valide.');
      return;
    }
    if (!phone.trim()) {
      setFormError(lang === 'ES' ? 'Por favor indique su número de teléfono directo.' : 'Veuillez renseigner votre numéro de téléphone.');
      return;
    }

    setIsSubmitting(true);
    // Simulate real business submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setMessage('');
    setArea('');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full mb-3 border border-emerald-200">
            <Mail className="w-3.5 h-3.5 text-emerald-700" />
            <span>{lang === 'ES' ? 'Solicitud de estudio y presupuesto' : 'Demande d’étude & Devis'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'ES' ? 'Contacte con nuestro departamento técnico ESPORTEC' : 'Contactez notre bureau d’études ESPORTEC'}
          </h2>
          <p className="mt-3 text-base text-slate-600">
            {lang === 'ES'
              ? 'Respuesta técnica y comercial en menos de 24h laborables para todos sus proyectos en la Península y Europa.'
              : 'Une réponse technique et commerciale sous 24h ouvrées pour tous vos projets en France métropolitaine.'}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Coordinates Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div>
                  <div className="bg-white rounded-2xl p-4 inline-block mb-3 shadow-md border-2 border-emerald-500/30">
                    <EsporTecLogo 
                      className="h-14 sm:h-16 w-auto" 
                      withBaseline={true}
                      lightMode={true}
                    />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-400 block">
                    {lang === 'ES' ? 'Sede Central y Dirección Comercial' : 'Siège Social & Commercial'}
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">
                    {COMPANY_INFO.name}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium italic mt-0.5">
                    « {lang === 'ES' ? 'La calidad medioambiental al servicio de los suelos' : COMPANY_INFO.baseline} »
                  </p>
                </div>

                <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lime-400 shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">{COMPANY_INFO.address}</div>
                      <div className="text-slate-300">{COMPANY_INFO.postalCode} {COMPANY_INFO.city}</div>
                      <div className="text-xs text-slate-400">
                        {lang === 'ES' ? 'Sede central e internacional · España y Francia' : 'Région Occitanie · France'}
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lime-400 shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <a
                        href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-lg font-bold text-lime-400 hover:text-lime-300 transition-colors block"
                      >
                        {COMPANY_INFO.phoneDisplay}
                      </a>
                      <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-slate-500" />
                        <span>{lang === 'ES' ? 'Lunes a Viernes: 8:00 - 18:30' : COMPANY_INFO.phoneHours}</span>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-lime-400 shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="font-semibold text-white hover:text-lime-400 transition-colors"
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <div className="text-xs text-slate-400">
                        {lang === 'ES' ? 'Respuesta en menos de 24 horas' : 'Réponse sous 24 heures'}
                      </div>
                    </div>
                  </div>

                  {/* Delivery */}
                  <div className="flex items-start gap-3.5">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                      <Truck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        {lang === 'ES' ? 'Suministro en camiones volquete y tráileres' : 'Livraison en camions bennes'}
                      </div>
                      <div className="text-xs text-emerald-300">
                        {lang === 'ES' ? 'Envíos a toda la Península Ibérica y Europa' : COMPANY_INFO.deliveryZone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {lang === 'ES' 
                        ? 'Ligantes patentados y certificados · Apoyo BRGM y Eco-emballages'
                        : 'Liants brevetés et primés · Support BRGM & Eco-emballages'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Prescriber Quick Notice */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <h4 className="text-sm font-bold text-emerald-950">
                {lang === 'ES' 
                  ? '¿Prepara un pliego de prescripciones técnicas (CCTP) para una licitación?' 
                  : 'Vous préparez un CCTP pour un appel d’offres ?'}
              </h4>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                {lang === 'ES'
                  ? 'Indique su plazo de entrega en el formulario. Le enviamos en menos de 4h la plantilla CCTP exacta adaptada a su zona y los ensayos de suelo recomendados.'
                  : 'Indiquez votre délai de remise de dossier dans le formulaire. Nous vous envoyons sous 4h la trame CCTP exacte adaptée à votre région et les essais de sol recommandés.'}
              </p>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  {lang === 'ES' ? '¡Su solicitud ha sido enviada con éxito!' : 'Votre demande a bien été transmise !'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  {lang === 'ES' ? (
                    <>
                      Gracias <strong className="text-slate-800">{name}</strong>. Nuestro ingeniero técnico-comercial estudiará su proyecto y le contactará en menos de 24h laborables.
                    </>
                  ) : (
                    <>
                      Merci <strong className="text-slate-800">{name}</strong>. Notre ingénieur technico-commercial dédié à votre secteur étudie votre projet et vous recontactera sous 24h ouvrées.
                    </>
                  )}
                </p>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs text-slate-600 max-w-md mx-auto text-left space-y-1">
                  <div><strong>{lang === 'ES' ? 'Destinatario :' : 'Destinataire :'}</strong> {COMPANY_INFO.name} ({COMPANY_INFO.city})</div>
                  <div><strong>{lang === 'ES' ? 'Asunto :' : 'Objet :'}</strong> {subject}</div>
                  <div><strong>{lang === 'ES' ? 'Contacto :' : 'Contact :'}</strong> {email} · {phone}</div>
                </div>
                <div className="pt-4">
                  <button
                    onClick={handleResetForm}
                    className="px-6 py-2.5 rounded-xl font-bold text-xs text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    {lang === 'ES' ? 'Enviar otra solicitud' : 'Envoyer une autre demande'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {lang === 'ES' ? 'Formulario de solicitud de contacto y presupuesto' : 'Formulaire de demande de contact & chiffrage'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {lang === 'ES' ? 'Los campos marcados con un asterisco (*) son obligatorios.' : 'Les champs marqués d’un astérisque (*) sont obligatoires.'}
                  </p>
                </div>

                {formError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{formError}</span>
                  </div>
                )}

                {/* Profile Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    {lang === 'ES' ? 'Usted es:' : 'Vous êtes :'}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    {[
                      { id: 'mairie', label: lang === 'ES' ? 'Ayuntamiento' : 'Mairie / Coll.' },
                      { id: 'architecte', label: lang === 'ES' ? 'Arquitecto' : 'Architecte' },
                      { id: 'bureau-etudes', label: lang === 'ES' ? 'Ingeniería' : 'Bureau études' },
                      { id: 'tp', label: lang === 'ES' ? 'Obra civil / TP' : 'Entreprise TP' },
                      { id: 'autre', label: lang === 'ES' ? 'Otro' : 'Autre' }
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setProfile(p.id as any)}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold text-center transition-all cursor-pointer ${
                          profile === p.id
                            ? 'bg-emerald-700 text-white font-bold shadow-xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Subject / Purpose */}
                <div>
                  <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {lang === 'ES' ? 'Asunto de su solicitud:' : 'Objet de votre demande :'}
                  </label>
                  <select
                    id="contact-subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  >
                    {lang === 'ES' ? (
                      <>
                        <option value="Solicitud de presupuesto y estudio técnico">Solicitud de presupuesto y cálculo completo</option>
                        <option value="Acompañamiento a Ayuntamientos y Entidades Públicas">Acompañamiento a Ayuntamientos y Entidades Públicas (Visión integral y Renaturalización)</option>
                        <option value="Obra con silo móvil y control de laboratorio externo">Obra con silo móvil y control de laboratorio externo</option>
                        <option value="Descarga de pliego CCTP tipo para licitaciones">Descarga de pliego CCTP tipo para licitaciones</option>
                        <option value="Proyecto STABIL’SPORT® (Polideportivo / Petanca)">Proyecto STABIL’SPORT® (Polideportivo / Petanca)</option>
                        <option value="Ligante puro ECO'STABIL® para planta / obra">Compra de ligante puro ECO'STABIL® en volquete o cisterna</option>
                        <option value="Asistencia técnica o consulta de I+D">Asistencia técnica o consulta de I+D</option>
                      </>
                    ) : (
                      <>
                        <option value="Demande de devis & étude personnalisée">Demande de devis & chiffrage complet</option>
                        <option value="Accompagnement projet Mairies & Collectivités">Accompagnement projet Mairies & Collectivités (Vision globale & ZAN)</option>
                        <option value="Chantier avec silo mobile & contrôle labo">Chantier avec silo mobile & contrôle laboratoire externe</option>
                        <option value="Demande de CCTP & fiches techniques">Téléchargement de CCTP type pour appel d’offres</option>
                        <option value="Projet STABIL’SPORT® (Sportif / Multisports)">Projet STABIL’SPORT® (Multisports / Pétanque)</option>
                        <option value="Liant pur ECOSTABIL® pour centrale / chantier">Achat de liant pur ECOSTABIL® en bennes / citernes</option>
                        <option value="Assistance technique ou question R&D">Assistance technique ou question R&D</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Identity & Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ES' ? 'Nombre y Apellidos *' : 'Nom & Prénom *'}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder={lang === 'ES' ? 'Ej.: Carlos Gómez' : 'Ex : Jean Dupont'}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-org" className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ES' ? 'Entidad / Administración / Empresa' : 'Collectivité / Organisme / Société'}
                    </label>
                    <input
                      id="contact-org"
                      type="text"
                      placeholder={lang === 'ES' ? 'Ej.: Ayuntamiento de ..., Estudio de Arq...' : 'Ex : Mairie de ..., Cabinet Archi...'}
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Contact coordinates */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ES' ? 'Correo electrónico profesional *' : 'Email professionnel *'}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="contacto@empresa.es"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ES' ? 'Teléfono directo *' : 'Téléphone direct *'}
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      placeholder="+34 6XX XX XX XX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                      required
                    />
                  </div>
                </div>

                {/* Location & Surface */}
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="contact-area" className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ES' ? 'Superficie estimada (m²)' : 'Surface estimée (m²)'}
                    </label>
                    <input
                      id="contact-area"
                      type="number"
                      placeholder="Ex : 1200"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-postal" className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ES' ? 'Código postal obra' : 'Code postal chantier'}
                    </label>
                    <input
                      id="contact-postal"
                      type="text"
                      placeholder="Ex : 28001"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-city" className="block text-xs font-semibold text-slate-700 mb-1">
                      {lang === 'ES' ? 'Ciudad o Municipio' : 'Ville ou Commune'}
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      placeholder={lang === 'ES' ? 'Ej.: Madrid / Barcelona' : 'Ex : Toulouse'}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700 mb-1">
                    {lang === 'ES' ? 'Detalles de su proyecto / Mensaje' : 'Précisions sur votre projet / Message'}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder={lang === 'ES' 
                      ? 'Describa su proyecto: tipo de árido local, requerimientos de drenaje, plazos de ejecución...' 
                      : 'Décrivez votre projet : type de sol existant, contraintes de calendrier, besoin d\'essais préalables...'}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-lg shadow-emerald-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>{lang === 'ES' ? 'Enviando solicitud...' : 'Transmission en cours...'}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{lang === 'ES' ? 'Enviar mi solicitud de estudio' : 'Envoyer ma demande d’étude'}</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-2.5">
                    {lang === 'ES' 
                      ? 'Datos tratados con estricta confidencialidad por ESPORTEC Eco-Industriel. Sin spam.' 
                      : 'Données traitées en toute confidentialité par ESPORTEC Eco-Industriel. Pas de spam.'}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
