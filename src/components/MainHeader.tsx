import React, { useState, useEffect } from 'react';
import { Menu, X, Sparkles, FileText } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PortalModalType } from '../types';

interface MainHeaderProps {
  onOpenModal: (modal: PortalModalType) => void;
}

export const MainHeader: React.FC<MainHeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Academics', href: '#academics', id: 'academics' },
    { label: 'Campus Life', href: '#campus', id: 'campus' },
    { label: 'Sports', href: '#sports-athletics', id: 'sports-athletics' },
    { label: 'Books & Outlets', href: '#books-stationery', id: 'books-stationery' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['home', 'about', 'academics', 'campus', 'sports-athletics', 'books-stationery', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const sectionId of sectionIds) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80" id="primary-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* School Crest & Brand Identity */}
          <a className="flex items-center gap-2 sm:gap-3.5 group max-w-[70%] sm:max-w-none" href="#home" id="header-brand-logo">
            <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 flex items-center justify-center p-0.5">
              <img
                alt="Stephen International School Logo"
                className="h-full w-full object-contain filter drop-shadow-xs group-hover:scale-105 transition-transform duration-300"
                src={SCHOOL_INFO.images.logo}
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-xl lg:text-2xl font-extrabold tracking-tight text-slate-900 uppercase leading-tight group-hover:text-blue-900 transition-colors truncate">
                Stephen <span className="text-amber-600">International</span> School
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-slate-500 uppercase truncate">
                {SCHOOL_INFO.board} • Mehlan • Sangrur
              </span>
            </div>
          </a>

          {/* Desktop Persistent Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 font-medium text-slate-700 text-sm" id="desktop-nav">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  className={`px-3 py-2 rounded-lg transition-all font-medium text-xs 2xl:text-sm ${
                    isActive
                      ? 'text-blue-900 font-bold bg-blue-50/80 border-b-2 border-amber-500'
                      : 'text-slate-700 hover:text-blue-900 hover:bg-slate-50'
                  }`}
                  href={link.href}
                  id={`nav-link-${link.id}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Action Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <button
              id="cta-header-tc-btn"
              type="button"
              onClick={() => onOpenModal('tc')}
              className="px-3 lg:px-4 py-2 text-xs font-semibold text-slate-900 bg-amber-50 hover:bg-amber-100 border border-amber-300 rounded-lg transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-amber-700" />
              <span>Transfer Certificate</span>
            </button>
            <button
              id="cta-header-admission-btn"
              type="button"
              onClick={() => onOpenModal('admission')}
              className="px-4 lg:px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-500 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-950" />
              <span>Admission 2026-27</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenModal('admission')}
              className="md:hidden px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-950 bg-amber-400 rounded-lg shadow-2xs cursor-pointer"
            >
              Apply
            </button>
            <button
              aria-label="Toggle navigation menu"
              className="p-2.5 rounded-lg text-slate-700 hover:text-blue-900 hover:bg-slate-100 focus:outline-none cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
              id="mobile-menu-btn"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1 shadow-xl max-h-[80vh] overflow-y-auto" id="mobile-menu-drawer">
          <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400 px-3 py-1">
            Navigation Menu
          </div>
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                className={`block px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-900 font-bold border-l-4 border-amber-500'
                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-900'
                }`}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-slate-200 flex flex-col gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('tc');
              }}
              className="w-full text-center py-2.5 px-4 rounded-lg bg-amber-50 border border-amber-300 font-semibold text-sm text-slate-900 cursor-pointer flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-700" />
              <span>Transfer Certificate (TC)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal('admission');
              }}
              className="w-full text-center py-3 px-4 rounded-lg bg-amber-400 hover:bg-amber-500 font-bold text-sm text-slate-950 shadow-md cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-slate-950" />
              <span>Apply for Admission 2026-27</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
