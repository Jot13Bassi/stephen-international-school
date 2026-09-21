import React from 'react';
import { motion } from 'motion/react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingSocialDock: React.FC = () => {
  const dockItems = [
    {
      id: 'dock-whatsapp',
      label: 'WhatsApp',
      href: SCHOOL_INFO.whatsappUrl,
      bg: 'bg-[#25D366]',
      icon: '💬',
      title: 'Chat on WhatsApp (+91 98567 31000)',
    },
    {
      id: 'dock-facebook',
      label: 'Facebook',
      href: SCHOOL_INFO.facebookUrl,
      bg: 'bg-[#1877F2]',
      icon: 'f',
      title: 'Follow on Facebook',
    },
    {
      id: 'dock-instagram',
      label: 'Instagram',
      href: SCHOOL_INFO.instagramUrl,
      bg: 'bg-gradient-to-tr from-[#FD1D1D] via-[#E1306C] to-[#833AB4]',
      icon: '📷',
      title: 'Follow on Instagram',
    },
    {
      id: 'dock-youtube',
      label: 'YouTube',
      href: SCHOOL_INFO.youtubeUrl,
      bg: 'bg-[#FF0000]',
      icon: '▶',
      title: 'Watch on YouTube',
    },
  ];

  return (
    <aside
      className="fixed left-2.5 bottom-16 sm:bottom-8 sm:left-4 z-30 flex flex-col gap-2 sm:gap-2.5"
      id="floating-social-dock"
      aria-label="Social links dock"
    >
      {dockItems.map((item, idx) => (
        <motion.a
          key={item.id}
          id={item.id}
          aria-label={item.label}
          href={item.href}
          rel="noopener noreferrer"
          target="_blank"
          title={item.title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + idx * 0.08 }}
          whileHover={{ scale: 1.18, x: 4 }}
          whileTap={{ scale: 0.9 }}
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${item.bg} text-white flex items-center justify-center shadow-lg sm:shadow-xl transition-shadow`}
        >
          <span className="text-base sm:text-xl font-bold">{item.icon}</span>
        </motion.a>
      ))}
    </aside>
  );
};
