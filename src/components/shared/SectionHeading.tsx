import { cn } from '../../lib/cn';

type SectionHeadingAlignment = 'left' | 'center';
type SectionHeadingTone = 'paper' | 'wine';

interface SectionHeadingProps {
  title: string;
  className?: string;
  description?: string;
  eyebrow?: string;
  alignment?: SectionHeadingAlignment;
  tone?: SectionHeadingTone;
}

const alignmentClassNames: Record<SectionHeadingAlignment, string> = {
  left: 'items-start text-left',
  center: 'items-center text-center',
};

const eyebrowToneClassNames: Record<SectionHeadingTone, string> = {
  paper: 'text-[#aa8262]',
  wine: 'text-[#edd2c3]',
};

const titleToneClassNames: Record<SectionHeadingTone, string> = {
  paper: 'text-[#4f2d26]',
  wine: 'text-[#fbefe7]',
};

const descriptionToneClassNames: Record<SectionHeadingTone, string> = {
  paper: 'text-[#7b6056]',
  wine: 'text-[#f1dbcf]',
};

export function SectionHeading({
  title,
  className,
  description,
  eyebrow,
  alignment = 'left',
  tone = 'paper',
}: SectionHeadingProps) {
  return (
    <div className={cn('flex flex-col gap-2', alignmentClassNames[alignment], className)}>
      {eyebrow ? (
        <p className={cn('text-[0.68rem] font-semibold uppercase tracking-[0.34em]', eyebrowToneClassNames[tone])}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={cn('font-display text-[2rem] leading-none', titleToneClassNames[tone])}>{title}</h2>
      {description ? (
        <p className={cn('max-w-[30rem] text-sm leading-6', descriptionToneClassNames[tone])}>{description}</p>
      ) : null}
    </div>
  );
}
