import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface ClubHighlightsProps {
  club: Club;
}

export function ClubHighlights({ club }: ClubHighlightsProps) {
  return (
    <section
      className="py-24 md:py-36 bg-navy relative overflow-hidden"
      aria-labelledby="highlights-heading"
    >
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

      <Container>
        <FadeIn className="mb-16">
          <SectionLabel>02 / WHAT WE DO</SectionLabel>
          <h2
            id="highlights-heading"
            className="font-heading font-black text-white leading-none mt-4"
            style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)" }}
          >
            HOẠT ĐỘNG<br />
            <span className="text-white/20">NỔI BẬT.</span>
          </h2>
        </FadeIn>

        <StaggerContainer
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0"
          staggerDelay={0.08}
        >
          {club.highlights.map((highlight, i) => (
            <StaggerItem key={i}>
              <div className="border-t border-white/5 py-8 pr-8 group hover:border-white/10 transition-colors duration-200">
                <div className="flex items-start gap-4 mb-4">
                  <span className="font-heading text-xs font-bold text-orange/40 tracking-widest shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-white leading-tight group-hover:text-white/90 transition-colors">
                    {highlight.title}
                  </h3>
                </div>
                {highlight.description && (
                  <p className="font-body text-sm text-white/50 leading-relaxed pl-8">
                    {highlight.description}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </section>
  );
}
