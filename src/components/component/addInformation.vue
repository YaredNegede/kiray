
<script>
import renterDetail from './renterDetail.vue'
import shopDetail from './shopDetail.vue'
import { EventBus } from '../../event-bus'

export default {
  name: 'addInformation',
  props: { show: true },
  beforeCreate: function () {
    console.log('Add Information')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    console.log(this.$store.getters.getUser)
    if (!this.$store.getters.getUser.authenticated) {
      this.$router.push('login')
    }
  },
  components: {renterDetail, shopDetail, EventBus},
  data: function () {
    return { Properties: this.$store.getters.getProperties, ServiceRecievers: this.$store.getters.getServiceRecievers }
  },
  methods: {}
}
</script>

<style scoped>

</scope>

<template>
		
	<div class="row" id="addInformation">
  
              <div class="row">
              
                <div class=" col-lg-6">
              
                      <shopDetail></shopDetail>
          
                </div>	
                
                <div class=" col-lg-6">

                     <renterDetail></renterDetail>

                </div>
                
              </div>

              </div>




		</div>


</template>
