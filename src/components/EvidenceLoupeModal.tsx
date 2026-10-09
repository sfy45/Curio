import React, { useState } from 'react';
import { sounds } from '../utils/audio';

interface EvidenceLoupeModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl?: string;
  title?: string;
  caption?: string;
  notes?: string;
}

export const EvidenceLoupeModal: React.FC<EvidenceLoupeModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title = 'Archival Forensic Magnifier',
  caption = 'Exhibit Plate IV · Eilean Mòr Daguerreotype',
  notes = 'Notice the salt spray corrosion along the west embankment and the anomalous position of the iron gear 110 feet above sea level.'
}) => {
  const [zoom, setZoom] = useState(1.4);
  const [filterMode, setFilterMode] = useState<'sepia' | 'contrast' | 'invert'>('sepia');

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-surface-container border border-secondary/50 rounded-2xl p-4 shadow-[0_10px_35px_rgba(0,0,0,0.9)] flex flex-col gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-outline-variant/50 pb-2">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-secondary text-[20px]">biotech</span>
            <div>
              <span className="font-label-stamp text-[10px] text-secondary uppercase block">FORENSIC MAGNIFIER LOUPE</span>
              <h3 className="font-title-sm text-title-sm text-on-surface leading-tight">{title}</h3>
            </div>
          </div>
          <button 
            onClick={() => {
              sounds.playTypewriter();
              onClose();
            }}
            className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Viewport with Loupe filter */}
        <div className="relative w-full h-64 sm:h-72 bg-black rounded-lg overflow-hidden border border-outline-variant/60 flex items-center justify-center shadow-inner group">
          <img 
            src={imageUrl || 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3olhh8kcD0r7p4VOlozQq1pFHKzGv9jplhRJK8WD749pSbIUAWevhro5_FYpItF-rSF0ANH-m-VewtgkT96Z-Iu5fnysPP0BkSvkK38xx-HCqYAccAJFlHUjwJAN2hXaeZuT3tk4UZMrKnz2geDhOgtyg1ahWdU2iH0TT3o-7pndJZpac0X9fJm7uCPVS-URQivZJm-WULkyOsnP3x5TdjVS5HZ92ixeiihg3I4u0i5gjcWEPPKRS'} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{
              transform: `scale(${zoom})`,
              filter: filterMode === 'sepia' 
                ? 'sepia(0.65) contrast(1.2)' 
                : filterMode === 'contrast' 
                ? 'contrast(1.6) brightness(0.95)' 
                : 'invert(0.9) contrast(1.4)'
            }}
          />

          {/* Lens Reticle Overlay */}
          <div className="absolute inset-0 pointer-events-none border border-secondary/30 rounded-lg flex items-center justify-center">
            <div className="w-16 h-16 border border-secondary/50 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-secondary/80 rounded-full"></div>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 bg-surface-container-lowest/80 px-2 py-0.5 rounded text-[10px] font-caption-forensic text-secondary backdrop-blur-sm">
            {caption}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between text-xs font-caption-forensic bg-surface-container-low p-2 rounded-lg">
          <div className="flex items-center gap-2">
            <span className="text-on-surface-variant">Filter:</span>
            <button
              onClick={() => { sounds.playTypewriter(); setFilterMode('sepia'); }}
              className={`px-2 py-0.5 rounded ${filterMode === 'sepia' ? 'bg-secondary text-on-secondary font-bold' : 'text-on-surface-variant'}`}
            >
              Sepia
            </button>
            <button
              onClick={() => { sounds.playTypewriter(); setFilterMode('contrast'); }}
              className={`px-2 py-0.5 rounded ${filterMode === 'contrast' ? 'bg-secondary text-on-secondary font-bold' : 'text-on-surface-variant'}`}
            >
              Hard Noir
            </button>
            <button
              onClick={() => { sounds.playTypewriter(); setFilterMode('invert'); }}
              className={`px-2 py-0.5 rounded ${filterMode === 'invert' ? 'bg-secondary text-on-secondary font-bold' : 'text-on-surface-variant'}`}
            >
              Negative
            </button>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-on-surface-variant">Zoom:</span>
            <button 
              onClick={() => setZoom(Math.max(1.0, zoom - 0.2))}
              className="w-6 h-6 rounded bg-surface-container flex items-center justify-center hover:bg-surface-bright"
            >
              -
            </button>
            <span className="w-8 text-center">{Math.round(zoom * 100)}%</span>
            <button 
              onClick={() => setZoom(Math.min(2.5, zoom + 0.2))}
              className="w-6 h-6 rounded bg-surface-container flex items-center justify-center hover:bg-surface-bright"
            >
              +
            </button>
          </div>
        </div>

        {/* Forensic Annotation */}
        <div className="bg-surface-container-lowest/70 p-2.5 rounded-lg border-l-2 border-primary">
          <span className="font-label-stamp text-[10px] text-primary block uppercase">FORENSIC OBSERVATION NOTE</span>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">{notes}</p>
        </div>
      </div>
    </div>
  );
};
