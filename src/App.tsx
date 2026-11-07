import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { PavementShowcaseSection } from './components/PavementShowcaseSection';
import { ProductSpotlight } from './components/ProductSpotlight';
import { EcoInnovationSection } from './components/EcoInnovationSection';
import { SimulatorCalculator } from './components/SimulatorCalculator';
import { ComparisonTableSection } from './components/ComparisonTableSection';
import { ProjectsGallery } from './components/ProjectsGallery';
import { PrescribersHub } from './components/PrescribersHub';
import { AboutSection } from './components/AboutSection';
import { FaqSection } from './components/FaqSection';
import { ContactQuoteSection } from './components/ContactQuoteSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { TechnicalSheetModal } from './components/TechnicalSheetModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { VideoModal } from './components/VideoModal';
import { SolutionItem, RealisationProject, PrescriberDoc } from './types';
import { SOLUTIONS } from './data/mockData';
import { getLocalizedSolutions } from './data/spanishContent';
import { Language } from './data/translations';

export default function App() {
  const [lang, setLang] = useState<Language>('FR');
  const [activeSection, setActiveSection] = useState<string>('accueil');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);
  const [quoteModalSubject, setQuoteModalSubject] = useState<string>('Demande générale');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<RealisationProject | null>(null);
  const [prefilledCalculation, setPrefilledCalculation] = useState<{
    areaM2: number;
    thicknessCm: number;
    usageLabel: string;
    volumeM3: number;
    totalWeightTonnes: number;
    binderTonnes: number;
    trucksNeeded: number;
  } | null>(null);

  const handleOpenQuoteModal = (subject?: string) => {
    setQuoteModalSubject(subject || (lang === 'ES' ? 'Solicitud general de estudio' : 'Demande générale d’étude'));
    setIsQuoteModalOpen(true);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'accueil') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleSelectSolution = (solution: SolutionItem) => {
    setSelectedSolution(solution);
  };

  const handleOpenProductSheet = (productId: string) => {
    const list = getLocalizedSolutions(lang);
    let sol = list.find((s) => s.id === productId);
    if (!sol) {
      if (productId === 'stabil-sport') {
        sol = list.find((s) => s.id === 'stabilises-sportifs');
      } else if (productId === 'stabipaq' || productId === 'stabil-paysage') {
        sol = list.find((s) => s.id === 'stabipaq');
      } else if (productId === 'enverr-paq') {
        sol = list.find((s) => s.id === 'enverr-paq');
      } else if (productId === 'decoverr') {
        sol = list.find((s) => s.id === 'decoverr');
      } else {
        sol = list[0];
      }
    }
    if (sol) {
      setSelectedSolution(sol);
    }
  };

  const handleApplyCalculation = (details: {
    areaM2: number;
    thicknessCm: number;
    usageLabel: string;
    volumeM3: number;
    totalWeightTonnes: number;
    binderTonnes: number;
    trucksNeeded: number;
  }) => {
    setPrefilledCalculation(details);
    handleNavigate('contact');
  };

  const handleDownloadDoc = (doc: PrescriberDoc) => {
    handleOpenQuoteModal(lang === 'ES' ? `Descarga : ${doc.title}` : `Téléchargement : ${doc.title}`);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-emerald-600 selection:text-white">
      {/* Navigation Top Bar */}
      <Navbar
        onOpenQuoteModal={handleOpenQuoteModal}
        activeSection={activeSection}
        onNavigate={handleNavigate}
        currentLang={lang}
        onSelectLang={setLang}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onDiscoverSolutions={() => handleNavigate('solutions')}
          onOpenCalculator={() => handleNavigate('calculateur')}
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenVideoModal={() => setIsVideoModalOpen(true)}
          lang={lang}
        />

        {/* Solutions Section */}
        <SolutionsSection
          onSelectSolution={handleSelectSolution}
          onOpenQuoteModal={handleOpenQuoteModal}
          lang={lang}
        />

        {/* Real Visual Showcase: À quoi ressemble un sol ESPORTEC ? */}
        <PavementShowcaseSection
          onOpenQuoteModal={handleOpenQuoteModal}
          lang={lang}
        />

        {/* Why Choose Us & Featured Product Spotlight */}
        <ProductSpotlight
          onOpenProductSheet={handleOpenProductSheet}
          onOpenQuoteModal={handleOpenQuoteModal}
          lang={lang}
        />

        {/* Eco-Innovation, Glass Cement & 3 Phases R&D */}
        <EcoInnovationSection
          onOpenQuoteModal={handleOpenQuoteModal}
          lang={lang}
        />

        {/* Simulator & Material Estimator */}
        <SimulatorCalculator
          onApplyCalculation={handleApplyCalculation}
          lang={lang}
        />

        {/* Arguments & Competitive Comparison Table */}
        <ComparisonTableSection
          onOpenQuoteModal={handleOpenQuoteModal}
          lang={lang}
        />

        {/* Realisations Gallery */}
        <ProjectsGallery
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenQuoteModal={handleOpenQuoteModal}
          lang={lang}
        />

        {/* Prescribers Hub (Bureaux d'études, Mairies, Architectes, TP) */}
        <PrescribersHub
          onOpenQuoteModal={handleOpenQuoteModal}
          onDownloadDoc={handleDownloadDoc}
          lang={lang}
        />

        {/* About ESPORTEC (1997, BRGM, European expansion) */}
        <AboutSection
          onOpenQuoteModal={handleOpenQuoteModal}
          lang={lang}
        />

        {/* FAQ Accordion Section (ECOSTABIL, Perméabilité, Livraisons en bennes) */}
        <FaqSection
          onOpenQuoteModal={handleOpenQuoteModal}
          onNavigateToContact={() => handleNavigate('contact')}
          lang={lang}
        />

        {/* Contact & Quote Request Form */}
        <ContactQuoteSection
          initialSubject={quoteModalSubject}
          prefilledCalculation={prefilledCalculation}
          lang={lang}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigate={handleNavigate}
        lang={lang}
      />

      {/* Quick Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialSubject={quoteModalSubject}
        lang={lang}
      />

      {/* Technical Sheet & CCTP Modal */}
      <TechnicalSheetModal
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
        onRequestQuote={(productName) => handleOpenQuoteModal(lang === 'ES' ? `Presupuesto para ${productName}` : `Devis pour ${productName}`)}
        lang={lang}
      />

      {/* Realisation Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onRequestQuote={(subject) => handleOpenQuoteModal(subject)}
        lang={lang}
      />

      {/* 25s Process Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
