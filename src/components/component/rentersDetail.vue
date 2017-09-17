<template name="rentersDetail">

	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
	
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Renter Detail</div> 
		<div style="padding:30px">

					<table class="table" style="color:white" v-for="tekeray in tekeray"> 
						
							<tr><td>NO</td><td>{{tekeray}}{{tekeray}}</td></tr>
							<tr><td>Name</td><td>Yared</td></tr>
							<tr><td>Father Name</td><td>Negede</td></tr>
							<tr><td>Identification Number</td><td>12312</td></tr>
							<tr><td>Identification type</td><td>Passport</td></tr>
						
					</table> 
			
				</div>
	</div>


</template>

<script>

export default {
  name: 'rentersDetail',
  props: { show: true },
  components: {},
  data: function () {
    return {'tekeray': [1, 2, 3, 4, 5, 6, 8, 9, 10]}
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
