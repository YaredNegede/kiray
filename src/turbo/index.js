import store from 'store'
import firebaseApp from 'firebaseApp'

const actions = {
  test: function () {
    console.log('turbo actions fine')
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
