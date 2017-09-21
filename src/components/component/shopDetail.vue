
<script>

export default {
  name: 'shopDetail',
  props: { show: true },
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    console.log(this.$store.getters.getProperty)
    var tmp = this.$store.getters.getTemp
    console.log(tmp.ID)
    if (!(typeof tmp.ID === 'undefined' || tmp.ID === null)) {
      console.log('new ---')
      this.data = this.$store.state.data.Properties.filter(function (Property) {
        return Property.ShopNumber === tmp.ID
      })[0]
      console.log(this.data)
    }
  },
  components: {},
  computed: {
    shopNumber () {
      return (typeof this.data.ShopNumber === 'undefined' || this.data.ShopNumber === null) ? '' : this.data.ShopNumber
    },
    floor () {
      return (typeof this.data.Floor === 'undefined' || this.data.Floor === null) ? '' : this.data.Floor
    },
    purpuse () {
      return (typeof this.data.Purpuse === 'undefined' || this.data.Purpuse === null) ? '' : this.data.Purpuse
    }
  },
  data: function () {
    return { 'ShopNumber': '1', 'Floor': '2', 'Purpuse': '3' }
  },
  methods: {
    registerProfile () {}
  }
}
</script>
<style scoped>

</scope>
	
<template>
<div id= "shopDetail" class="panel panel-default" style="background-color:#00AAAA">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Shop Detail</div> 
		<div style="padding:30px">

					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Shop Number</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input v-model="shopNumber" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Floor </label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input v-model="floor" type="text"  class="form-control " placeholder="Your Name"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Purpuse</label>
						</div>
						<div class=" col-lg-6">
							<input v-model="purpuse" type="text"  class="form-control" placeholder="Enter purpuse"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

		
				</div>
	</div>
</template>
