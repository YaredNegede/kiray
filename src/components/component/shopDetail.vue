<template name="shopDetail">
<div class="panel panel-default" style="background-color:#00AAAA">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Shop Detail</div> 
		<div style="padding:30px">


					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Building</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<select type="text"  class="form-control " placeholder="Building" v-model="name" style="background-color:#00AAAA;color:white">
								<option>SNAP</option>
								<option>SNAP</option>
								<option>SNAP</option>
							</select>
						</div>
					</div>
			
			
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Shop Number</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input type="text"  class="form-control " placeholder="Your Name" v-model="name" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Floor </label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input type="text"  class="form-control " placeholder="Your Name" v-model="name" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Purpuse</label>
						</div>
						<div class=" col-lg-6">
							<input type="email"  class="form-control" placeholder="Enter purpuse" v-model="email" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

		
				</div>
	</div>
</template>

<script>

export default {
  name: 'shopDetail',
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
