import type { InvitationContent, InvitationVariant } from '../../../types/invitation.types';
import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';
import { FlowerTransparent } from '../CommonInvitationCanvasHelpers';

interface CeremonySectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function CeremonySection({ variant }: CeremonySectionProps) {
  return (
    <section className='bg-[#fffdfa] px-8 pb-9 pt-8 text-[#b19879]'>
      <div className='grid grid-cols-[1.05fr_0.95fr] items-start gap-5'>
        <div>
          <p className='text-right text-[1rem] uppercase tracking-[0.48em]'>Happy Wedding</p>
          <p className='font-script mt-3 text-[4rem] leading-none'>Fall in Love Wedding</p>
        </div>

        <div className='space-y-2 pt-20 text-center text-[#8f775f]'>
          <p className='text-[1.25rem] font-semibold uppercase tracking-[0.34em]'>{variant.ceremonyTitle}</p>
          <p className='text-[1rem] font-semibold uppercase tracking-[0.34em]'>ĐƯỢC TỔ CHỨC VÀO</p>
          <p className='font-display text-[3rem] leading-none text-[#5d1b18]'>{variant.ceremonyTime}</p>
          <p className='text-[1rem] font-semibold uppercase tracking-[0.34em]'>{variant.ceremonyTime}</p>
          <p className='text-xs italic'>{`(${variant.ceremonyHost})`}</p>
        </div>
      </div>

      <div className='mt-0 ml-20 flex items-start gap-0'>
        <FlowerTransparent className='h-60 w-30 shrink-0 text-[#d2b990]' />
      </div>
      <div className='mt-3 flex items-start gap-0'>
        <img
          alt='Close-up couple portrait'
          className='w-full object-cover'
          loading='lazy'
          src={commonInvitationAssets.closeupCouple}
        />
      </div>
    </section>
  );
}