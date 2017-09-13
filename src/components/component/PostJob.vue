<template name="PostJob">
	<div class="panel panel-default" style="background-color:#00AAAA">
	<div class="panel-heading postJob">Post Job</div> 
		<div style="padding:30px">

					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Name</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input type="text"  class="form-control " placeholder="Your Name" v-model="name" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Email</label>
						</div>
						<div class=" col-lg-6">
							<input type="email"  class="form-control" placeholder="email@compony.com" v-model="email" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Phone Number</label>
						</div>
						<div class=" col-lg-6">
							<input type="phone"  class="form-control" placeholder="+215 091271312" v-model="tel" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Password</label>
						</div>
						<div class=" col-lg-6">
							<input type="password"  class="form-control" placeholder="Password" v-model="password" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Repeat Password</label>
						</div>
						<div class=" col-lg-6">
							<input type="password"  class="form-control" placeholder="Repeat Password"  v-model="password2" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">

						</div>

						<div class=" col-lg-6">

							<button class="btn btn-primary pull-right" @click="register" style="background-color:#00AAAA">Post</button>

						</div>
					</div>
		
		
					<table class="table" style="color:white"> 
						<th>Name</th><th>Catagory</th>
						<tr><td>Yare Negede</td><td>UI</td></tr>
						<tr><td>Y Negede</td><td>Backend</td></tr>
						<tr><td>Yare Negede</td><td>UI</td></tr>
						<tr><td>Y Negede</td><td>Backend</td></tr>
						<tr><td>Yare Negede</td><td>UI</td></tr>
						<tr><td>Y Negede</td><td>Backend</td></tr>
						<tr><td>Yare Negede</td><td>UI</td></tr>
						<tr><td>Y Negede</td><td>Backend</td></tr>
					</table> 
			
				</div>
	</div>

</template>

<script>

export default {
  name: 'PostJob',
  props: { show: true },
  data: function () {
    return {
      loggedin: true,
      name: '',
      email: '',
      tel: '',
      password: '',
      password2: '',
      userType: ['Employer', 'Employee']
    }
  },
  methods: {
    register () {
      if (this.loggedin) {
        this.$router.push('profile')
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
