
<script>
import paidDetail from './paidDetail.vue'
import warning from './warning.vue'

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
      'late': [],
      'unpaid': []
    }
    this.data = (typeof dt === 'undefined' || dt === null) ? statData : dt
    console.log(this.data)
  },
  components: {paidDetail, warning},
  data: function () {
    // return this.$store.getters.getPayements
    return {}
  },
  methods: {
    addPayement: function () {
      var Magnitude = document.getElementById('Magnitude').value
      var PayedAmount = document.getElementById('PayedAmount').value
      var PayableDeuDate = document.getElementById('PayableDeuDate').value
      var RemainingPayement = document.getElementById('RemainingPayement').value
      var NextPayementDate = document.getElementById('NextPayementDate').value
      var monthsPaid = document.getElementById('monthsPaid').value
      var ShopNumber = document.getElementById('ShopNumber').value
      var Rentee = document.getElementById('Rentee').value
      var payement = {}
      payement.Magnitude = Magnitude
      payement.PayedAmount = PayedAmount
      payement.PayableDeuDate = PayableDeuDate
      payement.RemainingPayement = RemainingPayement
      payement.NextPayementDate = NextPayementDate
      payement.monthsPaid = monthsPaid
      payement.ShopNumber = ShopNumber
      payement.Rentee = Rentee
      this.$store.dispatch('addPayement', payement)
    }
  },
  computed: {
    payement: function () {
      console.log('getting payement.....')
      console.log(this.$store.getters.getPayements)
      return this.$store.getters.getPayements
    },
    id: function () {}
  }
}
</script>
<style scoped>

</scope>

<template >
<div  id="payementDetail">
	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">ክፍያ</div> 
	<div style="padding:30px">
		
			<div class="row">
		  		 <div class="col-lg-6">
								<label  forname="InvoiceNumber" style="color:white">የገቢ ደረሰኝ ቁጥር</label>
							</div><div class="col-lg-6">
							<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="Magnitude"/>
           </div>

            <div class="col-lg-6">
								<label  forname="PayedAmount" style="color:white">የከፈሉት ገንዘብ</label>
								</div><div class="col-lg-6">
								<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="PayedAmount"/>
            </div>

            <div class="col-lg-6">
								<label  forname="PayableDeuDate" style="color:white">የከፈሉበት ቀን</label>
								</div><div class="col-lg-6">
								<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="PayableDeuDate"/>
            </div>

            <div class="col-lg-6">
							<label  forname="RemainingPayement" style="color:white">ቀጣይ ክፍያ </label>
							 </div><div class="col-lg-6">
								<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="RemainingPayement"/>
            </div>

            <div class="col-lg-6">
								<label  forname="NextPayementDate" style="color:white">ቀጣይ ክፍያ መከፈል ያለበት ቀን</label>
             </div><div class="col-lg-6">
								<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="NextPayementDate"/>
            </div>

            <div class="col-lg-6">
								<label  forname="monthsPaid" style="color:white">የከፈሉት ወራት</label>
             </div><div class="col-lg-6">
								<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="monthsPaid"/>
            </div>

            <div class="col-lg-6">
								<label  forname="ShopNumber" style="color:white">የሱቅ ቁጥር</label>
								</div><div class="col-lg-6">
								<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="ShopNumber"/>
            </div>

            <div class="col-lg-6">
			<label  forname="Rentee" style="color:white">ተከራይ </label>
			</div><div class="col-lg-6">
			<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="Rentee"/>
            </div>
			
		</div>

			<div class="row">
				<div class=" col-lg-3">

				</div>

				<div class=" col-lg-12">

					<button @click.stop.prevent="addPayement" v-bind:id="id" class="btn btn-primary pull-right"  style="background-color:#00AAAA">+</button>

				</div>
			</div>	
		</div>

     <div class="panel-heading " style="background-color:#00BBBB;color:white">ክፍያ</div> 
	   <div style="padding:30px">
	   
	       <table class="table" style="color:white"> 
			    <tr>
					<th>የገቢ ደረሰኝ ቁጥር</th>
					<th>የከፈሉት ገንዘብ</th>
					<th>የከፈሉበት ቀን</hd>
					<th>ቀጣይ ክፍያ </th>
					<th>ቀጣይ ክፍያ መከፈል ያለበት ቀን</th>
					<th>የከፈሉት ወራት</th>
					<th>የሱቅ ቁጥር</th>
					<th>ተከራይ</th>
				</tr>

				<tr v-for="tekeray in payement">
				  <td>{{tekeray.Magnitude}} </td>
					<td>{{tekeray.NextPayementDate}} </td>
					<td>{{tekeray.PayableDeuDate}} </td>
					<td>{{tekeray.PayedAmount}} </td>
					<td>{{tekeray.RemainingPayement}} </td>
					<td>{{tekeray.Rentee}} </td>
					<td>{{tekeray.ShopNumber}} </td>
					<td>{{tekeray.monthsPaid}}</td>
				</tr>

		</table> 

	  </div>
	</div>
<div>
<div class="row">
<div class="col-lg-6">
  <paidDetail></paidDetail>

</div>
<div class="col-lg-6">
  <warning></warning>
</div>
</div>
</template>
