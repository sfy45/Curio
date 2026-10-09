import React, { useState } from 'react';
import { Screen, Category, MysteryCase } from '../types';
import { FEATURED_CASE, OTHER_CASES } from '../data/cases';
import { sounds } from '../utils/audio';

interface ExploreViewProps {
  onNavigate: (screen: Screen) => void;
  onSelectCase: (c: MysteryCase) => void;
  savedCases: string[];
  onToggleSaveCase: (caseId: string) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  onNavigate,
  onSelectCase,
  savedCases,
  onToggleSaveCase
}) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const isFeaturedSaved = savedCases.includes(FEATURED_CASE.id);

  const filteredCases = OTHER_CASES.filter((c) => {
    if (activeCategory === 'all') return true;
    return c.category === activeCategory;
  });

  const handleExamineFeatured = () => {
    sounds.playStamp();
    onSelectCase(FEATURED_CASE);
    onNavigate('detail');
  };

  const handleExamineOther = (c: MysteryCase) => {
    sounds.playTypewriter();
    onSelectCase(c);
    onNavigate('detail');
  };

  return (
    <div className="flex flex-col w-full pb-24 max-w-md mx-auto">
      {/* Desk Atmosphere Glow & Inspector Status Bar */}
      <div className="px-margin pt-space-md pb-space-sm flex items-center justify-between">
        <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-1.5 rounded-full shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_2px_6px_rgba(0,0,0,0.4)] border border-outline-variant/30">
          <span className="material-symbols-outlined text-secondary text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            local_fire_department
          </span>
          <span className="font-label-stamp text-label-stamp text-secondary">3-DAY STREAK</span>
        </div>
        <div className="flex items-center gap-space-xs text-on-surface-variant font-caption-forensic text-caption-forensic bg-surface-container-lowest/80 px-space-sm py-1 rounded border border-outline-variant/20">
          <span className="material-symbols-outlined text-[14px] text-secondary">lock_open</span>
          <span>DOSSIER DISPATCH #1094</span>
        </div>
      </div>

      {/* Header Prompt Area */}
      <div className="px-margin mt-space-sm mb-space-lg flex flex-col gap-1">
        <div className="flex items-center gap-space-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
          <span className="font-label-brass text-label-brass text-secondary uppercase tracking-wider">DAILY CASE LOG</span>
        </div>
        <h2 className="font-headline-xl-mobile text-headline-xl-mobile text-on-surface tracking-tight">
          Which mystery will you solve today?
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1 leading-relaxed">
          Fresh archival evidence unsealed for your analytical inspection.
        </p>
      </div>

      {/* Featured Mystery Hero Dossier */}
      <div className="px-margin mb-space-xl">
        <div className="relative bg-surface-container rounded-xl shadow-[0_4px_12px_rgba(10,6,4,0.5),0_12px_32px_rgba(10,6,4,0.7)] overflow-hidden transition-transform duration-300 border border-outline-variant/30">
          {/* Brass Corner Reinforcements */}
          <div className="absolute top-0 left-0 w-6 h-6 bg-secondary-container/40 rounded-br-lg shadow-[inset_0_1px_0_#dfba73] pointer-events-none z-20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_1px_2px_rgba(0,0,0,0.8)]"></span>
          </div>
          <div className="absolute top-0 right-0 w-6 h-6 bg-secondary-container/40 rounded-bl-lg shadow-[inset_0_1px_0_#dfba73] pointer-events-none z-20 flex items-center justify-center">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary shadow-[0_1px_2px_rgba(0,0,0,0.8)]"></span>
          </div>

          {/* Case File Image Hero */}
          <div className="relative h-56 w-full overflow-hidden bg-surface-container-highest">
            <img 
              src={FEATURED_CASE.heroImage} 
              alt="Eilean Mor lighthouse" 
              className="w-full h-full object-cover filter contrast-115 sepia-[0.25]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-surface-container/60 to-transparent"></div>

            {/* Evidence Tag Chips */}
            <div className="absolute top-space-md left-space-md flex flex-wrap gap-space-xs z-10">
              <div className="flex items-center gap-1.5 bg-surface-container-lowest/90 px-space-sm py-1 rounded shadow-md backdrop-blur-sm border border-secondary/30">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                <span className="font-label-stamp text-label-stamp text-secondary">EVIDENCE #892-SCOT</span>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-high/90 px-space-sm py-1 rounded shadow-md backdrop-blur-sm text-on-surface">
                <span className="material-symbols-outlined text-[13px] text-tertiary">schedule</span>
                <span className="font-caption-forensic text-caption-forensic text-on-surface">~8 MIN</span>
              </div>
            </div>
            <div className="absolute top-space-md right-space-md z-10">
              <span className="inline-block px-2 py-1 rounded bg-secondary/20 text-secondary font-label-stamp text-label-stamp shadow-sm backdrop-blur-md border border-secondary/40">
                BEGINNER FRIENDLY
              </span>
            </div>
          </div>

          {/* Dossier Content Frame */}
          <div className="p-space-lg flex flex-col gap-space-md -mt-4 relative z-10 bg-surface-container rounded-t-xl">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="font-caption-forensic text-caption-forensic text-tertiary tracking-wider uppercase">
                  ARCHIVAL REPORT: FLANNAN ISLES
                </span>
                <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">DECEMBER 1900</span>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
                The Vanishing of Eilean Mòr
              </h3>
              <p className="font-body-md text-body-md text-secondary mt-0.5">Scottish Lighthouse Enigma</p>
            </div>

            {/* Teaser Quote with Paper Slip */}
            <div className="relative bg-surface-container-low p-space-md rounded shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] border-l-2 border-primary-container">
              <p className="font-body-md text-body-md text-on-surface-variant italic pl-2">
                “A meal lay unfinished upon the table, the logbook read ‘God is over all’, but the three keepers were simply gone.”
              </p>
            </div>

            {/* Primary Action CTA */}
            <div className="pt-space-xs flex items-center justify-between gap-space-md">
              <button 
                className="flex-1 bg-primary-container hover:bg-on-primary-fixed-variant text-on-primary font-title-sm text-title-sm py-3 px-space-lg rounded shadow-[inset_0_1px_0_#b22222,0_4px_12px_rgba(0,0,0,0.7)] flex items-center justify-center gap-space-sm active:scale-[0.98] transition-all cursor-pointer"
                id="solve-featured-btn"
                onClick={handleExamineFeatured}
              >
                <span className="material-symbols-outlined text-[20px] text-on-primary">search_check</span>
                <span className="font-bold">Solve Today's Mystery</span>
              </button>
              <button 
                aria-label="Pin case to ledger" 
                className={`w-12 h-12 flex items-center justify-center rounded shadow-[inset_0_1px_0_#dfba73,inset_0_-1px_0_#6e5222] active:scale-95 transition-all cursor-pointer ${
                  isFeaturedSaved ? 'bg-secondary text-on-secondary' : 'bg-surface-container-high text-secondary hover:text-secondary-fixed'
                }`}
                onClick={() => {
                  sounds.playStamp();
                  onToggleSaveCase(FEATURED_CASE.id);
                }}
                title={isFeaturedSaved ? 'Pinned to Ledger' : 'Pin Case to Ledger'}
              >
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: isFeaturedSaved ? "'FILL' 1" : "'FILL' 0" }}>
                  push_pin
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Desk Tabs */}
      <div className="px-margin mb-space-md">
        <div className="flex items-center justify-between mb-space-xs">
          <span className="font-label-brass text-label-brass text-secondary uppercase">CABINET FILTERS</span>
          <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">24 ACTIVE DOSSIERS</span>
        </div>
        <div className="flex gap-space-xs overflow-x-auto pb-2 scrollbar-none" id="filter-cabinet">
          <button 
            className={`filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-stamp text-label-stamp transition-all cursor-pointer ${
              activeCategory === 'all' 
                ? 'bg-secondary text-on-secondary shadow-[0_2px_6px_rgba(0,0,0,0.5)] font-bold' 
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface shadow-sm'
            }`}
            onClick={() => { sounds.playTypewriter(); setActiveCategory('all'); }}
          >
            ALL MYSTERIES
          </button>
          <button 
            className={`filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-stamp text-label-stamp transition-all cursor-pointer ${
              activeCategory === 'detective' 
                ? 'bg-secondary text-on-secondary shadow-[0_2px_6px_rgba(0,0,0,0.5)] font-bold' 
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface shadow-sm'
            }`}
            onClick={() => { sounds.playTypewriter(); setActiveCategory('detective'); }}
          >
            DETECTIVE FICTION
          </button>
          <button 
            className={`filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-stamp text-label-stamp transition-all cursor-pointer ${
              activeCategory === 'historical' 
                ? 'bg-secondary text-on-secondary shadow-[0_2px_6px_rgba(0,0,0,0.5)] font-bold' 
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface shadow-sm'
            }`}
            onClick={() => { sounds.playTypewriter(); setActiveCategory('historical'); }}
          >
            HISTORICAL ENIGMAS
          </button>
          <button 
            className={`filter-tab shrink-0 px-3.5 py-1.5 rounded-full font-label-stamp text-label-stamp transition-all cursor-pointer ${
              activeCategory === 'strange' 
                ? 'bg-secondary text-on-secondary shadow-[0_2px_6px_rgba(0,0,0,0.5)] font-bold' 
                : 'bg-surface-container text-on-surface-variant hover:text-on-surface shadow-sm'
            }`}
            onClick={() => { sounds.playTypewriter(); setActiveCategory('strange'); }}
          >
            STRANGE DISCOVERIES
          </button>
        </div>
      </div>

      {/* Alternative Mystery Cards Grid / Stack */}
      <div className="px-margin flex flex-col gap-space-md">
        {filteredCases.map((c) => (
          <div 
            key={c.id} 
            className="relative bg-surface-container-low rounded-lg p-space-md shadow-[0_3px_8px_rgba(10,6,4,0.45)] flex flex-col gap-space-sm transition-all hover:bg-surface-container border border-outline-variant/30"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="font-caption-forensic text-caption-forensic px-2 py-0.5 rounded bg-surface-container-highest text-secondary font-bold">
                  {c.code}
                </span>
                <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">
                  {c.itemCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-caption-forensic text-caption-forensic text-tertiary">
                  {c.estimatedMinutes} MIN
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-secondary"></span>
                <span className={`font-label-stamp text-label-stamp ${
                  c.difficulty === 'Quick Bite' || c.difficulty === 'Beginner' 
                    ? 'text-primary' 
                    : c.difficulty === 'Expert' 
                    ? 'text-on-primary-fixed-variant bg-primary-fixed/20 px-1 rounded' 
                    : 'text-secondary'
                }`}>
                  {c.difficulty.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="flex gap-space-md items-center">
              <div className="w-20 h-20 rounded bg-surface-container-highest overflow-hidden shrink-0 shadow-[inset_0_1px_2px_rgba(0,0,0,0.7)]">
                <img 
                  src={c.heroImage} 
                  alt={c.title} 
                  className="w-full h-full object-cover filter sepia-[0.3]"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-title-sm text-title-sm text-on-surface truncate font-semibold">
                  {c.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 mt-0.5">
                  {c.quote.replace(/[“”"]/g, '')}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-outline-variant/20">
              <div className="flex items-center gap-space-xs text-on-surface-variant font-caption-forensic text-caption-forensic">
                <span className="material-symbols-outlined text-[15px] text-tertiary">fingerprint</span>
                <span>Clues Found: {c.cluesFound}/{c.totalClues}</span>
              </div>
              <button 
                className="px-space-md py-1 rounded bg-surface-container-high text-secondary hover:text-secondary-fixed font-label-stamp text-label-stamp flex items-center gap-1 shadow-[inset_0_1px_0_#dfba73,inset_0_-1px_0_#6e5222] active:scale-95 transition-all cursor-pointer font-bold"
                onClick={() => handleExamineOther(c)}
              >
                <span>EXAMINE FILE</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Physical Wax Seal Footer Note */}
      <div className="px-margin mt-space-lg">
        <div className="bg-surface-container-lowest p-space-md rounded flex items-center gap-space-md shadow-[inset_0_2px_4px_rgba(0,0,0,0.7)] border border-outline-variant/30">
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shrink-0 shadow-[0_2px_8px_rgba(139,30,30,0.6)]">
            <span className="material-symbols-outlined text-on-primary text-[20px]">verified_user</span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-brass text-label-brass text-secondary">CHIEF INSPECTOR'S NOTE</span>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              All cases are derived from authenticated historical logs. Solve daily to advance your archival clearance level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
