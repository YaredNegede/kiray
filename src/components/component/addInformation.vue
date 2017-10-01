
<script>

import renterDetail from './renterDetail.vue'
import shopDetail from './shopDetail.vue'
import Turbo from 'turbo'

export default {
  name: 'addInformation',
  props: { show: true },
  beforeCreate: function () {
    console.log('Add Information')
  },
  components: {renterDetail, shopDetail, Turbo},
  data: function () {
    return {}
  },
  methods: {
    removeProperty (event) {
      console.log(event.srcElement.id)
      console.log(this.$store)
      var id = event.srcElement.id
      Turbo.store.commit('removeProperty', id)
    },
    removeRentee (event) {
      console.log(event.srcElement.id)
      var id = event.srcElement.id
      Turbo.store.commit('removeRentee', id)
    }
  },
  computed: {
    shops () {
      console.log('~~~~~~~~~~Shops~~~~~~~~~~~~~~~')
      return this.$store.getters.getProperties
    },
    renters () { return this.$store.getters.getServiceRecievers }
  }
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

              <div class="row" style="border: solid 1px white;margin:5px">
                <div class=" col-lg-6">
                      <div class="row" style="color:white">
                          <div class=" col-lg-12">
                            <table class="table">
                            <th>Shop Number</th>
                            <th>Floor</th>
                            <th>Purpuse</th>
                            <th>Area</th>
                                <tr v-for="shop in shops">
                                    <td>{{shop.ShopNumber}}</td> <td>{{shop.Floor}}</td><td>{{shop.Purpuse}}</td><td>{{shop.area}}</td><td><a href="#" @click.stop.prevent="removeProperty" v-bind:id="shop.ShopNumber"> X </a>
                                </tr>
                            </table>
                        </div>	
								</div>
                </div>
                <div class=" col-lg-6">
                 	<div>
                        <table class="table" style="color:white"> 
                        <tr>
                          <th>Name</th>
                          <th>Father Name</th>
                          <th>ID</th>
                          <th>Identification type</th>
                          <th>PhoneNumber</th>
                        </tr>
                        <tr v-for="renter in renters">
                          <td>{{renter.Name}}</td>
                          <td>{{renter.FatherName}}</td>
                          <td>{{renter.ID}}</td>
                          <td>{{renter.IDType}}</td>
                          <td>{{renter.PhoneNumber}}</td>
                          <td><a v-bind:id="renter.ID" href="#" @click.stop.prevent="removeRentee"> X </a>
                      </tr>
                    </table> 
                  </div>
                </div>
              </div>
		</div>

</template>
