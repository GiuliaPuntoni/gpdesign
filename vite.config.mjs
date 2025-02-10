import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Punto di ingresso
      name: "gpdesign",
      fileName: (format) => `gpdesign.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./style.css";`, // Importa il CSS nel build
      },
    },
  },
});
