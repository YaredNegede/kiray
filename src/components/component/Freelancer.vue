<template>
	
	<div class="panel panel-default">
	
		<div class="panel-heading"> Panel heading without title </div> 

		<div class="panel-body"> 
		
			<div class="row">
				<div class="col-lg-3">
					<label forname="userType"  style="color:gray">User Type</label>
				</div>
				<div class="col-lg-6">
					
					<select class="form-control" placeholder="Your Name" name="userType">
						<option v-for="userType in userType">{{userType}}</option>
					</select>
				</div>
			</div>
		
			<div class="row">
				<div class="col-lg-3">
					<label  style="color:gray">Name</label>
				</div>
				<div class="col-lg-6">
					<input type="text"  class="form-control " placeholder="Your Name" v-model="name"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">
					<label  style="color:gray">Email</label>
				</div>
				<div class=" col-lg-6">
					<input type="email"  class="form-control" placeholder="email@compony.com" v-model="email"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">
					<label  style="color:gray">Phone Number</label>
				</div>
				<div class=" col-lg-6">
					<input type="phone"  class="form-control" placeholder="+215 091271312" v-model="tel"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">
					<label  style="color:gray">Password</label>
				</div>
				<div class=" col-lg-6">
					<input type="password"  class="form-control" placeholder="Password" v-model="password"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">
					<label  style="color:gray">Repeat Password</label>
				</div>
				<div class=" col-lg-6">
					<input type="password"  class="form-control" placeholder="Repeat Password"  v-model="password2"/>
				</div>
			</div>

			<div class="row">
				<div class=" col-lg-3">

				</div>

				<div class=" col-lg-6">
					
					<button class="btn btn-primary pull-right" @click="register">Register</button>

				</div>
			</div>
		
	</div>

	</div>
	
</template>

<script>

export default {
  name: 'FreeLancer',
  props: { skills: [] },
  methods: {}
}
</script>
<style scoped>
  frameStyle{
		width: 300px
	}
  h4{
    background-color:#c1c1c1;
    color:white;
    padding:5px;
  }
</scope>
