'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface SideIllustrationProps {
  src: string;
  alt?: string;
}

export function SideIllustration({ src, alt = 'Illustration' }: SideIllustrationProps) {
  return (
    <>
      {/* Desktop: Links positioniert, größer */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block fixed left-6 top-1/2 -translate-y-1/2 pointer-events-none z-0"
        style={{
          width: '380px',
          height: '380px',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={380}
          height={380}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Tablet: Oben rechts, kleiner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block lg:hidden fixed right-4 top-24 pointer-events-none z-0"
        style={{
          width: '200px',
          height: '200px',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={200}
          height={200}
          className="w-full h-full object-contain opacity-70"
        />
      </motion.div>

      {/* Mobile: Unten zentriert, klein und dezent */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        className="block md:hidden fixed bottom-20 left-1/2 -translate-x-1/2 pointer-events-none z-0"
        style={{
          width: '120px',
          height: '120px',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={120}
          height={120}
          className="w-full h-full object-contain opacity-50"
        />
      </motion.div>
    </>
  );
}
