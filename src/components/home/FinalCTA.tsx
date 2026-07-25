import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealLines } from "@/components/animations/RevealText";

export function FinalCTA() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0B5DB3 0%, #084A91 100%)",
        paddingTop: "72px",
        paddingBottom: "72px",
      }}
      aria-label="Khám phá câu lạc bộ"
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,107,0,0.12) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-bg-light opacity-20" aria-hidden="true" />

      {/* Ghost text decoration */}
      <div
        className="absolute right-0 bottom-0 select-none pointer-events-none font-heading font-black text-white/5 leading-none"
        style={{ fontSize: "clamp(6rem, 20vw, 18rem)" }}
        aria-hidden="true"
      >
        9
      </div>

      <Container className="text-center relative z-10">
        <FadeIn>
          <p className="section-label justify-center mb-6" style={{ color: "rgba(255,255,255,0.6)" }}>
            THPT Edison
          </p>
        </FadeIn>

        <RevealLines
          lines={["9 CLUBS.", "ENDLESS", "POSSIBILITIES."]}
          lineClassName="font-heading font-black text-white leading-none"
          style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
          baseDelay={0.12}
          className="mb-6"
        />

        <FadeIn delay={0.45}>
          <p
            className="font-heading font-black leading-none mb-10"
            style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)", color: "rgba(255,255,255,0.12)" }}
          >
            FIND YOUR PLACE AT EDISON.
          </p>
        </FadeIn>

        <FadeIn delay={0.6}>
          <Link
            href="/clubs"
            className="inline-flex items-center justify-center font-heading text-sm font-bold tracking-[0.18em] uppercase bg-[#FF6B00] text-white px-10 py-4 hover:bg-[#E85F00] transition-colors duration-200 min-h-[52px] rounded-lg shadow-lg shadow-black/20 w-full sm:w-auto"
            aria-label="Khám phá 9 câu lạc bộ THPT Edison"
          >
            KHÁM PHÁ CÂU LẠC BỘ
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
