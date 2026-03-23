import type { InvitationContent, InvitationVariant } from '../types/invitation.types';
import { buildCommonCanvasModel } from './common-canvas/CommonInvitationCanvasHelpers';
import { CeremonySection } from './common-canvas/sections/CeremonySection';
import { FamilySection } from './common-canvas/sections/FamilySection';
import { HeroSection } from './common-canvas/sections/HeroSection';
import { IntroMonogramSection } from './common-canvas/sections/IntroMonogramSection';
import { InviteSection } from './common-canvas/sections/InviteSection';
import { LetterSection } from './common-canvas/sections/LetterSection';
import { RsvpGiftSection } from './common-canvas/sections/RsvpGiftSection';
import { ScheduleSection } from './common-canvas/sections/ScheduleSection';
import { StorySection } from './common-canvas/sections/StorySection';
import { WelcomeSection } from './common-canvas/sections/WelcomeSection';

interface CommonInvitationCanvasProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function CommonInvitationCanvas({ content, variant }: CommonInvitationCanvasProps) {
  const model = buildCommonCanvasModel(content, variant);

  return (
    <article className='w-full overflow-hidden bg-[#fffdfa] shadow-[0_30px_90px_rgba(74,36,32,0.18)]'>
      <HeroSection content={content} />
      <IntroMonogramSection model={model} />
      <InviteSection content={content} model={model} />
      <CeremonySection content={content} variant={variant} />
      <LetterSection />
      <FamilySection content={content} model={model} />
      <WelcomeSection content={content} model={model} />
      <StorySection content={content} />
      <ScheduleSection content={content} model={model} />
      <RsvpGiftSection content={content} variant={variant} model={model} />
    </article>
  );
}