import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Building2, ShieldCheck, Trophy, Users, HeartHandshake, Check, Leaf, Camera, Sparkles } from 'lucide-react';

export const BentoFeaturesSection: React.FC = () => {
  const cards = [
    {
      icon: BookOpen,
      iconBg: 'bg-blue-50 text-blue-900',
      hoverBorder: 'hover:border-blue-400/50',
      title: 'CBSE Affiliated Curriculum',
      description:
        'Affiliated to CBSE New Delhi (Affiliation No. 1631347). Focused on conceptual mastery, active inquiry, STEM labs, and creative expression.',
      footerBadge: (
        <span className="text-xs font-semibold text-blue-900 flex items-center gap-1.5">
          Standard 10 &amp; 12 Boards <Check className="w-3.5 h-3.5 text-emerald-600" />
        </span>
      )
    },
    {
      icon: Building2,
      iconBg: 'bg-amber-50 text-amber-600',
      hoverBorder: 'hover:border-amber-400/50',
      title: 'Futuristic Circular Campus',
      description:
        'Purpose-built circular architectural layout with central courtyards, green rooftop gardens, smart interactive classrooms, and airy open corridors.',
      footerBadge: (
        <span className="text-xs font-semibold text-amber-600 flex items-center gap-1.5">
          Eco-friendly Rooftop Gardens <Leaf className="w-3.5 h-3.5 text-emerald-600" />
        </span>
      )
    },
    {
      icon: ShieldCheck,
      iconBg: 'bg-emerald-50 text-emerald-600',
      hoverBorder: 'hover:border-emerald-400/50',
      title: 'Safe Transport & Campus Security',
      description:
        'Fleet of school buses with live GPS tracking, CCTV cameras, trained female attendants, wheelchair accessible ramps, and 24/7 guarded security.',
      footerBadge: (
        <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
          GPS Fleet &amp; Surveillance <Camera className="w-3.5 h-3.5 text-slate-500" />
        </span>
      )
    },
    {
      icon: Trophy,
      iconBg: 'bg-purple-50 text-purple-600',
      hoverBorder: 'hover:border-purple-400/50',
      title: 'Sports & Physical Growth',
      description:
        'Extensive athletic tracks, football grounds, cricket training nets, basketball courts, and indoor games encouraging sportsmanship and fitness.',
      footerBadge: (
        <span className="text-xs font-semibold text-purple-600">
          Dedicated Physical Instructors
        </span>
      )
    },
    {
      icon: Users,
      iconBg: 'bg-sky-50 text-sky-600',
      hoverBorder: 'hover:border-sky-400/50',
      title: 'Caring, Qualified Faculty',
      description:
        'Passionate, certified teachers who practice child-centric pedagogy, offering individualized attention, remedial guidance, and mentorship.',
      footerBadge: (
        <span className="text-xs font-semibold text-sky-600">
          Regular Parent-Teacher Meets
        </span>
      )
    },
    {
      icon: HeartHandshake,
      iconBg: 'bg-rose-50 text-rose-600',
      hoverBorder: 'hover:border-rose-400/50',
      title: 'Accessible & Inclusive Campus',
      description:
        'Wheelchair-accessible parking, seamless ramp entrances, and barrier-free pathways ensuring an equitable, loving learning environment for all.',
      footerBadge: (
        <span className="text-xs font-semibold text-rose-600">
          Inclusive Education Environment
        </span>
      )
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200 relative overflow-hidden" id="campus">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-bold text-blue-900 uppercase tracking-widest bg-blue-50 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-2 border border-blue-200">
            <Sparkles className="w-3.5 h-3.5 text-blue-800" />
            Campus Features &amp; Pillars
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Everything Your Child Needs to Flourish
          </h3>
          <p className="text-slate-500 text-sm mt-2">
            Combining CBSE-aligned high academic rigor with secure, state-of-the-art facilities.
          </p>
        </motion.div>

        {/* Bento Grid with Animated Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`bg-white p-7 rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${card.hoverBorder}`}
              >
                <div>
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center text-xl mb-5 shadow-2xs`}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{card.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  {card.footerBadge}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
