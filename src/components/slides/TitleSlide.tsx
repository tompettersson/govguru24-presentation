'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Slide } from '@/content/slides';
import { SideIllustration } from '@/components/ui/SideIllustration';

interface TitleSlideProps {
  slide: Slide;
}

export function TitleSlide({ slide }: TitleSlideProps) {
  return (
    <div className="w-full max-w-5xl mx-auto text-center relative px-2 sm:px-4">
      {/* Side Illustration */}
      {slide.illustration && (
        <SideIllustration src={slide.illustration} alt={slide.title} />
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="decorative-line mx-auto mb-4 sm:mb-6 lg:mb-8 relative z-10"
      />

      {/* Main Logo */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6 flex justify-center relative z-10"
      >
        <Image
          src="/images/logo-govguru24.svg"
          alt="govguru24"
          width={400}
          height={100}
          className="h-auto w-[200px] sm:w-[300px] lg:w-[400px]"
          style={{ filter: 'drop-shadow(0 8px 24px rgba(66, 64, 159, 0.2))' }}
          priority
        />
      </motion.div>

      {/* Subtitle */}
      {slide.subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-[#42409F] font-medium mb-6 sm:mb-10 lg:mb-14 max-w-2xl mx-auto px-2"
        >
          {slide.subtitle}
        </motion.p>
      )}

      {/* Agenda Items */}
      {slide.content && slide.content.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6 sm:mb-10 lg:mb-14"
        >
          <h2 className="text-xs sm:text-sm font-semibold text-[#64748b] mb-4 sm:mb-6 lg:mb-8 uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            Agenda
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
            {slide.content.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="glass-card px-3 sm:px-4 lg:px-5 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 hover-lift"
              >
                <span className="number-badge text-xs sm:text-sm">{index + 1}</span>
                <span className="text-[#1a1a2e] font-medium text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Leitfrage */}
      {slide.leitfrage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="glass-card p-4 sm:p-6 lg:p-8 border-l-4 border-[#42409F]">
            <div className="quote-mark hidden sm:block">&ldquo;</div>
            <p className="text-sm sm:text-lg md:text-xl text-[#1a1a2e] font-medium leading-relaxed relative z-10" style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}>
              {slide.leitfrage}
            </p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
