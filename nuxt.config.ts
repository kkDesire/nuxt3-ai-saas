// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase', '@nuxt/icon'],
  components: [
    {
      path: '~/components/ui',
      extensions: ['.vue'],
      prefix: '',
    },
    {
      path: '~/components/shared',
      extensions: ['.vue'],
      prefix: '',
    },
    {
      path: '~/components',
      extensions: ['.vue'],
      prefix: '',
    },
  ],
  supabase: {
    redirectOptions: {
      login: '/auth',
      callback: '/confirm',
      exclude: ['/'],
    },
  },

  runtimeConfig: {
    openaiKey: '',
  },
})
