import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up';
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation();

  const directionClasses = {
    left: 'translate-x-[-50px]',
    right: 'translate-x-[50px]',
    up: 'translate-y-8',
  };

  const visibleTransform = 'translate-x-0 translate-y-0';

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out opacity-0',
        isVisible ? `opacity-100 ${visibleTransform}` : directionClasses[direction],
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};
