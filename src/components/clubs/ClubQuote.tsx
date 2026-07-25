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
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0B5DB3 0%, #084A91 100%)",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
      aria-label={`Thông điệp từ ${club.name}`}
    >
      {/* Decorative elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(255,107,0,0.1) 0%, transparent 65%)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-bg-light opacity-15" aria-hidden="true" />

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,107,0,0.3), transparent)" }}
        aria-hidden="true"
      />

      <Container narrow>
        <FadeIn>
          {/* Big decorative quote */}
          <p
            className="font-heading font-black leading-none select-none mb-2"
            style={{ fontSize: "clamp(5rem, 14vw, 12rem)", color: "rgba(255,107,0,0.15)" }}
            aria-hidden="true"
          >
            "
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <blockquote className="-mt-6 md:-mt-12">
            <p
              className="font-heading font-bold text-white leading-snug"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)", lineHeight: "1.5" }}
            >
              {club.quote}
            </p>
          </blockquote>
        </FadeIn>

        {club.closingMessage && (
          <FadeIn delay={0.4}>
            <p
              className="mt-8 font-body text-sm leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.5)",
                borderTop: "1px solid rgba(255,255,255,0.1)",
                paddingTop: "24px",
              }}
            >
              {club.closingMessage}
            </p>
          </FadeIn>
        )}
      </Container>
    </section>
  );
}
