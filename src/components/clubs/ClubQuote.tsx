import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

interface ClubQuoteProps {
  club: Club;
}

export function ClubQuote({ club }: ClubQuoteProps) {
  if (!club.quote) return null;

  return (
    <section
      className="py-24 md:py-40 bg-navy-dark relative overflow-hidden"
      aria-label={`Thông điệp từ ${club.name}`}
    >
      {/* Background */}
      <div className="absolute inset-0 orange-glow" aria-hidden="true" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange/15 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />

      <Container narrow>
        <FadeIn>
          {/* Big decorative quote */}
          <p
            className="font-heading font-black text-orange/10 leading-none select-none mb-4"
            style={{ fontSize: "clamp(6rem, 15vw, 14rem)" }}
            aria-hidden="true"
          >
            "
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <blockquote className="-mt-8 md:-mt-16">
            <p className="font-heading font-bold text-white leading-snug"
              style={{ fontSize: "clamp(1.15rem, 2.5vw, 1.8rem)" }}>
              {club.quote}
            </p>
          </blockquote>
        </FadeIn>

        {club.closingMessage && (
          <FadeIn delay={0.4}>
            <p className="mt-10 font-body text-sm text-white/40 leading-relaxed border-t border-white/5 pt-8">
              {club.closingMessage}
            </p>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
