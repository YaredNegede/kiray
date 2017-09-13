<template>
   <div class="collapse navbar-collapse" id="example-navbar-collapse" name="menus">
   <ul class="nav navbar-nav">
	   <li><router-link to="/Home"  style="color:white">Home</router-link></li>
	   <li><router-link to="/PostJob" style="color:white">Post Job</router-link></li>
	   <li><router-link to="/BrowseJob" style="color:white">Browse Job</router-link></li>
	   <li><router-link to="/BrowseFreelancer" style="color:white">Browse Freelancer</router-link></li>
	   <li><router-link to="/SignUp" style="color:white">Sign-Up</router-link></li>
    </ul>
    </div>
</template>

<script>

export default {
  name: 'menus',
  props: { show: true },
  methods: {
    alert () {
      alert('Wait for it')
    }
  }
}
</script>
<style scoped>
	li{
		color:white;
	}
 </scope>
