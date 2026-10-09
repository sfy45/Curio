export type Screen = 
  | 'landing'
  | 'briefing'
  | 'explore'
  | 'detail'
  | 'examination'
  | 'solution'
  | 'archives';

export type Category = 'all' | 'detective' | 'historical' | 'strange';

export interface ClueItem {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  date: string;
  location?: string;
  image: string;
  quote?: string;
  anomalyTitle: string;
  anomalyText: string;
  anomalyType: 'anomaly' | 'critical' | 'force' | 'forensic';
  discovered: boolean;
}

export interface Hypothesis {
  id: string;
  title: string;
  description: string;
  agreePercentage: number;
  isHistoricallyAccurate: boolean;
  verdictLabel: string;
}

export interface MysteryCase {
  id: string;
  code: string;
  itemCode: string;
  title: string;
  subtitle: string;
  era: string;
  location: string;
  difficulty: 'Novice' | 'Beginner' | 'Moderate' | 'Expert' | 'Quick Bite';
  estimatedMinutes: number;
  heroImage: string;
  plateImage?: string;
  plateCaption?: string;
  category: Category;
  quote: string;
  cluesCount: number;
  cluesFound: number;
  totalClues: number;
  intakeReport: {
    title: string;
    date: string;
    leadNarrative: string;
    secondaryNarrative: string;
    criticalAnomaly: string;
  };
  inquiryMission: string;
  clues: ClueItem[];
  hypotheses: Hypothesis[];
  historicalSynthesis: {
    title: string;
    subheading: string;
    investigator: string;
    conclusion: string;
    evidenceImage: string;
    evidenceCaption: string;
    archiveRef: string;
    clueConnections: Array<{
      title: string;
      description: string;
    }>;
  };
}

export interface SleuthProfile {
  name: string;
  rank: string;
  idNumber: string;
  avatar: string;
  clearance: string;
  casesSolved: number;
  accuracy: number;
  meritPoints: number;
  streakDays: number;
  savedCases: string[];
}
