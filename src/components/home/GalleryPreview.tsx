import Link from "next/link";
import Image from "next/image";
import { clubs } from "@/data/clubs";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function GalleryPreview() {
  const previewClubs = clubs.slice(0, 6);

  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #EAF4FF 0%, #F4F9FF 100%)", paddingTop: "56px", paddingBottom: "64px" }}
      aria-label="Xem trước gallery câu lạc bộ"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 grid-bg-light opacity-40" aria-hidden="true" />

      {/* Top accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(11,93,179,0.2), transparent)" }}
        aria-hidden="true"
      />

      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <FadeIn>
            <p className="section-label mb-3">04 / MOMENTS</p>
            <h2
              className="font-heading font-black text-[#0B5DB3] leading-none"
              style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
            >
              STORIES
              <br />
              <span style={{ color: "rgba(11,93,179,0.2)" }}>FROM EDISON.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.15}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-[#0B5DB3] hover:text-[#FF6B00] transition-colors duration-200 underline-anim self-start md:self-auto"
              aria-label="Xem tất cả ảnh gallery"
            >
              XEM TẤT CẢ →
            </Link>
          </FadeIn>
        </div>

        {/* Gallery grid — 2 col mobile, 3 col desktop */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {previewClubs.map((club, i) => {
            const isTall = i === 0 || i === 3;
            return (
              <StaggerItem
                key={club.slug}
                className={`relative overflow-hidden group rounded-xl ${
                  isTall ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Link href={`/clubs/${club.slug}`} aria-label={`Xem ${club.name}`} className="block w-full h-full">
                  <Image
                    src={club.gallery[0].src}
                    alt={club.gallery[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#0B5DB3]/10 group-hover:bg-[#0B5DB3]/5 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-white/90 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-heading text-[10px] font-bold text-[#FF6B00] mb-0.5">
                      {club.number}
                    </p>
                    <p className="font-heading text-xs font-bold text-[#0B5DB3]">
                      {club.name.replace("Câu lạc bộ ", "")}
                    </p>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
