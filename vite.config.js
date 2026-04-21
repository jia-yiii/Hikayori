import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // eslint-disable-next-line no-undef
  base: process.env.NODE_ENV === "production" ? "/Hikayori/" : "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
});
