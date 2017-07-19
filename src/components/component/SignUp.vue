<template>
<div class="frameStyle">
	<div class="container">

	<div class="row">
		<div class=" col-lg-6">
			<label>Email</label>
	    </div>
		<div class=" col-lg-6">
			<input type="email"  class="form-control" placeholder="email@compony.com"/>
	    </div>
	</div>

		<div class="row">
  		<div class=" col-lg-6">
  			<label>Phone Number</label>
  	    </div>
  		<div class=" col-lg-6">
  			<input type="phone"  class="form-control" placeholder="+215 091271312"/>
  	    </div>
  	</div>

  			<div class="row">
      		<div class=" col-lg-6">
      			<label>Profession</label>
      	    </div>
      		<div class=" col-lg-6">
      			<select name="profesions"  class="form-control">
      			  <option>Electrical Engineer</option>
      			  <option>Architect</option>
      			  <option>Civil Engineer</option>
      			  <option>Software Engineer</option>
      			</select>
      	    </div>
      	</div>

	<div class="row">
		<div class=" col-lg-6">
			<label>Username</label>
	    </div>
		<div class=" col-lg-6">
			<input type="text"  class="form-control" placeholder="Yared Negede"/>
	    </div>
	</div>
	<div class="row">
		<div class=" col-lg-6">
			<label>Password</label>
	    </div>
		<div class=" col-lg-6">
			<input type="password"  class="form-control" placeholder="Password"/>
	    </div>
	</div>
	<div class="row">
		<div class=" col-lg-6">
			<label>Repeat Password</label>
	    </div>
		<div class=" col-lg-6">
			<input type="password"  class="form-control" placeholder="Repeat Password"/>
	    </div>
	</div>

	<div class="row">
		<div class=" col-lg-2 ">
			<input type="button" class="btn btn-primary" name="createAccount" value="Create Account"/>
		</div>
	</div>
 </div>
</div>
</template>

<script>

export default {
  name: 'SingUp',
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
