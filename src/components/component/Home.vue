<template >
     <div id="home">
		 <div class="col-md-2"></div>
		<div class="col-md-10">
          <div class="jumbotron" style="background-color:#00AAAA;">
            <h2 style="color:white"><b>Companies are managing their building at realtime</b></h2>
			<h2 style="color:white"><b>Getting real time update on their property</b></h2>
            
			<p style="color:white">
              Are you looking for Managing your building? click "Add Information"
            </p>
			
			<p style="color:white">
              Are you looking whats up with your client? Click "View Information"
            </p>
		<div class="row hireWork">

			<div class="col-lg-5">

				<input type="button" class="btn btn-primary btn-lg" value="Add Information" v-on:click="hire" style="background-color:#00AAAA"/>

			</div>
			
			<div class="col-lg-4">

				<input type="button" class="btn btn-primary btn-lg" value="View Information" v-on:click="work" style="background-color:#00AAAA"/>

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
        this.$router.push('addInformation')
      } else {
        this.$router.push('Login')
      }
    },
    work () {
      if (this.loggedin) {
        this.$router.push('contractDetail')
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
