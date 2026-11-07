import React, { useState } from 'react';
import { Calculator, Truck, Scale, Droplets, Leaf, ArrowRight, RotateCcw, Check, Sparkles } from 'lucide-react';
import { Language } from '../data/translations';

interface SimulatorCalculatorProps {
  onApplyCalculation: (details: {
    areaM2: number;
    thicknessCm: number;
    usageLabel: string;
    volumeM3: number;
    totalWeightTonnes: number;
    binderTonnes: number;
    trucksNeeded: number;
  }) => void;
  lang?: Language;
}

export const SimulatorCalculator: React.FC<SimulatorCalculatorProps> = ({ 
  onApplyCalculation,
  lang = 'FR',
}) => {
  const [areaM2, setAreaM2] = useState<number>(850);
  const [thicknessCm, setThicknessCm] = useState<number>(6);
  const [usageType, setUsageType] = useState<'pieton' | 'velo' | 'sport' | 'lourd'>('sport');
  const [sandType, setSandType] = useState<'calcaire' | 'silico-calcaire' | 'granitique'>('calcaire');
  const [isCalculated, setIsCalculated] = useState<boolean>(true);

  // Density of compacted stabilized sand according to official ESPORTEC technical sheets (ENVERR'PAQ® & D'ECOVERR®)
  // Masse volumique : 2,15 t/m³ (à 2,3 t/m³ suivant la nature du granulat)
  const density = 2.15;
  const volumeM3 = Number(((areaM2 * (thicknessCm / 100))).toFixed(1));
  const totalWeightTonnes = Number((volumeM3 * density).toFixed(1));

  // Binder dosage according to official technical sheets:
  // - Allées piétonnes / parcs : 4%
  // - Voies vertes / cyclables : 5%
  // - Sport (STABIL'SPORT®) : 6%
  // - Voirie légère / Urbain (ENVERR'PAQ® / D'ECOVERR®) : 7% à 10%
  const binderPercent = usageType === 'pieton' ? 0.04 : usageType === 'velo' ? 0.05 : usageType === 'sport' ? 0.06 : 0.08;
  const binderTonnes = Number((totalWeightTonnes * binderPercent).toFixed(1));
  const sandTonnes = Number((totalWeightTonnes - binderTonnes).toFixed(1));

  // Standard semi-trailer dump truck ~ 28-30 tonnes payload
  const trucksNeeded = Math.ceil(totalWeightTonnes / 28);

  // Carbon savings calculation vs conventional hot asphalt (enrobé bitumineux à chaud):
  // - Enrobé bitumineux à chaud (160°C, bitume raffiné) : ~65 kg CO₂e / tonne
  // - Revêtement stabilisé au ciment de verre sans clinker ESPORTEC : ~15 kg CO₂e / tonne
  // -> Économie nette vérifiée : 50 kg de CO₂ évités par tonne appliquée (jusqu'à 5 fois moins d'émissions)
  const co2SavedKg = Math.round(totalWeightTonnes * 50);

  const getUsageLabel = () => {
    if (lang === 'ES') {
      switch (usageType) {
        case 'pieton':
          return 'Paseos peatonales y Parques';
        case 'velo':
          return 'Vías verdes y Carriles bici';
        case 'sport':
          return 'Pistas polideportivas y Terrenos de petanca';
        case 'lourd':
          return 'Plaza urbana y Vehículos ligeros de emergencia';
      }
    }
    switch (usageType) {
      case 'pieton':
        return 'Allées piétonnes & Parcs';
      case 'velo':
        return 'Voies vertes & Pistes cyclables';
      case 'sport':
        return 'Terrain multisports & Terrains de pétanque';
      case 'lourd':
        return 'Place urbaine & Véhicules légers de secours';
    }
  };

  const handleApply = () => {
    onApplyCalculation({
      areaM2,
      thicknessCm,
      usageLabel: getUsageLabel(),
      volumeM3,
      totalWeightTonnes,
      binderTonnes,
      trucksNeeded
    });
  };

  return (
    <section id="calculateur" className="py-20 bg-slate-100/80 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3.5 py-1 rounded-full mb-3 border border-emerald-200">
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span>
              {lang === 'ES' 
                ? 'Herramienta de ayuda a la prescripción y cálculo' 
                : 'Outil d’aide à la prescription & chiffrage'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {lang === 'ES' 
              ? 'Calculadora de ligante y árido estabilizado' 
              : 'Calculateur de liant & sable stabilisé'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {lang === 'ES' ? (
              <>
                Estime al instante el volumen, tonelaje de ligante <strong className="text-emerald-800">ECO'STABIL®</strong> y el número de camiones volquete para abastecer su obra en toda la Península y Europa.
              </>
            ) : (
              <>
                Estimez instantanément le volume, le tonnage de liant <strong className="text-emerald-800">ECOSTABIL®</strong> et le nombre de camions bennes pour approvisionner votre chantier partout en France.
              </>
            )}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-12">
            {/* Input Form Column */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 border-b lg:border-b-0 lg:border-r border-slate-200">
              {/* Step 1: Surface en m² */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="area-slider" className="text-sm font-bold text-slate-900">
                    {lang === 'ES' ? '1. Superficie total del proyecto (m²)' : '1. Surface totale du projet (m²)'}
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min={20}
                      max={20000}
                      step={10}
                      value={areaM2}
                      onChange={(e) => setAreaM2(Math.max(1, Number(e.target.value)))}
                      className="w-28 px-3 py-1.5 text-right font-mono font-bold text-sm bg-slate-50 border border-slate-300 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                    />
                    <span className="text-xs font-semibold text-slate-500">m²</span>
                  </div>
                </div>

                <input
                  id="area-slider"
                  type="range"
                  min={50}
                  max={5000}
                  step={25}
                  value={areaM2}
                  onChange={(e) => setAreaM2(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />

                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>50 m²</span>
                  <span>1 000 m²</span>
                  <span>2 500 m²</span>
                  <span>5 000 m²</span>
                </div>
              </div>

              {/* Step 2: Usage / Application */}
              <div>
                <label className="text-sm font-bold text-slate-900 block mb-2.5">
                  {lang === 'ES' ? '2. Destino y tipo de uso' : '2. Destination & type d’usage'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { 
                      id: 'pieton', 
                      label: lang === 'ES' ? 'Paseos peatonales' : 'Allées piétonnes', 
                      thick: 5, 
                      desc: lang === 'ES' ? 'Parques y jardines' : 'Parcs & jardins' 
                    },
                    { 
                      id: 'velo', 
                      label: lang === 'ES' ? 'Vía verde / bicis' : 'Voie verte / vélos', 
                      thick: 6, 
                      desc: lang === 'ES' ? 'Movilidad sostenible' : 'Mobilité douce' 
                    },
                    { 
                      id: 'sport', 
                      label: lang === 'ES' ? 'Terrenos deportivos' : 'Terrains sportifs', 
                      thick: 7, 
                      desc: "STABIL'SPORT®" 
                    },
                    { 
                      id: 'lourd', 
                      label: lang === 'ES' ? 'Urbano / Bomberos' : 'Urbain / Pompiers', 
                      thick: 7, 
                      desc: lang === 'ES' ? 'Plazas y accesos' : 'Places & parvis' 
                    }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => {
                        setUsageType(item.id as any);
                        setThicknessCm(item.thick);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        usageType === item.id
                          ? 'border-emerald-600 bg-emerald-50 text-slate-900 shadow-xs ring-2 ring-emerald-500/20'
                          : 'border-slate-200 bg-slate-50/60 hover:bg-slate-100 text-slate-700'
                      }`}
                    >
                      <div className="text-xs font-bold leading-tight">{item.label}</div>
                      <div className="text-[11px] text-slate-500 mt-1">{item.desc}</div>
                      <div className="text-[10px] font-semibold text-emerald-700 mt-1.5">
                        {lang === 'ES' ? 'Esp. rec.:' : 'Ép. reco :'} {item.thick} cm
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Épaisseur et nature du granulat */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="thickness-slider" className="text-sm font-bold text-slate-900">
                      {lang === 'ES' ? '3. Espesor compactado' : '3. Épaisseur compactée'}
                    </label>
                    <span className="font-mono text-sm font-bold text-emerald-700">{thicknessCm} cm</span>
                  </div>
                  <input
                    id="thickness-slider"
                    type="range"
                    min={4}
                    max={10}
                    step={1}
                    value={thicknessCm}
                    onChange={(e) => setThicknessCm(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                    <span>4 cm</span>
                    <span>6 cm</span>
                    <span>8 cm</span>
                    <span>10 cm</span>
                  </div>
                </div>

                <div>
                  <label htmlFor="sand-type-select" className="text-sm font-bold text-slate-900 block mb-2">
                    {lang === 'ES' ? '4. Naturaleza del árido local (0/4 o 0/6)' : '4. Nature du granulat local (0/4 ou 0/6)'}
                  </label>
                  <select
                    id="sand-type-select"
                    value={sandType}
                    onChange={(e) => setSandType(e.target.value as any)}
                    className="w-full px-3 py-2 text-xs font-semibold bg-slate-50 border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
                  >
                    {lang === 'ES' ? (
                      <>
                        <option value="calcaire">Calizo triturado (estándar de alta resistencia)</option>
                        <option value="silico-calcaire">Silíceo-calizo (muy resistente al desgaste)</option>
                        <option value="granitique">Granítico (tonalidades rosadas / ocres regionales)</option>
                      </>
                    ) : (
                      <>
                        <option value="calcaire">Calcaire concassé (standard haute tenue)</option>
                        <option value="silico-calcaire">Silico-calcaire (très résistant à l’usure)</option>
                        <option value="granitique">Granitique (teintes rosées / ocres régionales)</option>
                      </>
                    )}
                  </select>
                </div>
              </div>

              {/* Reset shortcut */}
              <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-500" />
                  {lang === 'ES' 
                    ? 'Dosificación conforme al pliego de prescripciones técnicas (CCTP) ESPORTEC' 
                    : 'Formulation conforme aux prescriptions CCTP ESPORTEC'}
                </span>
                <button
                  onClick={() => {
                    setAreaM2(850);
                    setThicknessCm(6);
                    setUsageType('sport');
                  }}
                  className="flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{lang === 'ES' ? 'Restablecer' : 'Réinitialiser'}</span>
                </button>
              </div>
            </div>

            {/* Results Column */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-slate-900 text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-lime-400">
                    {lang === 'ES' ? 'Resultados del dimensionamiento' : 'Résultats du dimensionnement'}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    {lang === 'ES' ? 'Densidad aparente' : 'Masse volumique'} : {density} t/m³
                  </span>
                </div>

                {/* Key Metric Highlight */}
                <div className="bg-slate-800/90 rounded-2xl p-5 border border-slate-700/80 mb-6">
                  <div className="text-xs text-slate-400 font-semibold mb-1">
                    {lang === 'ES' ? 'Volumen de mezcla estabilizada necesario' : 'Volume de mélange stabilisé nécessaire'}
                  </div>
                  <div className="text-4xl font-extrabold text-white tracking-tight tabular-nums">
                    {volumeM3}{' '}
                    <span className="text-lg font-normal text-slate-400">m³</span>
                  </div>
                  <div className="text-xs text-emerald-400 mt-2 flex items-center gap-1.5">
                    <Scale className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'ES' ? 'Peso total compactado' : 'Poids total compacté'} : <strong>{totalWeightTonnes} {lang === 'ES' ? 'toneladas' : 'tonnes'}</strong>
                    </span>
                  </div>
                </div>

                {/* Breakdown Grid */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                      <span className="font-semibold text-slate-200">
                        {lang === 'ES' ? "Ligante cemento de vidrio ECO'STABIL®" : 'Liant ciment de verre ECOSTABIL®'}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {binderTonnes} {lang === 'ES' ? 'toneladas' : 'tonnes'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-lime-400" />
                      <span className="font-semibold text-slate-200">
                        {lang === 'ES' ? 'Árido triturado 0/4 o 0/6' : 'Sable concassé 0/4 ou 0/6'}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-white tabular-nums">
                      {sandTonnes} {lang === 'ES' ? 'toneladas' : 'tonnes'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/50 border border-slate-700/60 text-xs">
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-emerald-400" />
                      <span className="font-semibold text-slate-200">
                        {lang === 'ES' ? 'Logística camiones volquete (28-30 t)' : 'Logistique camions bennes (28-30t)'}
                      </span>
                    </div>
                    <span className="font-mono font-bold text-emerald-400 tabular-nums">
                      ~ {trucksNeeded} {lang === 'ES' ? `camión${trucksNeeded > 1 ? 'es' : ''}` : `camion${trucksNeeded > 1 ? 's' : ''}`}
                    </span>
                  </div>
                </div>

                {/* Ecological gain badge */}
                <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-950/70 border border-emerald-700/60 text-emerald-200">
                  <div className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                    <Leaf className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>
                      {lang === 'ES' 
                        ? 'Balance ecológico frente a aglomerado asfáltico:' 
                        : 'Bilan écologique vs enrobé bitumineux :'}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-emerald-200 leading-relaxed">
                    {lang === 'ES' ? (
                      <>
                        Ahorro estimado de <strong className="text-white font-mono text-base font-extrabold">{co2SavedKg.toLocaleString('es-ES')} kg de CO₂</strong> en esta obra gracias al ligante de cemento de vidrio sin cocción de clínker (ganancia neta de 50 kg CO₂e / tonelada, hasta 5 veces menos emisiones que un aglomerado asfáltico en caliente).
                      </>
                    ) : (
                      <>
                        Économie estimée de <strong className="text-white font-mono text-base font-extrabold">{co2SavedKg.toLocaleString('fr-FR')} kg de CO₂</strong> sur ce chantier grâce au liant ciment de verre sans cuisson de clinker (gain net de 50 kg CO₂e / tonne, soit jusqu'à 5 fois moins d'émissions qu'un enrobé bitumineux à chaud).
                      </>
                    )}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-emerald-800/60 flex flex-wrap items-center justify-between gap-2 text-xs text-emerald-300 font-medium">
                    <span>
                      {lang === 'ES' ? 'Densidad normalizada:' : 'Masse volumique normalisée :'} <strong className="text-white font-mono">{density} t/m³</strong>
                    </span>
                    <span className="text-lime-300 font-semibold">
                      {lang === 'ES' ? '100% Permeable y Cero escorrentía superficial' : '100% Perméable & Zéro ruissellement'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  onClick={handleApply}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-emerald-600 via-green-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-lg shadow-emerald-700/30 transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>
                    {lang === 'ES' ? 'Solicitar presupuesto oficial con este cálculo' : 'Recevoir le devis officiel avec ce calcul'}
                  </span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-slate-400 text-center mt-2">
                  {lang === 'ES' 
                    ? 'Completará automáticamente su solicitud para nuestro departamento técnico' 
                    : 'Pré-remplira automatiquement votre demande pour notre bureau d’études'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
