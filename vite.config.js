import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
config();

export default defineConfig({
  plugins: [react()],

  css: {
    postcss: "./postcss.config.js",
  },
  
  server: {
    proxy: {
      "/api": {
        target: "https://twitter-gray-gamma.vercel.app" ,
        changeOrigin: true,
      },
    },
  },
});
