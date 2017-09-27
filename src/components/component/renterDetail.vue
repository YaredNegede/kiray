
<script>
import Turbo from 'turbo'

export default {
  name: 'renterDetail',
  beforeCreate: function () {
    console.log('=======Renter Detail=======')
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.getters.getServiceReciever[0]
    this.data = (typeof dt === 'undefined' || dt === null) ? {'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''} : dt
    console.log(this.data)
    console.log('============================')
  },
  props: { show: true },
  components: {Turbo},
  data: function () {
    return {}
  },
  methods: {
    add: function () {
      Turbo.store.commit('updateServiceRecievers', this.data)
    }
  }
}
</script>
<style scoped>

</scope>

<template>
<div class="panel panel-default" style="background-color:#00AAAA" id="renterDetail">
	<div class="panel-heading" style="background-color:#00BBBB;color:white">Renter Detail</div> 
		<div style="padding:30px">
		
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Name</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input v-model="data.Name" type="text"  class="form-control " placeholder="Your Name" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Father Name</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input  v-model="data.FatherName" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">ID number</label>
						</div>
						<div class=" col-lg-9">
							<input v-model="data.ID"  type="text"  class="form-control" placeholder="ID number"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">ID type</label>
						</div>
						<div class=" col-lg-9">
							<input  v-model="data.IDType" type="text"  class="form-control" placeholder="Enter id type"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
	
						<div class=" col-lg-3">
							<label  style="color:white">Phone Number</label>
						</div>
						<div class=" col-lg-9">
							<input v-model="data.PhoneNumber" type="tel"  class="form-control" placeholder="+215 091271312"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
		
		
			<div class="row">
				<div class=" col-lg-3">

				</div>

				<div class=" col-lg-12">

					<button  @click="add"  class="btn btn-primary pull-right"  style="background-color:#00AAAA">+</button>

				</div>
			</div>	

			</div>
						
			

	</div>
</template>
