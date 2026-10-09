import React, { useState } from 'react';
import { Screen } from '../types';
import { CASE_IMAGES } from '../data/cases';
import { sounds } from '../utils/audio';

interface BriefingViewProps {
  onNavigate: (screen: Screen) => void;
}

export const BriefingView: React.FC<BriefingViewProps> = ({ onNavigate }) => {
  const [isWatchOpen, setIsWatchOpen] = useState(false);

  const toggleWatch = () => {
    sounds.playStamp();
    setIsWatchOpen(!isWatchOpen);
  };

  return (
    <div className="flex flex-col w-full text-on-surface px-margin pb-24 pt-2 max-w-md mx-auto">
      {/* Desk Header: Induction & Skip */}
      <div className="flex items-center justify-between py-space-sm">
        <div className="flex items-center gap-space-xs">
          <span className="w-2 h-2 rounded-full bg-secondary shadow-sm inline-block"></span>
          <span className="font-caption-forensic text-caption-forensic text-on-surface-variant uppercase tracking-widest">
            BUREAU INDUCTION • PROTOCOL 01-B
          </span>
        </div>
        <button 
          className="font-caption-forensic text-caption-forensic text-secondary hover:text-tertiary-fixed underline transition-colors cursor-pointer"
          type="button"
          onClick={() => {
            sounds.playTypewriter();
            onNavigate('explore');
          }}
        >
          Skip Briefing
        </button>
      </div>

      {/* Warm Lamp Framing / Case Title Block */}
      <div className="relative mt-space-sm p-space-md bg-surface-container rounded-xl shadow-md overflow-hidden border border-outline-variant/30">
        <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-secondary/10 blur-xl pointer-events-none"></div>
        <div className="flex items-center gap-space-xs mb-space-xs">
          <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1", fontSize: '18px' }}>
            local_library
          </span>
          <span className="font-label-brass text-label-brass text-secondary uppercase">Dossier Briefing</span>
        </div>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight">
          How Curio Works
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
          Step into the study, illuminate the desk lamp, and crack real historical enigmas in three straightforward phases.
        </p>

        {/* Progress indicator */}
        <div className="mt-space-md pt-space-sm flex items-center justify-between border-t border-outline-variant/30">
          <span className="font-caption-forensic text-caption-forensic text-tertiary">
            PHASE STATUS: PROTOCOL INITIALIZATION
          </span>
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-1.5 rounded-full bg-secondary shadow-sm"></span>
            <span className="w-2 h-1.5 rounded-full bg-surface-container-highest"></span>
            <span className="w-2 h-1.5 rounded-full bg-surface-container-highest"></span>
          </div>
        </div>
      </div>

      {/* Tactile 3-Step Evidence Dossiers */}
      <div className="flex flex-col gap-space-md mt-space-lg">
        {/* Card 1: Discover */}
        <div className="relative bg-surface-container-high rounded-xl p-space-md shadow-md transform -rotate-[0.5deg] border border-outline-variant/20">
          <div className="absolute -top-2 left-6 px-2 py-0.5 bg-secondary text-on-secondary rounded-sm font-label-stamp text-label-stamp shadow-sm flex items-center gap-1">
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>inventory_2</span>
            DAILY FILE #01
          </div>
          <div className="flex gap-space-md items-start mt-space-xs">
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 shadow-inner bg-surface-container-highest">
              <img 
                className="w-full h-full object-cover filter sepia-[0.3]" 
                alt="Open vintage case folder" 
                src={CASE_IMAGES.briefingDesk} 
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h2 className="font-title-sm text-title-sm text-on-surface">
                1. Discover Your Case
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Every day, choose an unsolved real-world mystery or historical enigma based on your mood and available time.
              </p>
            </div>
          </div>
          <div className="mt-space-sm pt-space-xs flex items-center justify-between text-outline border-t border-outline-variant/20">
            <span className="font-caption-forensic text-caption-forensic text-tertiary">EST. TIME: 5–8 MINS</span>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">DAILY MORNING DELIVERY</span>
          </div>
        </div>

        {/* Card 2: Inspect Clues */}
        <div className="relative bg-surface-container-high rounded-xl p-space-md shadow-md transform rotate-[0.7deg] border border-outline-variant/20">
          <div className="absolute -top-2 left-6 px-2 py-0.5 bg-tertiary-container text-on-tertiary rounded-sm font-label-stamp text-label-stamp shadow-sm flex items-center gap-1">
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>search_check</span>
            DOSSIER CLUE-SHEET
          </div>
          <div className="flex gap-space-md items-start mt-space-xs">
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 shadow-inner bg-surface-container-highest">
              <img 
                className="w-full h-full object-cover filter sepia-[0.3]" 
                alt="Vintage magnifying glass on desk" 
                src={CASE_IMAGES.briefingLoupe} 
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h2 className="font-title-sm text-title-sm text-on-surface">
                2. Inspect Clues &amp; Evidence
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Examine telegrams, torn journal entries, and crime scene photos. Collect key facts and physical anomalies one by one.
              </p>
            </div>
          </div>
          <div className="mt-space-sm pt-space-xs flex items-center justify-between text-outline border-t border-outline-variant/20">
            <span className="font-caption-forensic text-caption-forensic text-tertiary">INTERACTIVE ARCHIVES</span>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">FORENSIC MAGNIFICATION</span>
          </div>
        </div>

        {/* Card 3: Form Your Theory */}
        <div className="relative bg-surface-container-high rounded-xl p-space-md shadow-md transform -rotate-[0.4deg] border border-outline-variant/20">
          <div className="absolute -top-2 left-6 px-2 py-0.5 bg-primary-container text-on-primary-container rounded-sm font-label-stamp text-label-stamp shadow-sm flex items-center gap-1">
            <span className="material-symbols-outlined" style={{ fontSize: '13px' }}>gavel</span>
            VERDICT SEAL
          </div>
          <div className="flex gap-space-md items-start mt-space-xs">
            <div className="w-16 h-16 rounded-lg overflow-hidden shrink-0 shadow-inner bg-surface-container-highest">
              <img 
                className="w-full h-full object-cover filter sepia-[0.3]" 
                alt="Evidence corkboard with red yarn" 
                src={CASE_IMAGES.briefingCorkboard} 
              />
            </div>
            <div className="flex flex-col min-w-0">
              <h2 className="font-title-sm text-title-sm text-on-surface">
                3. Form Your Theory &amp; Solve
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Connect the clues, pick your verdict from competing suspect theories, and immediately reveal the documented truth.
              </p>
            </div>
          </div>
          <div className="mt-space-sm pt-space-xs flex items-center justify-between text-outline border-t border-outline-variant/20">
            <span className="font-caption-forensic text-caption-forensic text-tertiary">3 HYPOTHESES</span>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">HISTORICAL DECLASSIFICATION</span>
          </div>
        </div>
      </div>

      {/* Interactive Moment of Delight: Evidence Exhibit Loupe Test */}
      <div className="mt-space-lg bg-surface-container-lowest rounded-xl p-space-md shadow-lg relative overflow-hidden border border-secondary/30">
        <div className="flex items-center justify-between mb-space-xs">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '16px' }}>biotech</span>
            <span className="font-label-brass text-label-brass text-secondary uppercase">
              Mini-Field Test • Exhibit #14
            </span>
          </div>
          <span className={`font-caption-forensic text-caption-forensic ${isWatchOpen ? 'text-secondary font-bold' : 'text-on-surface-variant'}`}>
            {isWatchOpen ? 'CLUE DISCOVERED (+10 EXP)' : 'TAP WATCH TO INSPECT'}
          </span>
        </div>

        {/* Flippable / Interactive Clue Artifact */}
        <div 
          className="cursor-pointer bg-surface-container p-space-md rounded-lg shadow-sm transition-all duration-300 flex items-center gap-space-md select-none active:scale-[0.98] border border-outline-variant/40 hover:border-secondary/50"
          onClick={toggleWatch}
        >
          <div className="relative w-16 h-16 shrink-0 rounded-full bg-surface-container-high flex items-center justify-center shadow-inner overflow-hidden border border-secondary/40">
            {!isWatchOpen ? (
              <div className="flex flex-col items-center justify-center transition-opacity duration-300">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '34px' }}>schedule</span>
                <span className="font-caption-forensic text-[9px] text-tertiary-fixed leading-none mt-0.5">11:42 PM</span>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container p-1 text-center animate-in zoom-in-75 duration-200">
                <span className="material-symbols-outlined text-secondary" style={{ fontSize: '20px' }}>fingerprint</span>
                <span className="font-caption-forensic text-[8px] uppercase tracking-tighter leading-none mt-0.5 font-bold">
                  ENGRAVED: "V.H."
                </span>
              </div>
            )}
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-title-sm text-title-sm text-on-surface">Tarnished Pocket Watch</span>
              <span className={`px-1.5 py-0.5 rounded font-caption-forensic text-[10px] ${
                isWatchOpen ? 'bg-primary-container text-primary font-bold' : 'bg-surface-container-highest text-secondary'
              }`}>
                {isWatchOpen ? 'CASE OPENED' : 'LID CLOSED'}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
              {isWatchOpen
                ? 'Hidden inscription revealed: "To V.H. — Paris, 1912". Saltwater residue found behind the dial spring.'
                : 'Frozen at 11:42 PM on the night of the conservatory fire. Tap to pry open the watchcase.'}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Action Center */}
      <div className="mt-space-lg flex flex-col gap-space-sm items-stretch">
        {/* Primary Crimson Action Button */}
        <button 
          className="w-full py-space-md px-space-lg bg-primary-container hover:bg-primary-container/90 active:scale-[0.98] text-primary-fixed rounded-xl shadow-lg transition-transform flex items-center justify-center gap-2 cursor-pointer"
          type="button"
          onClick={() => {
            sounds.playStamp();
            onNavigate('detail');
          }}
        >
          <span className="font-label-brass text-label-brass tracking-wider uppercase text-center font-bold">
            Begin My First Mystery
          </span>
          <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>arrow_forward</span>
        </button>

        {/* Secondary Navigation */}
        <button 
          className="w-full py-space-xs text-center font-caption-forensic text-caption-forensic text-secondary hover:text-tertiary transition-colors cursor-pointer"
          type="button"
          onClick={() => {
            sounds.playTypewriter();
            onNavigate('explore');
          }}
        >
          Browse All Case Categories &amp; Archives →
        </button>
      </div>
    </div>
  );
};
