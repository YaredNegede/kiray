
<script>

import buildingDetail from './buildingDetail.vue'
import renterDetail from './renterDetail.vue'
import shopDetail from './shopDetail.vue'
import Turbo from 'turbo'

export default {
  name: 'addInformation',
  props: { show: true },
  beforeCreate: function () {
    console.log('addInformation')
    console.log(this.$store.getters.getData)
  },
  components: {buildingDetail, renterDetail, shopDetail, Turbo},
  data: function () {
    return {}
  },
  methods: {
    save () {
      console.log('Save')
      this.$router.push('/contractDetail')
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
