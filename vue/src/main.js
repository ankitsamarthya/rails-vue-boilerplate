import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import { sync } from 'vuex-router-sync'
import axios from 'axios'

axios.defaults.headers.common['Content-Type'] = 'application/json';

sync(store, router)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
