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

interface ThreeColumnSlideProps {
  slide: Slide;
}

function ColumnCard({ column, index }: { column: SlideColumn; index: number }) {
  const Icon = column.icon ? iconMap[column.icon] : null;
  const colorSchemes = [
    {
      borderColor: '#42409F',
      iconBg: '#42409F',
      dotColor: '#42409F',
    },
    {
      borderColor: '#42409F',
      iconBg: '#42409F',
      dotColor: '#42409F',
    },
    {
      borderColor: '#42409F',
      iconBg: '#42409F',
      dotColor: '#42409F',
    },
  ];
  const colors = colorSchemes[index % 3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.12 }}
      className="glass-card  p-7 h-full hover-lift relative overflow-hidden"
    >
      {/* Border Top */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: colors.borderColor }}
      />

      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-8">
        {Icon && (
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: colors.iconBg,
              boxShadow: '0 4px 12px rgba(66, 64, 159, 0.25)',
            }}
          >
            <Icon className="w-7 h-7 text-white" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-[#1a1a2e]">{column.title}</h3>
      </div>

      {/* Items */}
      <ul className="space-y-3">
        {column.items.map((item, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.12 + i * 0.06 }}
            className="flex items-start gap-3 text-[#1a1a2e]"
          >
            <span
              className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
              style={{ background: colors.dotColor }}
            />
            <span className="text-base leading-relaxed">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export function ThreeColumnSlide({ slide }: ThreeColumnSlideProps) {
  if (!slide.columns || slide.columns.length < 3) {
    return <div>Invalid slide data</div>;
  }

  // Folie 3 ist auch eine EGovC-Seite
  const isEGovCSlide = slide.id === 3;

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Side Illustration (nur für nicht-EGovC Folien) */}
      {!isEGovCSlide && slide.illustration && (
        <SideIllustration src={slide.illustration} alt={slide.title} />
      )}

      {/* EGovC Logo für Folie 3 */}
      {isEGovCSlide && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/images/logo-egovc.svg"
            alt="EGovC"
            width={160}
            height={50}
            className="h-auto"
          />
        </motion.div>
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

      {/* Three Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {slide.columns.slice(0, 3).map((column, index) => (
          <ColumnCard key={index} column={column} index={index} />
        ))}
      </div>
    </div>
  );
}
