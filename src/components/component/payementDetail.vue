
<script>
import paidDetail from './paidDetail.vue'
import warning from './warning.vue'
import firebaseApp from 'firebaseApp'

export default {
  name: 'payementDetail',
  beforeCreate: function () {
    console.log('=============Payement Detail==============')
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
    this.data.Payements = this.$store.getters.getPayements
  },
  components: {paidDetail, warning, firebaseApp},
  data: function () {
    return { Payements: [] }
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
      var contract = document.getElementById('contract')
      var contractKey = document.getElementById('contract').options[contract.selectedIndex].id
      var payement = {}
      payement['contractKey'] = contractKey
      payement.Magnitude = Magnitude
      payement.PayedAmount = PayedAmount
      payement.PayableDeuDate = PayableDeuDate
      payement.RemainingPayement = RemainingPayement
      payement.NextPayementDate = NextPayementDate
      payement.monthsPaid = monthsPaid
      payement.ShopNumber = ShopNumber
      payement.Rentee = Rentee
      console.log(payement)
      this.$store.dispatch('addPayement', payement)
    },
    removePayement: function (event) {
      console.log(event.srcElement.id)
      this.$store.dispatch('removePayement', event.srcElement.id)
      this.data.Payements = this.$store.getters.getPayements
    }
  },
  computed: {
    payement: function () {
      console.log('Payements')
      return this.$store.getters.getPayements
    },
    contracts: function () {
      console.log('Contracts')
      return this.$store.getters.getContracts
    },
    shops: function () {
      console.log('shops')
      return this.$store.getters.getProperties
    },
    rentees: function () {
      console.log('rentees')
      return this.$store.getters.getServiceRecievers
    }

  }
}
</script>
<style scoped>

</scope>

<template>
<div  id="payementDetail">

	<div class="panel panel-default" style="background-color:#00AAAA;color:white">
    	<div class="panel-heading postJob" style="background-color:#00BBBB;color:white">ክፍያ</div> 
    	<div style="padding:30px">

            <div class="row" >
            
              <div class="col-lg-6">
								<label  forname="baks" style="color:white">የከፈሉበት ባንክ</label>
							</div>

              <div class="col-lg-6">

                  <select id="banks" class="form-control" style="background-color:#00AAAA;color:white">
                  
                    <option >ኦሮሚያ ኢንተርናሽናል ባንክ</option>

                    <option >ኢትዮጵያ ንግድ ባንክ</option>

                    <option >ንብ ኢንተርናሽናል ባንክ</option>

                  </select>
              </div>

		  		   <div class="col-lg-6">
								<label  forname="InvoiceNumber" style="color:white">የገቢ ደረሰኝ ቁጥር</label>
						</div>
              
              <div class="col-lg-6">
						  	<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="Magnitude"/>
              </div>

            <div class="col-lg-6">
								<label  forname="PayedAmountBeforerVat" style="color:white">ከቫት በፊት</label>
								</div><div class="col-lg-6">
								<input  type="text" class="form-control"   style="background-color:#00AAAA;color:white"  id="PayedAmountBeforerVat"/>
            </div>
            
            <div class="col-lg-6">
								<label  forname="PayedAmount" style="color:white">ከቫት በኋላ</label>
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
								<input  type="number" class="form-control"   style="background-color:#00AAAA;color:white"  id="monthsPaid"/>
            </div>

            <div class="col-lg-6">
								<label  forname="ShopNumber" style="color:white">የሱቅ ቁጥር</label>
								</div><div class="col-lg-6">
                	<select class="form-control" style="background-color:#00AAAA;color:white" id="ShopNumber">
                    <option v-for="(shop,index) in shops"  style="background-color:#00AAAA;color:white"  v-bind:id=index>{{shop.ShopNumber}}</option>
                  </select>
            </div>

            <div class="col-lg-6">
			<label  forname="Rentee" style="color:white">ተከራይ </label>
			</div>
      <div class="col-lg-6">
          <select class="form-control" style="background-color:#00AAAA;color:white"  id="Rentee">
						<option v-for="(rentee,index) in rentees" v-bind:id=index>{{rentee.Name}}</option>
					</select>
      </div>
			
		</div>

			<div class="row">
				<div class=" col-lg-3">

				</div>

				<div class=" col-lg-12">

					<button @click.stop.prevent="addPayement" class="btn btn-primary pull-right"  style="background-color:#00AAAA">+</button>

				</div>
			</div>	
		</div>

     <div class="panel-heading " style="background-color:#00BBBB;color:white">ክፍያ</div> 
	   <div style="padding:30px">
	   
	       <table class="table" style="color:white"> 
			    <tr>
					<th>የገቢ ደረሰኝ ቁጥር</th>
					<th>ከቫት በፊት</th>
          <th>ከቫት በኋላ</th>
					<th>የከፈሉበት ቀን</hd>
					<th>ቀጣይ ክፍያ </th>
					<th>ቀጣይ ክፍያ መከፈል ያለበት ቀን</th>
					<th>የከፈሉት ወራት</th>
					<th>የሱቅ ቁጥር</th>
					<th>ተከራይ</th>
          <th>የቀራቸው ወራቶች</th>
          <th>የቀራቸው ጊዜ</th>
				</tr>

				<tr v-for="(tekeray, index)  in payement">
          <td>{{tekeray.PayedAmountBeforerVat}}</td>
					<td>{{tekeray.PayedAmount}} </td>
				  <td>{{tekeray.Magnitude}} </td>
					<td>{{tekeray.NextPayementDate}} </td>
					<td>{{tekeray.PayableDeuDate}} </td>
					<td>{{tekeray.RemainingPayement}} </td>
					<td>{{tekeray.Rentee}} </td>
					<td>{{tekeray.ShopNumber}} </td>
					<td>{{tekeray.monthsPaid}}</td>
          <td><a v-bind:id="index" href="#" @click.stop.prevent="removePayement"> X </a>
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
