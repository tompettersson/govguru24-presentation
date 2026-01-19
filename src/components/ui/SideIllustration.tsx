'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SideIllustrationProps {
  src: string;
  alt?: string;
}

export function SideIllustration({ src, alt = 'Illustration' }: SideIllustrationProps) {
  // Kleinere Größe für alle Illustrationen, damit sie nicht abgeschnitten werden
  const size = 320;

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed left-4 top-1/2 -translate-y-1/2 pointer-events-none z-0"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </motion.div>
  );
}
