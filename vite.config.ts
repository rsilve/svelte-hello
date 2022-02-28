import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

let hmr = {};
if (process.env.GITPOD_GIT_USER_EMAIL) {
  hmr = { port : 443 }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: { hmr },
  plugins: [svelte()]
})
