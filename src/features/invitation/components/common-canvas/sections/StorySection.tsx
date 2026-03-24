import type { InvitationContent } from '../../../types/invitation.types';
import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';
import { ThreeRose } from '../CommonInvitationCanvasHelpers';

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

      <div className='relative mt-6 min-h-[25rem]'>
        <div className='relative w-[15rem]'>
          <div className='absolute left-[13rem] top-0 h-[7.5rem] w-[7.5rem]'>
            {'HAPPY WEDDING'.split('').map((char, index) => {
              const angle = -40 + index * 15;

              return (
                <span
                  key={`${char}-${index}`}
                  className='absolute left-1/2 top-1/2 text-[0.66rem] uppercase tracking-[0.34em] text-[#b29a82]'
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-2.5rem)`,
                    transformOrigin: 'center center',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              );
            })}
          </div>

          <div className='absolute left-0 top-[4.8rem]'>
            <ThreeRose className='h-35 w-35 text-[#d2b990]' />
          </div>

          <div className='ml-20 pl-1'>
            <p className='font-script text-[3.2rem] leading-[0.86] text-[#9f856d]'>Fall in</p>
            <p className='font-script ml-0 mt-4 pl-[3.5rem] text-[3.2rem] leading-[0.86] text-[#9f856d]'>Love</p>
            <p className='font-script ml-13 mt-4 pl-[2.3rem] text-[3.2rem] leading-[0.86] text-[#9f856d]'>Wedding</p>
          </div>
        </div>

        <div className='mt-5 ml-[12rem] max-w-[9rem] text-[0.88rem] leading-[1.75] text-[#7e6656]'>
          <p>{content.stories[3].description}</p>
          <div className='my-3 h-8 w-px bg-[#d3b99c]' />
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