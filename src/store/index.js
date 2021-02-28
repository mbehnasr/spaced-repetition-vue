import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

/*
in card we need
{
  question:
  answer:
  level:
  nextReviewData:
  lastReviewed:
  createAt:
  updataAt:
}
*/

export default createStore({
  state: {
    cards: []
  },
  mutations: {
    createCard (state, card) {
      state.cards.push(card)
    }
  },
  actions: {
    createCard ({ commit }, card) {
      console.log('action', card)
      commit('createCard', card)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]

})
