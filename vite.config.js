import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Domain website saat sudah online — GANTI dengan domain yang sebenarnya.
// Bisa juga diatur lewat env saat build: SITE_URL=https://domain.com npm run build
const SITE_URL = (process.env.SITE_URL || "https://ascenlabs.site").replace(
  /\/$/,
  ""
);

/**
 * Isi %SITE_URL% di index.html, lalu buat robots.txt & sitemap.xml saat build
 * supaya domain cukup diatur di satu tempat.
 */
function seo() {
  return {
    name: "ascen-seo",
    // "pre": harus sebelum Vite memproses href, karena "%SI…" dianggap URL rusak.
    transformIndexHtml: {
      order: "pre",
      handler: (html) => html.replaceAll("%SITE_URL%", SITE_URL),
    },
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10);

      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`,
      });

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), seo()],
});
