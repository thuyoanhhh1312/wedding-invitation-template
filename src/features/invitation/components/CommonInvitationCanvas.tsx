import bottomRoseIcon from '../../../assets/invitation/bottom-rose-icon.png';
import chandelierCouple from '../../../assets/invitation/chandelier-couple.png';
import closeupCouple from '../../../assets/invitation/closeup-couple.png';
import commonGiftBoxCard from '../../../assets/invitation/common-gift-box-card.png';
import commonScheduleHappyWordmark from '../../../assets/invitation/common-schedule-happy-wordmark.png';
import commonScheduleBotanical from '../../../assets/invitation/common-schedule-botanical.png';
import commonScheduleTitle from '../../../assets/invitation/common-schedule-title.png';
import coverCouple from '../../../assets/invitation/cover-couple.png';
import doorwayCouple from '../../../assets/invitation/doorway-couple.png';
import gownEditorial from '../../../assets/invitation/gown-editorial.png';
import type { InvitationContent, InvitationVariant } from '../types/invitation.types';

interface CommonInvitationCanvasProps {
  content: InvitationContent;
  variant: InvitationVariant;
}

function FloralStem({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      viewBox='0 0 120 240'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M65 233C60 185 65 142 76 105C86 73 99 45 104 10' stroke='currentColor' strokeWidth='2.2' />
      <path d='M69 126C54 116 43 99 40 78C55 80 69 89 79 103' stroke='currentColor' strokeWidth='2.2' />
      <path d='M72 87C59 80 49 67 45 50C58 51 71 58 81 71' stroke='currentColor' strokeWidth='2.2' />
      <path d='M64 156C50 151 39 141 31 126C45 124 57 128 69 138' stroke='currentColor' strokeWidth='2.2' />
      <path d='M75 38C67 30 63 18 64 6C75 10 82 18 85 30' stroke='currentColor' strokeWidth='2.2' />
      <path d='M90 26C77 32 63 31 50 24C60 13 74 9 89 15' stroke='currentColor' strokeWidth='2.2' />
    </svg>
  );
}

function WelcomeArcWordmark({ className = '', text }: { className?: string; text: string }) {
  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      viewBox='0 0 180 180'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M24 132C41 74 92 38 152 46' id='welcome-arc-curve' />
      <text fill='currentColor' fontFamily='"Manrope", sans-serif' fontSize='17' fontWeight='500' letterSpacing='8'>
        <textPath href='#welcome-arc-curve' startOffset='7%'>
          {text}
        </textPath>
      </text>
    </svg>
  );
}

function WelcomeBotanical({ className = '' }: { className?: string }) {
  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      viewBox='0 0 140 340'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M77 331C71 284 72 237 76 194C80 154 87 111 93 73C97 47 101 25 102 7'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.8'
      />
      <path
        d='M69 68C59 56 55 42 57 28C70 28 82 34 90 45C90 35 97 28 109 27C113 39 110 53 102 63C110 61 118 63 124 71C118 81 108 86 95 86C88 94 76 95 64 90C60 80 61 72 69 68Z'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.8'
      />
      <path
        d='M84 166C92 155 101 147 111 142C118 150 120 160 116 171C109 174 101 171 91 165'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.6'
      />
      <path
        d='M77 222C62 212 51 198 46 181C60 182 72 191 82 206'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.6'
      />
      <path
        d='M81 205C66 196 55 182 51 164C66 165 79 173 89 188'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.6'
      />
      <path
        d='M85 289C97 274 111 265 129 262C125 280 113 292 92 297'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.7'
      />
      <path
        d='M84 307C71 298 61 286 55 271C70 270 81 277 90 289'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.7'
      />
      <path
        d='M81 131C89 118 98 109 108 103'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.4'
      />
      <path
        d='M112 100C106 97 101 97 96 100C99 105 103 107 109 107'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.3'
      />
      <path
        d='M117 122C112 117 107 116 101 118C104 123 108 125 114 125'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.3'
      />
      <path
        d='M107 138C102 133 96 131 90 132C93 138 98 141 104 142'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.3'
      />
      <path
        d='M96 148C91 144 86 143 81 145C83 149 87 152 92 153'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.3'
      />
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg
      aria-hidden='true'
      className='h-16 w-16 text-[#d6c5a0]'
      fill='none'
      viewBox='0 0 64 64'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect height='34' rx='4' stroke='currentColor' strokeWidth='3' width='40' x='12' y='22' />
      <path d='M32 22V56' stroke='currentColor' strokeWidth='3' />
      <path d='M12 33H52' stroke='currentColor' strokeWidth='3' />
      <path d='M32 22C32 15 27.5 10 21 10C18 10 15 12 14 15C13 18 14 22 18 24H32V22Z' stroke='currentColor' strokeWidth='3' />
      <path d='M32 22C32 15 36.5 10 43 10C46 10 49 12 50 15C51 18 50 22 46 24H32V22Z' stroke='currentColor' strokeWidth='3' />
    </svg>
  );
}

