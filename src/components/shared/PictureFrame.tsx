import { cn } from '../../lib/cn';

type PictureFrameTone = 'paper' | 'wine';

interface PictureFrameProps {
  alt: string;
  src: string;
  className?: string;
  imageClassName?: string;
  frameTone?: PictureFrameTone;
  aspectClassName?: string;
}

const toneClassNames: Record<PictureFrameTone, string> = {
  paper: 'border-[#eadbca] bg-[#f7eee4] shadow-[0_20px_48px_rgba(74,36,32,0.12)]',
  wine: 'border-white/12 bg-white/5 shadow-[0_18px_42px_rgba(23,8,8,0.34)]',
};

export function PictureFrame({
  alt,
  src,
  className,
  imageClassName,
  frameTone = 'paper',
  aspectClassName = 'aspect-[4/5]',
}: PictureFrameProps) {
  return (
    <figure className={cn('overflow-hidden rounded-[2rem] border p-2', toneClassNames[frameTone], className)}>
      <div className={cn('overflow-hidden rounded-[1.45rem]', aspectClassName)}>
        <img
          alt={alt}
          className={cn('h-full w-full object-cover', imageClassName)}
          loading='lazy'
          src={src}
        />
      </div>
    </figure>
  );
}
