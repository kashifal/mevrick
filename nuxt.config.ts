// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/main.css"],
  modules: ["@nuxtjs/i18n", "@nuxt/image"],
  devtools: { enabled: true },
  i18n: {
    vueI18n: "./i18n.config.js", // if you are using custom path, default
  },
});