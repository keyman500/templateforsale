import React from "react";

const PowerFeatures: React.FC = () => {
    return (
        <section
            className="pt-10 md:pt-20 lg:pt-[130px] px-4 overflow-hidden"
            id="features"
        >
            <div className="max-w-[1250px] w-full mx-auto">
                {/* Headeings  */}
                <div className="text-center lg:mb-12">
                    <h1 className="f-eightiescomeback mb-[15px] tracking-[-0.01em] text-2xl sm:text-[38px] leading-[30px] sm:leading-[43px]">
                        Unlock Telezen's Power Features
                    </h1>

                    <p className="text-[#7D7D7D] text-[14px] md:text-[16px] leading-5 sm:leading-[23px] tracking-[-0.01em] f-neue-regular">
                        Enhances communication and streamlines experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 relative gap-x-16 lg:gap-x-24">
                    {/* Card 1 */}
                    <div className="pt-20 pr-8 md:pr-16">
                        <div className="md:pl-8 lg:pl-12">
                            <h3 className="f-neue-medium tracking-[-0.02em] text-lg md:text-[22px] mb-[15px]">
                                Chat with AI Models
                            </h3>

                            <p className="text-[#949494] text-sm md:text-[16px] tracking-[-0.02em] f-neue-regular max-w-[280px] lg:max-w-[419px]">
                                Engage in intelligent conversations with advanced AI models,
                                offering personalized responses and support.
                            </p>
                        </div>

                        <div className="flex items-center justify-center w-full mx-auto ml-5 lg:ml-10">
                            <img
                                src="/assets/chat-with-ai-models.svg"
                                alt="chat-with-ai-moods"
                                loading="lazy"
                                className="scale-140"
                            />
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="pt-20 md:pl-16">
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
                            <img
                                src="/assets/integration-with-popular-services.svg"
                                alt="integration-with-popular-services"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="pt-28 pr-8 md:pr-16">
                        <div className="md:pl-8 lg:pl-12">
                            <h3 className="f-neue-medium tracking-[-0.02em] text-lg md:text-[22px] mb-[15px]">
                                Real-Time Dashboard Insights
                            </h3>

                            <p className="text-[#949494] text-sm md:text-[16px] tracking-[-0.02em] f-neue-regular max-w-[280px] lg:max-w-[352px]">
                                Get live, actionable insights with a dynamic dashboard that
                                updates in real time to keep you informed.
                            </p>
                        </div>

                        <div className="flex justify-start items-start mr-10  ">
                            <img
                                src="/assets/real-time-dashboard-insights.svg"
                                alt="real-time-dashboard-insights"
                                loading="lazy"
                                className="scale-140"
                            />
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

                        <div className="flex justify-center items-center mt-8 md:mt-12 ml-10">
                            <img
                                src="/assets/global-phone-calls.svg"
                                alt="global-phone-calls"
                                loading="lazy"
                                className="scale-120 md:scale-100"
                            />
                        </div>
                    </div>

                    {/* x-axix border  */}
                    <img
                        src="/assets/x-border.png"
                        alt="border"
                        loading="lazy"
                        className="absolute top-1/2 bottom-1/2 left-0 right-0 w-full hidden md:block"
                    />

                    {/* y-axis border  */}
                    <img
                        src="/assets/y-border.png"
                        alt="border"
                        loading="lazy"
                        className="opacity-100 absolute w-px top-0 bottom-0 left-1/2 -translate-x-1/2 h-full hidden md:block"
                    />

                    {/* Star  */}
                    <img
                        src="/assets/star-icon.svg"
                        alt="star-icon"
                        loading="lazy"
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 ml-[0.8px] hidden md:block"
                    />
                </div>
            </div>
        </section>
    );
};

export default PowerFeatures;
