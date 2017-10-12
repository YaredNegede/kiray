import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueMomentJS from 'vue-momentjs'
import moment from 'moment'

Vue.use(VueMomentJS, moment)

var app = new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: {App},
  methods: {}
})
app
