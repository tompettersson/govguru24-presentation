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
    <div className="w-full max-w-4xl mx-auto relative">
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
        className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-10 text-center"
      >
        {slide.title}
      </motion.h1>

      {/* Content as checkmarks */}
      {hasContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {slide.content!.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card  p-5 flex items-center gap-4 hover-lift"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: '#42409F',
                    boxShadow: '0 4px 12px rgba(66, 64, 159, 0.25)',
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-[#1a1a2e] font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* CTA Steps */}
      {hasCTASteps && (
        <div className="space-y-4">
          {slide.cta!.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.12 }}
              className="glass-card  p-5 flex items-center gap-6 hover-lift group"
            >
              <span
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                style={{
                  background: '#42409F',
                  boxShadow: '0 4px 12px rgba(66, 64, 159, 0.25)',
                }}
              >
                {step.label}
              </span>
              <span className="text-xl text-[#1a1a2e] font-medium flex-1">{step.description}</span>
              {index < slide.cta!.length - 1 && (
                <ArrowRight className="w-6 h-6 text-[#42409F]/40 group-hover:text-[#42409F] group-hover:translate-x-1 transition-all" />
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
          className="mt-10 glass-card  p-6 text-center relative z-10"
          style={{
            background: 'rgba(66,64,159,0.05)',
            borderTop: '3px solid #42409F',
          }}
        >
          <p className="text-lg text-[#1a1a2e] font-medium leading-relaxed">
            {slide.leitfrage}
          </p>
        </motion.div>
      )}
    </div>
  );
}
