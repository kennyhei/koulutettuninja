<template>
  <footer id="contact" class="footer has-background-dark-light">
    <div class="container">
      <h1 class="title">Yhteystiedot</h1>
      <div class="columns is-variable is-6">
        <div class="column location is-two-thirds">
          <div>
            <iframe
              :src="contactInfo.google_maps_url"
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
            <p>{{contactInfo.company_name}}</p>
            <p>{{contactInfo.location_street_address}}</p>
            <p>{{contactInfo.location_postcode}} {{contactInfo.location_city}}</p>
          </div>
          <div class="phone mb-3">
            <p><b><b-icon icon="phone" size="is-small" /> Puhelin:</b></p>
            <p><a :href="`tel:${intlPhone(contactInfo.phone)}`">{{ contactInfo.phone }}</a></p>
          </div>
          <div class="social-media">
            <p><b><b-icon icon="instagram" size="is-small" /> Instagram:</b></p>
            <p><a :href="contactInfo.instagram_url">{{ contactInfo.instagram_url|accountName }}</a></p>

            <p class="mt-2"><b><b-icon icon="facebook" size="is-small" /> Facebook:</b></p>
            <p><a :href="contactInfo.facebook_url">{{ contactInfo.facebook_url|accountName }}</a></p>
          </div>
          <div class="mt-3">
            <p><b><b-icon icon="calendar" size="is-small" /> Ajanvaraus:</b></p>
            <p><a :href="contactInfo.booking_url">{{ contactInfo.booking_url|withoutHttp }}</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { formatMixin } from '~/mixins/index.js';

export default {
  props: {
    contactInfo: {
      type: Object,
      default: null
    }
  },
  mixins: [formatMixin]
}
</script>

<style>
.footer {
  background-color: #F7F7F7;
}
</style>