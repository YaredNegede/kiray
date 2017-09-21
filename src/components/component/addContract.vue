
<script>

export default {
  name: 'addContract',
  props: { show: true },
  components: {},
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
    console.log(this.$store.getters.getTemp.ID)
    this.data = this.$store.state.data
  },
  data: function () {
    return {}
  },
  methods: {
    add () {
      this.$router.push('/contractDetail')
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
	
		<table class="table" style="color:white"> 
	
			<tr><td>Shop Number</td>
				<td>
					<select type="text"  class="form-control " placeholder="Building"  style="background-color:#00AAAA;color:white">
						<option v-for="shop in data.Properties">{{shop.ShopNumber}}</option>
					</select>
				</td>
			</tr>
			<tr><td>Renter</td>
				<td>
					<select type="text"  class="form-control " placeholder="Building"  style="background-color:#00AAAA;color:white">
						<option v-for="rentee in data.ServiceRecievers">{{rentee.Name}}</option>
					</select>
				</td>
			</tr>
			<tr>
			<td>
					Magnitude
			</td>
					<td>
						<input v-model="contract.Magnitude" type="text" class="form-control"   style="background-color:#00AAAA;color:white"/>
					</td>
				</td>
			</tr>
			<tr>
				<td>Unit</td>
				<td><input v-model="contract.Unit" type="text" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
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
				<td><input  v-model="contract.Period" type="text" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr>
				<td>Start time</td>
				<td><input v-model="contract.StartTime" type="date" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr>
				<td>End time</td>
				<td><input v-model="contract.EndTime" type="date" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
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
