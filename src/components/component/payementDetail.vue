
<script>
import Turbo from 'turbo'
import store from 'store'

export default {
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    var dt = this.$store.getters.getStat
    var statData = {
      'late': [{'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''}],
      'unpaid': [{'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': ''}]
    }
    this.data = (typeof dt === 'undefined' || dt === null) ? statData : dt
    console.log(this.data)
  },
  name: 'payementDetail',
  components: {Turbo, store},
  data: function () {
    return {}
  }
}
</script>
<style scoped>

</scope>

<template >

	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Payement</div> 
	<div style="padding:30px">
		
		<from>
	  	<label  forname="InvoiceNumber" style="color:white">Invoice Number</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="Magnitude"/>

				<label  forname="PayedAmount" style="color:white">Payed Amount</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="PayedAmount"/>

				<label  forname="PayableDeuDate" style="color:white">Payable Deu Date</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="PayableDeuDate"/>

				<label  forname="RemainingPayement" style="color:white">Remaining Payement</label>
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  name="RemainingPayement"/>

		</form>
		
		</div>

	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Late</div> 
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

    <div class="panel-heading postJob" style="background-color:#00BBBB;color:white">Unpaid Rent</div> 
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

</template>
