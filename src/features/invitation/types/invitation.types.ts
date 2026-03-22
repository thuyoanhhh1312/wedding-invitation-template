import type { InvitationEventDate } from '../../../lib/date';

export type InvitationHouseKey = 'bride' | 'groom';
export type InvitationVariantKey = 'common' | 'bride' | 'groom';

export interface InvitationPersona {
  key: InvitationHouseKey;
  name: string;
  mark: string;
  romanLabel: string;
  houseLabel: string;
  location: string;
  parents: string[];
  portrait: string;
}

export interface InvitationHeroData {
  date: string;
  image: string;
  invitees: string;
  quote: string;
  statusLabel: string;
  subquote: string;
  title: string;
}

export interface InvitationPartyData {
  date: string;
  dayLabel: string;
  image: string;
  note: string;
  time: string;
  title: string;
  subtitle: string;
  venue: string;
  address: string[];
}

export interface InvitationLetterData {
  eyebrow: string;
  paragraphs: string[];
  photos: string[];
  title: string;
}

export interface InvitationStoryCard {
  id: string;
  description: string;
  eyebrow: string;
  image: string;
  title: string;
  tone: 'paper' | 'wine';
}

export interface InvitationWelcomeData {
  body: string;
  intro: string;
  title: string;
}

export interface InvitationScheduleData {
  dateLabel: string;
  photo: string;
  subline: string;
  summary: string[];
  title: string;
}

export interface InvitationRsvpData {
  attendeeCount: string;
  attendeeLabel: string;
  confirmButtonLabel: string;
  giftNote: string;
  giftTitle: string;
  previewHint: string;
  question: string;
  title: string;
}

export interface InvitationFooterData {
  note: string;
  photos: string[];
  quote: string;
  tagline: string;
}

export interface InvitationLabels {
  arcWordmark: string;
  ceremonyOfUs: [string, string];
  coverEyebrow: string;
  coverLine: string;
  eventWordmark: string;
  familyWordmark: string;
  giftHeading: string;
  letterTitle: string;
  scheduleWordmark: string;
  welcomeWordmark: string;
}

export interface InvitationContent {
  couple: Record<InvitationHouseKey, InvitationPersona>;
  eventDate: InvitationEventDate;
  footer: InvitationFooterData;
  hero: InvitationHeroData;
  labels: InvitationLabels;
  letter: InvitationLetterData;
  party: InvitationPartyData;
  rsvp: InvitationRsvpData;
  schedule: InvitationScheduleData;
  stories: InvitationStoryCard[];
  welcome: InvitationWelcomeData;
}

export interface InvitationRsvpOption {
  description: string;
  id: string;
  title: string;
}

export interface InvitationVariant {
  accentLabel: string;
  ceremonyHost: string;
  ceremonySummary: string;
  ceremonyTime: string;
  ceremonyTitle: string;
  ceremonyVenue: string;
  familyOrder: [InvitationHouseKey, InvitationHouseKey];
  giftTags: string[];
  heroPairOrder: [InvitationHouseKey, InvitationHouseKey];
  id: InvitationVariantKey;
  label: string;
  rsvpOptions: InvitationRsvpOption[];
  summary: string;
}