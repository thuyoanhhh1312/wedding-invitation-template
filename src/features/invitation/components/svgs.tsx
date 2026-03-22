export function FloralStem({ className = '' }: { className?: string }) {
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

export function WelcomeArcWordmark({ className = '', text }: { className?: string; text: string }) {
  return (
    <svg
      aria-hidden='true'
      className={className}
      fill='none'
      viewBox='0 0 180 180'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M24 132C41 74 92 38 152 46' id='welcome-arc-curve' />
      <text fill='currentColor' fontFamily='"Mulish", sans-serif' fontSize='17' fontWeight='500' letterSpacing='8'>
        <textPath href='#welcome-arc-curve' startOffset='7%'>
          {text}
        </textPath>
      </text>
    </svg>
  );
}

export function WelcomeBotanical({ className = '' }: { className?: string }) {
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

export function GiftIcon() {
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

export function CurvedGiftHeading({ className = '', text }: { className?: string; text: string }) {
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
