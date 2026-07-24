import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { clubs, getClubBySlug, getAdjacentClubs } from "@/data/clubs";
import { siteConfig } from "@/data/site";
import { ClubHero } from "@/components/clubs/ClubHero";
import { ClubAbout } from "@/components/clubs/ClubAbout";
import { ClubHighlights } from "@/components/clubs/ClubHighlights";
import { ClubSkills } from "@/components/clubs/ClubSkills";
import { ClubGallery } from "@/components/clubs/ClubGallery";
import { ClubQuote } from "@/components/clubs/ClubQuote";
import { NextClub } from "@/components/clubs/NextClub";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return clubs.map((club) => ({ slug: club.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const club = getClubBySlug(slug);
  if (!club) return {};

  return {
    title: `${club.name} | ${siteConfig.name}`,
    description: club.intro,
    openGraph: {
      title: `${club.name} | ${siteConfig.name}`,
      description: club.intro,
      url: `${siteConfig.url}/clubs/${club.slug}`,
    },
  };
}

export default async function ClubDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const club = getClubBySlug(slug);

  if (!club) notFound();

  const { next } = getAdjacentClubs(slug);

  return (
    <>
      <ClubHero club={club} />
      <ClubAbout club={club} />
      <ClubHighlights club={club} />
      <ClubSkills club={club} />
      <ClubGallery club={club} />
      <ClubQuote club={club} />
      {next && <NextClub nextClub={next} />}
    </>
  );
}
