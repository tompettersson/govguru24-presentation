'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Building,
  Target,
  User,
  Users,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Code,
  Network,
} from 'lucide-react';
import type { Slide, SlideColumn } from '@/content/slides';
import { SideIllustration } from '@/components/ui/SideIllustration';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Building,
  Target,
  User,
  Users,
  BookOpen,
  CheckCircle,
  Lightbulb,
  Code,
  Network,
};

interface TwoColumnSlideProps {
  slide: Slide;
}

function ColumnCard({ column, index }: { column: SlideColumn; index: number }) {
  const Icon = column.icon ? iconMap[column.icon] : null;
  const isFirst = index === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
      className="glass-card p-4 sm:p-6 lg:p-8 hover-lift relative overflow-hidden"
    >
      {/* Border Top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: '#42409F' }}
      />

      {/* Icon + Title */}
      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
        {Icon && (
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center"
            style={{
              background: '#42409F',
              boxShadow: '0 4px 12px rgba(66, 64, 159, 0.25)',
            }}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
          </div>
        )}
        <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-[#1a1a2e]">{column.title}</h3>
      </div>

      {/* Items */}
      <ul className="space-y-2 sm:space-y-3 lg:space-y-4">
        {column.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.15 + i * 0.08 }}
            className="flex items-start gap-2 sm:gap-3 text-[#1a1a2e]"
          >
            <span
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mt-2 sm:mt-2.5 flex-shrink-0"
              style={{ background: '#42409F' }}
            />
            <span className="text-sm sm:text-base lg:text-lg leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

// Illustrationen für EGovC-Tätigkeitsfelder (Folie 2)
const illustrations = [
  { src: '/images/illustration-verwaltung.png', alt: 'Verwaltung', label: 'Verwaltung' },
  { src: '/images/illustration-gesundheit.png', alt: 'Gesundheit', label: 'Krankenhäuser' },
  { src: '/images/illustration-kirche.png', alt: 'Kirche', label: 'Kirchen' },
];

export function TwoColumnSlide({ slide }: TwoColumnSlideProps) {
  if (!slide.columns || slide.columns.length < 2) {
    return <div>Invalid slide data</div>;
  }

  const isEGovCSlide = slide.id === 2;

  return (
    <div className="w-full max-w-6xl mx-auto px-2 sm:px-4">
      {/* Side Illustration (nur für nicht-EGovC Folien) */}
      {!isEGovCSlide && slide.illustration && (
        <SideIllustration src={slide.illustration} alt={slide.title} />
      )}

      {/* EGovC Logo für Folie 2 */}
      {isEGovCSlide && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-4 sm:mb-6 lg:mb-8"
        >
          <Image
            src="/images/logo-egovc.svg"
            alt="EGovC"
            width={180}
            height={60}
            className="h-auto w-[120px] sm:w-[150px] lg:w-[180px]"
          />
        </motion.div>
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

      {/* EGovC Illustrationen für Tätigkeitsfelder */}
      {isEGovCSlide && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-12 mb-6 sm:mb-8 lg:mb-10"
        >
          {illustrations.map((ill, i) => (
            <motion.div
              key={ill.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-52 lg:h-52 flex items-center justify-center mb-2 sm:mb-3">
                <Image
                  src={ill.src}
                  alt={ill.alt}
                  width={200}
                  height={200}
                  className="object-contain w-full h-full"
                  style={{ mixBlendMode: 'multiply' }}
                />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-[#42409F]">{ill.label}</span>
            </motion.div>
          ))}
        </motion.div>
      )}

      {/* Two Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {slide.columns.slice(0, 2).map((column, index) => (
          <ColumnCard key={index} column={column} index={index} />
        ))}
      </div>
    </div>
  );
}
