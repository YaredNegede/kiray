
<script>

export default {
  name: 'shopDetail',
  props: { show: true },
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    var dt = this.$store.getters.getProperty[0]
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ShopNumber': '', 'Floor': '', 'Purpuse': ''} : dt
    console.log(this.data)
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
    return { 'ShopNumber': 'undefined', 'Floor': 'undefined', 'Purpuse': 'undefined' }
  },
  methods: {
    registerProfile () {}
  }
}
</script>
<style scoped>

.them{
  background-color:#00BBBB;
  color:white
}
</scope>
	
<template>
<div id= "shopDetail" class="panel panel-default them" style="background-color:#00AAAA">
	<div class="panel-heading postJob"  style="background-color:#00AAAA;color:white">Shop Detail</div> 
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
