import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: {'authenticated': false, 'name': '', 'email': '', 'tel': '', 'password': '', 'password2': '', 'userType': ['Renter', 'Rentee']},
  componentState: [],
  temp: {'ID': ''},
  surf: {'currentPath': 'home', 'previousPath': '', 'rediretTo': ''},
  data: {
    'PropertyName': 'SNAP PLAZA',
    'Address': 'Addis Ababa',
    'Address2': 'Bole',
    'Contracts': [{'ID': 'C123', 'name': 'Yared', 'FatherName': 'Negede', 'Magnitude': '120', 'Unit': 'Square Meter', 'Status': 'New', 'Period': '3', 'StartTime': '12/23/2016', 'EndTime': '12/23/2017', 'Renter': 'DEC1231', 'Shop': '123'}],
    'Properties': [{'ShopNumber': '123', 'Floor': '1', 'Purpuse': 'Men Close'}],
    'ServiceRecievers': [{'Name': 'Yared', 'FatherName': 'Negede', 'ID': 'DEC1231', 'IDType': 'Passport', 'PhoneNumber': '0912435466'}, {'Name': 'Kassahun', 'FatherName': 'Teferi', 'ID': 'DEC2342', 'IDType': 'Passport', 'PhoneNumber': '0912435466'}]
  }
}

const mutations = {}

const actions = {}

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

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
