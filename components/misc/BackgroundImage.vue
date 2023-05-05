<template>
  <div
    class="bg-image"
    :style="{
      'background-image': `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url('${imagePath}')`
    }"
  >
  </div>
</template>

<script>
export default {
  computed: {
    imagePath () {
      return require('~/assets/images/hieronta-jyvaskyla.webp')
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
