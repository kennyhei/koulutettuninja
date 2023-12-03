<template>
  <section :id="sectionId" class="section pt-3 pb-5">
    <h2 class="title">{{ content.title }}</h2>
    <div id="collapsible" :class="{ 'expanded': isExpanded, 'collapse-mobile': content.collapse_long_text }">
      <div class="content font-18">
        <p v-for="(text, index) in paragraphedText" :key="index" v-html="text" />
      </div>
    </div>
    <!-- Expand text on mobile if "collapse_long_text" is set to true -->
    <div
      v-if="!isExpanded"
      class="c-pointer expand is-size-5"
      :class="{ 'collapse-mobile': content.collapse_long_text }"
      @click="isExpanded = true"
    >
      <b-icon icon="plus-circle-outline" style="position: relative; top: 2px;" />
      <b>Lue lisää</b>
    </div>
    <!-- Pricing -->
    <v-pricing v-if="content.show_pricing" />
    <!-- Booking button -->
    <div v-if="content.show_booking_btn" class="columns mt-3">
      <div class="column">
        <p v-if="hasAddress(settings.contact)" class="mb-3">
          <b-icon icon="map-marker" size="is-small" />
          <span>
            {{ settings.contact.company_name }} / {{ settings.contact.location_street_address }}, {{ settings.contact.location_city }}
          </span>
        </p>
        <nuxt-link to="/ajanvaraus">
          <b-button
            size="is-medium"
            style="color: #fff;"
          >
            Varaa aika
          </b-button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

import VPricing from '~/components/VPricing'
import { sectionMixin, utilsMixin } from '~/mixins/index.js'

export default {
  components: {
    VPricing
  },
  mixins: [sectionMixin, utilsMixin],
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      isExpanded: false
    }
  },
  computed: {
    sectionId () {
      return this.getSectionId(this.content)
    },
    paragraphedText () {
      return this.content.text.split('\n')
    },
    ...mapState(['settings'])
  }
}
</script>

<style lang="scss" scoped>
section {
  .expand {
    display: none;
  }
  @media (max-width: 700px) {
    #collapsible.collapse-mobile {
      position: relative;
      max-height: 220px;
      overflow: hidden;
      transition: max-height 2.5s ease;

      &.expanded {
        max-height: 5000px;
      }

      &:not(.expanded):after {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: linear-gradient(hsla(0,0%,100%,0) 60%,#fff);
      }
    }
    .expand.collapse-mobile {
      display: block;
      &:hover {
        color: lightblue;
      }
    }
  }
}
</style>
