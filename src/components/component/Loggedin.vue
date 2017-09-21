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
		</div>

	</div>	

</template>

<script>

import axios from 'axios'

export default {
  components: {axios},
  data: function () {
    return {
      user: {'username': '', 'password': ''},
      userdata: ''
    }
  },
  methods: {
    login () {
      console.log(this.$store)
      if (this.valid()) {
        if (this.authenticate()) {
          this.getUserData()
          this.$router.push(this.$store.getters.getSurf.rediretTo)
        }
      }
    },
    valid () {
      return true
    },
    authenticate () {
//      this.sendRequest()
      return true
    },
    getUserData () {
//      this.sendRequest()
    },
    sendRequest (requestData) {
      this.userdata = axios.post('/').then(function (response) {
        console.log(response)
        console.log(this.$store.user.authenticated)
        this.$store.user.authenticated = true
        console.log(this.$store.user.authenticated)
      })
      return true
    }
  }
}
</script>

<style scoped>
</scope>
