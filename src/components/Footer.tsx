import React from 'react';
import { motion } from 'motion/react';
import { SCHOOL_INFO } from '../data/schoolData';
import { PortalModalType } from '../types';

interface FooterProps {
  onOpenModal: (modal: PortalModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-[#0B192C] text-slate-400 text-xs border-t border-slate-800" id="site-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* School Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                alt="Stephen International School Logo"
                className="w-10 h-10 object-contain"
                src={SCHOOL_INFO.images.footerLogo}
              />
              <span className="text-lg font-bold text-white tracking-tight">STEPHEN INTERNATIONAL SCHOOL</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Dedicated to molding conscious scholars, innovative thinkers, and compassionate global citizens within a joyful, safe, and academically rigorous environment.
            </p>
            <div className="text-[11px] text-slate-500 space-y-0.5">
              <p>Affiliated to CBSE (New Delhi) • Affiliation NO. {SCHOOL_INFO.affiliationNo}</p>
              <p>{SCHOOL_INFO.address}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Academic Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-amber-400 transition-colors" href="#about">
                  About the School
                </a>
              </li>
              <li>
                <a className="hover:text-amber-400 transition-colors" href="#academics">
                  CBSE Board Results
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('fee')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Fee Structure &amp; Schedule
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('tc')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Transfer Certificate (TC)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal('disclosure')}
                  className="hover:text-amber-400 transition-colors text-left cursor-pointer"
                >
                  Mandatory Public Disclosure
                </button>
              </li>
              <li>
                <a
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                  href={SCHOOL_INFO.youtubeUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-red-500 font-bold">▶</span>
                  <span>YouTube Channel ({SCHOOL_INFO.youtubeHandle})</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Admissions Help */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Admissions Helpdesk</h4>
            <p className="text-slate-400 text-xs mb-3">Reach our admissions coordinator for 2026-27 inquiries:</p>
            <a
              className="text-amber-400 font-bold text-sm block mb-1 hover:underline"
              href={`tel:${SCHOOL_INFO.phoneRaw}`}
            >
              {SCHOOL_INFO.phone}
            </a>
            <a
              className="text-slate-300 text-xs block hover:underline"
              href={`mailto:${SCHOOL_INFO.email}`}
            >
              {SCHOOL_INFO.email}
            </a>
            <p className="text-[11px] text-slate-500 mt-3">School Timings: 8:00 AM – 2:15 PM</p>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-3 text-slate-500 text-[11px]">
          <p>© 2026 Stephen International School. All rights reserved.</p>
          <p>CBSE Affiliation NO. {SCHOOL_INFO.affiliationNo} | Mehlan Chowk, Sangrur, Punjab</p>
        </div>
      </div>
    </footer>
  );
};
