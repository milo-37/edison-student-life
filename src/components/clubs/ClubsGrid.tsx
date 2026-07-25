"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { clubs } from "@/data/clubs";
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
    <section className="bg-white" style={{ paddingTop: "40px", paddingBottom: "64px" }} aria-label="Danh sách câu lạc bộ">
      <Container>
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Lọc câu lạc bộ">
          {(["all", "academic", "creative", "sports", "performing"] as Category[]).map(
            (cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-heading text-xs font-bold tracking-[0.12em] uppercase px-5 py-2.5 min-h-[44px] transition-all duration-200 rounded-lg ${
                  activeCategory === cat
                    ? "bg-[#FF6B00] text-white shadow-md shadow-[#FF6B00]/20"
                    : "border border-[#DCE5EC] text-[#687384] hover:text-[#0B5DB3] hover:border-[#0B5DB3]/30"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            )
          )}
        </div>

        {/* Club list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div>
              {filtered.map((club) => (
                <Link
                  key={club.slug}
                  href={`/clubs/${club.slug}`}
                  className="group flex flex-col sm:flex-row sm:items-center gap-5 py-7 border-b border-[#DCE5EC] hover:border-[#0B5DB3]/20 transition-all duration-200"
                  aria-label={`Xem ${club.name}`}
                >
                  {/* Thumb */}
                  <div className="relative w-full sm:w-44 aspect-video sm:aspect-square overflow-hidden shrink-0 shadow-sm rounded-lg">
                    <Image
                      src={club.coverImage}
                      alt={club.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, 176px"
                    />
                    <div className="absolute inset-0 bg-[#0B5DB3]/5 group-hover:bg-transparent transition-colors duration-300" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-heading text-xs font-black tracking-[0.18em] text-[#FF6B00]">
                        {club.number}
                      </span>
                      <span className="font-heading text-[10px] font-semibold tracking-widest text-[#687384] uppercase">
                        {categoryLabels[club.category as Category]}
                      </span>
                    </div>
                    <h2
                      className="font-heading font-black text-[#0B5DB3] leading-none mb-2 group-hover:text-[#084A91] transition-colors"
                      style={{ fontSize: "clamp(1.4rem, 4vw, 2.3rem)" }}
                    >
                      {club.name.replace("Câu lạc bộ ", "").toUpperCase()}
                      <span className="text-[#FF6B00]">.</span>
                    </h2>
                    <p className="font-body text-sm text-[#687384] leading-relaxed line-clamp-2">
                      {club.intro}
                    </p>
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    className="shrink-0 h-5 w-5 text-[#DCE5EC] group-hover:text-[#FF6B00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 hidden sm:block"
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
