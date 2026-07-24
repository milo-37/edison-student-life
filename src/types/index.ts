export type GalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ClubHighlight = {
  title: string;
  description?: string;
};

export type Club = {
  id: string;
  number: string;
  name: string;
  englishName?: string;
  slug: string;

  slogan: string;

  intro: string;
  description: string[];

  highlights: ClubHighlight[];

  skills: string[];

  suitableFor?: string;

  closingMessage?: string;
  quote?: string;

  coverImage: string;
  heroImages: string[];
  gallery: GalleryImage[];

  category: "academic" | "creative" | "sports" | "performing";

  accent?: string;
};

export type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
  clubSlug: string;
  clubName: string;
  category: "academic" | "creative" | "sports" | "performing";
};
