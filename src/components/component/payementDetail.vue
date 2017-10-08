
<script>
import Turbo from 'turbo'

export default {
  name: 'payementDetail',
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    console.log(this.$store.getters.getUser)
    if (!this.$store.getters.getUser.authenticated) {
      this.$router.push('login')
    }
    var dt = this.$store.getters.getStat
    var statData = {
      'late': [{'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''}],
      'unpaid': [{'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''}]
    }
    this.data = (typeof dt === 'undefined' || dt === null) ? statData : dt
    console.log(this.data)
  },
  components: {Turbo},
  data: function () {
    return {}
  }
}
</script>
<style scoped>

</scope>

<template >
<div  id="payementDetail">
	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Payement</div> 
	<div style="padding:30px">
		
		<form>
	  	<label  forname="InvoiceNumber" style="color:white">የገቢ ደረሰኝ ቁጥር</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="Magnitude"/>

				<label  forname="PayedAmount" style="color:white">የከፈሉት ገንዘብ</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="PayedAmount"/>

				<label  forname="PayableDeuDate" style="color:white">የከፈሉበት ቀን</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="PayableDeuDate"/>

				<label  forname="RemainingPayement" style="color:white">ቀጣይ ክፍያ </label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="RemainingPayement"/>

				<label  forname="NextPayementDate" style="color:white">ቀጣይ ክፍያ መከፈል ያለበት ቀን</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="NextPayementDate"/>

				<label  forname="monthsPaid" style="color:white">የከፈሉት ወራት</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="monthsPaid"/>

		</form>
			<div class="row">
				<div class=" col-lg-3">

				</div>

				<div class=" col-lg-12">

					<button  class="btn btn-primary pull-right"  style="background-color:#00AAAA">+</button>

				</div>
			</div>	
		</div>

	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">የማስጠንቀቂያ ወር የደረሰ</div> 
	<div style="padding:30px">

	<table class="table" style="color:white" v-for="tekeray in data.late"> 
			<tr>
					<th>PhoneNumber</th>
					<th>Name</th>
					<th>Father Name</hd>
					<th>Identification type</th>
					<th>Identification type</th>
				</tr>

				<tr>
					<td>{{tekeray.Name}}</td></tr>
					<td>{{tekeray.FatherName}}</td></tr>
					<td>{{tekeray.ID}}</td></tr>
					<td>{{tekeray.IDType}}</td>
					<td>{{tekeray.PhoneNumber}}</td>
				</tr>

		</table> 

	</div>

    <div class="panel-heading postJob" style="background-color:#00BBBB;color:white">ያልከፈሉ ተከራይ </div> 
		<div style="padding:30px">

					<table class="table" style="color:white" v-for="tekeray in data.unpaid"> 
							
							<tr>
									<th>Name</th>
									<th>Father Name</th>
									<th>Identification</th>
									<th>Identification type</th>
									<th>PhoneNumber</th>
							</tr>

							<tr>
									<td>{{tekeray.Name}}</td></tr>
									<td>{{tekeray.FatherName}}</td>
									<td>{{tekeray.ID}}</td></tr>
									<td>{{tekeray.IDType}}</td></tr>
									<td>{{tekeray.PhoneNumber}}</td>
							</tr>

					</table> 
			
				</div>

	</div>
<div>
</template>
