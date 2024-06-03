<template>
  <div>
    <v-hero />
    <!-- Contents -->
    <div class="container is-max-widescreen" style="padding-top: 2.25em;">
      <section class="section pb-5 pt-1" v-if="notification && notification.show_notification">
        <b-notification type="is-warning is" :closable="false" class="font-18" v-html="notification.text" />
      </section>
      <template v-for="content in contents">
        <v-content
          v-if="!content.hide_content"
          :key="content.order"
          :content="content"
        />
      </template>
    </div>
    <v-footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import VHero from '~/components/index/VHero'
import VContent from '~/components/index/VContent'
import VFooter from '~/components/index/VFooter'

export default {
  name: 'HomePage',
  components: {
    VHero,
    VContent,
    VFooter
  },
  computed: {
    ...mapState(['contents', 'notification', 'settings'])
  },
  head () {
    return {
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@type': 'LocalBusiness',
          'name': 'Koulutettu hieroja Ninja Marttinen – Jyväskylä, Kuokkala',
          'description': 'Monipuoliset hierontapalvelut Jyväskylässä. Sähköinen ajanvaraus. Olen koulutettu hieroja sekä urheiluhieroja. Tule hierontaan nauttimaan omasta ajastasi!',
          'image': 'https://ninjamarttinen.fi' + require('~/assets/images/hieroja-jyvaskyla.webp'),
          'telephone': this.settings.contact.phone,
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': `${this.settings.contact.location_street_address}, ${this.settings.contact.location_postcode} ${this.settings.contact.location_municipality}`
          },
          'url': 'https://ninjamarttinen.fi'
        }
      }]
    }
  }
}
</script>
