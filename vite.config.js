import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const getBase = () => {
  // For GitHub Pages
  if (process.env.GITHUB_PAGES === "true") {
    return "/shaosong-timeline/";
  }
  // For Vercel, Netlify, or local development
  return "/";
};

export default defineConfig({
  plugins: [react()],
  base: getBase(),
  server: {
    open: true,
  },
  assetsInclude: ["**/*.csv"],
});
