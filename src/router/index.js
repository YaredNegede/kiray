import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import SignUp from '../components/component/SignUp'
import addInformation from '../components/component/addInformation'
import contractDetail from '../components/component/contractDetail'
import home from '../components/component/home'
import renterDetail from '../components/component/renterDetail'
import shopDetail from '../components/component/shopDetail'
import shopDetails from '../components/component/shopDetails'
import rentersDetail from '../components/component/rentersDetail'
import addContract from '../components/component/addContract'
import login from '../components/component/login'
import payementDetail from '../components/component/payementDetail'

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
    component: home,
    children: [{ path: 'login', component: login }]
  },
  {
    path: '/payementDetail',
    name: 'payementDetail',
    component: payementDetail
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
    path: '/shopDetails',
    name: 'shopDetails',
    component: shopDetails
  },
  {
    path: '/addContract',
    name: 'addContract',
    component: addContract
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
]

export default new Router({
  routes: routes
})
