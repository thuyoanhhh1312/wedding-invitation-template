import type { InvitationContent } from '../../../types/invitation.types';
import type { CommonCanvasModel } from '../CommonInvitationCanvas.types';

interface FamilySectionProps {
  content: InvitationContent;
  model: CommonCanvasModel;
}

export function FamilySection({ content, model }: FamilySectionProps) {
  return (
    <section className='bg-[#fffdfa] px-8 pb-8 pt-8 text-[#aa9274]'>
      <p className='font-script text-center text-[2.8rem] leading-none'>{model.familyLead.name}</p>

      <div className='mt-5 grid grid-cols-2 gap-3'>
        <img
          alt={model.familyLead.name}
          className='aspect-3/4 h-full w-full object-cover'
          loading='lazy'
          src={model.familyLead.portrait}
        />
        <img
          alt={model.familySupport.name}
          className='aspect-3/4 h-full w-full object-cover'
          loading='lazy'
          src={model.familySupport.portrait}
        />
      </div>

      <p className='font-script mt-4 text-center text-[2.8rem] leading-none'>{model.familySupport.name}</p>

      <div className='mt-6 grid grid-cols-2 gap-4 text-center text-[#7d6655]'>
        <div>
          <div className='mx-auto inline-flex bg-[#8d1f1d] px-5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#f8eee4]'>
            {model.familyLead.houseLabel}
          </div>
          <div className='mt-3 space-y-1 text-[0.74rem] font-semibold uppercase tracking-[0.24em]'>
            {model.familyLead.parents.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className='mt-2 text-sm'>{`(${model.familyLead.location})`}</p>
        </div>

        <div>
          <div className='mx-auto inline-flex bg-[#8d1f1d] px-5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#f8eee4]'>
            {model.familySupport.houseLabel}
          </div>
          <div className='mt-3 space-y-1 text-[0.74rem] font-semibold uppercase tracking-[0.24em]'>
            {model.familySupport.parents.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <p className='mt-2 text-sm'>{`(${model.familySupport.location})`}</p>
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