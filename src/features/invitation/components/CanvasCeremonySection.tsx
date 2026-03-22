import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface CanvasCeremonySectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function CanvasCeremonySection({ content, variant }: CanvasCeremonySectionProps) {
  const primaryVenue = variant.id === 'common' ? content.party.venue : variant.ceremonyVenue;

  return (
    <section className='bg-[#5d1b18] px-8 pb-12 pt-9 text-center text-[#efe2d1]'>
      <p className='text-[0.66rem] font-semibold uppercase tracking-[0.52em]'>{content.labels.ceremonyOfUs[0]}</p>
      <p className='mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.52em]'>{content.labels.ceremonyOfUs[1]}</p>

      <div className='mx-auto mt-6 h-11 w-px bg-[#b3876f]' />

      <p className='mt-6 text-[0.68rem] uppercase tracking-[0.34em] text-[#dfc1aa]'>Trân trọng kính mời</p>
      <p className='font-script mt-3 text-[2.45rem] leading-none text-[#f7eadf]'>{content.hero.invitees}</p>

      <div className='mx-auto mt-7 h-11 w-px bg-[#b3876f]' />

      <p className='mt-6 text-[0.7rem] font-semibold uppercase leading-6 tracking-[0.34em]'>
        {content.party.title}
        <br />
        {content.party.subtitle}
      </p>

      <div className='mt-7 inline-flex rounded-sm bg-[#d6c29f] px-5 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.36em] text-[#5d1b18]'>
        {content.party.dayLabel}
      </div>

      <p className='mt-3 font-display text-[2.95rem] leading-none tracking-[0.26em]'>{content.party.time}</p>

      <div className='mt-6 grid grid-cols-3 gap-3 text-[#e6d0bb]'>
        {[content.eventDate.digits.day, content.eventDate.digits.month, content.eventDate.digits.year].map(
          (part, index) => {
            const labels = ['Ngày', 'Tháng', 'Năm'];

            return (
              <div key={`${part}-${index}`} className='space-y-1'>
                <p className='font-display text-[3.25rem] leading-none'>{part}</p>
                <p className='font-script text-[1.2rem] leading-none text-[#f0decf]'>{labels[index]}</p>
              </div>
            );
          },
        )}
      </div>

      <p className='mt-5 text-[0.9rem] text-[#f0dfcf]'>{content.party.note}</p>

      <div className='mx-auto mt-7 h-11 w-px bg-[#b3876f]' />

      <p className='font-display mt-7 text-[1.85rem] leading-none tracking-[0.08em]'>{primaryVenue}</p>
      <div className='mt-7 space-y-2 text-[0.76rem] font-semibold uppercase leading-6 tracking-[0.28em] text-[#d6c0ab]'>
        {content.party.address.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </section>
  );
}
