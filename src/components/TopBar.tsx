import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#0B192C] text-slate-200 text-xs border-b border-slate-800" id="top-utility-bar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap justify-between items-center gap-3">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-slate-300">
          <a
            id="top-bar-phone"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            href={`tel:${SCHOOL_INFO.phoneRaw}`}
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium">{SCHOOL_INFO.phone}</span>
          </a>
          <a
            id="top-bar-email"
            className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            href={`mailto:${SCHOOL_INFO.email}`}
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span className="font-medium">{SCHOOL_INFO.email}</span>
          </a>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>{SCHOOL_INFO.hours}</span>
          </div>
        </div>

        {/* Quick Action Badges & Social Links */}
        <div className="flex items-center gap-4 ml-auto">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/30">
            CBSE Affiliation NO. {SCHOOL_INFO.affiliationNo}
          </span>
          <div className="hidden sm:flex items-center space-x-3 text-slate-300">
            <a
              id="top-bar-whatsapp"
              aria-label="WhatsApp"
              className="hover:text-green-400 transition-colors"
              href={SCHOOL_INFO.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-whatsapp text-sm" />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a
              id="top-bar-facebook"
              aria-label="Facebook"
              className="hover:text-blue-400 transition-colors"
              href={SCHOOL_INFO.facebookUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-facebook-f text-sm" />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              id="top-bar-youtube"
              aria-label="YouTube"
              className="hover:text-red-500 transition-colors"
              href={SCHOOL_INFO.youtubeUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fa-brands fa-youtube text-sm" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
