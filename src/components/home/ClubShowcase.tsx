"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { clubs } from "@/data/clubs";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

export function ClubShowcase() {
  // On homepage, show first 4 clubs featured + rest in ClubIndex
  const featuredClubs = clubs.slice(0, 4);

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ paddingTop: "48px", paddingBottom: "16px" }}
      aria-label="Khám phá câu lạc bộ Edison"
    >
      {/* Subtle background tint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(11,93,179,0.03) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        {/* Section heading */}
        <div className="mb-10 md:mb-16">
          <FadeIn>
            <p className="section-label mb-4">02 / EDISON CLUBS</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="font-heading font-black text-[#0B5DB3] leading-none tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 9vw, 7.5rem)" }}
            >
              FIND YOUR CLUB.
            </h2>
          </FadeIn>
        </div>

        {/* Club entries */}
        <div>
          {featuredClubs.map((club, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={club.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Link
                  href={`/clubs/${club.slug}`}
                  className="group block border-t border-[#DCE5EC] py-8 md:py-12 hover:border-[#0B5DB3]/20 transition-colors duration-300"
                  aria-label={`Khám phá ${club.name}`}
                >
                  {/* Mobile: always text → image stack */}
                  {/* Desktop: alternating */}
                  <div
                    className={`flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-14 items-center ${
                      !isEven ? "md:grid-flow-col" : ""
                    }`}
                  >
                    {/* Text block */}
                    <div className={!isEven ? "md:order-2" : ""}>
                      {/* Number + category */}
                      <div className="flex items-center gap-3 mb-4">
                        <span className="font-heading text-sm font-black text-[#FF6B00] tracking-[0.15em]">
                          {club.number}
                        </span>
                        <span className="h-px w-8 bg-[#DCE5EC]" />
                        <span className="font-heading text-xs font-semibold tracking-[0.12em] text-[#687384] uppercase">
                          {club.category === "academic" ? "Học thuật" :
                           club.category === "creative" ? "Sáng tạo" :
                           club.category === "sports" ? "Thể thao" : "Nghệ thuật"}
                        </span>
                      </div>

                      {/* Club name — mobile: inline, no forced word breaks */}
                      <h2
                        className="font-heading font-black text-[#0B5DB3] leading-tight mb-3 tracking-tight group-hover:text-[#084A91] transition-colors"
                        style={{ fontSize: "clamp(1.6rem, 5.5vw, 5rem)" }}
                      >
                        {club.name.replace("Câu lạc bộ ", "").toUpperCase()}
                        <span className="text-[#FF6B00]">.</span>
                      </h2>

                      {/* Slogan */}
                      <p className="font-body text-sm text-[#687384] leading-relaxed mb-6 max-w-xs font-medium">
                        {club.slogan}
                      </p>

                      {/* CTA */}
                      <div className="inline-flex items-center gap-2 font-heading text-xs font-bold tracking-[0.18em] text-[#687384] group-hover:text-[#FF6B00] transition-colors duration-300">
                        KHÁM PHÁ
                        <ArrowUpRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Image block */}
                    <div className={`relative ${!isEven ? "md:order-1" : ""}`}>
                      {/* Ghost number background */}
                      <div
                        className="club-number absolute -top-3 -left-2 leading-none pointer-events-none select-none"
                        aria-hidden="true"
                      >
                        {club.number}
                      </div>

                      <div className="relative aspect-[4/3] overflow-hidden shadow-lg shadow-[#0B5DB3]/10 rounded-xl">
                        <Image
                          src={club.coverImage}
                          alt={`${club.name} THPT Edison`}
                          fill
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                        <div className="absolute inset-0 bg-[#0B5DB3]/5 group-hover:bg-transparent transition-colors duration-500" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all clubs link */}
        <FadeIn className="border-t border-[#DCE5EC] py-8">
          <div className="flex items-center justify-between">
            <p className="font-heading text-sm font-semibold text-[#687384]">
              Còn <span className="text-[#0B5DB3] font-black">{clubs.length - featuredClubs.length}</span> câu lạc bộ nữa đang chờ bạn khám phá
            </p>
            <Link
              href="/clubs"
              className="inline-flex items-center gap-2 font-heading text-xs font-bold tracking-[0.15em] uppercase text-[#0B5DB3] hover:text-[#FF6B00] transition-colors duration-200"
              aria-label="Xem tất cả câu lạc bộ"
            >
              XEM TẤT CẢ
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
