"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { clubs } from "@/data/clubs";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealLines } from "@/components/animations/RevealText";

export function ClubShowcase() {
  return (
    <section
      className="py-24 md:py-36 bg-slate-50 relative"
      aria-label="Giới thiệu 9 câu lạc bộ Edison"
    >
      <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden="true" />
      <Container className="relative z-10">
        {/* Section heading */}
        <div className="mb-20 md:mb-28">
          <FadeIn>
            <p className="section-label mb-6">01 / EDISON CLUBS</p>
          </FadeIn>
          <RevealLines
            lines={["FIND", "YOUR", "CLUB."]}
            lineClassName="font-heading font-black text-navy leading-none"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
            baseDelay={0.1}
          />
        </div>

        {/* Club entries - alternating layout */}
        <div className="space-y-0">
          {clubs.map((club, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={club.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={`/clubs/${club.slug}`}
                  className="group block border-t border-navy/10 py-12 md:py-16 hover:border-navy/20 transition-colors duration-300"
                  aria-label={`Khám phá ${club.name}`}
                >
                  <div
                    className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${
                      !isEven ? "md:grid-flow-col" : ""
                    }`}
                  >
                    {/* Text block */}
                    <div className={!isEven ? "md:order-2" : ""}>
                      {/* Number + label */}
                      <div className="flex items-center gap-4 mb-6">
                        <span className="font-heading text-xs font-bold tracking-[0.2em] text-orange">
                          {club.number}
                        </span>
                        <span className="h-px flex-1 max-w-[40px] bg-navy/10" />
                        <span className="font-heading text-xs font-semibold tracking-[0.15em] text-navy/40 uppercase">
                          {club.category === "academic" ? "Academic" :
                           club.category === "creative" ? "Creative" :
                           club.category === "sports" ? "Sports" : "Performing"}
                        </span>
                      </div>

                      {/* Club name – editorial style */}
                      <h2
                        className="font-heading font-black text-navy leading-none mb-4 tracking-tight group-hover:text-navy/80 transition-colors"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                      >
                        {club.name.replace("Câu lạc bộ ", "").toUpperCase().split(" ").map((word, wi) => (
                          <span key={wi} className="block">{word}</span>
                        ))}
                        <span className="text-orange">.</span>
                      </h2>

                      {/* Slogan */}
                      <p className="font-body text-sm text-navy/60 leading-relaxed mb-8 max-w-xs font-medium">
                        {club.slogan}
                      </p>

                      {/* CTA arrow */}
                      <div className="inline-flex items-center gap-2 font-heading text-xs font-bold tracking-[0.2em] text-navy/50 group-hover:text-orange transition-colors duration-300">
                        KHÁM PHÁ
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Image block */}
                    <div className={`relative ${!isEven ? "md:order-1" : ""}`}>
                      {/* Oversized number behind */}
                      <div
                        className="club-number absolute -top-4 -left-2 md:-top-8 md:-left-4 leading-none pointer-events-none"
                        aria-hidden="true"
                      >
                        {club.number}
                      </div>

                      <div className="relative aspect-[4/3] overflow-hidden shadow-lg shadow-navy/5 rounded-sm">
                        <Image
                          src={club.coverImage}
                          alt={`${club.name} THPT Edison`}
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-navy/5 group-hover:bg-navy/0 transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom border */}
        <div className="border-t border-navy/10" aria-hidden="true" />
      </Container>
    </section>
  );
}
