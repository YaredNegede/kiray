
<script>
import Turbo from 'turbo'

export default {
  name: 'renterDetail',
  beforeCreate: function () {
    console.log('===========================')
    var dt = this.$store.getters.getServiceReciever[0]
    this.data = (typeof dt === 'undefined' || dt === null) ? {'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''} : dt
    console.log(this.data)
    console.log('============================')
  },
  props: { show: true },
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
  data: function () {
    return {}
  },
  methods: {
    registerProfile () {}
  }
}
</script>
<style scoped>

</scope>

<template>
<div class="panel panel-default" style="background-color:#00AAAA" id="renterDetail">
	<div class="panel-heading" style="background-color:#00BBBB;color:white">Renter Detail</div> 
		<div style="padding:30px">
					<div class="row" v-show=show>
						<div class="col-lg-3">
							<label  style="color:white">Shop Number</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<select type="text"  class="form-control " placeholder="Building"   style="background-color:#00AAAA;color:white">
								<option ></option>								
							</select>
						</div>
					</div>
	
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Name</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input v-model="name" type="text"  class="form-control " placeholder="Your Name" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Father Name</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input  v-model="fatherName" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">ID number</label>
						</div>
						<div class=" col-lg-6">
							<input v-model="id"  type="text"  class="form-control" placeholder="ID number"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">ID type</label>
						</div>
						<div class=" col-lg-6">
							<input  v-model="IDType" type="text"  class="form-control" placeholder="Enter id type"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
	
						<div class=" col-lg-3">
							<label  style="color:white">Phone Number</label>
						</div>
						<div class=" col-lg-6">
							<input v-model="phoneNumber" type="tel"  class="form-control" placeholder="+215 091271312"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
		
			</div>
	</div>
</template>
