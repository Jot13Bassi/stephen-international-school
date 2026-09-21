import React, { useState, useEffect } from 'react';
import { Home, Info, GraduationCap, Trophy, PhoneCall, Sparkles } from 'lucide-react';
import { PortalModalType } from '../types';

interface PersistentMobileNavProps {
  onOpenModal: (modal: PortalModalType) => void;
}

export const PersistentMobileNav: React.FC<PersistentMobileNavProps> = ({ onOpenModal }) => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'academics', 'campus', 'sports-athletics', 'books-stationery', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
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

  const navItems = [
    { id: 'home', label: 'Home', href: '#home', icon: Home },
    { id: 'about', label: 'About', href: '#about', icon: Info },
    { id: 'academics', label: 'Academics', href: '#academics', icon: GraduationCap },
    { id: 'sports-athletics', label: 'Sports', href: '#sports-athletics', icon: Trophy },
    { id: 'contact', label: 'Contact', href: '#contact', icon: PhoneCall },
  ];

  return (
    <nav
      id="persistent-mobile-bottom-nav"
      aria-label="Persistent Mobile Navigation Menu"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-2 py-1.5"
    >
      <div className="max-w-md mx-auto flex items-center justify-around gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={item.href}
              id={`mobile-persistent-link-${item.id}`}
              className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-lg text-[10px] font-semibold transition-all min-h-[44px] min-w-[50px] ${
                isActive
                  ? 'text-blue-900 bg-blue-50 font-bold scale-105'
                  : 'text-slate-600 hover:text-slate-950 active:bg-slate-100'
              }`}
            >
              <Icon className={`w-4 h-4 mb-0.5 ${isActive ? 'text-amber-600' : 'text-slate-500'}`} />
              <span>{item.label}</span>
            </a>
          );
        })}

        {/* Quick Admission Trigger */}
        <button
          id="mobile-persistent-apply-btn"
          type="button"
          onClick={() => onOpenModal('admission')}
          className="flex flex-col items-center justify-center py-1 px-2 rounded-lg text-[10px] font-extrabold bg-amber-400 text-slate-950 shadow-sm active:scale-95 transition-all min-h-[44px]"
        >
          <Sparkles className="w-4 h-4 mb-0.5 text-slate-950" />
          <span>Apply</span>
        </button>
      </div>
    </nav>
  );
};
