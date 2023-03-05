<template>
  <div class="services box h-100" :class="animation">
    <h3 class="subtitle has-text-weight-bold mt-0">
      <span class="mr-1">{{ category.title }}</span>
      <!-- Collapse info icon -->
      <b-icon
        v-if="category.tooltip"
        icon="information"
        size="is-small"
        class="c-pointer"
        :class="{ 'has-text-success': showTooltip }"
        @click.native="showTooltip = !showTooltip"
        :aria-expanded="showTooltip"
        aria-controls="tooltipContent"
      />
    </h3>
    <!-- Service info -->
    <b-collapse aria-id="tooltipContent" v-model="showTooltip">
      <div v-html="category.tooltip" />
      <br>
    </b-collapse>
    <!-- Services -->
    <div :class="{ 'grid-col-xl-4 grid-col-md-6': category.services.length % 4 === 0 && category.services.length >= 8 }">
      <div v-for="service in category.services" :key="`${service.name}-${service.length}`" class="is-flex is-flex-wrap-wrap">
        <span class="mr-1"><span class="dash">–</span> {{ service.name }} ({{ service.length }} min)</span> <b><span>{{ Number(service.price) }} €</span></b>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      default: null
    },
    animation: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showTooltip: false
    }
  }
}
</script>

<style lang="scss" scoped>
.services {
  .icon {
    position: relative;
    top: 2px;
    &:hover {
      opacity: 0.8;
    }
  }
  div.is-flex > span:first-child {
    display: inline-block;
    width: 270px;
  }
}
@media (min-width: 768px) {
  .grid-col-md-6 {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(6, auto);
  }
}
@media (min-width: 1200px) {
  .grid-col-xl-4 {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(4, auto);
  }
}
@media (max-width: 420px) {
  .services div.is-flex {
    justify-content: space-between;
    .dash {
      display: none;
    }
    > span:first-child {
      display: inline;
      width: initial;
    }
  }
  .services.box {
    padding: 1rem;
  }
}
</style>
