"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { clubs } from "@/data/clubs";
import { siteConfig } from "@/data/site";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

type Category = "all" | "academic" | "creative" | "sports" | "performing";

export function ClubsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filtered =
    activeCategory === "all"
      ? clubs
      : clubs.filter((c) => c.category === activeCategory);

  const categoryLabels: Record<Category, string> = {
    all: "Tất cả",
    academic: "Học thuật",
    creative: "Sáng tạo",
    sports: "Thể thao",
    performing: "Nghệ thuật",
  };

  return (
    <section className="py-24 bg-white" aria-label="Danh sách câu lạc bộ">
      <Container>
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-16" role="tablist" aria-label="Lọc câu lạc bộ">
          {(["all", "academic", "creative", "sports", "performing"] as Category[]).map(
            (cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-heading text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 min-h-[44px] transition-all duration-200 rounded-sm ${
                  activeCategory === cat
                    ? "bg-orange text-white shadow-sm"
                    : "border border-navy/10 text-navy/60 hover:text-navy hover:border-navy/30"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            )
          )}
        </div>

        {/* Club list - editorial */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="space-y-0">
              {filtered.map((club) => (
                <Link
                  key={club.slug}
                  href={`/clubs/${club.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-6 py-8 border-b border-navy/10 hover:border-navy/20 transition-all duration-200"
                  aria-label={`Xem ${club.name}`}
                >
                  {/* Thumb */}
                  <div className="relative w-full sm:w-48 aspect-video sm:aspect-square overflow-hidden shrink-0 shadow-sm rounded-sm">
                    <Image
                      src={club.coverImage}
                      alt={club.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 192px"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-heading text-xs font-bold tracking-[0.2em] text-orange">
                        {club.number}
                      </span>
                      <span className="font-heading text-[10px] font-semibold tracking-widest text-navy/40 uppercase">
                        {categoryLabels[club.category as Category]}
                      </span>
                    </div>
                    <h2
                      className="font-heading font-black text-navy leading-none mb-3 group-hover:text-navy/80 transition-colors"
                      style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
                    >
                      {club.name.replace("Câu lạc bộ ", "").toUpperCase()}
                      <span className="text-orange">.</span>
                    </h2>
                    <p className="font-body text-sm text-navy/60 leading-relaxed line-clamp-2 font-medium">
                      {club.intro}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    className="shrink-0 h-6 w-6 text-navy/30 group-hover:text-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 hidden sm:block"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
