import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  root: "./",
  publicDir: "./public",
  server: {
    port: 5173
  },
  build: {
    emptyOutDir: true,
    outDir: "./dist",
    copyPublicDir: true,
    cssMinify: "lightningcss"
  },
  plugins: [tailwindcss(), react()],
});
