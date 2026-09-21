import React from 'react';
import { motion } from 'motion/react';
import { X, Award, Medal, Calendar, Check, Download, Printer } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';

interface SportsCurriculumModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SportsCurriculumModal: React.FC<SportsCurriculumModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const weeklySchedule = [
    { day: 'Monday & Wednesday', time: '6:30 AM – 7:45 AM', activity: 'Athletics, 200m Sprint Intervals, Relay Drills', coach: 'Coach Baljit Singh (NIS Certified)' },
    { day: 'Tuesday & Thursday', time: '6:30 AM – 7:45 AM', activity: 'Cricket Academy: Turf Batting & Automated Bowling Sessions', coach: 'Coach Gurwinder Singh' },
    { day: 'Friday', time: '6:30 AM – 7:45 AM', activity: 'Football Tactical Formations, Goal-Keeping & Penalty Shootouts', coach: 'Coach Amritpal Singh' },
    { day: 'Monday to Friday', time: '1:15 PM – 2:00 PM', activity: 'Indoor Arena: Badminton, Table Tennis & Chess Reflex Drills', coach: 'Coach Priya Sharma' },
    { day: 'Saturday Morning', time: '8:00 AM – 10:00 AM', activity: 'Yoga Asanas, Taekwondo Belt Training, Agility Calisthenics', coach: 'Master Kulwinder Singh' },
  ];

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
        className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full overflow-hidden border border-slate-200 my-8"
      >
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-400/30">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Sports &amp; Physical Fitness Academy
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Sports Curriculum &amp; Training Schedule 2026–27
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
          {/* Champion Banner */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <Medal className="w-6 h-6" />
            </div>
            <div className="text-xs text-amber-900">
              <p className="font-bold text-sm">Champion Pathway Program:</p>
              <p>
                Inspired by Asian Gold Medalist <strong>Sehnoor Bawa</strong>, our intensive conditioning curriculum develops speed, stamina, sports ethics, and prepares student athletes for state and national CBSE clusters.
              </p>
            </div>
          </div>

          {/* Training Schedule Table */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-3 uppercase tracking-wider text-amber-700">
              Weekly Sports Academy Schedule
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="p-3.5">Days</th>
                    <th className="p-3.5">Timing</th>
                    <th className="p-3.5">Discipline &amp; Training Drill</th>
                    <th className="p-3.5">Head Instructor</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {weeklySchedule.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="p-3.5 font-bold text-slate-900">{item.day}</td>
                      <td className="p-3.5 font-mono text-slate-700">{item.time}</td>
                      <td className="p-3.5 text-slate-800 font-medium">{item.activity}</td>
                      <td className="p-3.5 text-slate-600">{item.coach}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Competitions & Khel Utsav */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h5 className="font-bold text-slate-900 text-sm">Khel Utsav 2026 Details</h5>
              <p className="text-slate-600">
                Annual Inter-House Sports Extravaganza with 4 houses: <strong>Nehru</strong>, <strong>Tagore</strong>, <strong>Bhagat Singh</strong>, and <strong>Raman</strong> competing across 32 track &amp; court events.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h5 className="font-bold text-slate-900 text-sm">Fitness Evaluation Criteria</h5>
              <p className="text-slate-600">
                Quarterly BMI assessments, beep endurance tests, flexibility benchmarks, and digital health passports maintained for every enrolled student.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 px-6 flex justify-between items-center">
          <div className="text-xs text-slate-500">
            Certified NIS Trainers • First-Aid &amp; Physiotherapy Station on Campus
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Schedule</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
