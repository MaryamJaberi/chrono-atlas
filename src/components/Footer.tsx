import React from 'react';
import { Github, Globe, Heart, Compass, ExternalLink } from 'lucide-react';
import { LanguageKey } from '../types';
import { GITHUB_REPO_URL, LIVE_DEMO_URL, PORTFOLIO_REPO_URL } from '../data/projectData';

interface FooterProps {
  currentLang: LanguageKey;
  onOpenGithubGuide: () => void;
  onOpenExportModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onOpenGithubGuide,
  onOpenExportModal,
}) => {
  const isFa = currentLang === 'fa';

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="text-sm font-bold text-white font-cinzel">Chrono Atlas</span>
            <p className="text-xs text-slate-500">
              {isFa ? 'ایده، طراحی، پژوهش و پیاده‌سازی توسط مریم جابری' : 'Concept, design, research & build by Maryam Jaberi'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <a
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>GitHub Pages</span>
          </a>

          <a
            href={GITHUB_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Source Code</span>
          </a>

          <a
            href={PORTFOLIO_REPO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Portfolio Repo</span>
          </a>

          <button
            onClick={onOpenExportModal}
            className="hover:text-amber-400 transition-colors"
          >
            {isFa ? 'کد پورتفولیو' : 'Portfolio Code'}
          </button>

          <button
            onClick={onOpenGithubGuide}
            className="hover:text-amber-400 transition-colors"
          >
            {isFa ? 'راهنمای گیت‌هاب' : 'GitHub Guide'}
          </button>
        </div>
      </div>
    </footer>
  );
};
