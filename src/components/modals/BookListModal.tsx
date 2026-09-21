import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Book, Download, Printer, Phone, Store, Check, ExternalLink } from 'lucide-react';
import { BOOK_OUTLETS_DATA } from '../../data/schoolData';

interface BookListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookListModal: React.FC<BookListModalProps> = ({ isOpen, onClose }) => {
  const [selectedGrade, setSelectedGrade] = useState<'primary' | 'middle' | 'secondary' | 'senior'>('secondary');

  if (!isOpen) return null;

  const bookData = {
    primary: [
      { subject: 'English', title: 'Marigold Book 1–5 & Grammar Tree', publisher: 'NCERT / Oxford' },
      { subject: 'Mathematics', title: 'Math-Magic & Practice Workbooks', publisher: 'NCERT' },
      { subject: 'Environmental Studies', title: 'Looking Around (EVS)', publisher: 'NCERT' },
      { subject: 'Hindi', title: 'Rimjhim Bhag 1–5', publisher: 'NCERT' },
      { subject: 'Punjabi', title: 'Punjab School Board / Navkirana Praveshika', publisher: 'PSEB / Evergreen' },
      { subject: 'Art & Craft', title: 'Creative Hands & Drawing Pad', publisher: 'Kriti Publications' },
    ],
    middle: [
      { subject: 'English', title: 'Honeysuckle, A Pact with the Sun & Applied Grammar', publisher: 'NCERT' },
      { subject: 'Mathematics', title: 'Mathematics for Middle School & Exemplar', publisher: 'NCERT' },
      { subject: 'Science', title: 'General Science & Practical Lab Manual', publisher: 'NCERT' },
      { subject: 'Social Science', title: 'Our Pasts, The Earth Our Habitat, Social & Political Life', publisher: 'NCERT' },
      { subject: 'Punjabi', title: 'Punjabi Pustak & Punjabi Vyakaran', publisher: 'PSEB' },
      { subject: 'Computer IT', title: 'Artificial Intelligence & Coding Explorer', publisher: 'Kips' },
    ],
    secondary: [
      { subject: 'English (Lang & Lit)', title: 'First Flight, Footprints Without Feet', publisher: 'NCERT' },
      { subject: 'Mathematics', title: 'Mathematics Class 10 & Lab Activity Manual', publisher: 'NCERT' },
      { subject: 'Science', title: 'Science Text Book (Physics, Chemistry, Biology) & Lab Manual', publisher: 'NCERT' },
      { subject: 'Social Science', title: 'India & Contemporary World II, Contemporary India II, Democratic Politics II, Economics', publisher: 'NCERT' },
      { subject: 'Hindi / Punjabi', title: 'Kshitij / Sparsh / Sahit Mala & Vangi', publisher: 'NCERT / PSEB' },
      { subject: 'Information Tech (402)', title: 'CBSE Skill Subject IT Text', publisher: 'CBSE / NCERT' },
    ],
    senior: [
      { subject: 'Physics', title: 'Physics Class XI/XII Part 1 & 2 + Comprehensive Lab Manual', publisher: 'NCERT' },
      { subject: 'Chemistry', title: 'Chemistry Class XI/XII Part 1 & 2 + Practical Guide', publisher: 'NCERT' },
      { subject: 'Biology / Math', title: 'Biology / Mathematics XI/XII Standard Edition', publisher: 'NCERT' },
      { subject: 'Accountancy & Business', title: 'Double Entry Book Keeping & Business Studies (Poonam Gandhi)', publisher: 'Sultan Chand / NCERT' },
      { subject: 'Economics', title: 'Microeconomics, Macroeconomics & Indian Economic Development', publisher: 'NCERT / Sandeep Garg' },
      { subject: 'English Core', title: 'Flamingo, Vistas & Core Assessment Guide', publisher: 'NCERT' },
    ],
  };

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
              <Book className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Session 2026–2027 Academic Year
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Prescribed Books &amp; Study Materials
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
          {/* Grade Selector Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
            <button
              type="button"
              onClick={() => setSelectedGrade('primary')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === 'primary' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Primary (Grades 1–5)
            </button>
            <button
              type="button"
              onClick={() => setSelectedGrade('middle')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === 'middle' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Middle School (Grades 6–8)
            </button>
            <button
              type="button"
              onClick={() => setSelectedGrade('secondary')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === 'secondary' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Secondary (Grades 9 &amp; 10 Board)
            </button>
            <button
              type="button"
              onClick={() => setSelectedGrade('senior')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                selectedGrade === 'senior' ? 'bg-amber-400 text-slate-950 shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Senior Secondary (Grades 11 &amp; 12)
            </button>
          </div>

          {/* Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase tracking-wider border-b border-slate-200">
                <tr>
                  <th className="p-3.5">Subject</th>
                  <th className="p-3.5">Prescribed Textbook &amp; Title</th>
                  <th className="p-3.5">Authorized Publisher / Board</th>
                  <th className="p-3.5 text-right">NCERT Compliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {bookData[selectedGrade].map((book, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">{book.subject}</td>
                    <td className="p-3.5 text-slate-700 font-medium">{book.title}</td>
                    <td className="p-3.5 text-slate-600">{book.publisher}</td>
                    <td className="p-3.5 text-right">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        <Check className="w-3 h-3" /> Approved
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Authorized Stores Summary */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
            <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
              <Store className="w-4 h-4 text-amber-600" /> Authorized Local Outlets for Ready Bundles:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">Sunam: Standard Book Depot</p>
                <p className="text-slate-500 text-[11px]">Near Old Bus Stand, Sunam</p>
                <a href="tel:+919815044210" className="text-amber-700 font-semibold inline-flex items-center gap-1 mt-1">
                  <Phone className="w-3 h-3" /> +91-98150 44210
                </a>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200">
                <p className="font-bold text-slate-900">Dirba: Punjab Kitab Ghar</p>
                <p className="text-slate-500 text-[11px]">Main Bazar, Dirba</p>
                <a href="tel:+919417263012" className="text-amber-700 font-semibold inline-flex items-center gap-1 mt-1">
                  <Phone className="w-3 h-3" /> +91-94172 63012
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 p-4 px-6 flex justify-between items-center">
          <div className="text-xs text-slate-500">
            Note: Parents are free to purchase books &amp; stationery from any vendor of their choice.
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-semibold text-xs rounded-lg flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print List</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase rounded-lg cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
