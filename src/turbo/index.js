import store from 'store'

const actions = {
  test: function () {
    console.log('turbo actions fine')
  },
  publishEvent: function () {
    if (this.subscribeEvent.length > 0) {
      for (var fun in this.subscribeEvent) {
        this.subscribeEvent[fun]()
      }
    }
  },
  subscribeEvent: []
}

const Turbo = {
  Turbo  () {
    console.log('turbo jablue running')
    return {
      'do': actions,
      'store': store
    }
  }
}

export default new Turbo.Turbo({
  actions
})
