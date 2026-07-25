import Image from "next/image";
import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

interface ClubHeroProps {
  club: Club;
}

export function ClubHero({ club }: ClubHeroProps) {
  const clubName = club.name.replace("Câu lạc bộ ", "").toUpperCase();
  const sloganParts = club.slogan.split(" – ");

  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ minHeight: "70svh", paddingTop: "72px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}
      aria-label={`${club.name} - Hero`}
    >
      {/* Light background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(160deg, #FFFFFF 0%, #F4F9FF 50%, #EAF4FF 100%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden="true" />

      {/* Background image — light overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={club.heroImages[0]}
          alt=""
          fill
          className="object-cover opacity-[0.12]"
          sizes="100vw"
          priority
        />
        {/* Gradient: fade from white at top to slightly more visible at bottom */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.85) 0%, rgba(244,249,255,0.7) 60%, rgba(234,244,255,0.5) 100%)" }}
        />
      </div>

      {/* Decorative blue glow */}
      <div
        className="absolute top-0 right-0 w-[50%] h-[50%] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at top right, rgba(11,93,179,0.08) 0%, transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <Container className="relative z-10 pb-12">
        {/* Club number + label */}
        <FadeIn delay={0.1}>
          <p className="section-label mb-6">
            {club.number} / EDISON CLUBS
          </p>
        </FadeIn>

        {/* Club name — single RevealText, no per-word line breaks */}
        <div className="mb-5 overflow-hidden">
          <FadeIn delay={0.15}>
            <h1
              className="font-heading font-black text-[#0B5DB3] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2rem, 9vw, 8rem)" }}
            >
              {clubName}<span className="text-[#FF6B00]">.</span>
            </h1>
          </FadeIn>
        </div>

        {/* Slogan lines */}
        <div className="flex flex-wrap gap-x-3 gap-y-1">
          {sloganParts.map((part, i) => (
            <FadeIn key={i} delay={0.45 + i * 0.07}>
              <p className="font-heading text-xs sm:text-sm font-bold tracking-[0.18em] text-[#687384] uppercase">
                {part}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Bottom gradient connecting to About */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))" }}
        aria-hidden="true"
      />
    </section>
  );
}
