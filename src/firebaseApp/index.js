import fb from 'firebase'

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
    app.auth().signInWithEmailAndPassword(userData.username, userData.password).then(function (response) {
      return true
    }).catch(
        function (error) {
          // router.push('/')
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // [START_EXCLUDE]
          if (errorCode === 'auth/invalid-custom-token') {
            console.log(errorCode)
            console.log(errorMessage)
          } else {
            alert(error.message)
          }
          // [END_EXCLUDE]
          return false
        })
    return false
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
