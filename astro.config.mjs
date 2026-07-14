import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

/** Variantes AB só para Ads — fora do sitemap orgânico para evitar conteúdo duplicado. */
const EXCLUDED_FROM_SITEMAP = [
  "https://rsmotorsport.com.br/lp/oficina-mecanica-campo-bom-a/",
  "https://rsmotorsport.com.br/lp/oficina-mecanica-campo-bom-b/",
];

const PRIORITY_BY_PATH = {
  "/": 1.0,
  "/lp/oficina-mecanica-campo-bom/": 0.9,
  "/lp/troca-de-oleo/": 0.9,
  "/lp/revisao/": 0.9,
  "/lp/importados/": 0.8,
  "/lp/performance/": 0.8,
  "/lp/lavagem/": 0.8,
};

export default defineConfig({
  site: "https://rsmotorsport.com.br",
  trailingSlash: "always",
  integrations: [
    react(),
    sitemap({
      filter: (page) => !EXCLUDED_FROM_SITEMAP.includes(page),
      changefreq: "weekly",
      lastmod: new Date(),
      serialize(item) {
        const pathname = new URL(item.url).pathname;
        const priority = PRIORITY_BY_PATH[pathname] ?? 0.7;

        return {
          ...item,
          priority,
          changefreq: pathname === "/" ? "weekly" : "weekly",
          lastmod: new Date(),
        };
      },
    }),
  ],
  output: "static",
});
