<template>
  <div
    class="bg-image"
    :style="{
      'background-image': `linear-gradient(rgba(0, 0, 0, ${topOpacity}), rgba(0, 0, 0, ${bottomOpacity})), url('${imagePath}')`
    }"
  >
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    topOpacity: {
      default: 0.8,
      type: Number
    },
    bottomOpacity: {
      default: 0.5,
      type: Number
    }
  },
  computed: {
    imagePath () {
      return require(`~/assets/images/${this.name}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
