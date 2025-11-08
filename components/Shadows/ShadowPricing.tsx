import React from "react";

const ShadowPricing = () => {
  return (
    <svg
      width="1044"
      height="1178"
      viewBox="0 0 1044 1178"
      fill="none"
      className=" absolute bottom-0 left-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_216_915)">
        <circle cx="677" cy="773.5" r="50" fill="#045CFF" fillOpacity="0.35" />
      </g>
      <g filter="url(#filter1_f_216_915)">
        <circle cx="437" cy="742.5" r="50" fill="#045CFF" fillOpacity="0.35" />
      </g>
      <g opacity="0.3">
        <path
          d="M125 125C125 55.9644 180.964 0 250 0H324C393.036 0 449 55.9644 449 125C449 194.036 393.036 250 324 250H250C180.964 250 125 194.036 125 125Z"
          fill="url(#paint0_radial_216_915)"
          fillOpacity="0.8"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_216_915"
          x="433"
          y="529.5"
          width="488"
          height="488"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="97"
            result="effect1_foregroundBlur_216_915"
          />
        </filter>
        <filter
          id="filter1_f_216_915"
          x="193"
          y="498.5"
          width="488"
          height="488"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="97"
            result="effect1_foregroundBlur_216_915"
          />
        </filter>
        <radialGradient
          id="paint0_radial_216_915"
          cx="0"
          cy="0"
          r="1"
          gradientTransform="matrix(77.76 89.75 -116.316 60 622 687.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#045CFF" />
          <stop offset="1" stopColor="#045CFF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default ShadowPricing;
