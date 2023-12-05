<template>
  <section class="hero is-relative is-medium">
    <v-background-image
      :name="imgPath"
      :topOpacity="imgTopOpacity"
      :bottomOpacity="imgBottomOpacity"
    />
    <div class="hero-body is-flex is-flex-direction-column is-align-items-center">
      <h1 class="title has-text-centered has-text-light animate__animated animate__fadeInDown">
        {{title}}
      </h1>
    </div>
  </section>
</template>

<script>
import VBackgroundImage from '~/components/VBackgroundImage'

export default {
  components: {
    VBackgroundImage
  },
  props: {
    imgPath: String,
    imgTopOpacity: {
      default: 0.8,
      type: Number
    },
    imgBottomOpacity: {
      default: 0.5,
      type: Number
    },
    title: String
  },
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 768px) {
  .hero.is-medium .hero-body {
    padding: 8rem 1.5rem;
  }
}
</style>