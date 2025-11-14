"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Tab {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
    image: string;
}

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M0.75 11.25C4.46429 10.3214 6.32143 8.46429 7.25 4.75C8.17857 8.46429 10.0357 10.3214 13.75 11.25C10.0357 12.1786 8.17857 14.0357 7.25 17.75C6.32143 14.0357 4.46429 12.1786 0.75 11.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M10.75 4.25C12.75 3.75 13.75 2.75 14.25 0.75C14.75 2.75 15.75 3.75 17.75 4.25C15.75 4.75 14.75 5.75 14.25 7.75C13.75 5.75 12.75 4.75 10.75 4.25Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M11.25 17C12.25 16.75 12.75 16.25 13 15.25C13.25 16.25 13.75 16.75 14.75 17C13.75 17.25 13.25 17.75 13 18.75C12.75 17.75 12.25 17.25 11.25 17Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);

const SettingsIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        width="18"
        height="20"
        viewBox="0 0 18 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M11.3764 9.73462C11.3764 11.0832 10.2829 12.1765 8.93407 12.1765C7.58521 12.1765 6.49174 11.0832 6.49174 9.73462C6.49174 8.38602 7.58521 7.29276 8.93407 7.29276C10.2829 7.29276 11.3764 8.38602 11.3764 9.73462Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
        <path
            d="M6.09596 2.42714C6.64297 1.81183 6.91647 1.50417 7.19156 1.30788C8.23413 0.563963 9.634 0.563963 10.6766 1.30788C10.9517 1.50417 11.2252 1.81183 11.7722 2.42714C11.946 2.62266 12.0329 2.72042 12.1256 2.80837C12.4688 3.13388 12.8841 3.37363 13.3377 3.50804C13.4602 3.54435 13.5884 3.57073 13.8447 3.62349C14.6504 3.7893 15.0533 3.8722 15.3604 4.01193C16.5271 4.54276 17.2277 5.75624 17.104 7.03209C17.0715 7.36794 16.9419 7.75802 16.6828 8.53817C16.6004 8.78622 16.5593 8.91025 16.5294 9.03442C16.419 9.49468 16.419 9.97455 16.5294 10.4348C16.5593 10.559 16.6004 10.683 16.6828 10.9311C16.9419 11.7112 17.0715 12.1013 17.104 12.4371C17.2277 13.713 16.5271 14.9265 15.3604 15.4573C15.0533 15.597 14.6504 15.6799 13.8447 15.8457C13.5884 15.8985 13.4602 15.9249 13.3377 15.9612C12.8841 16.0956 12.4688 16.3354 12.1256 16.6609C12.0329 16.7488 11.946 16.8466 11.7722 17.0421C11.2252 17.6574 10.9517 17.9651 10.6766 18.1614C9.634 18.9053 8.23413 18.9053 7.19156 18.1614C6.91647 17.9651 6.64297 17.6574 6.09596 17.0421C5.92215 16.8466 5.83524 16.7488 5.74251 16.6609C5.39931 16.3354 4.98399 16.0956 4.53047 15.9612C4.40793 15.9249 4.27975 15.8985 4.02339 15.8457C3.21771 15.6799 2.81488 15.597 2.50775 15.4573C1.341 14.9265 0.640405 13.713 0.764097 12.4371C0.796657 12.1013 0.926207 11.7112 1.18531 10.9311C1.26769 10.683 1.30888 10.559 1.33868 10.4348C1.44916 9.97456 1.44916 9.49468 1.33868 9.03442C1.30888 8.91025 1.26769 8.78622 1.18531 8.53817C0.926207 7.75802 0.796657 7.36794 0.764097 7.03209C0.640405 5.75624 1.341 4.54276 2.50775 4.01193C2.81488 3.8722 3.21772 3.7893 4.02339 3.62349C4.27975 3.57073 4.40793 3.54435 4.53047 3.50804C4.98399 3.37363 5.39931 3.13388 5.74251 2.80837C5.83524 2.72042 5.92215 2.62266 6.09596 2.42714Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
        />
    </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M1.7751 1.77473L1.24487 1.24429H1.24487L1.7751 1.77473ZM6.72484 1.77473L7.25507 1.24429L6.72484 1.77473ZM6.72484 6.72254L6.19462 6.19211L6.72484 6.72254ZM12.7353 12.7306L12.205 12.2002L12.7353 12.7306ZM17.685 17.6784L17.1548 17.148L17.685 17.6784ZM5.31063 14.1443L4.7804 14.6747L5.31063 14.1443ZM0.768502 4.60928L1.51849 4.60502C1.51835 4.58076 1.51704 4.55652 1.51455 4.53239L0.768502 4.60928ZM14.8493 18.6846L14.9262 17.9386C14.9021 17.9361 14.8778 17.9348 14.8536 17.9346L14.8493 18.6846ZM4.80556 7.70316L4.68717 6.96257C4.44725 7.00092 4.24078 7.15312 4.13315 7.37095C4.02553 7.58877 4.0301 7.84524 4.14541 8.0591L4.80556 7.70316ZM11.7542 14.6491L11.3985 15.3094C11.6124 15.4246 11.8688 15.4291 12.0865 15.3215C12.3043 15.2139 12.4565 15.0075 12.4948 14.7676L11.7542 14.6491ZM1.7751 1.77473L2.30532 2.30516C3.37929 1.23161 5.12065 1.23161 6.19462 2.30516L6.72484 1.77473L7.25507 1.24429C5.59536 -0.414764 2.90457 -0.414764 1.24487 1.24429L1.7751 1.77473ZM6.72484 1.77473L6.19462 2.30516C7.26842 3.37854 7.26842 5.11872 6.19462 6.19211L6.72484 6.72254L7.25507 7.25297C8.91494 5.59376 8.91494 2.90351 7.25507 1.24429L6.72484 1.77473ZM12.7353 12.7306L13.2655 13.261C14.3394 12.1875 16.0808 12.1875 17.1548 13.261L17.685 12.7306L18.2152 12.2002C16.5555 10.5411 13.8647 10.5411 12.205 12.2002L12.7353 12.7306ZM17.685 12.7306L17.1548 13.261C18.2286 14.3344 18.2286 16.0746 17.1548 17.148L17.685 17.6784L18.2152 18.2089C19.8751 16.5496 19.8751 13.8594 18.2152 12.2002L17.685 12.7306ZM5.31063 14.1443L5.84086 13.6138C3.01501 10.7891 1.53432 7.3946 1.51849 4.60502L0.768502 4.60928L0.0185138 4.61354C0.0370781 7.88444 1.74288 11.6384 4.7804 14.6747L5.31063 14.1443ZM0.768502 4.60928L1.51455 4.53239C1.43247 3.73599 1.69641 2.91383 2.30532 2.30516L1.7751 1.77473L1.24487 1.24429C0.303167 2.18563 -0.10395 3.45975 0.0224538 4.68617L0.768502 4.60928ZM17.685 17.6784L17.1548 17.148C16.5458 17.7567 15.7232 18.0206 14.9262 17.9386L14.8493 18.6846L14.7725 19.4307C15.9991 19.557 17.2735 19.1502 18.2152 18.2089L17.685 17.6784ZM14.8493 18.6846L14.8536 17.9346C12.0626 17.9188 8.66668 16.4386 5.84086 13.6138L5.31063 14.1443L4.7804 14.6747C7.81794 17.711 11.5732 19.4161 14.8451 19.4346L14.8493 18.6846ZM6.72484 6.72254L6.19462 6.19211C5.76841 6.61815 5.2391 6.87434 4.68717 6.96257L4.80556 7.70316L4.92395 8.44376C5.77734 8.30734 6.59801 7.90978 7.25507 7.25297L6.72484 6.72254ZM7.7855 11.6704L8.31573 11.1399C7.12778 9.95243 6.17281 8.65865 5.46572 7.34722L4.80556 7.70316L4.14541 8.0591C4.9238 9.50278 5.96739 10.9134 7.25528 12.2008L7.7855 11.6704ZM11.7542 14.6491L12.4948 14.7676C12.5831 14.2161 12.8393 13.6871 13.2655 13.261L12.7353 12.7306L12.205 12.2002C11.548 12.857 11.1502 13.6774 11.0137 14.5307L11.7542 14.6491ZM11.7542 14.6491L12.11 13.9889C10.798 13.282 9.50368 12.3274 8.31573 11.1399L7.7855 11.6704L7.25528 12.2008C8.54316 13.4882 9.95432 14.5313 11.3985 15.3094L11.7542 14.6491Z"
            fill="currentColor"
        />
    </svg>
);

