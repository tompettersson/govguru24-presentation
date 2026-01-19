'use client';

import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { TOTAL_SLIDES } from '@/content/slides';

export function useSlideNavigation(currentSlide: number) {
  const router = useRouter();

  const goToSlide = useCallback((slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= TOTAL_SLIDES) {
      router.push(`/slides/${slideNumber}`);
    }
  }, [router]);

  const nextSlide = useCallback(() => {
    if (currentSlide < TOTAL_SLIDES) {
      goToSlide(currentSlide + 1);
    }
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  }, [currentSlide, goToSlide]);

  const firstSlide = useCallback(() => {
    goToSlide(1);
  }, [goToSlide]);

  const lastSlide = useCallback(() => {
    goToSlide(TOTAL_SLIDES);
  }, [goToSlide]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if user is typing in an input
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          firstSlide();
          break;
        case 'End':
          e.preventDefault();
          lastSlide();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Escape':
          if (document.fullscreenElement) {
            document.exitFullscreen();
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, firstSlide, lastSlide, toggleFullscreen]);

  return {
    currentSlide,
    totalSlides: TOTAL_SLIDES,
    goToSlide,
    nextSlide,
    prevSlide,
    firstSlide,
    lastSlide,
    toggleFullscreen,
    isFirstSlide: currentSlide === 1,
    isLastSlide: currentSlide === TOTAL_SLIDES,
  };
}
