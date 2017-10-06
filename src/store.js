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
      state.data.Properties.push(data)
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
      state.data.ServiceRecievers.push(data)
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
      state.data.ServiceRecievers.push(data)
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
  removeProperty: function (state, id) {
    console.log('remove Contracts')
    console.log(id)
    for (var i in state.data.Properties) {
      if (state.data.Properties[i].ShopNumber === id) {
        state.data.Properties.splice(i, 1)
      }
    }
  },
  removeRentee: function (state, id) {
    console.log('remove rentee')
    console.log(id)
    for (var i in state.data.ServiceRecievers) {
      if (state.data.ServiceRecievers[i].ID === id) {
        state.data.ServiceRecievers.splice(i, 1)
      }
    }
  },
  addContract: function (state, Contract) {
    console.log('Add Contract')
    var keys = firebaseApp.do.database().ref().child('Contracts').push().key

    var updates = {}
    updates[keys] = Contract

    firebaseApp.do.database().ref('ServiceRecievers').update(updates).then(function () {
      state.data.ServiceRecievers.push(updates)
    }).catch(function (error) {
      console.log(error)
    })

    state.data.Contracts.push(Contract)
  },
  removeContract: function (state, id) {
    console.log('remove Contracts')
    console.log(id)
    for (var i in state.data.Contracts) {
      if (state.data.Contracts[i].ID === id) {
        state.data.Contracts.splice(i, 1)
      }
    }
  },
  login: function (state, userData) {
    console.log('mutations login')
    console.log(state.user.authenticated)
    var ret = firebaseApp.do.login(userData)
    ret.then(function (response) {
      console.log(response.email)
      firebaseApp.do.database().ref().once('value').then(function (snapshot) {
        state.data = snapshot.val()
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
    console.log(state.user.authenticated)
    console.log('mutations login completed')
  },
  logOut: function (state) {
    console.log('mutations logout')
    console.log(firebaseApp)
    var rets = firebaseApp.do.signOut()
    rets.then(function () {
      state.user.authenticated = false
      router.push('home')
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
    console.log(state.user.authenticated)
    console.log('mutations logout completed')
  },
  signUp: function () {
    console.log('signup')
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
    console.log(id)
    return state.data.ServiceRecievers.filter(function (ServiceReciever) { return ServiceReciever.ID === id })
  },
  getProperty: function (state) {
    console.log('Getting Property')
    console.log(state.temp.ID)
    return state.data.Properties.filter(function (property) { return property.ShopNumber === state.temp.ID })
  },
  getContracts: function (state) {
    console.log('Getting contract')
    console.log(state.temp.ID)
    return state.data.Contracts
  },
  getContract: function (state) {
    console.log('Getting contracts')
    console.log(state.temp.ID)
    return state.data.Contracts.filter(function (Contract) { return Contract.ID === state.temp.ID })
  },
  getTemp: function (state) {
    console.log('Getting Temp')
    var res = (typeof state.temp === 'undefined' || state.temp === null) ? {'ID': ''} : state.temp
    return res
  },
  getUnpaid: function (state) {
    console.log('Getting Unpaid')
    var ret = state.data.Contracts.filter(function (Contract) { return Contract.StartTime >= Contract.EndTime })
    return ret
  },
  getOneMonthRemaining: function (state) {
    console.log('getting stat')
    var ret = state.data.Contracts.filter(
     function (Contract) {
       return (parseInt(Contract.EndTime.split('-')[1]) - parseInt(Contract.StartTime.split('-')[1])) === 1
     }
    )
    return ret
  },
  unpaidSize: function (state) {
    console.log('getting stat')
    var ret = state.data.Contracts.filter(function (Contract) { return Contract.StartTime >= Contract.EndTime })
    return ret.length
  },
  oneMonthRemainingSize: function () {
    console.log('getting stat')
    var ret = state.data.Contracts.filter(
    function (Contract) {
      return (parseInt(Contract.EndTime.split('-')[1]) - parseInt(Contract.StartTime.split('-')[1])) === 1
    }
    )
    return ret.length
  },
  getStat: function (state) {
    console.log('getting stat')
    var retunpaid = state.data.Contracts.filter(function (Contract) { return Contract.StartTime >= Contract.EndTime })
    var retoneMonthRemaining = state.data.Contracts.filter(
    function (Contract) {
      console.log(new Date())
      return (parseInt(Contract.EndTime.split('-')[1]) - parseInt(Contract.StartTime.split('-')[1])) === 0
    }
    )
    console.log('getting data stat')
    var unpaidrenterIds = []
    for (var k = 0; k < retunpaid.length; k++) {
      unpaidrenterIds.push(retunpaid[k].Renter)
    }
    var retoneMonthRemainingId = []
    for (var kk = 0; kk < retoneMonthRemaining.length; kk++) {
      retoneMonthRemainingId.push(retoneMonthRemaining[kk].Renter)
    }
    var renters = state.data.ServiceRecievers
    var statData = {
      'late': [],
      'unpaid': []
    }
    console.log('unpaid')
    console.log(unpaidrenterIds)
    for (var uid in unpaidrenterIds) {
      console.log(uid)
      for (var renter in renters) {
        if (renter[renter] === uid) {
          statData.unpaid.push(renters[renter])
        }
      }
    }
    console.log('late')
    console.log(retoneMonthRemainingId)
    for (var lid in retoneMonthRemainingId) {
      console.log(lid)
      for (var rent in renters) {
        if (renter[rent] === lid) {
          statData.late.push(renters[rent])
        }
      }
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
