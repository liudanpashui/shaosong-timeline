import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const base =
  process.env.NODE_ENV === "production" ? "/shaosong-timeline/" : "/";

export default defineConfig({
  plugins: [react()],
  base,
  server: {
    open: true, // Opens the browser when the dev server starts
  },
  assetsInclude: ["**/*.csv"],
});
