import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource'

import jquery from 'jquery'
window.jquery = window.$ = jquery

Vue.use(VueResource)

import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
