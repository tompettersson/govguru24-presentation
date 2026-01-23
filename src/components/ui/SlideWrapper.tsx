'use client';

import { motion } from 'framer-motion';
import { Logo } from './Logo';
import { SlideIndicator } from './SlideIndicator';
import { SlideNavigation } from './SlideNavigation';
import { ProgressBar } from './ProgressBar';
import { useSlideNavigation } from '@/lib/useSlideNavigation';
import { cn } from '@/lib/cn';

interface SlideWrapperProps {
  slideNumber: number;
  section?: string;
  children: React.ReactNode;
  className?: string;
  darkMode?: boolean;
}

const slideVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export function SlideWrapper({ slideNumber, section, children, className, darkMode = false }: SlideWrapperProps) {
  const nav = useSlideNavigation(slideNumber);

  return (
    <div
      className={cn(
        'min-h-screen flex flex-col relative overflow-hidden',
        darkMode ? 'bg-[#0F0F12] text-white' : 'bg-[#FAFBFC] text-[#1a1a2e]'
      )}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern pointer-events-none" />
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />

      {/* Decorative Gradient Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#42409F]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#40E1AB]/5 to-transparent blur-3xl pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-3 sm:py-4 lg:py-5">
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6">
          <Logo variant="govguru" width={150} height={32} className="w-[100px] sm:w-[120px] lg:w-[150px] h-auto" />
          {section && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={cn(
                'hidden sm:inline-block text-xs sm:text-sm font-medium px-2 sm:px-4 py-1 sm:py-1.5 rounded-full border',
                darkMode
                  ? 'bg-[#42409F]/20 text-[#40E1AB] border-[#42409F]/30'
                  : 'bg-white/80 text-[#42409F] border-[#42409F]/10 shadow-sm'
              )}
            >
              {section}
            </motion.span>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
          <SlideIndicator current={nav.currentSlide} total={nav.totalSlides} />
          <SlideNavigation
            onPrev={nav.prevSlide}
            onNext={nav.nextSlide}
            onFullscreen={nav.toggleFullscreen}
            isFirstSlide={nav.isFirstSlide}
            isLastSlide={nav.isLastSlide}
          />
        </div>
      </header>

      {/* Progress Bar */}
      <ProgressBar current={nav.currentSlide} total={nav.totalSlides} />

      {/* Content */}
      <motion.main
        key={slideNumber}
        variants={slideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={cn('relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:pl-24 lg:pr-10 xl:pl-20 xl:pr-10 2xl:pl-16 2xl:pr-10 py-4 sm:py-6 lg:py-8', className)}
      >
        {children}
      </motion.main>

      {/* Footer */}
      <footer className={cn(
        'relative z-10 flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-4 text-xs',
        darkMode ? 'text-gray-500' : 'text-[#64748b]'
      )}>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#40E1AB]" />
          <span className="font-medium text-[10px] sm:text-xs">govguru24.de</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-6">
          <span className="opacity-60 hidden lg:inline">Pfeiltasten oder Leertaste für Navigation · F für Vollbild</span>
          <Logo variant="egovc" width={70} height={18} className="w-[50px] sm:w-[60px] lg:w-[70px] h-auto opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </footer>
    </div>
  );
}
