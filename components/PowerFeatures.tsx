import React from "react";
import AiCard from "./ai-card/ai-card";
import IntegrationCard from "./integrations-card/center-card";
import GlobeCard from "./globe-card/globle-card";
import RealtimeInsightsCard from "./realtime-insights-card/realtime-insights";

const PowerFeatures: React.FC = () => {
    return (
        <section
            className="pt-10 md:pt-20 lg:pt-[130px] pb-10 md:pb-20 lg:pb-[130px] px-4 overflow-hidden"
            id="features"
        >
            <div className="max-w-[1250px] w-full mx-auto">
                {/* Headeings  */}
                <div className="text-center lg:mb-12">
                    <h1 className="f-eightiescomeback mb-[15px] tracking-[-0.01em] text-2xl sm:text-[38px] leading-[30px] sm:leading-[43px]">
                        Unlock Telezen&apos;s Power Features
                    </h1>

                    <p className="text-[#7D7D7D] text-[14px] md:text-[16px] leading-5 sm:leading-[23px] tracking-[-0.01em] f-neue-regular">
                        Enhances communication and streamlines experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 relative gap-x-16 lg:gap-x-24">
                    {/* Card 1 */}
                    <div className="pt-20 pr-8 md:pr-16 pb-8 md:pb-0">
                        <div className="md:pl-8 lg:pl-12">
                            <h3 className="f-neue-medium tracking-[-0.02em] text-lg md:text-[22px] mb-[15px]">
                                Chat with AI Models
                            </h3>

                            <p className="text-[#949494] text-sm md:text-[16px] tracking-[-0.02em] f-neue-regular max-w-[280px] lg:max-w-[419px]">
                                Engage in intelligent conversations with advanced AI models,
                                offering personalized responses and support.
                            </p>
                        </div>

                        <div className="flex items-center justify-center w-full mt-4 md:-mt-4 lg:-mt-8 md:pl-8 lg:pl-16">
                            <div className="h-[280px] sm:h-[330px] md:h-auto">
                                <div className="scale-[0.55] sm:scale-[0.65] md:scale-75 lg:scale-90 origin-top">
                                    <AiCard />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="pt-20 md:pl-16 pb-0 md:pb-0">
                        <div className="md:pl-8 lg:pl-12">
                            <h3 className="f-neue-medium tracking-[-0.02em] text-lg md:text-[22px] mb-[15px]">
                                Integration with Popular Services
                            </h3>

                            <p className="text-[#949494] text-sm md:text-[16px] tracking-[-0.02em] f-neue-regular max-w-[280px] lg:max-w-[393px]">
                                Seamlessly connect with widely used platforms and services,
                                enhancing functionality and accessibility.
                            </p>
                        </div>

                        <div className="flex justify-center items-center mt-8 md:mt-12">
                            <div className="w-[600px] h-[200px] sm:h-[225px] md:h-[275px] lg:h-[325px] scale-[0.35] sm:scale-[0.45] md:scale-[0.55] lg:scale-[0.65] origin-top">
                                <IntegrationCard />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="pt-16 md:pt-28 pr-8 md:pr-16">
                        <div className="md:pl-8 lg:pl-12">
                            <h3 className="f-neue-medium tracking-[-0.02em] text-lg md:text-[22px] mb-[15px]">
                                Real-Time Dashboard Insights
                            </h3>

                            <p className="text-[#949494] text-sm md:text-[16px] tracking-[-0.02em] f-neue-regular max-w-[280px] lg:max-w-[352px]">
                                Get live, actionable insights with a dynamic dashboard that
                                updates in real time to keep you informed.
                            </p>
                        </div>

                        <div className="flex justify-start items-start mt-8 -ml-4 sm:ml-0 md:mr-10">
                            <div className="relative w-[580px] h-[230px] sm:h-[270px] md:h-[315px] lg:h-[380px] scale-[0.55] sm:scale-[0.65] md:scale-75 lg:scale-90 origin-top-left">
                                <RealtimeInsightsCard />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="pt-28 md:pl-16">
                        <div className="md:pl-8 lg:pl-12">
                            <h3 className="f-neue-medium tracking-[-0.02em] text-lg md:text-[22px] mb-[15px]">
                                Global Phone Calls
                            </h3>

                            <p className="text-[#949494] text-sm md:text-[16px] tracking-[-0.02em] f-neue-regular max-w-[280px] lg:max-w-[391px]">
                                Make phone calls worldwide, directly through the platform,
                                without any hassle or additional apps.
                            </p>
                        </div>

                        <div className="flex justify-center items-center mt-8 md:mt-12">
                            {/* <img
                                src="/assets/global-phone-calls.svg"
                                alt="global-phone-calls"
                                loading="lazy"
                                className="scale-120 md:scale-100"
                            />  */}
                            <div className="w-full max-w-[348px] scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg:scale-100">
                                <GlobeCard />
                            </div>
                        </div>
                    </div>

                    {/* x-axis border  */}
                    {/* <img
                        src="/assets/x-border.png"
                        alt="border"
                        loading="lazy"
                        className="absolute top-1/2 bottom-1/2 left-0 right-0 w-full hidden md:block"
                    /> */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 w-full h-px bg-[#E7E7E7] hidden md:block" />

                    {/* y-axis border  */}
                    {/* <img
                        src="/assets/y-border.png"
                        alt="border"
                        loading="lazy"
                        className="opacity-100 absolute w-px top-0 bottom-0 left-1/2 -translate-x-1/2 h-full hidden md:block"
                    /> */}
                    <div className="absolute w-px top-0 bottom-0 left-1/2 -translate-x-1/2 h-full bg-[#E7E7E7] hidden md:block" />

                    {/* Star  */}
                    {/* <img
                        src="/assets/star-icon.svg"
                        alt="star-icon"
                        loading="lazy"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ml-[0.8px] hidden md:block"
                    /> */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ml-[0.8px] hidden md:block w-[11px] h-[11px]">
                        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
                            <path
                                d="M4.23268 0.698244C4.52735 -0.232747 5.84479 -0.232748 6.13945 0.698243L6.83253 2.88798C6.93075 3.19829 7.17384 3.44139 7.48416 3.53961L9.67389 4.23268C10.6049 4.52735 10.6049 5.84478 9.6739 6.13945L7.48416 6.83253C7.17384 6.93075 6.93075 7.17384 6.83253 7.48416L6.13946 9.67389C5.84479 10.6049 4.52735 10.6049 4.23268 9.67389L3.53961 7.48416C3.44139 7.17384 3.19829 6.93075 2.88798 6.83253L0.698244 6.13945C-0.232747 5.84478 -0.232749 4.52735 0.698243 4.23268L2.88798 3.53961C3.19829 3.44139 3.44139 3.19829 3.53961 2.88798L4.23268 0.698244Z"
                                fill="#BCD4FF"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PowerFeatures;
