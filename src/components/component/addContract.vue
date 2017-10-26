
<script>
import store from 'store'
import contractDetail from './contractDetail'

export default {
  name: 'addContract',
  props: { show: true },
  components: {store, contractDetail},
  beforeCreate: function () {
    console.log('~~~~~~~Contract detail~~~~~~~~~')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    if (!this.$store.getters.getUser.authenticated) {
      this.$router.push('login')
    }
    var dt = this.$store.getters.getContract
    if (dt) {
      this.data = dt
    } else {
      this.data = {'StartTime': '', 'EndTime': '', 'FatherName': '', 'ID': '', 'Magnitude': '', 'Period': '', 'Rentee': '', 'ShopNumber': '', 'Status': '', 'Unit': ''}
    }
  },
  computed: {
    viewRentee: function (event) {
      console.log('renterDetail ' + event.srcElement.id)
      console.log(this.$store)
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push({name: 'renterDetail', params: {renteeKey: event.srcElement.id}})
    },
    viewShop: function (event) {
      console.log('shopDetail  ' + event.srcElement.id)
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push({name: 'shopDetail', params: {ID: event.srcElement.id}})
    },
    viewContract: function (event) {
      this.$store.state.temp.ID = event.srcElement.id
      this.$router.push({name: 'viewContract', params: {ID: event.srcElement.id}})
    },
    shops: function () {
      return this.$store.getters.getProperties
    },
    rentees: function () {
      return this.$store.getters.getServiceRecievers
    },
    cs: function () {
      console.log('***************************')
      return this.$store.getters.getContracts
    }
  },
  data: function () {
    return {}
  },
  methods: {
    add: function () {
      var Magnitude = document.getElementById('Magnitude').value
      var Unit = document.getElementById('Unit').value
      var Status = document.getElementById('Status').value
      var Period = document.getElementById('Period').value
      var StartTime = document.getElementById('StartTime').value
      var EndTime = document.getElementById('EndTime').value
      var shopItem = document.getElementById('ShopNumber')
      var ShopNumber = shopItem.value
      var renteeItem = document.getElementById('Rentee')
      var Rentee = renteeItem.value
      var contract = {'ID': '', 'name': '', 'FatherName': '', 'Magnitude': '', 'Unit': '', 'Status': '', 'Period': '', 'StartTime': '', 'EndTime': '', 'Rentee': '', 'ShopNumber': ''}
      this.$store.state.temp.ID = Rentee
      var Renteekey = renteeItem.options[renteeItem.selectedIndex].id
      contract['Renteekey'] = Renteekey
      var ShopNumbereekey = shopItem.options[shopItem.selectedIndex].id
      contract['ShopNumbereekey'] = ShopNumbereekey
      var renteeObj = this.$store.getters.getServiceRecievers[Renteekey]
      contract.name = renteeObj.Name
      contract.FatherName = renteeObj.FatherName
      contract.Magnitude = Magnitude
      contract.Unit = Unit
      contract.Status = Status
      contract.Period = Period
      contract.StartTime = StartTime
      contract.EndTime = EndTime
      contract.Shop = ShopNumber
      contract.Rentee = Rentee
      if (this.validate(contract)) {
        this.$store.dispatch('addContract', contract)
        this.data.contract = this.$store.getters.getContracts
      } else {
        alert('input error')
        console.log(contract.Shop + '\t' + contract.Rentee + '\t' + contract.StartTime + '\t' + contract.EndTime + '\t' + contract.Magnitude)
      }
    },
    validate: function (contract) {
      return ((contract.Shop !== '') && (contract.Rentee !== '' && contract.StartTime !== '') && (contract.EndTime !== '' && contract.Magnitude !== ''))
    },
    removeContract: function (event) {
      console.log('remove contract ' + event.srcElement.id)
      this.$store.dispatch('removeContract', event.srcElement.id)
      this.data.contract = this.$store.getters.getContracts
    }
  }
}
</script>
<style scoped>
 .theme{
	 background-color:#00AAAA;
	 color:white
 }
</scope>
<template>
<div>
  <div id ="addContract" class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading" style="background-color:#00BBBB;color:white">ኮንትራት</div> 
	
		<div style="padding:30px">
	
		<table class="table" style="color:white"> 
	
			<tr><td>የሱቅ ቁጥር</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white" id="ShopNumber">
						<option v-for="(shop,index) in shops"  style="background-color:#00AAAA;color:white"  v-bind:id=index>{{shop.ShopNumber}}</option>
					</select>
          
				</td>
			</tr>
			<tr><td>የተከራይ ስም</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Rentee">
									<option v-for="(rentee,index) in rentees" v-bind:id=index>{{rentee.Name}}</option>
					</select>
				</td>
			</tr>
			<tr>
			<td>
						ካሬ
			</td>
					<td>
						<input v-model="data.Magnitude" type="number" class="form-control"   style="background-color:#00AAAA;color:white"  id="Magnitude"/>
					</td>
				</td>
			</tr>
			<tr>
				<td>መለኪያ</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Unit">
						<option  style="background-color:#00AAAA;color:white">ስኩዌር ሜትር</option>
						<option  style="background-color:#00AAAA;color:white">ጊዜ</option>
					</select>
				</td>
				</tr>
			<tr>
				<td>ሁኔታ</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Status">
						<option   style="background-color:#00AAAA;color:white">ተከራይቷል</option>
						<option   style="background-color:#00AAAA;color:white">አልተከራየም</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>	የከፈሉት ወራት</td>
				<td><input  v-model="data.Period" type="number" class="form-control" style="background-color:#00AAAA;color:white"  id="Period"/></td></td></tr>
			<tr>
				<td>ኪራያቸው የሚጀምርበት ቀን</td>
				<td><input v-model="data.StartTime" type="text" class="form-control" style="background-color:#00AAAA;color:white"  id="StartTime"/></td></td></tr>
			<tr>
				<td>ኪራያቸው የሚያልቅበት ቀን</td>
				<td><input v-model="data.EndTime" type="text" class="form-control" style="background-color:#00AAAA;color:white"  id="EndTime"/></td></td></tr>
		</table> 
	  	<div class="row">
				<div class=" col-lg-6">

				</div>

				<div class=" col-lg-6">

					<button class="btn btn-primary pull-right" @click="add" style="background-color:#00AAAA">+</button>

				</div>
			</div>
	  </div>



   </div>
	 

   	<!--TABLE-->
 <div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">ኮንትራት</div> 
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
			<tr v-for="(contract,index) in cs">
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
