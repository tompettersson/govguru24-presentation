'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Monitor, Play } from 'lucide-react';
import type { Slide } from '@/content/slides';

interface ImageSlideProps {
  slide: Slide;
}

export function ImageSlide({ slide }: ImageSlideProps) {
  // Nutze das digital-transformation Bild für die Demo-Folie
  const displayImage = slide.image?.includes('placeholder')
    ? '/images/digital-transformation.jpg'
    : slide.image;

  return (
    <div className="w-full max-w-6xl mx-auto text-center">
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
          className="text-xl text-[#42409F] font-medium mb-10"
        >
          {slide.subtitle}
        </motion.p>
      )}

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative aspect-video  overflow-hidden shadow-2xl"
        style={{
          border: '1px solid rgba(66,64,159,0.1)',
        }}
      >
        <Image
          src={displayImage || '/images/digital-transformation.jpg'}
          alt={slide.imageAlt || slide.title}
          fill
          className="object-cover"
        />

        {/* Overlay für Demo-Hinweis */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center justify-center gap-4">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg"
              style={{ background: '#42409F' }}
            >
              <Monitor className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <p className="text-xl text-white font-bold">Live-Demo</p>
              <p className="text-white/80 text-sm">
                govguru24 Plattform in Aktion
              </p>
            </div>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="ml-4 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: '#F72585' }}
              >
                <Play className="w-4 h-4 text-white ml-0.5" fill="white" />
              </div>
              <span className="font-medium text-[#1a1a2e]">Starten</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-6 text-sm text-[#64748b]"
      >
        govguru24 Plattform — Rollenbasiertes Lernen für die öffentliche Verwaltung
      </motion.p>
    </div>
  );
}