function CurvedGiftHeading({ className = '', text }: { className?: string; text: string }) {
  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      viewBox='0 0 180 170'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M42 160C19 131 14 94 22 57C30 27 56 11 136 16' id='gift-heading-curve' />
      <text
        fill='currentColor'
        fontFamily='var(--font-display)'
        fontSize='16'
        letterSpacing='2.8'
        style={{ textTransform: 'uppercase' }}
      >
        <textPath href='#gift-heading-curve' startOffset='0%'>
          {text}
        </textPath>
      </text>
    </svg>
  );
}

function PreviewButton({ label, hint }: { label: string; hint: string }) {
  return (
    <div className='flex flex-col items-center'>
      <button
        aria-describedby='rsvp-preview-hint'
        className='min-w-[7.75rem] cursor-not-allowed rounded-sm bg-[#5d1b18] px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-[#f7ede3] opacity-95'
        disabled
        type='button'
      >
        {label}
      </button>
      <p id='rsvp-preview-hint' className='mt-2 max-w-[11rem] text-center text-[0.62rem] leading-5 text-[#9a8574]'>
        {hint}
      </p>
    </div>
  );
}

function RsvpTimeline({ content, variant }: CommonInvitationCanvasProps) {
  const hasThreeOptions = variant.rsvpOptions.length === 3;
  const timelineTextClassName = 'font-display text-[0.98rem] leading-6 text-[#84705f]';

  return (
    <div className='mt-2'>
      <img alt='' aria-hidden='true' className='mx-auto h-11 w-11' loading='lazy' src={bottomRoseIcon} />
      <p className='mt-4 text-center font-display text-[0.82rem] uppercase tracking-[0.34em] text-[#8e7862]'>
        {content.rsvp.title}
      </p>
      <p className='mt-2 text-center font-display text-[0.98rem] text-[#8b7664]'>{content.rsvp.question}</p>

      {hasThreeOptions ? (
        <div className='relative mx-auto mt-8 grid max-w-[16rem] grid-cols-[1fr_1.75rem_1fr] items-center gap-y-6'>
          <div className='absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 bg-[#ceb79f]' />
          <div />
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <p className={`${timelineTextClassName} text-left`}>{variant.rsvpOptions[0]?.title ?? ''}</p>

          <p className={`${timelineTextClassName} text-right`}>{variant.rsvpOptions[1]?.title ?? ''}</p>
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <div />

          <div />
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <p className={`${timelineTextClassName} text-left`}>{variant.rsvpOptions[2]?.title ?? ''}</p>
        </div>
      ) : (
        <div className='relative mx-auto mt-8 grid max-w-[15rem] grid-cols-[1fr_1.75rem_1fr] items-center gap-y-8'>
          <div className='absolute bottom-2 left-1/2 top-2 w-px -translate-x-1/2 bg-[#ceb79f]' />
          <div />
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <p className={`${timelineTextClassName} text-left`}>{variant.rsvpOptions[0]?.title ?? ''}</p>

          <p className={`${timelineTextClassName} text-right`}>{variant.rsvpOptions[1]?.title ?? ''}</p>
          <span className='relative z-10 mx-auto h-4 w-4 rounded-full border border-[#b8a18d] bg-[#fffdfa]' />
          <div />
        </div>
      )}

      <div className='mt-10'>
        <p className='text-center font-display text-[0.78rem] uppercase tracking-[0.36em] text-[#9d846c]'>
          {content.rsvp.attendeeLabel}
        </p>
        <div className='mt-3 flex items-start justify-center gap-6'>
          <p className='font-display text-[2.6rem] leading-none tracking-[0.12em] text-[#7f6957]'>
            {content.rsvp.attendeeCount}
          </p>
          <PreviewButton label={content.rsvp.confirmButtonLabel} hint={content.rsvp.previewHint} />
        </div>
      </div>
    </div>
  );
}

