
<script>
import firebaseApp from 'firebaseApp'

export default {
  beforeCreate: function () {
    console.log('========Contract Detail========')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    if (!this.$store.getters.getUser.authenticated) {
      this.$router.push('login')
    }
  },
  create: function () {
    this.data['Contracts'] = this.$store.getters.getContracts
  },
  name: 'contractDetail',
  props: { show: true },
  components: {firebaseApp},
  computed: {
    // contracts: function () {
    //   return this.$store.getters.getContracts
    // }
  },
  data: function () {
    return { Contracts: [] }
  },
  methods: {
    viewRentee (event) {
      console.log('renterDetail ' + event.srcElement.id)
      console.log(this.$store)
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push({name: 'renterDetail', params: {renteeKey: event.srcElement.id}})
    },
    viewShop (event) {
      console.log('shopDetail  ' + event.srcElement.id)
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push({name: 'shopDetail', params: {ID: event.srcElement.id}})
    },
    viewContract (event) {
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push({name: 'viewContract', params: {ID: event.srcElement.id}})
    },
    removeContract (event) {
      console.log('remove contract ' + event.srcElement.id)
      this.$store.dispatch('removeContract', event.srcElement.id)
      this.data.data = this.$store.getters.getContracts
    }
  }
}
</script>
<style scoped>

</scope>
	
<template>

  <div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">ኮንትራት</div> 
		<div style="padding:30px">
      <a style="color:white" href="#/addContract">አዲስ ኮንትራት መዝግብ</a>
	<hr>
		<table class="table" style="color:white"> 
			<th>ስም</th>
      <th>የአባት ስም</th>
      <th>ካሬ</th>
      <th>መለኪያ</th>
      <th>ሁኔታ</th>
      <th>የከፈሉት ወራት</th>
      <th>ኪራያቸው የሚጀምርበት ቀን</th>
      <th>ኪራያቸው የሚያልቅበት ቀን</th>
			<th>የተከራይ ስም</th>
      <th>የሱቅ ቁጥር</th>
      <th>ኮንትራት የቀራቸው ጊዜ</th>	
			<tr v-for="(contract,index) in Contracts">
				<td>{{contract.Rentee}}</td>
				<td>{{contract.FatherName}}</td>
				<td>{{contract.Magnitude}}</td>
				<td>{{contract.Unit}}</td>
				<td>{{contract.Status}}</td>
				<td>{{contract.Period}}</td>
				<td>{{contract.StartTime}}</td>
				<td>{{contract.EndTime}}</td>
				<td><a href="#" @click.stop.prevent='viewRentee'  v-bind:id="contract.Renteekey">{{contract.Rentee}}</a></td>
				<td><a href="#" @click.stop.prevent="viewShop" v-bind:id="contract.ShopNumbereekey">{{contract.Shop}}</a></td>
				<td>{{contract.EndTime -contract.StartTime}}</td>
        <td><a href="#" @click.stop.prevent="removeContract" v-bind:id="index">Remove</a></td>
			</tr>
		</table> 
			
	</div>
   </div>


</template>
