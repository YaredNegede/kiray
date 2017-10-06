
<script>
import store from 'store'

export default {
  name: 'addContract',
  props: { show: true },
  components: {store},
  computed: {
    contract: function () {
      var tmp = this.$store.getters.getTemp.ID
      return this.$store.state.data.Contracts.filter(function (Contract) {
        return Contract.ID === tmp
      })[0]
    },
    contracts: function () {
      return this.$store.getters.getContracts
    },
    rentee: function () {
      return this.$store.getters.getServiceRecievers
    },
    shops: function () {
      return this.$store.getters.getProperties
    }
  },
  beforeCreate: function () {
    console.log('~~~~~~~Contract detail~~~~~~~~~')
    console.log(this.$store.getters.getUser)
    if (!this.$store.getters.getUser.authenticated) {
      this.$router.push('login')
    }
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.getters.getContract[0]
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ID': '', 'name': '', 'FatherName': '', 'Magnitude': '', 'Unit': '', 'Status': '', 'Period': '', 'StartTime': '', 'EndTime': '', 'Renter': '', 'Shop': ''} : dt
    console.log(this.data)
    console.log('============================')
  },
  data: function () {
    return {}
  },
  methods: {
    add () {
      console.log('creating contracts')
      console.log('---------------------')
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
      var renteeObj = this.$store.getters.getServiceReciever[0]
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
        console.log(contract)
        this.$store.commit('addContract', contract)
        this.$router.push('/contractDetail')
      } else {
        alert('input error')
        console.log(contract.Shop + '\t' + contract.Rentee + '\t' + contract.StartTime + '\t' + contract.EndTime + '\t' + contract.Magnitude)
      }
    },
    validate (contract) {
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
	
			<tr><td>Shop Number</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white" id="ShopNumber">
						<option v-for="shop in shops"  style="background-color:#00AAAA;color:white">{{shop.ShopNumber}}</option>
					</select>
				</td>
			</tr>
			<tr><td>Renter</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Rentee">
						<option v-for="rentee in rentee"  style="background-color:#00AAAA;color:white">{{rentee.ID}}</option>
					</select>
				</td>
			</tr>
			<tr>
			<td>
					Magnitude
			</td>
					<td>
						<input v-model="data.Magnitude" type="number" class="form-control"   style="background-color:#00AAAA;color:white"  id="Magnitude"/>
					</td>
				</td>
			</tr>
			<tr>
				<td>Unit</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Unit">
						<option  style="background-color:#00AAAA;color:white">Square Meter</option>
						<option  style="background-color:#00AAAA;color:white">Time</option>
					</select>
				</td>
				</tr>
			<tr>
				<td>Status</td>
				<td>
					<select class="form-control" style="background-color:#00AAAA;color:white"  id="Status">
						<option   style="background-color:#00AAAA;color:white">Rented</option>
						<option   style="background-color:#00AAAA;color:white">Available</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>Period</td>
				<td><input  v-model="data.Period" type="number" class="form-control" style="background-color:#00AAAA;color:white"  id="Period"/></td></td></tr>
			<tr>
				<td>Start time</td>
				<td><input v-model="data.StartTime" type="date" class="form-control" style="background-color:#00AAAA;color:white"  id="StartTime"/></td></td></tr>
			<tr>
				<td>End time</td>
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
