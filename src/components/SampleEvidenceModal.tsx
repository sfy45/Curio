import React from 'react';
import { SAMPLE_EVIDENCE_SLIPS } from '../data/cases';
import { sounds } from '../utils/audio';

interface SampleEvidenceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCase: () => void;
}

export const SampleEvidenceModal: React.FC<SampleEvidenceModalProps> = ({
  isOpen,
  onClose,
  onOpenCase
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-md bg-tertiary-fixed text-on-tertiary-fixed border border-secondary/60 rounded-xl p-5 shadow-[0_12px_40px_rgba(0,0,0,0.8)] flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-on-tertiary-fixed/20 pb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container text-xl">folder_zip</span>
            <div>
              <span className="font-label-stamp text-[10px] text-primary-container uppercase block tracking-wider">
                CONFIDENTIAL RELEASE • NO. 89-B
              </span>
              <h3 className="font-headline-md text-headline-md text-on-tertiary-fixed leading-tight">
                Sample Evidence Slips
              </h3>
            </div>
          </div>
          <button 
            onClick={() => { sounds.playTypewriter(); onClose(); }}
            className="w-7 h-7 rounded-full bg-tertiary-container/40 text-on-tertiary-fixed flex items-center justify-center hover:bg-primary-container hover:text-on-primary transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        <p className="font-body-sm text-body-sm text-on-tertiary-fixed-variant">
          Unredacted primary-source excerpts preserved in the Curio Archive for preliminary clearance:
        </p>

        <div className="flex flex-col gap-2.5 max-h-72 overflow-y-auto pr-1">
          {SAMPLE_EVIDENCE_SLIPS.map((slip, i) => (
            <div key={i} className="p-3 bg-surface-container-lowest/15 rounded-md border border-on-tertiary-fixed/15">
              <div className="flex items-center justify-between text-xs mb-1">
                <span className="font-label-stamp text-[11px] text-primary-container font-bold">{slip.title}</span>
                <span className="font-caption-forensic text-[10px] opacity-75">{slip.date}</span>
              </div>
              <p className="font-body-sm text-body-sm italic text-on-tertiary-fixed">
                {slip.content}
              </p>
              <div className="mt-1 text-[9px] font-caption-forensic uppercase opacity-60 text-right">
                {slip.meta}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between gap-2 border-t border-on-tertiary-fixed/20">
          <button
            onClick={() => { sounds.playTypewriter(); onClose(); }}
            className="px-3 py-2 text-xs font-caption-forensic uppercase underline text-on-tertiary-fixed-variant hover:text-on-tertiary-fixed"
          >
            Dismiss Slips
          </button>
          <button
            onClick={() => {
              sounds.playStamp();
              onClose();
              onOpenCase();
            }}
            className="px-4 py-2 bg-primary-container text-on-primary rounded font-label-brass text-label-brass uppercase shadow flex items-center gap-1.5 hover:bg-on-primary-fixed-variant active:scale-95 transition-all cursor-pointer"
          >
            <span>Unseal Full Case #01</span>
            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};
