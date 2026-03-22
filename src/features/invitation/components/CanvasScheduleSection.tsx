import chandelierCouple from '../../../assets/invitation/chandelier-couple.png';
import commonScheduleBotanical from '../../../assets/invitation/common-schedule-botanical.png';
import commonScheduleHappyWordmark from '../../../assets/invitation/common-schedule-happy-wordmark.png';
import commonScheduleTitle from '../../../assets/invitation/common-schedule-title.png';
import type { InvitationContent } from '../types/invitation.types';

interface CanvasScheduleSectionProps {
  content: InvitationContent;
}

export function CanvasScheduleSection({ content }: CanvasScheduleSectionProps) {
  const scheduleSummaryText = content.schedule.summary.join(' ');

  return (
    <section className='overflow-hidden bg-[#5d1b18] px-8 pb-10 pt-8 text-[#e7d7c5]'>
      <div className='relative min-h-[45rem]'>
        <div className='absolute left-[70%] top-5 -translate-x-1/2 text-center text-[#dfc09f]'>
          <img
            alt=''
            aria-hidden='true'
            className='absolute -left-[4.95rem] -top-[0.9rem] h-[4.35rem] w-auto'
            loading='lazy'
            src={commonScheduleHappyWordmark}
          />
          <div className='space-y-0.5'>
            {[content.eventDate.digits.day, content.eventDate.digits.month, content.eventDate.digits.year].map(
              (digit) => (
                <p key={digit} className='font-display text-[4.75rem] leading-[0.82]'>
                  {digit}
                </p>
              ),
            )}
          </div>
        </div>

        <div className='absolute left-[67%] top-[13.6rem] -translate-x-1/2 space-y-1.5 text-center font-formal text-[0.96rem] leading-[1.15rem] tracking-[0.015em] text-[#ead8c4]'>
          <p className='whitespace-nowrap'>{content.eventDate.displayLong}</p>
          <p className='whitespace-nowrap'>{content.schedule.subline}</p>
        </div>

        <div className='absolute left-[84%] top-[16.2rem] h-[8.6rem] w-px bg-[#b99072]' />

        <div className='pt-[23.5rem]'>
          <img
            alt=''
            aria-hidden='true'
            className='mx-auto w-[88%] max-w-[20rem]'
            loading='lazy'
            src={commonScheduleTitle}
          />
        </div>

        <div className='relative mt-8 min-h-[14rem]'>
          <div className='ml-7 max-w-[11.25rem] text-left font-display text-[1rem] leading-[1.5rem] tracking-[0.03em] text-[#f0e2d4]'>
            <p>{scheduleSummaryText}</p>
          </div>
          <img
            alt=''
            aria-hidden='true'
            className='absolute bottom-0 right-5 h-[17rem] w-auto opacity-95'
            loading='lazy'
            src={commonScheduleBotanical}
          />
        </div>
      </div>

      <img
        alt='Wedding chandelier portrait'
        className='mt-10 w-full object-cover'
        loading='lazy'
        src={chandelierCouple}
      />
    </section>
  );
}
