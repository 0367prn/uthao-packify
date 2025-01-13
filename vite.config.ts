import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  base: "/", // This ensures assets are loaded correctly from the root path
  server: {
    host: "0.0.0.0",
    port: 8080,
    strictPort: true,
  },
  build: {
    outDir: "dist", // Output directory for production build
    assetsDir: "assets", // Where to place assets
    sourcemap: false, // Disable sourcemaps in production for better performance
    minify: "terser", // Use terser for better minification
    rollupOptions: {
      output: {
        manualChunks: undefined, // Optimize chunk splitting
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));