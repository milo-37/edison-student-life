import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealLines } from "@/components/animations/RevealText";
import { GalleryClient } from "@/components/gallery/GalleryClient";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Gallery | ${siteConfig.name}`,
  description:
    "Khoảnh khắc đáng nhớ từ 9 câu lạc bộ tại THPT Edison – Văn học, Tiếng Anh, STEM, Truyền thông, Võ thuật, Bóng rổ, Bóng đá, Nhảy hiện đại, Âm nhạc.",
  openGraph: {
    title: `Gallery | ${siteConfig.name}`,
    description: "Những khoảnh khắc đáng nhớ từ đời sống câu lạc bộ THPT Edison.",
    url: `${siteConfig.url}/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-slate-50 overflow-hidden"
        aria-label="Gallery - hero"
      >
        <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 orange-glow-light" aria-hidden="true" />

        <Container>
          <FadeIn>
            <p className="section-label mb-6">THPT Edison — Gallery</p>
          </FadeIn>

          <RevealLines
            lines={["EDISON", "IN MOMENTS."]}
            lineClassName="font-heading font-black text-navy leading-none"
            style={{ fontSize: "clamp(2.8rem, 9vw, 8rem)" }}
            baseDelay={0.1}
            className="mb-8"
          />

          <FadeIn delay={0.4}>
            <p className="font-body text-base text-navy/70 leading-relaxed max-w-md">
              Những khoảnh khắc đáng nhớ từ 9 câu lạc bộ tại THPT Edison.
            </p>
          </FadeIn>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-navy/5 to-transparent" aria-hidden="true" />
      </section>

      <GalleryClient />
    </>
  );
}
