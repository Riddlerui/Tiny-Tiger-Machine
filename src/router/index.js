import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//异步路由
const test = r => require.ensure([], () => r(require('../views/test')), 'test')
const home = r => require.ensure([], () => r(require('../views/home')), 'home')
const details = r => require.ensure([], () => r(require('../views/details')), 'details')


export default new Router({
  routes: [
    {
      path: '/',
      component: home
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/details',
      name: 'details',
      component: details
    } 
  ]
})
