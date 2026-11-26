import { defineConfig, type PluginOption } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import netlify from "@netlify/vite-plugin-tanstack-start";

// Netlify sets NETLIFY=true during its builds; it gets its own deploy plugin instead of Nitro.
const isNetlify = process.env.NETLIFY === "true";

// `npm run build:static` prerenders every page to plain HTML in dist/client,
// ready to upload to Hostinger's public_html. No server is built in this mode.
const isStatic = process.env.STATIC_BUILD === "true";

export default defineConfig(({ command }) => {
  const deployPlugins: PluginOption[] = [];
  if (command === "build" && !isStatic) {
    deployPlugins.push(isNetlify ? netlify() : nitro());
  }

  return {
    server: { host: "::", port: 8080 },
    resolve: {
      dedupe: ["react", "react-dom", "@tanstack/react-query"],
    },
    plugins: [
      tailwindcss(),
      tsConfigPaths({ projects: ["./tsconfig.json"] }),
      tanstackStart({
        // src/server.ts wraps the default handler so SSR crashes show a friendly error page.
        server: { entry: "server" },
        ...(isStatic && {
          prerender: {
            enabled: true,
            crawlLinks: false,
            autoSubfolderIndex: true,
            failOnError: true,
          },
          pages: [
            { path: "/" },
            { path: "/about-us" },
            { path: "/our-services" },
            { path: "/get-in-touch" },
            // .htaccess serves this file for unknown URLs.
            { path: "/404", prerender: { outputPath: "/404.html" } },
          ],
        }),
      }),
      ...deployPlugins,
      viteReact(),
    ],
  };
});
