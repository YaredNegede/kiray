
<script>
import Turbo from 'turbo'
import store from 'store'

export default {
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    var dt = this.$store.getters.getServiceRecievers
    this.data = (typeof dt === 'undefined' || dt === null) ? [{'Name': 'Yared', 'FatherName': 'Negede', 'ID': 'DEC1231', 'IDType': 'Passport', 'PhoneNumber': '0912435466'}] : dt
    console.log(this.data)
  },
  name: 'rentersDetail',
  props: { show: true },
  components: {Turbo, store},
  data: function () {
    return {}
  },
  methods: {}
}
</script>
<style scoped>

</scope>

<template name="rentersDetail">

	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
	
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Renter Detail</div> 
		<div style="padding:30px">

					<table class="table" style="color:white" v-for="tekeray in data"> 
						
							<tr><td>Name</td><td>{{tekeray.Name}}</td></tr>
							<tr><td>Father Name</td><td>{{tekeray.FatherName}}</td></tr>
							<tr><td>Identification type</td><td>{{tekeray.ID}}</td></tr>
						<tr><td>Identification type</td><td>{{tekeray.IDType}}</td></tr>
						<tr><td>PhoneNumber</td><td>{{tekeray.PhoneNumber}}</td></tr>
					</table> 
			
				</div>
	</div>


</template>
