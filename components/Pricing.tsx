"use client";
import React, { useState } from "react";
import ShadowPricing from "./Shadows/ShadowPricing";

type Feature =
  | string
  | {
      before?: string;
      highlight: string;
      after?: string;
    };

interface Plan {
  id: string;
  name: string;
  priceMonthly: number;
  priceYearly: number;
  description: string;
  features: Feature[];
  highlighted?: boolean;
}

const ToggleButton: React.FC<{
  active: boolean;
  onClick: () => void;
  label: string;
}> = ({ active, onClick, label }) => (
  <button
    onClick={onClick}
    className={`px-[17px] h-[29px] f-neue-regular rounded-full leading-[26px] text-[14px] tracking-[-0.5px] transition-all ${
      active ? "bg-white text-[#045CFF]" : "text-[#B7D0FF]"
    }`}
    style={active ? { boxShadow: "0px 1px 24.3px 0px #045CFF0D" } : undefined}
  >
    {label}
  </button>
);

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    priceMonthly: 8,
    priceYearly: 80,
    description: "Great for individuals exploring AI",
    features: [
      "Up to 30 Active Agents",
      { before: "500 Simulations ", highlight: "Per Month" },
      "24/7 Support",
      { before: "Team Workspace ", highlight: "5 Team" },
      "Enhanced AI Insights",
      "Advanced Workflow API Integration",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
    description: "Great for scaling businesses",
    features: [
      "Up to 50 Active Agents",
      { before: "1000 Simulations ", highlight: "Per Month" },
      "Dedicated Account Manager",
      { before: "Collaborative Workspace ", highlight: "10 Team" },
      "Real-Time AI Analytics",
      "Premium API Access",
    ],
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    priceMonthly: 30,
    priceYearly: 200,
    description: "Suited for high-growth companies",
    features: [
      "Up to 100 Active Agents",
      { before: "Unlimited Simulations ", highlight: "Per Month" },
      "Custom Support Plans",
      { before: "Enterprise Workspace ", highlight: "Unlimited Team" },
      "AI-Driven Decision Making",
      "Custom API Solutions",
    ],
  },
];

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section className="pt-20 md:pt-32 px-4 overflow-hidden" id="pricing">
      <div className="relative max-w-[1044px] w-full mx-auto">
        <div className="text-center">
          <h1 className="f-eightiescomeback mb-[15px] tracking-[-0.01em] text-2xl sm:text-[38px] leading-[30px] sm:leading-[43px]">
            Simple Pricing For All
          </h1>

          <p className="text-[#7D7D7D] text-[14px] md:text-[16px] leading-5 sm:leading-[23px] tracking-[-0.01em] f-neue-regular">
            Our pricing options meet your needs with features and services.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center my-[50px] relative z-10">
          <div className="bg-[#EEF4FF] rounded-full p-0.5 flex">
            <ToggleButton
              active={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
              label="Monthly"
            />
            <ToggleButton
              active={billingCycle === "yearly"}
              onClick={() => setBillingCycle("yearly")}
              label="Yearly"
            />
          </div>
        </div>

        {/* Shadow Pricing */}
        <ShadowPricing />

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[15px]">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative overflow-hidden rounded-[20px] border transition-all duration-300 ${
                plan.highlighted
                  ? "shadow-sm md:shadow-none border-transparent "
                  : "border-[#F4F4F4] "
              } px-5 pt-7.5 pb-[47px] text-left`}
              style={{
                borderRadius: "20px",
                ...(plan.highlighted
                  ? {
                      border: "1px solid transparent",
                      backgroundImage:
                        "linear-gradient(#FFFFFF, #FFFFFF), linear-gradient(171.75deg, rgba(4, 92, 255, 0) 48.92%, rgba(4, 92, 255, 0.5) 205.56%)",
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }
                  : {}),
              }}
            >
              {plan.highlighted && (
                <img
                  src="/assets/pricing-active-card.png"
                  alt=""
                  aria-hidden
                  className="pointer-events-none select-none absolute top-0 right-0 w-full"
                />
              )}

              <div className="px-2.5 relative z-10">
                <h3 className="text-[22px] leading-[26px] mb-[15px] f-neue-regular tracking-[-0.5px]">
                  {plan.name}
                </h3>

                <div className="text-[46px] f-neue-medium leading-[26px] tracking-[-0.5px]">
                  $
                  {billingCycle === "monthly"
                    ? plan.priceMonthly
                    : plan.priceYearly}
                  <span className="ml-1 text-[18px] leading-[26px] text-[#7D7D7D] f-neue-regular">
                    /per {billingCycle === "monthly" ? "month" : "year"}
                  </span>
                </div>

                <p className="text-[14px] leading-[17px] f-neue-regular text-[#696969] mt-[11px]">
                  {plan.description}
                </p>
              </div>

              <button
                className={`w-full h-[39px] px-6 rounded-[10px] f-neue-medium text-[16px] leading-[19px] tracking-[-0.02em] my-9 transition duration-300 ${
                  plan.highlighted
                    ? "bg-[#045CFF] text-white"
                    : "bg-transparent text-[#A0A0A0] border border-[#E4E4E4] hover:bg-[#045CFF] hover:text-white"
                }`}
              >
                Get Started
              </button>

              <ul className="space-y-[15px] pl-2.5">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <svg
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        plan.highlighted ? "text-black" : "text-[#B3B3B3]"
                      }`}
                    >
                      <path
                        d="M0.75 5.25L4.6875 9.1875L12.5625 0.75"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {typeof feature === "string" ? (
                      <h3
                        className={`text-[16px] leading-[26px] f-neue-medium tracking-[-0.5px] ${
                          plan.highlighted ? "text-[#828282]" : "text-[#B3B3B3]"
                        }`}
                      >
                        {feature}
                      </h3>
                    ) : (
                      <h3
                        className={`text-base tracking-[-0.5px] f-neue-medium ${
                          plan.highlighted ? "text-[#828282]" : "text-[#B3B3B3]"
                        }`}
                      >
                        {feature.before ?? ""}
                        <span
                          className={`text-[16px] leading-[26px] tracking-[-0.5px] font-medium text-[#B3B3B3] ${
                            feature.before ? "ml-[11px]" : ""
                          }`}
                        >
                          {feature.highlight === "Per Month"
                            ? billingCycle === "yearly"
                              ? "Per Year"
                              : "Per Month"
                            : feature.highlight}
                        </span>
                      </h3>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
