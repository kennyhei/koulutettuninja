<template>
  <div>
    <v-hero />
    <!-- Contents -->
    <div class="container" style="padding-top: 2.25em;">
      <v-content
        v-for="content in contents"
        :key="content.order"
        :content="content"
      />
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
    this.$gtag.pageview(this.$route);
  }
}
</script>
