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

<style lang="scss">
.title {
  letter-spacing: 1px;
}
.hero a {
  color: #fff;

  &:hover {
    color: lightgrey;
  }
}

iframe {
  width: 100%;
}
</style>
