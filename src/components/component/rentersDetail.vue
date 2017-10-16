
<script>
import store from 'store'

export default {
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    var dt = this.$store.state.data.ServiceRecievers
    this.data = (typeof dt === 'undefined' || dt === null) ? [] : dt
    console.log(this.data)
  },
  name: 'rentersDetail',
  components: {store},
  data: function () {
    return {}
  }
}
</script>

<style scoped>

</scope>

<template id = "rentersDetail">

	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
	
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Renters</div> 
	<div style="padding:30px">

          <table class="table" style="color:white"> 
          <tr>
            <th>Name</th>
            <th>Father Name</th>
            <th>ID</th>
            <th>Identification type</th>
            <th>PhoneNumber</th>
          </tr>
					<tr v-for="renter in data">
            <td>{{renter.Name}}</td>
            <td>{{renter.FatherName}}</td>
            <td>{{renter.ID}}</td>
            <td>{{renter.IDType}}</td>
            <td>{{renter.PhoneNumber}}</td>
            <td><a href="#"> X </a>
        </tr>
			</table> 
			
		</div>

</template>
