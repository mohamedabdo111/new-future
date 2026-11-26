import { SITE } from "@/constants/site";

interface PageMetaOptions {
  /** Browser tab title. */
  title: string;
  /** Search result description. */
  description: string;
  /** Route path, e.g. "/about-us". */
  path: string;
  /** Image in public/og, e.g. "/og/about.jpg" (1200x630). */
  image: string;
  imageAlt: string;
  /** Share title; defaults to `title`. */
  ogTitle?: string;
  /** Share description; defaults to `description`. */
  ogDescription?: string;
}

export function pageMeta({
  title, description, path, image, imageAlt, ogTitle = title, ogDescription = description,
}: PageMetaOptions) {
  const url = `${SITE.url}${path}`;
  const imageUrl = `${SITE.url}${image}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: "en_US" },
      { property: "og:url", content: url },
      { property: "og:title", content: ogTitle },
      { property: "og:description", content: ogDescription },
      { property: "og:image", content: imageUrl },
      { property: "og:image:secure_url", content: imageUrl },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: imageAlt },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ogTitle },
      { name: "twitter:description", content: ogDescription },
      { name: "twitter:image", content: imageUrl },
      { name: "twitter:image:alt", content: imageAlt },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
