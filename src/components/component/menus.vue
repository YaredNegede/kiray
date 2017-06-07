<template>
   <nav class="navbar navbar-default" role="navigation">
   <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#example-navbar-collapse"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
      <a class="navbar-brand" href="#">glass.com</a>
   </div>
   <div class="collapse navbar-collapse" id="example-navbar-collapse">
   <ul class="nav navbar-nav">
	   <li><router-link to="/Home">Home</router-link></li>
	   <li><router-link to="/job">Post Job</router-link></li>
	   <li><router-link to="/BrowseJob">Browse Job</router-link></li>
	   <li><router-link to="/BrowseFreelancer">Browse Freelancer</router-link></li>
	   <li>
        <div class="form-group"> <input   @click="alert()"  style="margin:8px;width:400px" type="text" class="form-control" placeholder="Search"> </div>
       </li>
	   <li><router-link to="/SignUp">Sign-Up</router-link></li>
	   <li><router-link to="/Login">Login</router-link></li>
	   
    </ul>
    </div>
    </nav>
</template>

<script>

export default {
  name: 'item',
  methods: {
    alert () {
      alert('Wait for it')
    }
  }
}
</script>
<style scoped>

  glass{
    background-color:#c1c1c1;
  }
</scope>
