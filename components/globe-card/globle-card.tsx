import svgPaths from "./globle-card-svg";
import imgRectangle34624139 from "../../public/assets/background-globe.png";
import imgLogo from "../../public/assets/Logo.png";
import Globe from "./Globe";

function MaskGroup() {
  return (
    <div className="absolute contents left-[126px] top-[174px]" data-name="Mask group">
      <div className="absolute left-[157px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-31px_-40px] mask-size-[307px_307px] rounded-[153.5px] size-[254px] top-[214px]" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\\'0 0 254 254\\\' xmlns=\\\'http://www.w3.org/2000/svg\\\' preserveAspectRatio=\\\'none\\\'><rect x=\\\'0\\\' y=\\\'0\\\' height=\\\'100%\\\' width=\\\'100%\\\' fill=\\\'url(%23grad)\\\' opacity=\\\'1\\\'/><defs><radialGradient id=\\\'grad\\\' gradientUnits=\\\'userSpaceOnUse\\\' cx=\\\'0\\\' cy=\\\'0\\\' r=\\\'10\\\' gradientTransform=\\\'matrix(6.096 9.1186 -9.1186 6.096 127 127)\\\'><stop stop-color=\\\'rgba(4,92,255,1)\\\' offset=\\\'0\\\'/><stop stop-color=\\\'rgba(4,92,255,0)\\\' offset=\\\'1\\\'/></radialGradient></defs></svg>')", maskImage: `url('${imgRectangle34624139.src}')` }} />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[56px] left-[71px] top-[82px] w-[57px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 56">
        <g id="Group 2087325416">
          <mask height="56" id="mask0_1_139" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="57" x="0" y="0">
            <rect height="55" id="Rectangle 34625074" rx="9.5" stroke="var(--stroke-0, black)" width="56" x="0.5" y="0.5" />
          </mask>
          <g mask="url(#mask0_1_139)">
            <g filter="url(#filter0_f_1_139)" id="Ellipse 21919">
              <circle cx="-1.5" cy="22.5" fill="var(--fill-0, #045CFF)" r="6.5" />
            </g>
            <g filter="url(#filter1_f_1_139)" id="Ellipse 21920">
              <ellipse cx="54.5" cy="47.5" fill="var(--fill-0, #045CFF)" rx="6.5" ry="9.5" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="41" id="filter0_f_1_139" width="41" x="-22" y="2">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_139" stdDeviation="7" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="47" id="filter1_f_1_139" width="41" x="34" y="24">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_139" stdDeviation="7" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute contents left-[85px] top-[96px]" data-name="Logo">
      <div className="absolute h-[28.741px] left-[85px] rounded-[21px] top-[96px] w-[28.841px]" data-name="Logo">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px]">
          <img alt="" className="absolute h-full left-0 max-w-none top-0 w-[107.28%]" src={imgLogo.src} />
        </div>
      </div>
    </div>
  );
}

function Phone() {
  return (
    <div className="relative shrink-0 size-[14.48px]" data-name="phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="phone">
          <path d={svgPaths.p52db80} fill="var(--stroke-0, #045CFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[4.259px] items-center justify-center left-[246px] p-[4.259px] rounded-[60px] size-[29px] top-[285px]">
      <div aria-hidden="true" className="absolute border-[#528fff] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <Phone />
    </div>
  );
}

function Phone1() {
  return (
    <div className="relative shrink-0 size-[14.48px]" data-name="phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="phone">
          <path d={svgPaths.p52db80} fill="var(--stroke-0, #045CFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[4.259px] items-center justify-center left-[228px] p-[4.259px] rounded-[60px] size-[23px] top-[113px]">
      <div aria-hidden="true" className="absolute border-[#045cff] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <Phone1 />
    </div>
  );
}

function Phone2() {
  return (
    <div className="relative shrink-0 size-[14.48px]" data-name="phone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
        <g id="phone">
          <path d={svgPaths.p52db80} fill="var(--stroke-0, #045CFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute bg-white box-border content-stretch flex gap-[4.259px] items-center justify-center left-[96px] p-[4.259px] rounded-[60px] size-[23px] top-[242px]">
      <div aria-hidden="true" className="absolute border-[#045cff] border-[0.7px] border-solid inset-0 pointer-events-none rounded-[60px]" />
      <Phone2 />
    </div>
  );
}

