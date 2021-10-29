import Vue from 'vue'
import Router from 'vue-router'

import About from './views/About'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


Vue.use(Router)

let routes = [
  {
    path: '/',
    component: About,
    name: 'About'
  },
  {
    path: '/auth',
    component: () => import('./views/Auth'),
    name: 'Auth'
  },
  {
    path: '/contact',
    component: () => import('./views/Contact'),
    name: 'Contact'
  },
  {
    path:'/gallery',
    component: () => import('./views/Gallery'),
    name: 'Gallery'
  },
  {
    path: '*',
    component: About
  }
]


const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router