import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Login from '../components/component/Login'
import SignUp from '../components/component/SignUp'
import BrowseFreelancer from '../components/component/BrowseFreelancer'
import PostJob from '../components/component/PostJob'
import BrowseJob from '../components/component/BrowseJob'

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
