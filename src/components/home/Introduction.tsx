import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealLines } from "@/components/animations/RevealText";

export function Introduction() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F4F9FF 0%, #FFFFFF 100%)", paddingTop: "56px", paddingBottom: "56px" }}
      aria-label="Giới thiệu về câu lạc bộ Edison"
    >
      {/* Top connector — visual merge from Hero */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(11,93,179,0.12), transparent)" }}
        aria-hidden="true"
      />

      <Container>
        {/* Mobile: stacked, Desktop: 2-col */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">

          {/* Heading side */}
          <div>
            <FadeIn>
              <p className="section-label mb-4">01 / ABOUT US</p>
            </FadeIn>
            <RevealLines
              lines={["MORE THAN", "A CLUB."]}
              lineClassName="font-heading font-black text-[#0B5DB3] leading-none"
              style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
              baseDelay={0.1}
            />
            <FadeIn delay={0.35}>
              <div className="mt-5 flex items-center gap-3">
                <div className="h-0.5 w-10 bg-[#FF6B00]/60" aria-hidden="true" />
                <span className="font-heading text-xs font-bold tracking-[0.15em] text-[#FF6B00]/70 uppercase">Edison 2024</span>
              </div>
            </FadeIn>
          </div>

          {/* Text side */}
          <FadeIn delay={0.2} className="space-y-4">
            <p className="font-body text-base md:text-lg text-[#243142]/70 leading-relaxed">
              Các câu lạc bộ tại THPT Edison không chỉ là nơi sinh hoạt ngoại khóa — đây là môi trường để học sinh khám phá sở thích, phát triển kỹ năng, xây dựng bản lĩnh và kết nối bạn bè.
            </p>
            <p className="font-body text-base md:text-lg text-[#243142]/70 leading-relaxed">
              Mỗi CLB là một hành trình riêng — nơi bạn dám thử, dám sáng tạo và tạo nên những trải nghiệm đáng nhớ.
            </p>

            {/* Stats */}
            <div className="pt-2 flex items-center gap-6">
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-[#FF6B00]">09</p>
                <p className="font-body text-xs text-[#687384] tracking-widest uppercase mt-1">Câu lạc bộ</p>
              </div>
              <div className="w-px h-10 bg-[#DCE5EC]" aria-hidden="true" />
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-[#0B5DB3]">01</p>
                <p className="font-body text-xs text-[#687384] tracking-widest uppercase mt-1">Cộng đồng</p>
              </div>
              <div className="w-px h-10 bg-[#DCE5EC]" aria-hidden="true" />
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-[#0B5DB3]">∞</p>
                <p className="font-body text-xs text-[#687384] tracking-widest uppercase mt-1">Trải nghiệm</p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── Transition connector to ClubShowcase ── */}
        <FadeIn delay={0.5} className="mt-12 md:mt-16 flex flex-col items-start gap-1">
          <div className="flex items-center gap-3">
            <div className="h-px w-6 bg-[#0B5DB3]/30" aria-hidden="true" />
            <p className="font-heading text-xs font-bold tracking-[0.2em] text-[#243142]/40 uppercase">09 CLUBS — ONE COMMUNITY</p>
          </div>
          <div className="ml-3 h-8 w-px bg-gradient-to-b from-[#0B5DB3]/20 to-transparent" aria-hidden="true" />
        </FadeIn>
      </Container>

      {/* Bottom connector gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9))" }}
        aria-hidden="true"
      />
    </section>
  );
}
