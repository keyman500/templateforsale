import Image from "next/image";
import { BorderBeam } from "./ui/border-beam";
import { Button } from "./ui/button";
import { Marquee } from "./ui/marquee";
import dashboardImage from "@/public/assets/admin-dashboard.webp";
import RightShadow from "./right-shadow/right-shadow";
import LeftShadow from "./left-shadow/left-shadow";

const Hero: React.FC  = () => {
    return (
        <div className="pt-24 px-4 relative overflow-hidden">
            <div>
                {/* Content */}
                <div className="relative z-40 mx-auto flex items-center justify-center flex-col">
                    <div className="relative inline-flex h-[31px] items-center justify-center px-6 rounded-full border border-[#045CFF]/10 bg-white overflow-hidden">
                        <BorderBeam 
                            size={60}
                            duration={20}
                            colorFrom="#045CFF"
                            colorTo="transparent"
                            borderWidth={0.5}
                            className="opacity-50 blur-sm"
                            initialOffset={0}
                        />
                        <h3 className="f-neue-regular tracking-[-0.14px] text-nowrap text-[14px] leading-[17px] text-[#045CFF] relative z-10">
                            Feel the future of AI communication.
                        </h3>
                    </div>

                    <h1 className="text-[32px] sm:text-[48px] leading-10 sm:leading-[54px] tracking-[-0.48px] f-eightiescomeback text-center mt-5 mb-7.5">
                        Seamless Conversations,{" "}
                        <span className="block text-[#045CFF]">Anytime, anywhere.</span>
                    </h1>

                    <p className="max-w-[325px] mx-auto text-center text-[16px] leading-[23px] tracking-[-0.01em] text-[#7D7D7D] f-neue-regular">
                        Talk to an AI chatbot anytime, anywhere, smart, seamless, and always
                        available.
                    </p>

                    {/* btns */}
                    <div className="mt-5 flex items-center justify-center gap-2.5">
                        <Button className="h-[39px] px-7.5 bg-[#045CFF] rounded-[10px] text-white f-neue-medium text-[16px] leading-[19px] tracking-[-0.02em]">
                            Get Started
                        </Button>

                        <Button variant="outline" className="h-[39px] px-[27.5px] bg-white/10 rounded-[10px] text-[#7D7D7D] f-neue-medium border border-[#E4E4E4] text-[16px] leading-[19px] tracking-[-0.02em]">
                            View Pricing
                        </Button>
                    </div>
                </div>

                {/* Dashboard  */}
                <div className="pt-8 sm:pt-[60px] max-w-[1090px] mx-auto rounded-[20px] relative z-20">
                    <div className="absolute top-0 right-3 md:right-16 lg:right-[150px]">
                        <svg
                            width="611"
                            height="64"
                            className="sm:w-[611px] w-[300px] h-8 sm:h-16"
                            viewBox="0 0 611 64"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M167 0V22.5C167 30.7843 173.716 37.5 182 37.5H595.5C603.784 37.5 610.5 44.2157 610.5 52.5V63"
                                stroke="#CDDFFF"
                            />
                            <path
                                d="M155.5 0V22C155.5 30.2843 148.784 37 140.5 37H15.5C7.21573 37 0.5 43.7157 0.5 52V63.5"
                                stroke="#CDDFFF"
                            />
                        </svg>
                    </div>

                    <Image
                        src={dashboardImage}
                        alt="admin-dashboard"
                        className="w-full"
                        style={{ boxShadow: "0px -27px 250px 0px #045CFF1A" }}
                        priority
                    />
                </div>

                {/* Brands  */}
                <div className="z-40 mb-[34px] relative">
                    <p className="text-[#B0B0B0] text-[18px] leading-[22px] text-center tracking-[-0.02em] f-neue-regular mb-10">
                        Trusted by mid-market and enterprise leaders
                    </p>

                    <div className="relative flex w-full items-center justify-center overflow-hidden max-w-[280px] sm:max-w-[480px] md:max-w-[700px] lg:max-w-[900px] mx-auto">
                        <Marquee pauseOnHover repeat={5} className="[--duration:25s] [--gap:2.5rem] md:[--gap:4.375rem]">
                            {[
                                { src: "/assets/adeaolabs.svg", alt: "AdeaoLab Logo", width: 120, height: 40 },
                                { src: "/assets/kintsugi.svg", alt: "Kintsugi Logo", width: 120, height: 40 },
                                { src: "/assets/stacked-lab.svg", alt: "StackedLab Logo", width: 120, height: 40 },
                                { src: "/assets/magnolia.svg", alt: "Mangnolia Logo", width: 120, height: 40 },
                                { src: "/assets/warpspeed.svg", alt: "Warspeed Logo", width: 120, height: 40 },
                            ].map((logo, index) => (
                                <Image key={index} src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} className="shrink-0 h-8 sm:h-10 w-auto" />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>

            {/* Left Block */}
            <LeftShadow />

            {/* Right Block */}
            <RightShadow />

            {/* left line */}
            <svg
                width="350"
                height="380"
                className="absolute top-[520px] left-0 z-10 sm:block hidden"
                viewBox="0 0 350 380"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M1000.5 0.5H136C127.716 0.5 121 7.21573 121 15.5V364C121 372.284 114.284 379 106 379H0"
                    stroke="#CDDFFF"
                />
            </svg>

            {/* right line */}
            <svg
                width="351"
                height="391"
                className="absolute top-[306px] right-0 z-10 sm:block hidden"
                viewBox="-140 0 351 391"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M-140 390H51.5C59.7843 390 66.5 383.284 66.5 375V15.5C66.5 7.21573 73.2157 0.5 81.5 0.5H211"
                    stroke="#CDDFFF"
                />
            </svg>

            {/* Overlay */}
            <img
                src="/assets/dashboard-bottom-shadow.svg"
                alt="dashboard-bottom-shadow"
                loading="lazy"
                className="absolute w-full max-w-[1400px] h-[200px] sm:min-h-[423px] bottom-0 left-0 right-0 mx-auto z-20"
            />

            {/* Bottom line */}
            <svg
                width="1359"
                height="423"
                className="absolute bottom-0 right-0 2xl:right-20 z-19 block "
                viewBox="0 0 1359 423"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M200.5 0.5H15.5C7.21573 0.5 0.5 7.21573 0.5 15.5V407.5C0.5 415.784 7.21573 422.5 15.5 422.5H1359.5"
                    stroke="#E7E7E7"
                />
            </svg>
        </div>
    );
};

export default Hero;
