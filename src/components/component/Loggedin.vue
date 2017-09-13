<template>

<div  class="row">
	
	<div class="col-lg-10">
		  <div class="row">
				 <label for="username" style="color:white">Username</label>
				<input name="username" v-model="user.username" type="text"  placeholder="Phone Number or email"  class="form-control inputStyle"/>
		  </div>

		<div class="row">
			 <label for="password"  style="color:white">Password</label>
			 <input name="password" v-model="user.password" type="password"  placeholder="Password"  class="form-control inputStyle"/>
		</div>

		<div class="row" style="padding:15px">
			<input name="login" type="button"  value="login" class="btn btn-primary" @click="login"/>
			<router-link to="/SignUp" class="btn btn-primary">Register</router-link  >
		</div>

	</div>	

</template>

<script>

import router from '../../router'
import axios from 'axios'

export default {
  name: 'Login',
  components: {axios, router},
  data: function () {
    return {
      user: {username: 'Phone Number or email', password: 'Password'},
      userdata: ''
    }
  },
  methods: {
    login () {
      if (this.validate()) {
        this.userdata = axios.get('/')
        this.$router.push('profile')
      }
    },
    validate () {
      return true
    }
  }
}
</script>

<style scoped>
</scope>
