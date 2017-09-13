<template >
     <div id="home">
		<div class="col-md-12">
          <div class="jumbotron" style="background-color:#00AAAA;">
            <h2 style="color:white"><b>Companies are getting skilled professionals one click away</b></h2>
			<h2 style="color:white"><b>Professionals are making good money from their home</b></h2>
            
			<p style="color:white">
              Are you looking for skilled professional? click "I want to hire"! 
            </p>
			
			<p style="color:white">
              Are you skilled professional? Click "I want to work"
            </p>
		<div class="row hireWork">

			<div class="col-lg-2"></div>

			<div class="col-lg-5">

				<input type="button" class="btn btn-primary btn-lg" value="I want to hire" v-on:click="hire"/>

			</div>
			<div class="col-lg-4">

				<input type="button" class="btn btn-primary btn-lg" value="I want to work" v-on:click="work"/>

			</div>

		</div>
        </div>
		</div>
   	  </div>
</template>
<script>

export default {
  beforeCreate: function () {},
  name: 'home',
  data: function () {
    return { loggedin: true }
  },
  props: {
    highlight: '',
    detail: '',
    show: true
  },
  components: {},
  methods: {
    hire () {
      if (this.loggedin) {
        this.$router.push('PostJob')
      } else {
        this.$router.push('Login')
      }
    },
    work () {
      if (this.loggedin) {
        this.$router.push('profile')
      } else {
        this.$router.push('Login')
      }
    }
  }
}
</script>

<style scoped>
	.hireWork{
		padding: 100px;;
	}
</style>
