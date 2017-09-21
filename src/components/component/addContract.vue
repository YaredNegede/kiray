
<script>
import Turbo from 'turbo'

export default {
  name: 'addContract',
  props: { show: true },
  components: {Turbo},
  computed: {
    contract: function () {
      var tmp = this.$store.getters.getTemp.ID
      return this.$store.state.data.Contracts.filter(function (Contract) {
        return Contract.ID === tmp
      })[0]
    }
  },
  beforeCreate: function () {
    console.log('~~~~~~~Contract detail~~~~~~~~~')
    var dt = this.$store.getters.getContracts[0]
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
      Turbo.register
      this.$router.push('/contractDetail')
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
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Contract Detail</div> 
		<div style="padding:30px">
	
		<table class="table" style="color:white"> 
	
			<tr><td>Shop Number</td>
				<td>
						<input v-model="data.Shop" type="text" class="form-control"   style="background-color:#00AAAA;color:white"/>
				</td>
			</tr>
			<tr><td>Renter</td>
				<td>
					<input v-model="data.Renter" type="text" class="form-control"   style="background-color:#00AAAA;color:white"/>
				</td>
			</tr>
			<tr>
			<td>
					Magnitude
			</td>
					<td>
						<input v-model="data.Magnitude" type="text" class="form-control"   style="background-color:#00AAAA;color:white"/>
					</td>
				</td>
			</tr>
			<tr>
				<td>Unit</td>
				<td><input v-model="data.Unit" type="text" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr>
				<td>Status</td>
				<td>
					<select type="text"  class="form-control " placeholder="Building"  style="background-color:#00AAAA;color:white">
						<option>New</option>
						<option>Free</option>
						<option>Rented</option>
					</select>
				</td>
			</tr>
			<tr>
				<td>Period</td>
				<td><input  v-model="data.Period" type="text" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr>
				<td>Start time</td>
				<td><input v-model="data.StartTime" type="date" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr>
				<td>End time</td>
				<td><input v-model="data.EndTime" type="date" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
		</table> 
		<div class="row">
				<div class=" col-lg-6">

				</div>

				<div class=" col-lg-6">

					<button class="btn btn-primary pull-right" @click="add" style="background-color:#00AAAA">Save</button>

				</div>
			</div>
	</div>
   </div>


</template>
