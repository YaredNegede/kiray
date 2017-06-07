// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* eslint-disable no-new */
/*
const Home = { template: '<p>home page</p>' }
const About = { template: '<p>about page</p>' }
*/

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
