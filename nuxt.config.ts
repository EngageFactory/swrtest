// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-01',
    nitro: {
        preset: 'netlify-edge',
        // routeRules: {
        //     '/api/**': { cache: false, swr: false },
        },
    },
    // routeRules: {
    //     '/api/**': { cache: false, swr: false },
    // },
})
