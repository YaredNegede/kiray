import axios from 'axios'
import store from 'store'

const actions = {
  axios: axios,
  test: function () {
    console.log('turbo actions fine')
  },
  login: function (userData) {
    console.log('login')
    var ret = this.sendRequest(userData)
    store.commit('login', ret)
    console.log(store.getters.getUser.authenticated)
    console.log('login compelted')
    return ret
  },
  signUp: function (userData) {
    console.log('signup')
    this.sendRequest(store).when(function () {
      console.log('registered')
    })
    this.sendRequest(store)
  },
  register: function () {
    console.log('signup')
    this.sendRequest(store)
  },
  sendRequest: function (requestData) {
    console.log('sending request')
    // axios.post('/').then(function (response) {
    //   this.$store = response.user.authenticated
    //   this.$store.user.authenticated = true
    // })
    return true
  }
}

const Turbo = {
  Turbo  () {
    console.log('turbo jablue running')
    return {
      'do': actions,
      'store': store
    }
  }
}

export default new Turbo.Turbo({
  actions
})
