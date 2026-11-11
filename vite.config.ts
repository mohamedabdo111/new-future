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

export default defineConfig({
  nitro: isNetlify ? false : undefined,
  plugins: isNetlify ? [netlify()] : [],
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
