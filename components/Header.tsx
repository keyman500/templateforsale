"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import useScroll from "@/lib/use-scroll";
import { cn} from "@/lib/utils";

interface NavItem {
  href: string;
  label: string;
}

const NAV_LINKS: NavItem[] = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Testimonials" },
];

const CONTACT: NavItem = { label: "Contact Us", href: "#contact" };

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuMounted, setIsMenuMounted] = useState(false);
  const scrolled = useScroll(15);

  const openMenu = () => {
    setIsMenuMounted(true);
    requestAnimationFrame(() => setIsMenuOpen(true));
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setTimeout(() => setIsMenuMounted(false), 250);
  };

  const toggleMenu = () => {
    if (isMenuMounted) {
      closeMenu();
    } else {
      openMenu();
    }
  };

  useEffect(() => {
    const mediaQuery: MediaQueryList = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = () => {
      setIsMenuOpen(false);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    handleMediaQueryChange();

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isMenuMounted) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isMenuMounted]);

  return (
    <header
      className={cn(
        "fixed inset-x-3 top-4 z-50 mx-auto flex max-w-6xl transform-gpu animate-slide-down-fade justify-center overflow-hidden rounded-xl border border-transparent px-3 py-3 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1.03)] will-change-transform",
        isMenuOpen === true ? "h-52" : "h-16",
        scrolled || isMenuOpen === true
          ? "backdrop-blur-nav max-w-3xl border-gray-100 bg-white/80 shadow-xl shadow-black/5 dark:border-white/15 dark:bg-black/70"
          : "bg-white/0 dark:bg-gray-950/0",
      )}
    >
      <div className="w-full md:my-auto">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/assets/logo.svg" alt="logo" width={135} height={31} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:absolute md:left-1/2 md:top-1/2 md:block md:-translate-x-1/2 md:-translate-y-1/2 md:transform">
            <div className="flex items-center gap-[30px] font-medium">
              {NAV_LINKS.map((item: NavItem) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#7D7D7D] hover:text-black transition-colors -tracking-[-0.32px] text-[16px] leading-[19px] f-neue-medium"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <Link
              href={CONTACT.href}
              className="border border-[#E4E4E4] h-[39px] flex items-center justify-center px-7.5 text-[#7D7D7D] -tracking-[-0.32px] text-[16px] leading-[19px] f-neue-medium rounded-[10px] hover:text-black transition-colors duration-300"
            >
              {CONTACT.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden aspect-square p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-gray-600" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <nav
          className={cn(
            "my-6 flex text-lg ease-in-out will-change-transform md:hidden",
            isMenuOpen ? "" : "hidden",
          )}
        >
          <ul className="space-y-4 font-medium">
            {NAV_LINKS.map((item: NavItem) => (
              <li key={item.href} onClick={closeMenu}>
                <Link 
                  href={item.href}
                  className="text-[#7D7D7D] hover:text-black transition-colors -tracking-[-0.32px] text-[16px] leading-[19px] f-neue-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li onClick={closeMenu}>
              <Link 
                href={CONTACT.href}
                className="text-[#7D7D7D] hover:text-black transition-colors -tracking-[-0.32px] text-[16px] leading-[19px] f-neue-medium"
              >
                {CONTACT.label}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
