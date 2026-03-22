import coverCouple from '../../../assets/invitation/cover-couple.png';
import type { InvitationContent } from '../types/invitation.types';

interface CanvasHeroSectionProps {
  content: InvitationContent;
}

export function CanvasHeroSection({ content }: CanvasHeroSectionProps) {
  return (
    <section className='bg-[#5d1b18] px-8 pb-10 pt-10 text-[#efe2d1]'>
      <p className='text-center text-[0.66rem] uppercase tracking-[0.58em]'>{content.labels.coverEyebrow}</p>

      <div className='mt-14 text-center'>
        <p className='font-great-vibes inline-block whitespace-nowrap text-[clamp(3.6rem,8vw,4.5rem)] leading-[0.95] text-[#f2e4d7]'>
          {content.hero.statusLabel}
        </p>
        <p className='font-formal mt-3 text-[1.1rem] font-semibold italic leading-none text-white'>{content.hero.subquote}</p>
        <p className='font-formal mt-3 text-[0.82rem] font-semibold tracking-[0.04em] text-white'>
          {content.hero.date}
        </p>
      </div>

      <img
        alt='Wedding hero'
        className='mt-10 w-full border-[10px] border-[#b48a6d]/45 object-cover'
        loading='lazy'
        src={coverCouple}
      />
    </section>
  );
}
