import { createStore } from 'vuex'
import { VuexPersistence } from 'vuex-persist'

const vuexPersist = new VuexPersistence({
  storage: localStorage
})

export default createStore({
  state: {
    count: 0,
    memos: []
  },
  getters: {
    getCount: (state) => {
      return state.memos.length
    },
    getMemos: (stete) => {
      return stete.memos
    },
    getMemoById: (state) => (id) => {
      return state.memos.find(memo => memo.id === id)
    }
  },
  mutations: {
    RESTORE_MUTATION: vuexPersist.RESTORE_MUTATION,
    /* メモを保存する */
    save (state, newMemo) {
      if (newMemo.id) {
        let x = state.memos.find(memo => memo.id === newMemo.id)
        x.title = newMemo.title
        x.content = newMemo.content
      } else {
        newMemo.id = ++state.count
        state.memos.unshift(newMemo)
      }
    },
    deleteMemo(state, id) {
      state.memos = state.memos.filter(memo => memo.id !== id)
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexPersist.plugin]
})
