import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Crosshair } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PortalModalType } from '../types';

interface ContactSectionProps {
  onOpenModal: (modal: PortalModalType) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-14 sm:py-20 bg-[#0F172A] text-white relative overflow-hidden" id="contact">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center sm:text-left mb-10"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
            Get in Touch &amp; Admissions Helpdesk
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-3 tracking-tight">
            Connect with Stephen International School
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            We welcome parents and students for campus visits, academic counseling, and 2026–27 admissions inquiries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Contact Details Grid */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Address */}
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/40 transition-all flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Campus Address</h4>
                  <span className="text-[11px] text-amber-400 font-mono">Mehlan Chowk</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm mt-3">
                <p className="text-slate-300 leading-relaxed">{SCHOOL_INFO.address}</p>
                <p className="text-[11px] text-slate-400 mt-2">
                  <span className="text-amber-400 font-mono">Plus Code:</span> {SCHOOL_INFO.plusCode}
                </p>
              </div>
            </motion.div>

            {/* Phone */}
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/40 transition-all flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Admissions Helpline</h4>
                  <span className="text-[11px] text-emerald-400 font-medium">Direct Assistance</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm mt-3">
                <a
                  className="text-amber-400 hover:underline font-bold block text-base"
                  href={`tel:${SCHOOL_INFO.phoneRaw}`}
                >
                  {SCHOOL_INFO.phone}
                </a>
                <p className="text-[11px] text-slate-400 mt-2">Available during school office working hours</p>
              </div>
            </motion.div>

            {/* Email & Website */}
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/40 transition-all flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Official Inquiries</h4>
                  <span className="text-[11px] text-slate-400">Online Correspondence</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm mt-3">
                <a
                  className="text-slate-200 hover:text-amber-300 break-all font-medium block"
                  href={`mailto:${SCHOOL_INFO.email}`}
                >
                  {SCHOOL_INFO.email}
                </a>
                <p className="text-[11px] text-slate-400 mt-2">
                  <span className="text-slate-400">Portal:</span> {SCHOOL_INFO.website}
                </p>
              </div>
            </motion.div>

            {/* Operating Hours */}
            <motion.div
              whileHover={{ y: -3 }}
              className="flex items-start gap-3.5 p-4 sm:p-5 rounded-xl bg-slate-800/60 border border-slate-700/60 hover:border-amber-400/40 transition-all flex-col justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Campus Timings</h4>
                  <span className="text-[11px] text-amber-300/80">Mon – Sat</span>
                </div>
              </div>
              <div className="text-xs sm:text-sm mt-3">
                <p className="text-slate-200 font-semibold">{SCHOOL_INFO.hours}</p>
                <p className="text-[11px] text-amber-300/80 mt-2">Sunday &amp; Gazetted Holidays: Closed</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Admission Open Showcase Banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div
              role="button"
              tabIndex={0}
              onClick={() => onOpenModal('admission')}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onOpenModal('admission');
                }
              }}
              className="w-full rounded-2xl shadow-xl overflow-hidden border border-slate-700 bg-slate-800/80 group cursor-pointer relative transition-all hover:border-amber-400/50"
            >
              <img
                alt="Stephen International School CBSE Board Results & Admission Open Banner"
                className="w-full h-auto object-cover object-center group-hover:scale-102 transition-transform duration-500"
                src={SCHOOL_INFO.images.admissionBanner}
              />
              <div className="p-4 bg-slate-900/95 backdrop-blur-sm border-t border-slate-700 flex items-center justify-between">
                <div>
                  <p className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">Admissions Open 2026-27</p>
                  <p className="text-xs font-semibold text-white mt-0.5">Pre-Nursery to Grade XII</p>
                </div>
                <motion.span
                  whileHover={{ scale: 1.06 }}
                  className="px-4 py-2 bg-amber-400 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-sm"
                >
                  Apply Online
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Integration Visual Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 rounded-2xl overflow-hidden border border-slate-800 bg-slate-800"
        >
          <div className="p-3 bg-slate-800/90 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                <strong>Campus Location:</strong> Dirba Road, Mehlan Chowk, Sangrur (Punjab)
              </span>
            </div>
            <a
              className="text-amber-400 hover:underline font-bold text-xs inline-flex items-center gap-1"
              href={SCHOOL_INFO.googleMapsUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              Open in Google Maps <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embed Interactive Map Visual Frame */}
          <div className="w-full h-52 sm:h-60 bg-slate-700/70 relative flex items-center justify-center text-center p-6">
            <div className="space-y-2">
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <Crosshair className="w-9 h-9 text-amber-400 mx-auto" />
              </motion.div>
              <h5 className="text-sm font-bold text-white">Stephen International School Campus</h5>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Conveniently situated on Dirba - Sangrur Rd, Mehlan Chowk, serving Sangrur, Sunam, and Dirba regions with direct bus pickup.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={SCHOOL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-500 transition-colors shadow-sm"
              >
                Get Driving Directions
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

