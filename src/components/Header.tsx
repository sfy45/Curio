import React, { useState } from 'react';
import { Screen } from '../types';
import { sounds } from '../utils/audio';

interface HeaderProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  onOpenMagnifier?: () => void;
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenMagnifier,
  title,
  subtitle,
  showBack,
  onBack
}) => {
  const [soundEnabled, setSoundEnabled] = useState(sounds.enabled);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleSound = () => {
    sounds.enabled = !soundEnabled;
    setSoundEnabled(sounds.enabled);
    if (sounds.enabled) {
      sounds.playTypewriter();
    }
  };

  const screensList: { id: Screen; label: string; tag: string }[] = [
    { id: 'landing', label: '1. Detective Landing', tag: 'Arrival' },
    { id: 'briefing', label: '2. Dossier Briefing', tag: 'Protocol' },
    { id: 'explore', label: '3. Bureau Explore', tag: 'Cabinet' },
    { id: 'detail', label: '4. Case File Detail', tag: 'Evidence' },
    { id: 'examination', label: '5. Forensic Examination', tag: 'Inquest' },
    { id: 'solution', label: '6. Solution Declassified', tag: 'Synthesis' },
    { id: 'archives', label: '7. My Archives', tag: 'Ledger' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.5)] border-b border-outline-variant/30">
      <div className="h-16 px-gutter flex items-center justify-between max-w-md mx-auto">
        <div className="flex items-center gap-space-sm min-w-0">
          {showBack ? (
            <button
              aria-label="Return to previous screen"
              className="w-10 h-10 flex items-center justify-center text-secondary hover:text-secondary-fixed transition-colors active:scale-95 cursor-pointer shrink-0"
              onClick={() => {
                sounds.playTypewriter();
                if (onBack) onBack();
                else onNavigate('explore');
              }}
            >
              <span className="material-symbols-outlined text-[24px]">arrow_back</span>
            </button>
          ) : (
            <div 
              onClick={() => onNavigate('landing')}
              className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-secondary shadow-[inset_0_1px_0_#dfba73,inset_0_-1px_0_#6e5222] shrink-0 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </div>
          )}

          <div className="flex flex-col min-w-0">
            <span className="font-label-stamp text-[10px] text-secondary tracking-widest uppercase truncate">
              {subtitle || 'BUREAU DE CURIO'}
            </span>
            <h1 className="font-headline-md text-headline-md text-on-surface leading-tight tracking-tight truncate">
              {title || (currentScreen === 'archives' ? 'My Archives' : currentScreen === 'explore' ? 'Explore' : 'Curio Archives')}
            </h1>
          </div>
        </div>

        {/* Action icons */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Quick Screen Jumper */}
          <div className="relative">
            <button
              onClick={() => {
                sounds.playTypewriter();
                setMenuOpen(!menuOpen);
              }}
              title="Jump to Screen"
              className="px-2 py-1 bg-surface-container hover:bg-surface-container-high rounded text-secondary flex items-center gap-1 font-caption-forensic text-[10px] border border-outline-variant/40 shadow-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-[15px]">layers</span>
              <span className="hidden xs:inline">SCREENS</span>
            </button>

            {menuOpen && (
              <div 
                className="absolute right-0 top-11 w-64 bg-surface-container-highest border border-secondary/40 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in zoom-in-95 duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center justify-between pb-1.5 px-2 border-b border-outline-variant/40 mb-1">
                  <span className="font-label-stamp text-[11px] text-secondary">ARCHIVE SCREENS</span>
                  <button 
                    onClick={() => setMenuOpen(false)}
                    className="text-on-surface-variant hover:text-on-surface text-xs"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex flex-col gap-1 max-h-80 overflow-y-auto">
                  {screensList.map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => {
                        sounds.playTypewriter();
                        onNavigate(sc.id);
                        setMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-left text-xs transition-colors cursor-pointer ${
                        currentScreen === sc.id
                          ? 'bg-secondary text-on-secondary font-bold shadow'
                          : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                      }`}
                    >
                      <span className="truncate">{sc.label}</span>
                      <span className="font-caption-forensic text-[9px] opacity-75 uppercase">{sc.tag}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? 'Mute Vintage Audio' : 'Enable Vintage Audio'}
            className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">
              {soundEnabled ? 'volume_up' : 'volume_off'}
            </span>
          </button>

          {/* Loupe / Search */}
          <button
            aria-label="Clue Magnifier"
            className="w-8 h-8 flex items-center justify-center text-secondary hover:text-secondary-fixed transition-colors cursor-pointer"
            onClick={() => {
              sounds.playTypewriter();
              if (onOpenMagnifier) onOpenMagnifier();
            }}
          >
            <span className="material-symbols-outlined text-[20px]">search</span>
          </button>

          {/* User profile avatar */}
          <button
            onClick={() => {
              sounds.playTypewriter();
              onNavigate('archives');
            }}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center cursor-pointer shadow-sm hover:ring-2 hover:ring-secondary/50 transition-all"
            title="Inspector Dossier"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
};
