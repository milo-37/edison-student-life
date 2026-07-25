"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

// Mobile: single featured image + decorative accent
// Desktop: collage composition
const mobileHeroImage = {
  src: "/images/clubs/truyen-thong/tt1.jpg",
  alt: "Học sinh THPT Edison hoạt động câu lạc bộ",
};

const desktopHeroImages = [
  { src: "/images/clubs/truyen-thong/tt1.jpg", alt: "Học sinh THPT Edison tại sự kiện câu lạc bộ", cls: "top-[4%] right-[2%] w-[36%] aspect-[3/4]" },
  { src: "/images/clubs/bong-ro/br1.jpg", alt: "Hoạt động thể thao THPT Edison", cls: "top-[40%] right-[23%] w-[26%] aspect-[4/5]" },
  { src: "/images/clubs/nhay-hien-dai/nhay.jpg", alt: "Biểu diễn nghệ thuật học sinh Edison", cls: "bottom-[6%] right-[2%] w-[30%] aspect-[3/4]" },
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: "90svh" }}
      aria-label="Edison Student Life - Trang chủ"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(160deg, #FFFFFF 0%, #F4F9FF 55%, #EAF4FF 100%)",
        }}
        aria-hidden="true"
      />
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg-light opacity-60" aria-hidden="true" />
      {/* Blue glow top-right */}
      <div
        className="absolute top-0 right-0 w-[60%] h-[50%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top right, rgba(11,93,179,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      {/* Orange glow top-left (subtle) */}
      <div
        className="absolute top-0 left-0 w-[40%] h-[30%] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(255,107,0,0.05) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ── Desktop image collage ── */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        {desktopHeroImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 1.06, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`absolute ${img.cls} overflow-hidden shadow-xl shadow-[#0B5DB3]/10`}
            style={{ borderRadius: i % 2 === 0 ? "12px" : "16px" }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 0vw, (max-width: 1200px) 40vw, 35vw"
                priority={i === 0}
              />
              {/* Light image overlay */}
              <div className="absolute inset-0 bg-[#0B5DB3]/5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 flex flex-col" style={{ paddingTop: "80px", paddingBottom: "48px", minHeight: "90svh" }}>
        <div className="flex-1 flex flex-col justify-center max-w-xl lg:max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="section-label mb-5"
          >
            THPT Edison
          </motion.p>

          {/* Main heading */}
          <div className="overflow-hidden mb-1">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-[#0B5DB3] leading-none tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 12vw, 8rem)" }}
            >
              EDISON
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black leading-none tracking-tight"
              style={{
                fontSize: "clamp(3.2rem, 12vw, 8rem)",
                color: "transparent",
                WebkitTextStroke: "2px rgba(11,93,179,0.15)",
              }}
              aria-hidden="true"
            >
              STUDENT LIFE
            </motion.div>
          </div>

          {/* Subheading */}
          <div className="space-y-0 mb-5">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold leading-tight text-[#084A91]"
                style={{ fontSize: "clamp(1.7rem, 5vw, 3.2rem)" }}
              >
                EXPLORE YOUR
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading font-bold leading-tight text-[#FF6B00]"
                style={{ fontSize: "clamp(1.7rem, 5vw, 3.2rem)" }}
              >
                PASSION.
              </motion.p>
            </div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="font-body text-base text-[#243142]/65 leading-relaxed max-w-sm mb-7"
            style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}
          >
            Khám phá 9 câu lạc bộ, đam mê và khoảnh khắc tạo nên một tuổi trẻ đáng nhớ tại THPT Edison.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.65 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/clubs"
              className="inline-flex items-center justify-center font-heading text-sm font-bold tracking-[0.12em] uppercase bg-[#FF6B00] text-white px-7 py-4 hover:bg-[#E85F00] transition-colors duration-200 min-h-[52px] rounded-lg shadow-md shadow-[#FF6B00]/25 w-full sm:w-auto"
            >
              KHÁM PHÁ CÂU LẠC BỘ
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center font-heading text-sm font-semibold text-[#0B5DB3] hover:text-[#084A91] border border-[#0B5DB3]/25 hover:border-[#0B5DB3]/50 bg-white/60 hover:bg-white px-7 py-4 transition-all duration-200 min-h-[52px] rounded-lg w-full sm:w-auto"
            >
              XEM GALLERY
            </Link>
          </motion.div>
        </div>

        {/* ── Mobile hero image ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="md:hidden mt-10 relative"
          aria-hidden="true"
        >
          {/* Main image */}
          <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-[#0B5DB3]/15">
            <Image
              src={mobileHeroImage.src}
              alt={mobileHeroImage.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 0vw"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(11,93,179,0.15), transparent 60%)" }}
            />
          </div>

          {/* Decorative pill — overlapping bottom-right */}
          <div className="absolute -bottom-3 right-4 bg-white rounded-full px-4 py-2 shadow-lg shadow-[#0B5DB3]/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FF6B00] inline-block" />
            <span className="font-heading text-xs font-bold text-[#0B5DB3] tracking-wide">09 CLBs</span>
          </div>

          {/* Decorative number — overlapping top-left */}
          <div className="absolute -top-4 -left-1 font-heading font-black text-[#0B5DB3]/8 leading-none select-none"
            style={{ fontSize: "5rem" }}>
            9
          </div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-[#243142]/30"
          aria-hidden="true"
        >
          <span className="font-heading text-[10px] tracking-[0.25em] uppercase font-bold">Scroll</span>
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </div>

      {/* ── Section bridge to Introduction ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #F4F9FF)" }}
        aria-hidden="true"
      />
    </section>
  );
}
