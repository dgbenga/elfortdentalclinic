import * as React from 'react';
import { AtomHeading } from '@/components/atoms/AtomHeading';
import { AtomTag } from '@/components/atoms/AtomTag';
import { AtomText } from '@/components/atoms/AtomText';
import { cn } from '@/lib/utils';

export interface MoleculeSectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const MoleculeSectionHeader: React.FC<MoleculeSectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'flex flex-col mb-12 md:mb-16',
        align === 'center' ? 'items-center text-center' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <AtomTag variant="gold" className="mb-3">
          {eyebrow}
        </AtomTag>
      )}
      <AtomHeading level="headline-lg" className="max-w-[32ch]">
        {title}
      </AtomHeading>
      {description && (
        <AtomText variant="lead" className={cn('mt-4', align === 'center' ? 'mx-auto' : '')}>
          {description}
        </AtomText>
      )}
    </div>
  );
};
