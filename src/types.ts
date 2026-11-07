export type SolutionCategory = 'urbain' | 'paysager' | 'sportif' | 'liant';

export interface SolutionItem {
  id: string;
  title: string;
  category: SolutionCategory;
  subtitle: string;
  description: string;
  applications: string[];
  thickness: string;
  permeability: string;
  bearingCapacity: string;
  ecologicalBenefits: string[];
  badge: string;
  icon: string;
  imageAlt: string;
}

export interface RealisationProject {
  id: string;
  title: string;
  category: 'urbain' | 'paysager' | 'sportif' | 'multisports' | 'petanque' | 'football';
  location: string;
  department: string;
  region: string;
  surface: string;
  year: string;
  productUsed: string;
  description: string;
  highlights: string[];
}

export interface CalculatorState {
  areaM2: number;
  thicknessCm: number;
  usageType: 'pieton' | 'velo' | 'sport' | 'lourd';
  sandType: 'calcaire' | 'silico-calcaire' | 'granitique';
}

export interface CalculationResult {
  volumeM3: number;
  totalWeightTonnes: number;
  binderTonnes: number;
  sandTonnes: number;
  trucksNeeded: number;
  co2SavedKg: number;
}

export interface PrescriberDoc {
  id: string;
  title: string;
  targetAudience: string;
  pages: number;
  format: string;
  description: string;
  downloadCount: number;
}
