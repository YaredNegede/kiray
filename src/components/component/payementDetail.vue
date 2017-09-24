
<script>
import Turbo from 'turbo'
import store from 'store'

export default {
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    var dt = this.$store.getters.getStat
    var statData = {
      'late': [{'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''}],
      'unpaid': [{'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''}]
    }
    this.data = (typeof dt === 'undefined' || dt === null) ? statData : dt
    console.log(this.data)
  },
  name: 'payementDetail',
  components: {Turbo, store},
  data: function () {
    return {}
  }
}
</script>
<style scoped>

</scope>

<template name="payementDetail">

	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
	
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Late</div> 
	<div style="padding:30px">

					<table class="table" style="color:white" v-for="tekeray in data.late"> 
						
							<tr><td>Name</td><td>{{tekeray.Name}}</td></tr>
							<tr><td>Father Name</td><td>{{tekeray.FatherName}}</td></tr>
							<tr><td>Identification type</td><td>{{tekeray.ID}}</td></tr>
						<tr><td>Identification type</td><td>{{tekeray.IDType}}</td></tr>
						<tr><td>PhoneNumber</td><td>{{tekeray.PhoneNumber}}</td></tr>
					</table> 
			
				</div>

    <div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Unpaid Rent</div> 
		<div style="padding:30px">

					<table class="table" style="color:white" v-for="tekeray in data.unpaid"> 
						
							<tr><td>Name</td><td>{{tekeray.Name}}</td></tr>
							<tr><td>Father Name</td><td>{{tekeray.FatherName}}</td></tr>
							<tr><td>Identification type</td><td>{{tekeray.ID}}</td></tr>
						<tr><td>Identification type</td><td>{{tekeray.IDType}}</td></tr>
						<tr><td>PhoneNumber</td><td>{{tekeray.PhoneNumber}}</td></tr>
					</table> 
			
				</div>

	</div>


</template>
