import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

interface NextClubProps {
  nextClub: Club;
}

export function NextClub({ nextClub }: NextClubProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B5DB3 0%, #084A91 100%)" }}
      aria-label="Câu lạc bộ tiếp theo"
    >
      <Link
        href={`/clubs/${nextClub.slug}`}
        className="group block relative"
        style={{ minHeight: "40svh" }}
        aria-label={`Xem tiếp: ${nextClub.name}`}
      >
        {/* Background image */}
        <Image
          src={nextClub.coverImage}
          alt=""
          fill
          className="object-cover opacity-20 group-hover:opacity-30 group-hover:scale-[1.02] transition-all duration-700"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,74,145,0.95) 0%, rgba(11,93,179,0.6) 60%, transparent 100%)" }}
        />
        <div className="absolute inset-0 grid-bg-light opacity-10" aria-hidden="true" />

        {/* Content */}
        <Container className="relative z-10 h-full flex flex-col justify-end py-11">
          <FadeIn>
            <p className="section-label mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
              NEXT CLUB
            </p>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-heading text-sm font-bold tracking-[0.18em] mb-2" style={{ color: "rgba(255,107,0,0.6)" }}>
                  {nextClub.number}
                </p>
                <h2
                  className="font-heading font-black text-white leading-none group-hover:text-white transition-colors"
                  style={{ fontSize: "clamp(1.8rem, 6vw, 4.5rem)" }}
                >
                  {nextClub.name.replace("Câu lạc bộ ", "").toUpperCase()}
                  <span className="text-[#FF6B00]">.</span>
                </h2>
                <p className="font-body text-base mt-2" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {nextClub.slogan}
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0 mb-2">
                <span className="font-heading text-xs font-bold tracking-[0.15em] text-white/40 uppercase group-hover:text-[#FF6B00] transition-colors">KHÁM PHÁ</span>
                <ArrowRight
                  className="h-5 w-5 text-white/30 group-hover:text-[#FF6B00] group-hover:translate-x-1 transition-all duration-300"
                  aria-hidden="true"
                />
              </div>
            </div>
          </FadeIn>
        </Container>
      </Link>
    </section>
  );
}
