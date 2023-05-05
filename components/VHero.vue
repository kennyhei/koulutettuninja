<template>
  <section class="hero ninja-bg is-relative">
    <background-image />
    <div class="hero-body is-flex is-flex-direction-column is-align-items-center">
      <h1 class="title has-text-centered has-text-light animate__animated animate__fadeInDown">
        Ninja Marttinen
      </h1>
      <p class="subtitle has-text-centered has-text-light animate__animated animate__fadeInDown">
        Koulutettu hieroja &amp; urheiluhieroja
      </p>
      <div class="avatar mb-2">
        <img
          src="~assets/images/hieroja-jyvaskyla.webp"
          loading="lazy"
          alt="Koulutettu hieroja Ninja Marttinen"
        >
      </div>
      <div class="is-flex is-flex-direction-column has-text-light has-text-centered animate__animated animate__fadeIn">
        <div class="is-flex is-justify-content-center font-sm-18 mb-3">
          <div v-if="settings.contact.instagram_url">
            <b-icon icon="instagram" size="is-small" />
            <a :href="settings.contact.instagram_url">{{ settings.contact.instagram_url|accountName }}</a>
          </div>
          <div class="ml-1" v-if="settings.contact.facebook_url">
            <b-icon icon="facebook" size="is-small" />
            <a :href="settings.contact.facebook_url">{{ settings.contact.facebook_url|accountName }}</a>
          </div>
        </div>
        <div class="font-sm-18 mb-3" v-if="settings.contact.phone">
          <b-icon icon="phone" size="is-small" />
          <a :href="`tel:${intlPhone(settings.contact.phone)}`">{{ settings.contact.phone }}</a>
        </div>
        <div class="font-sm-18 mb-3" v-if="hasAddress(settings.contact)">
          <b-icon icon="map-marker" size="is-small" />
          <span>
            {{ settings.contact.company_name }} / {{ settings.contact.location_street_address }}, {{ settings.contact.location_city }}
          </span>
        </div>
        <div class="font-sm-18" v-if="settings.contact.booking_url">
          <b-button
            size="is-medium"
            tag="a"
            :href="settings.contact.booking_url"
            target="_blank"
            rel="noopener"
            style="color: #fff;"
          >
            Varaa aika
          </b-button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { formatMixin, utilsMixin } from '~/mixins/index.js'
import BackgroundImage from '~/components/misc/BackgroundImage.vue'

export default {
  components: {
    BackgroundImage
  },
  mixins: [formatMixin, utilsMixin],
  computed: {
    ...mapState(['settings'])
  }
}
</script>

<style lang="scss" scoped>
.ninja-bg {
  background: rgb(49,122,149);
  background: linear-gradient(0deg, rgba(49,122,149,1) 0%, rgba(2,0,36,1) 100%);
}
.title {
  letter-spacing: 1px;
}
.avatar {
  img {
    object-fit: cover;
    width: 200px;
    height: 200px;
    min-width: 200px;
    min-height: 200px;
    border-radius: 50%;
    border: 2px solid #fff;
    -webkit-animation: appear 3s;
    animation: appear 3s;
    -webkit-animation-fill-mode: forwards;
    animation-fill-mode: forwards;
  }
}

@-webkit-keyframes appear {
   0% { opacity: 0; }
   100% { opacity: 1; }
}

@keyframes appear {
   0% { opacity: 0; }
   100% { opacity: 1; }
}
</style>
