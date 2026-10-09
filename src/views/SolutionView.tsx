import React from 'react';
import { Screen, MysteryCase } from '../types';
import { FEATURED_CASE, CASE_IMAGES } from '../data/cases';
import { sounds } from '../utils/audio';

interface SolutionViewProps {
  mystery?: MysteryCase;
  selectedHypothesisId?: string;
  onNavigate: (screen: Screen) => void;
  onOpenShareModal: () => void;
  isCaseSaved: boolean;
  onToggleSaveCase: (id: string) => void;
}

export const SolutionView: React.FC<SolutionViewProps> = ({
  mystery = FEATURED_CASE,
  selectedHypothesisId = 'rogue-wave',
  onNavigate,
  onOpenShareModal,
  isCaseSaved,
  onToggleSaveCase
}) => {
  const chosenHypothesis = mystery.hypotheses.find((h) => h.id === selectedHypothesisId);
  const isCorrect = chosenHypothesis?.isHistoricallyAccurate ?? true;

  const synthesis = mystery.historicalSynthesis || FEATURED_CASE.historicalSynthesis;

  return (
    <div className="flex flex-col w-full px-margin pb-28 pt-2 space-y-space-lg max-w-md mx-auto">
      {/* Top Banner Card */}
      <div className="relative w-full overflow-hidden bg-surface-container-high rounded-xl p-space-md shadow-2xl flex flex-col items-center text-center border border-outline-variant/30">
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute -bottom-8 -left-8 w-28 h-28 bg-secondary/10 rounded-full blur-xl pointer-events-none"></div>
        
        <div className="relative z-10 flex items-center justify-center space-x-2 bg-primary-container text-on-primary-container px-3 py-1 rounded-full shadow-md transform -rotate-1 border border-[#b22222]">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
            verified
          </span>
          <span className="font-label-stamp text-label-stamp uppercase tracking-wider">
            CASE CLOSED: MYSTERY SOLVED!
          </span>
        </div>

        <div className="relative z-10 mt-space-md">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface">
            {isCorrect ? 'Verdict Accuracy: Correct!' : 'Verdict Evaluated: Declassified!'}
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-xs mx-auto">
            {isCorrect
              ? 'You deduced the true fate of the Flannan Isles lightkeepers.'
              : 'The archives have officially declassified the verified historical sequence.'}
          </p>
        </div>

        <div className="relative z-10 mt-space-md w-full bg-surface-container-lowest/80 rounded-lg p-2.5 flex items-center justify-between text-secondary border border-outline-variant/20">
          <div className="flex items-center space-x-1.5">
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              military_tech
            </span>
            <span className="font-caption-forensic text-caption-forensic uppercase font-bold text-on-surface tracking-wider">
              +150 DETECTIVE XP
            </span>
          </div>
          <div className="w-px h-3 bg-outline-variant"></div>
          <div className="flex items-center space-x-1.5">
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              local_fire_department
            </span>
            <span className="font-caption-forensic text-caption-forensic uppercase font-bold text-secondary tracking-wider">
              4-DAY SOLVING STREAK
            </span>
          </div>
        </div>
      </div>

      {/* Historical Synthesis Dossier Parchment */}
      <div className="relative w-full bg-tertiary-fixed text-on-tertiary-fixed rounded-lg p-space-md shadow-xl transform rotate-0.5 border border-[#c2b083]">
        <div className="absolute top-2 right-3 pointer-events-none transform rotate-12 opacity-85">
          <div className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded text-xs font-label-stamp uppercase tracking-widest shadow-sm">
            CONFIDENTIAL NLB 1900
          </div>
        </div>

        <div className="flex items-center space-x-2 mb-space-sm">
          <span className="material-symbols-outlined text-on-tertiary-fixed-variant text-lg">history_edu</span>
          <h2 className="font-title-sm text-title-sm tracking-wide text-on-tertiary-fixed uppercase">
            Historical Synthesis Dossier
          </h2>
        </div>

        <h3 className="font-headline-md text-headline-md text-on-tertiary-fixed mb-space-xs">
          {synthesis.title}
        </h3>
        <p className="font-caption-forensic text-caption-forensic text-on-tertiary-fixed-variant mb-space-md">
          {synthesis.subheading}
        </p>

        {/* Archival Photo Frame */}
        <div className="relative w-full mb-space-md rounded overflow-hidden shadow-md bg-surface-container-lowest border border-on-tertiary-fixed/20">
          <img 
            className="w-full h-44 object-cover filter contrast-125 sepia-[0.35]" 
            alt="West Landing Damage Assessment" 
            src={synthesis.evidenceImage || CASE_IMAGES.solutionCrane} 
          />
          <div className="bg-surface-container-highest/90 text-on-surface px-3 py-1.5 flex justify-between items-center text-xs">
            <span className="font-caption-forensic text-caption-forensic truncate">
              {synthesis.evidenceCaption}
            </span>
            <span className="font-caption-forensic text-caption-forensic text-secondary shrink-0 ml-1">
              {synthesis.archiveRef}
            </span>
          </div>
        </div>

        {/* Muirhead conclusion text */}
        <div className="bg-surface-container-lowest/15 p-space-sm rounded mb-space-md border border-on-tertiary-fixed/15">
          <p className="font-body-md text-body-md text-on-tertiary-fixed leading-relaxed">
            {synthesis.conclusion}
          </p>
        </div>

        {/* How Clues Connected */}
        <div className="space-y-space-sm">
          <h4 className="font-label-brass text-label-brass uppercase tracking-wider text-on-tertiary-fixed-variant">
            How the Clues Connected
          </h4>

          {synthesis.clueConnections.map((conn, idx) => (
            <div key={idx} className="bg-surface-container-lowest/15 p-space-sm rounded flex items-start space-x-2 border border-on-tertiary-fixed/10">
              <span className="material-symbols-outlined text-primary-container text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                link
              </span>
              <div>
                <span className="font-body-sm text-body-sm font-bold text-on-tertiary-fixed block">
                  {conn.title}
                </span>
                <span className="font-caption-forensic text-caption-forensic text-on-tertiary-fixed-variant">
                  {conn.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Investigation Ledger */}
      <div className="w-full bg-surface-container rounded-xl p-space-md shadow-lg space-y-space-md border border-outline-variant/30">
        <div className="flex items-center justify-between pb-1">
          <div className="flex items-center space-x-2">
            <span className="material-symbols-outlined text-secondary text-lg">fact_check</span>
            <span className="font-headline-md text-headline-md text-on-surface">Investigation Ledger</span>
          </div>
          <span className="font-label-stamp text-label-stamp text-secondary uppercase bg-secondary-container/50 px-2 py-0.5 rounded border border-secondary/30">
            OFFICIAL EVALUATION
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col items-center text-center border border-outline-variant/20">
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">TIME TAKEN</span>
            <span className="font-title-sm text-title-sm text-on-surface my-0.5 font-bold">6m 42s</span>
            <span className="font-caption-forensic text-caption-forensic text-secondary">Top 15% Speed</span>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col items-center text-center border border-outline-variant/20">
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">CLUES RECOVERED</span>
            <span className="font-title-sm text-title-sm text-on-surface my-0.5 font-bold">3 / 3</span>
            <span className="font-caption-forensic text-caption-forensic text-secondary">100% Found</span>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col items-center text-center border border-outline-variant/20">
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">HINTS USED</span>
            <span className="font-title-sm text-title-sm text-on-surface my-0.5 font-bold">0</span>
            <span className="font-caption-forensic text-caption-forensic text-primary">Flawless</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full space-y-space-sm pt-2">
        <button 
          className="w-full bg-primary-container text-on-primary-container py-3 px-4 rounded-xl flex items-center justify-center space-x-2 shadow-xl active:scale-[0.98] transition-transform cursor-pointer border border-[#b22222]"
          onClick={() => {
            sounds.playStamp();
            onNavigate('explore');
          }}
        >
          <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
            play_arrow
          </span>
          <span className="font-headline-md text-headline-md tracking-wide font-bold">
            Solve Another Mystery
          </span>
        </button>

        <div className="grid grid-cols-2 gap-space-sm">
          <button 
            className="w-full bg-surface-container-highest text-on-surface py-2.5 px-3 rounded-lg flex items-center justify-center space-x-1.5 shadow active:scale-[0.98] transition-transform cursor-pointer border border-outline-variant/30"
            onClick={() => {
              sounds.playStamp();
              onToggleSaveCase(mystery.id);
            }}
          >
            <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: isCaseSaved ? "'FILL' 1" : "'FILL' 0" }}>
              bookmark
            </span>
            <span className="font-label-brass text-label-brass uppercase">
              {isCaseSaved ? 'Saved to Dossier' : 'Save Case'}
            </span>
          </button>

          <button 
            className="w-full bg-surface-container-highest text-on-surface py-2.5 px-3 rounded-lg flex items-center justify-center space-x-1.5 shadow active:scale-[0.98] transition-transform cursor-pointer border border-outline-variant/30"
            onClick={() => {
              sounds.playTypewriter();
              onOpenShareModal();
            }}
          >
            <span className="material-symbols-outlined text-base">ios_share</span>
            <span className="font-label-brass text-label-brass uppercase">Share Dossier</span>
          </button>
        </div>

        <div className="text-center pt-2">
          <button 
            className="text-on-surface-variant hover:text-on-surface underline font-body-sm text-body-sm transition-colors cursor-pointer"
            onClick={() => {
              sounds.playTypewriter();
              onNavigate('detail');
            }}
          >
            Review original crime scene dossier
          </button>
        </div>
      </div>
    </div>
  );
};
