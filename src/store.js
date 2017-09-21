import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {'authenticated': true},
  componentState: [],
  temp: {'ID': ''},
  surf: {'currentPath': 'home', 'previousPath': '', 'rediretTo': ''},
  data: {
    'PropertyName': '',
    'Address': '',
    'Address2': '',
    'Contracts': [{'ID': 'C123', 'name': 'Yared', 'FatherName': 'Negede', 'Magnitude': '120', 'Unit': 'Square Meter', 'Status': 'New', 'Period': '3', 'StartTime': '12/23/2016', 'EndTime': '12/23/2017', 'Renter': 'DEC1231', 'Shop': '123'}],
    'Properties': [{'ShopNumber': '123', 'Floor': '1', 'Purpuse': 'Men Close'}],
    'ServiceRecievers': [{'Name': 'Yared', 'FatherName': 'Negede', 'ID': 'DEC1231', 'IDType': 'Passport', 'PhoneNumber': '0912435466'}]
  }
}
// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  getUser: function (state) { return state.user },
  getComponentState: function (state) { return state.componentState },
  getSurf: function (state) { return state.surf },
  getData: function (state) { return state.data },
  getServiceRecievers: function (state) { return state.data.ServiceRecievers },
  getProperties: function (state) { return state.data.Properties },
  getServiceReciever: function (state) {
    console.log('Getting ServiceRecievers for : ')
    var id = state.temp.ID
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
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
