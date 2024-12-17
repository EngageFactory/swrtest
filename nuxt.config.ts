// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // compatibilityDate: '2024-08-01',
    nitro: {
        preset: 'netlify-builder',
        routeRules: {
            '/api/**': { cache: false, swr: false },
        },
    },
    // routeRules: {
    //     '/api/**': { cache: false, swr: false },
    // },
})
