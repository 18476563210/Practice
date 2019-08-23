import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
<<<<<<< HEAD
=======
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
	{
	  path: '/product',
	  name: 'product',
	  component: () => import('./views/main-product.vue')
	}
>>>>>>> 24aa133938f539e50a0075b0ef28a32aa9a0e361
  ]
})
