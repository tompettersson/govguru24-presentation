'use client';

import { cn } from '@/lib/cn';

interface SlideIndicatorProps {
  current: number;
  total: number;
  className?: string;
}

export function SlideIndicator({ current, total, className }: SlideIndicatorProps) {
  return (
    <div className={cn('flex items-center gap-1 sm:gap-2', className)}>
      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-[#42409F]">
        {String(current).padStart(2, '0')}
      </span>
      <span className="text-sm sm:text-base text-[#64748b] font-medium">/</span>
      <span className="text-sm sm:text-base text-[#64748b] font-medium">{String(total).padStart(2, '0')}</span>
    </div>
  );
}
