
<script>
import Turbo from 'turbo'
import buildingDetail from './buildingDetail.vue'
import userDetail from './userDetail.vue'

export default {
  beforeCreate: function () {
    console.log('=============Sign up==============')
    var dt = this.$store.getters.getUser
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ShopNumber': '', 'Floor': '', 'Purpuse': ''} : dt
    console.log(this.data)
  },
  components: {Turbo, buildingDetail, userDetail},
  name: 'SingUp',
  data: function () {
    return {}
  },
  computed: {
    building: function () {
      return {}
    },
    user: function () {
      return {}
    }
  },
  methods: {
    register () {
      console.log('Registering ')
      this.$router.push('/home/login')
      console.log(this.data)
    },
    validate () {}
  }
}
</script>

<style scoped>
	
</scope>

<template>
	<div>
	
		<buildingDetail></buildingDetail>
	
	
			
</template>
