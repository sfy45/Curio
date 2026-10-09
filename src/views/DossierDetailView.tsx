import React from 'react';
import { Screen, MysteryCase } from '../types';
import { FEATURED_CASE, CASE_IMAGES } from '../data/cases';
import { sounds } from '../utils/audio';

interface DossierDetailViewProps {
  mystery?: MysteryCase;
  onNavigate: (screen: Screen) => void;
  onOpenPhotoLoupe: (img: string, title: string, caption: string) => void;
}

export const DossierDetailView: React.FC<DossierDetailViewProps> = ({
  mystery = FEATURED_CASE,
  onNavigate,
  onOpenPhotoLoupe
}) => {
  const handleOpenEvidence = () => {
    sounds.playStamp();
    onNavigate('examination');
  };

  const plateImg = mystery.plateImage || CASE_IMAGES.daguerreotypePlate;

  return (
    <div className="flex flex-col w-full pb-28 pt-2 max-w-md mx-auto">
      {/* Case Briefing Breadcrumb & Quick Reference Header */}
      <div className="px-margin pt-4 pb-2 flex items-center justify-between">
        <button
          onClick={() => { sounds.playTypewriter(); onNavigate('explore'); }}
          className="flex items-center gap-space-xs text-secondary hover:text-secondary-fixed transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined text-[16px]">folder_open</span>
          <span className="font-caption-forensic text-caption-forensic tracking-widest uppercase text-secondary">
            Back to Mysteries
          </span>
          <span className="text-outline-variant font-caption-forensic text-caption-forensic">|</span>
          <span className="font-caption-forensic text-caption-forensic tracking-widest text-outline">
            Case File #089
          </span>
        </button>
        <div className="flex items-center gap-1 bg-surface-container-high px-2 py-0.5 rounded border border-secondary/20">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
          <span className="font-caption-forensic text-caption-forensic uppercase tracking-wider text-secondary">
            Archival Unsealed
          </span>
        </div>
      </div>

      {/* Hero Evidence Folder Title Block */}
      <section className="px-margin pt-2 pb-4">
        <div className="flex items-center gap-space-xs mb-1.5">
          <span className="material-symbols-outlined text-outline text-[14px]">history_edu</span>
          <p className="font-caption-forensic text-caption-forensic tracking-widest text-outline uppercase">
            {mystery.location} • Archival Cold File
          </p>
        </div>
        <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight leading-tight">
          {mystery.title}
        </h2>

        {/* Case Tags / Badges Bar */}
        <div className="flex flex-wrap items-center gap-space-xs mt-3">
          <div className="flex items-center gap-1 bg-surface-container-high px-2.5 py-1 rounded-sm shadow-sm border border-outline-variant/30">
            <span className="material-symbols-outlined text-[14px] text-secondary">verified_user</span>
            <span className="font-label-brass text-label-brass text-secondary uppercase tracking-widest">
              {mystery.difficulty}
            </span>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-high px-2.5 py-1 rounded-sm shadow-sm border border-outline-variant/30">
            <span className="material-symbols-outlined text-[14px] text-tertiary">inventory_2</span>
            <span className="font-label-brass text-label-brass text-tertiary uppercase tracking-widest">
              {mystery.cluesCount} Core Clues
            </span>
          </div>
          <div className="flex items-center gap-1 bg-surface-container-high px-2.5 py-1 rounded-sm shadow-sm border border-outline-variant/30">
            <span className="material-symbols-outlined text-[14px] text-primary">hourglass_bottom</span>
            <span className="font-label-brass text-label-brass text-primary uppercase tracking-widest">
              {mystery.estimatedMinutes} Mins to Solve
            </span>
          </div>
        </div>
      </section>

      {/* Archival Plate IV Polaroid / Photographic Evidence Plate */}
      <section className="px-margin my-2 relative">
        <div 
          onClick={() => {
            sounds.playTypewriter();
            onOpenPhotoLoupe(plateImg, mystery.title, mystery.plateCaption || 'Archival Daguerreotype Plate');
          }}
          className="relative bg-surface-container-highest p-2.5 pb-4 rounded-sm shadow-[0_4px_16px_rgba(10,6,4,0.6)] transform -rotate-1 transition-transform hover:rotate-0 cursor-pointer border border-outline-variant/40"
        >
          {/* Simulated Brass Paperclip Top-Left */}
          <div className="absolute -top-2 left-6 z-20 flex items-center justify-center">
            <div className="w-4 h-9 bg-secondary-fixed-dim rounded-full shadow-md flex items-center justify-center border border-surface-container-lowest">
              <div className="w-2.5 h-7 bg-surface-container-lowest rounded-full"></div>
            </div>
          </div>
          {/* Stamp in corner */}
          <div className="absolute top-4 right-4 z-10 px-2 py-0.5 bg-primary-container/85 rounded-sm transform rotate-6 pointer-events-none shadow">
            <span className="font-label-stamp text-label-stamp text-on-primary uppercase tracking-widest">
              EXHIBIT #IV
            </span>
          </div>
          {/* Photo Plate Frame */}
          <div className="relative w-full h-52 overflow-hidden rounded-sm bg-surface-container-lowest">
            <img 
              className="w-full h-full object-cover filter contrast-125 sepia brightness-90 hover:scale-105 transition-transform duration-700" 
              alt="Archival Daguerreotype Plate" 
              src={plateImg}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 via-transparent to-transparent pointer-events-none"></div>
            <div className="absolute bottom-2 right-2 bg-surface-container-lowest/80 px-2 py-0.5 rounded text-[10px] text-secondary flex items-center gap-1 font-caption-forensic">
              <span className="material-symbols-outlined text-[13px]">zoom_in</span>
              <span>TAP TO MAGNIFY</span>
            </div>
          </div>
          {/* Plate Description Caption */}
          <div className="mt-2.5 flex items-center justify-between text-outline">
            <span className="font-caption-forensic text-caption-forensic tracking-widest uppercase truncate max-w-[240px]">
              {mystery.plateCaption || 'PLATE IV: FLANNAN ISLES LIGHT (OUTER HEBRIDES)'}
            </span>
            <span className="font-caption-forensic text-caption-forensic text-tertiary">
              {mystery.era}
            </span>
          </div>
        </div>
      </section>

      {/* Confidential Intake Summary Parchment Card */}
      <section className="px-margin my-4 relative">
        <div className="relative bg-tertiary-fixed text-on-tertiary-container rounded-sm p-4 shadow-[0_4px_12px_rgba(10,6,4,0.45)] transform rotate-0.5 border border-[#c2b083]">
          {/* Wax Stamp Ribbon / Confidential Ribbon Top-Right */}
          <div className="absolute -top-3 right-5 z-20">
            <div className="bg-primary-container text-on-primary px-2.5 py-0.5 rounded shadow-md transform -rotate-3 flex items-center gap-1">
              <span className="material-symbols-outlined text-[13px]">lock</span>
              <span className="font-label-stamp text-label-stamp tracking-widest uppercase">RESTRICTED</span>
            </div>
          </div>
          <div className="flex items-center gap-2 mb-2 pb-1.5 bg-tertiary-container/20 rounded px-1">
            <span className="material-symbols-outlined text-on-tertiary text-[18px]">description</span>
            <h3 className="font-headline-md text-headline-md tracking-tight text-on-tertiary">
              {mystery.intakeReport.title}
            </h3>
          </div>
          {/* Atmospheric narrative text mimicking typewriter text on parchment */}
          <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed mb-3">
            {mystery.intakeReport.leadNarrative}
          </p>
          <p className="font-body-md text-body-md text-on-tertiary-container leading-relaxed mb-3">
            {mystery.intakeReport.secondaryNarrative}
          </p>
          <div className="p-2.5 bg-tertiary-container/30 rounded-sm border-l-2 border-primary-container">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-on-tertiary text-[16px] mt-0.5">priority_high</span>
              <p className="font-body-sm text-body-sm text-on-tertiary">
                <strong>CRITICAL ANOMALY:</strong> {mystery.intakeReport.criticalAnomaly.replace(/^CRITICAL ANOMALY:\s*/, '')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Your Inquiry Mission Card */}
      <section className="px-margin mb-4">
        <div className="bg-surface-container-high rounded-sm p-4 shadow-[0_2px_8px_rgba(10,6,4,0.4)] border border-outline-variant/30">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">assignment_turned_in</span>
              <h3 className="font-title-sm text-title-sm text-on-surface">Your Inquiry Mission</h3>
            </div>
            <span className="font-caption-forensic text-caption-forensic uppercase text-secondary tracking-widest">
              Active Brief
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {mystery.inquiryMission}
          </p>
        </div>
      </section>

      {/* Evidence Packet Recovered Clues Preview */}
      <section className="px-margin mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[16px] text-secondary">inventory</span>
            <h4 className="font-caption-forensic text-caption-forensic uppercase tracking-widest text-on-surface">
              Recovered Evidence Packet ({mystery.clues.length || 3} Items)
            </h4>
          </div>
          <span className="font-caption-forensic text-caption-forensic text-outline">Sealed Under Wax</span>
        </div>

        {/* Ledger Clue List */}
        <div className="space-y-2">
          {mystery.clues.length > 0 ? (
            mystery.clues.map((clue) => (
              <div 
                key={clue.id}
                onClick={handleOpenEvidence}
                className="flex items-center justify-between p-3 bg-surface-container rounded-sm shadow-sm hover:bg-surface-container-high transition-colors cursor-pointer border border-outline-variant/30"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-8 h-8 rounded bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
                    <span className="material-symbols-outlined text-[18px]">
                      {clue.code.includes('01-A') ? 'menu_book' : clue.code.includes('01-B') ? 'checkroom' : 'construction'}
                    </span>
                  </div>
                  <div className="min-w-0 flex flex-col">
                    <div className="flex items-center gap-1.5">
                      <span className="font-caption-forensic text-caption-forensic text-primary tracking-wider uppercase font-bold">
                        {clue.code}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                      <span className="font-caption-forensic text-caption-forensic text-outline truncate">
                        {clue.subtitle}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface truncate">{clue.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-secondary shrink-0 ml-2">
                  <span className="font-caption-forensic text-caption-forensic tracking-widest uppercase">
                    {clue.date.split(',')[0]}
                  </span>
                  <span className="material-symbols-outlined text-[16px]">lock</span>
                </div>
              </div>
            ))
          ) : (
            <div 
              onClick={handleOpenEvidence}
              className="p-3 bg-surface-container rounded-sm text-center text-secondary font-caption-forensic cursor-pointer hover:bg-surface-container-high"
            >
              Examine Primary Dossier Logs &amp; Evidence →
            </div>
          )}
        </div>
      </section>

      {/* Sticky Thumb-Reachable Primary Action Apparatus Bar */}
      <div className="fixed bottom-16 left-0 right-0 z-40 w-full px-margin pb-3 pt-2 bg-gradient-to-t from-surface via-surface/95 to-transparent">
        <div className="max-w-md mx-auto">
          <button 
            className="w-full relative flex items-center justify-center gap-2 py-3.5 px-6 rounded bg-primary-container text-on-primary font-headline-md text-headline-md tracking-wider uppercase shadow-[0_6px_20px_rgba(139,30,30,0.6)] active:scale-[0.98] transition-all cursor-pointer overflow-hidden border border-[#b22222]"
            id="begin-inquiry-btn"
            onClick={handleOpenEvidence}
          >
            {/* Subtle Wax Emboss Highlight Glow */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-primary/20 pointer-events-none"></div>
            <span className="material-symbols-outlined text-[22px] text-on-primary">key</span>
            <span className="relative z-10 text-on-primary font-bold">Open Evidence &amp; Begin Investigation</span>
            <span className="material-symbols-outlined text-[20px] text-on-primary ml-1">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
