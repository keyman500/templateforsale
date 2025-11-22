import svgPaths from "./left-shadow-svg";
import MaskGroup from "../Shadows/MaskGroup";

export default function LeftShadow() {
  return (
    <div className="absolute -top-10 -left-[230px] sm:-left-10 w-[350px] sm:w-auto h-auto">
      <svg
        className="block size-full"
        width={539}
        height={813}
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 499 813"
      >
        <path d={svgPaths.p448} fill="url(#paint0_linear_hero_left)" fillOpacity="0.5" opacity="0.7" stroke="url(#paint1_linear_hero_left)" strokeOpacity="0.2" />
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_hero_left" x1="688" x2="62" y1="582.122" y2="649.622">
            <stop stopColor="#E1ECFF" />
            <stop offset="0.908524" stopColor="#E1ECFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_hero_left" x1="569.5" x2="331.5" y1="314.122" y2="310.122">
            <stop stopColor="#045CFF" />
            <stop offset="1" stopColor="#045CFF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute right-[10%] top-[35%] w-[500px] h-[500px]">
        <MaskGroup />
      </div>
    </div>
  );
}

