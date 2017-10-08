import Vue from 'vue'
import Vuex from 'vuex'
import firebaseApp from 'firebaseApp'
import router from './router'

Vue.use(Vuex)

const state = {
  'user': {'Lang': 'AM', 'authenticated': false, 'name': '', 'email': '', 'tel': '', 'password': '', 'password2': '', 'userType': ['Renter', 'Rentee']},
  'componentState': [],
  'temp': {'ID': ''},
  'surf': {'currentPath': 'home', 'previousPath': '', 'rediretTo': '/addInformation'},
  'Language': {
    'AM': [
      {'PropertyName': ''},
      {'Address': ''},
      {'Address2': ''},
      {'ShopNumber': ''},
      {'Floor': ''},
      {'Purpuse': ''},
      {'Zone': ''},
      {'Name': ''},
      {'FatherName': ''},
      {'ID': ''},
      {'IDType': ''},
      {'Manager': ''},
      {'PhoneNumber': ''},
      {'ID': ''},
      {'name': ''},
      {'FatherName': ''},
      {'Magnitude': ''},
      {'Unit': ''},
      {'Status': ''},
      {'Period': ''},
      {'StartTime': ''},
      {'EndTime': ''},
      {'Renter': ''},
      {'Shop': ''}
    ],
    'EN': [
      {'PropertyName': ''},
      {'Address': ''},
      {'Address2': ''},
      {'ShopNumber': ''},
      {'Floor': ''},
      {'Purpuse': ''},
      {'Zone': ''},
      {'Name': ''},
      {'FatherName': ''},
      {'ID': ''},
      {'IDType': ''},
      {'Manager': ''},
      {'PhoneNumber': ''},
      {'ID': ''},
      {'name': ''},
      {'FatherName': ''},
      {'Magnitude': ''},
      {'Unit': ''},
      {'Status': ''},
      {'Period': ''},
      {'StartTime': ''},
      {'EndTime': ''},
      {'Renter': ''},
      {'Shop': ''}
    ]
  },
  'data': {
    'PropertyName': '',
    'Address': '',
    'Address2': '',
    'Contracts': [],
    'Properties': [],
    'ServiceRecievers': [],
    'Payements': []
  }
}

