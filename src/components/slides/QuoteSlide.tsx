'use client';

import { motion } from 'framer-motion';
import type { Slide } from '@/content/slides';
import { SideIllustration } from '@/components/ui/SideIllustration';

interface QuoteSlideProps {
  slide: Slide;
}

export function QuoteSlide({ slide }: QuoteSlideProps) {
  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      {/* Side Illustration */}
      {slide.illustration && (
        <SideIllustration src={slide.illustration} alt={slide.title} />
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="decorative-line mx-auto mb-6"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#1a1a2e] mb-10"
      >
        {slide.title}
      </motion.h1>

      {/* Quote */}
      {slide.quote && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mb-14"
        >
          {/* Large Quote Mark */}
          <div
            className="absolute -top-6 left-1/2 -translate-x-1/2 text-[120px] leading-none pointer-events-none select-none text-[#42409F]/10 font-bold"
          >
            &ldquo;
          </div>

          <blockquote
            className="relative z-10 text-2xl md:text-3xl font-semibold leading-relaxed px-4 md:px-12 text-[#42409F]"
          >
            {slide.quote}
          </blockquote>

          {slide.quoteAuthor && (
            <motion.cite
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="block mt-6 text-lg text-[#64748b] not-italic font-medium"
            >
              — {slide.quoteAuthor}
            </motion.cite>
          )}
        </motion.div>
      )}

      {/* Additional Content */}
      {slide.content && slide.content.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {slide.content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="glass-card  px-6 py-4 flex items-center gap-3 hover-lift"
            >
              <span
                className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white"
                style={{ background: '#42409F' }}
              >
                {index + 1}
              </span>
              <span className="text-[#1a1a2e] font-medium text-lg">{item}</span>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}
