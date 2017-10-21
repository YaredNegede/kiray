
<script>

export default {
  name: 'menus',
  components: {},
  beforeCreate: function () {
    console.log('=============Menu==============')
    console.log(this.$store.getters.getUser)
    this.data = this.$store.getters.getUser
  },
  methods: {
    logout: function () {
      this.$store.state.user.authenticated = false
      this.$store.dispatch('logOut')
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
	   <li><router-link to="/home"  style="color:white"><h3><b>ወደ መጀመሪያ</b></h3></router-link></li>
     <li><router-link to="/addInformation"  style="color:white" v-show="!login"><h3><b>ዳታ ማስገቢያ</b></h3></router-link></li>
     <li><router-link to="/addContract"  style="color:white" v-show="!login"><h3><b>ኮንትራት</b></h3></router-link></li>
     <li><router-link to="/payementDetail"  style="color:white" v-show="!login"><h3><b>ክፍያ</b></h3></router-link></li>

     <li><router-link to="/shopDetails"  style="color:white" v-show="!login"><h3><b>ኪራይ</b></h3></router-link></li>     
	   <li><a href="#"  style="color:white" @click="logout" v-show="!login"><h3><b>ውጣ</b></h3></a>
    </ul>
    </div>
	</div>
</template>
