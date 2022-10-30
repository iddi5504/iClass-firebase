// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Routes from './routes/routes.js'
import VueRouter from 'vue-router'
import store from "./store/store"
import Vuex from 'vuex'
import loadingScreen from './components/loadingScreen'
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.config.productionTip = false
export const bus = new Vue({})
const router = new VueRouter({
  routes: Routes,
  mode: "history"
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next();
  const isAuthenticated = store.state.isAuthenticated
  // if going to sign up page from within the app
  if ((to.name == 'signup' || to.name == 'logIn')  && from.name) {
    if (isAuthenticated) {
      next({ name: 'questiontype' })
      // if where youre going to sign up page from is questionType
      if (to.name == 'signup' && from.name == 'questiontype') {
        // if user is authenticated go to welcome and skip the sign up page
        next({ name: 'welcome' })
        
      } if (to.name == 'logIn' && from.name == 'questiontype') {
        // if user is authenticated go to welcome and skip the login page
        next({ name: 'welcome' })
      } 
    }
    
  }

})
/* eslint-disable no-new */
Vue.component('loadingScreen', loadingScreen)
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
})
