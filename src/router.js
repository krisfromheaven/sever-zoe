import Vue from 'vue'
import Router from 'vue-router'


import About from './views/About'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: About,
    meta: {
      key: 1
    }
  },
  {
    path: '*',
    component: About,
    meta: {
      key: 101
    }
  }
]


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
