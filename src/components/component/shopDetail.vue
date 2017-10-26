
<script>
import { EventBus } from '../../event-bus'
import router from '../../router'

EventBus.$on('removeProperty', function () {
  console.log(`Oh, that's nice. It's gotten clicks! :)`)
})

export default {
  name: 'shopDetail',
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    this.$store.state.temp.ID = this.$route.query.ID
    var dt = this.$store.getters.getProperty
    if (dt) {
      this.data = dt
    } else {
      this.data = {'ShopNumber': '', 'Floor': '', 'Purpuse': ''}
    }
    console.log(this.data)
  },
  components: {EventBus, router},
  data: function () {
    return {}
  },
  methods: {
    removeProperty: function (event) {
      console.log(event.srcElement.name)
      EventBus.$emit('removeProperty', event.srcElement.name)
      var id = event.srcElement.name
      this.$store.dispatch('removeProperty', id)
    },
    add: function () {
      var data = {}
      data['ShopNumber'] = document.getElementById('ShopNumber').value
      data['Floor'] = document.getElementById('Floor').value
      data['area'] = document.getElementById('area').value
      data['Note'] = document.getElementById('Note').value
      data['Purpuse'] = document.getElementById('Purpuse').value

      if (this.validate(data)) {
        this.$store.dispatch('updateProperties', data)
      } else {
        alert('invalid input')
      }
    },
    validate: function (data) {
      return ((data.ShopNumber !== '') && (data.Floor !== '') && (data.Purpuse !== ''))
    },
    editProperty: function (event) {
      var edit = true
      router.push({path: 'shopDetail', query: {ID: event.srcElement.name, edit: edit}})
    },
    edit: function (event) {
      console.log('edit clicked')
      var userdata = []
      var data = {}
      data['ShopNumber'] = document.getElementById('ShopNumber').value
      data['Floor'] = document.getElementById('Floor').value
      data['area'] = document.getElementById('area').value
      data['Note'] = document.getElementById('Note').value
      data['Purpuse'] = document.getElementById('Purpuse').value
      userdata[0] = this.$store.state.temp.ID
      userdata[1] = data
      if (this.validate(data)) {
        this.$store.dispatch('updateProperties', userdata)
      } else {
        alert('invalid input')
      }
    }
  },
  computed: {
    Properties: function () {
      return this.$store.getters.getProperties
    },
    proprtyId: function () {
      return this.$store.state.temp.ID
    },
    show: function () {
      return this.$store.state.temp.ID
    }
  }
}
</script>
<style scoped>

.them{
  background-color:#00BBBB;
  color:white
}
</scope>
	
<template>
<div id= "shopDetail">
		<div class="panel panel-default them" style="background-color:#00AAAA">
	    <div class="panel-heading postJob"  style="background-color:#00BBBB;color:white">ሱቅ መመዝገቢያ</div> 
		<div style="padding:30px">
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">የሱቅ ቁጥር</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input id = "ShopNumber" v-model="data.ShopNumber" type="text"  class="form-control " placeholder="የሱቅ ቁጥር"  style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">ፍሎር</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input id = "Floor" v-model="data.Floor" type="text"  class="form-control " placeholder="ፍሎር"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>
					
					<div class="row">
						<div class="col-lg-3">
							<label  style="color:white">ስፋት</label>
						</div>
						<div class="col-lg-9" style="background-color:#00AAAA">
							<input id="area" v-model="data.area" type="text"  class="form-control " placeholder="ስፋት"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>

					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">አስተያየት</label>
						</div>
						<div class=" col-lg-9">
							<input id="Note" v-model="data.Note" type="text"  class="form-control" placeholder="አስተያየት"   style="background-color:#00AAAA;color:white"/>
						</div>
					</div>


					<div class="row">
						<div class=" col-lg-3">
							<label  style="color:white">የስራ ዘርፍ</label>
						</div>
						<div class=" col-lg-9">
							<input id="Purpuse" v-model="data.Purpuse" type="text"  class="form-control" placeholder="የስራ ዘርፍ"   style="background-color:#00AAAA;color:white"/>
						</div>

           	<div class=" col-lg-9">
							<input id="proprtyId" v-bind:value=proprtyId type="hidden" />
						</div>
					</div>


				   	<div class="row">
							
								<div class=" col-lg-12">
									<button @click="add" class="btn btn-primary pull-right glyphicon-floppy-disk"  style="background-color:#00AAAA" v-show="!show">+</button>
                  <button @click="edit" class="btn btn-primary pull-right  glyphicon-floppy-disk"  style="background-color:#00AAAA" v-show="show">+</button>

								</div>

							</div>	

		
				</div>

</div>

<!--TABLE-->

<div class="row" style="color:white">
  <div class=" col-lg-12">
    <table class="table">
      <th>የሱቅ ቁጥር</th>
      <th>ፍሎር</th>
      <th>የስራ ዘርፍ</th>
      <th>ስፋት</th>
      <tr v-for="(shop,index) in Properties">
  
          <td>{{shop.ShopNumber}}</td>
          <td>{{shop.Floor}}</td>
          <td>{{shop.Purpuse}}</td>
          <td>{{shop.area}}</td>
          <td><a href="#" @click.stop.prevent="removeProperty"  v-bind:name="index" class="material-icons">delete</a>
          <td><a href="#" @click.stop.prevent="editProperty"  v-bind:name="index" class="material-icons"> edit</a>
      </tr>
    </table>
  </div>	
</div>

</div>
</template>
