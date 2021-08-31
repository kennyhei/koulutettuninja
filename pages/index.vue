<template>
  <div>
    <v-hero :settings="settings" />
    <!-- Contents -->
    <div class="container">
      <v-introduction />
      <v-pricing />
    </div>
    <v-footer :contact-info="settings.contact" />
  </div>
</template>

<script>
import store from '~/store/index.js'

import VHero from '~/components/VHero'
import VIntroduction from '~/components/VIntroduction'
import VPricing from '~/components/VPricing'
import VFooter from '~/components/VFooter'

export default {
  name: 'HomePage',
  components: {
    VHero,
    VIntroduction,
    VPricing,
    VFooter
  },
  async asyncData ({ $http }) {
    // TODO: Refactor + use define API URL env variable
    const settings = await $http.$get('http://localhost:8000/api/general_settings/1')
    const contents = await $http.$get('http://localhost:8000/api/contents')
    const services = await $http.$get('http://localhost:8000/api/categories')
    store.state.settings = settings
    store.state.contents = contents
    store.state.services = services
    return { settings, contents, services }
  }
}
</script>
