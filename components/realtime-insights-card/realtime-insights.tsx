"use client";

import svgPaths from "./realtime-insights-svg";
import imgRectangle34624139 from "../../public/assets/insights.png";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function GradientMask() {
  return (
    <div className="absolute left-0 top-0 pointer-events-none" data-name="Mask group">
      <div className="absolute left-[27px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-27px_-53px] mask-size-[307px_307px] rounded-[153.5px] size-[254px] top-[53px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 254 254\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(6.096 9.1186 -9.1186 6.096 127 127)\\\'><stop stop-color=\\\'rgba(4,92,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(4,92,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgRectangle34624139.src}')` }} />
    </div>
  );
}

function Shadow() {
  return (
    <div className="absolute left-[78px] top-[100px] w-[487px] h-[320px] pointer-events-none" data-name="Shadow">
      <svg className="absolute inset-[-50%_-30%]" width="780" height="550" viewBox="0 0 780 550" fill="none">
        <g filter="url(#filter0_f_shadow_realtime)">
          <ellipse cx="390" cy="275" rx="230" ry="115" fill="#045CFF" fillOpacity="0.15" />
        </g>
        <defs>
          <filter id="filter0_f_shadow_realtime" x="0" y="0" width="780" height="550" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="80" result="effect1_foregroundBlur" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function ChartCardBase() {
  return (
    <div className="absolute h-[303px] left-0 top-0 w-[468px]" data-name="Base">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 468 303">
        <g id="Base">
          <rect fill="var(--fill-0, white)" height="303" id="Base_2" rx="15" width="437" />
          <path d="M1 79H468" id="Vector 9245" stroke="url(#paint0_linear_2_193)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_193" x1="1" x2="468" y1="79.5" y2="79.5">
            <stop stopColor="#EDEDED" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ChartCardShine() {
  return (
    <div className="absolute h-[302.601px] left-0 top-0 w-[466.811px]" data-name="Shine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 467 303">
        <g id="Shine">
          <mask height="303" id="mask0_2_181" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="467" x="0" y="0">
            <rect height="301.601" id="Shine_2" rx="14.5" stroke="var(--stroke-0, black)" width="465.811" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_2_181)">
            <g filter="url(#filter0_f_2_181)" id="Ellipse 21916">
              <ellipse cx="44.2031" cy="29.4845" fill="var(--fill-0, #045CFF)" fillOpacity="0.3" rx="65.4167" ry="53.38" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="222.76" id="filter0_f_2_181" width="246.833" x="-79.2135" y="-81.8955">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_2_181" stdDeviation="29" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function PhoneCallsLabel() {
  return (
    <div className="content-stretch flex gap-[3.028px] items-center relative shrink-0 w-full">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f767e] text-[10.597px] text-nowrap whitespace-pre">Phone Calls Made</p>
    </div>
  );
}

function PhoneCallsValue() {
  return (
    <div className="content-stretch flex gap-[4.542px] items-end relative shrink-0">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21.194px] text-black text-nowrap whitespace-pre">342</p>
    </div>
  );
}

function GreenArrowUp() {
  return (
    <div className="mr-[-1.514px] relative shrink-0 size-[13.625px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up">
          <path d={svgPaths.p31174d00} id="Vector" stroke="var(--stroke-0, #37C36E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13542" />
        </g>
      </svg>
    </div>
  );
}

function PositiveChangeBadge() {
  return (
    <div className="bg-[rgba(55,195,110,0.1)] box-border content-stretch flex h-[16.653px] items-center justify-center pl-[4.542px] pr-[9.083px] py-[7.569px] relative rounded-[3.785px] shrink-0 w-[33.306px]">
      <GreenArrowUp />
      <p className="font-['Product_Sans:Regular',sans-serif] leading-[normal] mr-[-1.514px] not-italic relative shrink-0 text-[#37c36e] text-[9.84px] text-nowrap whitespace-pre">16%</p>
    </div>
  );
}

function PositiveChangeBadgeContainer() {
  return (
    <div className="content-stretch flex gap-[7.569px] items-center justify-center relative shrink-0">
      <PositiveChangeBadge />
    </div>
  );
}

function PhoneCallsValueWithChange() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0">
      <PhoneCallsValue />
      <PositiveChangeBadgeContainer />
    </div>
  );
}

function PhoneCallsStat() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <PhoneCallsLabel />
      <PhoneCallsValueWithChange />
    </div>
  );
}

function ConversationsLabel() {
  return (
    <div className="content-stretch flex gap-[3.028px] items-center relative shrink-0 w-full">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f767e] text-[10.597px] text-nowrap whitespace-pre">Total Converstaions</p>
    </div>
  );
}

function RedArrowDown() {
  return (
    <div className="relative size-[13.625px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up">
          <path d={svgPaths.p31174d00} id="Vector" stroke="var(--stroke-0, #FF2323)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13542" />
        </g>
      </svg>
    </div>
  );
}

