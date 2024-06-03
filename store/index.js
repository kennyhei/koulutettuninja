export const state = () => ({
  settings: null,
  notification: null,
  contents: null,
  pricing: null
})

export const mutations = {
  SET_SETTINGS (state, settings) {
    state.settings = settings
  },
  SET_NOTIFICATION (state, notification) {
    state.notification = notification
  },
  SET_CONTENTS (state, contents) {
    state.contents = contents
  },
  SET_PRICING (state, pricing) {
    state.pricing = pricing
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const promises = [
      fetch(process.env.API_URL + '/general_settings/1').then(res => res.json()),
      fetch(process.env.API_URL + '/notifications/1').then(res => res.json()),
      fetch(process.env.API_URL + '/contents').then(res => res.json()),
      fetch(process.env.API_URL + '/categories').then(res => res.json())
    ]
    const response = await Promise.all(promises)
    const [settings, notification, contents, categories] = response
    commit('SET_SETTINGS', settings)
    commit('SET_NOTIFICATION', notification)
    commit('SET_CONTENTS', contents)
    commit('SET_PRICING', { categories })
  }
}
