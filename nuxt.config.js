import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

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
      { rel: 'apple-touch-icon', type: 'image/png', href: '/ninjamarttinen_logo.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'animate.css',
    '@/assets/css/global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/vue-smooth-scroll.client.js',
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
    base: '/'
  }
}
