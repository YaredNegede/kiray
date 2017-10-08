
<script>
import Turbo from 'turbo'

export default {
  name: 'shopDetails',
  props: { show: true },
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.state.data.Properties
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ShopNumber': '', 'Floor': '', 'Purpuse': ''} : dt
    console.log(this.data)
  },
  components: {Turbo},
  data: function () {
    return { 'ShopNumber': '', 'Floor': '', 'Purpuse': '' }
  },
  methods: {}
}
</script>
<style scoped>

.them{
  background-color:#00BBBB;
  color:white
}
</scope>
	
<template>
  <div id= "shopDetail" class="panel panel-default them" style="background-color:#00AAAA">
	<div class="panel-heading postJob"  style="background-color:#00BBBB;color:white">Shops</div> 
		<div style="padding:30px">

				<div class="row" style="color:white">
						<div class=" col-lg-12">
							<table class="table">
							<th>ShopNumber</th> <th>Floor</th> <th>Purpuse</th>
                  <tr v-for="shop in data">
                      <td>{{shop.ShopNumber}}</td> <td>{{shop.Floor}}</td><td>{{shop.Purpuse}}</td><td><a href="#"> X </a>
                  </tr>
							</table>
					</div>	
			 	</div>


	</div>
</template>
