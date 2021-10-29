import firebase from 'firebase/compat/app'


export default {
  namespaced: true,
  state: {
    gallery: [],
    percent: 0,
    url: null
  },
  mutations: {
    SET_GALLERY(state, data) {
      state.gallery.push(Object.keys(data).map(key => ({ ...data[key], path: key }))[0])
    },
    SET_PERCENT(state, data) {
      state.percent = data
    },
    CLEAR_PERCENT(state) {
      state.percent = 0
    },
    UPDATE_POST(state, item) {

    }
  },
  actions: {
    async fetchGallery({ commit }) {
      try {
        const database = await firebase.database().ref('gallery') || {}
        database.on('value', snapshot => {
          snapshot.forEach(el => {
            commit('SET_GALLERY', el.val())
          })
        })
      } catch (e) {
        throw e
      }
    },
    async uploadData({ dispatch, commit, state }, { img, description, id }) {
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
              firebase.database().ref(`gallery/${id}`).push({
                image: url,
                description,
                title: img.name.toString().split('.')[0],
                id
              })
            })
        })
      } catch (e) {
        throw e
      }
    },
    async deletePost({ state }, id) {
      try {
        await firebase.database().ref(`gallery/${id}`).remove(() => {
          state.gallery = state.gallery.filter(r => r.id !== id)
        })
      } catch (e) {
        throw e
      }
    },

    async editPost({ state }, { description, path, id }) {
      try {
        let ref = await firebase.database().ref(`gallery/${id}`).child(path)
        ref.update({ description })
        state.percent = 100
        state.gallery.find(r => r.id === id).description = description


      } catch (e) {
        throw e
      }
    }
  }
}
