import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(import.meta.url);

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "../src/index.js"),
      name: "vk-design",
      fileName: "vk-design",
    },
  },
  plugins: [vue()],
});
