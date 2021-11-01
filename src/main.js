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

const loadimage = require('./assets/img/loading.gif')

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: loadimage,
  attempt: 1
})
Vue.use(VueScreen)
Vue.use(VueMeta)
Vue.config.productionTip = false


firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_TOKEN,
  authDomain: 'zoe-sever-gallery.firebaseapp.com',
  projectId: 'zoe-sever-gallery',
  storageBucket: 'zoe-sever-gallery.appspot.com',
  messagingSenderId: '1072606766324',
  appId: '1:1072606766324:web:d891197d2a749738812aa1',
  databaseURL: 'zoe-sever-gallery-default-rtdb.europe-west1.firebasedatabase.app'
})

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('auth/fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('.main')
