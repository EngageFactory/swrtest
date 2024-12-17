// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    // nitro: {
    //     preset: 'netlify-builder',
    // },
    routeRules: {
        '/api/**': { cache: false, swr: false, cors: true, prerender: false },
    },
})
