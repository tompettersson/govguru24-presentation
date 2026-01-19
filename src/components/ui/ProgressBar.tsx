'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface ProgressBarProps {
  current: number;
  total: number;
  className?: string;
}

export function ProgressBar({ current, total, className }: ProgressBarProps) {
  const progress = (current / total) * 100;

  return (
    <div className={cn('w-full h-1 bg-[#42409F]/10 overflow-hidden', className)}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="h-full bg-[#42409F]"
      />
    </div>
  );
}