const WorkflowProcess: React.FC = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const tabs: Tab[] = [
        {
            id: "select-model",
            icon: <StarIcon className="w-5 h-5" />,
            title: "Select AI Model",
            description: "Choose the AI model that best suits your needs.",
            image: "/assets/ai-modals.svg",
        },
        {
            id: "integrate",
            icon: <SettingsIcon className="w-5 h-5" />,
            title: "Integrate Services",
            description: "Connect with popular platforms like Notion and Supbase",
            image: "/assets/integration-with-popular-services.svg",
        },
        {
            id: "phone-calls",
            icon: <PhoneIcon className="w-5 h-5" />,
            title: "Phone Calls on Your Behalf",
            description: "Let agents make global calls for you",
            image: "/assets/global-phone-calls.svg",
        },
    ];

    // Auto-cycle through tabs every 4 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveTabIndex((prevIndex) => (prevIndex + 1) % tabs.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [tabs.length]);

    return (
        <section className="px-4">
            <div className="max-w-[1201px] w-full mx-auto">
                {/* Headings */}
                <div className="mb-12 md:mb-16 text-center">
                    <h1 className="f-eightiescomeback mb-[15px] tracking-[-0.01em] text-2xl sm:text-[38px] leading-[30px] sm:leading-[43px]">
                        Simplified Workflow Process
                    </h1>

                    <p className="text-[#7D7D7D] text-[14px] md:text-[16px] leading-5 sm:leading-[23px] tracking-[-0.01em] f-neue-regular">
                        Getting started is simple. Here&apos;s how to manage your workflow
                    </p>
                </div>

                {/* Complete Rectangle Container */}
                <div className="border border-[#EBEBEB] rounded-[20px] overflow-hidden">
                    <div className="flex items-stretch flex-col md:flex-row md:h-[500px]">
                        {/* Left Side - Tabs */}
                        <div className="md:max-w-[421px] w-full border-r-0 md:border-r border-[#EBEBEB] flex flex-col">
                            {tabs.map((tab, idx) => (
                                <div 
                                    key={tab.id} 
                                    className="w-full text-left p-5 md:p-8 border-b border-[#EBEBEB] last:border-b-0 md:border-b-0 cursor-pointer transition-all hover:bg-gray-50 flex-1 flex items-center"
                                    onClick={() => setActiveTabIndex(idx)}
                                >
                                    <div className="flex items-start flex-col gap-1">
                                        <div className="flex items-center gap-1.5">
                                            <div className={`w-5 h-5 ${idx === activeTabIndex ? "text-[#045CFF]" : "text-[#A9A9A9]"}`}>
                                                {tab.icon}
                                            </div>
                                            <h3 className={`text-base md:text-lg f-neue-medium -tracking-[2%] ${idx === activeTabIndex ? "text-[#045CFF]" : "text-[#A9A9A9]"}`}>
                                                {tab.title}
                                            </h3>
                                        </div>
                                        <p className={`text-sm -tracking-[1%] f-neue-regular ${idx === activeTabIndex ? "text-[#5E5E5E]" : "text-[#A9A9A9]"}`}>
                                            {tab.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Side - Image */}
                        <div className="flex-1 flex justify-center items-center p-8 md:p-12 min-h-[300px]">
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image 
                                    src={tabs[activeTabIndex].image} 
                                    alt={tabs[activeTabIndex].title} 
                                    width={600}
                                    height={600}
                                    className="w-auto h-auto max-w-full max-h-full object-contain transition-opacity duration-300" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkflowProcess;
