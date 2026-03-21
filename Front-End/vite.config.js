import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,png,svg}"],
      },
      manifest: {
        name: "ScamPulse",
        short_name: "ScamPulse",
        description:
          "ScamPulse Real-Time Protection From Digital Scams Instantly detect fake messages, phishing links, and fake payment screenshots using smart AI-based protection.",
        theme_color: "#14b8a6",
        icons: [
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/pwa-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/pwa-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/pwa-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/pwa-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
