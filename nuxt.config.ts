// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore - defineNuxtConfig is auto-imported by Nuxt
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/tokens.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})

