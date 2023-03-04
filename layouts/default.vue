<template>
  <div>
    <!-- Navbar -->
    <b-navbar
      :shadow="true"
      :fixed-top="fixedTop"
      :mobile-burger="true"
      class="has-background-success"
      style="background: rgba(0,0,0,1) !important; z-index: 10000;"
    >
      <!-- Shorthand for <template v-slot:brand></template> -->
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="~assets/images/logo.png"
            alt="Koulutettu hieroja Ninja Marttinen"
            height="28"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <b-navbar-item
          v-for="(item, idx) in items"
          :key="item.id"
          v-smooth-scroll="{ offset: idx === 0 ? -35 : -50 }"
          :href="`#${item.id}`"
          class="has-text-white"
        >
          {{ item.title }}
        </b-navbar-item>
        <b-navbar-item v-smooth-scroll href="#contact" class="has-text-white">
          Yhteystiedot
        </b-navbar-item>
        <template v-if="settings.contact.booking_url">
          <b-navbar-item :href="settings.contact.booking_url" class="has-text-white">
            Ajanvaraus
          </b-navbar-item>
        </template>
      </template>
    </b-navbar>
    <!-- Content -->
    <nuxt />
    <footer class="copyright is-flex is-justify-content-center is-align-items-center has-text-light">
      © 2023 Hyvinvointipalvelut Ninja Marttinen Tmi
    </footer>
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
    ...mapState(['contents', 'settings'])
  },
  created () {
    this.contents
      .filter(content => content.show_in_navbar && !content.hide_content)
      .forEach(content => {
        const sectionId = this.getSectionId(content)
        this.items.push({
          id: sectionId,
          title: content.navbar_title || content.title
        })
      })
  },
  mounted () {
    const sectionId = '#' + this.getSectionId(this.contents[0])
    window.addEventListener('scroll', () => {
      const scrollToElem = document.querySelector(sectionId).getBoundingClientRect().top
      if (scrollToElem <= 0) {
        this.fixedTop = true
      } else {
        this.fixedTop = false
      }
    }, { passive: true })
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
.copyright {
  background: rgba(0,0,0,1);
  min-height: 3.25rem;
}
</style>
