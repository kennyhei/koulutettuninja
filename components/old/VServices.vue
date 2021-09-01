<template>
  <div class="services box h-100" :class="animation">
    <h1 class="subtitle has-text-weight-bold">
      <span class="mr-1">{{ service.title }}</span>
      <b-tooltip v-if="service.tooltip" multilined>
        <b-icon icon="information" size="is-small" />
        <template #content>
          <div v-html="service.tooltip" />
        </template>
      </b-tooltip>
    </h1>
    <div v-for="item in service.items" :key="item.name" class="is-flex is-flex-wrap-wrap">
      <span class="mr-1"><span class="dash">–</span> {{ item.name }}</span> <b><span>{{ item.price }}</span></b>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
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
