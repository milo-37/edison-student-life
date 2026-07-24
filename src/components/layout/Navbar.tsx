"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { siteConfig } from "@/data/site";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isDarkHero = pathname.startsWith('/clubs');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-navy/5 shadow-sm shadow-navy/5"
            : "bg-transparent"
          }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12 py-4"
          aria-label="Điều hướng chính"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            aria-label="Edison Student Life - Về trang chủ"
          >
            <img
              src="/images/branding/logo.jpg"
              alt="Edison Logo"
              className={`h-16 md:h-20 w-auto object-contain scale-150 md:scale-[1.75] origin-left transition-all duration-300 ${!scrolled && isDarkHero ? "rounded-lg shadow-md" : "mix-blend-multiply"
                }`}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-heading text-sm font-semibold tracking-wide transition-colors duration-200 underline-anim ${pathname === item.href
                      ? "text-orange"
                      : !scrolled && isDarkHero
                        ? "text-white/90 hover:text-white"
                        : "text-navy/70 hover:text-navy"
                    }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/clubs"
              className="font-heading text-xs font-bold tracking-[0.15em] uppercase bg-orange text-white px-5 py-2.5 hover:bg-orange/90 transition-colors duration-200 min-h-[44px] flex items-center rounded-sm shadow-sm"
              aria-label="Khám phá các câu lạc bộ"
            >
              KHÁM PHÁ CÁC CLB
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`md:hidden flex items-center justify-center w-11 h-11 transition-colors duration-200 ${!scrolled && isDarkHero ? "text-white hover:text-orange" : "text-navy hover:text-orange"
              }`}
            aria-label="Mở menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
