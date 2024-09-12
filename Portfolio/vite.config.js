import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    wasm(),
    topLevelAwait(),
    viteStaticCopy({
      targets: [
        {
          src: 'bin/example.wasm',
          dest: 'wasm-files'
        }
      ]
    })
  ],
  worker: {
    // Not needed with vite-plugin-top-level-await >= 1.3.0
    // format: "es",
    plugins: [
      wasm(),
      topLevelAwait()
    ]
  }
});
// https://vitejs.dev/config/
