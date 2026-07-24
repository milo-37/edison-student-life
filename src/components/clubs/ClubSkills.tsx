import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

interface ClubSkillsProps {
  club: Club;
}

export function ClubSkills({ club }: ClubSkillsProps) {
  return (
    <section
      className="py-24 md:py-36 bg-navy-dark"
      aria-labelledby="skills-heading"
    >
      <Container>
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-16 md:gap-24 items-start">
          {/* Left label */}
          <FadeIn>
            <SectionLabel>03 / GROW WITH US</SectionLabel>
            <h2
              id="skills-heading"
              className="font-heading font-black text-white leading-none mt-4"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              PHÁT TRIỂN<br />
              <span className="text-orange">CÙNG CLB.</span>
            </h2>
            <p className="font-body text-sm text-white/50 mt-6 leading-relaxed">
              Những kỹ năng bạn sẽ phát triển khi tham gia {club.name}.
            </p>
          </FadeIn>

          {/* Right skills */}
          <StaggerContainer className="space-y-0" staggerDelay={0.08}>
            {club.skills.map((skill, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-6 py-5 border-b border-white/5 group hover:border-white/10 transition-colors duration-200">
                  <span className="font-heading text-3xl md:text-4xl font-black text-white/5 group-hover:text-orange/20 transition-colors duration-300 w-16 shrink-0 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-heading text-lg md:text-xl font-bold text-white/80 group-hover:text-white transition-colors duration-200">
                    {skill.toUpperCase()}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </section>
  );
}
