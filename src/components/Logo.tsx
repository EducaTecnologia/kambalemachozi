import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showContainer?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  layout?: 'horizontal' | 'stacked';
}

/**
 * Official Logo of ETS KAMBALE MACHOZI (KM)
 * Recreated faithfully from PROFIL KAMBALE MACHOSI WHITE.png & PROFIL KAMBALE MACHOSI.png
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'auto',
  showContainer = false,
  size = 'md',
  layout = 'horizontal',
}) => {
  const isDarkBg = variant === 'dark';

  // Colors matching the two uploaded official logos:
  // On dark background -> Pure white version (or white + subtle crimson accent)
  // On light background -> Deep dark teal/charcoal (#041E24) + Crimson red (#9E1810)
  const kColor = isDarkBg ? '#FFFFFF' : '#041E24';
  const mColor = isDarkBg ? '#FFFFFF' : '#9E1810';
  const mainSwooshColor = isDarkBg ? '#FFFFFF' : '#9E1810';
  const innerSwooshColor = isDarkBg ? '#FFFFFF' : '#041E24';
  const kambaleTextColor = isDarkBg ? 'text-white' : 'text-[#041E24]';
  const machoziTextColor = isDarkBg ? 'text-white/95' : 'text-[#9E1810]';
  const lineBgColor = isDarkBg ? 'bg-white/90' : 'bg-[#9E1810]';

  const containerClasses = {
    sm: 'px-3 py-1.5 rounded-xl border',
    md: 'px-4 py-2.5 rounded-2xl border',
    lg: 'px-6 py-4 rounded-3xl border-2',
    xl: 'px-8 py-6 rounded-3xl border-2',
  }[size];

  const borderColor = isDarkBg
    ? 'border-white/20 bg-white/5 backdrop-blur-md'
    : 'border-slate-200 bg-white shadow-sm';

  if (layout === 'stacked') {
    const stackedWidth = {
      sm: 'w-28',
      md: 'w-40',
      lg: 'w-56 sm:w-64',
      xl: 'w-64 sm:w-80',
    }[size];

    return (
      <div
        className={`inline-flex flex-col items-center justify-center select-none transition-transform hover:scale-[1.02] ${
          showContainer ? `${containerClasses} ${borderColor}` : ''
        } ${stackedWidth} ${className}`}
        aria-label="ETS KAMBALE MACHOZI (KM)"
      >
        <svg
          viewBox="0 0 360 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          role="img"
          aria-label="Logo Officiel Kambale Machozi"
        >
          {/* Top-left K upper stem & arm */}
          <path
            d="M 65 8 H 98 V 68 L 160 8 H 204 L 132 76 C 106 88, 82 102, 65 118 Z"
            fill={kColor}
          />
          {/* Bottom-left K stem & lower diagonal leg */}
          <path
            d="M 65 136 C 72 128, 84 118, 98 109 V 152 C 84 148, 72 142, 65 136 Z"
            fill={kColor}
          />
          <path
            d="M 110 102 L 135 88 L 195 154 H 148 Z"
            fill={kColor}
          />

          {/* Main Upper Swoosh (from bottom-left around K up to top-right over M) */}
          <path
            d="M 98 158 C 46 150, 48 108, 114 70 C 174 36, 250 22, 308 29 C 254 29, 186 45, 128 77 C 74 107, 65 140, 98 158 Z"
            fill={mainSwooshColor}
          />

          {/* Inner Lower Swoosh */}
          <path
            d="M 88 128 C 122 92, 204 46, 309 32 C 228 48, 152 86, 108 124 Z"
            fill={innerSwooshColor}
          />

          {/* M Monogram on the right */}
          <path
            d="M 168 78 L 193 66 L 224 96 L 286 38 V 154 H 253 V 98 L 223 128 L 193 98 V 144 L 168 120 Z"
            fill={mColor}
          />

          {/* KAMBALE wordmark */}
          <text
            x="180"
            y="206"
            textAnchor="middle"
            fontFamily="'Sora', 'Plus Jakarta Sans', 'Arial Black', sans-serif"
            fontWeight="900"
            fontSize="48"
            letterSpacing="3"
            fill={kColor}
          >
            KAMBALE
          </text>

          {/* — MACHOZI — */}
          <rect x="4" y="234" width="54" height="4.5" fill={mColor} />
          <text
            x="184"
            y="245"
            textAnchor="middle"
            fontFamily="'Sora', 'Plus Jakarta Sans', sans-serif"
            fontWeight="700"
            fontSize="26"
            letterSpacing="11"
            fill={mColor}
          >
            MACHOZI
          </text>
          <rect x="302" y="234" width="54" height="4.5" fill={mColor} />
        </svg>
      </div>
    );
  }

  // Horizontal layout for Navbar & Compact Headers
  const iconSizes = {
    sm: 'w-11 h-9 sm:w-12 sm:h-10',
    md: 'w-14 h-11 sm:w-16 sm:h-12',
    lg: 'w-20 h-16',
    xl: 'w-24 h-20',
  }[size];

  const titleSizes = {
    sm: 'text-base sm:text-lg font-black tracking-[0.06em]',
    md: 'text-lg sm:text-xl font-black tracking-[0.06em]',
    lg: 'text-2xl sm:text-3xl font-black tracking-[0.06em]',
    xl: 'text-3xl sm:text-4xl font-black tracking-[0.06em]',
  }[size];

  const subSizes = {
    sm: 'text-[9px] sm:text-[10px] tracking-[0.28em] font-bold',
    md: 'text-[10px] sm:text-xs tracking-[0.3em] font-bold',
    lg: 'text-xs sm:text-sm tracking-[0.32em] font-bold',
    xl: 'text-sm sm:text-base tracking-[0.35em] font-bold',
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none transition-transform hover:scale-[1.02] ${
        showContainer ? `${containerClasses} ${borderColor}` : ''
      } ${className}`}
      aria-label="ETS KAMBALE MACHOZI (KM)"
    >
      {/* KM Monogram Icon */}
      <div className={`relative shrink-0 ${iconSizes} flex items-center justify-center`}>
        <svg
          viewBox="0 0 260 165"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-xs"
          role="img"
          aria-label="Monogramme KM"
        >
          {/* K upper stem & arm */}
          <path
            d="M 25 6 H 58 V 66 L 120 6 H 164 L 92 74 C 66 86, 42 100, 25 116 Z"
            fill={kColor}
          />
          {/* K lower stem & leg */}
          <path
            d="M 25 134 C 32 126, 44 116, 58 107 V 150 C 44 146, 32 140, 25 134 Z"
            fill={kColor}
          />
          <path
            d="M 70 100 L 95 86 L 155 152 H 108 Z"
            fill={kColor}
          />

          {/* Main Upper Swoosh */}
          <path
            d="M 58 156 C 6 148, 8 106, 74 68 C 134 34, 200 20, 256 27 C 204 27, 146 43, 88 75 C 34 105, 25 138, 58 156 Z"
            fill={mainSwooshColor}
          />

          {/* Inner Lower Swoosh */}
          <path
            d="M 48 126 C 82 90, 164 44, 257 30 C 188 46, 112 84, 68 122 Z"
            fill={innerSwooshColor}
          />

          {/* M Monogram */}
          <path
            d="M 128 76 L 153 64 L 184 94 L 246 36 V 152 H 213 V 96 L 183 126 L 153 96 V 142 L 128 118 Z"
            fill={mColor}
          />
        </svg>
      </div>

      {/* Text Wordmark Lockup: KAMBALE / — MACHOZI — */}
      <div className="flex flex-col justify-center leading-none">
        <span className={`font-display uppercase ${titleSizes} ${kambaleTextColor}`}>
          KAMBALE
        </span>
        <div className="flex items-center justify-between gap-1.5 mt-1">
          <span className={`h-[2px] w-3.5 sm:w-4 rounded-full ${lineBgColor}`} aria-hidden="true" />
          <span className={`font-display uppercase ${subSizes} ${machoziTextColor} pl-[0.25em]`}>
            MACHOZI
          </span>
          <span className={`h-[2px] w-3.5 sm:w-4 rounded-full ${lineBgColor}`} aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};
