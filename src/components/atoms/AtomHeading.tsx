import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const headingVariants = cva('text-foreground font-serif tracking-tight', {
  variants: {
    level: {
      'display-lg':
        'text-[38px] md:text-[54px] leading-[1.2] md:leading-[1.15] tracking-[-0.01em] md:tracking-[-0.02em] font-normal',
      'headline-lg':
        'text-[28px] md:text-[36px] leading-[1.3] md:leading-[1.25] tracking-[-0.01em] md:tracking-[-0.015em] font-normal',
      'headline-sm':
        'text-[20px] md:text-[22px] leading-[1.4] md:leading-[1.35] tracking-normal font-normal',
      'card-title':
        'text-[18px] md:text-[20px] font-sans font-semibold tracking-tight text-foreground',
    },
  },
  defaultVariants: {
    level: 'headline-lg',
  },
});

export interface AtomHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}

export const AtomHeading = React.forwardRef<HTMLHeadingElement, AtomHeadingProps>(
  ({ className, level, as, children, ...props }, ref) => {
    let Tag = as;
    if (!Tag) {
      if (level === 'display-lg') Tag = 'h1';
      else if (level === 'headline-lg') Tag = 'h2';
      else if (level === 'headline-sm') Tag = 'h3';
      else Tag = 'h4';
    }

    return (
      <Tag
        ref={ref}
        className={cn(headingVariants({ level, className }))}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
AtomHeading.displayName = 'AtomHeading';
