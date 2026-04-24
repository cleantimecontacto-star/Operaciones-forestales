import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { mockupPreviewPlugin } from "./mockupPreviewPlugin";

// For dev: PORT and BASE_PATH are required. For build (Vercel): use defaults.
const isDev = process.env.NODE_ENV !== "production";

const rawPort = process.env.PORT;
const port = rawPort ? Number(rawPort) : 3000;

const basePath = process.env.BASE_PATH ?? "/";

const plugins = [
  mockupPreviewPlugin(),
  react(),
  tailwindcss(),
];

// Only add Replit-specific plugins in dev/Replit environment
if (isDev) {
  try {
    const { default: runtimeErrorOverlay } = await import("@replit/vite-plugin-runtime-error-modal");
    plugins.push(runtimeErrorOverlay());
  } catch {
    // Not in Replit, skip
  }
}

if (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined) {
  try {
    const m = await import("@replit/vite-plugin-cartographer");
    plugins.push(
      m.cartographer({
        root: path.resolve(import.meta.dirname, ".."),
      })
    );
  } catch {
    // Not in Replit, skip
  }
}

export default defineConfig({
  base: basePath,
  plugins,
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
  preview: {
    port,
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
