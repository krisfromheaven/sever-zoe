import firebase from 'firebase/compat/app'


export default {
  namespaced: true,
  state: {
    storage: [],
    percentage: 0,
    url: ''
  },
  mutations: {
    GET_STORAGE(state, url) {
      state.storage.push(url)
    },
    SET_PERCENTAGE(state, data) {
      state.percentage = data
    },
    CLEAR_PERCENTAGE(state) {
      state.percentage = 0
    },
    SET_URL(state, url) {
      state.url = url
    },
    CLEAR_URL(state) {
      state.url = ''
    }
  },
  actions: {
    // async fetchStorage({ commit }) {
    //   try {
    //     let storage = (await firebase.storage().ref('images').listAll()) || {}
    //     let images = storage.items
    //     images.forEach(img => {
    //       img.getDownloadURL()
    //         .then(url => {
    //           commit('GET_STORAGE', Object({ 'img': url }))
    //         })
    //         .catch(err => console.log(err))
    //     })
    //   } catch (e) {
    //     throw e
    //   }
    // },

    async uploadImage({ commit }, file) {
      try {
        const ref = (await firebase.storage().ref(`/images/${file.name}`)) || {}
        const task = ref.put(file)

        task.on('state_changed', snapshot => {
          const percentage = +(snapshot.bytesTransferred / snapshot.totalBytes) * 100
          commit('SET_PERCENTAGE', percentage.toFixed())
        }, e => {
          throw e
        }, () => {
          commit('CLEAR_PERCENTAGE')
          commit('CLEAR_URL')
          task.snapshot.ref.getDownloadURL()
            .then(url => {
              commit('SET_URL', url)
            })
        })
      } catch (e) {
        throw e
      }
    },

    async uploadInfo({ state }, data) {
      try {
        const ref = await firebase.database().ref(`gallery`)
        ref.push({ ...data })
          .then(res => console.log(res))
      } catch (e) {
        throw e
      }
    }
  }
}
