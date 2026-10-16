import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const textVariants = cva('font-sans', {
  variants: {
    variant: {
      lead: 'text-[17px] md:text-[18px] leading-[1.6] text-muted-foreground max-w-[65ch]',
      body: 'text-[15px] md:text-[16px] leading-[1.65] text-muted-foreground',
      small: 'text-[13px] md:text-[14px] leading-[1.5] text-muted-foreground',
      meta: 'text-[12px] leading-[1.4] text-muted-foreground font-mono tracking-tight',
      quote: 'text-[16px] md:text-[17px] leading-[1.6] italic text-foreground',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

export interface AtomTextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
}

export const AtomText = React.forwardRef<HTMLParagraphElement, AtomTextProps>(
  ({ className, variant, as = 'p', children, ...props }, ref) => {
    const Tag = as;
    return (
      <Tag
        ref={ref}
        className={cn(textVariants({ variant, className }))}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
AtomText.displayName = 'AtomText';
