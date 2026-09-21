import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Building2, CheckCircle2, Sparkles, BookOpen, Compass } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const WelcomeSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden" id="about">
      {/* Subtle decorative background blur */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-amber-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left/Right: Image showing students on campus walkways */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 order-2 lg:order-2"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group"
            >
              <img
                alt="Stephen International School Campus Architecture"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                src={SCHOOL_INFO.images.aboutCampus}
              />
              <div className="absolute bottom-3 left-3 right-3 bg-[#0B192C]/90 backdrop-blur-md p-3.5 rounded-xl border border-white/10 flex items-center justify-between shadow-lg">
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-amber-400 font-semibold">Campus Architecture</p>
                  <p className="text-xs font-bold text-white">Stephen International School Campus</p>
                </div>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-400 text-slate-950">
                  <Building2 className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right/Left: Official Verbatim Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-6 space-y-6 order-1 lg:order-1"
          >
            <div>
              <span className="text-xs font-bold tracking-widest text-amber-700 uppercase bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                About Our Institution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 mt-3 tracking-tight">
                Welcome to <span className="text-amber-600">Stephen International School</span>
              </h2>
            </div>

            {/* Exact quoted text from authentic site */}
            <div className="prose prose-slate text-slate-600 text-sm sm:text-base leading-relaxed space-y-4">
              <p>
                We are running a school, not just a school but a second learning home for our lovely kids. We believe that every child is endowed with a unique set of attributes and anilities, which need to be nurtured so that they blossom.
              </p>
              <p>
                Therefor, every child deserves an education that fosters academic excellence and all-round development, and ensures their well-being. The core purpose of education is to provide children with a Learning environment which brings out the best in them.
              </p>
              <p className="font-medium text-slate-800 italic border-l-4 border-amber-400 pl-4 py-1">
                At Stephen International School, we provide a Learning environment that inspires and motivates...
              </p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3 pt-3 text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 shadow-xs">
                      <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        Our Core Pillars &amp; Educational Mission:
                      </h4>
                      <p className="text-xs sm:text-sm">
                        1. <strong>Value-Centric Education:</strong> Nurturing moral character, empathy, global perspectives, and Indian cultural values.
                      </p>
                      <p className="text-xs sm:text-sm">
                        2. <strong>STEM &amp; Innovation Labs:</strong> Advanced experiential learning suites in Physics, Chemistry, Biology, and Computer Science.
                      </p>
                      <p className="text-xs sm:text-sm">
                        3. <strong>Holistic Wellbeing:</strong> Balanced physical conditioning, mental wellness coaching, yoga, and nutritious environment.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Interactive Action Button (matches yellow button in screenshot) */}
            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                id="welcome-read-more-btn"
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <ChevronRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                <span>{isExpanded ? 'SHOW LESS' : 'READ MORE'}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
