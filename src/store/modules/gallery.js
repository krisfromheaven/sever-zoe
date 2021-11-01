import firebase from 'firebase/compat/app'


export default {
  namespaced: true,
  state: {
    percent: 0,
    url: null
  },
  mutations: {
    SET_PERCENT(state, data) {
      state.percent = data
    },
    CLEAR_PERCENT(state) {
      state.percent = 0
    }
  },
  actions: {
    async fetchGallery(_, { path }) {
      try {
        const database = (await firebase.database().ref(`${path}`).once('value')).val() || {}
        return Object.keys(database).map(key => ({ ...database[key], id: key }))
      } catch (e) {
        throw e
      }
    },

    async uploadData({ dispatch, commit, state }, { img, description, path }) {
      try {
        const refStorage = await firebase.storage().ref(`/images/${img.name}`)
        const taskStorage = refStorage.put(img)
        taskStorage.on(`state_changed`, snapshot => {
          let percent = +(snapshot.bytesTransferred / snapshot.totalBytes) * 100
          commit('SET_PERCENT', percent)
        }, e => {
          throw e
        }, () => {
          taskStorage.snapshot.ref.getDownloadURL()
            .then(url => {
              firebase.database().ref(`${path}`).push({
                image: url,
                description,
                title: img.name.toString().split('.')[0]
              })
            })
        })
      } catch (e) {
        throw e
      }
    },
    async deletePost({ state }, { id, path }) {
      try {
        await firebase.database().ref(`${path}/${id}`).remove()
      } catch (e) {
        throw e
      }
    },
    async editPost({ state }, { title, id, path }) {
      try {
        let ref = await firebase.database().ref(`${path}`).child(id)
        ref.update({ description: title })
        state.percent = 100
      } catch (e) {
        throw e
      }
    }
  }
}
