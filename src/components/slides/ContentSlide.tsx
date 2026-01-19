'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/lib/cn';
import { CheckCircle, AlertCircle } from 'lucide-react';
import type { Slide } from '@/content/slides';
import { SideIllustration } from '@/components/ui/SideIllustration';

interface ContentSlideProps {
  slide: Slide;
}

export function ContentSlide({ slide }: ContentSlideProps) {
  const isChallenge = slide.section?.toLowerCase().includes('herausforderung') ||
                      slide.title?.toLowerCase().includes('herausforderung') ||
                      slide.title?.toLowerCase().includes('nicht ausreichen');

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
        className="decorative-line mb-6 relative z-10"
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-10"
      >
        {slide.title}
      </motion.h1>

      {/* Subtitle */}
      {slide.subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-[#42409F] font-medium mb-8"
        >
          {slide.subtitle}
        </motion.p>
      )}

      {/* Quote if present */}
      {slide.quote && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 glass-card p-6 border-l-4"
          style={{ borderLeftColor: '#42409F' }}
        >
          <p
            className="text-xl font-semibold"
            style={{
              fontFamily: '"Source Serif 4", Georgia, serif',
              color: '#42409F',
            }}
          >
            {slide.quote}
          </p>
        </motion.div>
      )}

      {/* Content List */}
      {slide.content && slide.content.length > 0 && (
        <ul className="space-y-4">
          {slide.content.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
              className="flex items-start gap-4 text-lg text-[#1a1a2e] group"
            >
              <span
                className="flex-shrink-0 mt-0.5 w-9 h-9 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                style={{
                  background: '#42409F',
                  boxShadow: '0 4px 12px rgba(66, 64, 159, 0.25)',
                }}
              >
                {isChallenge ? (
                  <AlertCircle className="w-5 h-5 text-white" />
                ) : (
                  <CheckCircle className="w-5 h-5 text-white" />
                )}
              </span>
              <span className="leading-relaxed">{item}</span>
            </motion.li>
          ))}
        </ul>
      )}

      {/* Leitfrage */}
      {slide.leitfrage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 glass-card  p-6 relative z-10"
          style={{
            background: 'rgba(64,225,171,0.08)',
            borderLeft: '4px solid #40E1AB',
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
