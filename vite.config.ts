import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";


export default defineConfig(({ command }) => ({
  ssr: {
    noExternal: command === "build" ? true : undefined,
  },
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  build: {
    // Increase the chunk warning limit if needed or use manual chunks to split code
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Example: separate node_modules into its own chunk
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
  optimizeDeps: {
    // Exclude the module causing eval warning
    exclude: ['@protobufjs/inquire']
  }
}));