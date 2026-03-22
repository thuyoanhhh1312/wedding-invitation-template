import { PictureFrame, SectionHeading } from '../../../components/shared';
import { cn } from '../../../lib/cn';
import type { InvitationContent, InvitationStoryCard } from '../types/invitation.types';

interface InvitationStoryCardProps {
  card: InvitationStoryCard;
}

function InvitationStoryCardView({ card }: InvitationStoryCardProps) {
  const isWine = card.tone === 'wine';

  return (
    <article
      className={cn(
        'overflow-hidden rounded-[2rem] border p-4',
        isWine
          ? 'border-[#6b3c39] bg-[#5a1f1f] text-[#fbefe7]'
          : 'paper-surface bg-[#fff8f1] text-[#4f2d26]',
      )}
    >
      <PictureFrame alt={card.title} frameTone={isWine ? 'wine' : 'paper'} src={card.image} />
      <div className='mt-4'>
        <p className={cn('text-[0.68rem] font-semibold uppercase tracking-[0.32em]', isWine ? 'text-[#e5c7b3]' : 'text-[#aa8262]')}>
          {card.eyebrow}
        </p>
        <h3 className={cn('font-display mt-3 text-[1.85rem] leading-none', isWine ? 'text-[#fbefe7]' : 'text-[#4f2d26]')}>
          {card.title}
        </h3>
        <p className={cn('mt-4 text-sm leading-6', isWine ? 'text-[#f3ddd2]' : 'text-[#765c53]')}>{card.description}</p>
      </div>
    </article>
  );
}

interface InvitationStorySectionProps {
  content: InvitationContent;
}

export function InvitationStorySection({ content }: InvitationStorySectionProps) {
  const [firstStory, secondStory, thirdStory, fourthStory] = content.stories;

  return (
    <section className='bg-[#fff8f1] px-5 py-6'>
      <SectionHeading
        description='Các khối nội dung được tách riêng để tái sử dụng hình, copy và thứ tự hiển thị trong những phiên bản thiệp tiếp theo.'
        eyebrow='Love Notes'
        title='Những ký ức nhỏ được giữ lại bằng ảnh và vài dòng chữ'
      />

      <div className='mt-6 grid gap-4'>
        <InvitationStoryCardView card={firstStory} />
        <InvitationStoryCardView card={secondStory} />
        <InvitationStoryCardView card={thirdStory} />
        <InvitationStoryCardView card={fourthStory} />
      </div>
    </section>
  );
}
