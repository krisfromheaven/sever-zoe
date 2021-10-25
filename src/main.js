import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase/compat/app'
import  'firebase/compat/auth'

import store from './store/index'
import router from './router'
import VueScreen from 'vue-screen'
import Router from 'vue-router'

Vue.use(VueScreen)
Vue.config.productionTip = false



firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_TOKEN,
  authDomain: 'zoe-sever-gallery.firebaseapp.com',
  projectId: 'zoe-sever-gallery',
  storageBucket: 'zoe-sever-gallery.appspot.com',
  messagingSenderId: '1072606766324',
  appId: '1:1072606766324:web:d891197d2a749738812aa1'
})

firebase.auth().onAuthStateChanged(user => {
  store.dispatch('auth/fetchUser', user)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('.main')