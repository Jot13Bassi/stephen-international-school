import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Building2, MapPin, Phone, Clock, GraduationCap, Check, BookOpenCheck, Store, ShieldCheck, Receipt } from 'lucide-react';
import { PortalModalType } from '../types';

interface BooksStationerySectionProps {
  onOpenModal: (modal: PortalModalType) => void;
}

export const BooksStationerySection: React.FC<BooksStationerySectionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-16 bg-slate-50 border-b border-slate-200 relative overflow-hidden" id="books-stationery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-slate-200"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-700 border border-amber-500/30 mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Session 2026–27 Academic Curriculum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B192C] tracking-tight">
              Prescribed Books &amp; Stationery Availability
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-2xl leading-relaxed">
              Authorized book stores and vendors in Sunam and Dirba for Stephen International School (NCERT &amp; CBSE Curriculum Session 2026–27)
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              id="view-booklist-modal-btn"
              type="button"
              onClick={() => onOpenModal('books')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <BookOpenCheck className="w-4 h-4" />
              <span>View Grade-Wise Book Lists</span>
            </motion.button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Location Card 1: Sunam City */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center text-xl shrink-0">
                    <Building2 className="w-6 h-6 text-blue-900" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-blue-900 uppercase tracking-wider">Zone 01 • Sangrur District</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">Sunam City Authorized Book Outlets</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                  Verified Outlets
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                    <div className="text-xs text-slate-600">
                      <p className="font-bold text-slate-900 text-sm">Standard Book Depot</p>
                      <p className="text-slate-500 mt-0.5">Near Old Bus Stand, Sunam (Pb.)</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-[11px] text-slate-500">
                        <a href="tel:+919815044210" className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-amber-600">
                          <Phone className="w-3.5 h-3.5 text-amber-600" /> +91-98150 44210
                        </a>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> Mon–Sat: 9:00 AM – 7:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-600 mt-1 shrink-0" />
                    <div className="text-xs text-slate-600">
                      <p className="font-bold text-slate-900 text-sm">Aggarwal Stationery &amp; Book Store</p>
                      <p className="text-slate-500 mt-0.5">Cinema Road, Sunam (Pb.)</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-[11px] text-slate-500">
                        <a href="tel:+919872518320" className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-amber-600">
                          <Phone className="w-3.5 h-3.5 text-amber-600" /> +91-98725 18320
                        </a>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> Mon–Sat: 9:00 AM – 7:00 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6 text-xs text-slate-600 bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/60">
                <p className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-amber-600" /> Classes Covered:
                </p>
                <p className="leading-relaxed text-slate-600">
                  Complete NCERT &amp; CBSE curriculum kits from Pre-Nursery to Grade 10th and 12th (Science, Commerce &amp; Humanities).
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <Check className="w-3 h-3" /> 100% CBSE &amp; NCERT Compliant
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                <ShieldCheck className="w-3 h-3" /> Authentic School Edition Books
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-purple-50 text-purple-700 border border-purple-200">
                <BookOpen className="w-3 h-3" /> Uniform &amp; Notebooks Available
              </span>
            </div>
          </motion.div>

          {/* Location Card 2: Dirba Mandi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl transition-all p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-4 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl shrink-0">
                    <Store className="w-6 h-6 text-amber-700" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">Zone 02 • Dirba Region</span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900">Dirba Authorized Book Outlets</h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 shrink-0">
                  Verified Outlets
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-900 mt-1 shrink-0" />
                    <div className="text-xs text-slate-600">
                      <p className="font-bold text-slate-900 text-sm">Punjab Kitab Ghar</p>
                      <p className="text-slate-500 mt-0.5">Main Bazar, Dirba (Pb.)</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-[11px] text-slate-500">
                        <a href="tel:+919417263012" className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-900">
                          <Phone className="w-3.5 h-3.5 text-blue-900" /> +91-94172 63012
                        </a>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> Mon–Sat: 9:00 AM – 7:30 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-blue-900 mt-1 shrink-0" />
                    <div className="text-xs text-slate-600">
                      <p className="font-bold text-slate-900 text-sm">Garg Book &amp; Stationery Store</p>
                      <p className="text-slate-500 mt-0.5">Patiala-Dirba Road, Dirba (Pb.)</p>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-[11px] text-slate-500">
                        <a href="tel:+919876195400" className="flex items-center gap-1.5 font-medium text-slate-700 hover:text-blue-900">
                          <Phone className="w-3.5 h-3.5 text-blue-900" /> +91-98761 95400
                        </a>
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 text-slate-400" /> Mon–Sat: 9:00 AM – 7:30 PM
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-6 text-xs text-slate-600 bg-blue-50/70 p-3.5 rounded-xl border border-blue-200/60">
                <p className="font-bold text-slate-800 mb-1 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-900" /> Classes Covered:
                </p>
                <p className="leading-relaxed text-slate-600">
                  Complete syllabus packages for Pre-Primary to Grade 10 &amp; Senior Secondary with customized school notebook bundles.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <ShieldCheck className="w-3 h-3" /> Verified Vendor
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200">
                <Receipt className="w-3 h-3" /> Class-wise Bundled Kits
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-50 text-sky-700 border border-sky-200">
                <Check className="w-3 h-3" /> Transparent MRP Rates
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
