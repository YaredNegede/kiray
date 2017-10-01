
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
      if (this.validate()) {
        Turbo.store.commit('updateServiceRecievers', this.data)
        this.data = {}
      } else {
        alert('Invalid input')
      }
    },
    validate: function () {
      console.log(this.data.Name !== '')
      return ((this.data.Name !== '') && (this.data.FatherName !== '') && (this.data.ID !== '') && (this.data.IDType !== '') && (this.data.PhoneNumber !== ''))
    }
  }
}
</script>
<style scoped>

</scope>

<template>
<div class="panel panel-default" style="background-color:#00AAAA" id="renterDetail">
	<div class="panel-heading" style="background-color:#00BBBB;color:white">ተከራይ መመዝገቢያ</div> 
		<div style="padding:30px">
		
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">ስም</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input v-model="data.Name" type="text"  class="form-control " placeholder="ስም" style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">የአባት ስም</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input  v-model="data.FatherName" type="text"  class="form-control " placeholder="የአባት ስም"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">መታወቂያ ቁጥር</label>
						</div>
						<div class=" col-lg-9">
							<input v-model="data.ID"  type="text"  class="form-control" placeholder="መታወቂያ ቁጥር"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">መታወቂያ አይነት</label>
						</div>
						<div class=" col-lg-9">
							<input  v-model="data.IDType" type="text"  class="form-control" placeholder="መታወቂያ አይነት"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
	
						<div class=" col-lg-3">
							<label  style="color:white">ስልክ ቁጥር</label>
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
