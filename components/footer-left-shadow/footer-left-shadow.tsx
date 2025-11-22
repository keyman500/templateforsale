import { cn } from "@/lib/utils";
import svgPaths from "./footer-left-shadow-svg";

interface FooterLeftShadowProps {
  className?: string;
}

export default function FooterLeftShadow({ className }: FooterLeftShadowProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 499 813">
          <path d={svgPaths.p448} fill="url(#paint0_linear_footer_left)" fillOpacity="0.6" opacity="0.7" stroke="url(#paint1_linear_footer_left)" strokeOpacity="0.2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer_left" x1="688" x2="62" y1="582.122" y2="649.622">
              <stop stopColor="#E1ECFF" />
              <stop offset="0.908524" stopColor="#E1ECFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_footer_left" x1="569.5" x2="331.5" y1="314.122" y2="310.122">
              <stop stopColor="#045CFF" />
              <stop offset="1" stopColor="#045CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

