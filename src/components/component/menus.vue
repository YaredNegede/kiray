<template>
<div id="menus">
   <div class="collapse navbar-collapse" id="example-navbar-collapse" name="menus">
   <ul class="nav navbar-nav">
	   <li><router-link to="/Home"  style="color:white">Home</router-link></li>
	   <li><router-link to="/SignUp" style="color:white">Sign-Up</router-link></li>
	   <li><a href="#"  style="color:white" @click="logout">Logout</a>
    </ul>
    </div>
	</div>
</template>

<script>

export default {
  name: 'menus',
  props: { show: true },
  methods: {
    logout: function () {
      this.$router.push('Home')
      alert('log out')
    }
  }
}
</script>
<style scoped>
	li{
		color:white;
	}
 </scope>
