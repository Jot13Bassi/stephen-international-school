import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, Play, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const YouTubeHighlightsSection: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const videoCards = [
    {
      id: 'v1',
      title: 'Khel Utsav 2025: Grand Annual Athletic Meet & March Past',
      category: 'Sports & Parade',
      duration: '4:20',
      description: 'Glimpses of sprint finals, high jump competitions, trophy awards, and student band performances.',
      accent: 'from-amber-500/20 to-orange-500/20',
    },
    {
      id: 'v2',
      title: 'Circular Campus Tour: Architecture, Green Terraces & Smart Labs',
      category: 'Campus Walkthrough',
      duration: '5:45',
      description: 'Explore the modern aerodynamic circular infrastructure, science suites, and expansive football turf.',
      accent: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 'v3',
      title: 'Asian Athletics Gold Medalist Sehnoor Bawa Felicitation Ceremony',
      category: 'Special Feature',
      duration: '3:15',
      description: 'Stephen International School honors champion athlete Sehnoor Bawa for international track victory.',
      accent: 'from-emerald-500/20 to-teal-500/20',
    },
  ];

  return (
    <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800 relative overflow-hidden" id="youtube-gallery">
      {/* Decorative ambient glowing circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-slate-800"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30 mb-3">
              <span className="font-bold">▶</span>
              <span>Official YouTube Channel</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Campus in Action | Video Highlights
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Explore vibrant moments, academic events, athletic competitions, and campus celebrations.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              id="visit-official-youtube-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#FF0000] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-red-600/30 hover:shadow-xl transition-all"
              href={SCHOOL_INFO.youtubeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>Visit Official YouTube Channel</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
            </motion.a>
          </div>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videoCards.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-800 bg-slate-800/60 overflow-hidden hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-950/40 transition-all group flex flex-col justify-between"
            >
              <div>
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedVideo(video.title)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedVideo(video.title);
                    }
                  }}
                  className={`h-48 bg-gradient-to-br ${video.accent} flex items-center justify-center relative group-hover:scale-101 transition-transform cursor-pointer`}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-xl transition-colors"
                  >
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </motion.div>
                  <span className="absolute bottom-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded bg-black/80 text-white">
                    {video.duration}
                  </span>
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-black/60 text-amber-300 backdrop-blur-xs">
                    {video.category}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-white text-base leading-snug group-hover:text-amber-300 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <a
                  href={SCHOOL_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 transition-colors"
                >
                  Watch on YouTube Channel <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Player Preview */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-slate-900 border border-slate-700 rounded-2xl max-w-2xl w-full p-6 text-white relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white mb-3">
                <span>Official Video Highlight</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{selectedVideo}</h3>
              <div className="aspect-video bg-black rounded-xl overflow-hidden flex flex-col items-center justify-center p-6 text-center border border-slate-800 my-4 relative">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                  className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center mb-4 shadow-lg shadow-red-600/50"
                >
                  <Play className="w-8 h-8 fill-white translate-x-1" />
                </motion.div>
                <p className="text-sm font-semibold text-slate-200">
                  Streaming from Stephen International School Official Channel
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  {SCHOOL_INFO.youtubeHandle}
                </p>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  href={SCHOOL_INFO.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-5 py-2 rounded-lg bg-[#FF0000] hover:bg-red-600 text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-md"
                >
                  <span>Open in YouTube App / Web</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-xs font-semibold rounded-lg text-slate-300 transition-colors cursor-pointer"
                >
                  Close Preview
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
