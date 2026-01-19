import { notFound } from 'next/navigation';
import { slides, TOTAL_SLIDES } from '@/content/slides';
import { SlideWrapper } from '@/components/ui/SlideWrapper';
import { TitleSlide } from '@/components/slides/TitleSlide';
import { ContentSlide } from '@/components/slides/ContentSlide';
import { TwoColumnSlide } from '@/components/slides/TwoColumnSlide';
import { ThreeColumnSlide } from '@/components/slides/ThreeColumnSlide';
import { QuoteSlide } from '@/components/slides/QuoteSlide';
import { ImageSlide } from '@/components/slides/ImageSlide';
import { CTASlide } from '@/components/slides/CTASlide';

interface PageProps {
  params: Promise<{ number: string }>;
}

export function generateStaticParams() {
  return Array.from({ length: TOTAL_SLIDES }, (_, i) => ({
    number: String(i + 1),
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { number } = await params;
  const slideNumber = parseInt(number, 10);
  const slide = slides.find((s) => s.id === slideNumber);

  if (!slide) {
    return { title: 'Folie nicht gefunden' };
  }

  return {
    title: `${slide.title} | govguru24`,
    description: slide.subtitle || slide.section,
  };
}

function SlideContent({ slide }: { slide: (typeof slides)[0] }) {
  switch (slide.type) {
    case 'title':
      return <TitleSlide slide={slide} />;
    case 'content':
      return <ContentSlide slide={slide} />;
    case 'two-column':
      return <TwoColumnSlide slide={slide} />;
    case 'three-column':
      return <ThreeColumnSlide slide={slide} />;
    case 'quote':
      return <QuoteSlide slide={slide} />;
    case 'image':
      return <ImageSlide slide={slide} />;
    case 'cta':
      return <CTASlide slide={slide} />;
    default:
      return <ContentSlide slide={slide} />;
  }
}

export default async function SlidePage({ params }: PageProps) {
  const { number } = await params;
  const slideNumber = parseInt(number, 10);

  if (isNaN(slideNumber) || slideNumber < 1 || slideNumber > TOTAL_SLIDES) {
    notFound();
  }

  const slide = slides.find((s) => s.id === slideNumber);

  if (!slide) {
    notFound();
  }

  return (
    <SlideWrapper slideNumber={slideNumber} section={slide.section}>
      <SlideContent slide={slide} />
    </SlideWrapper>
  );
}
