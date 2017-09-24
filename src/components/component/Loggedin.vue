
<script>
import Turbo from 'turbo'

export default {
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
  components: {Turbo},
  methods: {
    login () {
      console.log('=======Login=========')
      if (this.valid()) {
        var usr = this.$store.getters.getUser.authenticated
        this.$store.state.user = true
        console.log(usr)
        this.$router.push(this.$store.getters.getSurf.rediretTo)
      } else {
        console.log('login error')
      }
    },
    valid () {
      console.log('validate')
      return true
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
				<input name="username" v-model="user.name" type="text"  placeholder="Phone Number or email"  class="form-control inputStyle"/>
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
