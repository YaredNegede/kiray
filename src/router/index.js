import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import SignUp from '../components/component/SignUp'
import BrowseFreelancer from '../components/component/BrowseFreelancer'
import PostJob from '../components/component/PostJob'
import profile from '../components/component/profile'
import Home from '../components/component/Home'
import BrowseJob from '../components/component/BrowseJob'

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
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/BrowseFreelancer',
    name: 'BrowseFreelancer',
    component: BrowseFreelancer
  },
  {
    path: '/PostJob',
    name: 'PostJob',
    component: PostJob
  },
  {
    path: '/BrowseJob',
    name: 'BrowseJob',
    component: BrowseJob
  }
]

export default new Router({
  routes: routes
})

