import { useMemo, useState } from 'react';

import { SectionBadge, SectionHeading } from '../../components/shared';
import { InvitationCanvas, VariantSelector } from './components';
import { invitationContent, invitationVariants } from './data/invitation-variants';
import type { InvitationVariantKey } from './types/invitation.types';

export function InvitationPage() {
  const [activeVariant, setActiveVariant] = useState<InvitationVariantKey>('common');

  const selectedVariant = useMemo(
    () => invitationVariants.find((variant) => variant.id === activeVariant) ?? invitationVariants[0],
    [activeVariant],
  );

  const panelId = 'invitation-preview-panel';

  return (
    <main className='px-4 py-8 md:px-6 lg:px-8'>
      <div className='mx-auto grid w-full gap-8'>
        <section className='paper-surface rounded-[2.25rem] px-6 py-6'>
          <SectionBadge>Wedding Template</SectionBadge>

          <SectionHeading
            className='mt-5'
            description='Chọn đúng loại thiệp bằng tab bên dưới. Mỗi lần bấm chỉ render và hiển thị một biến thể đang chọn: thiệp chung, thiệp nhà trai hoặc thiệp nhà gái.'
            eyebrow='macallan-0012-fe-back-office inspired'
            title='Wedding Invitation UI'
          />

          <div className='mt-6'>
            <VariantSelector
              activeVariant={activeVariant}
              onChange={setActiveVariant}
              panelId={panelId}
              variants={invitationVariants}
            />
          </div>
        </section>

        <section className='flex min-w-0 w-full px-2 sm:px-4 md:px-6 lg:px-10'>
          <div className='mx-auto w-full max-w-136 rounded-[2.5rem] border border-[#e5d3c1] bg-[linear-gradient(180deg,#fbf5ee_0%,#f3e8db_100%)] p-3 shadow-[0_28px_80px_rgba(74,36,32,0.12)] sm:p-4 md:p-5'>
            <div
              id={panelId}
              aria-labelledby={`invitation-tab-${selectedVariant.id}`}
              className='overflow-hidden rounded-4xl bg-[#f7eee5] ring-1 ring-[#ecdccc]'
              role='tabpanel'
            >
              <InvitationCanvas content={invitationContent} variant={selectedVariant} />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}