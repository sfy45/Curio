import React, { useState } from 'react';
import { Screen, SleuthProfile, MysteryCase } from '../types';
import { INITIAL_PROFILE, FEATURED_CASE, OTHER_CASES, CASE_IMAGES } from '../data/cases';
import { sounds } from '../utils/audio';

interface ArchivesViewProps {
  profile?: SleuthProfile;
  onNavigate: (screen: Screen) => void;
  onSelectCase: (c: MysteryCase) => void;
}

export const ArchivesView: React.FC<ArchivesViewProps> = ({
  profile = INITIAL_PROFILE,
  onNavigate,
  onSelectCase
}) => {
  const [activeTab, setActiveTab] = useState<'solved' | 'saved' | 'medals'>('solved');

  const handleReviewCase = (caseId: string) => {
    sounds.playTypewriter();
    if (caseId === 'flannan-isles') {
      onSelectCase(FEATURED_CASE);
      onNavigate('solution');
    } else {
      const match = OTHER_CASES.find((c) => c.id === caseId) || OTHER_CASES[0];
      onSelectCase(match);
      onNavigate('detail');
    }
  };

  const handleBeginDyatlov = () => {
    sounds.playStamp();
    const dyatlov = OTHER_CASES.find((c) => c.id === 'dyatlov-pass') || OTHER_CASES[0];
    onSelectCase(dyatlov);
    onNavigate('detail');
  };

  return (
    <div className="flex flex-col w-full px-gutter pb-28 pt-2 gap-space-lg max-w-md mx-auto">
      {/* Detective Profile Card: Tactile Archival Dossier */}
      <div className="relative w-full bg-surface-container rounded-xl shadow-xl overflow-hidden pt-space-md pb-space-lg px-space-md shadow-[0_4px_16px_rgba(10,6,4,0.65)] border border-outline-variant/30">
        {/* Paperclip skeuomorphic fixture */}
        <div className="absolute top-2 right-6 w-5 h-10 bg-secondary-container/40 rounded-full shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),0_2px_4px_rgba(0,0,0,0.5)] -rotate-12 z-10 pointer-events-none border border-secondary/40"></div>

        <div className="flex items-start gap-space-md">
          {/* Vintage Polaroid Style Badge Photo */}
          <div className="relative shrink-0 p-1 bg-[#ebe0c8] rounded shadow-md -rotate-2 border border-[#d5c7a9]">
            <div className="w-16 h-16 rounded overflow-hidden bg-surface-container-highest">
              <img 
                src={profile.avatar} 
                alt="Inspector badge" 
                className="w-full h-full object-cover grayscale contrast-125"
              />
            </div>
            <div className="text-center pt-0.5">
              <span className="font-caption-forensic text-caption-forensic text-[#3a2e27] uppercase font-bold tracking-tighter">
                ID {profile.idNumber}
              </span>
            </div>
          </div>

          {/* Identity & Accreditation */}
          <div className="flex flex-col min-w-0 flex-1 pt-0.5">
            <div className="flex items-center gap-space-xs">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="font-label-stamp text-label-stamp text-secondary uppercase tracking-wider">
                ACCREDITED SLEUTH
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface truncate">
              Senior Sleuth <span className="text-secondary font-title-sm">Rank IV</span>
            </h2>
            <div className="flex items-center gap-space-xs mt-1">
              <span className="material-symbols-outlined text-secondary text-[16px]">military_tech</span>
              <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">
                Archives Clearance: {profile.clearance}
              </span>
            </div>
          </div>
        </div>

        {/* Ledger Metrics Panel */}
        <div className="grid grid-cols-4 gap-space-xs mt-space-md pt-space-sm bg-surface-container-lowest/80 rounded-lg p-2 text-center shadow-inner border border-outline-variant/20">
          <div className="flex flex-col">
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant uppercase">
              Solved
            </span>
            <span className="font-headline-md text-headline-md text-secondary font-bold">
              {profile.casesSolved}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant uppercase">
              Accuracy
            </span>
            <span className="font-headline-md text-headline-md text-on-surface font-bold">
              {profile.accuracy}%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant uppercase">
              Merit
            </span>
            <span className="font-headline-md text-headline-md text-tertiary font-bold">
              {profile.meritPoints.toLocaleString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant uppercase">
              Streak
            </span>
            <span className="font-headline-md text-headline-md text-primary font-bold">
              {profile.streakDays}<span className="text-[12px] text-primary-fixed-dim">d</span>
            </span>
          </div>
        </div>
      </div>

      {/* Physical Manifold Folder Tabs */}
      <div className="flex items-center gap-1.5 p-1 bg-surface-container-lowest rounded-lg shadow-inner border border-outline-variant/30">
        <button 
          className={`flex-1 py-2 px-space-xs rounded flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'solved' 
              ? 'bg-surface-container text-secondary shadow-[0_2px_4px_rgba(0,0,0,0.4)] font-bold' 
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          onClick={() => { sounds.playTypewriter(); setActiveTab('solved'); }}
        >
          <span className="material-symbols-outlined text-[17px]">inventory</span>
          <span className="font-label-stamp text-label-stamp tracking-wider uppercase">Solved (14)</span>
        </button>

        <button 
          className={`flex-1 py-2 px-space-xs rounded flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'saved' 
              ? 'bg-surface-container text-secondary shadow-[0_2px_4px_rgba(0,0,0,0.4)] font-bold' 
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          onClick={() => { sounds.playTypewriter(); setActiveTab('saved'); }}
        >
          <span className="material-symbols-outlined text-[17px]">bookmarks</span>
          <span className="font-label-stamp text-label-stamp tracking-wider uppercase">Saved (3)</span>
        </button>

        <button 
          className={`flex-1 py-2 px-space-xs rounded flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
            activeTab === 'medals' 
              ? 'bg-surface-container text-secondary shadow-[0_2px_4px_rgba(0,0,0,0.4)] font-bold' 
              : 'text-on-surface-variant hover:text-on-surface'
          }`}
          onClick={() => { sounds.playTypewriter(); setActiveTab('medals'); }}
        >
          <span className="material-symbols-outlined text-[17px]">workspace_premium</span>
          <span className="font-label-stamp text-label-stamp tracking-wider uppercase">Medals (6)</span>
        </button>
      </div>

      {/* Tab 1: Solved Cases Section */}
      {(activeTab === 'solved' || activeTab === 'saved') && (
        <div className="flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-secondary text-[18px]">verified_user</span>
              <h3 className="font-label-stamp text-label-stamp text-on-surface uppercase tracking-widest">
                {activeTab === 'saved' ? 'Saved Hold Inquests' : 'Closed Field Inquests'}
              </h3>
            </div>
            <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">
              Chronological Log
            </span>
          </div>

          {/* Case 1: Solved Today */}
          <div className="relative bg-surface-container rounded-xl p-space-md shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex flex-col gap-space-sm group border border-outline-variant/30">
            {/* Red ink rubber stamp effect */}
            <div className="absolute top-3 right-3 rotate-12 pointer-events-none select-none z-10">
              <span className="inline-block px-2 py-0.5 rounded bg-primary-container/85 text-primary-fixed font-label-stamp text-[10px] tracking-widest uppercase shadow border border-[#b22222]">
                VERDICT: CORRECT
              </span>
            </div>

            <div className="flex gap-space-md items-start">
              <div className="w-20 h-20 rounded bg-surface-container-highest shrink-0 overflow-hidden shadow-inner">
                <img 
                  src={CASE_IMAGES.solvedLighthouse} 
                  alt="Eilean Mor lighthouse" 
                  className="w-full h-full object-cover filter contrast-110 sepia-[0.3]"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1 pr-16">
                <span className="font-caption-forensic text-caption-forensic text-secondary uppercase tracking-wide">
                  Solved Today · Item #089
                </span>
                <h4 className="font-title-sm text-title-sm text-on-surface leading-tight mt-0.5 font-semibold">
                  The Vanishing of Eilean Mòr
                </h4>
                <div className="flex items-center gap-space-sm mt-1.5 text-on-surface-variant">
                  <span className="flex items-center gap-1 font-caption-forensic text-caption-forensic">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">timer</span> 7 mins
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1 font-caption-forensic text-caption-forensic">
                    <span className="material-symbols-outlined text-[14px] text-secondary">search</span> 6 Clues
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-xs mt-1 bg-surface-container-low p-2 rounded border border-outline-variant/20">
              <div className="flex items-center gap-1 text-tertiary">
                <span className="material-symbols-outlined text-[16px]">grade</span>
                <span className="font-caption-forensic text-caption-forensic">Solitary Log Solved</span>
              </div>
              <button 
                className="px-space-md py-1.5 rounded bg-secondary text-on-secondary font-label-brass text-label-brass tracking-wider uppercase shadow-[inset_0_1px_0_#dfba73,inset_0_-1px_0_#6e5222] active:scale-95 transition-transform flex items-center gap-1 cursor-pointer font-bold"
                onClick={() => handleReviewCase('flannan-isles')}
              >
                <span>Review Case &amp; Clues</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Case 2: Solved Yesterday */}
          <div className="relative bg-surface-container rounded-xl p-space-md shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex flex-col gap-space-sm border border-outline-variant/30">
            <div className="absolute top-3 right-3 rotate-6 pointer-events-none select-none z-10">
              <span className="inline-block px-2 py-0.5 rounded bg-primary-container/85 text-primary-fixed font-label-stamp text-[10px] tracking-widest uppercase shadow border border-[#b22222]">
                VERDICT: CORRECT
              </span>
            </div>

            <div className="flex gap-space-md items-start">
              <div className="w-20 h-20 rounded bg-surface-container-highest shrink-0 overflow-hidden shadow-inner">
                <img 
                  src={CASE_IMAGES.tunguskaForest} 
                  alt="Tunguska Siberian Forest" 
                  className="w-full h-full object-cover filter contrast-110 sepia-[0.3]"
                />
              </div>
              <div className="flex flex-col min-w-0 flex-1 pr-16">
                <span className="font-caption-forensic text-caption-forensic text-on-surface-variant uppercase tracking-wide">
                  Solved Yesterday · Item #088
                </span>
                <h4 className="font-title-sm text-title-sm text-on-surface leading-tight mt-0.5 font-semibold">
                  The Tunguska Forest Enigma
                </h4>
                <div className="flex items-center gap-space-sm mt-1.5 text-on-surface-variant">
                  <span className="flex items-center gap-1 font-caption-forensic text-caption-forensic">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">timer</span> 9 mins
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1 font-caption-forensic text-caption-forensic text-secondary">
                    <span className="material-symbols-outlined text-[14px]">verified</span> Flawless Proof
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-xs mt-1 bg-surface-container-low p-2 rounded border border-outline-variant/20">
              <div className="flex items-center gap-1 text-tertiary">
                <span className="material-symbols-outlined text-[16px]">stars</span>
                <span className="font-caption-forensic text-caption-forensic">+350 Field Merit</span>
              </div>
              <button 
                className="px-space-md py-1.5 rounded bg-surface-container-high text-on-surface font-label-brass text-label-brass tracking-wider uppercase hover:bg-surface-bright active:scale-95 transition-transform flex items-center gap-1 cursor-pointer"
                onClick={() => handleReviewCase('tunguska')}
              >
                <span>Review Case &amp; Clues</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Case 3: Solved 3 Days Ago */}
          <div className="relative bg-surface-container rounded-xl p-space-md shadow-[0_4px_12px_rgba(0,0,0,0.4)] flex flex-col gap-space-sm border border-outline-variant/30">
            <div className="absolute top-3 right-3 -rotate-6 pointer-events-none select-none z-10">
              <span className="inline-block px-2 py-0.5 rounded bg-secondary-container/90 text-on-secondary-container font-label-stamp text-[10px] tracking-widest uppercase shadow border border-secondary/40">
                VERDICT: PARTIAL
              </span>
            </div>

            <div className="flex gap-space-md items-start">
              <div className="w-20 h-20 rounded bg-surface-container-highest shrink-0 overflow-hidden shadow-inner flex flex-col items-center justify-center p-2 bg-[#2a1d17] border border-outline-variant/30">
                <span className="font-headline-md text-headline-md text-secondary font-serif italic text-center leading-none">
                  Tamám<br />Shud
                </span>
                <span className="font-caption-forensic text-[9px] text-on-surface-variant mt-1">SCRAP 44-A</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1 pr-16">
                <span className="font-caption-forensic text-caption-forensic text-on-surface-variant uppercase tracking-wide">
                  3 Days Ago · Item #084
                </span>
                <h4 className="font-title-sm text-title-sm text-on-surface leading-tight mt-0.5 font-semibold">
                  The Somerton Cryptogram
                </h4>
                <div className="flex items-center gap-space-sm mt-1.5 text-on-surface-variant">
                  <span className="flex items-center gap-1 font-caption-forensic text-caption-forensic">
                    <span className="material-symbols-outlined text-[14px] text-tertiary">key</span> Tamám Shud
                  </span>
                  <span className="text-outline-variant">•</span>
                  <span className="flex items-center gap-1 font-caption-forensic text-caption-forensic text-error">
                    <span className="material-symbols-outlined text-[14px]">help_center</span> 1 Missing Lead
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-space-xs mt-1 bg-surface-container-low p-2 rounded border border-outline-variant/20">
              <div className="flex items-center gap-1 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px]">pending_actions</span>
                <span className="font-caption-forensic text-caption-forensic">Re-open Inquest Available</span>
              </div>
              <button 
                className="px-space-md py-1.5 rounded bg-surface-container-high text-on-surface font-label-brass text-label-brass tracking-wider uppercase hover:bg-surface-bright active:scale-95 transition-transform flex items-center gap-1 cursor-pointer"
                onClick={() => handleReviewCase('somerton-man')}
              >
                <span>Review Case &amp; Clues</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bookmarked Dossiers (Pinned Inquests) */}
      <div className="flex flex-col gap-space-sm pt-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">bookmark_added</span>
            <h3 className="font-label-stamp text-label-stamp text-on-surface uppercase tracking-widest">
              Bookmarked Dossiers
            </h3>
          </div>
          <span className="font-caption-forensic text-caption-forensic text-secondary font-bold">
            1 Active Hold
          </span>
        </div>

        {/* Dyatlov Pass Card */}
        <div className="relative bg-surface-container-high rounded-xl p-space-md shadow-lg overflow-hidden flex flex-col gap-space-sm border border-outline-variant/30">
          <div className="flex items-start justify-between">
            <div className="flex flex-col min-w-0 pr-space-md">
              <div className="flex items-center gap-space-xs mb-1">
                <span className="px-1.5 py-0.5 bg-surface-container-highest text-secondary rounded font-label-stamp text-[10px] uppercase tracking-wider">
                  Unopened Dossier
                </span>
                <span className="font-caption-forensic text-caption-forensic text-on-surface-variant">
                  Est. 12 min
                </span>
              </div>
              <h4 className="font-headline-md text-headline-md text-on-surface">
                The Dyatlov Alpine Pass
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 line-clamp-2">
                Kholat Syakhl expedition mystery: cut tents, missing footwear, and unexplainable radiation signatures logged at 1079 summit.
              </p>
            </div>
            <div className="w-14 h-14 rounded-lg bg-surface-container-lowest shrink-0 overflow-hidden shadow border border-outline-variant/30">
              <img 
                src={CASE_IMAGES.dyatlovTent} 
                alt="Dyatlov tent snow slope" 
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>
          </div>

          <div className="flex items-center justify-between pt-space-xs mt-1 border-t border-outline-variant/20">
            <div className="flex items-center gap-1 text-on-surface-variant">
              <span className="material-symbols-outlined text-[16px] text-primary">priority_high</span>
              <span className="font-caption-forensic text-caption-forensic text-primary">High Complexity Index</span>
            </div>
            <button 
              className="px-space-lg py-2 rounded bg-primary-container text-primary-fixed font-headline-md text-[14px] shadow-[0_2px_8px_rgba(139,30,30,0.5)] active:scale-95 transition-transform flex items-center gap-1.5 font-bold cursor-pointer border border-[#b22222]"
              onClick={handleBeginDyatlov}
            >
              <span className="material-symbols-outlined text-[16px]">play_arrow</span>
              <span>Begin Inquest</span>
            </button>
          </div>
        </div>
      </div>

      {/* Commendations Section */}
      <div className="flex flex-col gap-space-md pt-space-xs">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="material-symbols-outlined text-secondary text-[18px]">workspace_premium</span>
            <h3 className="font-label-stamp text-label-stamp text-on-surface uppercase tracking-widest">
              Curio Commendations
            </h3>
          </div>
          <span className="font-caption-forensic text-caption-forensic text-secondary">
            6 of 12 Unlocked
          </span>
        </div>

        {/* Commendation Cards Stack */}
        <div className="grid grid-cols-1 gap-space-sm">
          {/* Eagle Eye Badge */}
          <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container shadow border border-outline-variant/25">
            <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-secondary shadow-[inset_0_1px_0_#dfba73,inset_0_-1px_0_#6e5222] shrink-0 border border-secondary/40">
              <span className="material-symbols-outlined text-[24px]">visibility</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h5 className="font-title-sm text-title-sm text-on-surface font-semibold">Eagle Eye</h5>
                <span className="font-label-stamp text-[10px] text-secondary tracking-widest uppercase">
                  Gold · Unlocked
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Discovered all hidden clues on 5 cases without requisitioning hints.
              </p>
            </div>
          </div>

          {/* Deep Reader Badge */}
          <div className="flex items-center gap-space-md p-space-md rounded-xl bg-surface-container shadow border border-outline-variant/25">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-tertiary shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] shrink-0 border border-outline-variant/30">
              <span className="material-symbols-outlined text-[24px]">menu_book</span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <h5 className="font-title-sm text-title-sm text-on-surface font-semibold">Deep Reader</h5>
                <span className="font-label-stamp text-[10px] text-tertiary tracking-widest uppercase">
                  Brass · Unlocked
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Thoroughly analyzed 10 historical debriefs.
              </p>
            </div>
          </div>

          {/* Daily Inquisitor Badge (In Progress) */}
          <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container shadow border border-outline-variant/25">
            <div className="flex items-center gap-space-md">
              <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary shrink-0 shadow-inner border border-primary/30">
                <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
              </div>
              <div className="flex flex-col min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h5 className="font-title-sm text-title-sm text-on-surface font-semibold">Daily Inquisitor</h5>
                  <span className="font-label-stamp text-[10px] text-primary tracking-widest uppercase">
                    4 / 7 Days
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Maintain an uninterrupted 7-day detective streak.
                </p>
              </div>
            </div>
            {/* Tactile Progress Bar */}
            <div className="w-full bg-surface-container-lowest h-2 rounded-full overflow-hidden mt-1 shadow-inner">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{ width: '57.1%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
