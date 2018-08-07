import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routerConf from './router.config.js'

import './assets/css/animate.css'

Vue.use(VueRouter);

const router = new VueRouter(routerConf);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
