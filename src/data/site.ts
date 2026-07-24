export const siteConfig = {
  name: "Edison Student Life",
  fullName: "EDISON STUDENT LIFE",
  school: "THPT Edison",
  description:
    "Khám phá các câu lạc bộ, đam mê và những khoảnh khắc nổi bật trong đời sống học sinh THPT Edison.",
  url: "https://edison-student-life.vercel.app",
  ogImage: "/images/og-image.webp",
  locale: "vi",
  nav: [
    { label: "Trang chủ", href: "/" },
    { label: "Câu lạc bộ", href: "/clubs" },
    { label: "Gallery", href: "/gallery" },
  ],
  categories: [
    { value: "all", label: "Tất cả" },
    { value: "academic", label: "Học thuật" },
    { value: "creative", label: "Sáng tạo" },
    { value: "sports", label: "Thể thao" },
    { value: "performing", label: "Nghệ thuật" },
  ],
} as const;
