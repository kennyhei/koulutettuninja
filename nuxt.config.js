import fs from 'fs'
import dotenv from 'dotenv'
import axios from 'axios'

dotenv.config({ path: '.env' })

function saveImage(image, name) {
  if (!image) {
    return
  }
  axios(image, { responseType: 'arraybuffer' })
  .then(res => {
    fs.writeFile(
      `assets/images/${name}`, res.data, 'binary', (err) => {
        if (err) {
          console.log(err)
          return
        }
      }
    )
  })
}

axios(process.env.API_URL + '/general_settings/1')
.then(res => {
  const { header_background_image, header_profile_picture } = res.data
  saveImage(header_background_image, 'hieronta-jyvaskyla.webp')
  saveImage(header_profile_picture, 'hieroja-jyvaskyla.webp')
})

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hieroja Ninja Marttinen – Jyväskylä, Kuokkala',
    htmlAttrs: {
      lang: 'fi'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Laadukasta ja monipuolista hierontaa Jyväskylän Kuokkalassa. Olen sekä koulutettu hieroja että urheiluhieroja. Tule hierontaan nauttimaan omasta ajastasi!' },
      { name: 'robots', content: 'index, follow' },
      // Open Graph / Facebook
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://ninjamarttinen.fi' },
      { name: 'og:title', content: 'Hieroja Ninja Marttinen – Jyväskylä, Kuokkala' },
      { name: 'og:description', content: 'Laadukasta ja monipuolista hierontaa Jyväskylän Kuokkalassa. Olen sekä koulutettu hieroja että urheiluhieroja. Tule hierontaan nauttimaan omasta ajastasi!' },
      { name: 'og:image', content: 'https://kennyhei1.eu.pythonanywhere.com/media/hieroja-jyvaskyla.webp' },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:url', content: 'https://ninjamarttinen.fi' },
      { name: 'twitter:title', content: 'Hieroja Ninja Marttinen – Jyväskylä, Kuokkala' },
      { name: 'twitter:description', content: 'Laadukasta ja monipuolista hierontaa Jyväskylän Kuokkalassa. Olen sekä koulutettu hieroja että urheiluhieroja. Tule hierontaan nauttimaan omasta ajastasi!' },
      { name: 'twitter:image', content: 'https://kennyhei1.eu.pythonanywhere.com/media/hieroja-jyvaskyla.webp' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '57x57', href: '/icons/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '60x60', href: '/icons/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '72x72', href: '/icons/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '76x76', href: '/icons/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '114x114', href: '/icons/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '120x120', href: '/icons/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '144x144', href: '/icons/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '152x152', href: '/icons/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/icons/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css',
    '@/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-gtag.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // i.e. no need to do this: "import [component] from [path]"
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // '@nuxtjs/google-analytics',
    'nuxt-purgecss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap'
  ],
  // Sitemap
  sitemap: {
    hostname: 'https://ninjamarttinen.fi',
    defaults: {
      changefreq: 'weekly',
      priority: 1,
      lastmod: new Date()
    }
  },

  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  // PurgeCSS
  purgeCSS: {
    enabled: true,
    // Scan CSS classes from these paths and
    // do not purge them if they are in use
    paths: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      // b-navbar
      'node_modules/buefy/src/components/navbar/*.vue',
      'node_modules/buefy/src/scss/components/_navbar.scss',
      // b-tooltip
      'node_modules/buefy/src/components/tooltip/*.vue',
      'node_modules/buefy/src/scss/components/_tooltip.scss',
      // b-icon
      'node_modules/buefy/src/components/icon/*.vue',
      'node_modules/buefy/src/scss/components/_icon.scss',
      // b-button
      'node_modules/buefy/src/components/button/*.vue',
      // b-collapse
      'node_modules/buefy/src/components/collapse/*.vue'
    ],
    styleExtensions: ['.css', '.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    subFolders: true
  },
  router: {
    base: '/',
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        const el = await findEl(to.hash)
        const top = el.getBoundingClientRect().top + document.documentElement.scrollTop - 50
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: top, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, top)
        }
      }
    }
  }
}
