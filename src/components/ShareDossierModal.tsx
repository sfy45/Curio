import React, { useState } from 'react';
import { MysteryCase } from '../types';
import { sounds } from '../utils/audio';

interface ShareDossierModalProps {
  isOpen: boolean;
  onClose: () => void;
  mystery: MysteryCase;
}

export const ShareDossierModal: React.FC<ShareDossierModalProps> = ({
  isOpen,
  onClose,
  mystery
}) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    sounds.playStamp();
    const text = `🕵️ ARCHIVAL DOSSIER SOLVED: "${mystery.title}"\n📍 Location: ${mystery.location} (${mystery.era})\n⚖️ Inquest Outcome: Rogue wave historical consensus verified.\n🔍 Investigate real historical cold cases on Curio Bureau.`;
    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-sm bg-surface-container border border-secondary/50 rounded-2xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.85)] flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary">ios_share</span>
            <h3 className="font-title-sm text-title-sm text-on-surface">Share Case Dossier</h3>
          </div>
          <button 
            onClick={() => { sounds.playTypewriter(); onClose(); }}
            className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <div className="bg-surface-container-lowest p-3 rounded-lg border border-outline-variant/30 text-left">
          <span className="font-label-stamp text-[10px] text-secondary uppercase block mb-1">
            TELEGRAPH DISPATCH SLIP
          </span>
          <p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
            “Solved {mystery.title} ({mystery.location}, {mystery.era}). Deduced the true fate of the garrison with 100% verified historical accuracy on Curio.”
          </p>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <button
            onClick={handleCopy}
            className="w-full py-3 bg-secondary text-on-secondary rounded-lg font-label-brass text-label-brass uppercase shadow flex items-center justify-center gap-2 hover:bg-secondary-fixed active:scale-95 transition-all cursor-pointer font-bold"
          >
            <span className="material-symbols-outlined text-[18px]">
              {copied ? 'done_all' : 'content_copy'}
            </span>
            <span>{copied ? 'Dossier Copied to Clipboard!' : 'Copy Telegraph Dispatch'}</span>
          </button>

          <button
            onClick={() => { sounds.playTypewriter(); onClose(); }}
            className="w-full py-2 text-center font-caption-forensic text-caption-forensic text-on-surface-variant hover:text-on-surface"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
