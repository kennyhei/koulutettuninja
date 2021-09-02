<template>
  <section class="hero ninja-bg">
    <div class="hero-body is-flex is-flex-direction-column is-align-items-center">
      <h1 class="title has-text-centered has-text-light wow animate__animated animate__fadeInDown">
        Ninja Marttinen
      </h1>
      <p class="subtitle has-text-centered has-text-light wow animate__animated animate__fadeInDown">
        Koulutettu hieroja &amp; urheiluhieroja
      </p>
      <div class="avatar mb-2">
        <img
          :src="settings.header_profile_picture"
          loading="lazy"
          alt="Ninni"
        >
      </div>
      <div class="is-flex is-flex-direction-column has-text-light has-text-centered wow animate__animated animate__fadeIn">
        <div class="font-sm-18">
          <b-icon icon="phone" size="is-small" />
          <a :href="`tel:${intlPhone(settings.contact.phone)}`">{{ settings.contact.phone }}</a>
        </div>
        <div class="font-sm-18">
          <b-icon icon="calendar" size="is-small" />
          <a :href="settings.contact.booking_url">{{ settings.contact.booking_url|withoutHttp }}</a>
        </div>
        <div class="is-flex is-justify-content-space-between font-sm-18">
          <div class="mr-1">
            <b-icon icon="instagram" size="is-small" />
            <a :href="settings.contact.instagram_url">{{ settings.contact.instagram_url|accountName }}</a>
          </div>
          <div class="ml-1">
            <b-icon icon="facebook" size="is-small" />
            <a :href="settings.contact.facebook_url">{{ settings.contact.facebook_url|accountName }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import { formatMixin } from '~/mixins/index.js'

export default {
  mixins: [formatMixin],
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
   0% { left: 500px; opacity: 0; }
   100% { left: 16px; opacity: 1; }
}

@keyframes appear {
   0% { left: 500px; opacity: 0; }
   100% { left: 16px; opacity: 1; }
}
</style>
