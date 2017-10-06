import Vue from 'vue'
import fb from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire)

var config = {
  apiKey: 'AIzaSyD9tKI5EMX5GRnEkGRPOVFnrVyOtkYXaU4',
  authDomain: 'kiray-jablue.firebaseapp.com',
  databaseURL: 'https://kiray-jablue.firebaseio.com',
  projectId: 'kiray-jablue',
  storageBucket: 'kiray-jablue.appspot.com',
  messagingSenderId: '574057661841'
}
var app = fb.initializeApp(config)

const actions = {
  login: function (userData) {
    console.log('=======Login=========')
    console.log(userData.username)
    console.log(userData.password)
    return app.auth().signInWithEmailAndPassword(userData.username, userData.password)
  },
  signOut: function () {
    return app.auth().signOut()
  },
  databse: function () {
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
