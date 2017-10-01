
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
      if (this.validate()) {
        console.log(this.data)
        Turbo.store.commit('updateProperties', this.data)
        this.data = { 'ShopNumber': '', 'Floor': '', 'Purpuse': '' }
      } else {
        alert('invalid input')
      }
    },
    validate: function () {
      console.log(this.data.Name !== '')
      return ((this.data.ShopNumber !== '') && (this.data.Floor !== '') && (this.data.Purpuse !== ''))
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
	<div class="panel-heading postJob"  style="background-color:#00BBBB;color:white">ሱቅ መመዝገቢያ</div> 
		<div style="padding:30px">

					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">የሱቅ ቁጥር</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input v-model="data.ShopNumber" type="text"  class="form-control " placeholder="የሱቅ ቁጥር"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">ፍሎር</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input v-model="data.Floor" type="text"  class="form-control " placeholder="ፍሎር"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">ስፋት</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input v-model="data.area" type="text"  class="form-control " placeholder="ስፋት"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">አስተያየት</label>
						</div>
						<div class=" col-lg-9">
							<input v-model="data.Note" type="text"  class="form-control" placeholder="አስተያየት"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>


					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">የስራ ዘርፍ</label>
						</div>
						<div class=" col-lg-9">
							<input v-model="data.Purpuse" type="text"  class="form-control" placeholder="የስራ ዘርፍ"   style="background-color:#00AAAA;color:white"/>
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
