import svgPaths from "./integrations-card-svg";
import imgRectangle34624139 from "../../public/assets/a00ede6740f3cc613425003274e6881753137603.png";
import imgLogo from "../../public/assets/Logo.png";

function BackgroundGradientRight() {
  return (
    <div className="absolute contents left-[133px] top-[86px]" data-name="Mask group">
      <div className="absolute left-[172px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-39px_-64px] mask-size-[307px_307px] rounded-[153.5px] size-[218px] top-[150px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 218 218\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.800000011920929\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(5.232 7.8262 -7.8262 5.232 109 109)\\\'><stop stop-color=\\\'rgba(255,0,0,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(255,0,0,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgRectangle34624139.src}')` }} />
    </div>
  );
}

function BackgroundGradientLeft() {
  return (
    <div className="absolute contents left-[7.47px] top-0" data-name="Mask group">
      <div className="absolute left-[46.47px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-39px_-64px] mask-size-[307px_307px] rounded-[153.5px] size-[218px] top-[64px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 218 218\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'0.800000011920929\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(5.232 7.8262 -7.8262 5.232 109 109)\\\'><stop stop-color=\\\'rgba(4,92,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(4,92,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgRectangle34624139.src}')` }} />
    </div>
  );
}

function NotionCard() {
  return (
    <div className="absolute left-0 size-[62px] top-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 62 62">
        <g id="Frame 2147226490">
          <rect fill="var(--fill-0, white)" height="62" rx="10" width="62" />
          <rect height="61" rx="9.5" stroke="url(#paint0_linear_1_126)" strokeOpacity="0.5" width="61" x="0.5" y="0.5" />
          <path d={svgPaths.pbfd29f0} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_126" x1="101.5" x2="42" y1="92.5" y2="42">
            <stop stopColor="#494949" />
            <stop offset="1" stopColor="#494949" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SupabaseLogoGroup() {
  return (
    <div className="absolute bottom-[0.02%] left-0 right-0 top-0" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 30">
        <g id="Group">
          <path d={svgPaths.p2c5e700} fill="url(#paint0_linear_1_103)" id="Vector" />
          <path d={svgPaths.p2c5e700} fill="url(#paint1_linear_1_103)" fillOpacity="0.2" id="Vector_2" />
          <path d={svgPaths.pa9e6e00} fill="var(--fill-0, #3ECF8E)" id="Vector_3" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_103" x1="319.841" x2="1011.29" y1="410.25" y2="698.24">
            <stop stopColor="#249361" />
            <stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_103" x1="43.5139" x2="491.281" y1="-243.478" y2="593.602">
            <stop />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function SupabaseLogo() {
  return (
    <div className="h-[30px] overflow-clip relative w-[29px]" data-name="supabase-icon logo">
      <SupabaseLogoGroup />
    </div>
  );
}

function SupabaseCard() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[16px] relative rounded-[10px] size-[62px]">
      <div aria-hidden="true" className="absolute border border-[#3ecf8e] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <SupabaseLogo />
        </div>
      </div>
    </div>
  );
}

function GoogleCalendarLogo() {
  return (
    <div className="relative size-[30px]" data-name="google-calendar logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g clipPath="url(#clip0_1_133)" id="google-calendar logo">
          <path d={svgPaths.p15a39380} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1ff75300} fill="var(--fill-0, #1A73E8)" id="Vector_2" />
          <path d={svgPaths.p2b282e80} fill="var(--fill-0, #EA4335)" id="Vector_3" />
          <path d={svgPaths.p8790600} fill="var(--fill-0, #34A853)" id="Vector_4" />
          <path d={svgPaths.pf04f880} fill="var(--fill-0, #4285F4)" id="Vector_5" />
          <path d={svgPaths.p1b424580} fill="var(--fill-0, #188038)" id="Vector_6" />
          <path d={svgPaths.p332c0500} fill="var(--fill-0, #FBBC04)" id="Vector_7" />
          <path d={svgPaths.p1c010510} fill="var(--fill-0, #1967D2)" id="Vector_8" />
        </g>
        <defs>
          <clipPath id="clip0_1_133">
            <rect fill="white" height="30" width="30" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CalendarCard() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[16px] relative rounded-[10px] size-[62px]">
      <div aria-hidden="true" className="absolute border border-[#4285f4] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <GoogleCalendarLogo />
        </div>
      </div>
    </div>
  );
}

function ExcelLogo() {
  return (
    <div className="h-[30px] relative shrink-0 w-[32px]" data-name="microsoft-excel logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 30">
        <g clipPath="url(#clip0_1_108)" id="microsoft-excel logo">
          <path d={svgPaths.p228e0500} fill="var(--fill-0, #185C37)" id="Vector" />
          <path d={svgPaths.p1f3c6300} fill="var(--fill-0, #21A366)" id="Vector_2" />
          <path d={svgPaths.p3e850180} fill="var(--fill-0, #107C41)" id="Vector_3" />
          <path d={svgPaths.p3ef22000} fill="var(--fill-0, black)" id="Vector_4" opacity="0.1" />
          <path d={svgPaths.p4012f80} fill="var(--fill-0, black)" id="Vector_5" opacity="0.2" />
          <path d={svgPaths.p7469a00} fill="var(--fill-0, black)" id="Vector_6" opacity="0.2" />
          <path d={svgPaths.p369ca100} fill="var(--fill-0, black)" id="Vector_7" opacity="0.2" />
          <path d={svgPaths.pb282e80} fill="url(#paint0_linear_1_108)" id="Vector_8" />
          <path d={svgPaths.p33617900} fill="var(--fill-0, white)" id="Vector_9" />
          <path d={svgPaths.p18623b40} fill="var(--fill-0, #33C481)" id="Vector_10" />
          <path d={svgPaths.p1b713e00} fill="var(--fill-0, #107C41)" id="Vector_11" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_108" x1="2.84419" x2="13.6558" y1="5.67423" y2="24.2513">
            <stop stopColor="#18884F" />
            <stop offset="0.5" stopColor="#117E43" />
            <stop offset="1" stopColor="#0B6631" />
          </linearGradient>
          <clipPath id="clip0_1_108">
            <rect fill="white" height="30" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ExcelCard() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[10px] items-center left-[357px] p-[16px] rounded-[10px] top-[270px] w-[62px]">
      <div aria-hidden="true" className="absolute border border-[#33c481] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <ExcelLogo />
    </div>
  );
}

function WindowShadow() {
  return (
    <div className="absolute left-[61px] size-[74px] top-[55px]" data-name="Shadow">
      <div className="absolute inset-[-47.16%_-47.16%_-33.65%_-33.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 134">
          <g id="Shadow" opacity="0.66">
            <g filter="url(#filter0_f_1_97)" id="Ellipse 21911">
              <circle cx="34.9909" cy="98.8091" fill="var(--fill-0, #045CFF)" fillOpacity="0.2" r="10.0909" />
            </g>
            <g filter="url(#filter1_f_1_97)" id="Ellipse 21910">
              <ellipse cx="86.2864" cy="48.3545" fill="var(--fill-0, #045CFF)" fillOpacity="0.3" rx="12.6136" ry="13.4545" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69.9818" id="filter0_f_1_97" width="69.9818" x="0" y="63.8182">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_97" stdDeviation="12.45" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96.7091" id="filter1_f_1_97" width="95.0273" x="38.7727" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_97" stdDeviation="17.45" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function WindowShine() {
  return (
    <div className="absolute left-[61px] size-[74px] top-[55px]" data-name="Shine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Shine">
          <mask height="74" id="mask0_1_90" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
            <rect height="71" id="Shine_2" rx="18.5" stroke="var(--stroke-0, white)" strokeWidth="3" width="71" x="1.5" y="1.5" />
          </mask>
          <g mask="url(#mask0_1_90)">
            <g filter="url(#filter0_f_1_90)" id="Ellipse 21908">
              <circle cx="65.1705" cy="6.30682" fill="var(--fill-0, #045CFF)" r="13.875" />
            </g>
            <g filter="url(#filter1_f_1_90)" id="Ellipse 21909">
              <circle cx="-3.78409" cy="76.1023" fill="var(--fill-0, #045CFF)" r="12.1932" />
            </g>
            <g filter="url(#filter2_f_1_90)" id="Ellipse 21910">
              <circle cx="-10.0909" cy="10.9318" fill="var(--fill-0, #045CFF)" r="11.7727" />
            </g>
            <g filter="url(#filter3_f_1_90)" id="Ellipse 21911">
              <circle cx="74" cy="89.9773" fill="var(--fill-0, #045CFF)" r="11.7727" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="99.55" id="filter0_f_1_90" width="99.55" x="15.3955" y="-43.4682">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_90" stdDeviation="17.95" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96.1864" id="filter1_f_1_90" width="96.1864" x="-51.8773" y="28.0091">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_90" stdDeviation="17.95" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="95.3455" id="filter2_f_1_90" width="95.3455" x="-57.7636" y="-36.7409">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_90" stdDeviation="17.95" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="95.3455" id="filter3_f_1_90" width="95.3455" x="26.3273" y="42.3045">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_90" stdDeviation="17.95" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function AppLogo() {
  return (
    <div className="absolute contents left-[80.84px] top-[74.84px]" data-name="Logo">
      <div className="absolute h-[35.037px] left-[80.84px] rounded-[21px] top-[74.84px] w-[35.159px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px]">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[107.28%]" src={imgLogo.src} />
        </div>
      </div>
    </div>
  );
}

function WindowContent() {
  return (
    <div className="absolute contents left-[61px] top-[55px]">
      <WindowShadow />
      <div className="absolute bg-white left-[61px] rounded-[20px] size-[74px] top-[55px]" data-name="Base" />
      <WindowShine />
      <AppLogo />
    </div>
  );
}

function WindowTrafficLights() {
  return (
    <div className="absolute h-[9px] left-[15px] top-[15px] w-[33px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 9">
        <g id="Group 427319023">
          <circle cx="4.5" cy="4.5" fill="var(--fill-0, #E81A1A)" id="Ellipse 975" r="4.5" />
          <circle cx="16.5" cy="4.5" fill="var(--fill-0, #FFCC00)" id="Ellipse 976" r="4.5" />
          <circle cx="28.5" cy="4.5" fill="var(--fill-0, #21E16D)" id="Ellipse 977" r="4.5" />
        </g>
      </svg>
    </div>
  );
}

function MainAppWindow() {
  return (
    <div className="absolute h-[184px] left-[113px] top-[128px] w-[195px]">
      <div className="absolute bg-white h-[184px] left-0 rounded-[15px] top-0 w-[195px]">
        <div aria-hidden="true" className="absolute border border-[#045cff] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <WindowContent />
      <WindowTrafficLights />
    </div>
  );
}

export default function IntegrationsCard() {
  return (
    <div className="relative size-full">
      <div className="absolute inset-0 scale-[1.3] origin-center">
      <div className="absolute left-[35px] size-[26px] top-[58px]">
        <div className="absolute inset-[-191.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 126 126">
            <g filter="url(#filter0_f_1_153)" id="Ellipse 21912">
              <circle cx="62.7" cy="62.7" fill="var(--fill-0, #D6D6D6)" r="13" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="125.4" id="filter0_f_1_153" width="125.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_153" stdDeviation="24.85" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[18.05px] left-[342px] top-[86px] w-[18px]">
        <div className="absolute inset-[-275.34%_-276.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 118">
            <g filter="url(#filter0_f_1_131)" id="Ellipse 21913">
              <ellipse cx="58.7" cy="58.7251" fill="var(--fill-0, #3ECF8E)" rx="9" ry="9.02509" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="117.45" id="filter0_f_1_131" width="117.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_131" stdDeviation="24.85" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[14.025px] left-[83px] top-[338.09px] w-[13.724px]">
        <div className="absolute inset-[-354.36%_-362.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 114 114">
            <g filter="url(#filter0_f_1_149)" id="Ellipse 21914">
              <ellipse cx="56.5621" cy="56.7126" fill="var(--fill-0, #4285F4)" rx="6.86206" ry="7.01257" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="113.425" id="filter0_f_1_149" width="113.124" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_149" stdDeviation="24.85" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[382px] size-[18px] top-[314px]">
        <div className="absolute inset-[-276.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 118 118">
            <g filter="url(#filter0_f_1_147)" id="Ellipse 21915">
              <circle cx="58.7" cy="58.7" fill="var(--fill-0, #33C481)" r="9" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="117.4" id="filter0_f_1_147" width="117.4" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_147" stdDeviation="24.85" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[62px] left-[253px] top-[311.5px] w-[137px]">
        <div className="absolute bottom-[-0.81%] left-[-0.36%] right-[-0.36%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 138 63">
            <path d={svgPaths.p3f44b7c0} id="Vector 9240" stroke="url(#paint0_radial_1_145)" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(96.75 31) rotate(3.61788) scale(150.55 48.4888)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_145" r="1">
                <stop stopColor="#33C481" />
                <stop offset="1" stopColor="#33C481" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[127px] left-[30px] top-[86px] w-[84.5px]">
        <div className="absolute bottom-[-0.39%] left-[-0.59%] right-0 top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 128">
            <path d={svgPaths.p18f4ad40} id="Vector 9239" stroke="url(#paint0_radial_1_129)" strokeOpacity="0.5" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="translate(27.5 83) rotate(-59.5781) scale(99.7309 84.8653)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_129" r="1">
                <stop stopColor="#494949" />
                <stop offset="1" stopColor="#494949" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <BackgroundGradientRight />
      <BackgroundGradientLeft />
      <NotionCard />
      <div className="absolute flex items-center justify-center left-[329px] size-[62px] top-[49px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <SupabaseCard />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[41px] size-[62px] top-[329px]">
        <div className="flex-none scale-y-[-100%]">
          <CalendarCard />
        </div>
      </div>
      <ExcelCard />
      <div className="absolute h-[45.5px] left-[190px] top-[82.5px] w-[139.5px]">
        <div className="absolute bottom-0 left-[-0.36%] right-0 top-[-1.1%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 46">
            <path d={svgPaths.pa8b0100} id="Vector 9241" stroke="url(#paint0_radial_1_151)" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(106.649 19.2218 -6.55426 51.3042 60 11)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_151" r="1">
                <stop stopColor="#3ECF8E" />
                <stop offset="1" stopColor="#3ECF8E" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[30px] left-[102.5px] top-[312px] w-[37.5px]">
        <div className="absolute bottom-[-1.67%] left-0 right-[-1.33%] top-0">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 38 31">
            <path d={svgPaths.p2ac1e1c0} id="Vector 9242" stroke="url(#paint0_radial_1_101)" />
            <defs>
              <radialGradient cx="0" cy="0" gradientTransform="matrix(28.6692 12.6737 -1.7619 33.827 15.9946 6.92307)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_101" r="1">
                <stop stopColor="#045CFF" />
                <stop offset="1" stopColor="#045CFF" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[22.5px] size-[15px] top-[135.93px]">
        <div className="flex-none rotate-[180deg]">
          <div className="relative size-[15px]">
            <div className="absolute inset-[13.27%_17.28%_28.29%_17.28%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
                <path d={svgPaths.p2b99ad00} fill="var(--fill-0, #D4D4D4)" id="Star 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[262.12px] top-[75px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "15", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[15px]">
            <div className="absolute inset-[13.27%_17.28%_28.29%_17.28%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
                <path d={svgPaths.p2b99ad00} fill="var(--fill-0, #8EE3BD)" id="Star 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[132.5px] size-[15px] top-[314px]">
        <div className="absolute inset-[13.27%_17.28%_28.29%_17.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
            <path d={svgPaths.p2b99ad00} fill="var(--fill-0, #BCD4FF)" id="Star 3" />
          </svg>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[319.94px] top-[366px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "15", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[270deg]">
          <div className="relative size-[15px]">
            <div className="absolute inset-[13.27%_17.28%_28.29%_17.28%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
                <path d={svgPaths.p2b99ad00} fill="var(--fill-0, #B7EAD3)" id="Star 4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[rgba(4,92,255,0.3)] blur-[45.2px] filter h-[67.429px] left-[240.18px] rounded-[23px] top-[230.04px] w-[55.062px]" />
      <div className="absolute bg-[rgba(4,92,255,0.3)] blur-[73.1px] filter h-[67.429px] left-[114.5px] rounded-[23px] top-[129.03px] w-[55.062px]" />
      <MainAppWindow />
      </div>
    </div>
  );
}