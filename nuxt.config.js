import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ninja Marttinen – Koulutettu hieroja – Kerava',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Monipuoliset hierontapalvelut Keravalla. Olen koulutettu hieroja sekä urheiluhieroja, valmistuin vuonna 2017. Tule hierontaan nauttimaan omasta ajastasi!' },
      { name: 'robots', content: 'index, follow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css',
    '@/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/wow.client.js',
    '@/plugins/vue-smooth-scroll.client.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // i.e. no need to do this: "import [component] from [path]"
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/google-analytics',
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
    hostname: 'https://koulutettuninja.fi'
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
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
      'node_modules/buefy/src/components/button/*.vue'
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
    base: '/'
  }
}
