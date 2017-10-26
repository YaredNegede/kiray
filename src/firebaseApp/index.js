import Vue from 'vue'
import fb from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

var config = {
  apiKey: 'AIzaSyAdwP8hs3FgblRL6cLAP3fO6vKYNpTG9cU',
  authDomain: 'rman-643b3.firebaseapp.com',
  databaseURL: 'https://rman-643b3.firebaseio.com',
  projectId: 'rman-643b3',
  storageBucket: 'rman-643b3.appspot.com',
  messagingSenderId: '904008983828'
}
var app = fb.initializeApp(config)

const actions = {
  login: function (userData) {
    console.log('=======firebase Login=========')
    return app.auth().signInWithEmailAndPassword(userData.username, userData.password)
  },
  signOut: function () {
    return app.auth().signOut()
  },
  database: function () {
    return app.database()
  }
}

const firebaseApp = {
  FirebaseApp  () {
    console.log('turbo jablue running')
    return {
      'do': actions,
      'firebaseapp': app
    }
  }
}

export default new firebaseApp.FirebaseApp({
  actions
})
