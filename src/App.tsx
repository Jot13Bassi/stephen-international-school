import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { TopBar } from './components/TopBar';
import { MainHeader } from './components/MainHeader';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { HeroSection } from './components/HeroSection';
import { WelcomeSection } from './components/WelcomeSection';
import { AcademicsSection } from './components/AcademicsSection';
import { BentoFeaturesSection } from './components/BentoFeaturesSection';
import { SportsExcellenceSection } from './components/SportsExcellenceSection';
import { BooksStationerySection } from './components/BooksStationerySection';
import { YouTubeHighlightsSection } from './components/YouTubeHighlightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingSocialDock } from './components/FloatingSocialDock';
import { PersistentMobileNav } from './components/PersistentMobileNav';

import { AdmissionModal } from './components/modals/AdmissionModal';
import { TransferCertificateModal } from './components/modals/TransferCertificateModal';
import { FeeStructureModal } from './components/modals/FeeStructureModal';
import { BookListModal } from './components/modals/BookListModal';
import { SchoolCalendarModal } from './components/modals/SchoolCalendarModal';
import { PublicDisclosureModal } from './components/modals/PublicDisclosureModal';
import { SportsCurriculumModal } from './components/modals/SportsCurriculumModal';
import { PortalModalType } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<PortalModalType>('none');

  const handleOpenModal = (modal: PortalModalType) => {
    setActiveModal(modal);
  };

  const handleCloseModal = () => {
    setActiveModal('none');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950 pb-16 lg:pb-0">
      {/* Top Utility Contact & CBSE Bar */}
      <TopBar />

      {/* Main Persistent Sticky Header Navigation */}
      <MainHeader onOpenModal={handleOpenModal} />

      {/* News & Circulars Marquee */}
      <AnnouncementTicker />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Hero Banner with Modern Circular Architecture */}
        <HeroSection onOpenModal={handleOpenModal} />

        {/* Welcome Section with Institution Message */}
        <WelcomeSection />

        {/* Academics & CBSE Curriculum Wing Section */}
        <AcademicsSection onOpenModal={handleOpenModal} />

        {/* Bento Grid: 6 Key Campus Features & Pillars */}
        <BentoFeaturesSection />

        {/* Sports & Athletics Excellence (Including Champion Sehnoor Bawa) */}
        <SportsExcellenceSection onOpenModal={handleOpenModal} />

        {/* Prescribed Books & Authorized Store Outlets (Sunam & Dirba) */}
        <BooksStationerySection onOpenModal={handleOpenModal} />

        {/* Campus in Action | Official YouTube Channel Highlights */}
        <YouTubeHighlightsSection />

        {/* Contact Information, Admissions Desk & Campus Location */}
        <ContactSection onOpenModal={handleOpenModal} />
      </main>

      {/* Persistent Mobile Bottom Navigation Bar for Handheld Devices */}
      <PersistentMobileNav onOpenModal={handleOpenModal} />

      {/* Floating Social Icons Dock on Left */}
      <FloatingSocialDock />

      {/* Official School Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Screens & Modals */}
      <AnimatePresence>
        {activeModal === 'admission' && (
          <AdmissionModal
            key="admission-modal"
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}

        {activeModal === 'tc' && (
          <TransferCertificateModal
            key="tc-modal"
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}

        {activeModal === 'fee' && (
          <FeeStructureModal
            key="fee-modal"
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}

        {activeModal === 'books' && (
          <BookListModal
            key="books-modal"
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}

        {activeModal === 'calendar' && (
          <SchoolCalendarModal
            key="calendar-modal"
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}

        {activeModal === 'disclosure' && (
          <PublicDisclosureModal
            key="disclosure-modal"
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}

        {activeModal === 'sports-curriculum' && (
          <SportsCurriculumModal
            key="sports-curriculum-modal"
            isOpen={true}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
