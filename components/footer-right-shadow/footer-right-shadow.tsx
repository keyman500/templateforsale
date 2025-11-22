import { cn } from "@/lib/utils";
import svgPaths from "./footer-right-shadow-svg";

interface FooterRightShadowProps {
  className?: string;
}

export default function FooterRightShadow({ className }: FooterRightShadowProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="absolute inset-[1.9%_0.2%_0.78%_-0.08%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 590 813">
          <path d={svgPaths.p2c8ef280} fill="url(#paint0_linear_footer)" fillOpacity="0.6" id="Vector 9272" opacity="0.7" stroke="url(#paint1_linear_footer)" strokeOpacity="0.2" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_footer" x1="-189.215" x2="436.785" y1="582.122" y2="649.622">
              <stop stopColor="#E1ECFF" />
              <stop offset="0.908524" stopColor="#E1ECFF" stopOpacity="0" />
            </linearGradient>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_footer" x1="-70.7148" x2="167.285" y1="314.122" y2="310.122">
              <stop stopColor="#045CFF" />
              <stop offset="1" stopColor="#045CFF" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}