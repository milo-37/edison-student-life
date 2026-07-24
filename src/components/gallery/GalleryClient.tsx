"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import dynamic from "next/dynamic";
import { galleryItems } from "@/data/gallery";
import { GalleryItem } from "@/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

const Lightbox = dynamic(() => import("@/components/gallery/Lightbox").then(m => ({ default: m.Lightbox })), {
  ssr: false,
});

type Category = "all" | "academic" | "creative" | "sports" | "performing";

const categoryLabels: Record<Category, string> = {
  all: "Tất cả",
  academic: "Học thuật",
  creative: "Sáng tạo",
  sports: "Thể thao",
  performing: "Nghệ thuật",
};

function toGalleryImage(item: GalleryItem) {
  return {
    src: item.src,
    alt: item.alt,
    caption: item.caption,
  };
}

export function GalleryClient() {
  const [category, setCategory] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    category === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === category);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)),
    [filtered.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null)),
    [filtered.length]
  );

  return (
    <section className="py-16 bg-slate-50" aria-label="Gallery ảnh câu lạc bộ Edison">
      <Container>
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-12" role="tablist" aria-label="Lọc theo thể loại">
          {(["all", "academic", "creative", "sports", "performing"] as Category[]).map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={category === cat}
              onClick={() => { setCategory(cat); setLightboxIndex(null); }}
              className={`font-heading text-xs font-bold tracking-[0.15em] uppercase px-5 py-2.5 min-h-[44px] transition-all duration-200 ${
                category === cat
                  ? "bg-orange text-white"
                  : "border border-navy/10 text-navy/50 hover:text-navy hover:border-navy/20"
              }`}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3"
          >
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.src}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="relative overflow-hidden group cursor-pointer break-inside-avoid"
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="w-full block focus-visible:outline-orange"
                  aria-label={item.alt}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/0 transition-colors duration-500" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex flex-col items-start justify-end p-4 bg-gradient-to-t from-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-heading text-[10px] font-bold tracking-widest text-orange uppercase mb-1">
                      {item.clubName.replace("Câu lạc bộ ", "")}
                    </p>
                    {item.caption && (
                      <p className="font-heading text-xs font-semibold text-white">{item.caption}</p>
                    )}
                  </div>
                </button>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <FadeIn>
            <p className="text-center font-body text-navy/40 py-16">
              Không có ảnh trong danh mục này.
            </p>
          </FadeIn>
        )}
      </Container>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={filtered.map(toGalleryImage)}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
