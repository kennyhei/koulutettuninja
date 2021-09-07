import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ $config: { googleAnalytics } }) => {
  Vue.use(VueGtag, {
    config: { id: googleAnalytics.id }
  })
}
