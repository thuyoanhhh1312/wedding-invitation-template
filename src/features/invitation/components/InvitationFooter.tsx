import { PictureFrame } from '../../../components/shared';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface InvitationFooterProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function InvitationFooter({ content, variant }: InvitationFooterProps) {
  return (
    <section className='ornament-surface px-5 pb-7 pt-6 text-[#fbefe7]'>
      <div className='rounded-[2rem] border border-white/10 bg-white/4 p-5'>
        <p className='font-script text-center text-[2.35rem] leading-none'>{content.footer.tagline}</p>
        <p className='mt-3 text-center text-xs uppercase tracking-[0.34em] text-[#e7c7b2]'>{variant.label}</p>
        <p className='mt-4 text-center text-sm leading-6 text-[#f3ddd2]'>{content.footer.note}</p>

        <div className='mt-5 grid grid-cols-3 gap-3'>
          {content.footer.photos.map((photo, index) => (
            <PictureFrame
              key={photo}
              alt={`Closing photo ${index + 1}`}
              aspectClassName='aspect-[3/4]'
              frameTone='wine'
              src={photo}
            />
          ))}
        </div>

        <div className='mt-5 rounded-[1.6rem] bg-white/8 px-4 py-4 text-center'>
          <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#f1ddd1]'>{content.footer.quote}</p>
          <p className='font-display mt-3 text-[1.8rem] leading-none text-[#fff2e8]'>Tailwind CSS v4 • UI only</p>
        </div>
      </div>
    </section>
  );
}
