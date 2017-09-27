
<script>
import Turbo from 'turbo'

export default {
  beforeCreate: function () {
    console.log('=============Sign up==============')
    var dt = this.$store.getters.getUser
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ShopNumber': '', 'Floor': '', 'Purpuse': ''} : dt
    console.log(this.data)
  },
  components: {Turbo},
  name: 'userDetail',
  data: function () {
    return {}
  },
  computed: {
    building: function () {
      return {}
    },
    user: function () {
      return {}
    }
  },
  methods: {
    register () {
      console.log('Registering ')
      this.$router.push('/home/login')
      console.log(this.data)
    },
    validate () {}
  }
}
</script>

<style scoped>
	
</scope>

<template>
	<div>
	
		<buildingDetail></buildingDetail>
	
			<div id="SingUp" class="panel panel-default"  style="background-color:#00AAAA">
	
		<div class="panel-heading" style="background-color:#00BBBB;color:white"> Sign Up </div> 

		<div class="panel-body"> 
		
			<div class="row">
				<div class="col-lg-3">
					<label forname="userType"  style="color:white">User Type</label>
				</div>
				<div class="col-lg-6" style="background-color:#00AAAA">
					
					<select class="form-control" placeholder="Your Name" name="userType" style="background-color:#00AAAA;color:white">
						<option v-for="user in user.userType">{{user.userType}}</option>
					</select>
				</div>
			</div>
		
			<div class="row">
				<div class="col-lg-3">
					<label  style="color:white">Name</label>
				</div>
				<div class="col-lg-6" style="background-color:#00AAAA">
					<input v-model="user.name" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">
					<label  style="color:white">Phone Number</label>
				</div>
				<div class=" col-lg-6">
					<input  v-model="user.tel"  type="phone"  class="form-control" placeholder="Phone number"style="background-color:#00AAAA;color:white"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">
					<label  style="color:white">Password</label>
				</div>
				<div class=" col-lg-6">
					<input v-model="user.password" type="password"  class="form-control" placeholder="Password"  style="background-color:#00AAAA;color:white"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">
					<label  style="color:white">Repeat Password</label>
				</div>
				<div class=" col-lg-6">
					<input v-model="user.password2" type="password"  class="form-control" placeholder="Repeat Password"   style="background-color:#00AAAA;color:white"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">

				</div>

				<div class=" col-lg-6">
					
					<button class="btn btn-primary pull-right" @click="register" style="background-color:#00AAAA">Register</button>

				</div>
			</div>
		
	</div>
	</div>
	
	</div>
			
</template>