export default function Frame3() {
  return (
    <div className="relative w-full h-[403px] max-w-[500px] mx-auto overflow-visible">
      <MaskGroup />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.0324687734246254)+(var(--transform-inner-height)*0.9994727373123169)))] items-center justify-center left-[183.38px] top-[204px] w-[calc(1px*((var(--transform-inner-height)*0.0324687734246254)+(var(--transform-inner-width)*0.9994727373123169)))]" style={{ "--transform-inner-width": "142", "--transform-inner-height": "132" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.861deg]">
          <div className="h-[132px] relative w-[142px]">
            <div className="absolute inset-[-167.8%_-155.99%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 585 575">
                <g filter="url(#filter0_f_1_135)" id="Ellipse 982">
                  <ellipse cx="292.5" cy="287.5" fill="var(--fill-0, #055AF8)" fillOpacity="0.35" rx="71" ry="66" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="575" id="filter0_f_1_135" width="585" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_135" stdDeviation="110.75" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*0.0324687734246254)+(var(--transform-inner-height)*0.9994727373123169)))] items-center justify-center left-[144px] top-[310.74px] w-[calc(1px*((var(--transform-inner-height)*0.0324687734246254)+(var(--transform-inner-width)*0.9994727373123169)))]" style={{ "--transform-inner-width": "142", "--transform-inner-height": "88" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.861deg]">
          <div className="h-[88px] relative w-[142px]">
            <div className="absolute inset-[-251.7%_-155.99%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 585 531">
                <g filter="url(#filter0_f_1_146)" id="Ellipse 983">
                  <ellipse cx="292.5" cy="265.5" fill="var(--fill-0, #045CFF)" fillOpacity="0.35" rx="71" ry="44" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="531" id="filter0_f_1_146" width="585" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_146" stdDeviation="110.75" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-white h-[403px] left-0 rounded-[15px] top-0 w-[348px]" />
      {/* Globe positioned to show fully without cutoff */}
      <div className="absolute left-[80px] top-[120px]">
        <Globe />
      </div>
      <div className="absolute left-[109px] size-[24px] top-[118px]">
        <div className="absolute inset-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
            <g filter="url(#filter0_f_1_144)" id="Ellipse 21917">
              <circle cx="36" cy="36" fill="var(--fill-0, #045CFF)" fillOpacity="0.15" r="12" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_f_1_144" width="72" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_144" stdDeviation="12" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute left-[65px] size-[24px] top-[94px]">
        <div className="absolute inset-[-100%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
            <g filter="url(#filter0_f_1_144)" id="Ellipse 21917">
              <circle cx="36" cy="36" fill="var(--fill-0, #045CFF)" fillOpacity="0.15" r="12" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="72" id="filter0_f_1_144" width="72" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_144" stdDeviation="12" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-white h-[56px] left-[71px] rounded-[10px] top-[82px] w-[57px]" />
      <Group />
      <Logo />
      <div className="absolute h-[75.5px] left-[114.5px] top-[120.5px] w-[135px]">
        <div className="absolute bottom-0 left-0 right-[-0.37%] top-[-0.66%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 76">
            <path d={svgPaths.p39a08d00} id="Vector 9258" stroke="url(#paint0_linear_1_137)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_137" x1="7.5" x2="133.5" y1="-4.99999" y2="76">
                <stop stopColor="#045CFF" stopOpacity="0" />
                <stop offset="1" stopColor="#045CFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute h-[148px] left-[49px] top-[105px] w-[145.5px]">
        <div className="absolute bottom-[-0.34%] left-[-0.34%] right-0 top-[-0.34%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 146 149">
            <path d={svgPaths.p271f1080} id="Vector 9259" stroke="url(#paint0_linear_1_133)" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_133" x1="-11.5" x2="184.551" y1="-33.1512" y2="35.9627">
                <stop stopColor="#045CFF" stopOpacity="0" />
                <stop offset="1" stopColor="#045CFF" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Frame1 />
      <Frame2 />
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[174px] top-[113px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "15", "--transform-inner-height": "15" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="relative size-[15px]">
            <div className="absolute inset-[13.27%_17.28%_28.29%_17.28%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
                <path d={svgPaths.p2b99ad00} fill="var(--fill-0, #BCD4FF)" id="Star 3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-[42px] size-[15px] top-[175px]">
        <div className="absolute inset-[13.27%_17.28%_28.29%_17.28%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 9">
            <path d={svgPaths.p2b99ad00} fill="var(--fill-0, #BCD4FF)" id="Star 4" />
          </svg>
        </div>
      </div>
    </div>
  );
}