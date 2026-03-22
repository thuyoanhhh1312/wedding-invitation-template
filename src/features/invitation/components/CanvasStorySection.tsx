import doorwayCouple from '../../../assets/invitation/doorway-couple.png';
import type { InvitationContent } from '../types/invitation.types';
import { WelcomeArcWordmark, WelcomeBotanical } from './svgs';

interface CanvasStorySectionProps {
  content: InvitationContent;
}

export function CanvasStorySection({ content }: CanvasStorySectionProps) {
  const welcomeTitleWords = content.welcome.title.split(' ');

  return (
    <section className='bg-[#5d1b18] px-8 pb-10 pt-0 text-[#efe2d1]'>
      <img alt='Story couple portrait' className='w-full object-cover' loading='lazy' src={doorwayCouple} />

      <p className='mx-auto mt-10 max-w-[28rem] text-center font-formal text-[0.96rem] leading-[1.55rem] tracking-[0.055em] text-[#d9bb9f]'>
        {content.welcome.intro}
      </p>

      <div className='relative mt-[4.8rem] min-h-[35rem]'>
        <WelcomeArcWordmark
          className='absolute right-[2.15rem] top-[2.7rem] h-[9.25rem] w-[9.25rem] text-[#b79a79]'
          text={content.labels.welcomeWordmark}
        />

        <div className='relative z-10 max-w-[21rem] pl-3 text-[#dfc39d]'>
          <p className='font-formal text-[4.5rem] font-medium leading-[0.86] italic tracking-[-0.06em]'>
            {welcomeTitleWords[0] ?? ''}
          </p>
          <p className='ml-[5.9rem] font-formal text-[3.55rem] font-medium leading-[0.76] italic tracking-[-0.06em]'>
            {welcomeTitleWords[1] ?? ''}
          </p>
          <p className='mt-1 font-formal text-[4.7rem] font-medium leading-[0.84] italic tracking-[-0.06em]'>
            {welcomeTitleWords[2] ?? ''}
          </p>
        </div>

        <div className='mt-10 grid grid-cols-[minmax(0,15.5rem)_1fr] items-end gap-2'>
          <div className='pl-1 text-center font-formal text-[0.98rem] font-medium leading-[1.72rem] tracking-[0.048em] text-[#e6ceb3]'>
            <p>{content.welcome.body}</p>
          </div>

          <WelcomeBotanical className='ml-auto h-[21rem] w-[10.5rem] text-[#b79a79]' />
        </div>
      </div>
    </section>
  );
}
