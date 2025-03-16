import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()], // Enable Vue plugin
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Use `@/` as an alias for `src/`
    },
  },
  server: {
    port: 3000,  // Run the dev server on port 3000
    open: true,  // Open the browser automatically
  },
});