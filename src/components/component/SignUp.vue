
<script>
import buildingDetail from './buildingDetail.vue'
import userDetail from './userDetail.vue'

export default {
  beforeCreate: function () {
    console.log('=============Sign up==============')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    this.data = {'ShopNumber': '', 'Floor': '', 'Purpuse': ''}
  },
  components: { buildingDetail, userDetail },
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
