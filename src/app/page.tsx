import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { ClubShowcase } from "@/components/home/ClubShowcase";
import { ClubIndex } from "@/components/home/ClubIndex";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { FinalCTA } from "@/components/home/FinalCTA";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.school}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.school}`,
    description: siteConfig.description,
    url: siteConfig.url,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <ClubShowcase />
      <ClubIndex />
      <GalleryPreview />
      <FinalCTA />
    </>
  );
}
