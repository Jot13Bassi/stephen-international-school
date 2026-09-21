import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, GraduationCap, Bus, ArrowRight, Mail, Compass, Eye, Check, Download, Sparkles, X, Users, Trophy, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PortalModalType } from '../types';

interface HeroSectionProps {
  onOpenModal: (modal: PortalModalType) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenModal }) => {
  // Interactive Button 1: Changes text content when clicked (Virtual 360 tour / Drone view)
  const [tourModeActive, setTourModeActive] = useState(false);

  // Interactive Button 2: Changes text content when clicked (Prospectus download)
  const [prospectusState, setProspectusState] = useState<'idle' | 'loading' | 'downloaded'>('idle');

  const handleProspectusClick = () => {
    if (prospectusState === 'downloaded') {
      setProspectusState('idle');
      return;
    }
    setProspectusState('loading');
    setTimeout(() => {
      setProspectusState('downloaded');
    }, 700);
  };

  const statBadges = [
    { icon: Trophy, label: '100% CBSE Pass', sub: 'Board Results' },
    { icon: Users, label: '20:1 Scholar Ratio', sub: 'Individual Attention' },
    { icon: Award, label: '15+ Sports Arenas', sub: 'State Championships' },
    { icon: ShieldCheck, label: '100% Safe Campus', sub: 'GPS & CCTV Secured' },
  ];

  return (
    <section className="relative bg-[#0B192C] text-white overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:py-24" id="home">
      {/* Animated Ambient Glowing Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/20 blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none"
      />

      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:28px_28px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content with Staggered Motion */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-5 sm:space-y-6 text-left"
          >
            {/* Animated Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/10 text-amber-300 border border-amber-400/30 backdrop-blur-md shadow-lg shadow-amber-500/5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>Admissions Open Session 2026–2027</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white"
            >
              Nurturing Excellence, <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                Inspiring Future Leaders.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl"
            >
              Stephen International School provides a premier second learning home where every child’s unique attributes and talents blossom into academic excellence, holistic integrity, and well-being.
            </motion.p>

            {/* Quick Badges with Hover Springs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-2.5 sm:gap-4 pt-1 text-xs sm:text-sm text-slate-200 font-medium"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-sm transition-colors"
              >
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>CBSE #{SCHOOL_INFO.affiliationNo}</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-sm transition-colors"
              >
                <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>STEM &amp; Humanities</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl backdrop-blur-sm transition-colors"
              >
                <Bus className="w-4 h-4 text-amber-400 shrink-0" />
                <span>GPS Safe Transport</span>
              </motion.div>
            </motion.div>

            {/* Primary Actions & Animated Interactive Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                id="hero-explore-campus-btn"
                className="px-6 sm:px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-amber-500/20 hover:shadow-xl transition-all flex items-center gap-2 cursor-pointer"
                href="#about"
              >
                <span>EXPLORE CAMPUS</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                id="hero-inquire-online-btn"
                type="button"
                onClick={() => onOpenModal('admission')}
                className="px-5 sm:px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-700 text-white font-semibold text-xs sm:text-sm border border-slate-700 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>Inquire Online</span>
              </motion.button>

              {/* Interactive Button: Text changes when clicked */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="hero-tour-toggle-btn"
                type="button"
                onClick={() => setTourModeActive(!tourModeActive)}
                className={`px-4 sm:px-5 py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer border ${
                  tourModeActive
                    ? 'bg-amber-500/25 border-amber-400 text-amber-300 shadow-md shadow-amber-500/10'
                    : 'bg-white/5 hover:bg-white/10 border-white/20 text-slate-200'
                }`}
              >
                {tourModeActive ? (
                  <>
                    <Check className="w-4 h-4 text-amber-400" />
                    <span>✓ Aerial Mode Active (Click to Return)</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-4 h-4 text-amber-400" />
                    <span>▶ 360° Virtual Campus Tour</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Secondary Interactive Prospectus Button (Changes Text on Click) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="pt-1"
            >
              <button
                id="hero-prospectus-download-btn"
                type="button"
                onClick={handleProspectusClick}
                disabled={prospectusState === 'loading'}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors py-1 cursor-pointer"
              >
                {prospectusState === 'loading' ? (
                  <>
                    <span className="w-3.5 h-3.5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin"></span>
                    <span className="text-amber-300">Downloading 2026-27 Prospectus...</span>
                  </>
                ) : prospectusState === 'downloaded' ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">✓ Official Prospectus Saved (PDF) — Click to reset</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-amber-400" />
                    <span className="underline underline-offset-4">Download Official 2026 School Prospectus (PDF)</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Hero: Featured Campus Photo with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Animated Floating Card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white/20 group"
            >
              <img
                alt="Stephen International School Modern Circular Architectural Campus Building"
                className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src={SCHOOL_INFO.images.heroCampus}
              />
              {/* Overlay Badge */}
              <div className="absolute bottom-3 left-3 right-3 bg-[#0B192C]/90 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-white/10 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-400 font-semibold">
                    Campus Infrastructure
                  </p>
                  <p className="text-xs sm:text-sm font-bold text-white">
                    Modern Circular Campus &amp; Grounds
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.15, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                  type="button"
                  onClick={() => setTourModeActive(!tourModeActive)}
                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 hover:bg-amber-500 text-slate-950 transition-all shadow-md cursor-pointer"
                  title="Toggle Aerial Tour Details"
                >
                  <Compass className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Interactive Campus Tour Details Panel (Animated with AnimatePresence) */}
            <AnimatePresence>
              {tourModeActive && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="mt-4 p-4 rounded-xl bg-slate-800/95 border border-amber-400/40 shadow-2xl backdrop-blur-md"
                >
                  <div className="flex items-center justify-between pb-2 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-400" />
                      <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                        Interactive Campus Aerial Highlights
                      </h4>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTourModeActive(false)}
                      className="text-slate-400 hover:text-white p-1 rounded-md"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5 pt-3 text-[11px] text-slate-200">
                    <motion.div whileHover={{ scale: 1.02 }} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/70">
                      <p className="font-bold text-amber-400">1. Circular Rotunda</p>
                      <p className="text-slate-400 mt-0.5">Airy amphitheater &amp; smart classrooms</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/70">
                      <p className="font-bold text-amber-400">2. Athletics Arena</p>
                      <p className="text-slate-400 mt-0.5">200m track &amp; championship field</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/70">
                      <p className="font-bold text-amber-400">3. Cricket Nets</p>
                      <p className="text-slate-400 mt-0.5">Automated bowling &amp; turf wickets</p>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.02 }} className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/70">
                      <p className="font-bold text-amber-400">4. GPS Transport</p>
                      <p className="text-slate-400 mt-0.5">Covered bays for Sunam &amp; Dirba fleet</p>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Animated Metrics Bar at Bottom of Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {statBadges.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.03, y: -2 }}
                className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xs flex items-center gap-3 transition-colors hover:border-amber-400/40 hover:bg-white/[0.06]"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-sm sm:text-base font-extrabold text-white">{stat.label}</p>
                  <p className="text-[11px] text-slate-400">{stat.sub}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

