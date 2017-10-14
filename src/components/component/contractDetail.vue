
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
  name: 'contractDetail',
  props: { show: true },
  components: {firebaseApp},
  computed: {
    contract: function () {
      return this.$store.getters.getContracts
    }
  },
  data: function () {
    return {}
  },
  methods: {
    viewRentee (event) {
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push('/renterDetail')
    },
    viewShop (event) {
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push('/shopDetail')
    },
    viewContract (event) {
      console.log(event.srcElement.id)
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push('/viewContract')
    },
    removeContract (event) {
      console.log('remove contract ' + event.srcElement.id)
      var id = event.srcElement.id
      this.$store.dispatch('removeContract', id)
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
			<th>ስም</th><th>የአባት ስም</th><th>ካሬ</th><th>መለኪያ</th><th>ሁኔታ</th><th>የከፈሉት ወራት</th><th>ኪራያቸው የሚጀምርበት ቀን</th><th>ኪራያቸው የሚያልቅበት ቀን</th>
			<th>የተከራይ ስም</th>	<th>የሱቅ ቁጥር</th>	
			<tr v-for="contract in contract">
				<td>{{contract.name}}</td>
				<td>{{contract.FatherName}}</td>
				<td>{{contract.Magnitude}}</td>
				<td>{{contract.Unit}}</td>
				<td>{{contract.Status}}</td>
				<td>{{contract.Period}}</td>
				<td>{{contract.StartTime}}</td>
				<td>{{contract.EndTime}}</td>
				<td><a href="#" @click.stop.prevent='viewRentee'  v-bind:id="contract.Rentee">{{contract.Rentee}}</a></td>
				<td><a href="#" @click.stop.prevent="viewShop" v-bind:id="contract.Shop">{{contract.Shop}}</a></td>
				<td><a href="#" @click.stop.prevent="viewContract" v-bind:id="contract.ID">Edit</a></td>
        <td><a href="#" @click.stop.prevent="removeContract" v-bind:id="contract.ID">Remove</a></td>
			</tr>
		</table> 
			
	</div>
   </div>


</template>
