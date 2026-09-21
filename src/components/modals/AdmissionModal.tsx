import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, CheckCircle2, User, Phone, Mail, MapPin, Bus, Calendar, School, Award, ArrowRight } from 'lucide-react';
import { SCHOOL_INFO } from '../../data/schoolData';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: 'Male',
    gradeApplying: 'Grade 1',
    stream: 'Science (Medical / Non-Medical)',
    parentName: '',
    parentPhone: '',
    parentEmail: '',
    city: 'Sunam',
    needTransport: 'yes',
    transportRoute: 'Sunam City Route',
    previousSchool: '',
  });
  const [appId, setAppId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedId = `SIS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generatedId);
    setStep(3);
  };

  const isSeniorSecondary = formData.gradeApplying === 'Grade 11' || formData.gradeApplying === 'Grade 12';

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
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 my-8"
      >
        {/* Header */}
        <div className="bg-[#0B192C] text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold text-xl border border-amber-400/30">
              SIS
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Admission Portal 2026–2027
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Stephen International School
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

        {/* Progress bar */}
        <div className="bg-slate-100 px-6 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
          <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-amber-600' : ''}`}>
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center text-[10px]">1</span>
            <span>Student Info</span>
          </div>
          <div className="h-0.5 w-12 bg-slate-200"></div>
          <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-amber-600' : ''}`}>
            <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-700 flex items-center justify-center text-[10px]">2</span>
            <span>Parent &amp; Transport</span>
          </div>
          <div className="h-0.5 w-12 bg-slate-200"></div>
          <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-green-600' : ''}`}>
            <span className="w-5 h-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-[10px]">3</span>
            <span>Registration</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <User className="w-4 h-4 text-amber-600" /> Student Profile &amp; Class Selection
              </h4>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name of Student *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Gurmanpreet Singh"
                  value={formData.studentName}
                  onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Date of Birth *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Gender *
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Grade Applying For *
                  </label>
                  <select
                    value={formData.gradeApplying}
                    onChange={(e) => setFormData({ ...formData, gradeApplying: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Pre-Nursery</option>
                    <option>Nursery</option>
                    <option>LKG</option>
                    <option>UKG</option>
                    <option>Grade 1</option>
                    <option>Grade 2</option>
                    <option>Grade 3</option>
                    <option>Grade 4</option>
                    <option>Grade 5</option>
                    <option>Grade 6</option>
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>

                {isSeniorSecondary ? (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Stream (Senior Secondary) *
                    </label>
                    <select
                      value={formData.stream}
                      onChange={(e) => setFormData({ ...formData, stream: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option>Science (Medical / Non-Medical)</option>
                      <option>Commerce with Maths/IP</option>
                      <option>Humanities &amp; Social Sciences</option>
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Previous School Attended (If Any)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Playway Academy, Sunam"
                      value={formData.previousSchool}
                      onChange={(e) => setFormData({ ...formData, previousSchool: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                )}
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  disabled={!formData.studentName}
                  onClick={() => setStep(2)}
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <span>Continue to Parent Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h4 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" /> Parent / Guardian &amp; Route Details
              </h4>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Parent / Guardian Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Harpreet Singh"
                  value={formData.parentName}
                  onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.parentPhone}
                    onChange={(e) => setFormData({ ...formData, parentPhone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="parent@email.com"
                    value={formData.parentEmail}
                    onChange={(e) => setFormData({ ...formData, parentEmail: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Town / Village / Region *
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option>Sunam</option>
                    <option>Sangrur</option>
                    <option>Dirba</option>
                    <option>Mehlan Chowk</option>
                    <option>Cheema</option>
                    <option>Other Punjab Region</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Require School GPS Bus Transport?
                  </label>
                  <select
                    value={formData.needTransport}
                    onChange={(e) => setFormData({ ...formData, needTransport: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="yes">Yes (GPS + Attendant Enabled)</option>
                    <option value="no">No (Self Conveyance / Guardian Drop)</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-slate-600 hover:text-slate-900 font-semibold text-xs uppercase"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!formData.parentName || !formData.parentPhone}
                  className="px-6 py-2.5 bg-amber-400 hover:bg-amber-500 disabled:opacity-50 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-md cursor-pointer"
                >
                  Submit Admission Application
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900">
                Application Submitted Successfully!
              </h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for applying to Stephen International School. Your provisional registration number is:
              </p>
              <div className="inline-block p-4 rounded-xl bg-amber-50 border-2 border-amber-300 text-amber-900 font-mono text-xl font-bold tracking-widest">
                {appId}
              </div>
              <div className="text-xs text-slate-500 space-y-1">
                <p>Applicant: <strong>{formData.studentName}</strong> ({formData.gradeApplying})</p>
                <p>Parent: <strong>{formData.parentName}</strong> ({formData.parentPhone})</p>
                <p className="text-amber-700 font-medium">Our admissions coordinator will contact you within 24 hours to schedule the interactive session &amp; campus orientation.</p>
              </div>

              <div className="pt-4 flex justify-center gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#0B192C] text-white hover:bg-slate-800 text-xs font-bold uppercase rounded-lg shadow-sm cursor-pointer"
                >
                  Close &amp; Return to Home
                </button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};
