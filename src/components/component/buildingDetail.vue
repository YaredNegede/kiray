
<script>

export default {
  beforeCreate: function () {
    console.log('=======Building Detail=========')
    console.log(this.$store.getters.getUser)
    if (!this.$store.getters.getUser.authenticated) {
      this.$router.push('login')
    }
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.getters.getProperty[0]
    this.data = (typeof dt === 'undefined' || dt === null) ? { 'PropertyName': '', 'Address': '', 'Address2': '', 'Contracts': [], 'Properties': [], 'ServiceRecievers': [] } : dt
    console.log(this.data)
    console.log('============================')
  },
  components: {},
  name: 'buildingDetail',
  props: { show: true },
  data: function () {
    return {}
  },
  methods: {
    add () {
      if (this.validate()) {
        if (this.$store.getters.getUser.authenticated) {
          this.$store.getters.getSurf.rediretTo = '/signUp'
        } else {
          this.$router.push('home/login')
        }
      } else {
        alert('Input error')
      }
    },
    validate () {
      return ((this.data.PropertyName !== '') && (this.data.Address !== '' && this.data.Address2 !== ''))
    }
  }
}
</script>
<style scoped>
</scope>

<template>

	<div class="panel panel-default"  style="background-color:#00AAAA;color:white">
	<div class="panel-heading " style="background-color:#00BBBB;color:white">የሕንጻው </div> 
		<div style="padding:30px">

								
						<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">የሕንጻው ስም</label>
						</div>
						<div class="col-lg-6"  style="background-color:#00AAAA;color:white">
							<input v-model="data.PropertyName" type="text"  class="form-control " placeholder="የሕንጻው ስም"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">አድሬስ</label>
						</div>
						<div class="col-lg-6"  style="background-color:#00AAAA;color:white">
							<input v-model="data.Address" type="text"  class="form-control " placeholder="አድሬስ"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
			
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">አድሬስ 2</label>
						</div>
						<div class="col-lg-6" style="background-color:#00AAAA">
							<input v-model="data.Address2" type="text"  class="form-control " placeholder="አድሬስ 2"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
							<div class="row">
								<div class=" col-lg-3"/>
								<div class=" col-lg-6">

									<button @click="add" class="btn btn-primary pull-right"  style="background-color:#00AAAA">+</button>

								</div>
							</div>	
							</div>

			
				</div>
	</div>

</template>
