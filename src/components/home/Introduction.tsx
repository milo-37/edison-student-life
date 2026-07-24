import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { RevealLines } from "@/components/animations/RevealText";

export function Introduction() {
  return (
    <section
      className="py-24 md:py-36 bg-navy-dark relative overflow-hidden"
      aria-label="Giới thiệu về câu lạc bộ Edison"
    >
      {/* Subtle divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" aria-hidden="true" />

      <Container>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Heading side */}
          <div>
            <RevealLines
              lines={["MORE THAN", "A CLUB."]}
              lineClassName="font-heading font-black text-white leading-none"
              style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
              baseDelay={0.1}
            />
            <FadeIn delay={0.4}>
              <div className="mt-8 w-16 h-0.5 bg-orange" aria-hidden="true" />
            </FadeIn>
          </div>

          {/* Text side */}
          <FadeIn delay={0.25} className="space-y-6">
            <p className="font-body text-base md:text-lg text-white/70 leading-relaxed">
              Các câu lạc bộ tại THPT Edison không chỉ là nơi sinh hoạt ngoại khóa mà còn là môi trường để học sinh khám phá sở thích, phát triển kỹ năng, xây dựng bản lĩnh và kết nối bạn bè.
            </p>
            <p className="font-body text-base md:text-lg text-white/70 leading-relaxed">
              Mỗi CLB là một hành trình riêng – nơi bạn dám thử, dám sáng tạo và tạo nên những trải nghiệm đáng nhớ trong ba năm trung học phổ thông.
            </p>
            <div className="pt-4 flex items-center gap-6">
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-orange">09</p>
                <p className="font-body text-xs text-white/40 tracking-widest uppercase mt-1">Câu lạc bộ</p>
              </div>
              <div className="w-px h-12 bg-white/10" aria-hidden="true" />
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-white">01</p>
                <p className="font-body text-xs text-white/40 tracking-widest uppercase mt-1">Cộng đồng</p>
              </div>
              <div className="w-px h-12 bg-white/10" aria-hidden="true" />
              <div className="text-center">
                <p className="font-heading text-3xl font-black text-white">∞</p>
                <p className="font-body text-xs text-white/40 tracking-widest uppercase mt-1">Trải nghiệm</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
