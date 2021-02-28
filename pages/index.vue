<template>
  <div>
    <v-hero />
    <div class="container">
      <v-introduction />
      <v-pricing />
    </div>
    <v-footer />
  </div>
</template>

<script>
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
  }
}
</script>
