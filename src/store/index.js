import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
import { DateTime } from 'luxon'

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
    cards: [],
    bucketDays: [1, 3, 7, 16, 30]
  },
  mutations: {
    createCard (state, card) {
      console.log('fuck', card)
      state.cards.push(card)
    },
    deleteCard (state, card) {
      console.log('delete mutation', card)
    },
    updateCard (state, card) {
      console.log('update mutations', card)
      const { cardIndex, cardDetails } = card
      state.cards[cardIndex] = {
        ...state.cards[cardIndex],
        ...cardDetails
      }
    }
  },
  actions: {
    createCard ({ commit }, payload) {
      const now = DateTime.local().toISO()

      const card = {
        ...payload,
        bucket: 1,
        nextReviewDate: now,
        lastReviewed: 0,
        createAt: now,
        updateAt: now
      }
      commit('createCard', card)
    },
    updateCard ({ commit, state }, payload) {
      commit('updateCard', payload)
      // payload = { cardId , cardDetails: {} }
    },
    deleteCard ({ commit, state }, payload) {
      commit('deleteCard', payload)
    }

  },
  modules: {
  },
  plugins: [vuexLocal.plugin]

})
