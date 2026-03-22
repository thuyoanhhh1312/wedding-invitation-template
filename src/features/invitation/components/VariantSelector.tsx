import { cn } from '../../../lib/cn';
import type { InvitationVariant, InvitationVariantKey } from '../types/invitation.types';

interface VariantSelectorProps {
  activeVariant: InvitationVariantKey;
  onChange: (variantId: InvitationVariantKey) => void;
  variants: InvitationVariant[];
  panelId: string;
}

export function VariantSelector({ activeVariant, onChange, variants, panelId }: VariantSelectorProps) {
  return (
    <div aria-label='Chọn loại thiệp' className='grid gap-3 md:grid-cols-3' role='tablist'>
      {variants.map((variant) => {
        const isActive = variant.id === activeVariant;
        const tabId = `invitation-tab-${variant.id}`;

        return (
          <button
            id={tabId}
            aria-controls={panelId}
            aria-selected={isActive}
            key={variant.id}
            className={cn(
              'rounded-[1.6rem] border px-4 py-4 text-left transition-colors',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6a2624] focus-visible:ring-offset-2',
              isActive
                ? 'border-[#6a2624] bg-[#6a2624] text-[#fff7f0] shadow-[0_18px_40px_rgba(74,36,32,0.18)]'
                : 'border-[#eadbca] bg-[#fff8f1] text-[#5f4038]',
            )}
            onClick={() => onChange(variant.id)}
            role='tab'
            tabIndex={isActive ? 0 : -1}
            type='button'
          >
            <p
              className={cn(
                'text-[0.68rem] font-semibold uppercase tracking-[0.3em]',
                isActive ? 'text-[#f3dbcd]' : 'text-[#aa8262]',
              )}
            >
              {isActive ? 'Đang hiển thị' : 'Nhấn để xem'}
            </p>

            <h2
              className={cn(
                'font-display mt-3 text-[1.8rem] leading-none',
                isActive ? 'text-[#fff7f0]' : 'text-[#4f2d26]',
              )}
            >
              {variant.label}
            </h2>

            <p className={cn('mt-3 text-sm leading-6', isActive ? 'text-[#f4e1d5]' : 'text-[#7b6056]')}>
              {variant.ceremonyTitle}
            </p>
          </button>
        );
      })}
    </div>
  );
}