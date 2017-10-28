
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
      var PayedAmountBeforerVat = document.getElementById('PayedAmountBeforerVat').value
      var PayedAmount = document.getElementById('PayedAmount').value
      var PayableDeuDate = document.getElementById('PayableDeuDate').value
      var RemainingPayement = document.getElementById('RemainingPayement').value
      var NextPayementDate = document.getElementById('NextPayementDate').value
      var monthsPaid = document.getElementById('monthsPaid').value
      var ShopNumber = document.getElementById('ShopNumber').value
      var InvoiceNumber = document.getElementById('InvoiceNumber').value
      var date = document.getElementById('date').value
      var Rentee = document.getElementById('Rentee').value

      var payement = {}
      payement.date = date
      payement.PayedAmountBeforerVat = PayedAmountBeforerVat
      payement.InvoiceNumber = InvoiceNumber
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
      return this.$store.getters.getPayements
    },
    contracts: function () {
      return this.$store.getters.getContracts
    },
    shops: function () {
      return this.$store.getters.getProperties
    },
    rentees: function () {
      return this.$store.getters.getServiceRecievers
    }

  }
}
</script>
<style scoped>
 .theme{
	 background-color:#00AAAA;
	 color:white
 }
 
.scrollbar
{
	float: left;
	height: 450px;
	overflow-y: scroll;
	margin-bottom: 25px;
}

.force-overflow
{
	min-height: 450px;
}

#wrapper
{
	text-align: center;
	margin: auto;
}

#style-5::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	background-color: #00AAAA;
}

#style-5::-webkit-scrollbar
{
	width: 10px;
	background-color: #00AAAA;
}

#style-5::-webkit-scrollbar-thumb
{
	background-color: #0ae;	
	background-image: -webkit-gradient(linear, 0 0, 0 100%,
	                   color-stop(.5, rgba(255, 255, 255, .2)),
					   color-stop(.5, transparent), to(transparent));
}
</style>

<template>
<div  id="payementDetail">

	<div class="panel panel-default theme" >
    	<div class="panel-heading theme" scrollbar>ክፍያ</div> 
    	<div style="padding:30px   force-overflow">

            <div class="row" >
            
              <div class="col-lg-6">
								<label  forname="baks" class="theme">የከፈሉበት ባንክ</label>
							</div>

              <div class="col-lg-6">

                  <select id="banks" class="form-control theme" >
                  
                    <option >ኦሮሚያ ኢንተርናሽናል ባንክ</option>

                    <option >ኢትዮጵያ ንግድ ባንክ</option>

                    <option >ንብ ኢንተርናሽናል ባንክ</option>

                  </select>
              </div>

		  		   <div class="col-lg-6">
								<label  forname="InvoiceNumber" class="theme">የገቢ ደረሰኝ ቁጥር</label>
						</div>
              
              <div class="col-lg-6">
						  	<input  type="text" class="form-control theme"   id="InvoiceNumber"/>
              </div>

            <div class="col-lg-6">
								<label  forname="PayedAmountBeforerVat" class="theme">ከቫት በፊት</label>
								</div><div class="col-lg-6">
								<input  type="number" class="form-control theme" id="PayedAmountBeforerVat"/>
            </div>
            
            <div class="col-lg-6">
								<label  forname="PayedAmount" class="theme">ከቫት በኋላ</label>
								</div><div class="col-lg-6">
								<input  type="number" class="form-control theme" id="PayedAmount"/>
            </div>

            <div class="col-lg-6">
								<label  forname="PayableDeuDate" class="theme">የከፈሉበት ቀን</label>
								</div><div class="col-lg-6">
								<input  type="date" class="form-control theme"  id="PayableDeuDate"/>
            </div>

            <div class="col-lg-6">
							<label  forname="RemainingPayement" class="theme">ቀጣይ ክፍያ </label>
							 </div><div class="col-lg-6">
								<input  type="text" class="form-control theme"  id="RemainingPayement"/>
            </div>

            <div class="col-lg-6">
								<label  forname="NextPayementDate " class="theme">ቀጣይ ክፍያ መከፈል ያለበት ቀን</label>
             </div><div class="col-lg-6">
								<input  type="date" class="form-control theme"   id="NextPayementDate"/>
            </div>

            <div class="col-lg-6">
								<label  forname="monthsPaid" class="theme">የከፈሉት ወራት</label>
             </div><div class="col-lg-6">
								<input  type="number" class="form-control theme"    id="monthsPaid"/>
            </div>

            <div class="col-lg-6">
								<label  forname="ShopNumber" class="theme">የሱቅ ቁጥር</label>
								</div><div class="col-lg-6">
                	<select class="form-control theme"  id="ShopNumber">
                    <option v-for="(shop,index) in shops"  class="theme" v-bind:id=index>{{shop.ShopNumber}}</option>
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
          <th>የቀራቸው ጊዜ</th>
				</tr>

				<tr v-for="(tekeray, index)  in payement">
          <td>{{tekeray.InvoiceNumber}}</td>
          <td>{{tekeray.PayedAmountBeforerVat}}</td>
					<td>{{tekeray.PayedAmount}} </td>
				  <td>{{tekeray.date}} </td>
					<td>{{tekeray.NextPayementDate}} </td>
					<td>{{tekeray.PayableDeuDate}} </td>
					<td>{{tekeray.monthsPaid}}</td>
					<td>{{tekeray.ShopNumber}} </td>
					<td>{{tekeray.Rentee}} </td>
					<td>{{tekeray.RemainingPayement}} </td>
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
