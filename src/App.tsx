/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Screen, MysteryCase } from './types';
import { FEATURED_CASE, INITIAL_PROFILE } from './data/cases';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import { EvidenceLoupeModal } from './components/EvidenceLoupeModal';
import { SampleEvidenceModal } from './components/SampleEvidenceModal';
import { ShareDossierModal } from './components/ShareDossierModal';

import { LandingView } from './views/LandingView';
import { BriefingView } from './views/BriefingView';
import { ExploreView } from './views/ExploreView';
import { DossierDetailView } from './views/DossierDetailView';
import { ExaminationView } from './views/ExaminationView';
import { SolutionView } from './views/SolutionView';
import { ArchivesView } from './views/ArchivesView';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedCase, setSelectedCase] = useState<MysteryCase>(FEATURED_CASE);
  const [selectedHypothesisId, setSelectedHypothesisId] = useState<string>('rogue-wave');
  const [savedCases, setSavedCases] = useState<string[]>(INITIAL_PROFILE.savedCases);

  // Modals state
  const [loupeData, setLoupeData] = useState<{
    isOpen: boolean;
    imageUrl?: string;
    title?: string;
    caption?: string;
    notes?: string;
  }>({
    isOpen: false
  });

  const [sampleSlipsOpen, setSampleSlipsOpen] = useState(false);
  const [shareModalOpen, setShareModalOpen] = useState(false);

  // Scroll to top whenever screen changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentScreen]);

  const handleNavigate = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleToggleSaveCase = (caseId: string) => {
    setSavedCases((prev) => 
      prev.includes(caseId) ? prev.filter((id) => id !== caseId) : [...prev, caseId]
    );
  };

  const handleOpenPhotoLoupe = (
    img: string,
    title: string,
    caption: string,
    notes?: string
  ) => {
    setLoupeData({
      isOpen: true,
      imageUrl: img,
      title,
      caption,
      notes
    });
  };

  // Header configuration per screen
  const getHeaderProps = () => {
    switch (currentScreen) {
      case 'landing':
        return {
          title: 'Curio Chronicles',
          subtitle: 'ARCHIVE DOSSIER // DEPT-9',
          showBack: false
        };
      case 'briefing':
        return {
          title: 'How Curio Works',
          subtitle: 'BUREAU INDUCTION • PROTOCOL 01-B',
          showBack: true,
          onBack: () => setCurrentScreen('landing')
        };
      case 'explore':
        return {
          title: 'Explore',
          subtitle: 'BUREAU DE CURIO',
          showBack: false
        };
      case 'detail':
        return {
          title: 'Dossier Detail',
          subtitle: 'CASE EVIDENCE FILE',
          showBack: true,
          onBack: () => setCurrentScreen('explore')
        };
      case 'examination':
        return {
          title: 'Forensic Examination',
          subtitle: 'CASE EVIDENCE FILE',
          showBack: true,
          onBack: () => setCurrentScreen('detail')
        };
      case 'solution':
        return {
          title: 'Mystery Solved!',
          subtitle: 'HISTORICAL SYNTHESIS',
          showBack: true,
          onBack: () => setCurrentScreen('examination')
        };
      case 'archives':
        return {
          title: 'My Archives',
          subtitle: 'BUREAU DE CURIO',
          showBack: false
        };
      default:
        return {
          title: 'Bureau De Curio',
          subtitle: 'CHRONICLE INVESTIGATIONS',
          showBack: false
        };
    }
  };

  const headerProps = getHeaderProps();

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface flex flex-col selection:bg-primary-container selection:text-on-primary">
      {/* Top Fixed Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenMagnifier={() => {
          handleOpenPhotoLoupe(
            selectedCase.heroImage,
            `${selectedCase.title} Photographic Evidence`,
            `${selectedCase.itemCode} · ${selectedCase.location} (${selectedCase.era})`,
            selectedCase.intakeReport.criticalAnomaly
          );
        }}
        title={headerProps.title}
        subtitle={headerProps.subtitle}
        showBack={headerProps.showBack}
        onBack={headerProps.onBack}
      />

      {/* Main Content View Container */}
      <main className="flex-1 w-full pt-16 flex flex-col relative">
        {currentScreen === 'landing' && (
          <LandingView
            onNavigate={handleNavigate}
            onOpenSampleSlips={() => setSampleSlipsOpen(true)}
          />
        )}

        {currentScreen === 'briefing' && (
          <BriefingView
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'explore' && (
          <ExploreView
            onNavigate={handleNavigate}
            onSelectCase={(c) => setSelectedCase(c)}
            savedCases={savedCases}
            onToggleSaveCase={handleToggleSaveCase}
          />
        )}

        {currentScreen === 'detail' && (
          <DossierDetailView
            mystery={selectedCase}
            onNavigate={handleNavigate}
            onOpenPhotoLoupe={(img, title, caption) => {
              handleOpenPhotoLoupe(
                img,
                title,
                caption,
                selectedCase.intakeReport.criticalAnomaly
              );
            }}
          />
        )}

        {currentScreen === 'examination' && (
          <ExaminationView
            mystery={selectedCase}
            onNavigate={handleNavigate}
            onOpenPhotoLoupe={(img, title, caption, notes) => {
              handleOpenPhotoLoupe(img, title, caption, notes);
            }}
            onVerdictSubmitted={(hypoId) => {
              setSelectedHypothesisId(hypoId);
            }}
          />
        )}

        {currentScreen === 'solution' && (
          <SolutionView
            mystery={selectedCase}
            selectedHypothesisId={selectedHypothesisId}
            onNavigate={handleNavigate}
            onOpenShareModal={() => setShareModalOpen(true)}
            isCaseSaved={savedCases.includes(selectedCase.id)}
            onToggleSaveCase={handleToggleSaveCase}
          />
        )}

        {currentScreen === 'archives' && (
          <ArchivesView
            profile={{
              ...INITIAL_PROFILE,
              savedCases
            }}
            onNavigate={handleNavigate}
            onSelectCase={(c) => setSelectedCase(c)}
          />
        )}
      </main>

      {/* Bottom Navigation Bar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
      />

      {/* Modals */}
      <EvidenceLoupeModal
        isOpen={loupeData.isOpen}
        onClose={() => setLoupeData((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={loupeData.imageUrl}
        title={loupeData.title}
        caption={loupeData.caption}
        notes={loupeData.notes}
      />

      <SampleEvidenceModal
        isOpen={sampleSlipsOpen}
        onClose={() => setSampleSlipsOpen(false)}
        onOpenCase={() => {
          setSelectedCase(FEATURED_CASE);
          setCurrentScreen('detail');
        }}
      />

      <ShareDossierModal
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        mystery={selectedCase}
      />
    </div>
  );
}
