
<script>

import renterDetail from './renterDetail.vue'
import rentersDetail from './rentersDetail.vue'
import shopDetail from './shopDetail.vue'
import shopDetails from './shopDetails.vue'
import Turbo from 'turbo'

export default {
  name: 'addInformation',
  props: { show: true },
  beforeCreate: function () {
    console.log('addInformation')
    console.log(this.$store.getters.getData)
  },
  components: {renterDetail, rentersDetail, shopDetail, shopDetails, Turbo},
  data: function () {
    return {}
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

              <div class="row">
                
                <div class=" col-lg-6">
                
                   <shopDetails></shopDetails>
                
                </div>
                
                <div class=" col-lg-6">
                    
                   <rentersDetail></rentersDetail>           
                        
                </div>
    
           </div>

		</div>

</template>
