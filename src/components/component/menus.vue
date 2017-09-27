
<script>
import Turbo from 'turbo'

export default {
  name: 'menus',
  components: {Turbo},
  beforeCreate: function () {
    console.log('=============Menu==============')
    console.log(this.$store.getters.getUser)
    this.data = this.$store.getters.getUser
    console.log(this.data)
  },
  methods: {
    logout: function () {
      console.log(this.$store.getters.getUser.authenticated)
      this.$store.state.user.authenticated = false
      this.$router.push('/home')
      console.log(this.$store.getters.getUser.authenticated)
    }
  },
  computed: {
    login () {
      this.$store.getters.getUser.authenticated
    }
  }
}
</script>
<style scoped>
	li{
		color:white;
	}
 </scope>
<template>
<div id="menus">
   <div class="collapse navbar-collapse" id="example-navbar-collapse" name="menus">
   <ul class="nav navbar-nav">
	   <li><router-link to="/home"  style="color:white">Home</router-link></li>
	   <li><router-link to="/signUp"  style="color:white" v-show="!login">Sign-Up</router-link></li>
	   <li><a href="#"  style="color:white" @click="logout" v-show="!login">Logout</a>
    </ul>
    </div>
	</div>
</template>
