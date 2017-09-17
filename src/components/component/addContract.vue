<template>

  <div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Contract Detail</div> 
		<div style="padding:30px">
	
		<table class="table" style="color:white"> 
			<tr><td>Building</td>
				<td>
					<select type="text"  class="form-control " placeholder="Building" v-model="name" style="background-color:#00AAAA;color:white">
						<option>SNAP 1</option>
						<option>SNAP 2</option>
						<option>SNAP 3</option>
					</select>
				</td>
			</tr>
			<tr><td>Shop Number</td>
				<td>
					<select type="text"  class="form-control " placeholder="Building" v-model="name" style="background-color:#00AAAA;color:white">
						<option>SNAP-321231</option>
						<option>SNAP-321322</option>
						<option>SNAP-424233</option>
					</select>
				</td>
			</tr>
			<tr><td>Renter</td>
				<td>
					<select type="text"  class="form-control " placeholder="Building" v-model="name" style="background-color:#00AAAA;color:white">
						<option>Yared</option>
						<option>Kassahun</option>
					</select>
				</td>
			</tr>
			<tr><td>Magnitude</td><td><input type="text" class="form-control"   style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr><td>Unit</td><td><input type="text" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr><td>Status</td>
				<td>
					<select type="text"  class="form-control " placeholder="Building" v-model="name" style="background-color:#00AAAA;color:white">
						<option>New</option>
						<option>Free</option>
						<option>Rented</option>
					</select>
				</td>
			</tr>
			<tr><td>Period</td><td><input type="text" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr><td>Start time</td><td><input type="date" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
			<tr><td>End time</td><td><input type="date" class="form-control" style="background-color:#00AAAA;color:white"/></td></td></tr>
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

<script>

export default {
  name: 'addContract',
  props: { show: true },
  components: {},
  data: function () {
    return {'tekeray': [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15]}
  },
  methods: {
    add () {
      this.$router.push('contractDetail')
    }
  }
}
</script>
<style scoped>

</scope>
