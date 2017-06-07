import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Login from '../components/component/Login'
import SignUp from '../components/component/SignUp'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  }
]

export default new Router({
  routes: routes
})
