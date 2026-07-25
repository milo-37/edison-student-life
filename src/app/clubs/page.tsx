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
        className="relative overflow-hidden bg-white"
        style={{ paddingTop: "88px", paddingBottom: "56px" }}
        aria-label="Trang câu lạc bộ - hero"
      >
        {/* Background gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F4F9FF 50%, #EAF4FF 100%)" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden="true" />
        <div
          className="absolute top-0 right-0 w-[50%] h-[60%] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at top right, rgba(11,93,179,0.08) 0%, transparent 65%)" }}
          aria-hidden="true"
        />

        <Container className="relative z-10">
          <FadeIn>
            <p className="section-label mb-5">THPT Edison — Câu lạc bộ</p>
          </FadeIn>

          <RevealLines
            lines={["CLUBS"]}
            lineClassName="font-heading font-black text-[#0B5DB3] leading-none"
            style={{ fontSize: "clamp(4rem, 15vw, 10rem)" }}
            baseDelay={0.1}
            className="mb-4"
          />

          <FadeIn delay={0.3}>
            <h1
              className="font-heading font-black leading-none mb-6"
              style={{ fontSize: "clamp(1.3rem, 4vw, 2.8rem)", color: "rgba(11,93,179,0.18)" }}
            >
              FIND WHERE YOU BELONG.
            </h1>
          </FadeIn>

          <FadeIn delay={0.45}>
            <p className="font-body text-base text-[#687384] leading-relaxed max-w-md">
              9 câu lạc bộ. 9 hành trình. Một cộng đồng Edison.
            </p>
          </FadeIn>
        </Container>

        {/* Bottom gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))" }}
          aria-hidden="true"
        />
      </section>

      <ClubsGrid />
    </>
  );
}
