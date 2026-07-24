"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

const Lightbox = dynamic(() => import("@/components/gallery/Lightbox").then(m => ({ default: m.Lightbox })), {
  ssr: false,
});

interface ClubGalleryProps {
  club: Club;
}

export function ClubGallery({ club }: ClubGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = useCallback((i: number) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i - 1 + club.gallery.length) % club.gallery.length : null)),
    [club.gallery.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i !== null ? (i + 1) % club.gallery.length : null)),
    [club.gallery.length]
  );

  return (
    <section
      className="py-24 md:py-36 bg-navy"
      aria-labelledby="gallery-heading"
    >
      <Container>
        <FadeIn className="mb-16">
          <SectionLabel>04 / MOMENTS</SectionLabel>
          <h2
            id="gallery-heading"
            className="font-heading font-black text-white leading-none mt-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            MOMENTS<br />
            <span className="text-white/20">THAT MATTER.</span>
          </h2>
        </FadeIn>

        {/* Masonry gallery */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 gap-3"
          staggerDelay={0.08}
        >
          {club.gallery.map((img, i) => {
            const isTall = i === 0;
            return (
              <StaggerItem
                key={i}
                className={`relative overflow-hidden group cursor-pointer ${
                  isTall ? "row-span-2 aspect-[3/4] col-span-1" : "aspect-[4/3]"
                }`}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="relative w-full h-full block focus-visible:outline-orange"
                  aria-label={`Xem ảnh: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-navy-dark/5 transition-colors duration-500" />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-navy-dark/70 backdrop-blur-sm px-4 py-2">
                      <span className="font-heading text-xs font-bold tracking-widest text-white uppercase">VIEW</span>
                    </div>
                  </div>
                  {/* Caption */}
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy-dark/80 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <p className="font-heading text-xs font-semibold text-white/80">{img.caption}</p>
                    </div>
                  )}
                </button>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={club.gallery.map(img => ({
            ...img,
            src: img.src,
          }))}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prev}
          onNext={next}
        />
      )}
    </section>
  );
}
