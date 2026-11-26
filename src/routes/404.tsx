import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/shared/NotFound";

// Static "page not found" route. The static build prerenders it to /404.html,
// which .htaccess serves for unknown URLs on Hostinger.
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [
      { title: "Page not found — Parisco Co." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: NotFound,
});
