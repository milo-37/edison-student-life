import Image from "next/image";
import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";

interface ClubAboutProps {
  club: Club;
}

export function ClubAbout({ club }: ClubAboutProps) {
  return (
    <section
      className="py-24 md:py-36 bg-navy-dark"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid md:grid-cols-[1fr,1.2fr] gap-16 md:gap-24 items-start">
          {/* Left: label + intro */}
          <div>
            <FadeIn>
              <SectionLabel>01 / ABOUT</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="about-heading"
                className="font-heading font-black text-white leading-none mb-8"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              >
                {club.englishName
                  ? club.englishName.toUpperCase().split(" ").map((w, i) => (
                      <span key={i} className="block">{w}</span>
                    ))
                  : club.name.replace("Câu lạc bộ ", "").toUpperCase()}
                <span className="block text-orange/60">AT EDISON.</span>
              </h2>
            </FadeIn>

            {/* Pull quote */}
            <FadeIn delay={0.2}>
              <blockquote className="border-l-2 border-orange/40 pl-5 mb-8">
                <p className="font-body text-base md:text-lg text-white/80 italic leading-relaxed">
                  {club.intro}
                </p>
              </blockquote>
            </FadeIn>

            {/* Hero image 2 */}
            <FadeIn delay={0.3}>
              <div className="relative aspect-video overflow-hidden hidden md:block">
                <Image
                  src={club.heroImages[1] ?? club.coverImage}
                  alt={`${club.name} hoạt động`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 0vw, 45vw"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: description paragraphs */}
          <div className="space-y-6">
            {club.description.map((para, i) => (
              <FadeIn key={i} delay={0.2 + i * 0.1}>
                <p className="font-body text-base md:text-lg text-white/70 leading-relaxed">
                  {para}
                </p>
              </FadeIn>
            ))}

            {club.suitableFor && (
              <FadeIn delay={0.5}>
                <div className="mt-8 p-5 border border-white/8 bg-white/2">
                  <p className="section-label mb-2">Phù hợp với</p>
                  <p className="font-body text-sm text-white/70 leading-relaxed">
                    {club.suitableFor}
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
