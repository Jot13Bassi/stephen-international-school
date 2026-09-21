import React, { useState } from 'react';
import { motion } from 'motion/react';
import { X, Receipt, Calculator, Bus, CheckCircle, ShieldCheck } from 'lucide-react';
import { FEE_TIERS, SCHOOL_INFO } from '../../data/schoolData';

interface FeeStructureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FeeStructureModal: React.FC<FeeStructureModalProps> = ({ isOpen, onClose }) => {
  const [selectedTransportZone, setSelectedTransportZone] = useState('0');

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
              <Receipt className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                Approved Session 2026–2027
              </span>
              <h3 className="text-xl font-extrabold text-white">
                Fee Structure &amp; Payment Schedule
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
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-900 flex items-center justify-between">
            <div>
              <span className="font-bold">Transparent CBSE Fee Policy:</span> No hidden costs or unapproved capitation fees. Payments accepted quarterly via online portal, UPI, or designated bank branches.
            </div>
            <span className="px-2.5 py-1 bg-amber-200/60 rounded font-semibold text-[11px] shrink-0 ml-3">
              Affiliation #1631347
            </span>
          </div>

          {/* Fee Table */}
          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200 uppercase tracking-wider">
                <tr>
                  <th className="p-3.5">Category / Classes</th>
                  <th className="p-3.5">Admission Fee (One-Time)</th>
                  <th className="p-3.5">Tuition Fee (Quarterly)</th>
                  <th className="p-3.5">Annual Charges</th>
                  <th className="p-3.5">Sports &amp; Lab Activity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {FEE_TIERS.map((tier, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5">
                      <p className="font-bold text-slate-900">{tier.category}</p>
                      <p className="text-[11px] text-slate-500">{tier.grades}</p>
                    </td>
                    <td className="p-3.5 font-semibold text-slate-700">₹{tier.admissionFee.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 font-bold text-amber-700">₹{tier.tuitionFeeQuarterly.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 text-slate-600">₹{tier.annualCharges.toLocaleString('en-IN')}</td>
                    <td className="p-3.5 text-slate-600">₹{tier.activitiesFee.toLocaleString('en-IN')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Transport Zone Calculator */}
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
            <h4 className="font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
              <Bus className="w-4 h-4 text-amber-600" /> Optional GPS Transport Fee Estimation (Monthly)
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Select Pickup Area:</label>
                <select
                  value={selectedTransportZone}
                  onChange={(e) => setSelectedTransportZone(e.target.value)}
                  className="w-full p-2 rounded-lg border border-slate-300 text-xs focus:ring-amber-500 focus:border-amber-500"
                >
                  <option value="0">Select Route Zone</option>
                  <option value="1200">Mehlan Chowk Local (₹1,200/mo)</option>
                  <option value="1600">Sunam City Route (₹1,600/mo)</option>
                  <option value="1800">Sangrur City Route (₹1,800/mo)</option>
                  <option value="1700">Dirba &amp; Cheema Route (₹1,700/mo)</option>
                </select>
              </div>
              <div className="sm:col-span-2 flex items-center">
                {selectedTransportZone !== '0' ? (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs w-full">
                    <p className="font-bold flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600" /> Live GPS Bus Enabled
                    </p>
                    <p className="mt-0.5">Estimated transport fee: <strong>₹{selectedTransportZone} per month</strong> (Includes speed-governor, CCTV, female attendant, and seat assurance).</p>
                  </div>
                ) : (
                  <p className="text-slate-500 text-xs italic">
                    Select your locality to see verified monthly bus charges with door-to-door tracking.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Bank Payment Details */}
          <div className="p-4 rounded-xl bg-slate-900 text-white text-xs flex flex-wrap justify-between items-center gap-4">
            <div>
              <p className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">Official School Bank Account</p>
              <p className="text-slate-300 font-semibold mt-0.5">Account Name: Stephen International School</p>
              <p className="text-slate-400">Bank: HDFC Bank / Punjab National Bank • IFSC: HDFC0001842</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-300 font-mono bg-white/10 px-3 py-1.5 rounded border border-white/20">
                UPI: stephensangrur@upi
              </span>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-4 px-6 flex justify-end">
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
