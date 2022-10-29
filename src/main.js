// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import Routes from './routes/routes.js'
import VueRouter from 'vue-router'
import store from "./store/store"
import axios from 'axios'
import Vuex from 'vuex'
import loadingScreen from './components/loadingScreen'
Vue.use(Vuex)
Vue.use(axios)
Vue.use(VueRouter)
Vue.config.productionTip = false
export const bus=new Vue({})
const router = new VueRouter({
  routes:Routes,
  mode:"history"
})
/* eslint-disable no-new */
Vue.component('loadingScreen',loadingScreen)
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
