
<script>

import buildingDetail from './buildingDetail.vue'
import renterDetail from './renterDetail.vue'
import shopDetail from './shopDetail.vue'

export default {
  name: 'addInformation',
  props: { show: true },
  beforeCreate: function () {
    console.log(this.$store.getters.getServiceRecievers)
  },
  components: {buildingDetail, renterDetail, shopDetail},
  data: function () {
    return {}
  },
  methods: {
    save () {
      this.$router.push('/contractDetail')
    },
    validate () {
      return this.email && this.name && this.tel && this.password && this.password2
    }
  }
}
</script>
<style scoped>
</scope>
<template name="addInformation">
		
	<div>
			<buildingDetail></buildingDetail>
			
			<shopDetail></shopDetail>
			
			<renterDetail></renterDetail>
			
			<div class="row">
				<div class=" col-lg-3">

				</div>

				<div class=" col-lg-6">

					<button class="btn btn-primary pull-right" @click="save" style="background-color:#00AAAA">Save</button>

				</div>
			</div>	

		</div>

</template>
