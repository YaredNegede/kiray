import store from 'store'
import moment from 'moment'

const actions = {
  test: function (state) {
    console.log('test')
  },
  payementStat: function () {
    console.log('Getting statstics for payement')
    var payements = store.getters.getPayements
    var contracts = store.getters.getContracts
    console.log(payements)
    console.log(contracts)
    for (var key in payements) {
      var endDate = moment(new Date(payements[key].EndTime))
      var today = moment(new Date())
      var diff = endDate.diff(today)
      payements[key]['remainingTime'] = diff
    }
    return payements
  }
}

const Turbo = {
  Turbo  () {
    console.log('turbo jablue running 2')
    return {
      'do': actions,
      'store': store
    }
  }
}

export default new Turbo.Turbo({
  actions
})
