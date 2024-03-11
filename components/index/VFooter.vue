<template>
  <footer id="contact" class="footer has-background-dark-light mt-5">
    <div class="container">
      <h2 class="title mb-5">Yhteystiedot</h2>
      <p class="is-size-6 mb-5">Toimipisteeni sijaitsee Studio AK Kuokkalan tiloissa.</p>
      <div class="columns is-variable is-6">
        <!-- Kuokkala -->
        <div class="column mb-3">
          <h3 class="title is-4">Studio AK Kuokkala</h3>
          <div class="mb-3">
            <p>{{ settings.contact.location_street_address }}</p>
            <p>{{ settings.contact.location_postcode }} {{ settings.contact.location_city }}</p>
            <p>p. <a :href="`tel:${intlPhone(settings.contact.phone)}`">{{ settings.contact.phone }}</a></p>
            <br/>
            <p>Huom! Pihassa runsaasti maksutonta parkkitilaa.</p>
          </div>
          <div>
            <iframe
              :src="settings.contact.google_maps_url"
              height="350"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              title="Osoite"
            />
          </div>
        </div>
      </div>
      <div class="contact">
        <div class="social-media">
          <div v-if="settings.contact.instagram_url">
            <p><b><b-icon icon="instagram" size="is-small" /> Instagram:</b></p>
            <p><a :href="settings.contact.instagram_url">{{ settings.contact.instagram_url|accountName }}</a></p>
          </div>
          <div v-if="settings.contact.facebook">
            <p class="mt-2"><b><b-icon icon="facebook" size="is-small" /> Facebook:</b></p>
            <p><a :href="settings.contact.facebook_url">{{ settings.contact.facebook_url|accountName }}</a></p>
          </div>
        </div>
        <div class="mt-3">
          <p><b><b-icon icon="calendar" size="is-small" /> Ajanvaraus:</b></p>
          <p><nuxt-link to="/ajanvaraus">ninjamarttinen.fi/ajanvaraus</nuxt-link></p>
        </div>
      </div>
    </div>
  </footer>
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

<style>
.footer {
  background-color: #F7F7F7;
}
</style>
