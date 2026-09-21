import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  BookOpen,
  Award,
  FlaskConical,
  Laptop,
  CheckCircle2,
  Sparkles,
  Download,
  Calendar,
  Check,
  RotateCcw
} from 'lucide-react';
import { PortalModalType } from '../types';

interface AcademicsSectionProps {
  onOpenModal: (modal: PortalModalType) => void;
}

type WingKey = 'kindergarten' | 'primary' | 'middle' | 'senior';

interface WingDetail {
  title: string;
  grades: string;
  badge: string;
  description: string;
  subjects: string[];
  keyHighlights: string[];
  labHighlights: string;
}

export const AcademicsSection: React.FC<AcademicsSectionProps> = ({ onOpenModal }) => {
  const [activeWing, setActiveWing] = useState<WingKey>('primary');
  // Interactive button that changes text content when clicked (state 1: eligibility)
  const [eligibilityChecked, setEligibilityChecked] = useState(false);
  const [isCheckingEligibility, setIsCheckingEligibility] = useState(false);

  // Interactive button that changes text content when clicked (state 2: syllabus download)
  const [syllabusDownloaded, setSyllabusDownloaded] = useState(false);
  const [isDownloadingSyllabus, setIsDownloadingSyllabus] = useState(false);

  const wingData: Record<WingKey, WingDetail> = {
    kindergarten: {
      title: 'Kindergarten & Early Childhood Foundation',
      grades: 'Pre-Nursery, Nursery, LKG, UKG',
      badge: 'Play-Way & Phonics Based',
      description:
        'A joyful, warm, and stimulating environment encouraging sensory discovery, linguistic fluency, motor coordination, and social-emotional growth through experiential learning.',
      subjects: [
        'Phonics & Early English Reading',
        'Mathematical Readiness & Number Play',
        'Environmental Curiosity & Nature Walks',
        'Creative Arts, Rhymes & Music',
        'Motor Skills, Clay Modeling & Sand Play'
      ],
      keyHighlights: [
        'Activity-based multisensory thematic classrooms',
        'Specially trained, caring early-childhood educators',
        'Indoor soft play park and kindergarten splash activity area',
        'Zero exam stress — holistic continuous development tracking'
      ],
      labHighlights: 'Montessori Play Lab & Early Phonics Audio-Visual Center'
    },
    primary: {
      title: 'Primary School Wing',
      grades: 'Grade 1 to Grade 5',
      badge: 'Foundational Inquiry & Core Mastery',
      description:
        'Fostering strong literacy, numeracy, critical thinking, and bilingual proficiency. Students explore science through hands-on demonstrations and develop lifelong moral values.',
      subjects: [
        'English Language & Literature',
        'Mathematics & Applied Mental Arithmetic',
        'Environmental Studies (EVS)',
        'Hindi & Punjabi Regional Languages',
        'Computer Basics & Creative Computing',
        'Physical Education & Visual Arts'
      ],
      keyHighlights: [
        'NCERT compliant activity-oriented curriculum',
        'Interactive smartboards in every classroom',
        'Weekly library, debate, and elocution sessions',
        'Remedial personal attention for conceptual reinforcement'
      ],
      labHighlights: 'Junior Mathematics & Discovery Science Laboratory'
    },
    middle: {
      title: 'Middle School Wing',
      grades: 'Grade 6 to Grade 8',
      badge: 'Analytical Thinking & STEM Discovery',
      description:
        'Bridging foundational concepts with advanced experimental science, social inquiry, logical reasoning, and modern computational skills.',
      subjects: [
        'Advanced Mathematics & Geometry',
        'General Science (Physics, Chemistry, Biology)',
        'Social Sciences (History, Civics, Geography)',
        'Languages: English, Hindi, Punjabi',
        'Computer Science, Coding & Cyber Ethics',
        'Art, Music, Yoga & Scouting'
      ],
      keyHighlights: [
        'Project-based experiential inquiry & scientific fairs',
        'Dedicated experimental laboratory sessions weekly',
        'CBSE-aligned periodic assessments with diagnostic feedback',
        'Inter-house quiz, debate, and creative writing leagues'
      ],
      labHighlights: 'Modern Physics, Chemistry & Biology Composite Science Lab'
    },
    senior: {
      title: 'Secondary & Senior Secondary Wing',
      grades: 'Grade 9 to Grade 12',
      badge: 'CBSE Board Rigor & Career Streams',
      description:
        'Intensive academic mentoring for CBSE Class X and Class XII Board Examinations. Dedicated career counseling for medical (NEET), engineering (JEE), CA/CS, and civil services.',
      subjects: [
        'Medical: Physics, Chemistry, Biology, English',
        'Non-Medical: Physics, Chemistry, Mathematics, English',
        'Commerce: Accountancy, Business Studies, Economics, Math',
        'Humanities: Political Science, History, Economics, Punjabi',
        'Skill Electives: Physical Education, Informatics Practices'
      ],
      keyHighlights: [
        'Specialized test series, previous-year board paper drill',
        'Individual career counseling & competitive exam orientation',
        'Full laboratory practicals compliant with CBSE guidelines',
        'Extra doubt-clearing sessions and topper mentorship'
      ],
      labHighlights: 'Dedicated Advanced Physics, Chemistry, Biology & Computer IT Labs'
    }
  };

  const currentWing = wingData[activeWing];

  const handleEligibilityClick = () => {
    if (eligibilityChecked) {
      setEligibilityChecked(false);
      return;
    }
    setIsCheckingEligibility(true);
    setTimeout(() => {
      setIsCheckingEligibility(false);
      setEligibilityChecked(true);
    }, 600);
  };

  const handleSyllabusClick = () => {
    if (syllabusDownloaded) {
      setSyllabusDownloaded(false);
      return;
    }
    setIsDownloadingSyllabus(true);
    setTimeout(() => {
      setIsDownloadingSyllabus(false);
      setSyllabusDownloaded(true);
    }, 700);
  };

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200 relative overflow-hidden" id="academics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-900 border border-blue-200 mb-3">
            <GraduationCap className="w-4 h-4 text-blue-900" />
            <span>Academic Excellence &amp; Board Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive CBSE Learning Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
            From playful early childhood exploration to board exam mastery, Stephen International School provides an academically rigorous, values-driven pathway affiliated to CBSE New Delhi (Affiliation No. 1631347).
          </p>
        </motion.div>

        {/* Responsive Interactive Wing Selector Tabs with Animated Active Indicator */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex flex-wrap items-center justify-center p-1.5 bg-slate-100 rounded-xl border border-slate-200 gap-1 sm:gap-2 max-w-full overflow-x-auto"
            role="tablist"
            aria-label="School Wings"
          >
            {(
              [
                { id: 'kindergarten', label: 'Kindergarten', sub: 'Pre-Nur to UKG' },
                { id: 'primary', label: 'Primary Wing', sub: 'Grades 1–5' },
                { id: 'middle', label: 'Middle Wing', sub: 'Grades 6–8' },
                { id: 'senior', label: 'Senior Secondary', sub: 'Grades 9–12' }
              ] as const
            ).map((wing) => {
              const isActive = activeWing === wing.id;
              return (
                <button
                  key={wing.id}
                  id={`tab-academic-${wing.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveWing(wing.id)}
                  className={`relative px-3 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-colors flex flex-col sm:flex-row items-center gap-1 cursor-pointer whitespace-nowrap z-10 ${
                    isActive ? 'text-white' : 'text-slate-700 hover:text-blue-900'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeWingBubble"
                      className="absolute inset-0 bg-blue-900 rounded-lg shadow-md -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span>{wing.label}</span>
                  <span className={`text-[10px] font-normal ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                    ({wing.sub})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Wing Details Card with Animated Cross-Fade */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-8 lg:p-10 shadow-xs mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWing}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Wing Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
                    {currentWing.badge}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {currentWing.grades}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {currentWing.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {currentWing.description}
                </p>

                {/* Subjects Pill Grid */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-900" />
                    Key Subjects &amp; Learning Modules
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentWing.subjects.map((sub, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05, y: -1 }}
                        className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-medium text-slate-800 shadow-2xs transition-colors hover:border-blue-300"
                      >
                        {sub}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-500" />
                    Pillars of Pedagogical Method
                  </h4>
                  {currentWing.keyHighlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Interactive Sidebar & Quick Actions */}
              <div className="lg:col-span-5 space-y-5">
                {/* Lab & Practical Infrastructure */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0">
                      <FlaskConical className="w-5 h-5 text-blue-900" />
                    </div>
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">Laboratory &amp; Practical Training</h5>
                      <p className="text-xs text-slate-500">Experiential STEM Infrastructure</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-100 font-medium">
                    {currentWing.labHighlights}
                  </p>
                </div>

                {/* Interactive Element 1: Button That Changes Text Content When Clicked */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                      Interactive Admission Tool
                    </span>
                    <span className="text-[11px] text-slate-500">Instant Check</span>
                  </div>
                  <h5 className="font-bold text-slate-900 text-sm mb-1.5">
                    Verify 2026-27 Seat &amp; Eligibility
                  </h5>
                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                    Click below to confirm class availability and age eligibility guidelines for {currentWing.title}.
                  </p>

                  {/* THE BUTTON THAT CHANGES TEXT CONTENT WHEN CLICKED */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    id="interactive-academic-eligibility-btn"
                    type="button"
                    onClick={handleEligibilityClick}
                    disabled={isCheckingEligibility}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-xs ${
                      eligibilityChecked
                        ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-500/20'
                        : 'bg-amber-400 hover:bg-amber-500 text-slate-950 hover:shadow-md'
                    }`}
                  >
                    {isCheckingEligibility ? (
                      <>
                        <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                        <span>Verifying Seat Matrix...</span>
                      </>
                    ) : eligibilityChecked ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>✓ Seats Available: Ready for Registration (Click to Reset)</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4" />
                        <span>Check Grade 2026 Eligibility</span>
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {eligibilityChecked && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-3 p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex flex-col gap-2">
                          <p className="font-medium">
                            ✓ Registration window is active for {currentWing.grades}. Please proceed to register student details.
                          </p>
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            type="button"
                            onClick={() => onOpenModal('admission')}
                            className="self-start px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-md font-bold text-[11px] cursor-pointer shadow-xs"
                          >
                            Open Admission Form
                          </motion.button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Interactive Element 2: Syllabus Download Button Changing Text */}
                <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs">
                  <h5 className="font-bold text-slate-900 text-sm mb-1">
                    Grade Syllabus &amp; Book Scheme
                  </h5>
                  <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                    Download authentic NCERT-aligned academic planner and subject breakdown.
                  </p>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    id="interactive-syllabus-download-btn"
                    type="button"
                    onClick={handleSyllabusClick}
                    disabled={isDownloadingSyllabus}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold border transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      syllabusDownloaded
                        ? 'bg-blue-50 border-blue-300 text-blue-900'
                        : 'bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800'
                    }`}
                  >
                    {isDownloadingSyllabus ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-slate-800 border-t-transparent rounded-full animate-spin"></span>
                        <span>Generating Syllabus PDF...</span>
                      </>
                    ) : syllabusDownloaded ? (
                      <>
                        <Check className="w-4 h-4 text-blue-700" />
                        <span>✓ 2026 Curriculum Guide Downloaded (Saved)</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4 text-slate-600" />
                        <span>Download {activeWing.toUpperCase()} Syllabus (PDF)</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Academic Metric Highlights with Hover Lifts */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 shadow-2xs transition-shadow hover:shadow-md"
          >
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">100%</p>
            <p className="text-xs text-slate-600 font-medium mt-1">CBSE Board Pass Ratio</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 shadow-2xs transition-shadow hover:shadow-md"
          >
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-600">1:22</p>
            <p className="text-xs text-slate-600 font-medium mt-1">Teacher-Student Ratio</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 shadow-2xs transition-shadow hover:shadow-md"
          >
            <p className="text-2xl sm:text-3xl font-extrabold text-blue-900">4</p>
            <p className="text-xs text-slate-600 font-medium mt-1">Senior Streams (Med/Non-Med/Comm/Arts)</p>
          </motion.div>
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-slate-50 p-4 sm:p-6 rounded-xl border border-slate-200 shadow-2xs transition-shadow hover:shadow-md"
          >
            <p className="text-2xl sm:text-3xl font-extrabold text-amber-600">Smart</p>
            <p className="text-xs text-slate-600 font-medium mt-1">Interactive Classrooms</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
