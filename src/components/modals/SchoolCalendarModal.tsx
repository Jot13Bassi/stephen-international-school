import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CalendarDays, Filter, Trophy, BookOpen, Sun, Clock } from 'lucide-react';
import { CALENDAR_EVENTS } from '../../data/schoolData';

interface SchoolCalendarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SchoolCalendarModal: React.FC<SchoolCalendarModalProps> = ({ isOpen, onClose }) => {
  const [filter, setFilter] = useState<'all' | 'exam' | 'sports' | 'holiday'>('all');

  if (!isOpen) return null;

  const filteredEvents = CALENDAR_EVENTS.filter(
    (ev) => filter === 'all' || ev.category === filter
  );

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'sports':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-100 text-amber-800 border border-amber-200">Sports &amp; Athletics</span>;
      case 'exam':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-purple-100 text-purple-800 border border-purple-200">Examinations</span>;
      case 'holiday':
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-rose-100 text-rose-800 border border-rose-200">Vacation / Break</span>;
      default:
        return <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-100 text-blue-800 border border-blue-200">Academic Term</span>;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 my-8"
      >
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-400/30">
              <CalendarDays className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Academic Year 2026–2027
              </span>
              <h3 className="text-xl font-extrabold text-white">
                School Calendar &amp; Important Dates
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === 'all' ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Events
            </button>
            <button
              type="button"
              onClick={() => setFilter('sports')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === 'sports' ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Sports &amp; Khel Utsav
            </button>
            <button
              type="button"
              onClick={() => setFilter('exam')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === 'exam' ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Exams &amp; Pre-Boards
            </button>
            <button
              type="button"
              onClick={() => setFilter('holiday')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                filter === 'holiday' ? 'bg-amber-400 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Vacations &amp; Holidays
            </button>
          </div>

          {/* Timeline of events */}
          <div className="space-y-3">
            {filteredEvents.map((ev, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-400 hover:shadow-xs transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    {getCategoryBadge(ev.category)}
                    <span className="text-xs font-semibold text-slate-500 font-mono">{ev.date}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{ev.title}</h4>
                  <p className="text-xs text-slate-600 max-w-xl">{ev.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <span className="inline-block px-3 py-1 rounded-md bg-white border border-slate-200 font-bold text-xs text-slate-700 shadow-2xs">
                    {ev.month}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-100 p-4 px-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};
