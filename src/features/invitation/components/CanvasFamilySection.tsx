import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface CanvasFamilySectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function CanvasFamilySection({ content, variant }: CanvasFamilySectionProps) {
  const [familyLeadKey, familySupportKey] = variant.familyOrder;
  const familyLead = content.couple[familyLeadKey];
  const familySupport = content.couple[familySupportKey];

  return (
    <section className='bg-[#fffdfa] px-8 pb-8 pt-8 text-[#aa9274]'>
      <p
        className='text-[3rem]'
        style={{ fontFamily: 'Great Vibes, cursive' }}
      >
        {familyLead.name}
      </p>

      <div className='mt-5 grid grid-cols-2 gap-3'>
        <img
          alt={familyLead.name}
          className='aspect-[3/4] h-full w-full object-cover'
          loading='lazy'
          src={familyLead.portrait}
        />
        <img
          alt={familySupport.name}
          className='aspect-[3/4] h-full w-full object-cover'
          loading='lazy'
          src={familySupport.portrait}
        />
      </div>

      <p
        className='text-[3rem]'
        style={{ fontFamily: 'Great Vibes, cursive' }}
      >
        {familySupport.name}
      </p>

      <div className='mt-6 grid grid-cols-2 gap-4 text-center text-[#7d6655]'>
        <div>
          <div className='mx-auto inline-flex bg-[#8d1f1d] px-5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#f8eee4]'>
            {familyLead.houseLabel}
          </div>
          <div className='mt-3 space-y-1 text-[0.74rem] font-semibold uppercase tracking-[0.24em]'>
            {familyLead.parents.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className='mt-2 text-sm'>{`(${familyLead.location})`}</p>
        </div>

        <div>
          <div className='mx-auto inline-flex bg-[#8d1f1d] px-5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#f8eee4]'>
            {familySupport.houseLabel}
          </div>
          <div className='mt-3 space-y-1 text-[0.74rem] font-semibold uppercase tracking-[0.24em]'>
            {familySupport.parents.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className='mt-2 text-sm'>{`(${familySupport.location})`}</p>
        </div>
      </div>

      <div className='mt-8 space-y-2 text-center text-[0.95rem] leading-7 text-[#7d6655]'>
        {content.stories[0].description.split('. ').slice(0, 4).map((line) => (
          <p key={line}>{line.endsWith('.') ? line : `${line}.`}</p>
        ))}
      </div>
    </section>
  );
}
