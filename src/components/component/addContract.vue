
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
    contracts: function () {
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
      var renteeItem = document.getElementById('Rentee')
      var Rentee = renteeItem.value
      var contract = {}
      this.$store.state.temp.ID = Rentee
      var Renteekey = renteeItem.options[renteeItem.selectedIndex].value
      contract['Renteekey'] = Renteekey
      var ShopNumbereekey = shopItem.options[shopItem.selectedIndex].value
      contract['ShopNumbereekey'] = ShopNumbereekey
      var renteeObj = this.$store.state.data.ServiceRecievers[Renteekey]
      var shopObj = this.$store.state.data.Properties[ShopNumbereekey]
      contract.Name = renteeObj.Name
      contract.FatherName = renteeObj.FatherName
      contract.Magnitude = Magnitude
      contract.Unit = Unit
      contract.Status = Status
      contract.Period = Period
      contract.StartTime = StartTime
      contract.EndTime = EndTime
      contract.Shop = shopObj.ShopNumber
      contract.Rentee = Rentee
      if (this.validate(contract)) {
        this.$store.dispatch('addContract', contract)
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
    }
  }
}
</script>
<style scoped>
 .theme{
	 background-color:#00AAAA;
	 color:white
 }
 .scrollbar
{
	float: left;
	height: 450px;
	overflow-y: scroll;
	margin-bottom: 25px;
}

.force-overflow
{
	min-height: 450px;
}

#wrapper
{
	text-align: center;
	margin: auto;
}

#style-5::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #00AAAA;
}

#style-5::-webkit-scrollbar
{
	width: 10px;
	background-color: #00AAAA;
}

#style-5::-webkit-scrollbar-thumb
{
	background-color: #0ae;	
	background-image: -webkit-gradient(linear, 0 0, 0 100%,
	                   color-stop(.5, rgba(255, 255, 255, .2)),
					   color-stop(.5, transparent), to(transparent));
}
</style>

<template>
  <div>
  <div id ="addContract" class="panel panel-default theme">
	<div class="panel-heading theme" >ኮንትራት</div> 
	
		<div class="theme" style="padding:30px">
	
		<table class="table theme" > 
	
  	<tr><td>የተከራይ ስም</td>
				<td>
					<select class="form-control theme" id="Rentee" >
									<option v-for="(rentee,index) in rentees" v-bind:value="index" v-if="rentee">{{rentee.Name}}</option>
					</select>
				</td>
			</tr>

			<tr><td>የሱቅ ቁጥር</td>
				<td>
					<select class="form-control theme"  id="ShopNumber">
						<option v-for="(shop,index) in shops"  class="theme"  v-bind:value="index">{{shop.ShopNumber}}</option>
					</select>
          
				</td>
			</tr>
		
			<tr>
			<td>
						ካሬ
			</td>
					<td>
						<input v-model="data.Magnitude" type="number" class="form-control theme"  id="Magnitude"/>
					</td>
				</td>
			</tr>
			<tr>
				<td>መለኪያ</td>
				<td>
					<select class="form-control theme"  id="Unit">
						<option class="theme">ስኩዌር ሜትር</option>
						<option class="theme">ጊዜ</option>
					</select>
				</td>
				</tr>
			<tr>
				<td>ሁኔታ</td>
				<td>
					<select class="form-control theme" id="Status">
						<option class="theme" >ተከራይቷል</option>
						<option  class="theme" >አልተከራየም</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>	የከፈሉት ወራት</td>
				<td><input  v-model="data.Period" type="number" class="form-control theme"  id="Period"/></td></tr>
			<tr>
				<td>ኪራያቸው የሚጀምርበት ቀን</td>
				<td><input v-model="data.StartTime" type="date" class="form-control theme"  id="StartTime"/></td></tr>
			<tr>
				<td>ኪራያቸው የሚያልቅበት ቀን</td>
				<td><input v-model="data.EndTime" type="date" class="form-control theme"  id="EndTime"/></td></tr>
		</table> 

	  	<div class="row">

				<div class=" col-lg-6">

				</div>

				<div class=" col-lg-6">

					<button class="btn btn-primary pull-right theme" @click="add" v-show=show>+</button>

          <button class="btn btn-primary pull-right theme" @click="add" v-show=!show>+</button>

				</div>
			</div>
	  </div>

   </div>
	 
   	<!--TABLE-->
 <div class="panel panel-default theme">
	<div class="panel-heading theme  " >ኮንትራት</div> 
	<table class="table theme"> 
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
			<tr v-for="(contract,index) in contracts">
				<td>{{contract.Name}}</td>
				<td>{{contract.FatherName}}</td>
				<td>{{contract.Magnitude}}</td>
				<td>{{contract.Unit}}</td>
				<td>{{contract.Status}}</td>
				<td>{{contract.Period}}</td>
				<td>{{contract.StartTime}}</td>
				<td>{{contract.EndTime}}</td>
				<td><a href="#" @click.stop.prevent='viewRentee'  v-bind:id="contract.Renteekey">{{contract.Name}}</a></td>
				<td><a href="#" @click.stop.prevent="viewShop" v-bind:id="contract.ShopNumbereekey">{{contract.Shop}}</a></td>
				<td>{{contract.EndTime -contract.StartTime}}</td>
        <td><a href="#" @click.stop.prevent="removeContract" v-bind:id="index">Remove</a></td>
			</tr>
		</table>

    </div>
     </div>
</template>
