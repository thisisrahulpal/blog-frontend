import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

config();
console.log("process.env.VITE_BASE_URL", process.env.VITE_BASE_URL);

// Now you should be able to access process.env.VITE_BASE_URL
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
