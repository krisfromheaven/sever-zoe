import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import VueScreen from 'vue-screen'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/database'

import VueLazyload from 'vue-lazyload'
import VueMeta from 'vue-meta'
import Paginate from 'vuejs-paginate'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('./assets/img/loading.gif'),
  error: require('./assets/img/pngegg.png'),
  attempt: 1
})
Vue.use(VueScreen)
Vue.use(VueMeta)
Vue.component('paginate', Paginate)
Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_TOKEN,
  authDomain: 'zoe-sever.firebaseapp.com',
  projectId: 'zoe-sever',
  storageBucket: 'zoe-sever.appspot.com',
  messagingSenderId: '713368611782',
  appId: '1:713368611782:web:d836a660e6b5d7d49520c7',
  databaseURL: 'zoe-sever-default-rtdb.europe-west1.firebasedatabase.app'
})


firebase.auth().onAuthStateChanged(user => {
  store.dispatch('auth/fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('.main')
