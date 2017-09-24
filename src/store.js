import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  'user': {'authenticated': false, 'name': '', 'email': '', 'tel': '', 'password': '', 'password2': '', 'userType': ['Renter', 'Rentee']},
  'componentState': [],
  'temp': {'ID': ''},
  'surf': {'currentPath': 'home', 'previousPath': '', 'rediretTo': ''},
  'data': {
    'PropertyName': 'SNAP PLAZA',
    'Address': 'Addis Ababa',
    'Address2': 'Bole',
    'Contracts': [{'ID': 'C1234', 'name': 'Kassahun', 'FatherName': 'Teferi', 'Magnitude': '120', 'Unit': 'Square Meter', 'Status': 'Rented', 'Period': '3', 'StartTime': '2018-09-21', 'EndTime': '2017-09-21', 'Renter': 'DEC1231', 'Shop': '123'}, {'ID': 'C123', 'name': 'Yared', 'FatherName': 'Negede', 'Magnitude': '120', 'Unit': 'Square Meter', 'Status': 'Rented', 'Period': '3', 'StartTime': '2017-07-21', 'EndTime': '2017-07-21', 'Renter': 'DEC1231', 'Shop': '123'}],
    'Properties': [{'ShopNumber': '123', 'Floor': '1', 'Purpuse': 'Men Close'}],
    'ServiceRecievers': [{'Name': 'Yared', 'FatherName': 'Negede', 'ID': 'DEC1231', 'IDType': 'Passport', 'PhoneNumber': '0912435466'}, {'Name': 'Kassahun', 'FatherName': 'Teferi', 'ID': 'DEC2342', 'IDType': 'Passport', 'PhoneNumber': '0912435466'}]
  }
}

const mutations = {
  updateProperty: function (data) {},
  updateContracts: function (data) {},
  updateProperties: function (data) {},
  updateServiceRecievers: function (data) {}
}

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
