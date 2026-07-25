import Image from "next/image";
import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface ClubHighlightsProps {
  club: Club;
}

export function ClubHighlights({ club }: ClubHighlightsProps) {
  // Pick a gallery image to weave into mobile content
  const inlineImage = club.gallery[1] ?? club.gallery[0] ?? null;
  // Midpoint to inject image
  const midpoint = Math.ceil(club.highlights.length / 2);

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F4F9FF 0%, #EAF4FF 100%)",
        paddingTop: "56px",
        paddingBottom: "56px",
      }}
      aria-labelledby="highlights-heading"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(11,93,179,0.15), transparent)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-bg-light opacity-50" aria-hidden="true" />

      <Container className="relative z-10">
        <FadeIn className="mb-8 md:mb-14">
          <SectionLabel>02 / WHAT WE DO</SectionLabel>
          <h2
            id="highlights-heading"
            className="font-heading font-black text-[#0B5DB3] leading-none mt-3"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
          >
            HOẠT ĐỘNG
            <br />
            <span style={{ color: "rgba(11,93,179,0.18)" }}>NỔI BẬT.</span>
          </h2>
        </FadeIn>

        {/* ── MOBILE: vertical list with image woven in at midpoint ── */}
        <div className="md:hidden">
          {club.highlights.map((highlight, i) => (
            <div key={i}>
              <FadeIn delay={i * 0.06}>
                <div className="border-t border-[#0B5DB3]/10 py-5 group">
                  <div className="flex items-start gap-4 mb-2">
                    <span className="font-heading text-xs font-bold text-[#FF6B00]/60 tracking-widest shrink-0 mt-0.5 w-8">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#0B5DB3] leading-tight">
                      {highlight.title}
                    </h3>
                  </div>
                  {highlight.description && (
                    <p className="font-body text-sm text-[#687384] leading-relaxed pl-12">
                      {highlight.description}
                    </p>
                  )}
                </div>
              </FadeIn>

              {/* Inject image between first and second half of highlights */}
              {i === midpoint - 1 && inlineImage && (
                <FadeIn delay={midpoint * 0.06 + 0.05}>
                  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md shadow-[#0B5DB3]/10 my-5">
                    <Image
                      src={inlineImage.src}
                      alt={inlineImage.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 0vw"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to top, rgba(11,93,179,0.08), transparent 50%)" }}
                    />
                  </div>
                </FadeIn>
              )}
            </div>
          ))}
        </div>

        {/* ── DESKTOP: 2–3 column grid (unchanged) ── */}
        <StaggerContainer
          className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-0"
          staggerDelay={0.07}
        >
          {club.highlights.map((highlight, i) => (
            <StaggerItem key={i}>
              <div className="border-t border-[#0B5DB3]/10 py-6 pr-6 group hover:border-[#0B5DB3]/25 transition-colors duration-200">
                <div className="flex items-start gap-4 mb-3">
                  <span className="font-heading text-xs font-bold text-[#FF6B00]/60 tracking-widest shrink-0 mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-heading text-base font-bold text-[#0B5DB3] leading-tight group-hover:text-[#084A91] transition-colors">
                    {highlight.title}
                  </h3>
                </div>
                {highlight.description && (
                  <p className="font-body text-sm text-[#687384] leading-relaxed pl-8">
                    {highlight.description}
                  </p>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>

      {/* Bottom connector */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.8))" }}
        aria-hidden="true"
      />
    </section>
  );
}
