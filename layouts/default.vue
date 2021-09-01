<template>
  <div>
    <!-- Navbar -->
    <b-navbar
      :shadow="true"
      :fixed-top="fixedTop"
      :mobile-burger="true"
      class="has-background-success"
      style="background: rgba(2,0,36,1) !important;"
    >
      <!-- Shorthand for <template v-slot:brand></template> -->
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="~assets/images/logo.png"
            alt="Koulutettu Ninja"
            height="28"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item
          class="has-text-white"
          v-for="item in items"
          :href="`#${item.id}`"
          :key="item.id"
          v-smooth-scroll="{ offset: -30 }"
        >
          {{item.title}}
        </b-navbar-item>
        <b-navbar-item v-smooth-scroll href="#contact" class="has-text-white">
          Yhteystiedot
        </b-navbar-item>
      </template>
    </b-navbar>
    <!-- Content -->
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { sectionMixin } from '~/mixins/index.js'

export default {
  mixins: [sectionMixin],
  data () {
    return {
      fixedTop: false,
      items: []
    }
  },
  computed: {
    ...mapState(['contents'])
  },
  created () {
    this.contents.forEach(content => {
      const sectionId = this.getSectionId(content)
      this.items.push({
        id: sectionId,
        title: content.navbar_title || content.title
      })
    })
  },
  mounted () {
    const sectionId = '#' + this.items[0].id
    window.onscroll = () => {
      const scrollToElem = document.querySelector(sectionId).getBoundingClientRect().top
      if (scrollToElem <= 0) {
        this.fixedTop = true
      } else {
        this.fixedTop = false
      }
    }
  }
}
</script>

<style lang="scss">
.navbar-menu .navbar-item {
  &:hover {
    color: #000 !important;
  }

  &:focus-within {
    color: #000 !important;
  }
  &.nuxt-link-exact-active {
    color: #000 !important;
  }
}
.navbar-burger {
  span {
    color: #fff !important;
    background-color: #fff !important;
  }
}
@media screen and (max-width: 1023px) {
  .navbar-menu {
    background-color: initial;
  }
}
</style>
