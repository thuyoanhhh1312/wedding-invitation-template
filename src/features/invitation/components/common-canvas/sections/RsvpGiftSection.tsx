import type { InvitationContent, InvitationVariant } from '../../../types/invitation.types';
import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';
import { CurvedGiftHeading, GiftIcon } from '../CommonInvitationCanvasHelpers';
import type { CommonCanvasModel } from '../CommonInvitationCanvas.types';

interface RsvpGiftSectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
  model: CommonCanvasModel;
}

function RsvpTimeline({ content, variant }: { content: InvitationContent; variant: InvitationVariant }) {
  const hasThreeOptions = variant.rsvpOptions.length === 3;
  const timelineTextClassName = 'font-display text-[0.98rem] leading-6 text-[#84705f]';

  return (
    <div className='mt-2'>
      <img alt='' aria-hidden='true' className='mx-auto h-11 w-11' loading='lazy' src={commonInvitationAssets.bottomRoseIcon} />
      <p className='mt-4 text-center font-display text-[0.82rem] uppercase tracking-[0.34em] text-[#8e7862]'>
        {content.rsvp.title}
      </p>
      <p className='mt-2 text-center font-display text-[0.98rem] text-[#8b7664]'>{content.rsvp.question}</p>

      {hasThreeOptions ? (
        <div className='relative mx-auto mt-8 grid max-w-[16rem] grid-cols-[1fr_1.75rem_1fr] items-center gap-y-6'>
          <div className='absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 bg-[#ceb79f]' />
          <div />
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <p className={`${timelineTextClassName} text-left`}>{variant.rsvpOptions[0]?.title ?? ''}</p>

          <p className={`${timelineTextClassName} text-right`}>{variant.rsvpOptions[1]?.title ?? ''}</p>
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <div />

          <div />
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <p className={`${timelineTextClassName} text-left`}>{variant.rsvpOptions[2]?.title ?? ''}</p>
        </div>
      ) : (
        <div className='relative mx-auto mt-8 grid max-w-60 grid-cols-[1fr_1.75rem_1fr] items-center gap-y-8'>
          <div className='absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 bg-[#ceb79f]' />
          <div />
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <p className={`${timelineTextClassName} text-left`}>{variant.rsvpOptions[0]?.title ?? ''}</p>

          <p className={`${timelineTextClassName} text-right`}>{variant.rsvpOptions[1]?.title ?? ''}</p>
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <div />
        </div>
      )}

      <div className='mt-10'>
        <p className='text-center font-display text-[0.78rem] uppercase tracking-[0.36em] text-[#9d846c]'>
          {content.rsvp.attendeeLabel}
        </p>
        <div className='mt-3 flex items-center justify-center gap-6'>
          <p className='font-display text-[2.6rem] leading-none tracking-[0.12em] text-[#7f6957]'>
            {content.rsvp.attendeeCount}
          </p>
          <button
            className='min-w-31 rounded-sm bg-[#5d1b18] px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#f7ede3]'
            type='button'
          >
            Xác nhận
          </button>
        </div>
      </div>
    </div>
  );
}

export function RsvpGiftSection({ content, variant, model }: RsvpGiftSectionProps) {
  return (
    <section className='relative bg-[#fffdfa] px-8 pb-12 pt-24 text-[#7f6957]'>
      <RsvpTimeline content={content} variant={variant} />

      <div className='relative z-10 mt-14 flex justify-center -mb-12'>
        <div className={`relative ${model.isCommonGiftLayout ? 'w-[16rem]' : 'w-44'}`}>
          <CurvedGiftHeading className='absolute -left-[4.8rem] -top-[1.8rem] h-40 w-40 text-[#8f7862]' />
          <div className={model.isCommonGiftLayout ? 'grid grid-cols-2 gap-3 pl-4' : 'grid place-items-center pl-5'}>
            {variant.giftTags.map((tag) => (
              <div key={tag} className='text-center'>
                {model.isCommonGiftLayout ? (
                  <img
                    alt={tag}
                    className='h-[7.4rem] w-[7.4rem] rounded-[0.95rem] object-cover'
                    loading='lazy'
                    src={commonInvitationAssets.commonGiftBoxCard}
                  />
                ) : (
                  <div className='grid h-29 w-29 place-items-center rounded-[0.85rem] bg-[#5d1b18]'>
                    <GiftIcon />
                  </div>
                )}
                <p className='mt-2 font-display text-[1.02rem] uppercase tracking-[0.22em] text-[#8b735f]'>{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className='mt-16 text-center font-display text-[1rem] leading-8 text-[#7b675a]'>{content.rsvp.giftNote}</p>
    </section>
  );
}