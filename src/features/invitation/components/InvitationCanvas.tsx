import { CommonInvitationCanvas } from './CommonInvitationCanvas';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface InvitationCanvasProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function InvitationCanvas({ content, variant }: InvitationCanvasProps) {
  return <CommonInvitationCanvas content={content} variant={variant} />;
}
