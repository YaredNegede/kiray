import store from 'store'
import firebaseApp from 'firebaseApp'

const actions = {
  test: function () {
    console.log('turbo actions fine')
  },
  login: function (userData) {},
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
  actions,
  firebaseApp
})
