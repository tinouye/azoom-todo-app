// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/global.css'
  ],
  app: {
    baseURL: '/', // This is usually '/', unless you're serving from a subdirectory
    cdnURL: '', // Leave blank unless you're using a CDN
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt']
})
