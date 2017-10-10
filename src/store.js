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
  addPayement: function (state, data) {
    console.log('mutations Update Property')
    var db = firebaseApp.do.database().ref().child('Payements')
    var keys = db.push().key
    var updates = {}
    updates[keys] = data

    db.update(updates).then(function () {
      state.data.Properties[keys] = data
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateProperty: function (state, keys, data) {
    console.log('mutations Update Property')
    state.data.Properties[keys] = data
  },
  updateProperties: function (state, userData) {
    console.log('Update Properties')
    state.data.Properties = userData
  },
  updateServiceRecievers: function (state, keys, userData) {
    console.log('Update ServiceRecievers')
    state.data.ServiceRecievers[keys] = userData
  },
  updateContracts: function (state, keys, userData) {
    console.log('Update Contracts')
    state.data.ServiceRecievers[keys] = userData
  },
  updateContract: function (state, keys, userData) {
    console.log('Update Contracts')
    state.data.Properties[keys] = userData
  },
  removeProperty: function (state, key) {
    console.log('remove Contracts')
    delete state.data.Properties[key]
  },
  removeRentee: function (state, key) {
    console.log('remove rentee')
    delete state.data.ServiceRecievers[key]
  },
  removeContract: function (state, key) {
    console.log('remove Contracts')
    delete state.data.Contracts[key]
  },
  addContract: function (state, keys, userData) {
    console.log('Add Contract')
    state.data.ServiceRecievers[keys] = userData
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
      this.$router.push('/contractDetail')
    }).catch(
          function (error) {
            console.log('error')
            // this.$router.push('/login')
            var errorCode = error.code
            var errorMessage = error.message
            if (errorCode === 'auth/invalid-custom-token') {
              console.log(errorCode)
              console.log(errorMessage)
              alert(error.message)
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
  addPayement: function ({ commit }, userData) {
    console.log('mutations Update Property')
    var db = firebaseApp.do.database().ref().child('Payements')
    var keys = db.push().key
    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      state.data.Properties[keys] = userData
      commit('addPayement', userData)
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateProperty: function ({ commit }, userData) {
    console.log('mutations Update Property')
    var db = firebaseApp.do.database().ref().child('Properties')
    var keys = db.push().key
    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      commit('updateProperty', keys, userData)
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateProperties: function ({ commit }, userData) {
    var db = firebaseApp.do.database().ref().child('Properties')
    var keys = db.push().key

    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      commit('updateProperties', keys, userData)
    }).catch(function (error) {
      console.log(error)
    })
    console.log('===========')
  },
  updateServiceRecievers: function ({ commit }, userData) {
    console.log(userData)
    var db = firebaseApp.do.database().ref().child('ServiceRecievers')
    var keys = db.push().key

    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      commit('updateServiceRecievers', keys, userData)
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateContracts: function ({ commit }, userData) {
    var db = firebaseApp.do.database().ref().child('Contracts')
    var keys = db.push().key
    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      commit('updateContracts', keys, userData)
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateContract: function ({ commit }, userData) {
    var db = firebaseApp.do.database().ref().child('Contracts')
    var keys = db.push().key
    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      commit('updateContract', keys, userData)
    }).catch(function (error) {
      console.log(error)
    })
  },
  removeProperty: function ({ commit }, ShopNumber) {
    var data = {}
    for (var key in state.data.Properties) {
      if (state.data.Properties[key].ShopNumber === ShopNumber) {
        data['Properties/' + key] = null
        firebaseApp.do.database().ref().update(data).then(function () {
          commit('removeProperty', ShopNumber)
        }).catch(function (error) {
          alert(error.message)
        })
      }
    }
  },
  removeRentee: function ({ commit }, ID) {
    var data = {}
    for (var key in state.data.ServiceRecievers) {
      if (state.data.ServiceRecievers[key].ID === ID) {
        data['ServiceRecievers/' + key] = null
        firebaseApp.do.database().ref().update(data).then(function () {
          commit('removeRentee', ID)
        }).catch(function (error) {
          alert(error.message)
        })
      }
    }
  },
  removeContract: function ({ commit }, ID) {
    var data = {}
    for (var key in state.data.Contracts) {
      if (state.data.Contracts[key].ID === ID) {
        data['Contracts/' + key] = null
        firebaseApp.do.database().ref().update(data).then(function () {
          commit('removeContract', ID)
        }).catch(function (error) {
          alert(error.message)
        })
      }
    }
  },
  addContract: function ({ commit }, userData) {
    var keys = firebaseApp.do.database().ref().child('Contracts').push().key
    var updates = {}
    updates[keys] = userData
    firebaseApp.do.database().ref('Contracts').update(updates).then(function () {
      commit('addContract', userData)
    }).catch(function (error) {
      console.log(error)
    })
  },
  login: function ({ commit }, userData) {
    commit('login', userData)
    console.log('----------x---------')
  },
  logOut: function ({ commit }, userData) {},
  signUp: function ({ commit }, userData) {},
  updateUserState: function ({ commit }, userData) {
  },
  updateUserData: function ({ commit }, userData) {},
  updateSurf: function ({ commit }, userData) {}
}

const getters = {
  getUser: function (state) {
    console.log('Getting user for : ')
    return state.user
  },
  getPayements: function (state) {
    console.log('Getting state for : ')
    return state.Payements
  },
  getComponentState: function (state) {
    console.log('Getting state for : ')
    return state.data.componentState
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
