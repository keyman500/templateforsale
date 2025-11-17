import imgLogo from "../../public/assets/Logo.png";

function IconShadow() {
  return (
    <div className="absolute left-[61px] size-[74px] top-[55px]" data-name="Shadow">
      <div className="absolute inset-[-47.16%_-47.16%_-33.65%_-33.65%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 134 134">
          <g id="Shadow" opacity="0.66">
            <g filter="url(#filter0_f_1_45)" id="Ellipse 21911">
              <circle cx="34.9909" cy="98.8091" fill="var(--fill-0, #045CFF)" fillOpacity="0.2" r="10.0909" />
            </g>
            <g filter="url(#filter1_f_1_45)" id="Ellipse 21910">
              <ellipse cx="86.2864" cy="48.3545" fill="var(--fill-0, #045CFF)" fillOpacity="0.3" rx="12.6136" ry="13.4545" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="69.9818" id="filter0_f_1_45" width="69.9818" x="0" y="63.8182">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_45" stdDeviation="12.45" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96.7091" id="filter1_f_1_45" width="95.0273" x="38.7727" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_45" stdDeviation="17.45" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IconShine() {
  return (
    <div className="absolute left-[61px] size-[74px] top-[55px]" data-name="Shine">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 74 74">
        <g id="Shine">
          <mask height="74" id="mask0_1_38" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="74" x="0" y="0">
            <rect height="71" id="Shine_2" rx="18.5" stroke="var(--stroke-0, white)" strokeWidth="3" width="71" x="1.5" y="1.5" />
          </mask>
          <g mask="url(#mask0_1_38)">
            <g filter="url(#filter0_f_1_38)" id="Ellipse 21908">
              <circle cx="65.1705" cy="6.30682" fill="var(--fill-0, #045CFF)" r="13.875" />
            </g>
            <g filter="url(#filter1_f_1_38)" id="Ellipse 21909">
              <circle cx="-3.78409" cy="76.1023" fill="var(--fill-0, #045CFF)" r="12.1932" />
            </g>
            <g filter="url(#filter2_f_1_38)" id="Ellipse 21910">
              <circle cx="-10.0909" cy="10.9318" fill="var(--fill-0, #045CFF)" r="11.7727" />
            </g>
            <g filter="url(#filter3_f_1_38)" id="Ellipse 21911">
              <circle cx="74" cy="89.9773" fill="var(--fill-0, #045CFF)" r="11.7727" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="99.55" id="filter0_f_1_38" width="99.55" x="15.3955" y="-43.4682">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_38" stdDeviation="17.95" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="96.1864" id="filter1_f_1_38" width="96.1864" x="-51.8773" y="28.0091">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_38" stdDeviation="17.95" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="95.3455" id="filter2_f_1_38" width="95.3455" x="-57.7636" y="-36.7409">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_38" stdDeviation="17.95" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="95.3455" id="filter3_f_1_38" width="95.3455" x="26.3273" y="42.3045">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_38" stdDeviation="17.95" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function IntegrationLogo() {
  return (
    <div className="absolute left-[80.84px] top-[74.84px]" data-name="Logo">
      <div className="absolute h-[35.037px] left-0 rounded-[21px] top-0 w-[35.159px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px]">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[107.28%]" src={imgLogo.src} />
        </div>
      </div>
    </div>
  );
}

function IconContainer() {
  return (
    <div className="absolute contents left-[61px] top-[55px]">
      <IconShadow />
      <div className="absolute bg-white left-[61px] rounded-[20px] size-[74px] top-[55px]" data-name="Base" />
      <IconShine />
      <IntegrationLogo />
    </div>
  );
}

function WindowControls() {
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

export default function IntegrationCard() {
  return (
    <div className="relative size-full">
      <div className="absolute bg-white h-[184px] left-0 rounded-[15px] top-0 w-[195px]">
        <div aria-hidden="true" className="absolute border border-[#045cff] border-solid inset-0 pointer-events-none rounded-[15px]" />
      </div>
      <IconContainer />
      <WindowControls />
    </div>
  );
}
