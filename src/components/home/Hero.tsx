"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const heroImages = [
  { src: "/images/clubs/truyen-thong/tt1.jpg", alt: "Học sinh THPT Edison tại sự kiện câu lạc bộ", cls: "top-[5%] right-[2%] w-[38%] aspect-[3/4]" },
  { src: "/images/clubs/bong-ro/br1.jpg", alt: "Hoạt động thể thao THPT Edison", cls: "top-[38%] right-[22%] w-[28%] aspect-[4/5]" },
  { src: "/images/clubs/nhay-hien-dai/nhay.jpg", alt: "Biểu diễn nghệ thuật học sinh Edison", cls: "bottom-[8%] right-[3%] w-[32%] aspect-[3/4]" },
  { src: "/images/clubs/truyen-thong/tt2.jpg", alt: "Câu lạc bộ truyền thông THPT Edison", cls: "top-[55%] right-[38%] w-[22%] aspect-square hidden lg:block" },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-slate-50"
      aria-label="Edison Student Life - Trang chủ"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden="true" />
      <div className="absolute inset-0 orange-glow-light" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-100/80" aria-hidden="true" />

      {/* Hero images - collage on right (desktop) */}
      <div className="absolute inset-0 hidden md:block" aria-hidden="true">
        {heroImages.map((img, i) => (
          <motion.div
            key={img.src}
            initial={{ opacity: 0, scale: 1.06, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`absolute ${img.cls} overflow-hidden shadow-xl shadow-navy/5`}
            style={{ borderRadius: i % 2 === 0 ? "4px" : "8px" }}
          >
            <div className="relative w-full h-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 0vw, 35vw"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-navy/5" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12 pt-28 pb-20">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Main heading */}
          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-navy leading-none tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 11vw, 8.5rem)" }}
            >
              EDISON
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.div
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-black text-navy/5 leading-none tracking-tight"
              style={{ fontSize: "clamp(3.2rem, 11vw, 8.5rem)" }}
              aria-hidden="true"
            >
              STUDENT LIFE
            </motion.div>
          </div>

          {/* Subheading lines */}
          <div className="space-y-1 mb-6">
            {(["EXPLORE YOUR", "PASSION."] as const).map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.p
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`font-heading font-bold leading-tight ${i === 1 ? "text-orange" : "text-navy"}`}
                  style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
                >
                  {line}
                </motion.p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-body text-sm text-navy/40 tracking-widest mb-2 font-medium"
          >
            Khám phá • Kết nối • Trải nghiệm
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="font-body text-base text-navy/70 leading-relaxed max-w-md mb-10"
          >
            Khám phá những câu lạc bộ, đam mê và khoảnh khắc tạo nên một tuổi trẻ đáng nhớ tại THPT Edison.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/clubs"
              className="inline-flex items-center justify-center font-heading text-sm font-bold tracking-[0.15em] uppercase bg-orange text-white px-8 py-4 hover:bg-orange/90 transition-colors duration-200 min-h-[52px] rounded-sm shadow-sm"
            >
              KHÁM PHÁ CÂU LẠC BỘ
            </Link>
            <Link
              href="/gallery"
              className="inline-flex items-center justify-center font-heading text-sm font-semibold text-navy hover:text-orange border border-navy/10 hover:border-orange px-8 py-4 transition-all duration-200 min-h-[52px] rounded-sm"
            >
              XEM GALLERY
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy/40"
        aria-hidden="true"
      >
        <span className="font-heading text-[10px] tracking-[0.25em] uppercase font-bold">
          Scroll to Discover
        </span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
