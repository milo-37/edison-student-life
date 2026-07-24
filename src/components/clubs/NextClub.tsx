import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Club } from "@/types";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/animations/FadeIn";

interface NextClubProps {
  nextClub: Club;
}

export function NextClub({ nextClub }: NextClubProps) {
  return (
    <section className="bg-navy relative overflow-hidden" aria-label="Câu lạc bộ tiếp theo">
      <Link
        href={`/clubs/${nextClub.slug}`}
        className="group block relative h-[50vh] min-h-[280px]"
        aria-label={`Xem tiếp: ${nextClub.name}`}
      >
        {/* Background image */}
        <Image
          src={nextClub.coverImage}
          alt=""
          fill
          className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-[1.02] transition-all duration-700"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-navy-dark/60 to-transparent" />

        {/* Content */}
        <Container className="relative z-10 h-full flex flex-col justify-end pb-12">
          <FadeIn>
            <p className="section-label mb-4">NEXT CLUB</p>
            <div className="flex items-end justify-between gap-8">
              <div>
                <p className="font-heading text-sm font-bold tracking-[0.2em] text-orange/50 mb-2">
                  {nextClub.number}
                </p>
                <h2
                  className="font-heading font-black text-white leading-none group-hover:text-white transition-colors"
                  style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
                >
                  {nextClub.name.replace("Câu lạc bộ ", "").toUpperCase()}
                  <span className="text-orange">.</span>
                </h2>
                <p className="font-body text-sm text-white/40 mt-2">{nextClub.slogan}</p>
              </div>
              <ArrowUpRight
                className="h-8 w-8 text-white/30 group-hover:text-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 shrink-0 mb-2"
                aria-hidden="true"
              />
            </div>
          </FadeIn>
        </Container>
      </Link>
    </section>
  );
}
