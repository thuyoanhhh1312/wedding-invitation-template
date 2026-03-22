import { PictureFrame, SectionBadge, SectionHeading } from '../../../components/shared';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface InvitationHeroProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function InvitationHero({ content, variant }: InvitationHeroProps) {
  const [leadKey, supportKey] = variant.heroPairOrder;
  const lead = content.couple[leadKey];
  const support = content.couple[supportKey];

  return (
    <section className='ornament-surface relative overflow-hidden px-5 pb-8 pt-7 text-[#f8ece2]'>
      <div className='absolute left-[-84px] top-16 h-52 w-52 rounded-full border border-white/8' />
      <div className='absolute bottom-[-70px] right-[-56px] h-44 w-44 rounded-full border border-white/8' />

      <div className='relative flex flex-col items-center gap-5'>
        <SectionBadge tone='wine'>{variant.accentLabel}</SectionBadge>
        <div className='text-center'>
          <p className='font-script text-[2.25rem] leading-none text-[#f8e7da]'>{content.hero.quote}</p>
          <p className='mt-3 text-xs uppercase tracking-[0.3em] text-[#e5c6b3]'>{content.hero.subquote}</p>
        </div>

        <PictureFrame
          alt='Wedding cover'
          className='w-[78%] max-w-[18rem]'
          frameTone='wine'
          src={content.hero.image}
        />

        <div className='paper-surface w-full rounded-[2rem] px-5 py-6 text-[#4f2d26]'>
          <p className='text-center text-[0.68rem] font-semibold uppercase tracking-[0.4em] text-[#ac8465]'>Wedding</p>
          <div className='mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-3'>
            <div className='text-left'>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#aa8262]'>{lead.romanLabel}</p>
              <h2 className='font-display mt-2 text-[2.2rem] leading-none'>{lead.name}</h2>
              <p className='mt-2 text-xs uppercase tracking-[0.28em] text-[#7f6256]'>{lead.houseLabel}</p>
            </div>

            <div className='grid h-20 w-20 place-items-center rounded-full border border-[#e6d5c3] bg-[#f6ede4]'>
              <div className='text-center leading-none'>
                <p className='font-display text-[2rem] text-[#6a2624]'>{lead.mark}</p>
                <p className='my-1 text-xs uppercase tracking-[0.4em] text-[#b68b6f]'>&</p>
                <p className='font-display text-[2rem] text-[#6a2624]'>{support.mark}</p>
              </div>
            </div>

            <div className='text-right'>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[#aa8262]'>{support.romanLabel}</p>
              <h2 className='font-display mt-2 text-[2.2rem] leading-none'>{support.name}</h2>
              <p className='mt-2 text-xs uppercase tracking-[0.28em] text-[#7f6256]'>{support.houseLabel}</p>
            </div>
          </div>

          <div className='mt-6 rounded-[1.5rem] bg-[#f5ecdf] px-4 py-4 text-center'>
            <p className='font-great-vibes inline-block whitespace-nowrap text-[clamp(1.45rem,5.6vw,1.8rem)] leading-none text-[#9d7658]'>
              {content.hero.statusLabel}
            </p>
            <p className='font-display mt-2 text-3xl leading-none text-[#6a2624]'>{content.hero.date}</p>
          </div>
        </div>

        <div className='paper-surface w-full rounded-[2rem] px-5 py-6 text-[#4f2d26]'>
          <SectionHeading
            alignment='center'
            description={content.hero.invitees}
            eyebrow='Trân trọng kính mời'
            title={content.hero.title}
          />

          <div className='mt-6 grid grid-cols-3 gap-3'>
            <div className='rounded-[1.35rem] bg-[#f6ede4] px-3 py-4 text-center'>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9f7656]'>Thứ</p>
              <p className='font-display mt-2 text-[1.85rem] leading-none text-[#6a2624]'>{content.party.dayLabel}</p>
            </div>
            <div className='rounded-[1.35rem] bg-[#f6ede4] px-3 py-4 text-center'>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9f7656]'>Giờ</p>
              <p className='font-display mt-2 text-[1.85rem] leading-none text-[#6a2624]'>{content.party.time}</p>
            </div>
            <div className='rounded-[1.35rem] bg-[#f6ede4] px-3 py-4 text-center'>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[#9f7656]'>Ngày</p>
              <p className='font-display mt-2 text-[1.85rem] leading-none text-[#6a2624]'>{content.party.date}</p>
            </div>
          </div>

          <div className='mt-6 grid gap-4 sm:grid-cols-[0.9fr_1.1fr] sm:items-start'>
            <PictureFrame alt='Wedding party' src={content.party.image} />

            <div className='rounded-[1.65rem] bg-[#f8f0e7] px-4 py-5'>
              <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-[#9d7658]'>{content.party.title}</p>
              <p className='mt-3 text-sm leading-6 text-[#7b6056]'>{content.party.subtitle}</p>
              <p className='font-display mt-4 text-[2.1rem] leading-none text-[#6a2624]'>{content.party.venue}</p>
              <div className='mt-4 space-y-2 text-sm leading-6 text-[#6d5147]'>
                {content.party.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <p className='mt-4 text-xs uppercase tracking-[0.28em] text-[#9b7659]'>{content.party.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
