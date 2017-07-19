<template>
<div spellcheck="true" style="width:350px">
	<div class="container">
		 <div class="row">
			 <div class=" col-lg-6 ">
				 <label for="">Username</label>
				<input name="username" type="text"  placeholder="Username"  class="form-control"/>
			 </div>
		</div>
		<div class="row">
				 <div class=" col-lg-6">
				 <label for="password">Password</label>
				 <input name="password" type="password"  placeholder="Password"  class="form-control"/>
			</div>
		</div>
		<div class="row">
			<div class=" col-lg-6" style="padding:15px">
				 <input name="login" type="button"  value="login" class="btn btn-primary"/>
			</div>
		</div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Login',
  methods: {}
}
</script>
<style scoped>

  h4{
    background-color:#c1c1c1;
    color:white;
    padding:5px;
  }
	inputStyle{
		margin: none;
		padding: 3px;
		margin: 3px;
	}
</scope>
