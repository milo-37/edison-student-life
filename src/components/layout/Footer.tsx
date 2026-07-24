import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-navy/10 pt-16 pb-8" role="contentinfo">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-heading text-[10px] font-semibold tracking-[0.2em] text-orange uppercase mb-1">
              THPT Edison
            </p>
            <p className="font-heading text-2xl font-bold text-navy mb-4">
              STUDENT LIFE
            </p>
            <p className="font-body text-sm text-navy/60 leading-relaxed font-medium">
              Khám phá những câu lạc bộ, đam mê và khoảnh khắc tạo nên một tuổi trẻ đáng nhớ tại THPT Edison.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="section-label mb-5">Điều hướng</p>
            <ul className="space-y-3" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-heading text-sm font-semibold text-navy/70 hover:text-navy transition-colors duration-200 underline-anim"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories */}
          <div>
            <p className="section-label mb-5">Câu lạc bộ</p>
            <ul className="space-y-3" role="list">
              {[
                { href: "/clubs?category=academic", label: "Học thuật" },
                { href: "/clubs?category=creative", label: "Sáng tạo" },
                { href: "/clubs?category=sports", label: "Thể thao" },
                { href: "/clubs?category=performing", label: "Nghệ thuật" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-heading text-sm font-semibold text-navy/70 hover:text-navy transition-colors duration-200 underline-anim"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-navy/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-navy/40 font-medium">
            © {year} THPT Edison. All rights reserved.
          </p>
          <p className="font-body text-xs text-navy/30 font-medium">
            Edison Student Life
          </p>
        </div>
      </Container>
    </footer>
  );
}