export function CommonInvitationCanvas({ content, variant }: CommonInvitationCanvasProps) {
  const [leadKey, supportKey] = variant.heroPairOrder;
  const lead = content.couple[leadKey];
  const support = content.couple[supportKey];

  const [familyLeadKey, familySupportKey] = variant.familyOrder;
  const familyLead = content.couple[familyLeadKey];
  const familySupport = content.couple[familySupportKey];

  const primaryVenue = variant.id === 'common' ? content.party.venue : variant.ceremonyVenue;
  const isCommonGiftLayout = variant.id === 'common';
  const scheduleSummaryText = content.schedule.summary.join(' ');
  const welcomeTitleWords = content.welcome.title.split(' ');

  return (
    <article className='w-full overflow-hidden bg-[#fffdfa] shadow-[0_30px_90px_rgba(74,36,32,0.18)]'>
      <section className='bg-[#5d1b18] px-8 pb-10 pt-8 text-[#efe2d1]'>
        <p className='text-center text-[0.63rem] uppercase tracking-[0.55em]'>{content.labels.coverEyebrow}</p>

        <div className='mt-12 text-center'>
          <p className='font-script text-[3.5rem] leading-none text-[#f2e4d7]'>{content.hero.statusLabel}</p>
          <p className='mt-2 text-[0.7rem] italic text-[#e4cdb8]'>{content.hero.subquote}</p>
          <p className='mt-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#dcbfa6]'>
            {content.hero.date}
          </p>
        </div>

        <img
          alt='Wedding hero'
          className='mt-10 w-full border-[10px] border-[#b48a6d]/45 object-cover'
          loading='lazy'
          src={coverCouple}
        />
      </section>

      <section className='bg-[#fffdfa] px-10 pb-0 pt-10 text-[#9f8a6a]'>
        <p className='text-center text-[0.6rem] uppercase tracking-[0.52em]'>{content.labels.coverLine}</p>

        <div className='mt-4 grid grid-cols-[1fr_auto_1fr] items-center gap-2 text-center'>
          <div className='translate-y-2'>
            <p className='font-display text-[4.8rem] leading-none'>{lead.mark}</p>
            <p className='mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em]'>{lead.name}</p>
            <p className='mt-1 text-[0.56rem] uppercase tracking-[0.24em]'>{lead.romanLabel}</p>
          </div>

          <div className='flex flex-col items-center'>
            <FloralStem className='h-32 w-12 text-[#d1ba96]' />
          </div>

          <div className='translate-y-2'>
            <p className='font-display text-[4.8rem] leading-none'>{support.mark}</p>
            <p className='mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.34em]'>{support.name}</p>
            <p className='mt-1 text-[0.56rem] uppercase tracking-[0.24em]'>{support.romanLabel}</p>
          </div>
        </div>

        <p className='font-script mt-7 text-center text-[3.45rem] leading-none text-[#a18a69]'>
          {content.labels.eventWordmark}
        </p>

        <div className='mt-8 flex justify-center'>
          <img alt='Wedding couple portrait' className='w-[76%] object-cover' loading='lazy' src={doorwayCouple} />
        </div>
      </section>

      <section className='bg-[#5d1b18] px-8 pb-12 pt-9 text-center text-[#efe2d1]'>
        <p className='text-[0.66rem] font-semibold uppercase tracking-[0.52em]'>{content.labels.ceremonyOfUs[0]}</p>
        <p className='mt-1 text-[0.66rem] font-semibold uppercase tracking-[0.52em]'>{content.labels.ceremonyOfUs[1]}</p>

        <div className='mx-auto mt-6 h-11 w-px bg-[#b3876f]' />

        <p className='mt-6 text-[0.68rem] uppercase tracking-[0.34em] text-[#dfc1aa]'>Trân trọng kính mời</p>
        <p className='font-script mt-3 text-[2.45rem] leading-none text-[#f7eadf]'>{content.hero.invitees}</p>

        <div className='mx-auto mt-7 h-11 w-px bg-[#b3876f]' />

        <p className='mt-6 text-[0.7rem] font-semibold uppercase leading-6 tracking-[0.34em]'>
          {content.party.title}
          <br />
          {content.party.subtitle}
        </p>

        <div className='mt-7 inline-flex rounded-sm bg-[#d6c29f] px-5 py-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.36em] text-[#5d1b18]'>
          {content.party.dayLabel}
        </div>

        <p className='mt-3 font-display text-[2.95rem] leading-none tracking-[0.26em]'>{content.party.time}</p>

        <div className='mt-6 grid grid-cols-3 gap-3 text-[#e6d0bb]'>
          {[content.eventDate.digits.day, content.eventDate.digits.month, content.eventDate.digits.year].map(
            (part, index) => {
              const labels = ['Ngày', 'Tháng', 'Năm'];

              return (
                <div key={`${part}-${index}`} className='space-y-1'>
                  <p className='font-display text-[3.25rem] leading-none'>{part}</p>
                  <p className='font-script text-[1.2rem] leading-none text-[#f0decf]'>{labels[index]}</p>
                </div>
              );
            },
          )}
        </div>

        <p className='mt-5 text-[0.9rem] text-[#f0dfcf]'>{content.party.note}</p>

        <div className='mx-auto mt-7 h-11 w-px bg-[#b3876f]' />

        <p className='font-display mt-7 text-[1.85rem] leading-none tracking-[0.08em]'>{primaryVenue}</p>
        <div className='mt-7 space-y-2 text-[0.76rem] font-semibold uppercase leading-6 tracking-[0.28em] text-[#d6c0ab]'>
          {content.party.address.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </section>

      <section className='bg-[#fffdfa] px-8 pb-9 pt-8 text-[#b19879]'>
        <div className='grid grid-cols-[1.05fr_0.95fr] items-start gap-5'>
          <div>
            <p className='text-right text-[0.62rem] uppercase tracking-[0.48em]'>{content.labels.scheduleWordmark}</p>
            <p className='font-script mt-3 text-[3rem] leading-none'>Fall in Love Wedding</p>
          </div>

          <div className='space-y-2 pt-4 text-center text-[#8f775f]'>
            <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em]'>{variant.ceremonyTitle}</p>
            <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em]'>ĐƯỢC TỔ CHỨC VÀO</p>
            <p className='font-display text-[2.5rem] leading-none text-[#5d1b18]'>{variant.ceremonyTime}</p>
            <p className='text-[0.68rem] font-semibold uppercase tracking-[0.34em]'>{content.eventDate.displayLong}</p>
            <p className='text-xs italic'>{`(${variant.ceremonyHost})`}</p>
          </div>
        </div>

        <div className='mt-3 flex items-start gap-4'>
          <FloralStem className='h-28 w-12 shrink-0 text-[#d2b990]' />
          <img alt='Close-up couple portrait' className='w-full object-cover' loading='lazy' src={closeupCouple} />
        </div>
      </section>

      <section className='bg-[#5d1b18] px-8 pb-10 pt-8 text-[#efe2d1]'>
        <p className='font-script text-center text-[3rem] leading-none text-[#eddcc8]'>{content.labels.letterTitle}</p>

        <div className='mt-6 space-y-3 text-[0.88rem] leading-6 text-[#f0e1d2]'>
          {content.letter.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className='mt-7 grid grid-cols-[0.82fr_0.18fr] items-end gap-5'>
          <img alt='Letter portrait' className='w-full object-cover' loading='lazy' src={closeupCouple} />
          <FloralStem className='h-32 w-10 text-[#b98d74]' />
        </div>
      </section>

      <section className='bg-[#fffdfa] px-8 pb-8 pt-8 text-[#aa9274]'>
        <p className='font-script text-center text-[2.8rem] leading-none'>{familyLead.name}</p>

        <div className='mt-5 grid grid-cols-2 gap-3'>
          <img
            alt={familyLead.name}
            className='aspect-[3/4] h-full w-full object-cover'
            loading='lazy'
            src={familyLead.portrait}
          />
          <img
            alt={familySupport.name}
            className='aspect-[3/4] h-full w-full object-cover'
            loading='lazy'
            src={familySupport.portrait}
          />
        </div>

        <p className='font-script mt-4 text-center text-[2.8rem] leading-none'>{familySupport.name}</p>

        <div className='mt-6 grid grid-cols-2 gap-4 text-center text-[#7d6655]'>
          <div>
            <div className='mx-auto inline-flex bg-[#8d1f1d] px-5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#f8eee4]'>
              {familyLead.houseLabel}
            </div>
            <div className='mt-3 space-y-1 text-[0.74rem] font-semibold uppercase tracking-[0.24em]'>
              {familyLead.parents.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className='mt-2 text-sm'>{`(${familyLead.location})`}</p>
          </div>

          <div>
            <div className='mx-auto inline-flex bg-[#8d1f1d] px-5 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.34em] text-[#f8eee4]'>
              {familySupport.houseLabel}
            </div>
            <div className='mt-3 space-y-1 text-[0.74rem] font-semibold uppercase tracking-[0.24em]'>
              {familySupport.parents.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className='mt-2 text-sm'>{`(${familySupport.location})`}</p>
          </div>
        </div>

        <div className='mt-8 space-y-2 text-center text-[0.95rem] leading-7 text-[#7d6655]'>
          {content.stories[0].description.split('. ').slice(0, 4).map((line) => (
            <p key={line}>{line.endsWith('.') ? line : `${line}.`}</p>
          ))}
        </div>
      </section>

      <section className='bg-[#5d1b18] px-8 pb-10 pt-0 text-[#efe2d1]'>
        <img alt='Story couple portrait' className='w-full object-cover' loading='lazy' src={doorwayCouple} />

        <p className='mx-auto mt-10 max-w-[28rem] text-center font-formal text-[0.96rem] leading-[1.55rem] tracking-[0.055em] text-[#d9bb9f]'>
          {content.welcome.intro}
        </p>

        <div className='relative mt-[4.8rem] min-h-[35rem]'>
          <WelcomeArcWordmark
            className='absolute right-[2.15rem] top-[2.7rem] h-[9.25rem] w-[9.25rem] text-[#b79a79]'
            text={content.labels.welcomeWordmark}
          />

          <div className='relative z-10 max-w-[21rem] pl-3 text-[#dfc39d]'>
            <p className='font-formal text-[4.5rem] font-medium leading-[0.86] italic tracking-[-0.06em]'>
              {welcomeTitleWords[0] ?? ''}
            </p>
            <p className='ml-[5.9rem] font-formal text-[3.55rem] font-medium leading-[0.76] italic tracking-[-0.06em]'>
              {welcomeTitleWords[1] ?? ''}
            </p>
            <p className='mt-1 font-formal text-[4.7rem] font-medium leading-[0.84] italic tracking-[-0.06em]'>
              {welcomeTitleWords[2] ?? ''}
            </p>
          </div>

          <div className='mt-10 grid grid-cols-[minmax(0,15.5rem)_1fr] items-end gap-2'>
            <div className='pl-1 text-center font-formal text-[0.98rem] font-medium leading-[1.72rem] tracking-[0.048em] text-[#e6ceb3]'>
              <p>{content.welcome.body}</p>
            </div>

            <WelcomeBotanical className='ml-auto h-[21rem] w-[10.5rem] text-[#b79a79]' />
          </div>
        </div>
      </section>

      <section className='bg-[#fffdfa] px-8 pb-0 pt-8 text-[#b19879]'>
        <div className='grid grid-cols-3 gap-2'>
          {[0, 1, 2].map((item) => (
            <img
              key={item}
              alt={`Editorial bridal frame ${item + 1}`}
              className='aspect-[1.25/1] h-full w-full object-cover'
              loading='lazy'
              src={gownEditorial}
            />
          ))}
        </div>

        <div className='mt-6 grid grid-cols-[1fr_0.92fr] gap-5'>
          <div className='flex items-start gap-3'>
            <FloralStem className='h-24 w-10 shrink-0 text-[#d2b990]' />
            <p className='font-script text-[2.9rem] leading-none'>Fall in Love Wedding</p>
          </div>

          <div className='space-y-4 text-[0.95rem] leading-7 text-[#7e6656]'>
            <p>{content.stories[3].description}</p>
            <div className='h-12 w-px bg-[#d3b99c]' />
            <p>{content.stories[2].description}</p>
          </div>
        </div>

        <img alt='Editorial bridal portrait' className='mt-8 w-full object-cover' loading='lazy' src={gownEditorial} />
      </section>

      <section className='overflow-hidden bg-[#5d1b18] px-8 pb-10 pt-8 text-[#e7d7c5]'>
        <div className='relative min-h-[45rem]'>
          <div className='absolute left-[70%] top-5 -translate-x-1/2 text-center text-[#dfc09f]'>
            <img
              alt=''
              aria-hidden='true'
              className='absolute -left-[4.95rem] -top-[0.9rem] h-[4.35rem] w-auto'
              loading='lazy'
              src={commonScheduleHappyWordmark}
            />
            <div className='space-y-0.5'>
              {[content.eventDate.digits.day, content.eventDate.digits.month, content.eventDate.digits.year].map(
                (digit) => (
                  <p key={digit} className='font-display text-[4.75rem] leading-[0.82]'>
                    {digit}
                  </p>
                ),
              )}
            </div>
          </div>

          <div className='absolute left-[67%] top-[13.6rem] -translate-x-1/2 space-y-1.5 text-center font-formal text-[0.96rem] leading-[1.15rem] tracking-[0.015em] text-[#ead8c4]'>
            <p className='whitespace-nowrap'>{content.eventDate.displayLong}</p>
            <p className='whitespace-nowrap'>{content.schedule.subline}</p>
          </div>

          <div className='absolute left-[84%] top-[16.2rem] h-[8.6rem] w-px bg-[#b99072]' />

          <div className='pt-[23.5rem]'>
            <img
              alt=''
              aria-hidden='true'
              className='mx-auto w-[88%] max-w-[20rem]'
              loading='lazy'
              src={commonScheduleTitle}
            />
          </div>

          <div className='relative mt-8 min-h-[14rem]'>
            <div className='ml-7 max-w-[11.25rem] text-left font-display text-[1rem] leading-[1.5rem] tracking-[0.03em] text-[#f0e2d4]'>
              <p>{scheduleSummaryText}</p>
            </div>
            <img
              alt=''
              aria-hidden='true'
              className='absolute bottom-0 right-5 h-[17rem] w-auto opacity-95'
              loading='lazy'
              src={commonScheduleBotanical}
            />
          </div>
        </div>

        <img
          alt='Wedding chandelier portrait'
          className='mt-10 w-full object-cover'
          loading='lazy'
          src={chandelierCouple}
        />
      </section>

      <section className='bg-[#fffdfa] px-8 pb-12 pt-8 text-[#7f6957]'>
        <RsvpTimeline content={content} variant={variant} />

        <div className='mt-14 flex justify-center'>
          <div className={`relative ${isCommonGiftLayout ? 'w-[16rem]' : 'w-[11rem]'}`}>
            <CurvedGiftHeading
              className='absolute -left-[4.8rem] -top-[1.8rem] h-[10rem] w-[10rem] text-[#8f7862]'
              text={content.labels.giftHeading}
            />
            <div className={isCommonGiftLayout ? 'grid grid-cols-2 gap-3 pl-4' : 'grid place-items-center pl-5'}>
              {variant.giftTags.map((tag) => (
                <div key={tag} className='text-center'>
                  {isCommonGiftLayout ? (
                    <img
                      alt={tag}
                      className='h-[7.4rem] w-[7.4rem] rounded-[0.95rem] object-cover'
                      loading='lazy'
                      src={commonGiftBoxCard}
                    />
                  ) : (
                    <div className='grid h-[7.25rem] w-[7.25rem] place-items-center rounded-[0.85rem] bg-[#5d1b18]'>
                      <GiftIcon />
                    </div>
                  )}

                  <p className='mt-2 font-display text-[1.02rem] uppercase tracking-[0.22em] text-[#8b735f]'>
                    {tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className='mt-12 text-center font-display text-[1rem] leading-8 text-[#7b675a]'>
          {content.rsvp.giftNote}
        </p>
      </section>
    </article>
  );
}