import type { InvitationContent, InvitationVariant } from '../types/invitation.types';
import { CommonInvitationCanvas } from './CommonInvitationCanvas';

interface InvitationCanvasProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

export function InvitationCanvas({ content, variant }: InvitationCanvasProps) {
  return <CommonInvitationCanvas content={content} variant={variant} />;
}