import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueFire from 'vuefire'

Vue.use(VueFire)

var app = new Vue({
  el: '#app',
  router: router,
  store: store,
  template: '<App/>',
  components: {App},
  methods: {}
})
app
