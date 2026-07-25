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
      className="relative bg-white overflow-hidden"
      style={{ paddingTop: "56px", paddingBottom: "56px" }}
      aria-labelledby="skills-heading"
    >
      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(11,93,179,0.1), transparent)" }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid md:grid-cols-[1fr,1.5fr] gap-10 md:gap-20 items-start">
          {/* Left label */}
          <FadeIn>
            <SectionLabel>03 / GROW WITH US</SectionLabel>
            <h2
              id="skills-heading"
              className="font-heading font-black text-[#0B5DB3] leading-none mt-3"
              style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}
            >
              PHÁT TRIỂN <span className="ml-3 text-[#FF6B00]">CÙNG CLB.</span>
            </h2>
            <p className="font-body text-sm text-[#687384] mt-4 leading-relaxed">
              Những kỹ năng bạn sẽ phát triển khi tham gia {club.name}.
            </p>
          </FadeIn>

          {/* Right skills list */}
          <StaggerContainer className="space-y-0" staggerDelay={0.07}>
            {club.skills.map((skill, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-5 py-4 border-b border-[#DCE5EC] group hover:border-[#0B5DB3]/20 transition-colors duration-200">
                  <span
                    className="font-heading font-black text-[#0B5DB3]/10 group-hover:text-[#FF6B00]/25 transition-colors duration-300 w-14 shrink-0 leading-none"
                    style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="font-heading font-bold text-[#243142]/75 group-hover:text-[#0B5DB3] transition-colors duration-200"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.3rem)" }}
                  >
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
