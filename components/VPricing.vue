<template>
  <div class="pt-5">
    <div class="columns is-desktop is-flex-wrap-wrap">
      <div v-for="category in pricing.categories" :key="category.order" class="column is-half-desktop">
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

<style lang="scss">
.button {
  background-color: rgb(0, 209, 178);
  border: none;
  &:hover {
    background-color: rgba(0, 209, 178, .9);
  }
  &:focus {
    outline: 0 !important;
    border-color: unset !important;
  }
}
@media (max-width: 700px) {
  .button {
    width: 100%;
  }
}
</style>
