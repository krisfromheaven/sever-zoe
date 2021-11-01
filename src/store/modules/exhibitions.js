import firebase from 'firebase/compat/app'

export default {
  namespaced: true,
  actions: {
    async fetchExhibitions() {
      try {
        const database = (await firebase.database().ref('exhibitions').once('value')).val() || {}
        return Object.keys(database).map(key => ({ ...database[key], id: key }))
      } catch (e) {
        throw e
      }
    },

    async addExhibitions(_, data) {
      try {
        let ref = await firebase.database().ref('exhibitions')
        ref.push({ ...data })
        return { ...data }
      } catch (e) {
        throw e
      }
    },

    async deleteExhibitions(_, id) {
      try {
        let ref = await firebase.database().ref(`exhibitions/${id}`)
        ref.remove()
        return id
      } catch (e) {
        throw e
      }
    }
  }
}
