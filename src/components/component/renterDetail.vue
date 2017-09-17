
<template>
<div class="panel panel-default" style="background-color:#00AAAA">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Renter Detail</div> 
		<div style="padding:30px">
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Shop Number</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<select type="text"  class="form-control " placeholder="Building" v-model="name" style="background-color:#00AAAA;color:white">
								<option>SNAP-312412</option>
								<option>SNAP-321312</option>
								<option>SNAP-636334</option>
							</select>
						</div>
					</div>
	
			
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Name</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input type="text"  class="form-control " placeholder="Your Name" v-model="name" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Father Name</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input type="text"  class="form-control " placeholder="Your Name" v-model="name" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">ID number</label>
						</div>
						<div class=" col-lg-6">
							<input type="email"  class="form-control" placeholder="email@compony.com" v-model="email" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">ID type</label>
						</div>
						<div class=" col-lg-6">
							<input type="phone"  class="form-control" placeholder="+215 091271312" v-model="tel" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Phone Number</label>
						</div>
						<div class=" col-lg-6">
							<input type="tel"  class="form-control" placeholder="+215 091271312" v-model="tel" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
		
				</div>
	</div>

</template>

<script>

export default {
  name: 'renterDetail',
  props: { show: true },
  components: {},
  data: function () {
    return {}
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
