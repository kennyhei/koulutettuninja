<template>
  <section :id="sectionId" class="section pt-3 pb-5">
    <h2 class="title">{{ content.title }}</h2>
    <div id="description" :class="{ 'expanded': isExpanded, 'collapse-mobile': content.collapse_long_text }">
      <div class="content font-18">
        <p v-for="text in paragraphedText" v-html="text"></p>
      </div>
    </div>
    <!-- Expand text on mobile if "collapse_long_text" is set to true -->
    <div
      v-if="!isExpanded"
      @click="isExpanded = true"
      class="c-pointer expand is-size-5"
      :class="{ 'collapse-mobile': content.collapse_long_text }"
    >
      <b-icon icon="plus-circle-outline" style="position: relative; top: 2px;" />
      <b>Lue lisää</b>
    </div>
    <!-- Pricing -->
    <v-pricing v-if="content.show_pricing"></v-pricing>
  </section>
</template>

<script>
import VPricing from '~/components/VPricing'
import { sectionMixin } from '~/mixins/index.js'

export default {
  components: {
    VPricing
  },
  mixins: [sectionMixin],
  props: {
    content: Object
  },
  computed: {
    sectionId: function () {
      return this.getSectionId(this.content)
    },
    paragraphedText: function () {
      return this.content.text.split('\n')
    }
  },
  data () {
    return {
      isExpanded: false
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  .expand {
    display: none;
  }
  @media (max-width: 700px) {
    #description.collapse-mobile {
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