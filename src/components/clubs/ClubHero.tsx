import Image from "next/image";
import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { RevealLines } from "@/components/animations/RevealText";
import { FadeIn } from "@/components/animations/FadeIn";

interface ClubHeroProps {
  club: Club;
}

export function ClubHero({ club }: ClubHeroProps) {
  const nameParts = club.name.replace("Câu lạc bộ ", "").toUpperCase().split(" ");
  const sloganParts = club.slogan.split(" – ");

  return (
    <section
      className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-navy-dark pt-28"
      aria-label={`${club.name} - Hero`}
    >
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={club.heroImages[0]}
          alt=""
          fill
          className="object-cover opacity-25"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      {/* Content */}
      <Container className="relative z-10 pb-20">
        {/* Club number + category */}
        <FadeIn delay={0.1}>
          <p className="section-label mb-8">
            {club.number} / EDISON CLUBS
          </p>
        </FadeIn>

        {/* Club name - editorial split */}
        <div className="mb-6">
          <RevealLines
            lines={nameParts}
            lineClassName="font-heading font-black text-white leading-none tracking-tight"
            style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
            baseDelay={0.15}
          />
          <div className="overflow-hidden">
            <FadeIn delay={0.15 + nameParts.length * 0.12}>
              <span
                className="font-heading font-black text-orange leading-none"
                style={{ fontSize: "clamp(3.5rem, 12vw, 10rem)" }}
                aria-hidden="true"
              >
                .
              </span>
            </FadeIn>
          </div>
        </div>

        {/* Slogan lines */}
        <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4">
          {sloganParts.map((part, i) => (
            <FadeIn key={i} delay={0.5 + i * 0.08}>
              <p className="font-heading text-xs sm:text-sm font-bold tracking-[0.2em] text-white/40 uppercase">
                {part}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />
    </section>
  );
}
