"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
    href: string;
    label: string;
}

interface SocialItem {
    href: string;
    src: string;
    alt: string;
}

const FOOTER_NAV: NavItem[] = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#testimonials", label: "Testimonials" },
];

const SOCIALS_LEFT: SocialItem[] = [
    { href: "#", src: "/assets/odnoklassniki.svg", alt: "odnoklassniki" },
    { href: "#", src: "/assets/vkontakte.svg", alt: "vkontakte" },
    { href: "#", src: "/assets/telegram.svg", alt: "telegram" },
];

const SOCIALS_RIGHT: SocialItem[] = [
    { href: "#", src: "/assets/facebook.svg", alt: "facebook" },
    { href: "#", src: "/assets/instagram.svg", alt: "instagram" },
];

const LEGAL_LINKS: NavItem[] = [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
];

const Footer: React.FC = () => {
    return (
        <footer className="border-t border-[#045CFF1A] pt-7.5 pb-[15px] px-4 relative z-30">
            <div className="max-w-[1311px] mx-auto w-full">
                <div className="flex justify-between items-center flex-col sm:flex-row gap-6 mb-8 sm:mb-11">
                    <div className="text-center sm:text-start">
                        <Image
                            src="/assets/logo.svg"
                            alt="Telezen Logo"
                            width={172}
                            height={39}
                            className="sm:mx-0 mx-auto"
                        />

                        <p className="f-neue-regular text-[16px] sm:text-[18px] -tracking-[-2%] leading-[25px] text-[#8F9FA3] max-w-[377px] mt-[25px]">
                            The premier analytics platform, offering insights and solutions
                            for businesses of all sizes.
                        </p>
                    </div>

                    <ul className="flex gap-7.5 text-[#838383] f-neue-regular">
                        {FOOTER_NAV.map((item: NavItem) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="text-[16px] leading-[19px] hover:text-black transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-between sm:items-end flex-col sm:flex-row gap-y-6">
                    <div className="flex items-center sm:items-end flex-col sm:flex-row gap-5 sm:gap-3">
                        <div className="flex items-center sm:items-end gap-2.5">
                            <div className="flex flex-row sm:flex-col gap-2.5">
                                {SOCIALS_LEFT.map((s: SocialItem) => (
                                    <Link key={s.alt} href={s.href} className="hover:opacity-80 transition duration-300">
                                        <Image src={s.src} alt={s.alt} width={40} height={40} />
                                    </Link>
                                ))}
                            </div>

                            <div className="flex flex-row sm:flex-col gap-2.5">
                                {SOCIALS_RIGHT.map((s: SocialItem) => (
                                    <Link key={s.alt} href={s.href} className="hover:opacity-80 transition duration-300">
                                        <Image src={s.src} alt={s.alt} width={40} height={40} />
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <p className="text-[12px] leading-[17px] text-[#8F9FA3] mb-[11px] f-neue-regular">
                            © {new Date().getFullYear()} - All rights reserved by Telezen AI
                        </p>
                    </div>

                    <div className="sm:w-fit w-full justify-between flex items-center gap-5 md:gap-[87px]">
                        <div className="flex items-center gap-5 md:gap-7">
                            {LEGAL_LINKS.map((item: NavItem) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="f-neue-regular text-[12px] leading-[17px] text-[#8F9FA3] hover:text-black transition-all duration-300"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:opacity-80 transition duration-300">
                            <Image src='/assets/to-top.svg' alt="to-top" width={40} height={40} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
