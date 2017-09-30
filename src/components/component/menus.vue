
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
	   <li><router-link to="/home"  style="color:white"><b>Home</b></router-link></li>
	   <li><router-link to="/signUp"  style="color:white" v-show="!login"><b>Sign-Up</b></router-link></li>
	   <li><a href="#"  style="color:white" @click="logout" v-show="!login"><b>Logout</b></a>
     <li><router-link to="/addInformation"  style="color:white" v-show="!login"><b>Add Information</b></router-link></li>
     <li><router-link to="/contractDetail"  style="color:white" v-show="!login"><b>View Information</b></router-link></li>
    </ul>
    </div>
	</div>
</template>
