import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealLines } from "@/components/animations/RevealText";
import { ClubsGrid } from "@/components/clubs/ClubsGrid";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `Câu lạc bộ | ${siteConfig.name}`,
  description:
    "Khám phá 9 câu lạc bộ tại THPT Edison – nơi học sinh tìm thấy đam mê, phát triển kỹ năng và tạo nên những kỷ niệm đáng nhớ.",
  openGraph: {
    title: `Câu lạc bộ | ${siteConfig.name}`,
    description:
      "Khám phá 9 câu lạc bộ tại THPT Edison.",
    url: `${siteConfig.url}/clubs`,
  },
};

export default function ClubsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 bg-navy-dark overflow-hidden"
        aria-label="Trang câu lạc bộ - hero"
      >
        <div className="absolute inset-0 grid-bg opacity-50" aria-hidden="true" />
        <div className="absolute inset-0 orange-glow" aria-hidden="true" />

        <Container>
          <FadeIn>
            <p className="section-label mb-6">THPT Edison — Câu lạc bộ</p>
          </FadeIn>

          <RevealLines
            lines={["CLUBS"]}
            lineClassName="font-heading font-black text-white leading-none"
            style={{ fontSize: "clamp(4rem, 15vw, 12rem)" }}
            baseDelay={0.1}
            className="mb-6"
          />

          <FadeIn delay={0.3}>
            <h1
              className="font-heading font-black text-white/20 leading-none mb-8"
              style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}
            >
              FIND WHERE YOU BELONG.
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="font-body text-base text-white/50 leading-relaxed max-w-md">
              9 câu lạc bộ. 9 hành trình. Một cộng đồng Edison.
            </p>
          </FadeIn>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />
      </section>

      <ClubsGrid />
    </>
  );
}
