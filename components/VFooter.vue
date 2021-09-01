<template>
  <footer id="contact" class="footer has-background-dark-light mt-5">
    <div class="container">
      <h1 class="title">Yhteystiedot</h1>
      <div class="columns is-variable is-6">
        <div class="column location is-two-thirds">
          <div>
            <iframe
              :src="settings.contact.google_maps_url"
              height="350"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            />
          </div>
        </div>
        <div class="column contact">
          <div class="address mb-3">
            <p><b><b-icon icon="home" size="is-small" /> Osoite:</b></p>
            <p>{{ settings.contact.company_name }}</p>
            <p>{{ settings.contact.location_street_address }}</p>
            <p>{{ settings.contact.location_postcode }} {{ settings.contact.location_city }}</p>
          </div>
          <div class="phone mb-3">
            <p><b><b-icon icon="phone" size="is-small" /> Puhelin:</b></p>
            <p><a :href="`tel:${intlPhone(settings.contact.phone)}`">{{ settings.contact.phone }}</a></p>
          </div>
          <div class="social-media">
            <p><b><b-icon icon="instagram" size="is-small" /> Instagram:</b></p>
            <p><a :href="settings.contact.instagram_url">{{ settings.contact.instagram_url|accountName }}</a></p>

            <p class="mt-2"><b><b-icon icon="facebook" size="is-small" /> Facebook:</b></p>
            <p><a :href="settings.contact.facebook_url">{{ settings.contact.facebook_url|accountName }}</a></p>
          </div>
          <div class="mt-3">
            <p><b><b-icon icon="calendar" size="is-small" /> Ajanvaraus:</b></p>
            <p><a :href="settings.contact.booking_url">{{ settings.contact.booking_url|withoutHttp }}</a></p>
          </div>
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
