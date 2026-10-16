import * as React from 'react';
import { Star } from 'lucide-react';
import { AtomText } from '@/components/atoms/AtomText';
import { cn } from '@/lib/utils';

export interface MoleculeTestimonialProps {
  quote: string;
  author: string;
  role: string;
  location: string;
  className?: string;
}

export const MoleculeTestimonial: React.FC<MoleculeTestimonialProps> = ({
  quote,
  author,
  role,
  location,
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col justify-between rounded-lg bg-card p-8 border border-border transition-all duration-300 hover:shadow-card',
        className
      )}
    >
      <div>
        <div className="flex items-center gap-1 text-primary mb-4" aria-label="5 out of 5 stars">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary" />
          ))}
        </div>
        <AtomText variant="quote" className="text-foreground text-[16px] leading-[1.6]">
          "{quote}"
        </AtomText>
      </div>

      <div className="mt-6 pt-5 border-t border-border flex items-center justify-between">
        <div>
          <span className="block font-sans text-sm font-semibold text-foreground">
            {author}
          </span>
          <span className="block font-sans text-xs text-muted-foreground">
            {role} • {location}
          </span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-wider text-primary-text-safe bg-secondary/80 px-2.5 py-1 rounded">
          Verified Visit
        </span>
      </div>
    </div>
  );
};
