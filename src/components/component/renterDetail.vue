
<script>

export default {
  name: 'renterDetail',
  beforeCreate: function () {
    console.log('=======Renter Detail=======')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    console.log(this.$router)
    var dt = this.$store.getters.getServiceReciever
    this.data = (typeof dt === 'undefined' || dt === null) ? {'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''} : dt
  },
  props: { show: true },
  components: {},
  data: function () {
    return {}
  },
  methods: {
    removeRentee: function (event) {
      console.log(event.srcElement.id)
      var id = event.srcElement.id
      this.$store.dispatch('removeRentee', id)
      this.data.ServiceRecievers = this.$store.getters.getServiceRecievers
    },
    add: function () {
      var data = {}
      data['Name'] = document.getElementById('Name').value
      data['FatherName'] = document.getElementById('FatherName').value
      data['ID'] = document.getElementById('ID').value
      data['IDType'] = document.getElementById('IDType').value
      data['PhoneNumber'] = document.getElementById('PhoneNumber').value
      console.log(data)
      if (this.validate(data)) {
        console.log('--------------------')
        this.$store.dispatch('updateServiceRecievers', data)
        console.log('--------------------')
        this.data = {}
      } else {
        alert('Invalid input')
      }
    },
    validate: function (data) {
      return ((data.Name !== '') && (data.FatherName !== '') && (data.ID !== '') && (data.IDType !== '') && (data.PhoneNumber !== ''))
    }
  },
  computed: {
    ServiceRecievers: function () {
      return this.$store.getters.getServiceRecievers
    }
  }
}
</script>
<style scoped>

</scope>

<template>
<div id="renterDetail">
<div class="panel panel-default" style="background-color:#00AAAA" id="renterDetail">
	<div class="panel-heading" style="background-color:#00BBBB;color:white">ተከራይ መመዝገቢያ</div> 
		<div style="padding:30px">
		
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">ስም</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input id = "Name" v-model="data.Name" type="text"  class="form-control " placeholder="ስም" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">የአባት ስም</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input id = "FatherName"   v-model="data.FatherName" type="text"  class="form-control " placeholder="የአባት ስም"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">መታወቂያ ቁጥር</label>
						</div>
						<div class=" col-lg-9">
							<input  id = "ID" v-model="data.ID"  type="text"  class="form-control" placeholder="መታወቂያ ቁጥር"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">መታወቂያ አይነት</label>
						</div>
						<div class=" col-lg-9">
							<input  id = "IDType"  v-model="data.IDType" type="text"  class="form-control" placeholder="መታወቂያ አይነት"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
	
						<div class=" col-lg-3">
							<label  style="color:white">ስልክ ቁጥር</label>
						</div>
						<div class=" col-lg-9">
							<input id = "PhoneNumber" v-model="data.PhoneNumber" type="tel"  class="form-control" placeholder="+215 091271312"   style="background-color:#00AAAA;color:white"/>
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

<!--TABLE-->
			<div class="row">
				<div class=" col-lg-12">
							<table class="table" style="color:white"> 
							<tr>
								<th>ስም</th>
								<th>የአባት ስም</th>
								<th>መታወቂያ ቁጥር</th>
								<th>መታወቂያ አይነት</th>
								<th>ስልክ ቁጥር</th>
							</tr>
							
							<tr v-for="(renter, index) in ServiceRecievers">
								<td>{{renter.Name}}</td>
								<td>{{renter.FatherName}}</td>
								<td>{{renter.ID}}</td>
								<td>{{renter.IDType}}</td>
								<td>{{renter.PhoneNumber}}</td>
								<td><a v-bind:id="index" href="#" @click.stop.prevent="removeRentee"> X </a>

						</tr>
					</table> 
				</div>
			</div>
</div>
</template>
