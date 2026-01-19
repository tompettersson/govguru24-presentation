'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Slide } from '@/content/slides';
import { SideIllustration } from '@/components/ui/SideIllustration';

interface CTASlideProps {
  slide: Slide;
}

export function CTASlide({ slide }: CTASlideProps) {
  const hasCTASteps = slide.cta && slide.cta.length > 0;
  const hasContent = slide.content && slide.content.length > 0;

  return (
    <div className="w-full max-w-4xl mx-auto relative px-2 sm:px-4">
      {/* Side Illustration */}
      {slide.illustration && (
        <SideIllustration src={slide.illustration} alt={slide.title} />
      )}

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="decorative-line mx-auto mb-4 sm:mb-6"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mb-6 sm:mb-8 lg:mb-10 text-center"
      >
        {slide.title}
      </motion.h1>

      {/* Content as checkmarks */}
      {hasContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 sm:mb-10 lg:mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
            {slide.content!.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card p-3 sm:p-4 lg:p-5 flex items-center gap-3 sm:gap-4 hover-lift"
              >
                <div
                  className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: '#42409F',
                    boxShadow: '0 4px 12px rgba(66, 64, 159, 0.25)',
                  }}
                >
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <span className="text-sm sm:text-base lg:text-lg text-[#1a1a2e] font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA Steps */}
      {hasCTASteps && (
        <div className="space-y-3 sm:space-y-4">
          {slide.cta!.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
              className="glass-card p-3 sm:p-4 lg:p-5 flex items-center gap-3 sm:gap-4 lg:gap-6 hover-lift group"
            >
              <span
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-base sm:text-lg lg:text-xl font-bold text-white flex-shrink-0"
                style={{
                  background: '#42409F',
                  boxShadow: '0 4px 12px rgba(66, 64, 159, 0.25)',
                }}
              >
                {step.label}
              </span>
              <span className="text-sm sm:text-base lg:text-xl text-[#1a1a2e] font-medium flex-1">{step.description}</span>
              {index < slide.cta!.length - 1 && (
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#42409F]/40 group-hover:text-[#42409F] group-hover:translate-x-1 transition-all hidden sm:block" />
              )}
            </motion.div>
          ))}
        </div>
      )}

      {/* Leitfrage */}
      {slide.leitfrage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-6 sm:mt-8 lg:mt-10 glass-card p-4 sm:p-5 lg:p-6 text-center relative z-10"
          style={{
            background: 'rgba(66,64,159,0.05)',
            borderTop: '3px solid #42409F',
          }}
        >
          <p className="text-sm sm:text-base lg:text-lg text-[#1a1a2e] font-medium leading-relaxed">
            {slide.leitfrage}
          </p>
        </motion.div>
      )}
    </div>
  );
}
