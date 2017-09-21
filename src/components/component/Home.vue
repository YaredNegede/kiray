<script>
import Turbo from 'turbo'

export default {
  beforeCreate: function () {},
  name: 'home',
  data: function () {
    return {loggedin: false, show: true}
  },
  components: {Turbo},
  computed: {
    name () {
      return (typeof this.data.Name === 'undefined' || this.data.Name === null) ? '' : this.data.Name
    },
    fatherName () {
      return (typeof this.data.FatherName === 'undefined' || this.data.FatherName === null) ? '' : this.data.FatherName
    },
    id () {
      return (typeof this.data.ID === 'undefined' || this.data.ID === null) ? '' : this.data.ID
    },
    IDType () {
      return (typeof this.data.IDType === 'undefined' || this.data.IDType === null) ? '' : this.data.IDType
    },
    phoneNumber () {
      return (typeof this.data.PhoneNumber === 'undefined' || this.data.PhoneNumber === null) ? '' : this.data.PhoneNumber
    },
    shopNumber () {
      return (typeof this.data.ShopNumber === 'undefined' || this.data.ShopNumber === null) ? '' : this.data.ShopNumber
    }
  },
  methods: {
    addInfo () {
      console.log(this.$store)
      if (this.$store.getters.getUser.authenticated) {
        this.show = false
        this.$router.push('/addInformation')
      } else {
        this.$store.getters.getSurf.rediretTo = '/addInformation'
        this.$router.push('/home/login')
      }
    },
    viewInfo () {
      if (this.loggedin) {
        this.show = false
        this.$router.push('/contractDetail')
      } else {
        this.$store.getters.getSurf.rediretTo = '/contractDetail'
        this.$router.push('/home/login')
      }
    }
  }
}
</script>

<style scoped>
	.home{
		padding: 100px;
		color:white;
	}
	h2{
		color:white
	}
	p{
		color:white
	}
	input{
		background-color:#00AAAA
	}
</style>
<template >
     <div id="home">
		 <div class="col-md-1"></div>
		<div class="col-md-10">
          <div class="jumbotron" style="background-color:#00AAAA;">
            <h2 ><b>Companies are managing their building at realtime</b></h2>
			<h2 ><b>Getting real time update on their property</b></h2>
            
			<p>
              Are you looking for Managing your building? click "Add Information"
            </p>
			
			<p style="color:white">
              Are you looking whats up with your client? Click "View Information"
      </p>
			  <p>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-6">
              					<router-view class="row">

				            	</router-view>
            </div>
            <div class="col-md-1"></div>
        </div>

			</p>
	
  		 <div class="col-md-1"></div>
  
  	<div class="row home" v-show = "show">

			<div class="col-lg-5">

				<input type="button" class="btn btn-primary btn-lg" value="Add Information" v-on:click="addInfo"/>

			</div>
			
			<div class="col-lg-4">

				<input type="button" class="btn btn-primary btn-lg" value="View Information" v-on:click="viewInfo"/>

			</div>
			
		</div>
			  
        </div>
			
		</div>
		 
   	  </div>

</template>
