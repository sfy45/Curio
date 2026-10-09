import React, { useState } from 'react';
import { Screen } from '../types';
import { FEATURED_CASE, CASE_IMAGES } from '../data/cases';
import { sounds } from '../utils/audio';

interface LandingViewProps {
  onNavigate: (screen: Screen) => void;
  onOpenSampleSlips: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({
  onNavigate,
  onOpenSampleSlips
}) => {
  const [isUnsealing, setIsUnsealing] = useState(false);

  const handleStartCase = () => {
    sounds.playStamp();
    setIsUnsealing(true);
    setTimeout(() => {
      setIsUnsealing(false);
      onNavigate('detail');
    }, 750);
  };

  const handleOpenLedger = () => {
    sounds.playTypewriter();
    onNavigate('explore');
  };

  return (
    <div className="flex flex-col w-full text-on-surface pb-24 pt-2">
      {/* Atmospheric Lamplight Backdrop Gradient Overlay */}
      <div className="relative w-full px-margin pb-space-xl flex flex-col gap-space-lg max-w-md mx-auto">
        {/* Top Dossier Identification Header */}
        <div className="flex items-center justify-between pt-space-xs">
          <div className="inline-flex items-center gap-space-xs px-2.5 py-1 bg-surface-container-high rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label-stamp text-label-stamp uppercase tracking-widest text-secondary">
              ARCHIVE DOSSIER // DEPT-9
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-on-surface-variant font-caption-forensic text-caption-forensic bg-surface-container px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[14px]">lock_clock</span>
            <span>MIDNIGHT DROP ACTIVE</span>
          </div>
        </div>

        {/* Curio Brand Sigil & Core Headline */}
        <div className="flex flex-col items-center text-center mt-space-xs">
          {/* Vintage Compass Seal */}
          <div className="relative w-14 h-14 rounded-full bg-surface-container-highest shadow-md flex items-center justify-center mb-space-sm group">
            <div className="absolute inset-1 rounded-full bg-secondary-container/40 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                explore
              </span>
            </div>
            <div className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-primary-container rounded-full flex items-center justify-center shadow">
              <span className="material-symbols-outlined text-primary text-[10px]">priority_high</span>
            </div>
          </div>
          <span className="font-label-brass text-label-brass uppercase tracking-widest text-secondary mb-1">
            CURIO • CHRONICLE INVESTIGATIONS
          </span>
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface leading-tight max-w-xs">
            Step Into the Shoes of a Real Detective
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2 max-w-sm">
            Solve bite-sized daily mysteries, inspect vintage evidence, and discover the truth behind strange historical events.
          </p>

          {/* Primary Crimson Wax Seal CTA */}
          <button 
            className="w-full max-w-xs mt-space-md bg-primary-container hover:bg-primary-container/90 active:scale-95 transition-transform duration-100 py-3.5 px-4 rounded shadow-lg flex items-center justify-center gap-2 group cursor-pointer"
            onClick={() => {
              sounds.playStamp();
              onNavigate('briefing');
            }}
          >
            <span className="material-symbols-outlined text-primary text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="font-title-sm text-title-sm text-on-primary-container font-bold text-left leading-tight">
              Start Your First Mystery
            </span>
          </button>
          <span className="font-caption-forensic text-caption-forensic text-outline mt-1.5">
            Free to play · Takes ~8 minutes · No registration required
          </span>
        </div>

        {/* Forensic Vital Counters / Social Proof Strip */}
        <div className="grid grid-cols-2 gap-2 mt-space-xs">
          <div className="bg-surface-container-low p-3 rounded shadow-sm flex flex-col">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[16px]">folder_supervised</span>
              <span className="font-label-stamp text-label-stamp">SOLVED</span>
            </div>
            <span className="font-headline-md text-headline-md text-on-surface mt-1">45,820+</span>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">Archived cases closed</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded shadow-sm flex flex-col">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[16px]">timelapse</span>
              <span className="font-label-stamp text-label-stamp">PACE</span>
            </div>
            <span className="font-headline-md text-headline-md text-on-surface mt-1">8.4 mins</span>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">Average clearance time</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded shadow-sm flex flex-col">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              <span className="font-label-stamp text-label-stamp">VERACITY</span>
            </div>
            <span className="font-headline-md text-headline-md text-on-surface mt-1">100% Real</span>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">Primary-source history</span>
          </div>
          <div className="bg-surface-container-low p-3 rounded shadow-sm flex flex-col">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-[16px]">notifications_active</span>
              <span className="font-label-stamp text-label-stamp">CADENCE</span>
            </div>
            <span className="font-headline-md text-headline-md text-on-surface mt-1">00:00 GMT</span>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">Midnight drop cycle</span>
          </div>
        </div>

        {/* Featured Case Folder: Flannan Isles */}
        <div className="relative mt-space-sm" id="featured-dossier">
          {/* Visual Manila Tab Offset */}
          <div className="flex items-center justify-between px-2 mb-1">
            <div className="bg-surface-container-high px-3 py-1 rounded-t flex items-center gap-1.5">
              <span className="material-symbols-outlined text-secondary text-sm">label_important</span>
              <span className="font-label-stamp text-label-stamp text-on-surface">TODAY'S CLASSIFIED FILE</span>
            </div>
            <span className="font-caption-forensic text-caption-forensic text-secondary">SERIES // DEC 1900</span>
          </div>

          {/* Main Dossier Packet */}
          <div className="bg-surface-container p-4 rounded shadow-xl relative overflow-hidden flex flex-col gap-3 border border-outline-variant/30">
            {/* Archival Paperclip & Evidence Stamp Badge */}
            <div className="flex items-start justify-between">
              <div className="flex flex-col">
                <span className="font-caption-forensic text-caption-forensic text-secondary tracking-widest uppercase">
                  CASE FILE #01
                </span>
                <h2 className="font-headline-md text-headline-md text-on-surface mt-0.5">
                  Flannan Isles: The Vanishing Keepers
                </h2>
              </div>
              <div className="bg-primary-container/30 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="font-label-stamp text-label-stamp text-primary">COLD FILE</span>
              </div>
            </div>

            {/* Archival Sepia Crime Scene Image */}
            <div className="relative w-full h-44 rounded overflow-hidden bg-surface-container-highest shadow-inner">
              <img 
                alt="Flannan Isles Lighthouse Archival Evidence" 
                className="w-full h-full object-cover filter sepia-[0.3] contrast-110"
                src={FEATURED_CASE.heroImage || CASE_IMAGES.flannanCover} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
              {/* Tactile Evidence Tag Overlay */}
              <div className="absolute bottom-2 left-2 bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded flex items-center gap-1.5">
                <span className="material-symbols-outlined text-secondary text-sm">attachment</span>
                <span className="font-caption-forensic text-caption-forensic text-on-surface">
                  EXHIBIT A: EILEAN MÒR LOGBOOK
                </span>
              </div>
            </div>

            {/* Case Metadata Clues */}
            <p className="font-body-md text-body-md text-on-surface-variant">
              December 1900. The relief ship Hesperus arrives at the Outer Hebrides lighthouse. The door is bolted from the inside. A meal sits half-eaten. All three keepers have vanished without a trace into thin air.
            </p>

            {/* Metrics Row */}
            <div className="flex items-center justify-between pt-1 font-caption-forensic text-caption-forensic text-outline">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-secondary">psychology</span>
                <span>DIFFICULTY: NOVICE DETECTIVE</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px] text-secondary">schedule</span>
                <span>~7 MIN ESTIMATE</span>
              </div>
            </div>

            {/* Action Button: Brass Tactile Style */}
            <button 
              className="w-full mt-1 bg-secondary hover:bg-secondary-fixed transition-colors py-3 px-4 rounded shadow flex items-center justify-center gap-2 group active:scale-[0.99] cursor-pointer"
              id="investigate-btn" 
              onClick={handleStartCase}
            >
              <span className="material-symbols-outlined text-on-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>
                {isUnsealing ? 'progress_activity' : 'search'}
              </span>
              <span className="font-title-sm text-title-sm text-on-secondary font-bold">
                {isUnsealing ? 'Unsealing Case Files...' : 'Investigate Case #01'}
              </span>
              <span className="material-symbols-outlined text-on-secondary text-base transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Methodology Section: How Playing Works */}
        <div className="flex flex-col gap-3 mt-space-sm">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-base">architecture</span>
            <h3 className="font-title-sm text-title-sm text-on-surface">Field Methodology: How Playing Works</h3>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Tackle investigative dossiers built from actual historical logs, decoded telegraphs, and unredacted testimony.
          </p>

          {/* Step Cards */}
          <div className="flex flex-col gap-2.5">
            {/* Step 1 */}
            <div 
              onClick={() => { sounds.playTypewriter(); onNavigate('briefing'); }}
              className="bg-surface-container-low p-3.5 rounded shadow-sm flex items-start gap-3 cursor-pointer hover:bg-surface-container transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-headline-md text-headline-md shrink-0">
                1
              </div>
              <div className="flex flex-col">
                <span className="font-title-sm text-title-sm text-on-surface">Read the Unsolved Story</span>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  Begin with the initial dispatch: a timestamped narrative of an impossible historical occurrence, exactly as authorities found it.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div 
              onClick={() => { sounds.playTypewriter(); onNavigate('detail'); }}
              className="bg-surface-container-low p-3.5 rounded shadow-sm flex items-start gap-3 cursor-pointer hover:bg-surface-container transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-headline-md text-headline-md shrink-0">
                2
              </div>
              <div className="flex flex-col">
                <span className="font-title-sm text-title-sm text-on-surface">Uncover Clues & Evidence</span>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  Inspect interactive artifacts: weather barometers, torn diary leaves, ship manifests, and contradictory witness statements.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div 
              onClick={() => { sounds.playTypewriter(); onNavigate('examination'); }}
              className="bg-surface-container-low p-3.5 rounded shadow-sm flex items-start gap-3 cursor-pointer hover:bg-surface-container transition-colors"
            >
              <div className="w-7 h-7 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-headline-md text-headline-md shrink-0">
                3
              </div>
              <div className="flex flex-col">
                <span className="font-title-sm text-title-sm text-on-surface">Crack the Case & Reveal the Truth</span>
                <p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
                  Submit your deduction. Learn what leading forensic historians finally discovered decades after the panic settled.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Archival Testimonial Quotation Slip */}
        <div className="bg-surface-container-highest p-4 rounded shadow-md relative overflow-hidden flex flex-col gap-2 border-l-2 border-secondary">
          <div className="flex items-center gap-1.5 text-secondary">
            <span className="material-symbols-outlined text-[16px]">format_quote</span>
            <span className="font-label-stamp text-label-stamp">DISPATCH FROM THE FIELD</span>
          </div>
          <p className="font-body-md text-body-md text-on-surface italic">
            "Curio scratches the exact itch between a late-night historical rabbit hole and an Agatha Christie puzzle. It has completely replaced my morning crossword."
          </p>
          <div className="flex items-center justify-between pt-1">
            <span className="font-caption-forensic text-caption-forensic text-secondary">
              — Insp. M. Vance, Oxford Chronicle
            </span>
            <div className="flex text-secondary text-xs">
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
          </div>
        </div>

