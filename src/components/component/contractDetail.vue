<template>

  <div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Contract Detail</div> 
		<div style="padding:30px">
			<a style="color:white" href="#/rentersDetail"> Rent time remaining 1 month <span class="badge">50</span></a>
			<a style="color:white" href="#/rentersDetail"> Unpaid rent <span class="badge">20</span></a>
			<a style="color:white" href="#/addContract"> Create Contract<span class="badge">+</span></a>
	<hr>
		<table class="table" style="color:white"> 
			<th>No</th><th>Name</th><th>Father Name</th><th>Magnitude</th><th>Unit</th><th>Status</th><th>Period</th><th>Start time</th><th>End time</th>
			<tr v-for="tekeray in tekeray">{{tekeray}}<td>Yared</td><td>Negede</td><td>{{tekeray * 100}}</td><td>Square Meter</td><td>Paid</td><td>{{tekeray}} Month</td><td>Sep {{tekeray}} ,2017</td><td>Dec {{tekeray}} ,2017</td><td><a href="#/renterDetail">Renter Datail</a></td>
			<td><a href="#/shopDetail">Shop Datail</a></td>
			<td><a href="#/addContract">Edit Datail</a></td>
			</tr>
		</table> 
			
	</div>
   </div>


</template>

<script>

export default {
  name: 'contractDetail',
  props: { show: true },
  components: {},
  data: function () {
    return {'tekeray': [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15]}
  },
  methods: {
    registerProfile () {
      console.log(this.skills)
    }
  }
}
</script>
<style scoped>

</scope>
