import React, { useState } from 'react';
import { Screen, MysteryCase } from '../types';
import { FEATURED_CASE } from '../data/cases';
import { sounds } from '../utils/audio';

interface ExaminationViewProps {
  mystery?: MysteryCase;
  onNavigate: (screen: Screen) => void;
  onOpenPhotoLoupe: (img: string, title: string, caption: string, notes: string) => void;
  onVerdictSubmitted: (selectedId: string) => void;
}

export const ExaminationView: React.FC<ExaminationViewProps> = ({
  mystery = FEATURED_CASE,
  onNavigate,
  onOpenPhotoLoupe,
  onVerdictSubmitted
}) => {
  const [selectedHypothesis, setSelectedHypothesis] = useState<string>(
    mystery.hypotheses[0]?.id || 'rogue-wave'
  );
  const [showHint, setShowHint] = useState(false);
  const [activeCardInspection, setActiveCardInspection] = useState<string | null>(null);

  const clues = mystery.clues.length > 0 ? mystery.clues : FEATURED_CASE.clues;
  const hypotheses = mystery.hypotheses.length > 0 ? mystery.hypotheses : FEATURED_CASE.hypotheses;

  const handleSubmit = () => {
    sounds.playStamp();
    onVerdictSubmitted(selectedHypothesis);
    onNavigate('solution');
  };

  const handleClueClick = (clue: typeof clues[0]) => {
    sounds.playTypewriter();
    setActiveCardInspection(clue.id);
    onOpenPhotoLoupe(
      clue.image,
      clue.title,
      `${clue.code} · ${clue.subtitle} (${clue.date})`,
      `${clue.anomalyTitle}: ${clue.anomalyText}`
    );
  };

  return (
    <div className="flex flex-col w-full pb-28 pt-2 max-w-md mx-auto">
      {/* Desk Ambience Vignette Container */}
      <div className="px-margin pt-space-md pb-space-xl flex flex-col gap-space-lg">
        {/* Dossier Heading Block */}
        <div className="relative bg-surface-container rounded-xl p-space-md shadow-[0_4px_16px_rgba(10,6,4,0.6)] overflow-hidden border border-outline-variant/30">
          {/* Faint paper fiber gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 pointer-events-none"></div>

          {/* Top Meta Bar & Hint Button */}
          <div className="flex items-start justify-between gap-space-sm relative z-10">
            <div className="flex flex-col min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(233,193,118,0.8)]"></span>
                <span className="font-caption-forensic text-caption-forensic text-secondary uppercase tracking-widest truncate">
                  DOSSIER INTAKE #089
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5 tracking-tight truncate">
                {mystery.title}: The Vanishing Keepers
              </h2>
            </div>
            <button 
              aria-label="Request investigative clue" 
              className="flex items-center gap-1 bg-surface-container-high hover:bg-surface-bright active:scale-95 text-secondary px-2.5 py-1.5 rounded-lg shadow-sm transition-all cursor-pointer border border-secondary/30 shrink-0" 
              onClick={() => {
                sounds.playTypewriter();
                setShowHint(!showHint);
              }}
            >
              <span className="material-symbols-outlined text-[15px]">
                {showHint ? 'close' : 'lightbulb'}
              </span>
              <span className="font-label-brass text-label-brass uppercase">Need a Hint?</span>
            </button>
          </div>

          {/* Hidden hint drawer revealed on interaction */}
          {showHint && (
            <div className="mt-space-sm p-space-sm bg-surface-container-lowest rounded-lg text-on-surface-variant font-body-sm text-body-sm relative z-10 border border-secondary/40 animate-in fade-in duration-150">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-secondary text-[16px] shrink-0 mt-0.5">help_center</span>
                <p>
                  <strong className="text-on-surface">Senior Inspector’s Lead:</strong> Examine the weather log against meteorological charts in Edinburgh. The log notes severe storm winds on Dec 14th, yet mainland maritime logs recorded utterly calm seas until the evening of the 15th.
                </p>
              </div>
            </div>
          )}

          {/* Discovery Tally Ribbon */}
          <div className="mt-space-md pt-space-sm flex items-center justify-between relative z-10 border-t border-outline-variant/30">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified</span>
              <span className="font-label-stamp text-label-stamp text-on-surface uppercase">
                {clues.length} of {clues.length} Clues Discovered
              </span>
            </div>
            <span className="bg-primary-container text-on-primary-container px-2 py-0.5 rounded font-label-stamp text-[10px] tracking-wider uppercase font-bold shadow-[0_1px_4px_rgba(139,30,30,0.4)] border border-[#b22222]">
              READY TO SOLVE!
            </span>
          </div>

          {/* Clue Meter Indicator */}
          <div className="w-full h-1.5 bg-surface-container-highest rounded-full mt-2.5 overflow-hidden flex">
            <div className="h-full bg-secondary rounded-full w-full shadow-[0_0_6px_rgba(233,193,118,0.5)]"></div>
          </div>
        </div>

        {/* Step 1: Evidence Ledger */}
        <div className="flex flex-col gap-space-sm">
          <div className="flex items-baseline justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-caption-forensic text-caption-forensic font-bold">
                1
              </span>
              <h3 className="font-title-sm text-title-sm text-on-surface">Review Examined Evidence</h3>
            </div>
            <span className="font-caption-forensic text-caption-forensic text-outline">(Tap card to inspect)</span>
          </div>

          {/* Clue Cards Stack */}
          <div className="flex flex-col gap-space-md">
            {clues.map((clue, index) => {
              const rotation = index === 1 ? '-rotate-[0.5deg]' : index === 2 ? 'rotate-[0.5deg]' : '';
              return (
                <div 
                  key={clue.id}
                  onClick={() => handleClueClick(clue)}
                  className={`evidence-card group relative bg-surface-container rounded-xl p-space-md shadow-[0_4px_12px_rgba(10,6,4,0.5)] transition-all cursor-pointer hover:bg-surface-container-high border border-outline-variant/30 ${rotation}`}
                >
                  {/* Pushpin Detail */}
                  <div className={`absolute -top-1.5 ${index === 1 ? 'right-6' : index === 2 ? 'left-10' : 'left-6'} w-3 h-3 rounded-full bg-secondary shadow-[inset_0_1px_1px_#ffffff,0_2px_4px_rgba(0,0,0,0.8)] z-20`}></div>

                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="bg-surface-container-highest text-secondary font-label-stamp text-label-stamp px-2 py-0.5 rounded">
                      ITEM #{index + 1 < 10 ? `0${index + 1}` : index + 1} INSPECTED
                    </span>
                    <span className="font-caption-forensic text-caption-forensic text-outline">
                      {clue.location ? clue.location.toUpperCase() : clue.date}
                    </span>
                  </div>

                  <div className="flex gap-space-md mt-space-xs">
                    <div className="w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-surface-container-lowest shadow-md relative">
                      <img 
                        src={clue.image} 
                        alt={clue.title} 
                        className="w-full h-full object-cover filter contrast-110 sepia-[0.3]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/70 to-transparent"></div>
                      <span className="absolute bottom-1 right-1 font-caption-forensic text-[9px] text-secondary bg-surface-container-lowest/80 px-1 rounded">
                        EXH-{String.fromCharCode(65 + index)}
                      </span>
                    </div>

                    <div className="flex flex-col justify-between flex-1 min-w-0">
                      <div>
                        <h4 className="font-title-sm text-title-sm text-on-surface leading-tight font-semibold">
                          {clue.title}
                        </h4>
                        {clue.quote && (
                          <p className="font-body-sm text-body-sm text-on-surface-variant italic mt-1 line-clamp-2">
                            {clue.quote}
                          </p>
                        )}
                      </div>

                      {/* Forensic Anomaly Tag */}
                      <div className={`mt-2 rounded p-1.5 flex items-start gap-1.5 ${
                        clue.anomalyType === 'anomaly' 
                          ? 'bg-error-container/20 text-error' 
                          : clue.anomalyType === 'critical'
                          ? 'bg-surface-container-highest text-on-surface-variant'
                          : 'bg-surface-container-highest text-on-surface-variant'
                      }`}>
                        <span className={`material-symbols-outlined text-[14px] shrink-0 mt-0.5 ${
                          clue.anomalyType === 'anomaly' ? 'text-error' : 'text-secondary'
                        }`}>
                          {clue.anomalyType === 'anomaly' ? 'warning' : clue.anomalyType === 'critical' ? 'pin_drop' : 'water'}
                        </span>
                        <span className="font-caption-forensic text-caption-forensic leading-tight">
                          <strong>{clue.anomalyTitle}:</strong> {clue.anomalyText}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Form Your Theory */}
        <div className="flex flex-col gap-space-sm mt-space-xs">
          <div className="flex items-baseline justify-between px-1">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-surface-container-high text-secondary flex items-center justify-center font-caption-forensic text-caption-forensic font-bold">
                2
              </span>
              <h3 className="font-title-sm text-title-sm text-on-surface">Form Your Theory</h3>
            </div>
            <span className="font-caption-forensic text-caption-forensic text-secondary uppercase font-bold">
              Inquest Verdict
            </span>
          </div>

          {/* Theory Prompt Card */}
          <div className="bg-surface-container rounded-xl p-space-md shadow-[0_4px_16px_rgba(10,6,4,0.6)] border border-outline-variant/30">
            <p className="font-headline-md text-headline-md text-on-surface leading-snug mb-space-md">
              Based on the evidence, what is your verdict?
            </p>

            {/* Radio Options Container */}
            <fieldset className="flex flex-col gap-space-sm" id="theory-options">
              <legend className="sr-only">Investigative Verdict Options</legend>

              {hypotheses.map((hypo) => {
                const isSelected = selectedHypothesis === hypo.id;
                return (
                  <label 
                    key={hypo.id}
                    onClick={() => {
                      sounds.playTypewriter();
                      setSelectedHypothesis(hypo.id);
                    }}
                    className={`theory-option relative flex items-start gap-space-md p-space-md rounded-lg cursor-pointer transition-all shadow-sm border ${
                      isSelected 
                        ? 'bg-surface-container-high border-secondary/60 opacity-100' 
                        : 'bg-surface-container-low border-transparent opacity-80 hover:bg-surface-container-high'
                    }`}
                  >
                    <input 
                      type="radio" 
                      name="verdict" 
                      value={hypo.id} 
                      checked={isSelected}
                      onChange={() => setSelectedHypothesis(hypo.id)}
                      className="sr-only" 
                    />
                    <div className="custom-radio w-5 h-5 rounded-full bg-surface-container-lowest flex items-center justify-center shrink-0 mt-0.5 shadow-[inset_0_1px_3px_rgba(0,0,0,0.7)] border border-outline-variant/50">
                      <span className={`radio-core w-2.5 h-2.5 rounded-full transition-all ${
                        isSelected ? 'bg-secondary shadow-[0_0_6px_rgba(233,193,118,0.9)]' : 'bg-transparent'
                      }`}></span>
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-body-lg text-body-lg text-on-surface font-semibold leading-snug">
                          {hypo.title}
                        </span>
                        <span className={`font-caption-forensic text-caption-forensic shrink-0 font-bold bg-surface-container-lowest px-1.5 py-0.5 rounded border border-outline-variant/20 ${
                          isSelected ? 'text-secondary' : 'text-outline'
                        }`}>
                          {hypo.agreePercentage}% AGREE
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 leading-normal">
                        {hypo.description}
                      </p>
                    </div>
                  </label>
                );
              })}
            </fieldset>
          </div>
        </div>

        {/* Bottom Execution Zone */}
        <div className="flex flex-col gap-space-sm pt-space-xs">
          {/* Primary Stamp Action Button */}
          <button 
            className="w-full bg-primary-container hover:bg-on-primary-fixed-variant active:scale-[0.98] text-primary-fixed font-title-sm text-title-sm py-4 px-space-md rounded-xl shadow-[0_4px_16px_rgba(139,30,30,0.6)] flex items-center justify-center gap-2.5 transition-all uppercase tracking-wide cursor-pointer font-bold border border-[#b22222]" 
            id="submit-verdict-btn"
            onClick={handleSubmit}
          >
            <span className="material-symbols-outlined text-[20px]">gavel</span>
            <span>Submit Verdict &amp; Reveal Solution</span>
          </button>

          {/* Reassuring Footer Disclaimer */}
          <p className="font-caption-forensic text-caption-forensic text-outline text-center px-space-md leading-relaxed">
            Don’t worry—you can read the verified historical solution even if your guess is incorrect.
          </p>
        </div>
      </div>
    </div>
  );
};
