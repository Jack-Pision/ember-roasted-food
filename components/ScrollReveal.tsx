'use client';

import { useInView } from '@/hooks/useInView';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
