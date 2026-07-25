"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useEffect } from "react";
import { siteConfig } from "@/data/site";
import { clubs } from "@/data/clubs";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}

export function MobileMenu({ isOpen, onClose, pathname }: MobileMenuProps) {
  // Lock scroll when menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Keyboard close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#243142]/20 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu điều hướng"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0, 0.67, 0] }}
            className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white border-l border-[#DCE5EC] flex flex-col shadow-2xl shadow-[#0B5DB3]/10"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#DCE5EC]">
              <div>
                <p className="font-heading text-[10px] font-semibold tracking-[0.2em] text-[#FF6B00] uppercase">
                  THPT Edison
                </p>
                <p className="font-heading text-base font-bold text-[#0B5DB3]">
                  STUDENT LIFE
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex items-center justify-center w-11 h-11 text-[#687384] hover:text-[#0B5DB3] transition-colors rounded-lg hover:bg-[#F4F9FF]"
                aria-label="Đóng menu"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 overflow-y-auto px-6 py-6">
              <ul className="space-y-1" role="list">
                {siteConfig.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 + 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={`block font-heading text-2xl font-bold py-3.5 border-b border-[#DCE5EC]/60 transition-colors duration-200 ${
                        pathname === item.href
                          ? "text-[#FF6B00]"
                          : "text-[#243142] hover:text-[#0B5DB3]"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Club quick links */}
              <div className="mt-8">
                <p className="section-label mb-4">Câu lạc bộ</p>
                <ul className="space-y-0" role="list">
                  {clubs.map((club, i) => (
                    <motion.li
                      key={club.slug}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.035 + 0.25 }}
                    >
                      <Link
                        href={`/clubs/${club.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-3 py-2.5 border-b border-[#DCE5EC]/40 text-[#243142]/70 hover:text-[#0B5DB3] transition-colors duration-200"
                      >
                        <span className="font-heading text-xs font-bold text-[#FF6B00] w-8 shrink-0">
                          {club.number}
                        </span>
                        <span className="font-heading text-sm font-semibold">
                          {club.name.replace("Câu lạc bộ ", "")}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </nav>

            {/* Bottom CTA */}
            <div className="px-6 py-5 border-t border-[#DCE5EC]">
              <Link
                href="/clubs"
                onClick={onClose}
                className="block w-full text-center font-heading text-sm font-bold tracking-[0.15em] uppercase bg-[#FF6B00] text-white px-5 py-4 hover:bg-[#E85F00] transition-colors duration-200 min-h-[52px] flex items-center justify-center rounded-lg shadow-sm shadow-[#FF6B00]/20"
              >
                KHÁM PHÁ CÂU LẠC BỘ
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