function NegativeChangeBadge() {
  return (
    <div className="bg-[rgba(255,35,35,0.1)] box-border content-stretch flex h-[16.653px] items-center justify-center pl-[4.542px] pr-[9.083px] py-[7.569px] relative rounded-[3.785px] shrink-0 w-[33.306px]">
      <div className="flex items-center justify-center mr-[-1.514px] relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <RedArrowDown />
        </div>
      </div>
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] mr-[-1.514px] not-italic relative shrink-0 text-[#ff2323] text-[9.84px] text-nowrap whitespace-pre">6%</p>
    </div>
  );
}

function NegativeChangeBadgeContainer() {
  return (
    <div className="content-stretch flex gap-[7.569px] items-center justify-center relative shrink-0">
      <NegativeChangeBadge />
    </div>
  );
}

function ConversationsValueWithChange() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21.194px] text-black text-nowrap whitespace-pre">1,248</p>
      <NegativeChangeBadgeContainer />
    </div>
  );
}

function ConversationsStat() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0 w-[90px]">
      <ConversationsLabel />
      <ConversationsValueWithChange />
    </div>
  );
}

function ActiveModelsLabel() {
  return (
    <div className="content-stretch flex gap-[3.028px] items-center relative shrink-0 w-full">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6f767e] text-[10.597px] text-nowrap whitespace-pre">Active AI Models</p>
    </div>
  );
}

function GreenArrowUp2() {
  return (
    <div className="mr-[-1.514px] relative shrink-0 size-[13.625px]" data-name="arrow-up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="arrow-up">
          <path d={svgPaths.p31174d00} id="Vector" stroke="var(--stroke-0, #37C36E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.13542" />
        </g>
      </svg>
    </div>
  );
}

function PositiveChangeBadge2() {
  return (
    <div className="bg-[rgba(55,195,110,0.1)] box-border content-stretch flex h-[16.653px] items-center justify-center pl-[4.542px] pr-[9.083px] py-[7.569px] relative rounded-[3.785px] shrink-0 w-[33.306px]">
      <GreenArrowUp2 />
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] mr-[-1.514px] not-italic relative shrink-0 text-[#37c36e] text-[9.84px] text-nowrap whitespace-pre">9%</p>
    </div>
  );
}

function PositiveChangeBadgeContainer2() {
  return (
    <div className="content-stretch flex gap-[7.569px] items-center justify-center relative shrink-0">
      <PositiveChangeBadge2 />
    </div>
  );
}

function ActiveModelsValueWithChange() {
  return (
    <div className="content-stretch flex gap-[7px] items-center relative shrink-0 w-full">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[21.194px] text-black text-nowrap whitespace-pre">56</p>
      <PositiveChangeBadgeContainer2 />
    </div>
  );
}

function ActiveModelsStat() {
  return (
    <div className="content-stretch flex flex-col gap-[15px] items-start relative shrink-0">
      <ActiveModelsLabel />
      <ActiveModelsValueWithChange />
    </div>
  );
}

function StatsRow() {
  return (
    <div className="absolute content-stretch flex gap-[30px] h-[39px] items-center left-[20px] top-[20px]">
      <PhoneCallsStat />
      <div className="h-[27px] relative shrink-0 w-0">
        <div className="absolute inset-[-1.85%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 28">
            <path d="M0.5 0.5V27.5" id="Vector 9243" stroke="url(#paint0_radial_2_191)" strokeLinecap="round" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1 14) rotate(90) scale(13.5 0.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_191" r="1">
                <stop stopColor="#A9A9A9" />
                <stop offset="1" stopColor="#D8D8D8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <ConversationsStat />
      <div className="h-[27px] relative shrink-0 w-0">
        <div className="absolute inset-[-1.85%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 28">
            <path d="M0.5 0.5V27.5" id="Vector 9243" stroke="url(#paint0_radial_2_191)" strokeLinecap="round" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(1 14) rotate(90) scale(13.5 0.5)" gradientUnits="userSpaceOnUse" id="paint0_radial_2_191" r="1">
                <stop stopColor="#A9A9A9" />
                <stop offset="1" stopColor="#D8D8D8" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <ActiveModelsStat />
    </div>
  );
}

function InfoIconSVG() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/bold/info-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="info-circle">
          <path d={svgPaths.p7bc2900} fill="var(--fill-0, #BEC0CD)" id="Vector" />
          <g id="Vector_2" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function InfoIcon() {
  return (
    <div className="relative shrink-0 size-[10.597px]" data-name="info-circle">
      <InfoIconSVG />
    </div>
  );
}

function ChartTitle() {
  return (
    <div className="absolute content-stretch flex gap-[3.028px] items-center justify-center left-[20px] top-[97.54px]">
      <p className="font-['Neue_Montreal:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">AI Agent Usage Analytics</p>
      <InfoIcon />
    </div>
  );
}

