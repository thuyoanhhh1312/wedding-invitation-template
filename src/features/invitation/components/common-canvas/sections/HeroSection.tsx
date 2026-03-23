import type { InvitationContent } from '../../../types/invitation.types';
import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';

interface HeroSectionProps {
  content: InvitationContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className='bg-[#5d1b18] px-8 pb-10 pt-8 text-[#efe2d1]'>
      <p className='text-center text-[0.63rem] uppercase tracking-[0.55em]'>YOU ARE THE LOVE OF MY LIFE</p>
      <div className='mt-12 text-center'>
        <p className='font-script text-[3.5rem] leading-none text-[#f2e4d7]'>We Got Married</p>
        <p className='mt-2 text-[0.7rem] italic text-[#e4cdb8]'>It&apos;s been a long time, see you at the wedding!</p>
        <p className='mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#dcbfa6]'>{content.hero.date}</p>
      </div>

      <img
        alt='Wedding hero'
        className='mt-10 w-full border-10 border-[#b48a6d]/45 object-cover'
        loading='lazy'
        src={commonInvitationAssets.coverCouple}
      />
    </section>
  );
}