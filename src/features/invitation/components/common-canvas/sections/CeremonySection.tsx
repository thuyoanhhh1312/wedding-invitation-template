import type { InvitationContent, InvitationVariant } from '../../../types/invitation.types';
import { commonInvitationAssets } from '../CommonInvitationCanvasAssets';
import { FlowerTransparent } from '../CommonInvitationCanvasHelpers';

interface CeremonySectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

const ARC_TEXT = 'HAPPY WEDDING'.split('');

export function CeremonySection({ content, variant }: CeremonySectionProps) {
  const variantData = variant as InvitationVariant & { ceremonyDateLine?: string };
  const contentData = content as InvitationContent & { ceremonyDateLine?: string };

  const ceremonyDateLine =
    variantData.ceremonyDateLine ?? contentData.ceremonyDateLine ?? 'THỨ BẢY | 29.11.2025';

  return (
    <section className='bg-[#fffdfa] px-6 pb-9 pt-8 text-[#b19879] sm:px-8'>
      <div className='relative mx-auto min-h-[660px] max-w-[560px] overflow-hidden'>
        <div className='absolute left-2 top-2 z-10'>
          <p className='font-script text-[5rem] leading-[0.88] tracking-[-0.04em] text-[#857157]'>
            Fall in
          </p>
          <p className='font-script  pl-[7.4rem] text-[5rem] leading-[0.88] tracking-[-0.04em] text-[#857157]'>
            Love
          </p>
          <p className='font-script mt-2 pl-[4.6rem] text-[5.3rem] leading-[0.86] tracking-[-0.04em] text-[#857157]'>
            Wedding
          </p>
        </div>

        <div className='absolute right-15 top-7 h-[160px] w-[160px]'>
          {ARC_TEXT.map((letter, index) => {
            const angle = -30 + index * 13;

            return (
              <span
                key={`${letter}-${index}`}
                className='absolute left-1/2 top-1/2 text-[0.92rem] uppercase tracking-[0.34em] text-[#8f7a60]'
                style={{
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-63px)`,
                  transformOrigin: 'center center',
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </span>
            );
          })}
        </div>

        <div className='absolute -left-8 top-[220px]'>
          <FlowerTransparent className='h-[400px] w-[240px] text-[#ccb081]' />
        </div>

        <div className='mt-80 ml-40 top-[430px] z-10 w-[300px] text-center text-[#8f7a60]'>
          <p className='text-[1.05rem] uppercase tracking-[0.34em]'>{variant.ceremonyTitle}</p>
          <p className='mt-2 text-[1.05rem] uppercase tracking-[0.34em]'>ĐƯỢC TỔ CHỨC VÀO</p>

          <p className='font-display mt-6 text-[4.1rem] leading-none tracking-[0.22em] text-[#7c6850]'>
            {variant.ceremonyTime.replace(':', ' : ')}
          </p>

          <p className='mt-3 text-[1.05rem] uppercase tracking-[0.28em] text-[#8f7a60]'>
            {ceremonyDateLine}
          </p>

          <p className='font-script mt-1 text-[1.8rem] leading-none text-[#8f7a60]'>
            {`(${variant.ceremonyHost})`}
          </p>
        </div>
      </div>

      <div className='mt-3 flex items-start gap-0'>
        <img
          alt='Close-up couple portrait'
          className='w-full object-cover'
          loading='lazy'
          src={commonInvitationAssets.closeupCouple}
        />
      </div>
    </section>
  );
}