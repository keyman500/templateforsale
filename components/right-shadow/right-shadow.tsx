import svgPaths from "./right-shadow-svg";
import MaskGroup from "../Shadows/MaskGroup";

export default function RightShadow() {
  return (
    <div className="absolute -top-10 -right-[230px] sm:-right-10 w-[350px] sm:w-auto h-auto">
    <svg
        className="block size-full"
      width={539}
      height={813}
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 590 813"
    >
      <path d={svgPaths.p2c8ef280} fill="url(#paint0_linear_1_10)" fillOpacity="0.5" id="Vector 212" opacity="0.7" stroke="url(#paint1_linear_1_10)" strokeOpacity="0.2" />
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_10" x1="-189.215" x2="436.785" y1="582.122" y2="649.622">
          <stop stopColor="#E1ECFF" />
          <stop offset="0.908524" stopColor="#E1ECFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_10" x1="-70.7148" x2="167.285" y1="314.122" y2="310.122">
          <stop stopColor="#045CFF" />
          <stop offset="1" stopColor="#045CFF" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
      <div className="absolute left-[10%] top-[35%] w-[500px] h-[500px]">
        <MaskGroup />
      </div>
    </div>
  );
}

