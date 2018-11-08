<script>

export default {
  name: 'login',
  computed: {
    username () {
      return (typeof this.data.Name === 'undefined' || this.data.Name === null) ? '' : this.data.Name
    },
    password () {
      return (typeof this.data.FatherName === 'undefined' || this.data.FatherName === null) ? '' : this.data.FatherName
    }
  },
  data: function () {
    return {
      user: this.$store.getters.getUser
    }
  },
  components: {},
  methods: {
    login () {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~login~~~~~~~~~~~~~~~~~~~~~~~~~~`')
      var userData = {}
      userData.username = document.getElementById('username').value
      userData.password = document.getElementById('password').value
      this.$store.dispatch('login', userData)
    }
  }
}
</script>

<style scoped>
</style>


<template name="login">

<div >
	
  <div class="col-lg-4"></div>
	<div class="col-lg-4" >
   
   <center><h1><b>ባለሶር ሕንጻ ኪራይ</b></h1></center>

		  <div class="row">
			  	 <label for="username" style="color:white">Username</label>
	    			<input id="username" v-model="user.name" type="text"  placeholder="Phone Number or email"  class="form-control inputStyle"/>
		  </div>

		<div class="row">
			    <label for="password"  style="color:white">Password</label>
			    <input id="password" v-model="user.password" type="password"  placeholder="Password"  class="form-control inputStyle"/>
		</div>

		<div class="row" style="padding:15px">
			  <input name="login" type="button"  value="login" class="btn btn-primary" @click="login" style="width:100%"/>
		</div>

	</div>	


</template>
