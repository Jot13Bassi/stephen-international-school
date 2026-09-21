import React from 'react';
import { motion } from 'motion/react';
import { Award, Medal, Check, Flag, Building2, Clock, FileSignature, Camera, Sparkles } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PortalModalType } from '../types';

interface SportsExcellenceSectionProps {
  onOpenModal: (modal: PortalModalType) => void;
}

export const SportsExcellenceSection: React.FC<SportsExcellenceSectionProps> = ({ onOpenModal }) => {
  const sports = [
    {
      emoji: '🏃',
      title: 'Athletics & Running Track',
      badge: 'Track & Field',
      badgeColor: 'bg-amber-500/10 text-amber-700 border-amber-500/30',
      iconBg: 'bg-amber-100 text-amber-700',
      description:
        'Dedicated 200m synthetic sprint track, long jump pit, and high jump arenas equipped for track events and national endurance training.',
      feature: 'Sprint Drills & Marathon Preparation'
    },
    {
      emoji: '🏏',
      title: 'Cricket Academy & Practice Nets',
      badge: 'Cricket Academy',
      badgeColor: 'bg-blue-50 text-blue-900 border-blue-200',
      iconBg: 'bg-blue-100 text-blue-900',
      description:
        'Specialized turf wickets, automated bowling machines, dedicated practice batting cages, and certified NIS coaching for competitive junior leagues.',
      feature: 'Professional Bowling Machines & Turf'
    },
    {
      emoji: '⚽',
      title: 'Football & Multi-purpose Ground',
      badge: 'Full-Size Turf',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      iconBg: 'bg-emerald-100 text-emerald-700',
      description:
        'Full-size natural grass football field hosting CBSE cluster qualifiers, inter-house soccer leagues, and athletic drill exhibitions.',
      feature: 'Inter-School Championship Host'
    },
    {
      emoji: '🏀',
      title: 'Basketball & Volleyball Courts',
      badge: 'Floodlit Courts',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      iconBg: 'bg-purple-100 text-purple-700',
      description:
        'All-weather floodlit acrylic courts meeting district specifications with high-impact cushioned flooring for tactical gameplay and tournament matches.',
      feature: 'District Tournament Standard Courts'
    },
    {
      emoji: '🏸',
      title: 'Badminton & Table Tennis Arena',
      badge: 'Indoor Arena',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      iconBg: 'bg-sky-100 text-sky-700',
      description:
        'Indoor wooden-floor multi-courts featuring anti-glare lighting, calibrated tables, and high-frequency reflex training stations.',
      feature: 'Wooden Flooring & Reflex Training'
    },
    {
      emoji: '🥋',
      title: 'Martial Arts, Yoga & Taekwondo',
      badge: 'Mind & Self-Defense',
      badgeColor: 'bg-pink-100 text-pink-700 border-pink-200',
      iconBg: 'bg-pink-100 text-pink-700',
      description:
        'Self-defense empowerment, belt graduations, mindful yogic breathwork, and agility routines fostering self-control and confidence.',
      feature: 'Mindfulness, Flexibility & Defense'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200 relative overflow-hidden" id="sports-athletics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-50 text-amber-700 border border-amber-200/80 mb-3">
            <Award className="w-3.5 h-3.5" />
            Athletics &amp; Physical Education
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Fostering Champions: <span className="text-amber-600">World-Class Sports</span> &amp; Physical Development
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            At Stephen International School, we believe athletic discipline builds resilience, leadership, and lifelong health. Explore our state-of-the-art sporting facilities, dedicated coaching mentors, and inter-school championship programs.
          </p>
        </motion.div>

        {/* Key Sports Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {sports.map((sport, idx) => (
            <motion.div
              key={sport.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              whileHover={{ y: -6, scale: 1.015 }}
              className="p-6 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-400 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 6 }}
                    className={`w-12 h-12 rounded-xl ${sport.iconBg} flex items-center justify-center text-xl shadow-2xs`}
                  >
                    <span className="text-xl">{sport.emoji}</span>
                  </motion.div>
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${sport.badgeColor}`}>
                    {sport.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{sport.title}</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {sport.description}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/70 text-[11px] font-semibold text-slate-500 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{sport.feature}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sports Achievements & Highlights Banner: Sehnoor Bawa with Motion Entrance */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 bg-gradient-to-r from-[#0B192C] via-slate-900 to-blue-950 rounded-2xl border-2 border-amber-400/40 shadow-xl overflow-hidden relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-4 sm:p-6 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative rounded-xl overflow-hidden shadow-2xl border-2 border-amber-400/40 group max-w-sm w-full"
              >
                <img
                  src={SCHOOL_INFO.images.sehnoorBawa}
                  alt="Sehnoor Bawa - Gold Medalist at Under-20 Asian Athletics Championships"
                  className="w-full h-auto object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md">
                    <Award className="w-3.5 h-3.5" /> Asian Gold Medalist
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 text-white space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/30">
                <Award className="w-3.5 h-3.5" /> Hall of Fame • International Glory
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Proud International Champion:{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                  Sehnoor Bawa
                </span>
              </h3>
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                <p className="text-sm sm:text-base font-semibold text-amber-300 flex items-center gap-2">
                  <Medal className="w-5 h-5 text-amber-400 shrink-0" /> Won GOLD at Under-20 Asian Athletics Championships
                </p>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Hong Kong, China • 4×400m Relay Event — Representing India on the Global Stage
                </p>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Stephen International School celebrates our trailblazing athlete Sehnoor Bawa for bringing monumental pride to the nation and our institution. His dedication exemplifies our ethos of athletic perseverance, rigorous training, and world-class sports mentorship.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Check className="w-4 h-4 text-emerald-400" /> 4×400m Relay Gold
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Flag className="w-4 h-4 text-amber-400" /> Team India Athlete
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">
                  <Building2 className="w-4 h-4 text-sky-400" /> Stephen Sports Legacy
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 4 Stats Blocks with Staggered Entrance */}
        <div className="bg-[#0F172A] rounded-2xl p-6 sm:p-8 text-white mb-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-2xl shrink-0">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">Khel Utsav</p>
                <p className="text-xs text-slate-400">Grand Annual Sports Meet</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-2xl shrink-0">
                <Medal className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">45+ Medals</p>
                <p className="text-xs text-slate-400">CBSE Cluster &amp; District Trophies</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-sky-400 flex items-center justify-center text-2xl shrink-0">
                <Building2 className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">NIS Certified</p>
                <p className="text-xs text-slate-400">Specialized Coaches &amp; Mentors</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center text-2xl shrink-0">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">Daily Routine</p>
                <p className="text-xs text-slate-400">Morning Drill &amp; Calisthenics</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Call to Action with Motion physics */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            id="sports-curriculum-btn"
            type="button"
            onClick={() => onOpenModal('sports-curriculum')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <FileSignature className="w-4 h-4" />
            <span>Download Sports Curriculum &amp; Schedule</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            id="sports-gallery-btn"
            type="button"
            onClick={() => onOpenModal('sports-curriculum')}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs uppercase tracking-wider border border-slate-700 transition-all cursor-pointer shadow-xs hover:shadow-md"
          >
            <Camera className="w-4 h-4" />
            <span>View Athletics Gallery</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
