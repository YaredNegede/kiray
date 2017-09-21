<template>

	<div class="panel panel-default" style="background-color:#00AAAA">
	<div class="panel-heading " style="background-color:#00BBBB;color:white">Building Information</div> 
		<div style="padding:30px">

					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Building Name</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<div class="row">
								<div class="col-lg-11">
										<select type="text"  class="form-control " placeholder="Building"  style="background-color:#00AAAA;color:white">
											<option>SNAP 1</option>
											<option>SNAP 2</option>
											<option>SNAP 3</option>
										</select>
								</div>
								<div class="col-lg-1">
									<a style="color:white" href="#/addContract"><span class="badge">+</span></a>
								</div>
								
							</div>
							
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Address</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Address 2</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

		
		
				</div>
	</div>

</template>

<script>

export default {
  name: 'buildingDetail',
  props: { show: true },
  data: function () {
    return { 'tekeray': [1, 2, 3, 4, 5, 6, 8, 9, 10] }
  },
  methods: {
    register () {
      if (this.loggedin) {
        this.$router.push('contractDetail')
      } else {
        this.$router.push('Login')
      }
    },
    validate () {
      return this.email && this.name && this.tel && this.password && this.password2
    }
  }
}
</script>
<style scoped>
</scope>
