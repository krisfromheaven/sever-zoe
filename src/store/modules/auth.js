import firebase from 'firebase/compat/app'

export default {
  namespaced: true,
  state: {
    error: null,
    user: {
      loggedIn: false,
      uid: null
    }
  },
  mutations: {
    SET_ERROR(state, error) {
      state.error = error
    },
    CLEAR_ERROR(state) {
      state.error = null
    },
    SET_LOGGED_IN(state, user) {
      if (user) {
        state.user.loggedIn = true
        state.user.uid = firebase.auth().currentUser.uid ?? null
      }
    },
    CLEAR_USER_DATA(state) {
      state.user.loggedIn = false
    }
  },
  actions: {
    async fetchUser({ commit }, user) {
      commit('SET_LOGGED_IN', user !== null)
    },
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        commit('CLEAR_ERROR')
      } catch (e) {
        commit('SET_ERROR', e.code)
        throw e
      }
    },
    async logout({ commit }) {
      await firebase.auth().signOut()
      commit('CLEAR_USER_DATA')
    }
  }

}
