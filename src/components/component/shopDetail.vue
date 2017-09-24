
<script>
import Turbo from 'turbo'

export default {
  name: 'shopDetail',
  props: { show: true },
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.getters.getProperty[0]
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ShopNumber': '', 'Floor': '', 'Purpuse': ''} : dt
    console.log(this.data)
  },
  components: {Turbo},
  data: function () {
    return { 'ShopNumber': '', 'Floor': '', 'Purpuse': '' }
  },
  methods: {
    add: function () {
      console.log(this.data)
      console.log(Turbo.store.commit('updateProperty'))
      this.$store.state.data.Properties.push(this.data)
    }
  }
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
	<div class="panel-heading postJob"  style="background-color:#00BBBB;color:white">Shop Detail</div> 
		<div style="padding:30px">

					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Shop Number</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input v-model="data.ShopNumber" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Floor </label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input v-model="data.Floor" type="text"  class="form-control " placeholder="Your Name"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">Purpuse</label>
						</div>
						<div class=" col-lg-9">
							<input v-model="data.Purpuse" type="text"  class="form-control" placeholder="Enter purpuse"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
							
								<div class=" col-lg-12">

									<button @click="add" class="btn btn-primary pull-right"  style="background-color:#00AAAA">+</button>

								</div>
							</div>	
		
				</div>


	</div>
</template>
