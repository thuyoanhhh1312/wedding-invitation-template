import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';
import { FlowerTransparent } from '../CommonInvitationCanvasHelpers';
import type { CommonCanvasModel } from '../CommonInvitationCanvas.types';

interface IntroMonogramSectionProps {
  model: CommonCanvasModel;
}

export function IntroMonogramSection({ model }: IntroMonogramSectionProps) {
  const { lead, support } = model;

  return (
    <section className='relative bg-[#fffdfa] px-10 pb-0 pt-10 text-[#9f8a6a]'>
      <p className='text-center text-[0.6rem] uppercase tracking-[0.52em]'>Happy Wedding</p>

      <div className='mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center'>
        <div className='translate-y-2'>
          <p className='font-display text-[4.8rem] leading-none'>{lead.mark}</p>
          <p className='mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em]'>{lead.name}</p>
          <p className='mt-1 text-[0.56rem] uppercase tracking-[0.24em]'>{lead.romanLabel}</p>
        </div>

        <div className='flex flex-col items-center'>
          <FlowerTransparent className='h-80 w-40 text-[#d1ba96]' />
        </div>

        <div className='translate-y-2'>
          <p className='font-display text-[4.8rem] leading-none'>{support.mark}</p>
          <p className='mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em]'>{support.name}</p>
          <p className='mt-1 text-[0.56rem] uppercase tracking-[0.24em]'>{support.romanLabel}</p>
        </div>
      </div>

      <p className='font-script mt-7 text-center text-[3.45rem] leading-none text-[#a18a69]'>Wedding</p>

      <div className='-mt-50 flex justify-center translate-y-60'>
        <img
          alt='Wedding couple portrait'
          className='w-[76%] object-cover'
          loading='lazy'
          src={commonInvitationAssets.doorwayCouple}
        />
      </div>
    </section>
  );
}