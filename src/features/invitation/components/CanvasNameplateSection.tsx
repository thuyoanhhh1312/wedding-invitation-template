import doorwayCouple from '../../../assets/invitation/doorway-couple.png';
import bongFlower from '../../../assets/invitation/bong.png';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface CanvasNameplateSectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

/** Split a full name into two lines at the middle word boundary */
function splitName(name: string): [string, string] {
  const words = name.trim().split(/\s+/);
  if (words.length <= 1) return [name, ''];
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

export function CanvasNameplateSection({ content, variant }: CanvasNameplateSectionProps) {
  const [leadKey, supportKey] = variant.heroPairOrder;
  const lead = content.couple[leadKey];
  const support = content.couple[supportKey];

  const [leadLine1, leadLine2] = splitName(lead.name);
  const [supportLine1, supportLine2] = splitName(support.name);

  return (
    <section className='bg-[#fffdfa] pb-0 pt-6 text-[#7a6a50]'>
      {/* Arced "HAPPY WEDDING" text above the floral */}
      <div className='flex justify-center'>
        <svg
          aria-hidden='true'
          className='h-28 w-64 text-[#9f8a6a]'
          fill='none'
          viewBox='0 0 256 112'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M28 108 C 40 40, 216 40, 228 108' id='nameplate-arc' />
          <text
            fill='currentColor'
            fontFamily='"Mulish", sans-serif'
            fontSize='13'
            fontWeight='600'
            letterSpacing='9'
          >
            <textPath href='#nameplate-arc' startOffset='50%' textAnchor='middle'>
              {content.labels.arcWordmark}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Updated Initials + floral grid */}
      <div className='-mt-14 grid grid-cols-[1fr_auto_1fr] items-end px-8 text-center'>
        {/* Left: lead initial + name + label */}
        <div className='flex flex-col items-center self-end pb-4'>
          <p className='font-display text-[5.2rem] leading-none text-[#4f3d2d]'>{lead.mark}</p>
          <div className='mt-2 border-t border-[#c4aa86] pt-2'>
            <p className='text-[0.58rem] font-semibold uppercase leading-[1.7] tracking-[0.32em]'>
              {leadLine1}
              {leadLine2 && (
                <>
                  <br />
                  {leadLine2}
                </>
              )}
            </p>
            <div className='mx-auto mt-1.5 h-px w-[4.85rem] bg-[#c4aa86]' />
            <p className='mt-1.5 text-[0.54rem] uppercase tracking-[0.28em] text-[#8f7756]'>{lead.romanLabel}</p>
          </div>
        </div>

        {/* Center: botanical illustration */}
        <div className='flex flex-col items-center px-1'>
          <img
            alt='Floral illustration'
            className='h-[21rem] w-[8.8rem] object-contain'
            loading='lazy'
            src={bongFlower}
          />
        </div>

        {/* Right: support initial + name + label */}
        <div className='flex flex-col items-center self-end pb-4'>
          <p className='font-display text-[5.2rem] leading-none text-[#4f3d2d]'>{support.mark}</p>
          <div className='mt-2 border-t border-[#c4aa86] pt-2'>
            <p className='text-[0.58rem] font-semibold uppercase leading-[1.7] tracking-[0.32em]'>
              {supportLine1}
              {supportLine2 && (
                <>
                  <br />
                  {supportLine2}
                </>
              )}
            </p>
            <div className='mx-auto mt-1.5 h-px w-[4.85rem] bg-[#c4aa86]' />
            <p className='mt-1.5 text-[0.54rem] uppercase tracking-[0.28em] text-[#8f7756]'>{support.romanLabel}</p>
          </div>
        </div>
      </div>

      <div className='mt-8 flex justify-center'>
        <img alt='Wedding couple portrait' className='w-[76%] object-cover' loading='lazy' src={doorwayCouple} />
      </div>
    </section>
  );
}
