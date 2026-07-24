import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealLines } from "@/components/animations/RevealText";

export function FinalCTA() {
  return (
    <section
      className="relative py-32 md:py-48 bg-navy overflow-hidden"
      aria-label="Khám phá câu lạc bộ"
    >
      {/* Background effects */}
      <div className="absolute inset-0 orange-glow" aria-hidden="true" />
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/20 to-transparent" aria-hidden="true" />

      <Container className="text-center">
        <FadeIn>
          <p className="section-label justify-center mb-8">THPT Edison</p>
        </FadeIn>

        <RevealLines
          lines={["9 CLUBS.", "ENDLESS POSSIBILITIES."]}
          lineClassName="font-heading font-black text-white leading-none"
          style={{ fontSize: "clamp(2.2rem, 7vw, 6.5rem)" }}
          baseDelay={0.15}
          className="mb-8"
        />

        <FadeIn delay={0.45}>
          <p
            className="font-heading font-black text-white/10 leading-none mb-12"
            style={{ fontSize: "clamp(1.5rem, 4vw, 3.5rem)" }}
          >
            FIND YOUR PLACE AT EDISON.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <Link
            href="/clubs"
            className="inline-flex items-center justify-center font-heading text-sm font-bold tracking-[0.2em] uppercase bg-orange text-navy-dark px-10 py-5 hover:bg-orange/90 transition-colors duration-200 min-h-[56px] text-center"
            aria-label="Khám phá 9 câu lạc bộ THPT Edison"
          >
            KHÁM PHÁ CÂU LẠC BỘ
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
