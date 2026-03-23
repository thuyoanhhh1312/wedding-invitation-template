import type { InvitationContent, InvitationPersona, InvitationVariant } from '../../types/invitation.types';

export interface CommonCanvasModel {
  lead: InvitationPersona;
  support: InvitationPersona;
  familyLead: InvitationPersona;
  familySupport: InvitationPersona;
  partyVenue: string;
  isCommonGiftLayout: boolean;
  scheduleSummaryText: string;
  welcomeTitleWords: string[];
}

export interface CommonCanvasSectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
  model: CommonCanvasModel;
}