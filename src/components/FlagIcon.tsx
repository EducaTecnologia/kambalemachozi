import React from 'react';
import { Language } from '../types';

interface FlagIconProps {
  code: Language | string;
  className?: string;
}

export const FlagIcon: React.FC<FlagIconProps> = ({ code, className = 'w-5 h-3.5' }) => {
  switch (code) {
    case 'fr':
      // France: Blue, White, Red vertical tricolor
      return (
        <svg
          viewBox="0 0 900 600"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
          aria-label="Drapeau Français"
        >
          <rect width="300" height="600" fill="#002654" />
          <rect x="300" width="300" height="600" fill="#FFFFFF" />
          <rect x="600" width="300" height="600" fill="#ED2939" />
        </svg>
      );

    case 'en':
      // UK / English: authentic Union Jack / Stars & Stripes hybrid representation
      return (
        <svg
          viewBox="0 0 60 30"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
          aria-label="English / USA flag"
        >
          <clipPath id="uk-clip">
            <rect width="60" height="30" />
          </clipPath>
          <g clipPath="url(#uk-clip)">
            <rect width="60" height="30" fill="#012169" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
            <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
            <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
            <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
          </g>
        </svg>
      );

    case 'es':
      // Spain: Red, Yellow, Red horizontal with crest
      return (
        <svg
          viewBox="0 0 750 500"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
          aria-label="Drapeau Espagnol"
        >
          <rect width="750" height="125" fill="#AA151B" />
          <rect y="125" width="750" height="250" fill="#F1BF00" />
          <rect y="375" width="750" height="125" fill="#AA151B" />
          {/* Subtle shield mark */}
          <circle cx="200" cy="250" r="45" fill="#AA151B" opacity="0.85" />
        </svg>
      );

    case 'pt':
      // Portugal / Brazil: Green & Red with golden emblem
      return (
        <svg
          viewBox="0 0 600 400"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
          aria-label="Bandeira Português / Brasil"
        >
          <rect width="240" height="400" fill="#046A38" />
          <rect x="240" width="360" height="400" fill="#DA291C" />
          <circle cx="240" cy="200" r="60" fill="#FFC72C" />
          <circle cx="240" cy="200" r="45" fill="#DA291C" />
        </svg>
      );

    case 'ar':
      // Arabic / Pan-Arab: Black, White, Green with Red triangle
      return (
        <svg
          viewBox="0 0 600 300"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
          aria-label="العلم العربي"
        >
          <rect width="600" height="100" fill="#000000" />
          <rect y="100" width="600" height="100" fill="#FFFFFF" />
          <rect y="200" width="600" height="100" fill="#007A3D" />
          <polygon points="0,0 200,150 0,300" fill="#CE1126" />
        </svg>
      );

    case 'zh':
      // China: Red with Yellow stars
      return (
        <svg
          viewBox="0 0 900 600"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
          aria-label="中国国旗"
        >
          <rect width="900" height="600" fill="#DE2910" />
          {/* Large star */}
          <polygon
            points="150,55 170,115 235,115 182,152 202,212 150,175 98,212 118,152 65,115 130,115"
            fill="#FFDE00"
          />
          {/* 4 small stars */}
          <circle cx="290" cy="65" r="14" fill="#FFDE00" />
          <circle cx="340" cy="115" r="14" fill="#FFDE00" />
          <circle cx="340" cy="185" r="14" fill="#FFDE00" />
          <circle cx="290" cy="235" r="14" fill="#FFDE00" />
        </svg>
      );

    case 'cd':
    case 'ln':
    case 'sw':
      // Democratic Republic of the Congo: Sky blue, red diagonal edged with yellow, yellow star in canton
      return (
        <svg
          viewBox="0 0 800 600"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
          aria-label="Drapeau RDC"
        >
          <rect width="800" height="600" fill="#007FFF" />
          {/* Diagonal Red stripe with Yellow border */}
          <polygon points="0,520 0,600 120,600 800,80 800,0 680,0" fill="#F7C600" />
          <polygon points="0,550 0,600 70,600 800,50 800,0 730,0" fill="#CE1126" />
          {/* Yellow star in top-left */}
          <polygon
            points="120,60 135,105 180,105 145,132 158,175 120,150 82,175 95,132 60,105 105,105"
            fill="#F7C600"
          />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 900 600"
          className={`${className} rounded-[2px] shadow-xs inline-block align-middle shrink-0 overflow-hidden`}
        >
          <rect width="300" height="600" fill="#002654" />
          <rect x="300" width="300" height="600" fill="#FFFFFF" />
          <rect x="600" width="300" height="600" fill="#ED2939" />
        </svg>
      );
  }
};
