import { PictureFrame, SectionHeading } from '../../../components/shared';
import type { InvitationContent, InvitationPersona, InvitationVariant } from '../types/invitation.types';

interface InvitationFamilySectionProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

interface InvitationProfileCardProps {
  profile: InvitationPersona;
}

function InvitationProfileCard({ profile }: InvitationProfileCardProps) {
  return (
    <article className='wine-surface rounded-[2rem] p-5 text-[#f8ece2]'>
      <div className='flex items-center gap-4'>
        <PictureFrame
          alt={profile.name}
          aspectClassName='aspect-[4/5]'
          className='w-24 shrink-0'
          frameTone='wine'
          src={profile.portrait}
        />

        <div>
          <p className='text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-[#e7c6b1]'>{profile.romanLabel}</p>
          <h3 className='font-display mt-2 text-[2rem] leading-none'>{profile.name}</h3>
          <p className='mt-2 text-xs uppercase tracking-[0.28em] text-[#f3ddd0]'>{profile.houseLabel}</p>
        </div>
      </div>

      <div className='mt-5 space-y-2 text-sm leading-6 text-[#f6e4d7]'>
        {profile.parents.map((parent) => (
          <p key={parent}>{parent}</p>
        ))}
        <p className='pt-2 text-[#e1c5b5]'>{profile.location}</p>
      </div>
    </article>
  );
}

export function InvitationFamilySection({ content, variant }: InvitationFamilySectionProps) {
  const orderedProfiles = variant.familyOrder.map((profileKey) => content.couple[profileKey]);

  return (
    <section className='bg-[#fff8f1] px-5 py-6'>
      <SectionHeading
        description='Cùng một component nhưng đổi thứ tự hiển thị theo từng biến thể thiệp, bám sát ba file PDF đầu vào.'
        eyebrow='Wedding House'
        title={`${orderedProfiles[0].name} & ${orderedProfiles[1].name}`}
      />

      <div className='mt-5 grid gap-4'>
        {orderedProfiles.map((profile) => (
          <InvitationProfileCard key={profile.key} profile={profile} />
        ))}
      </div>
    </section>
  );
}