function MonthLabels() {
  return (
    <div className="absolute content-stretch flex font-['Product_Sans:Regular',sans-serif] gap-[20px] items-center leading-[normal] left-[27px] not-italic text-[9.083px] text-[rgba(111,118,126,0.4)] text-nowrap top-[236px] uppercase whitespace-pre">
      <p className="relative shrink-0">Jan</p>
      <p className="relative shrink-0">Feb</p>
      <p className="relative shrink-0">Mar</p>
      <p className="relative shrink-0">Apr</p>
      <p className="relative shrink-0">May</p>
      <p className="relative shrink-0">Jun</p>
      <p className="relative shrink-0">Jul</p>
      <p className="relative shrink-0">Aug</p>
      <p className="relative shrink-0">Sep</p>
      <p className="relative shrink-0">Oct</p>
      <p className="relative shrink-0">Nov</p>
      <p className="relative shrink-0">Dec</p>
    </div>
  );
}

function ChartCard({ isInView }: { isInView: boolean }) {
  return (
    <div className="absolute h-[303px] left-[93px] top-[111px] w-[437px] overflow-hidden rounded-[15px]">
      <ChartCardBase />
      <ChartCardShine />
      <StatsRow />
      <ChartTitle />
      <div className="absolute h-[99.5px] left-[36px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[74px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[112px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[51px] top-[227px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "353" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[353px] relative w-0">
            <div className="absolute inset-[-0.14%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 354">
                <path d="M0.5 0.5V353.5" id="Vector 9261" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[51px] top-[208px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "353" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[353px] relative w-0">
            <div className="absolute inset-[-0.14%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 354">
                <path d="M0.5 0.5V353.5" id="Vector 9261" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[51px] top-[189px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "353" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[353px] relative w-0">
            <div className="absolute inset-[-0.14%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 354">
                <path d="M0.5 0.5V353.5" id="Vector 9261" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[51px] top-[170px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "353" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[353px] relative w-0">
            <div className="absolute inset-[-0.14%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 354">
                <path d="M0.5 0.5V353.5" id="Vector 9261" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[51px] top-[151px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "353" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[353px] relative w-0">
            <div className="absolute inset-[-0.14%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 354">
                <path d="M0.5 0.5V353.5" id="Vector 9261" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[51px] top-[132px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "353" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="h-[353px] relative w-0">
            <div className="absolute inset-[-0.14%_-0.5px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 354">
                <path d="M0.5 0.5V353.5" id="Vector 9261" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[150px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[188px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[226px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[264px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[302px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[340px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[378px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[416px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute h-[99.5px] left-[454px] top-[127px] w-0">
        <div className="absolute inset-[-0.5%_-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 101">
            <path d="M0.5 0.5V100" id="Vector 9246" stroke="var(--stroke-0, #EBEBEB)" strokeDasharray="2 3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[42.57%_2.21%_36.69%_3.44%]" data-name="Vector">
        <div className="absolute inset-[-1.2%_-0.15%_-1.2%_-0.07%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 461 65">
            <motion.path
              d={svgPaths.p275d6700}
              id="Vector"
              stroke="var(--stroke-0, #045CFF)"
              strokeMiterlimit="10"
              strokeWidth="1.51389"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{
                pathLength: { duration: 1.5, ease: "easeOut", delay: 0.3 },
                opacity: { duration: 0.3, delay: 0.3 }
              }}
            />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[42.57%_2.37%_19.45%_3.29%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 460 116">
          <motion.path
            d={svgPaths.p181aa380}
            fill="url(#paint0_linear_2_185)"
            fillOpacity="0.6"
            id="Vector"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
          />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_2_185" x1="229.541" x2="229.541" y1="-325.688" y2="65.8184">
              <stop stopColor="#045CFF" />
              <stop offset="1" stopColor="#045CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute flex inset-[48.84%_16.24%_34.01%_5.54%] items-center justify-center">
        <div className="flex-none h-[38.993px] rotate-[178.042deg] scale-y-[-100%] w-[379.81px]">
          <div className="relative size-full" data-name="Vector">
            <div className="absolute bottom-[-1.94%] left-0 right-[-0.13%] top-[-1.94%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 381 41">
                <motion.path
                  d={svgPaths.p212e8400}
                  id="Vector"
                  stroke="var(--stroke-0, #38DC78)"
                  strokeMiterlimit="10"
                  strokeWidth="1.51389"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                  transition={{
                    pathLength: { duration: 1.5, ease: "easeOut", delay: 0.5 },
                    opacity: { duration: 0.3, delay: 0.5 }
                  }}
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute h-[105px] left-[8px] top-[131px] w-[98px]" />
      <MonthLabels />
      <div className="absolute flex h-[143px] items-center justify-center left-[273px] top-[108px] w-[214px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[143px] w-[214px]" />
        </div>
      </div>
      <div className="absolute left-[340.73px] size-[12.111px] top-[147.92px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <circle cx="6.05556" cy="6.05556" fill="var(--fill-0, #1D6CFF)" id="Ellipse 22" r="4.54167" stroke="var(--stroke-0, white)" strokeWidth="3.02778" />
        </svg>
      </div>
    </div>
  );
}

export default function RealtimeInsightsCard() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  console.log("RealtimeInsightsCard isInView:", isInView);

  return (
    <div ref={ref} className="relative size-full">
      <GradientMask />
      <Shadow />
      <ChartCard isInView={isInView} />
    </div>
  );
}