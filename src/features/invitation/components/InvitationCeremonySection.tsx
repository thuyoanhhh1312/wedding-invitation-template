import { PictureFrame, SectionBadge, SectionHeading } from '../../../components/shared';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface InvitationCeremonySectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function InvitationCeremonySection({ content, variant }: InvitationCeremonySectionProps) {
  return (
    <section className='bg-[#fff8f1] px-5 py-6'>
      <div className='paper-surface rounded-[2rem] p-4'>
        <div className='flex items-start justify-between gap-4'>
          <SectionHeading
            description={variant.ceremonySummary}
            eyebrow={variant.label}
            title={variant.ceremonyTitle}
          />
          <SectionBadge tone='wine'>{variant.ceremonyTime}</SectionBadge>
        </div>

        <div className='mt-5 grid gap-3 sm:grid-cols-[1.02fr_0.98fr]'>
          <PictureFrame alt='Ceremony portrait' src={content.party.image} />

          <div className='wine-surface rounded-[1.85rem] px-5 py-5 text-[#fbefe7]'>
            <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#e7c7b2]'>Wedding</p>
            <p className='font-display mt-3 text-[2.1rem] leading-none'>{content.eventDate.displayShort}</p>
            <p className='mt-4 text-xs uppercase tracking-[0.28em] text-[#e7c8b7]'>{variant.ceremonyVenue}</p>
            <p className='mt-2 text-sm leading-6 text-[#f3ddd2]'>{variant.ceremonyHost}</p>

            <div className='mt-5 rounded-[1.4rem] bg-white/8 px-4 py-4 text-sm leading-6 text-[#f5e4d8]'>
              {variant.ceremonySummary}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