const mutations = {
  updateProperty: function (state, data) {
    console.log('mutations Update Property')
    console.log(data)
    state.data.Properties.push(data)
  },
  updateProperties: function (state, data) {
    console.log('Update Properties')
    var keys = firebaseApp.do.database().ref().child('Properties').push().key

    var updates = {}
    updates[keys] = data

    firebaseApp.do.database().ref('Properties').update(updates).then(function () {
      state.data.Properties[keys] = data
    }).catch(function (error) {
      console.log(error)
    })
    console.log('===========')
  },
  updateServiceRecievers: function (state, data) {
    console.log('Update ServiceRecievers')
    console.log(data)
    var keys = firebaseApp.do.database().ref().child('ServiceRecievers').push().key

    var updates = {}
    updates[keys] = data

    firebaseApp.do.database().ref('ServiceRecievers').update(updates).then(function () {
      state.data.ServiceRecievers[keys] = data
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateContracts: function (state, data) {
    console.log('Update Contracts')
    var keys = firebaseApp.do.database().ref().child('Contracts').push().key
    var updates = {}
    updates[keys] = data

    firebaseApp.do.database().ref('Contracts').update(updates).then(function () {
      state.data.ServiceRecievers[keys] = data
    }).catch(function (error) {
      console.log(error)
    })

    state.data.Contracts.push(data)
  },
  updateContract: function (state, data) {
    console.log('Update Contracts')
    console.log(data)
    console.log(state.data.Properties)
  },
  removeProperty: function (state, ShopNumber) {
    console.log('remove Contracts')
    var data = {}
    for (var key in state.data.Properties) {
      if (state.data.Properties[key].ShopNumber === ShopNumber) {
        data['Properties/' + key] = null
        firebaseApp.do.database().ref().update(data).then(function () {
          delete state.data.Properties[key]
        }).catch(function (error) {
          alert(error.message)
        })
      }
    }
  },
  removeRentee: function (state, id) {
    console.log('remove rentee')
    var data = {}
    for (var key in state.data.ServiceRecievers) {
      if (state.data.ServiceRecievers[key].ID === id) {
        data['ServiceRecievers/' + key] = null
        firebaseApp.do.database().ref().update(data).then(function () {
          delete state.data.ServiceRecievers[key]
        }).catch(function (error) {
          alert(error.message)
        })
      }
    }
  },
  removeContract: function (state, id) {
    console.log('remove Contracts')
    var data = {}
    for (var key in state.data.Contracts) {
      if (state.data.Contracts[key].ID === id) {
        data['Contracts/' + key] = null
        firebaseApp.do.database().ref().update(data).then(function () {
          delete state.data.Contracts[key]
        }).catch(function (error) {
          alert(error.message)
        })
      }
    }
  },
  addContract: function (state, Contract) {
    console.log('Add Contract')
    var keys = firebaseApp.do.database().ref().child('Contracts').push().key

    var updates = {}
    updates[keys] = Contract

    firebaseApp.do.database().ref('Contracts').update(updates).then(function () {
      state.data.ServiceRecievers[keys] = updates
    }).catch(function (error) {
      console.log(error)
    })
  },
  login: function (state, userData) {
    console.log('mutations login')
    var ret = firebaseApp.do.login(userData)
    ret.then(function (response) {
      firebaseApp.do.database().ref().once('value').then(function (snapshot) {
        console.log('mutations login completed')
        window.localStorage.removeItem('state')
        var savedState = JSON.stringify(snapshot.val())
        console.log(savedState)
        window.localStorage.setItem('state', savedState)
      })
      state.user.authenticated = true
      router.push('/contractDetail')
    }).catch(
          function (error) {
            console.log(this.$router)
            router.push('/login')
            var errorCode = error.code
            var errorMessage = error.message
            if (errorCode === 'auth/invalid-custom-token') {
              console.log(errorCode)
              console.log(errorMessage)
            } else {
              alert(error.message)
            }
          })
  },
  logOut: function (state) {
    var rets = firebaseApp.do.signOut()
    rets.then(function () {
      state.user.authenticated = false
      window.localStorage.clear()
      router.push('login')
    }).catch(
      function (error) {
        var errorCode = error.code
        var errorMessage = error.message
        if (errorCode === 'auth/invalid-custom-token') {
          console.log(errorCode)
          console.log(errorMessage)
        } else {
          alert(error.message)
        }
      })
    state.user.authenticated = false
  },
  signUp: function () {
    console.log('signup')
  },
  updateUserState: function (state, st) {
    state.user.authenticated = st
  },
  updateUserData: function (state, data) {
    state.data = data
  },
  updateSurf: function (state, surf) {
    state.surf.currentPath = surf
  }
}

const actions = {
  Login: function () {}
}

const getters = {
  getUser: function (state) {
    console.log('Getting user for : ')
    return state.user
  },
  getComponentState: function (state) {
    console.log('Getting state for : ')
    return state.componentState
  },
  getSurf: function (state) {
    console.log('Getting state for : ')
    return state.surf
  },
  getData: function (state) {
    console.log('Getting data for : ')
    return state.data
  },
  getServiceRecievers: function (state) {
    console.log('Getting data for : ')
    return state.data.ServiceRecievers
  },
  getProperties: function (state) {
    console.log('Getting Properties for : ')
    return state.data.Properties
  },
  getServiceReciever: function (state) {
    var id = state.temp.ID
    console.log('Getting ServiceReciever for : ' + id)
    if (id) {
      for (var key in state.data.ServiceRecievers) {
        if (state.data.ServiceRecievers[key].ID === id) {
          return state.data.ServiceRecievers[key]
        }
      }
    }
  },
  getProperty: function (state) {
    console.log('Getting Property')
    var id = state.temp.ID
    if (state.temp.ID) {
      for (var key in state.data.Properties) {
        if (state.data.Properties[key].ShopNumber === id) {
          return state.data.Properties[key]
        }
      }
    }
  },
  getContracts: function (state) {
    console.log('Getting contracts')
    console.log(state.data.Contracts)
    return state.data.Contracts
  },
  getContract: function (state) {
    console.log('Getting contracts')
    var id = state.temp.ID
    if (state.temp.ID) {
      for (var key in state.data.Contracts) {
        if (state.data.Contracts[key].ID === id) {
          return state.data.Contracts[key]
        }
      }
    }
  },
  getTemp: function (state) {
    console.log('Getting Temp')
    var res = (typeof state.temp === 'undefined' || state.temp === null) ? {'ID': ''} : state.temp
    return res
  },
  getUnpaid: function (state) {
    console.log('Getting Unpaid')
    if (state.data.Contracts) {
      var ret = state.data.Contracts.filter(function (Contract) { return Contract.StartTime >= Contract.EndTime })
      return ret
    }
  },
  getOneMonthRemaining: function (state) {
    console.log('getting stat')
    if (state.data.Contracts) {
      var ret = state.data.Contracts.filter(
       function (ret) {
         return (parseInt(ret.EndTime.split('-')[1]) - parseInt(ret.StartTime.split('-')[1])) === 1
       }
      )
      return ret
    }
  },
  unpaidSize: function (state) {
    console.log('getting stat')
    if (state.data.Contracts) {
      var ret = state.data.Contracts.filter(function (Contract) { return Contract.StartTime >= Contract.EndTime })
      return ret.length
    }
  },
  oneMonthRemainingSize: function () {
    console.log('getting stat')
    if (state.data.Contracts) {
      var ret = state.data.Contracts.filter(
      function (ret) {
        return (parseInt(ret.EndTime.split('-')[1]) - parseInt(ret.StartTime.split('-')[1])) === 1
      }
      )
      return ret.length
    }
  },
  getStat: function (state) {
    console.log('getting stat')
    var statData = {
      'late': [],
      'unpaid': []
    }
    return statData
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
