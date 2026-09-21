import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Search, FileSignature, CheckCircle, Printer, Download, ShieldCheck, Check } from 'lucide-react';
import { SCHOOL_INFO, SAMPLE_TCS } from '../../data/schoolData';
import { SampleTC } from '../../types';

interface TransferCertificateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TransferCertificateModal: React.FC<TransferCertificateModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTC, setSelectedTC] = useState<SampleTC | null>(SAMPLE_TCS[0]);
  const [downloadNotice, setDownloadNotice] = useState(false);

  if (!isOpen) return null;

  const filteredTCs = SAMPLE_TCS.filter(
    (tc) =>
      tc.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tc.admissionNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tc.tcNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDownload = () => {
    setDownloadNotice(true);
    setTimeout(() => setDownloadNotice(false), 3000);
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
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200 my-8"
      >
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-400/30">
              <FileSignature className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Official CBSE Verification
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Transfer Certificate (TC) Portal
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
        <div className="p-6 space-y-6">
          {/* Search Box */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Search by Student Admission Number or Name:
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="e.g. Sukhmanjot Singh or SIS-3842"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            </div>
            <p className="text-[11px] text-slate-500 mt-2">
              Quick samples available in database: <strong>Sukhmanjot Singh</strong> (AISSE Topper 98%), <strong>Simranjeet Kaur</strong>, <strong>Navjot Sharma</strong>.
            </p>
          </div>

          {/* Search Results List if more than 1 */}
          <div className="flex flex-wrap gap-2">
            {filteredTCs.map((tc) => (
              <button
                key={tc.tcNumber}
                type="button"
                onClick={() => setSelectedTC(tc)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                  selectedTC?.tcNumber === tc.tcNumber
                    ? 'bg-amber-400 text-slate-950 border-amber-500 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                }`}
              >
                {tc.studentName} ({tc.admissionNo})
              </button>
            ))}
          </div>

          {/* Stamped Certificate Preview */}
          {selectedTC ? (
            <div className="border-2 border-slate-300 rounded-xl p-6 bg-amber-50/20 relative font-serif text-slate-800 shadow-inner">
              {/* Header Stamp */}
              <div className="text-center border-b pb-4 border-slate-300 space-y-1">
                <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-amber-700">
                  Affiliated to CBSE (New Delhi) • Affiliation No. {SCHOOL_INFO.affiliationNo}
                </span>
                <h4 className="text-xl font-bold uppercase tracking-wide text-slate-900 font-sans">
                  Stephen International School
                </h4>
                <p className="text-xs text-slate-600 font-sans">
                  {SCHOOL_INFO.address} • Ph: {SCHOOL_INFO.phone}
                </p>
                <div className="inline-block px-3 py-1 bg-amber-100 text-amber-900 text-xs font-sans font-bold uppercase rounded-md mt-2 border border-amber-300">
                  School Leaving / Transfer Certificate
                </div>
              </div>

              {/* Certificate Details */}
              <div className="grid grid-cols-2 gap-4 py-4 text-xs">
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">TC Serial Number:</span>
                  <span className="font-mono font-bold text-slate-900">{selectedTC.tcNumber}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">School Admission No:</span>
                  <span className="font-mono font-bold text-slate-900">{selectedTC.admissionNo}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">Pupil's Full Name:</span>
                  <span className="font-bold text-slate-900 text-sm">{selectedTC.studentName}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">Date of Birth:</span>
                  <span className="font-bold text-slate-900">{selectedTC.dob}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">Father / Guardian's Name:</span>
                  <span className="font-semibold text-slate-800">{selectedTC.fatherName}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">Mother's Name:</span>
                  <span className="font-semibold text-slate-800">{selectedTC.motherName}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">Class Last Studied / Passed:</span>
                  <span className="font-bold text-amber-800">{selectedTC.classPassed}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">Date of Issue:</span>
                  <span className="font-semibold text-slate-800">{selectedTC.issueDate}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">Reason for Leaving:</span>
                  <span className="font-semibold text-slate-800">{selectedTC.reason}</span>
                </div>
                <div>
                  <span className="text-slate-500 font-sans block text-[11px]">General Conduct:</span>
                  <span className="font-bold text-emerald-700">{selectedTC.conduct}</span>
                </div>
              </div>

              {/* Watermark & Signatures */}
              <div className="pt-6 border-t border-slate-300 flex justify-between items-end text-xs font-sans text-slate-600">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-[11px]">
                  <ShieldCheck className="w-4 h-4" /> Digitally Verified CBSE Record
                </div>
                <div className="text-center">
                  <div className="h-10 flex items-center justify-center font-serif italic text-slate-500">
                    [Principal's Seal &amp; Signature]
                  </div>
                  <p className="border-t border-slate-400 pt-1 font-bold text-slate-900">
                    Principal, Stephen International School
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm border-2 border-dashed border-slate-200 rounded-xl">
              No matching student record found for "{searchTerm}". Please verify the admission number.
            </div>
          )}

          {downloadNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded-lg text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-600" />
              <span>Certificate {selectedTC?.tcNumber} generated and ready for official verification printout.</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-2">
            <div className="text-xs text-slate-500">
              Need duplicate physical copy? Visit the school admin office with your original fee receipt.
            </div>
            <div className="flex gap-2 w-full sm:w-auto justify-end">
              <button
                type="button"
                onClick={() => window.print()}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs rounded-lg flex items-center gap-1.5 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print TC</span>
              </button>
              <button
                type="button"
                onClick={handleDownload}
                className="px-5 py-2 bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase rounded-lg shadow-sm flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
