import { SectionBadge, SectionHeading } from '../../../components/shared';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface InvitationRsvpSectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function InvitationRsvpSection({ content, variant }: InvitationRsvpSectionProps) {
  return (
    <section className='bg-[#fff8f1] px-5 py-6'>
      <SectionHeading
        description='UI only nên các trạng thái RSVP được dựng bằng card tĩnh, đủ để tái sử dụng cho form thật về sau.'
        eyebrow={content.rsvp.title}
        title={content.rsvp.question}
      />

      <div className='mt-6 grid gap-3'>
        {variant.rsvpOptions.map((option) => (
          <article key={option.id} className='paper-surface rounded-[1.75rem] px-4 py-4'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <h3 className='font-display text-[1.65rem] leading-none text-[#4f2d26]'>{option.title}</h3>
                <p className='mt-3 text-sm leading-6 text-[#73574e]'>{option.description}</p>
              </div>
              <span className='mt-1 h-5 w-5 rounded-full border border-[#d8c3b1] bg-[#fff8f1]' />
            </div>
          </article>
        ))}
      </div>

      <div className='mt-5 grid gap-3'>
        <div className='wine-surface rounded-[1.9rem] px-5 py-5 text-[#fbefe7]'>
          <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#e7c7b2]'>
            {content.rsvp.attendeeLabel}
          </p>
          <p className='font-display mt-3 text-[3rem] leading-none'>{content.rsvp.attendeeCount}</p>
        </div>

        <div className='paper-surface rounded-[1.9rem] px-5 py-5'>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#aa8262]'>{content.rsvp.giftTitle}</p>
              <p className='mt-3 text-sm leading-6 text-[#73574e]'>{content.rsvp.giftNote}</p>
            </div>
            <SectionBadge>{variant.giftTags.length} mục</SectionBadge>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {variant.giftTags.map((tag) => (
              <span
                key={tag}
                className='rounded-full bg-[#f5ecdf] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[#926c4e]'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
