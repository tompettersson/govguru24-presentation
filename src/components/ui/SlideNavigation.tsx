'use client';

import { ChevronLeft, ChevronRight, Maximize, Minimize } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useState, useEffect } from 'react';

interface SlideNavigationProps {
  onPrev: () => void;
  onNext: () => void;
  onFullscreen: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
  className?: string;
}

export function SlideNavigation({
  onPrev,
  onNext,
  onFullscreen,
  isFirstSlide,
  isLastSlide,
  className,
}: SlideNavigationProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const buttonBase = cn(
    'p-2.5 rounded-xl transition-all duration-200',
    'bg-white/80 backdrop-blur-sm border border-white/50',
    'shadow-sm hover:shadow-md',
    'hover:bg-white active:scale-95'
  );

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <button
        onClick={onPrev}
        disabled={isFirstSlide}
        className={cn(
          buttonBase,
          'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:shadow-sm'
        )}
        aria-label="Vorherige Folie"
      >
        <ChevronLeft className="w-5 h-5 text-[#1a1a2e]" />
      </button>

      <button
        onClick={onNext}
        disabled={isLastSlide}
        className={cn(
          buttonBase,
          !isLastSlide && 'bg-[#42409F] border-[#42409F] hover:bg-[#5a58c7]',
          'disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white/80 disabled:shadow-sm'
        )}
        aria-label="Nächste Folie"
      >
        <ChevronRight className={cn('w-5 h-5', !isLastSlide ? 'text-white' : 'text-[#1a1a2e]')} />
      </button>

      <div className="w-px h-6 bg-[#42409F]/20 mx-1" />

      <button
        onClick={onFullscreen}
        className={buttonBase}
        aria-label={isFullscreen ? 'Vollbild beenden' : 'Vollbild'}
      >
        {isFullscreen ? (
          <Minimize className="w-5 h-5 text-[#1a1a2e]" />
        ) : (
          <Maximize className="w-5 h-5 text-[#1a1a2e]" />
        )}
      </button>
    </div>
  );
}
