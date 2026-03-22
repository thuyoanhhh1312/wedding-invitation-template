import type { InvitationContent, InvitationVariant } from '../types/invitation.types';
import { CanvasCeremonySection } from './CanvasCeremonySection';
import { CanvasEditorialSection } from './CanvasEditorialSection';
import { CanvasFamilySection } from './CanvasFamilySection';
import { CanvasHeroSection } from './CanvasHeroSection';
import { CanvasLetterSection } from './CanvasLetterSection';
import { CanvasNameplateSection } from './CanvasNameplateSection';
import { CanvasRsvpGiftSection } from './CanvasRsvpGiftSection';
import { CanvasSchedulePreviewSection } from './CanvasSchedulePreviewSection';
import { CanvasScheduleSection } from './CanvasScheduleSection';
import { CanvasStorySection } from './CanvasStorySection';

interface CommonInvitationCanvasProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function CommonInvitationCanvas({ content, variant }: CommonInvitationCanvasProps) {
  return (
    <article className='w-full overflow-hidden bg-[#fffdfa] shadow-[0_30px_90px_rgba(74,36,32,0.18)]'>
      <CanvasHeroSection content={content} />
      <CanvasNameplateSection content={content} variant={variant} />
      <CanvasCeremonySection content={content} variant={variant} />
      <CanvasSchedulePreviewSection content={content} variant={variant} />
      <CanvasLetterSection content={content} />
      <CanvasFamilySection content={content} variant={variant} />
      <CanvasStorySection content={content} />
      <CanvasEditorialSection content={content} />
      <CanvasScheduleSection content={content} />
      <CanvasRsvpGiftSection content={content} variant={variant} />
    </article>
  );
}