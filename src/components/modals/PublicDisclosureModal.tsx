import React from 'react';
import { motion } from 'motion/react';
import { X, Stamp, Download, FileText, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { SCHOOL_INFO, MANDATORY_DISCLOSURE_DOCS } from '../../data/schoolData';

interface PublicDisclosureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PublicDisclosureModal: React.FC<PublicDisclosureModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
              <Stamp className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                CBSE Appendix-IX Compliance
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Mandatory Public Disclosure
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
          {/* Section A: General Information */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-3 pb-2 border-b border-slate-200 uppercase tracking-wider text-amber-700">
              A. General Information
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Name of the School:</span>
                <span className="font-bold text-slate-900">{SCHOOL_INFO.name}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">CBSE Affiliation Number:</span>
                <span className="font-bold text-amber-800">{SCHOOL_INFO.affiliationNo}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">School Location Address:</span>
                <span className="font-semibold text-slate-900">{SCHOOL_INFO.address}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Principal &amp; Qualification:</span>
                <span className="font-semibold text-slate-900">Dr. H. K. Sharma (M.Sc., M.Ed., Ph.D.)</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">School Email ID:</span>
                <span className="font-semibold text-slate-900">{SCHOOL_INFO.email}</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="text-slate-500 block text-[11px]">Contact Telephone Number:</span>
                <span className="font-semibold text-slate-900">{SCHOOL_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Section B: Official Compliance Certificates */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-3 pb-2 border-b border-slate-200 uppercase tracking-wider text-amber-700">
              B. Statutory Documents &amp; Certificates
            </h4>
            <div className="space-y-2.5">
              {MANDATORY_DISCLOSURE_DOCS.map((doc) => (
                <div
                  key={doc.id}
                  className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-amber-400 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900">{doc.title}</h5>
                      <p className="text-slate-500 text-[11px] font-mono mt-0.5">{doc.regNo}</p>
                      <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1 mt-1">
                        <CheckCircle2 className="w-3 h-3" /> {doc.status}
                      </span>
                    </div>
                  </div>
                  <div className="sm:text-right shrink-0">
                    <button
                      type="button"
                      onClick={() => alert(`Certificate "${doc.title}" verified and loaded for public review.`)}
                      className="px-3 py-1.5 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-[11px] uppercase tracking-wider rounded-md inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
                    >
                      <Download className="w-3 h-3" />
                      <span>{doc.fileSize}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section C: Staff & Teacher-Student Ratio */}
          <div>
            <h4 className="font-bold text-slate-900 text-sm mb-3 pb-2 border-b border-slate-200 uppercase tracking-wider text-amber-700">
              C. Staff &amp; Infrastructure Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                <p className="text-xl font-extrabold text-slate-900">1 : 1.5</p>
                <p className="text-slate-500 text-[11px]">Teacher : Section Ratio</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                <p className="text-xl font-extrabold text-slate-900">45+</p>
                <p className="text-slate-500 text-[11px]">Qualified Faculty</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                <p className="text-xl font-extrabold text-slate-900">100%</p>
                <p className="text-slate-500 text-[11px]">Smart Classrooms</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center border border-slate-200">
                <p className="text-xl font-extrabold text-slate-900">2 Acres</p>
                <p className="text-slate-500 text-[11px]">Circular Campus Area</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-4 px-6 flex justify-between items-center text-xs text-slate-500">
          <span>Published in compliance with CBSE Circular No. CBSE/Aff./2021.</span>
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
