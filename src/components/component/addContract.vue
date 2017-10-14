
<script>
import store from 'store'

export default {
  name: 'addContract',
  props: { show: true },
  components: {store},
  computed: {},
  beforeCreate: function () {
    console.log('~~~~~~~Contract detail~~~~~~~~~')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    if (!this.$store.getters.getUser.authenticated) {
      this.$router.push('login')
    }
    this.data = this.$store.getters.getContract
  },
  data: function () {
    return { contracts: this.$store.getters.getContracts, shops: this.$store.getters.getProperties, rentee: this.$store.getters.getServiceRecievers }
  },
  methods: {
    add () {
      console.log('creating contracts')
      var Magnitude = document.getElementById('Magnitude').value
      var Unit = document.getElementById('Unit').value
      var Status = document.getElementById('Status').value
      var Period = document.getElementById('Period').value
      var StartTime = document.getElementById('StartTime').value
      var EndTime = document.getElementById('EndTime').value
      var ShopNumber = document.getElementById('ShopNumber').value
      var Rentee = document.getElementById('Rentee').value

      var contract = {'ID': '', 'name': '', 'FatherName': '', 'Magnitude': '', 'Unit': '', 'Status': '', 'Period': '', 'StartTime': '', 'EndTime': '', 'Rentee': '', 'ShopNumber': ''}
      this.$store.state.temp.ID = Rentee
      var renteeObj = this.$store.getters.getServiceReciever
      console.log(renteeObj)
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
        // this.$router.push('/contractDetail')
      } else {
        alert('input error')
        console.log(contract.Shop + '\t' + contract.Rentee + '\t' + contract.StartTime + '\t' + contract.EndTime + '\t' + contract.Magnitude)
      }
      console.log('---------------------')
    },
    validate (contract) {
      console.log('validating')
      return ((contract.Shop !== '') && (contract.Rentee !== '' && contract.StartTime !== '') && (contract.EndTime !== '' && contract.Magnitude !== ''))
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

  <div id ="addContract" class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading" style="background-color:#00BBBB;color:white">Contract Detail</div> 
	
		<div style="padding:30px">
	
		<table class="table" style="color:white"> 
	
			<tr><td>የሱቅ ቁጥር</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white" id="ShopNumber">
						<option v-for="shop in shops"  style="background-color:#00AAAA;color:white">{{shop.ShopNumber}}</option>
					</select>
				</td>
			</tr>
			<tr><td>የተከራይ ስም</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Rentee">
						<option v-for="rentee in rentee"  style="background-color:#00AAAA;color:white">{{rentee.ID}}</option>
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
						<option  style="background-color:#00AAAA;color:white">Square Meter</option>
						<option  style="background-color:#00AAAA;color:white">Time</option>
					</select>
				</td>
				</tr>
			<tr>
				<td>ሁኔታ</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Status">
						<option   style="background-color:#00AAAA;color:white">Rented</option>
						<option   style="background-color:#00AAAA;color:white">Available</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>	የከፈሉት ወራት</td>
				<td><input  v-model="data.Period" type="number" class="form-control" style="background-color:#00AAAA;color:white"  id="Period"/></td></td></tr>
			<tr>
				<td>ኪራያቸው የሚጀምርበት ቀን</td>
				<td><input v-model="data.StartTime" type="date" class="form-control" style="background-color:#00AAAA;color:white"  id="StartTime"/></td></td></tr>
			<tr>
				<td>ኪራያቸው የሚያልቅበት ቀን</td>
				<td><input v-model="data.EndTime" type="date" class="form-control" style="background-color:#00AAAA;color:white"  id="EndTime"/></td></td></tr>
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

</template>
