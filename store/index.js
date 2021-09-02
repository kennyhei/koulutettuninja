export const state = () => ({
  settings: null,
  contents: null,
  pricing: null
})

export const mutations = {
  SET_SETTINGS (state, settings) {
    state.settings = settings
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
    const promises = []
    promises.push(fetch(process.env.API_URL + '/general_settings/1').then(res => res.json()))
    promises.push(fetch(process.env.API_URL + '/contents').then(res => res.json()))
    promises.push(fetch(process.env.API_URL + '/categories').then(res => res.json()))
    const response = await Promise.all(promises)
    const [settings, contents, categories] = response
    commit('SET_SETTINGS', settings)
    commit('SET_CONTENTS', contents)
    commit('SET_PRICING', { categories })
  }
}
