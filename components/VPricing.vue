<template>
  <div class="pt-5">
    <div class="columns is-desktop is-flex-wrap-wrap">
      <div
        v-for="category in pricing.categories"
        :key="category.order"
        class="category column is-flex-grow-1"
      >
        <v-pricing-category :category="category" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import VPricingCategory from '~/components/VPricingCategory'

export default {
  components: {
    VPricingCategory
  },
  computed: {
    ...mapState(['pricing'])
  }
}
</script>

<style lang="scss" scoped>
.category {
  flex-basis: 50%;
}
</style>
