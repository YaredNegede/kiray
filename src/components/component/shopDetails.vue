
<script>

export default {
  name: 'shopDetails',
  props: { show: true },
  beforeCreate: function () {
    console.log('=============Shop Detail==============')
    this.$store.getters.getSurf.currentPath = this.$router.currentRoute
    console.log(this.$store.getters.getTemp)
    var dt = this.$store.getters.getUnrented
    this.data = (typeof dt === 'undefined' || dt === null) ? {'ShopNumber': '', 'Floor': '', 'Purpuse': ''} : dt
    console.log(this.data)
  },
  components: {},
  data: function () {
    return { 'ShopNumber': '', 'Floor': '', 'Purpuse': '' }
  },
  methods: {},
  computed: {
    getUnrented: function () {
      return this.$store.getters.getUnrented
    },
    getRented: function () {
      return this.$store.getters.getRented
    }
  }
}
</script>
<style scoped>

.them{
  background-color:#00BBBB;
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
 
</div>
  <div id= "shopDetail" class="panel panel-default them" >
  <div class="row">
      	<div class=" col-lg-6">
        <div class="panel-heading them" >ያልተከራየ ሱቅ</div> 
        </div>
        	<div class=" col-lg-6">
          <div class="panel-heading them" >የተከራየ ሱቅ</div> 
          </div>
  </div>
	
  
		<div style="padding:30px">

				<div class="col-lg-6 them scrollbar">
						<div class=" col-lg-12  force-overflow">
							<table class="table">
							<th>የሱቅ ቁጥር</th>
              <th>ፍሎር</th>
              <th>ስፋት</th>

                  <tr v-for="(shop, index) in getUnrented">
                      <td>{{shop.ShopNumber}}</td> <td>{{shop.Floor}}</td><td>{{shop.Purpuse}}</td><td>
                  </tr>
							</table>
					</div>	
			 	</div>
				<div class="col-lg-6 them scrollbar">
						<div class=" col-lg-12  force-overflow">
							<table class="table">
							<th>የሱቅ ቁጥር</th>
              <th>ፍሎር</th>
              <th>ስፋት</th>

                  <tr v-for="(shop, index) in getRented">
                      <td>{{shop.ShopNumber}}</td> <td>{{shop.Floor}}</td><td>{{shop.Purpuse}}</td><td>
                  </tr>
							</table>
					</div>	
			 	</div>

	</div>
</template>
