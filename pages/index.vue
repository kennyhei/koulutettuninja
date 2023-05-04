<template>
  <div>
    <v-hero />
    <!-- Contents -->
    <div class="container is-max-widescreen" style="padding-top: 2.25em;">
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

import VHero from '~/components/VHero'
import VContent from '~/components/VContent'
import VFooter from '~/components/VFooter'

export default {
  name: 'HomePage',
  components: {
    VHero,
    VContent,
    VFooter
  },
  computed: {
    ...mapState(['contents', 'settings'])
  },
  mounted () {
    this.$gtag.pageview(this.$route)
  },
  head () {
    return {
      script: [{
        type: 'application/ld+json',
        json: {
          '@context': 'http://schema.org',
          '@type': 'LocalBusiness',
          'name': 'Hieroja Ninja Marttinen – Jyväskylä, Kuokkala',
          'description': 'Monipuoliset hierontapalvelut Jyväskylässä. Sähköinen ajanvaraus. Olen koulutettu hieroja sekä urheiluhieroja. Tule hierontaan nauttimaan omasta ajastasi!',
          'image': this.settings.contact.header_profile_picture,
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
