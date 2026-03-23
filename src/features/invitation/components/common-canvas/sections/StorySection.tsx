import type { InvitationContent } from '../../../types/invitation.types';
import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';
import { FloralStem } from '../CommonInvitationCanvasHelpers';

interface StorySectionProps {
  content: InvitationContent;
}

export function StorySection({ content }: StorySectionProps) {
  return (
    <section className='bg-[#fffdfa] px-8 pb-0 pt-8 text-[#b19879]'>
      <div className='grid grid-cols-3 gap-2'>
        {[0, 1, 2].map((item) => (
          <img
            key={item}
            alt={`Editorial bridal frame ${item + 1}`}
            className='aspect-1.25/1 h-full w-full object-cover'
            loading='lazy'
            src={commonInvitationAssets.gownEditorial}
          />
        ))}
      </div>

      <div className='mt-6 grid grid-cols-[1fr_0.92fr] gap-5'>
        <div className='flex items-start gap-3'>
          <FloralStem className='h-24 w-10 shrink-0 text-[#d2b990]' />
          <p className='font-script text-[2.9rem] leading-none'>Fall in Love Wedding</p>
        </div>

        <div className='space-y-4 text-[0.95rem] leading-7 text-[#7e6656]'>
          <p>{content.stories[3].description}</p>
          <div className='h-12 w-px bg-[#d3b99c]' />
          <p>{content.stories[2].description}</p>
        </div>
      </div>

      <img
        alt='Editorial bridal portrait'
        className='mt-8 w-full object-cover'
        loading='lazy'
        src={commonInvitationAssets.gownEditorial}
      />
    </section>
  );
}