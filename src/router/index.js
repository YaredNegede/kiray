import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import SignUp from '../components/component/SignUp'
import addInformation from '../components/component/addInformation'
import contractDetail from '../components/component/contractDetail'
import Home from '../components/component/Home'
import renterDetail from '../components/component/renterDetail'
import shopDetail from '../components/component/shopDetail'
import rentersDetail from '../components/component/rentersDetail'
import addContract from '../components/component/addContract'
import Loggedin from '../components/component/Loggedin'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'app',
    component: App
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/contractDetail',
    name: 'contractDetail',
    component: contractDetail
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/addInformation',
    name: 'addInformation',
    component: addInformation
  },
  {
    path: '/renterDetail',
    name: 'renterDetail',
    component: renterDetail
  },
  {
    path: '/rentersDetail',
    name: 'rentersDetail',
    component: rentersDetail
  },
  {
    path: '/shopDetail',
    name: 'shopDetail',
    component: shopDetail
  },
  {
    path: '/addContract',
    name: 'addContract',
    component: addContract
  },
  {
    path: '/Loggedin',
    name: 'Loggedin',
    component: Loggedin
  }
]

export default new Router({
  routes: routes
})

