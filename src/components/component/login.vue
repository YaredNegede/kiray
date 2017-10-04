<script>
import Turbo from 'turbo'
import firebaseApp from 'firebaseApp'
import router from '../../router'

export default {
  name: 'login',
  beforeCreate: function () {
    console.log('-------------login form loaded------------------')
  },
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
  components: {Turbo, firebaseApp, router},
  methods: {
    login () {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~login~~~~~~~~~~~~~~~~~~~~~~~~~~`')
      var userData = {}
      var loginRouter = this.$router
      userData.username = document.getElementById('username').value
      userData.password = document.getElementById('password').value
      var ret = firebaseApp.do.login(userData)
      ret.then(function (response) {
        console.log(response.email)
        loginRouter.push('/contractDetail')
      }).catch(
            function (error) {
              console.log(this.$router)
              loginRouter.push('/login')
              var errorCode = error.code
              var errorMessage = error.message
              if (errorCode === 'auth/invalid-custom-token') {
                console.log(errorCode)
                console.log(errorMessage)
              } else {
                alert(error.message)
              }
            })
    }
  }
}
</script>

<style scoped>
</scope>


<template>

<div  class="row" id="login">
	
  <div class="col-lg-2"></div>
	<div class="col-lg-4">
   
   <center><h1><b>ባላሱር ሕንጻ</b></h1></center>

		  <div class="row">
			  	 <label for="username" style="color:white">Username</label>
	    			<input id="username" v-model="user.name" type="text"  placeholder="Phone Number or email"  class="form-control inputStyle"/>
		  </div>

		<div class="row">
			    <label for="password"  style="color:white">Password</label>
			    <input id="password" v-model="user.password" type="password"  placeholder="Password"  class="form-control inputStyle"/>
		</div>

		<div class="row" style="padding:15px">
			  <input name="login" type="button"  value="login" class="btn btn-primary" @click="login"/>
		</div>

	</div>	

</template>
