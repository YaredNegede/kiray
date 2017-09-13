import Vue from 'vue'
import App from './App'
import router from './router'

var app = new Vue({
  el: '#app',
  router: router,
  template: '<App/>',
  components: {App},
  methods: {
    login () {
      console.log('------')
    }
  }
})
app
