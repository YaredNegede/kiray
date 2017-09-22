
<script>
import Turbo from 'turbo'

export default {
  beforeCreate: function () {
    console.log('========contractDetail========')
  },
  name: 'contractDetail',
  props: { show: true },
  components: {Turbo},
  computed: {
    contracts: function () { return this.$store.getters.getData.Contracts }
  },
  methods: {
    viewRentee (event) {
      this.$store.getters.getTemp.ID = event.srcElement.innerText
      this.$router.push('/renterDetail')
    },
    viewShop (event) {
      this.$store.state.temp.ID = event.srcElement.innerText
      this.$router.push('/shopDetail')
    },
    viewContract (event) {
      this.$store.state.temp.ID = event.srcElement.innerText
      this.$router.push('/viewContract')
    }
  }
}
</script>
<style scoped>

</scope>
	
<template>

  <div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Contract Detail</div> 
		<div style="padding:30px">
			<a style="color:white" href="#/rentersDetail">Rente Information<span class="badge"></span></a>
	<hr>
		<table class="table" style="color:white"> 
			<th>Name</th><th>Father Name</th><th>Magnitude</th><th>Unit</th><th>Status</th><th>Period</th><th>Start time</th><th>End time</th>
			<th>Rentee</th>	<th>Shop</th>	<th>Contract Number</th>
			<tr v-for="contract in contracts">
				<td>{{contract.name}}</td>
				<td>{{contract.FatherName}}</td>
				<td>{{contract.Magnitude}}</td>
				<td>{{contract.Unit}}</td>
				<td>{{contract.Status}}</td>
				<td>{{contract.Period}}</td>
				<td>{{contract.StartTime}}</td>
				<td>{{contract.EndTime}}</td>
				<td><a href="#/renterDetail" @click='viewRentee'>{{contract.Renter}}</a></td>
				<td><a href="#/shopDetail" @click="viewShop">{{contract.Shop}}</a></td>
				<td><a href="#/addContract" @click="viewContract">{{contract.ID}}</a></td>
			</tr>
		</table> 
			
	</div>
   </div>


</template>
