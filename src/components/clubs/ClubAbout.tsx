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
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "56px", paddingBottom: "56px" }}
      aria-labelledby="about-heading"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(11,93,179,0.1), transparent)" }}
        aria-hidden="true"
      />

      <Container>
        {/* ── MOBILE LAYOUT: single column, image woven between content ── */}
        <div className="md:hidden space-y-5">
          {/* Label + heading */}
          <FadeIn>
            <SectionLabel>01 / ABOUT</SectionLabel>
            <h2
              id="about-heading"
              className="font-heading font-black text-[#0B5DB3] leading-none mt-3"
              style={{ fontSize: "clamp(1.7rem, 7vw, 3rem)" }}
            >
              {club.englishName
                ? club.englishName.toUpperCase()
                : club.name.replace("Câu lạc bộ ", "").toUpperCase()}
              <span className="block" style={{ color: "rgba(255,107,0,0.7)" }}>AT EDISON.</span>
            </h2>
          </FadeIn>

          {/* Pull quote */}
          <FadeIn delay={0.1}>
            <blockquote className="border-l-2 border-[#0B5DB3]/30 pl-4">
              <p className="font-body text-sm text-[#243142]/70 italic leading-relaxed">
                {club.intro}
              </p>
            </blockquote>
          </FadeIn>

          {/* IMAGE — woven into content on mobile */}
          <FadeIn delay={0.15}>
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl shadow-md shadow-[#0B5DB3]/10">
              <Image
                src={club.heroImages[1] ?? club.coverImage}
                alt={`${club.name} hoạt động`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 0vw"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(11,93,179,0.1), transparent 50%)" }}
              />
            </div>
          </FadeIn>

          {/* First description paragraph */}
          {club.description[0] && (
            <FadeIn delay={0.2}>
              <p className="font-body text-base text-[#243142]/70 leading-relaxed" style={{ lineHeight: "1.75" }}>
                {club.description[0]}
              </p>
            </FadeIn>
          )}

          {/* Second description (if exists) + gallery peek */}
          {club.description[1] && (
            <FadeIn delay={0.25}>
              <p className="font-body text-base text-[#243142]/70 leading-relaxed" style={{ lineHeight: "1.75" }}>
                {club.description[1]}
              </p>
            </FadeIn>
          )}

          {/* Gallery snippet image — woven in if more description */}
          {club.description.length > 2 && club.gallery[0] && (
            <FadeIn delay={0.3}>
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-sm shadow-[#0B5DB3]/8">
                <Image
                  src={club.gallery[0].src}
                  alt={club.gallery[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 0vw"
                  loading="lazy"
                />
              </div>
            </FadeIn>
          )}

          {/* Remaining description paragraphs */}
          {club.description.slice(2).map((para, i) => (
            <FadeIn key={i} delay={0.3 + i * 0.07}>
              <p className="font-body text-base text-[#243142]/70 leading-relaxed" style={{ lineHeight: "1.75" }}>
                {para}
              </p>
            </FadeIn>
          ))}

          {/* Suitable for */}
          {club.suitableFor && (
            <FadeIn delay={0.4}>
              <div
                className="p-4 rounded-lg"
                style={{ background: "linear-gradient(135deg, #F4F9FF, #EAF4FF)", border: "1px solid rgba(11,93,179,0.1)" }}
              >
                <p className="section-label mb-2" style={{ fontSize: "0.65rem" }}>Phù hợp với</p>
                <p className="font-body text-sm text-[#243142]/70 leading-relaxed">
                  {club.suitableFor}
                </p>
              </div>
            </FadeIn>
          )}
        </div>

        {/* ── DESKTOP LAYOUT: 2-column grid ── */}
        <div className="hidden md:grid md:grid-cols-[1fr,1.2fr] gap-20 items-start">
          {/* Left: label + heading + quote + image */}
          <div>
            <FadeIn>
              <SectionLabel>01 / ABOUT</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="about-heading"
                className="font-heading font-black text-[#0B5DB3] leading-none mb-6 mt-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
              >
                {club.englishName
                  ? club.englishName.toUpperCase().split(" ").map((w, i) => (
                      <span key={i} className="block">{w}</span>
                    ))
                  : club.name.replace("Câu lạc bộ ", "").toUpperCase()}
                <span className="block text-[#FF6B00]/70">AT EDISON.</span>
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <blockquote className="border-l-2 border-[#0B5DB3]/30 pl-5 mb-6">
                <p className="font-body text-base text-[#243142]/75 italic leading-relaxed">
                  {club.intro}
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="relative aspect-video overflow-hidden rounded-lg shadow-md shadow-[#0B5DB3]/8">
                <Image
                  src={club.heroImages[1] ?? club.coverImage}
                  alt={`${club.name} hoạt động`}
                  fill
                  className="object-cover"
                  sizes="45vw"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right: description paragraphs */}
          <div className="space-y-5">
            {club.description.map((para, i) => (
              <FadeIn key={i} delay={0.15 + i * 0.08}>
                <p className="font-body text-lg text-[#243142]/70 leading-relaxed" style={{ lineHeight: "1.75" }}>
                  {para}
                </p>
              </FadeIn>
            ))}

            {club.suitableFor && (
              <FadeIn delay={0.45}>
                <div
                  className="mt-6 p-5 rounded-lg"
                  style={{ background: "linear-gradient(135deg, #F4F9FF, #EAF4FF)", border: "1px solid rgba(11,93,179,0.1)" }}
                >
                  <p className="section-label mb-2" style={{ fontSize: "0.65rem" }}>Phù hợp với</p>
                  <p className="font-body text-sm text-[#243142]/70 leading-relaxed">
                    {club.suitableFor}
                  </p>
                </div>
              </FadeIn>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom connector */}
      <div
        className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(244,249,255,0.5))" }}
        aria-hidden="true"
      />
    </section>
  );
}
