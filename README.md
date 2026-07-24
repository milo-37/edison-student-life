# Edison Student Life

Mini website truyền thông cho hệ thống Câu lạc bộ học sinh **THPT Edison**.

🌐 **URL**: [edison-student-life.vercel.app](https://edison-student-life.vercel.app)  
📱 **Optimized**: Mobile-first, QR Code ready

---

## Tổng quan

Website **EDISON STUDENT LIFE** được xây dựng để giới thiệu 9 Câu lạc bộ học sinh tại THPT Edison. Người dùng chủ yếu truy cập qua **quét QR Code** từ poster, standee, banner, tài liệu tuyển sinh và tại các sự kiện của nhà trường.

### 9 Câu lạc bộ

| # | Câu lạc bộ | Category |
|---|---|---|
| 01 | Câu lạc bộ Văn học | Academic |
| 02 | Câu lạc bộ Tiếng Anh | Academic |
| 03 | Câu lạc bộ STEM | Academic |
| 04 | Câu lạc bộ Truyền thông | Creative |
| 05 | Câu lạc bộ Võ thuật | Sports |
| 06 | Câu lạc bộ Bóng rổ | Sports |
| 07 | Câu lạc bộ Bóng đá | Sports |
| 08 | Câu lạc bộ Nhảy hiện đại | Performing |
| 09 | Câu lạc bộ Âm nhạc | Performing |

---

## Stack

| Technology | Phiên bản | Mục đích |
|---|---|---|
| Next.js (App Router) | 16+ | Framework |
| TypeScript | 5+ | Type safety |
| Tailwind CSS | 4+ | Styling |
| Motion (Framer Motion) | Latest | Animations |
| Lucide React | Latest | Icons |

---

## Cấu trúc thư mục

```
src/
├── app/
│   ├── layout.tsx              # Root layout (Navbar, Footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + CSS variables
│   ├── not-found.tsx           # 404 page
│   ├── clubs/
│   │   ├── page.tsx            # /clubs - Club listing với filter
│   │   └── [slug]/
│   │       └── page.tsx        # /clubs/[slug] - Club detail (static)
│   ├── gallery/
│   │   └── page.tsx            # /gallery - Masonry gallery
│   └── q/
│       └── clubs/
│           └── route.ts        # QR redirect /q/clubs → /clubs
├── components/
│   ├── animations/             # Framer Motion wrappers
│   │   ├── FadeIn.tsx
│   │   ├── RevealText.tsx
│   │   ├── StaggerContainer.tsx
│   │   └── ImageReveal.tsx
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav với scroll effect
│   │   ├── MobileMenu.tsx      # Full-screen mobile menu
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Container.tsx
│   │   ├── Button.tsx
│   │   ├── ArrowLink.tsx
│   │   └── SectionLabel.tsx
│   ├── home/
│   │   ├── Hero.tsx            # Full-height hero với image collage
│   │   ├── Introduction.tsx
│   │   ├── ClubShowcase.tsx    # Editorial alternating showcase
│   │   ├── ClubIndex.tsx       # List với hover preview
│   │   ├── GalleryPreview.tsx  # Masonry preview
│   │   └── FinalCTA.tsx
│   ├── clubs/
│   │   ├── ClubHero.tsx
│   │   ├── ClubAbout.tsx
│   │   ├── ClubHighlights.tsx
│   │   ├── ClubSkills.tsx
│   │   ├── ClubGallery.tsx
│   │   ├── ClubQuote.tsx
│   │   ├── NextClub.tsx
│   │   └── ClubsGrid.tsx
│   └── gallery/
│       ├── Lightbox.tsx        # Fullscreen lightbox
│       └── GalleryClient.tsx
├── data/
│   ├── clubs.ts                # Dữ liệu 9 CLB (nguồn chính thức)
│   ├── gallery.ts              # Gallery items tổng hợp
│   └── site.ts                 # Cấu hình website
└── types/
    └── index.ts                # TypeScript interfaces
```

---

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000)

---

## Build & Deploy

### Build production

```bash
npm run build
npm start
```

### Deploy lên Vercel

1. Push code lên GitHub
2. Import repository vào [vercel.com](https://vercel.com)
3. Cấu hình:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (hoặc thư mục dự án)
   - Không cần environment variables đặc biệt

```bash
# Hoặc dùng Vercel CLI
npx vercel --prod
```

---

## Thay thế ảnh placeholder

Hiện tại website đang dùng **SVG placeholders** tự động tạo. Để thay bằng ảnh thực:

1. Mỗi CLB có thư mục tại `public/images/clubs/[slug]/`
2. Cần các file: `cover.webp`, `hero-01.webp`, `hero-02.webp`, `gallery-01.webp`, `gallery-02.webp`, `gallery-03.webp`
3. Ảnh trang chủ: `public/images/home/hero-01.webp` đến `hero-04.webp`

Khi đã có ảnh thực, thay đổi trong `src/data/clubs.ts` từ `.svg` sang `.webp` (hoặc bỏ `.replace(".webp", ".svg")` trong các components).

> **Lưu ý**: Ảnh nên được tối ưu ở kích thước:
> - `cover.webp`: 800×1000px
> - `hero-*.webp`: 1600×900px  
> - `gallery-*.webp`: 1200×(600-800)px

---

## Brand Colors

| Name | Hex |
|---|---|
| Navy Dark | `#071A33` |
| Navy | `#0D2C54` |
| Orange | `#F58220` |
| White | `#FFFFFF` |
| Gray Light | `#F4F6F8` |
| Gray Muted | `#94A3B8` |

---

## Accessibility

- ✅ Semantic HTML (`nav`, `main`, `section`, `footer`, `article`)
- ✅ `aria-label` trên tất cả interactive elements
- ✅ `aria-current="page"` trên nav active links
- ✅ `focus-visible` styles
- ✅ Keyboard navigation (Lightbox: Escape, ←, →)
- ✅ `prefers-reduced-motion` support
- ✅ Minimum touch target 44px
- ✅ Alt text trên tất cả images

---

© 2025 THPT Edison. All rights reserved.
