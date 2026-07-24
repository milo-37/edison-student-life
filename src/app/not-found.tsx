import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-dark flex items-center">
      <Container>
        <div className="relative">
          {/* Big 404 */}
          <p
            className="font-heading font-black text-white/5 leading-none select-none"
            style={{ fontSize: "clamp(8rem, 25vw, 20rem)" }}
            aria-hidden="true"
          >
            404
          </p>

          {/* Content overlay */}
          <div className="-mt-8 md:-mt-16 relative z-10 max-w-lg">
            <p className="section-label mb-4">Trang không tìm thấy</p>
            <h1 className="font-heading font-black text-white leading-none mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
              OOPS.<br />
              <span className="text-orange">LOST?</span>
            </h1>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-10 max-w-sm">
              Trang bạn tìm kiếm không tồn tại. Hãy thử khám phá các câu lạc bộ của chúng tôi!
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/"
                className="inline-flex items-center justify-center font-heading text-sm font-bold tracking-[0.15em] uppercase bg-orange text-navy-dark px-8 py-4 hover:bg-orange/90 transition-colors duration-200 min-h-[52px]"
              >
                VỀ TRANG CHỦ
              </Link>
              <Link
                href="/clubs"
                className="inline-flex items-center justify-center font-heading text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 px-8 py-4 transition-all duration-200 min-h-[52px]"
              >
                KHÁM PHÁ CÂU LẠC BỘ
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
