import closeupCouple from '../../../assets/invitation/closeup-couple.png';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';
import { FloralStem } from './svgs';

interface CanvasSchedulePreviewSectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function CanvasSchedulePreviewSection({ content, variant }: CanvasSchedulePreviewSectionProps) {
  return (
    <section className='bg-[#fffdfa] px-8 pb-9 pt-8 text-[#b19879]'>
      <div className='grid grid-cols-[1.05fr_0.95fr] items-start gap-5'>
        <div>
          <p className='text-right text-[0.62rem] uppercase tracking-[0.48em]'>{content.labels.scheduleWordmark}</p>
          <p
            className='mt-3 text-[3.2rem] leading-[1.1] text-[#7b6a58]'
            style={{ fontFamily: 'Great Vibes, cursive' }}
          >
            Fall in Love Wedding
          </p>
        </div>

        <div className='space-y-2 pt-4 text-center text-[#8f775f]'>
          <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em]'>{variant.ceremonyTitle}</p>
          <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em]'>ĐƯỢC TỔ CHỨC VÀO</p>
          <p className='font-display text-[2.5rem] leading-none text-[#5d1b18]'>{variant.ceremonyTime}</p>
          <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em]'>{content.eventDate.displayLong}</p>
          <p className='text-xs italic'>{`(${variant.ceremonyHost})`}</p>
        </div>
      </div>

      <div className='mt-3 flex items-start gap-4'>
        <FloralStem className='h-28 w-12 shrink-0 text-[#d2b990]' />
        <img alt='Close-up couple portrait' className='w-full object-cover' loading='lazy' src={closeupCouple} />
      </div>
    </section>
  );
}
