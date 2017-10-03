<script>
import Turbo from 'turbo'
import firebaseApp from 'firebaseApp'

export default {
  beforeCreate: function () {},
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
  components: {Turbo, firebaseApp},
  methods: {
    login () {
      console.log('~~~~~~~~~~~~~~~~~~~~~~~login~~~~~~~~~~~~~~~~~~~~~~~~~~`')
      var userData = {}
      userData.username = document.getElementById('username').value
      userData.password = document.getElementById('password').value
      var ret = firebaseApp.do.login(userData)
      console.log(ret)
      if (ret) {
        this.$router.push('/payementDetail')
      }
    }
  }
}
</script>

<style scoped>
</scope>
<template>

<div  class="row">
	
	<div class="col-lg-10">
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
