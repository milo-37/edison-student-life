import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Edison Brand Colors
        "edison-blue": "#0B5DB3",
        "edison-blue-2": "#1672C4",
        "edison-blue-deep": "#084A91",
        "edison-blue-light": "#EAF4FF",
        "edison-blue-soft": "#F4F9FF",
        "edison-orange": "#FF6B00",
        "edison-orange-hover": "#E85F00",
        "edison-orange-soft": "#FFF1E6",
        // Semantic
        "background": "#FFFFFF",
        "background-soft": "#FAFCFE",
        "foreground": "#243142",
        "muted": "#687384",
        "border-light": "#DCE5EC",
        // Legacy (keep for any remaining usage)
        "navy-dark": "#071A33",
        "navy": "#0D2C54",
        "orange": "#FF6B00",
        "gray-light": "#F3F6F8",
        "gray-muted": "#687384",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem, 10vw, 9rem)", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem, 7vw, 7rem)", { lineHeight: "0.92", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem, 5vw, 5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "display-sm": ["clamp(1.5rem, 4vw, 3.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "section": "clamp(3rem, 6vw, 6rem)",
        "section-sm": "clamp(2rem, 4vw, 4rem)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        // Edison light gradients
        "gradient-edison": "linear-gradient(180deg, #FFFFFF 0%, #F4F9FF 100%)",
        "gradient-soft-blue": "linear-gradient(180deg, #F4F9FF 0%, #EAF4FF 100%)",
        "gradient-hero": "linear-gradient(160deg, #FFFFFF 0%, #F4F9FF 60%, #EAF4FF 100%)",
        // Edison blue section (for CTA, quote etc.)
        "gradient-edison-blue": "linear-gradient(135deg, #0B5DB3 0%, #084A91 100%)",
        // Legacy (kept for any remaining usage)
        "gradient-navy": "linear-gradient(180deg, #071A33 0%, #0D2C54 100%)",
        "gradient-dark": "linear-gradient(180deg, #050F1F 0%, #071A33 100%)",
        "gradient-orange-glow": "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,0,0.08) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
