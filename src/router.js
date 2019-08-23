import Vue from 'vue'
import Router from 'vue-router'
import vMain from './views/v-main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'v-main',
      component: vMain
    },
  ]
})
