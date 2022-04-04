<template>
  <div>
    <v-hero />
    <!-- Contents -->
    <div class="container" style="padding-top: 2.25em;">
      <template v-for="content in contents">
        <v-content
          v-if="!content.hide_content"
          :key="content.order"
          :content="content"
        />
      </template>
    </div>
    <v-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import VHero from '~/components/VHero'
import VContent from '~/components/VContent'
import VFooter from '~/components/VFooter'

export default {
  name: 'HomePage',
  components: {
    VHero,
    VContent,
    VFooter
  },
  computed: {
    ...mapState(['contents'])
  },
  mounted () {
    this.$gtag.pageview(this.$route)
  }
}
</script>
