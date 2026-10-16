import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]',
  {
    variants: {
      variant: {
        'whatsapp-forest':
          'bg-whatsapp text-white hover:bg-whatsapp-hover shadow-soft font-sans font-medium',
        'whatsapp-bright':
          'bg-whatsapp-bright text-whatsapp-dark-text hover:brightness-95 shadow-soft font-sans font-semibold',
        'secondary-outline':
          'border border-border bg-card text-foreground hover:bg-secondary hover:border-primary/40 shadow-soft',
        'ghost-nav':
          'text-muted-foreground hover:text-foreground hover:bg-secondary/60 rounded-md',
        'gold-accent':
          'bg-primary text-primary-foreground hover:brightness-95 shadow-soft',
      },
      size: {
        default: 'h-11 px-6 py-2.5 text-sm min-h-[44px]',
        sm: 'h-9 px-4 text-xs min-h-[44px]',
        lg: 'h-13 px-8 py-3.5 text-base min-h-[48px]',
        icon: 'h-11 w-11 p-0 min-h-[44px] min-w-[44px]',
      },
    },
    defaultVariants: {
      variant: 'whatsapp-forest',
      size: 'default',
    },
  }
);

export interface AtomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const AtomButton = React.forwardRef<HTMLButtonElement, AtomButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
AtomButton.displayName = 'AtomButton';
