import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

type SectionBadgeTone = 'paper' | 'wine';

interface SectionBadgeProps {
  children: ReactNode;
  className?: string;
  tone?: SectionBadgeTone;
}

const toneClassNames: Record<SectionBadgeTone, string> = {
  paper: 'bg-[#f4e8da] text-[#9d6d4f]',
  wine: 'bg-white/10 text-[#f4dfd0]',
};

export function SectionBadge({ children, className, tone = 'paper' }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.34em]',
        toneClassNames[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
