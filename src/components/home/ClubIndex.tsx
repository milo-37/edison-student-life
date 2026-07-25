"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";
import { clubs } from "@/data/clubs";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function ClubIndex() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const activeClub = clubs.find((c) => c.slug === hoveredSlug) ?? clubs[0];

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 100%)", paddingTop: "56px", paddingBottom: "64px" }}
      aria-label="Danh sách câu lạc bộ"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(11,93,179,0.15), transparent)" }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="mb-10 md:mb-14">
          <p className="section-label mb-3">03 / CLUB INDEX</p>
          <div>
            <p
              className="font-heading font-black leading-none"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)", color: "rgba(11,93,179,0.12)" }}
            >
              9 CLUBS.
            </p>
            <p
              className="font-heading font-black text-[#0B5DB3] leading-none"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
            >
              ONE COMMUNITY.
            </p>
          </div>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Club list */}
          <nav aria-label="Danh sách câu lạc bộ" className="flex-1 w-full">
            <ul role="list">
              {clubs.map((club, i) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="group flex items-center justify-between border-b border-[#DCE5EC] hover:border-[#0B5DB3]/25 transition-all duration-200"
                    style={{ minHeight: "64px", paddingTop: "12px", paddingBottom: "12px" }}
                    onMouseEnter={() => setHoveredSlug(club.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    aria-label={`Xem ${club.name}`}
                  >
                    <motion.div
                      className="flex items-center gap-4"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.18 }}
                    >
                      <span className="font-heading text-xs font-black tracking-[0.18em] text-[#FF6B00] w-8 shrink-0">
                        {club.number}
                      </span>
                      <span
                        className={`font-heading font-bold transition-colors duration-200 ${
                          hoveredSlug === club.slug ? "text-[#0B5DB3]" : "text-[#243142]/75 group-hover:text-[#0B5DB3]"
                        }`}
                        style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
                      >
                        {club.name.replace("Câu lạc bộ ", "").toUpperCase()}
                      </span>
                    </motion.div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:block font-heading text-xs tracking-widest text-[#687384] uppercase font-medium">
                        {club.category === "academic" ? "Học thuật" :
                         club.category === "creative" ? "Sáng tạo" :
                         club.category === "sports" ? "Thể thao" : "Nghệ thuật"}
                      </span>
                      <ArrowRight
                        className={`h-4 w-4 transition-all duration-200 ${
                          hoveredSlug === club.slug
                            ? "text-[#FF6B00] opacity-100 translate-x-0.5"
                            : "text-[#DCE5EC] opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Preview image — desktop only */}
          <div
            className="hidden md:block sticky top-24 w-64 ml-10 aspect-[3/4] overflow-hidden shrink-0 shadow-xl shadow-[#0B5DB3]/10 rounded-xl"
            aria-hidden="true"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClub.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeClub.coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="256px"
                />
                <div className="absolute inset-0 bg-[#0B5DB3]/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white/95 to-transparent">
                  <p className="font-heading text-xs font-black tracking-[0.15em] text-[#FF6B00] mb-1">
                    {activeClub.number}
                  </p>
                  <p className="font-heading text-base font-bold text-[#0B5DB3]">
                    {activeClub.name.replace("Câu lạc bộ ", "")}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
}
