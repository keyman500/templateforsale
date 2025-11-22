'use client';

import Link from "next/link";
import { CountingNumber } from "@/components/animate-ui/primitives/texts/counting-number";
import { Button } from "./ui/button";
import FooterRightShadow from "./footer-right-shadow/footer-right-shadow";
import FooterLeftShadow from "./footer-left-shadow/footer-left-shadow";

const JoinRevolution: React.FC = () => {
    return (
        <section className="relative sm:pt-[120px] md:pt-[205px] pb-20 md:pb-[150px] text-center p-4">
            <div className="max-w-[486px] mx-auto relative z-30">
                <h2 className="text-center f-eightiescomeback -tracking-[-0.38px] text-2xl md:text-[38px]">
                    Join the AI Revolution
                </h2>

                <div className="flex flex-row justify-center flex-wrap items-start gap-5 sm:gap-6 my-[33px]">
                    {/* Metric 1 */}
                    <div>
                        <h3 className="text-[22px] sm:text-[26px] leading-[29px] mb-1.5 tracking-[-1.04px] f-neue-medium">
                            <CountingNumber
                                number={300}
                                fromNumber={0}
                                duration={2.5}
                                delay={0}
                                suffix="%"
                            />
                        </h3>
                        <p className="text-[12px] sm:text-[14px] leading-4 text-[#A0A0A0] tracking-[-0.14px] f-neue-regular">
                            Increase in task efficiency,<br />on average
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-[#F3F3F3] my-auto"></div>

                    {/* Metric 2 */}
                    <div>
                        <h3 className="text-[22px] sm:text-[26px] leading-[29px] mb-1.5 tracking-[-1.04px] f-neue-medium">
                            <CountingNumber
                                number={4}
                                fromNumber={0}
                                duration={2.5}
                                delay={0.2}
                                suffix="X"
                            />
                        </h3>
                        <p className="text-[12px] sm:text-[14px] leading-4 text-[#A0A0A0] tracking-[-0.14px] f-neue-regular">ROI Guarantee</p>
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-10 bg-[#F3F3F3] my-auto"></div>

                    {/* Metric 3 */}
                    <div>
                        <h3 className="text-[22px] sm:text-[26px] leading-[29px] mb-1.5 tracking-[-1.04px] f-neue-medium">
                            <CountingNumber
                                number={90}
                                fromNumber={0}
                                duration={2.5}
                                delay={0.4}
                                suffix="%"
                            />
                        </h3>
                        <p className="text-[12px] sm:text-[14px] leading-4 text-[#A0A0A0] tracking-[-0.14px] f-neue-regular">
                            Average reduction in<br />response time
                        </p>
                    </div>
                </div>

                <Button asChild
                    className="inline-block bg-[#045CFF] hover:bg-blue-700 text-white tracking-[-0.32px] text-[16px] leading-[19px] f-neue-medium px-7.5 py-2.5 rounded-[10px] transition-colors duration-300">
                    <Link
                        href="#"
                    >
                        Get Started Now
                    </Link>
                </Button>
            </div>

            {/* Shadow 01 */}
            <FooterLeftShadow className="absolute left-0 -bottom-20 z-0 md:block hidden w-[250px] h-[406px] lg:w-[499px] lg:h-[813px]" />

            {/* Shadow 02 */}
            <FooterRightShadow className="absolute right-0 -bottom-20 z-0 md:block hidden w-[250px] h-[406px] lg:w-[499px] lg:h-[813px]" />

            {/* Shadow 03 */}
            <div>
                <img src="/assets/opacity-shadow.svg" alt="shadow-opacity" loading="lazy" className="absolute right-0 left-0 w-full -bottom-20 z-20 md:block hidden" />
            </div>
        </section>
    );
};

export default JoinRevolution;
