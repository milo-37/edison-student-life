import Link from "next/link";
import Image from "next/image";
import { clubs } from "@/data/clubs";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export function GalleryPreview() {
  // Pick first gallery image from 6 clubs for preview
  const previewClubs = clubs.slice(0, 6);

  return (
    <section
      className="py-24 md:py-36 bg-navy-dark overflow-hidden"
      aria-label="Xem trước gallery câu lạc bộ"
    >
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <FadeIn>
            <p className="section-label mb-4">03 / MOMENTS</p>
            <h2
              className="font-heading font-black text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              STORIES<br />
              <span className="text-white/20">FROM EDISON.</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200 underline-anim self-start md:self-auto"
              aria-label="Xem tất cả ảnh gallery"
            >
              XEM TẤT CẢ →
            </Link>
          </FadeIn>
        </div>

        {/* Masonry-like grid */}
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {previewClubs.map((club, i) => {
            const isLarge = i === 0 || i === 4;
            return (
              <StaggerItem
                key={club.slug}
                className={`relative overflow-hidden group ${
                  isLarge ? "row-span-2 aspect-[3/4]" : "aspect-[4/3]"
                }`}
              >
                <Link href={`/clubs/${club.slug}`} aria-label={`Xem ${club.name}`}>
                  <Image
                    src={club.gallery[0].src}
                    alt={club.gallery[0].alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-navy-dark/20 group-hover:bg-navy-dark/5 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-navy-dark/80 to-transparent translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <p className="font-heading text-xs font-semibold text-orange/80 mb-0.5">
                      {club.number}
                    </p>
                    <p className="font-heading text-sm font-bold text-white">
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
