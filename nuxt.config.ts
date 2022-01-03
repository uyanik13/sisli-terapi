import { defineNuxtConfig } from 'nuxt3'
import { VitePWA } from 'vite-plugin-pwa'
import pwaConfigurationFactory from './pwaConfiguration'

/// //////////////////////////////////////////////
// Site config
// Domain where the website will be deployed
const productionUrl = 'ai.oguruyanik.com'
const useLocalSupabase = false
const siteName = 'Ogur Uyanik AI Apps'
const siteShortName = 'Ogur Uyanik AI Apps'
const siteDescription = 'Ai apps with nuxt 3 and python backend'
const twitterUser = '@uguruyanikk'
const isGithubPages = false // true if deployed to github pages
const githubRepositoryName = 'nuxt'
/// //////////////////////////////////////////////

const isDev = process.env.NODE_ENV === 'development'

export default defineNuxtConfig({
  // Environment variables
  publicRuntimeConfig: {
     axios: {
          baseURL: process.env.HOT_POT_API_URL
        },
  },


  //ssr:true,
  meta: {
    title: siteName,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // required theme-color: pwa
      { name: 'theme-color', content: '#f69435' },
      { name: 'format-detection', content: 'telephone=no' },
      // OG Social Media Cards
      { hid: 'description', name: 'description', content: siteDescription },
      { property: 'og:site_name', content: siteName },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: `https://${productionUrl}` },
      { hid: 'og:title', property: 'og:title', content: siteName },
      { hid: 'og:description', property: 'og:description', content: siteDescription },
      { hid: 'og:image', property: 'og:image', content: `https://${productionUrl}/OG-card.png` },
      { property: 'og:image:width', content: '740' },
      { property: 'og:image:height', content: '300' },
      { name: 'twitter:site', content: twitterUser },
      { name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:url', name: 'twitter:url', content: `https://${productionUrl}` },
      { hid: 'twitter:title', name: 'twitter:title', content: siteName },
      { hid: 'twitter:description', name: 'twitter:description', content: siteDescription },
      { hid: 'twitter:image', name: 'twitter:image', content: `https://${productionUrl}/OG-card.png` }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/logo/favicon.png' },
      // required manifest, apple-touch-icon and mask-icon: pwa
      // add manifest.webmanifest only on build?
      { rel: 'manifest', href: '/manifest.webmanifest' },
      { rel: 'apple-touch-icon', href: '/logo/logox256.png', sizes: '256x256' },
      { rel: 'mask-icon', href:  '/logo/logox256.png', color: '#ffffff' },
    ],
    htmlAttrs: {
      'data-theme': 'light' // https://daisyui.com/docs/default-themes
    }
  },
  css: ['~/assets/css/tailwind.css'],

  // server middleware to serve sw.js, workbox-**.js and manifest.webmanifest
  serverMiddleware: [
    { path: '/', handler: '~/server-middleware/sw.js'},
  ],

  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },

  // buildDir: 'nuxt-build',

  modules: [
     //['@nuxtjs/axios',{ proxyHeaders:false }],
  ],
  buildModules: [
    '@pinia/nuxt',
    '@intlify/nuxt3'
  ],


  vite: {
    plugins: [
      VitePWA(pwaConfigurationFactory(false, undefined, siteName, siteShortName, siteDescription))
    ]
  }
})
