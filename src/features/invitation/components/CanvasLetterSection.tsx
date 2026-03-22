import closeupCouple from '../../../assets/invitation/closeup-couple.png';
import type { InvitationContent } from '../types/invitation.types';
import { FloralStem } from './svgs';

interface CanvasLetterSectionProps {
  content: InvitationContent;
}

export function CanvasLetterSection({ content }: CanvasLetterSectionProps) {
  return (
    <section className='bg-[#5d1b18] px-8 pb-10 pt-8 text-[#efe2d1]'>
      <p className='font-script text-center text-[3rem] leading-none text-[#eddcc8]'>{content.labels.letterTitle}</p>

      <div className='mt-6 space-y-3 text-[0.88rem] leading-6 text-[#f0e1d2]'>
        {content.letter.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className='mt-7 grid grid-cols-[0.82fr_0.18fr] items-end gap-5'>
        <img alt='Letter portrait' className='w-full object-cover' loading='lazy' src={closeupCouple} />
        <FloralStem className='h-32 w-10 text-[#b98d74]' />
      </div>
    </section>
  );
}
