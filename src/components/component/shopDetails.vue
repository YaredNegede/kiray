
<script>

export default {
  name: 'shopDetails',
  props: { show: true },
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.state.data.Property
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ShopNumber': '', 'Floor': '', 'Purpuse': ''} : dt
    console.log(this.data)
  },
  components: {},
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
	<div class="panel-heading postJob"  style="background-color:#00BBBB;color:white">ሱቅ</div> 
		<div style="padding:30px">

				<div class="row" style="color:white">
						<div class=" col-lg-12">
							<table class="table">
							<th>የሱቅ ቁጥር</th>
              <th>ፍሎር</th>
              <th>ስፋት</th>

                  <tr v-for="shop in data">
                      <td>{{shop.ShopNumber}}</td> <td>{{shop.Floor}}</td><td>{{shop.Purpuse}}</td><td><a href="#"> X </a>
                  </tr>
							</table>
					</div>	
			 	</div>


	</div>
</template>
