
<script>
import router from '../../router'

export default {
  name: 'renterDetail',
  beforeCreate: function () {
    console.log('=======Renter Detail=======')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    this.$store.state.temp.ID = this.$route.query.ID
    console.log(this.$route.query.ID)
    var dt = this.$store.getters.getServiceReciever
    if (dt) {
      this.data = dt
    } else {
      this.data = {'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''}
    }
  },
  components: {router},
  data: function () {
    return {}
  },
  methods: {
    removeRentee: function (event) {
      console.log(event.srcElement.name)
      var id = event.srcElement.name
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
      data['tinNumber'] = document.getElementById('tinNumber').value
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
      return ((data.Name !== '') && (data.tinNumber !== '') && (data.FatherName !== '') && (data.ID !== '') && (data.IDType !== '') && (data.PhoneNumber !== ''))
    },
    editRetee: function (event) {
      console.log(event.srcElement)
      var edit = true
      this.$store.state.temp.ID = event.srcElement.name
      router.push({path: 'renterDetail', query: {ID: event.srcElement.name, edit: edit}})
    },
    edit: function (event) {
      console.log('edit')
      var userdata = []
      var data = {}
      data['Name'] = document.getElementById('Name').value
      data['FatherName'] = document.getElementById('FatherName').value
      data['ID'] = document.getElementById('ID').value
      data['IDType'] = document.getElementById('IDType').value
      data['PhoneNumber'] = document.getElementById('PhoneNumber').value
      data['tinNumber'] = document.getElementById('tinNumber').value
      console.log(data)
      userdata[0] = this.$store.state.temp.ID
      userdata[1] = data
      if (this.validate(data)) {
        console.log('--------------------')
        this.$store.dispatch('editServiceReciever', userdata)
        console.log('--------------------')
        this.data = {}
      } else {
        alert('Invalid input')
      }
    }
  },
  computed: {
    ServiceRecievers: function () {
      return this.$store.getters.getServiceRecievers
    },
    datas: function () {
      return this.$store.getters.getServiceReciever
    },
    show: function () {
      return this.$store.state.temp.ID
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
							<label  style="color:white">የተከራይ አድራሻ</label>
						</div>
						<div class=" col-lg-9">
							<input  id = "ID" v-model="data.ID"  type="text"  class="form-control" placeholder="የተከራይ አድራሻ"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">ቲን ነምበር</label>
						</div>
						<div class=" col-lg-9">
							<input  id = "tinNumber" v-model="data.tinNumber"  type="text"  class="form-control" placeholder="ቲን ነምበር"   style="background-color:#00AAAA;color:white"/>
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

					<button  @click="add"  class="btn btn-primary pull-right glyphicon-floppy-disk"  style="background-color:#00AAAA"  v-show="!show">+</button>

					 <button @click="edit" class="btn btn-primary pull-right  glyphicon-floppy-disk"  style="background-color:#00AAAA" v-show="show">+</button>

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
								<th>ቲንነምበር</th>
								<th>ስልክ ቁጥር</th>
							</tr>
							
							<tr v-for="(renter, index) in ServiceRecievers">
								<td>{{renter.Name}}</td>
								<td>{{renter.FatherName}}</td>
								<td>{{renter.ID}}</td>
								<td>{{renter.IDType}}</td>
								<td>{{renter.tinNumber}}</td>
								<td>{{renter.PhoneNumber}}</td>
								<td><a  v-bind:name="index" href="#" @click.stop.prevent="removeRentee"  class="material-icons">delete</a>
							 <td><a v-bind:name="index" href="#" @click.stop.prevent="editRetee"  class="material-icons">edit </a>
						</tr>
					</table> 
				</div>
			</div>
</div>
</template>
