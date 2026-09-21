import React from 'react';
import { Bell } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data/schoolData';

export const AnnouncementTicker: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white text-xs py-2 overflow-hidden border-b border-blue-900 flex items-center shadow-inner relative"
      id="news-marquee"
    >
      <div className="bg-amber-400 text-slate-950 px-3 py-0.5 ml-4 rounded font-bold uppercase tracking-wider text-[10px] flex items-center gap-1.5 shrink-0 z-10 shadow-xs">
        <Bell className="w-3 h-3 text-slate-950" />
        <span>Circular</span>
      </div>
      <div className="overflow-hidden relative w-full flex items-center ml-2">
        <div className="animate-marquee-smooth whitespace-nowrap text-slate-200">
          {ANNOUNCEMENTS.map((item, idx) => (
            <span key={`a1-${idx}`} className="mx-6 font-semibold">
              {item}
            </span>
          ))}
          {ANNOUNCEMENTS.map((item, idx) => (
            <span key={`a2-${idx}`} className="mx-6 font-semibold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
