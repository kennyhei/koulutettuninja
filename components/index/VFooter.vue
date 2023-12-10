<template>
  <footer id="contact" class="footer has-background-dark-light mt-5">
    <div class="container">
      <h2 class="title mb-5">Yhteystiedot</h2>
      <p class="is-size-6 mb-5">Tällä hetkellä toimin pääosin Kuokkalan toimipisteellä ja noin 1-2 kertaa viikossa Voionmaankadulla.</p>
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
        <!-- Voionmaankatu -->
        <div class="column mb-3" style="display: flex; flex-direction: column;">
          <h3 class="title is-4">Studio AK Voionmaankatu</h3>
          <div class="mb-3">
            <p>Voionmaankatu 15</p>
            <p>40700 {{ settings.contact.location_city }}</p>
            <p>p. <a :href="`tel:${intlPhone('0207 769 553')}`">0207 769 553</a></p>
          </div>
          <div style="margin-top: auto;">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.175614286883!2d25.72682964128784!3d62.239713599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4685742379e26e77%3A0x79755b969436a301!2sVoionmaankatu%2015%2C%2040700%20Jyv%C3%A4skyl%C3%A4!5e0!3m2!1sfi!2sfi!4v1702238472164!5m2!1sfi!2sfi"
              height="350"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
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
