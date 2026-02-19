// Design system color tokens
export type ColorToken = 'navy' | 'teal' | 'mint' | 'off-white' | 'light-gray' | 'mid-gray' | 'dark-text' | 'red' | 'amber' | 'green' | 'white' | 'purple';

// Slide types for the new training presentation
export type SlideType = 'title' | 'stats' | 'threats' | 'two-column' | 'steps' | 'updates' | 'backup' | 'grid' | 'checklist';

// Base slide interface
export interface BaseSlide {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  presenterScript?: string;
  audioPath?: string;
}

// Slide 1: Title Slide
export interface TitleSlide extends BaseSlide {
  type: 'title';
  headlineLine1: string;
  headlineLine2: string;
  headlineLine2Color: ColorToken;
  tagline: string;
  sourceAttribution: string;
  businessName: string;
  date: string;
  duration: string;
  background: 'navy';
  accentBarColor: ColorToken;
}

// Slide 2: Stats Slide
export interface StatCard {
  accentColor: ColorToken;
  stat: string;
  description: string;
}

export interface StatsSlide extends BaseSlide {
  type: 'stats';
  statCards: StatCard[];
  keyMessage: string;
  keyMessageIcon?: string;
  background: 'off-white';
  accentBarColor: ColorToken;
}

// Slide 3: Threats Slide
export interface ThreatRow {
  accentColor: ColorToken;
  icon: string;
  title: string;
  description: string;
  exampleQuote: string;
}

export interface ThreatsSlide extends BaseSlide {
  type: 'threats';
  threatRows: ThreatRow[];
  background: 'off-white';
  accentBarColor: ColorToken;
}

// Slide 4, 6, 9, 10: Two-Column Slide
export interface ColumnContent {
  headerColor: ColorToken;
  headerIcon?: string;
  headerText: string;
  items: string[];
}

export interface TwoColumnSlide extends BaseSlide {
  type: 'two-column';
  leftColumn: ColumnContent;
  rightColumn: ColumnContent;
  background: 'off-white';
  accentBarColor: ColorToken;
}

// Slide 5: Steps Slide (Emergency Response)
export interface StepCard {
  color: ColorToken;
  icon: string;
  title: string;
  description: string;
}

export interface StepsSlide extends BaseSlide {
  type: 'steps';
  steps: StepCard[];
  footerTip?: string;
  background: 'navy';
  accentBarColor: ColorToken;
}

// Slide 7: Updates Slide
export interface UpdatesSlide extends BaseSlide {
  type: 'updates';
  leftCardTitle: string;
  leftCardItems: string[];
  leftCardAccentColor: ColorToken;
  rightCardTitle: string;
  rightCardItems: string[];
  rightCardAccentColor: ColorToken;
  centerVisualText: string[];
  tipBanner: string;
  background: 'off-white';
  accentBarColor: ColorToken;
}

// Slide 8: Backup Slide
export interface BackupCard {
  circleColor: ColorToken;
  number: string;
  label: string;
  description: string;
}

export interface BackupSlide extends BaseSlide {
  type: 'backup';
  backupCards: BackupCard[];
  ruleLabel: string;
  warningBanner: string;
  background: 'off-white';
  accentBarColor: ColorToken;
}

// Slide 11: Grid Slide
export interface GridCard {
  accentColor: ColorToken;
  title: string;
  bodyText: string;
}

export interface GridSlide extends BaseSlide {
  type: 'grid';
  gridCards: GridCard[];
  background: 'off-white';
  accentBarColor: ColorToken;
}

// Slide 12: Checklist Slide
export interface ChecklistItem {
  title: string;
  detail: string;
}

export interface ChecklistSlide extends BaseSlide {
  type: 'checklist';
  checklistItems: ChecklistItem[];
  footerText: string;
  background: 'navy';
  accentBarColor: ColorToken;
}

// Union type for all slide types
export type TrainingSlide = 
  | TitleSlide 
  | StatsSlide 
  | ThreatsSlide 
  | TwoColumnSlide 
  | StepsSlide 
  | UpdatesSlide 
  | BackupSlide 
  | GridSlide 
  | ChecklistSlide;

// Training state for progress tracking
export interface TrainingState {
  currentSlide: number;
  showPresenterNotes: boolean;
  isPlaying: boolean;
  isCompleted: boolean;
  completedAt?: string;
}

export const TRAINING_STORAGE_KEY = 'cybersec-training-progress';

// Color token to CSS values mapping
export const colorValues: Record<ColorToken, string> = {
  'navy': '#0D1B2A',
  'teal': '#028090',
  'mint': '#02C39A',
  'off-white': '#F4F8FB',
  'light-gray': '#E8EFF5',
  'mid-gray': '#8BA0B2',
  'dark-text': '#1A2B3C',
  'red': '#D62839',
  'amber': '#F4A261',
  'green': '#2D9E6B',
  'white': '#FFFFFF',
  'purple': '#7C5CBF',
};
