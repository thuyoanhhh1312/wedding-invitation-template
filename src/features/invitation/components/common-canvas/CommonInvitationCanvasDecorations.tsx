export function FloralStem({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden='true' className={className} fill='none' viewBox='0 0 120 240' xmlns='http://www.w3.org/2000/svg'>
      <path d='M65 233C60 185 65 142 76 105C86 73 99 45 104 10' stroke='currentColor' strokeWidth='2.2' />
      <path d='M69 126C54 116 43 99 40 78C55 80 69 89 79 103' stroke='currentColor' strokeWidth='2.2' />
      <path d='M72 87C59 80 49 67 45 50C58 51 71 58 81 71' stroke='currentColor' strokeWidth='2.2' />
      <path d='M64 156C50 151 39 141 31 126C45 124 57 128 69 138' stroke='currentColor' strokeWidth='2.2' />
      <path d='M75 38C67 30 63 18 64 6C75 10 82 18 85 30' stroke='currentColor' strokeWidth='2.2' />
      <path d='M90 26C77 32 63 31 50 24C60 13 74 9 89 15' stroke='currentColor' strokeWidth='2.2' />
    </svg>
  );
}

export function WelcomeArcWordmark({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden='true' className={className} fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'>
      <path d='M24 132C41 74 92 38 152 46' id='welcome-arc-curve' />
      <text fill='currentColor' fontFamily='"Manrope", sans-serif' fontSize='17' fontWeight='500' letterSpacing='8'>
        <textPath href='#welcome-arc-curve' startOffset='7%'>
          HAPPY WEDDING
        </textPath>
      </text>
    </svg>
  );
}

export function WelcomeBotanical({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden='true' className={className} fill='none' viewBox='0 0 140 340' xmlns='http://www.w3.org/2000/svg'>
      {/* giữ nguyên các path */}
    </svg>
  );
}

export function GiftIcon() {
  return (
    <svg aria-hidden='true' className='h-16 w-16 text-[#d6c5a0]' fill='none' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'>
      <rect height='34' rx='4' stroke='currentColor' strokeWidth='3' width='40' x='12' y='22' />
      <path d='M32 22V56' stroke='currentColor' strokeWidth='3' />
      <path d='M12 33H52' stroke='currentColor' strokeWidth='3' />
      <path d='M32 22C32 15 27.5 10 21 10C18 10 15 12 14 15C13 18 14 22 18 24H32V22Z' stroke='currentColor' strokeWidth='3' />
      <path d='M32 22C32 15 36.5 10 43 10C46 10 49 12 50 15C51 18 50 22 46 24H32V22Z' stroke='currentColor' strokeWidth='3' />
    </svg>
  );
}

export function CurvedGiftHeading({ className = '' }: { className?: string }) {
  return (
    <svg aria-hidden='true' className={className} fill='none' viewBox='0 0 180 170' xmlns='http://www.w3.org/2000/svg'>
      <path d='M42 160C19 131 14 94 22 57C30 27 56 11 136 16' id='gift-heading-curve' />
      <text fill='currentColor' fontFamily='var(--font-display)' fontSize='16' letterSpacing='2.8' style={{ textTransform: 'uppercase' }}>
        <textPath href='#gift-heading-curve' startOffset='0%'>
          HỘP QUÀ MỪNG CƯỚI
        </textPath>
      </text>
    </svg>
  );
}