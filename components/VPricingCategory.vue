<template>
  <div class="services box h-100" :class="animation">
    <h1 class="subtitle has-text-weight-bold">
      <span class="mr-1">{{ category.title }}</span>
      <b-tooltip v-if="category.tooltip" multilined>
        <b-icon icon="information" size="is-small" />
        <template #content>
          <div v-html="category.tooltip" />
        </template>
      </b-tooltip>
    </h1>
    <div v-for="service in category.services" :key="`${service.name}-${service.length}`" class="is-flex is-flex-wrap-wrap">
      <span class="mr-1"><span class="dash">–</span> {{ service.name }} ({{ service.length }} min)</span> <b><span>{{ Number(service.price) }} €</span></b>
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
  }
}
</script>

<style lang="scss" scoped>
.tooltip-content {
  padding: 10px !important;
  background: #000 !important;
  &:before {
    border-top-color: #000 !important;
  }
}
.tooltip-trigger {
  cursor: pointer;
}
.services div.is-flex > span:first-child {
  display: inline-block;
  width: 270px;
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
