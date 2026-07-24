"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { clubs } from "@/data/clubs";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function ClubIndex() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const activeClub = clubs.find((c) => c.slug === hoveredSlug) ?? clubs[0];

  return (
    <section
      className="py-24 md:py-36 bg-white relative overflow-hidden"
      aria-label="Danh sách câu lạc bộ"
    >
      <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden="true" />

      <Container>
        <FadeIn className="mb-16">
          <p className="section-label mb-4">02 / CLUB INDEX</p>
          <p className="font-heading font-black text-navy/10 leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            9 CLUBS.
          </p>
          <p className="font-heading font-black text-navy leading-none"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            ONE COMMUNITY.
          </p>
        </FadeIn>

        <div className="flex flex-col md:flex-row items-start justify-between">
          {/* Club list */}
          <nav aria-label="Danh sách câu lạc bộ" className="flex-1 w-full">
            <ul role="list">
              {clubs.map((club, i) => (
                <li key={club.slug}>
                  <Link
                    href={`/clubs/${club.slug}`}
                    className="group flex items-center justify-between py-5 border-b border-navy/10 hover:border-navy/20 transition-all duration-200"
                    onMouseEnter={() => setHoveredSlug(club.slug)}
                    onMouseLeave={() => setHoveredSlug(null)}
                    aria-label={`Xem ${club.name}`}
                  >
                    <motion.div
                      className="flex items-center gap-5"
                      initial={{ x: 0 }}
                      whileHover={{ x: 6 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="font-heading text-xs font-bold tracking-[0.2em] text-orange w-8 shrink-0">
                        {club.number}
                      </span>
                      <span
                        className={`font-heading font-bold text-navy transition-colors duration-200 ${
                          hoveredSlug === club.slug ? "text-navy" : "text-navy/70 group-hover:text-navy"
                        }`}
                        style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)" }}
                      >
                        {club.name.replace("Câu lạc bộ ", "").toUpperCase()}
                      </span>
                    </motion.div>

                    <div className="flex items-center gap-4">
                      <span className="hidden sm:block font-heading text-xs tracking-widest text-navy/40 uppercase font-medium">
                        {club.category === "academic" ? "Academic" :
                         club.category === "creative" ? "Creative" :
                         club.category === "sports" ? "Sports" : "Performing"}
                      </span>
                      <ArrowUpRight
                        className={`h-4 w-4 transition-all duration-200 ${
                          hoveredSlug === club.slug
                            ? "text-orange opacity-100 translate-x-0.5 -translate-y-0.5"
                            : "text-navy/20 opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Preview image - desktop only */}
          <div
            className="hidden md:block sticky top-32 w-72 ml-12 aspect-[3/4] overflow-hidden shrink-0 shadow-lg shadow-navy/5 rounded-sm"
            aria-hidden="true"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeClub.slug}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0"
              >
                <Image
                  src={activeClub.coverImage}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-navy/10" />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-white to-transparent">
                  <p className="font-heading text-xs font-bold tracking-[0.15em] text-orange mb-1">
                    {activeClub.number}
                  </p>
                  <p className="font-heading text-lg font-bold text-navy">
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
