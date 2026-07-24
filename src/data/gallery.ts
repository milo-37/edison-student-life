import type { GalleryItem } from "@/types";
import { clubs } from "./clubs";

// Collect gallery images from all clubs with their metadata
export const galleryItems: GalleryItem[] = clubs.flatMap((club) =>
  club.gallery.map((img) => ({
    src: img.src,
    alt: img.alt,
    caption: img.caption,
    clubSlug: club.slug,
    clubName: club.name,
    category: club.category,
  }))
);

export function getGalleryByCategory(
  category: "all" | "academic" | "creative" | "sports" | "performing"
): GalleryItem[] {
  if (category === "all") return galleryItems;
  return galleryItems.filter((item) => item.category === category);
}
