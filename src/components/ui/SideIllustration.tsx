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
      {/* Large Desktop (1536px+): Links positioniert, volle Größe */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hidden 2xl:block fixed left-8 top-1/2 -translate-y-1/2 pointer-events-none z-0"
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

      {/* Desktop/Laptop (1024-1535px): Ausgeblendet - zu wenig Platz für Side-Illustration */}
      {/* Illustration wird bei diesen Viewports nicht angezeigt, um Overlap mit Content zu vermeiden */}

      {/* Tablet (768-1023px): Oben rechts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="hidden md:block lg:hidden fixed right-4 top-24 pointer-events-none z-0"
        style={{
          width: '180px',
          height: '180px',
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={180}
          height={180}
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Mobile (<768px): Unten zentriert, unter dem Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="block md:hidden fixed bottom-2 inset-x-0 flex justify-center pointer-events-none z-0"
      >
        <Image
          src={src}
          alt={alt}
          width={80}
          height={80}
          className="object-contain opacity-40"
          style={{
            width: '80px',
            height: '80px',
          }}
        />
      </motion.div>
    </>
  );
}
