import Image from 'next/image';

interface LogoProps {
  variant?: 'govguru' | 'egovc';
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({ variant = 'govguru', className = '', width = 180, height = 40 }: LogoProps) {
  const src = variant === 'govguru'
    ? '/images/logo-govguru24.svg'
    : '/images/logo-egovc.svg';

  const alt = variant === 'govguru'
    ? 'govguru24 Logo'
    : 'EGovC Logo';

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
