import { PictureFrame, SectionHeading } from '../../../components/shared';
import type { InvitationContent } from '../types/invitation.types';

interface InvitationLetterSectionProps {
  content: InvitationContent;
}

export function InvitationLetterSection({ content }: InvitationLetterSectionProps) {
  return (
    <section className='ornament-surface px-5 py-6 text-[#f9efe7]'>
      <div className='rounded-[2rem] border border-white/10 bg-white/4 p-5'>
        <SectionHeading
          description={content.letter.paragraphs[0]}
          eyebrow={content.letter.eyebrow}
          title={content.letter.title}
          tone='wine'
        />

        <div className='mt-5 grid grid-cols-2 gap-3'>
          <PictureFrame alt='Letter photo one' frameTone='wine' src={content.letter.photos[0]} />
          <PictureFrame alt='Letter photo two' frameTone='wine' src={content.letter.photos[1]} />
        </div>

        <div className='mt-5 space-y-3 text-sm leading-6 text-[#f3ddd2]'>
          {content.letter.paragraphs.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
