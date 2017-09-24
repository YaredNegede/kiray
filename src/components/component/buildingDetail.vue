
<script>
import Turbo from 'turbo'

export default {
  beforeCreate: function () {
    console.log('=======Building Detail=========')
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.getters.getProperty[0]
    this.data = (typeof dt === 'undefined' || dt === null) ? { 'PropertyName': '', 'Address': '', 'Address2': '', 'Contracts': [], 'Properties': [], 'ServiceRecievers': [] } : dt
    console.log(this.data)
    console.log('============================')
  },
  components: {Turbo},
  name: 'buildingDetail',
  props: { show: true },
  data: function () {
    return {}
  },
  methods: {
    register () {
      if (this.$store.getters.getUser.authenticated) {
        this.$router.push('/contractDetail')
      } else {
        this.$router.push('home/login')
      }
    },
    validate () {
      return this.email && this.name && this.tel && this.password && this.password2
    }
  }
}
</script>
<style scoped>
</scope>

<template>

	<div class="panel panel-default"  style="background-color:#00AAAA;color:white">
	<div class="panel-heading " style="background-color:#00BBBB;color:white">Building Information</div> 
		<div style="padding:30px">

								
						<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Building Name</label>
						</div>
						<div class="col-lg-6"  style="background-color:#00AAAA;color:white">
							<input v-model="data.PropertyName" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Address</label>
						</div>
						<div class="col-lg-6"  style="background-color:#00AAAA;color:white">
							<input v-model="data.Address" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">Address 2</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input v-model="data.Address2" type="text"  class="form-control " placeholder="Your Name"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
				</div>
	</div>

</template>
