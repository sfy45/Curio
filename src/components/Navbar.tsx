import React from 'react';
import { Screen } from '../types';

interface NavbarProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentScreen, onNavigate }) => {
  // If on landing, the bottom nav can still be accessible or shown
  const isExplore = currentScreen === 'explore';
  const isActiveCase = currentScreen === 'detail' || currentScreen === 'examination' || currentScreen === 'solution';
  const isArchives = currentScreen === 'archives';

  return (
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_-4px_16px_rgba(0,0,0,0.5)] border-t border-outline-variant/30">
      <div className="h-16 px-gutter flex items-center justify-around max-w-md mx-auto">
        <button
          onClick={() => onNavigate('explore')}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors cursor-pointer ${
            isExplore ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: isExplore ? "'FILL' 1" : "'FILL' 0" }}>
            manage_search
          </span>
          <span className="font-label-brass text-label-brass uppercase tracking-wider">Explore</span>
        </button>

        <button
          onClick={() => onNavigate('examination')}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors cursor-pointer ${
            isActiveCase ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: isActiveCase ? "'FILL' 1" : "'FILL' 0" }}>
            travel_explore
          </span>
          <span className="font-label-brass text-label-brass uppercase tracking-wider">Active Case</span>
        </button>

        <button
          onClick={() => onNavigate('archives')}
          className={`flex flex-col items-center justify-center min-w-[56px] min-h-[44px] gap-space-xs transition-colors cursor-pointer ${
            isArchives ? 'text-secondary' : 'text-on-surface-variant hover:text-on-surface'
          }`}
        >
          <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: isArchives ? "'FILL' 1" : "'FILL' 0" }}>
            folder_special
          </span>
          <span className="font-label-brass text-label-brass uppercase tracking-wider">Archives</span>
        </button>
      </div>
    </nav>
  );
};
