// Shared Vite/TanStack config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Netlify sets NETLIFY=true during its builds. There we swap the shared config's Nitro
// (Cloudflare-by-default) deploy step for the Netlify plugin, so the two never both emit
// a server build. Everywhere else (Lovable/Cloudflare builds, local dev) nothing changes.
const isNetlify = process.env.NETLIFY === "true";

// `npm run build:static` sets STATIC_BUILD=true. It prerenders every page to plain HTML
// (dist/client) so the site can be uploaded to static hosting such as Hostinger's public_html.
// No server deploy step runs in this mode. Normal builds (Lovable/Cloudflare, Netlify) are unchanged.
const isStatic = process.env.STATIC_BUILD === "true";

export default defineConfig({
  nitro: isNetlify || isStatic ? false : undefined,
  plugins: isNetlify && !isStatic ? [netlify()] : [],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    ...(isStatic && {
      prerender: {
        enabled: true,
        // Every route is listed in `pages` below, so link crawling isn't needed.
        crawlLinks: false,
        autoSubfolderIndex: true,
        failOnError: true,
      },
      pages: [
        { path: "/" },
        { path: "/about-us" },
        { path: "/our-services" },
        { path: "/get-in-touch" },
        // Rendered by the router's notFoundComponent; served by .htaccess for unknown URLs.
        { path: "/404", prerender: { outputPath: "/404.html" } },
      ],
    }),
  },
});
