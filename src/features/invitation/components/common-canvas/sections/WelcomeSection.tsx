import type { InvitationContent } from '../../../types/invitation.types';
import { WelcomeArcWordmark, FlowerTransparent } from '../CommonInvitationCanvasHelpers';
import type { CommonCanvasModel } from '../CommonInvitationCanvas.types';


interface WelcomeSectionProps {
  content: InvitationContent;
  model: CommonCanvasModel;
}

export function WelcomeSection({ content, model }: WelcomeSectionProps) {
  return (
    <section className='relative bg-[#5d1b18] px-8 pb-10 pt-24 text-[#efe2d1]'>
      <div className='relative z-10 -mt-20'>
        <img
          alt='Story couple portrait'
          className='w-full object-cover'
          loading='lazy'
          src={content.party.image}
        />
      </div>

      <p className='mx-auto mt-10 max-w-md text-center font-formal text-[0.96rem] leading-[1.55rem] tracking-[0.055em] text-[#d9bb9f]'>
        {content.welcome.intro}
      </p>

      <div className='relative mt-[4.8rem] min-h-140'>
        <WelcomeArcWordmark className='mt-16 absolute right-[2.15rem] top-[2.7rem] h-37 w-37 text-[#b79a79]' />

        <div className='relative z-10 max-w-84 pl-3 text-[#dfc39d]'>
          <p className='font-formal text-[4.5rem] font-medium leading-[0.86] italic tracking-[-0.06em]'>
            {model.welcomeTitleWords[0] ?? ''}
          </p>
          <p className='ml-[5.9rem] font-formal text-[3.55rem] font-medium leading-[0.76] italic tracking-[-0.06em]'>
            {model.welcomeTitleWords[1] ?? ''}
          </p>
          <p className='mt-1 font-formal text-[4.7rem] font-medium leading-[0.84] italic tracking-[-0.06em]'>
            {model.welcomeTitleWords[2] ?? ''}
          </p>
        </div>

        <div className='mt-0 grid grid-cols-[minmax(0,15.5rem)_1fr] items-end gap-2'>
          <div className='pl-1 text-center font-formal text-[0.98rem] font-medium leading-[1.72rem] tracking-[0.048em] text-[#e6ceb3]'>
            <p>{content.welcome.body}</p>
          </div>

          <FlowerTransparent className='ml-auto h-84 w-42 text-[#b79a79]' />
        </div>
      </div>
    </section>
  );
}