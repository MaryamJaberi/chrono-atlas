import React from 'react';
import { Globe, Github, ExternalLink, Sparkles, BookOpen, Layers } from 'lucide-react';
import { LanguageKey } from '../types';
import { GITHUB_REPO_URL, LIVE_DEMO_URL, PORTFOLIO_REPO_URL } from '../data/projectData';

interface HeaderProps {
  currentLang: LanguageKey;
  onLanguageChange: (lang: LanguageKey) => void;
  onOpenExportModal: () => void;
  onOpenGithubGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  onOpenExportModal,
  onOpenGithubGuide,
}) => {
  const isFa = currentLang === 'fa';

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/85 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Logo & Brand */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 p-[1px] shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center">
              <span className="text-amber-400 font-cinzel font-bold text-lg">⏳</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-lg sm:text-xl font-bold tracking-tight text-white">
                Chrono Atlas
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30 font-medium">
                v1.0
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">
              {isFa ? 'اطلس تعاملی زمین و زمان · مریم جابری' : 'Interactive Atlas of Earth through Time · Maryam Jaberi'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <div className="flex items-center p-1 bg-slate-900 border border-slate-800 rounded-lg text-xs">
            <button
              id="lang-btn-fa"
              onClick={() => onLanguageChange('fa')}
              className={`px-2.5 py-1 rounded transition-all font-medium ${
                currentLang === 'fa'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              فارسی
            </button>
            <button
              id="lang-btn-en"
              onClick={() => onLanguageChange('en')}
              className={`px-2.5 py-1 rounded transition-all font-medium ${
                currentLang === 'en'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              id="lang-btn-nl"
              onClick={() => onLanguageChange('nl')}
              className={`px-2.5 py-1 rounded transition-all font-medium ${
                currentLang === 'nl'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              NL
            </button>
          </div>

          {/* GitHub Guide button */}
          <button
            id="open-github-guide-btn"
            onClick={onOpenGithubGuide}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
          >
            <Github className="w-3.5 h-3.5 text-slate-300" />
            <span>{isFa ? 'راهنمای گیت‌هاب' : 'GitHub Guide'}</span>
          </button>

          {/* Code Export button */}
          <button
            id="copy-snippet-top-btn"
            onClick={onOpenExportModal}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 border border-amber-500/40 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{isFa ? 'کد پورتفولیو' : 'Get Portfolio Code'}</span>
          </button>

          {/* Direct Live Demo Link */}
          <a
            id="header-live-demo-link"
            href={LIVE_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20 transition-all"
          >
            <span>{isFa ? 'نسخه زنده' : 'Live Demo'}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </header>
  );
};
