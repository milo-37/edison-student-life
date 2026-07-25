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
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 100%)",
        paddingTop: "56px",
        paddingBottom: "56px",
      }}
      aria-labelledby="gallery-heading"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(11,93,179,0.12), transparent)" }}
        aria-hidden="true"
      />

      <Container>
        <FadeIn className="mb-10 md:mb-12">
          <SectionLabel>04 / MOMENTS</SectionLabel>
          <h2
            id="gallery-heading"
            className="font-heading font-black text-[#0B5DB3] leading-none mt-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
          >
            MOMENTS
            <br />
            <span style={{ color: "rgba(11,93,179,0.18)" }}>THAT MATTER.</span>
          </h2>
        </FadeIn>

        {/* 2-col mobile, 3-col desktop masonry */}
        <StaggerContainer
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
          staggerDelay={0.06}
        >
          {club.gallery.map((img, i) => {
            const isTall = i === 0;
            return (
              <StaggerItem
                key={i}
                className={`relative overflow-hidden group cursor-pointer rounded-xl ${
                  isTall ? "row-span-2 aspect-[3/4] col-span-1" : "aspect-[4/3]"
                }`}
              >
                <button
                  onClick={() => openLightbox(i)}
                  className="relative w-full h-full block focus-visible:outline-2 focus-visible:outline-[#FF6B00]"
                  aria-label={`Xem ảnh: ${img.alt}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading={i < 2 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-[#0B5DB3]/10 group-hover:bg-[#0B5DB3]/5 transition-colors duration-500" />

                  {/* View indicator */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                      <span className="font-heading text-xs font-bold tracking-widest text-[#0B5DB3] uppercase">VIEW</span>
                    </div>
                  </div>

                  {/* Caption */}
                  {img.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <p className="font-heading text-xs font-semibold text-[#243142]">{img.caption}</p>
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
