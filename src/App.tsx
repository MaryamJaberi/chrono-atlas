import React, { useState } from 'react';
import { LanguageKey } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CardPreview } from './components/CardPreview';
import { DeepTimeTimeline } from './components/DeepTimeTimeline';
import { ViewsExplorer } from './components/ViewsExplorer';
import { LiveDemoFrame } from './components/LiveDemoFrame';
import { Footer } from './components/Footer';
import { CodeExportModal } from './components/CodeExportModal';
import { GitHubGuideModal } from './components/GitHubGuideModal';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageKey>('fa');
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);
  const [isGithubGuideOpen, setIsGithubGuideOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      dir={currentLang === 'fa' ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-slate-950 text-slate-100 flex flex-col ${
        currentLang === 'fa' ? 'font-vazir' : 'font-sans'
      }`}
    >
      {/* Top Navbar */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        onOpenExportModal={() => setIsExportModalOpen(true)}
        onOpenGithubGuide={() => setIsGithubGuideOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1">
        {/* Hero with Core Metrics */}
        <Hero
          currentLang={currentLang}
          onOpenExportModal={() => setIsExportModalOpen(true)}
          onOpenGithubGuide={() => setIsGithubGuideOpen(true)}
          onScrollToCard={() => scrollToSection('card-preview-section')}
        />

        {/* The Beautified Portfolio Card Preview (EN, FA, NL) */}
        <div id="card-preview-section">
          <CardPreview
            activeLang={currentLang}
            onSelectLang={setCurrentLang}
            onExploreViews={() => scrollToSection('views-section')}
            onOpenTimeline={() => scrollToSection('timeline-section')}
          />
        </div>

        {/* 5 Perspectives / Views Deep Explorer */}
        <ViewsExplorer currentLang={currentLang} />

        {/* Logarithmic vs Linear Deep-Time Scale Visualizer */}
        <div id="timeline-section">
          <DeepTimeTimeline currentLang={currentLang} />
        </div>

        {/* Live Simulator & GitHub Pages View */}
        <LiveDemoFrame currentLang={currentLang} />
      </main>

      {/* Footer */}
      <Footer
        currentLang={currentLang}
        onOpenGithubGuide={() => setIsGithubGuideOpen(true)}
        onOpenExportModal={() => setIsExportModalOpen(true)}
      />

      {/* Code Export Modal (Clean Raw & Beautified CSS) */}
      <CodeExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
        currentLang={currentLang}
      />

      {/* GitHub Guide & Direct Links Modal */}
      <GitHubGuideModal
        isOpen={isGithubGuideOpen}
        onClose={() => setIsGithubGuideOpen(false)}
        currentLang={currentLang}
      />
    </div>
  );
}