        {/* Bottom Action Ledger Desk Anchor */}
        <div className="flex flex-col items-center text-center gap-3 pt-space-xs pb-space-lg">
          <div className="w-8 h-0.5 bg-outline-variant/60 rounded-full"></div>
          <div className="flex flex-col items-center">
            <h4 className="font-title-sm text-title-sm text-on-surface">The Full Archive Awaits</h4>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mt-1">
              Explore past cold cases from the 1890s through 1970s. New unsolved dossier unsealed every night at midnight.
            </p>
          </div>
          <div className="w-full flex flex-col gap-2 max-w-xs">
            <button 
              className="w-full bg-primary-container hover:bg-primary-container/90 active:scale-95 transition-transform duration-100 py-3.5 px-4 rounded shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              onClick={handleOpenLedger}
            >
              <span className="material-symbols-outlined text-primary text-base">auto_stories</span>
              <span className="font-title-sm text-title-sm text-on-primary-container font-bold">
                Open Case Ledger
              </span>
            </button>
            <button 
              className="w-full py-2.5 text-center font-caption-forensic text-caption-forensic text-secondary hover:text-on-surface transition-colors flex items-center justify-center gap-1 cursor-pointer"
              onClick={() => {
                sounds.playTypewriter();
                onOpenSampleSlips();
              }}
            >
              <span className="material-symbols-outlined text-[14px]">visibility</span>
              <span>Inspect Sample Evidence Slips (Quick Look)</span>
            </button>
          </div>
          <span className="font-caption-forensic text-caption-forensic text-outline mt-1">
            Curio Mystery Syndicate · Confidential Field Release · No. 89-B
          </span>
        </div>
      </div>
    </div>
  );
};
