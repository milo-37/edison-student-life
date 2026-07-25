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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/92 backdrop-blur-md border-b border-[#DCE5EC] shadow-sm shadow-[#0B5DB3]/5"
            : "bg-white/80 backdrop-blur-sm"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12"
          style={{ height: "64px" }}
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
              className="h-14 md:h-16 w-auto object-contain mix-blend-multiply transition-opacity duration-300"
              style={{ transform: "scale(1.4)", transformOrigin: "left center" }}
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`font-heading text-sm font-semibold tracking-wide transition-colors duration-200 underline-anim ${
                    pathname === item.href
                      ? "text-[#FF6B00]"
                      : "text-[#243142]/70 hover:text-[#0B5DB3]"
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
              className="font-heading text-xs font-bold tracking-[0.15em] uppercase bg-[#FF6B00] text-white px-5 py-2.5 hover:bg-[#E85F00] transition-colors duration-200 min-h-[44px] flex items-center rounded-lg shadow-sm shadow-[#FF6B00]/20"
              aria-label="Khám phá các câu lạc bộ"
            >
              KHÁM PHÁ CÁC CLB
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-[#243142] hover:text-[#FF6B00] transition-colors duration-200"
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
