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
  getContract: function (state, ID) {
    for (var kk in this.$store.state.data.Contracts) {
      if (this.$store.state.data.Contracts[kk].ID === ID) {
        return this.$store.state.data.Contracts[kk]
      }
    }
    return {}
  },
  addPayement: function (state, data) {
    console.log('mutations Update payement------')
    state.data.Payements[data[0]] = data
  },
  updateProperty: function (state, keys, data) {
    console.log('mutations Update updateProperty')
    state.data.Properties[keys] = data
  },
  updateProperties: function (state, userData) {
    console.log('Update Properties mutuation')
    state.data.Properties[userData[0]] = userData[1]
  },
  updateServiceRecievers: function (state, userData) {
    console.log('Update ServiceRecievers')
    state.data.ServiceRecievers[userData[0]] = userData[1]
  },
  updateContracts: function (state, keys, userData) {
    console.log('Update Contracts')
    state.data.ServiceRecievers[keys] = userData
    console.log(state.data.ServiceRecievers[keys])
  },
  updateContract: function (state, keys, userData) {
    console.log('Update Contracts')
    state.data.Properties[keys] = userData
  },
  removeProperty: function (state, key) {
    console.log('remove removeProperty' + key)
    delete state.data.Properties[key]
  },
  removeRentee: function (state, key) {
    console.log('remove rentee mutuation')
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
    state.user.authenticated = true
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
  getContract: function ({ commit }, userData) {
    commit('getContract', userData)
  },
  addPayement: function ({ commit }, userData) {
    console.log('actions add addPayement')
    var db = firebaseApp.do.database().ref().child('Payements')
    var keys = db.push().key
    var updates = {}
    updates[keys] = userData
    db.update(updates).then(function () {
      db.once('value').then(function (snapshot) {
        state.data.Payements = userData
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateProperty: function ({ commit }, userData) {
    console.log('actions Update updateProperty')
    var db = firebaseApp.do.database().ref().child('Properties')
    var keys = db.push().key
    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      db.once('value').then(function (snapshot) {
        state.data.Properties = snapshot.val()
        commit('updateProperty', keys, userData)
      }).catch(function (error) {
        console.log(error)
      })
    }).catch(function (error) {
      console.log(error)
    })
  },
  editProperty: function ({ commit }, userData) {
    console.log('actions Update Property')
    var db = firebaseApp.do.database().ref().child('Properties')
    var updates = {}
    updates[userData[0]] = userData[1]
    db.update(updates).then(function () {
      db.once('value').then(function (snapshot) {
        state.data.Properties = snapshot.val()
      }).catch(function (error) {
        console.log(error)
      })
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
      state.data.Properties[keys] = userData
    }).catch(function (error) {
      console.log(error)
    })
  },
  updateServiceRecievers: function ({ commit }, userData) {
    var db = firebaseApp.do.database().ref().child('ServiceRecievers')
    var keys = db.push().key

    var updates = {}
    updates[keys] = userData

    db.update(updates).then(function () {
      state.data.Properties[keys] = userData
    }).catch(function (error) {
      console.log(error)
    })
  },
  editServiceReciever: function ({ commit }, userData) {
    console.log('actions Update editServiceReciever')
    var db = firebaseApp.do.database().ref().child('ServiceRecievers')
    var updates = {}
    updates[userData[0]] = userData[1]
    db.update(updates).then(function () {
      db.once('value').then(function (snapshot) {
        state.data.ServiceRecievers = snapshot.val()
      }).catch(function (error) {
        console.log(error)
      })
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
      db.once('value').then(function (snapshot) {
        state.data.Properties = snapshot.val()
        commit('updateContracts', keys, userData)
      }).catch(function (error) {
        console.log(error)
      })
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
  removeProperty: function ({ commit }, key) {
    var db = firebaseApp.do.database().ref().child('Properties')
    var data = {}
    data[key] = null
    db.update(data).then(function () {
      console.log(key)
      db.once('value').then(function (snapshot) {
        commit('removeProperty', key)
        state.data.Properties = snapshot.val()
      }).catch(function (error) {
        console.log(error)
      })
    }).catch(function (error) {
      alert(error.message)
    })
  },
  removeRentee: function ({ commit }, key) {
    console.log('action')
    var db = firebaseApp.do.database().ref().child('ServiceRecievers')
    var data = {}
    data[key] = null
    db.update(data).then(function () {
      db.once('value').then(function (snapshot) {
        commit('removeRentee', key)
        state.data.ServiceRecievers = snapshot.val()
      }).catch(function (error) {
        console.log(error)
      })
    }).catch(function (error) {
      alert(error.message)
    })
  },
  removeContract: function ({ commit }, ID) {
    var data = {}
    for (var key in state.data.Contracts) {
      data['Contracts/' + key] = null
      firebaseApp.do.database().ref().update(data).then(function () {
        commit('removeContract', ID)
      }).catch(function (error) {
        alert(error.message)
      })
    }
  },
  removePayement: function ({ commit }, key) {
    var data = {}
    data['Payements/' + key] = null
    firebaseApp.do.database().ref().update(data).then(function () {
      delete state.data.Payements[key]
      console.log(state.data.Payements)
    }).catch(function (error) {
      alert(error.message)
    })
  },
  addContract: function ({ commit }, userData) {
    console.log('adding contract action')
    var db = firebaseApp.do.database().ref().child('Contracts')
    var keys = db.push().key
    var updates = {}
    updates[keys] = userData
    if (!(typeof state.data.Contracts === 'undefined' || state.data.Contracts === null)) {
      console.log('contracts found')
      console.log(state.data.Contracts)
      for (var k in state.data.Contracts) {
        if (state.data.Contracts[k].Renteekey === userData.Renteekey && state.data.Contracts[k].ShopNumbereekey) {
          alert('ያለ ኮንትራት ነው')
          throw new Error('Already exists')
        } else {
          db.update(updates).then(function () {
            db.once('value').then(function (snapshot) {
              commit('addContract', keys, userData)
              state.data.Contracts = snapshot.val()
            })
          }).catch(function (error) {
            console.log(error)
          })
        }
      }
    } else {
      console.log('no contracts found')
      db.update(updates).then(function () {
        console.log('adding to firebase')
        db.once('value').then(function (snapshot) {
          commit('addContract', keys, userData)
          state.data['Contracts'] = snapshot.val()
          console.log(state.data.Contracts)
        })
      }).catch(function (error) {
        console.log(error)
      })
    }
  },
  login: function ({ commit }, userData) {
    console.log(userData)
    console.log(userData)
    var ret = firebaseApp.do.login(userData)
    ret.then(function (response) {
      firebaseApp.do.database().ref().once('value').then(function (snapshot) {
        console.log('____________________LOGIN_______________________________')
        console.log(snapshot.val())
        state.data = snapshot.val()
        commit('login', userData)
        router.push('/addContract')
      })
    }).catch(
          function (error) {
            console.log('error')
            router.push('/login')
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
  logOut: function ({ commit }, userData) {
    var rets = firebaseApp.do.signOut()
    rets.then(function () {
      state.user.authenticated = false
      router.push('/login')
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
  },
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
    firebaseApp.do.database().ref().child('Payements').once('value').then(function (snapshot) {
      state.data.Payements = snapshot.val()
    })
    return state.data.Payements
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
    firebaseApp.do.database().ref().child('ServiceRecievers').once('value').then(function (snapshot) {
      state.data.ServiceRecievers = snapshot.val()
    })
    return state.data.ServiceRecievers
  },
  getProperties: function (state) {
    firebaseApp.do.database().ref().child('Properties').once('value').then(function (snapshot) {
      state.data.Properties = snapshot.val()
    })
    return state.data.Properties
  },
  getServiceReciever: function (state) {
    var key = state.temp.ID
    console.log('Getting ServiceReciever for : ' + key)
    return state.data.ServiceRecievers[key]
  },
  getProperty: function (state) {
    console.log('Getting Property for ' + state.temp.ID)
    var key = state.temp.ID
    return state.data.Properties[key]
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
      var ret = state.data.Contracts
      return ret
    }
  },
  getOneMonthRemaining: function (state) {
    console.log('getting stat')
    return state.data.Contracts
  },
  unpaidSize: function (state) {
    console.log('getting stat')
    return state.data.Contracts
  },
  oneMonthRemainingSize: function () {
    console.log('getting stat')
    return state.data.Contracts
  },
  getStat: function (state) {
    console.log('getting stat')
    var statData = {
      'late': [],
      'unpaid': []
    }
    return statData
  },
  getUnrented: function (state) {
    var unrented = {}
    for (var key in state.data.Properties) {
      for (var key2 in state.data.Contracts) {
        if (state.data.Contracts[key2].ShopNumbereekey !== key) {
          unrented[key] = state.data.Properties[key]
        }
      }
    }
    return unrented
  },
  getRented: function (state) {
    var rented = {}
    for (var key in state.data.Properties) {
      for (var key2 in state.data.Contracts) {
        if (state.data.Contracts[key2].ShopNumbereekey === key) {
          rented[key] = state.data.Properties[key]
        }
      }
    }
    return rented
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
