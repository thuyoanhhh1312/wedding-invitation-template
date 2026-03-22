import { PictureFrame, SectionHeading } from '../../../components/shared';
import type { InvitationContent } from '../types/invitation.types';

interface InvitationScheduleSectionProps {
  content: InvitationContent;
}

export function InvitationScheduleSection({ content }: InvitationScheduleSectionProps) {
  return (
    <section className='ornament-surface px-5 py-6 text-[#fbefe7]'>
      <div className='grid gap-4'>
        <div className='rounded-[2rem] border border-white/10 bg-white/4 px-5 py-5'>
          <p className='text-center text-[0.68rem] font-semibold uppercase tracking-[0.38em] text-[#e9c7b3]'>
            {content.schedule.dateLabel}
          </p>

          <div className='mt-4 grid grid-cols-3 gap-3 text-center'>
            {content.schedule.dateDigits.map((digit) => (
              <div key={digit} className='rounded-[1.4rem] bg-white/8 px-3 py-4'>
                <p className='font-display text-[2.4rem] leading-none'>{digit}</p>
              </div>
            ))}
          </div>

          <p className='font-display mt-5 text-center text-[2rem] leading-none'>{content.schedule.eventDate}</p>
          <p className='mt-2 text-center text-sm uppercase tracking-[0.24em] text-[#eed7ca]'>{content.schedule.subline}</p>
        </div>

        <div className='paper-surface rounded-[2rem] p-5 text-[#4f2d26]'>
          <SectionHeading
            description={content.schedule.summary[0]}
            eyebrow='Wedding'
            title={content.schedule.title}
          />

          <PictureFrame alt='Schedule photo' className='mt-5' src={content.schedule.photo} />

          <div className='mt-5 space-y-3 text-sm leading-6 text-[#73574e]'>
            {content.schedule.summary.slice(1).map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
