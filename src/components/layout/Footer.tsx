import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0B5DB3 0%, #084A91 100%)" }}
      role="contentinfo"
    >
      {/* Subtle grid on dark */}
      <div className="absolute inset-0 grid-bg-light opacity-10" aria-hidden="true" />

      <Container className="relative z-10">
        <div
          className="flex flex-col md:flex-row md:items-start md:justify-between gap-10"
          style={{ paddingTop: "56px", paddingBottom: "40px" }}
        >
          {/* Brand */}
          <div className="max-w-xs">
            <p className="font-heading text-[10px] font-semibold tracking-[0.2em] text-white/50 uppercase mb-1">
              THPT Edison
            </p>
            <p className="font-heading text-2xl font-black text-white mb-4">
              STUDENT LIFE
            </p>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              Khám phá những câu lạc bộ, đam mê và khoảnh khắc tạo nên một tuổi trẻ đáng nhớ tại THPT Edison.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <p className="font-heading text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase mb-4">Điều hướng</p>
            <ul className="space-y-3" role="list">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-heading text-sm font-semibold text-white/70 hover:text-[#FF6B00] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Categories */}
          <div>
            <p className="font-heading text-[10px] font-bold tracking-[0.18em] text-white/40 uppercase mb-4">Câu lạc bộ</p>
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
                    className="font-heading text-sm font-semibold text-white/70 hover:text-[#FF6B00] transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <p className="font-body text-xs text-white/35">
            © {year} THPT Edison. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/25">
            Edison Student Life
          </p>
        </div>
      </Container>
    </footer>
  );
}
