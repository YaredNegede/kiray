<script>

import Home from './components/component/Home.vue'
import menus from './components/component/menus.vue'
import add from './components/component/add.vue'
import footerDiv from './components/component/footerDiv.vue'
import router from './router'
import axios from 'axios'

export default {
  beforeCreate: function () {
   this.$router.push('Home')
  },
  name: 'app',
  components: {axios, router, Home,add, footerDiv, menus},
  router,
  data: function (){
    return {loggedin:false}
  },
  methods: {}
}
</script>

<style scoped>
	.contenerMyStyle{
		background-color:#00AAAA;
		border:solid 1px #00BBBB
	}
	.loginMystyle{
		color:white;
	}
	.logoutMyStyle{
		color:white;
	}
	.footerMyStyle{
		padding:80px;
	}
	.headStyle{
		color:white;
		background-color: #009999;
	}
	.bodyStyle{
		
		
	}
</style>

<template >

   <div id="app" class="container contenerMyStyle" >
	  <menus></menus>
	   
	   <div  class="row bodyStyle">
		  
		   <div class="col-lg-12">
		   		<div class="row">

					<div class="col-lg-12">

						<router-view class="row">

						</router-view>

					</div>
					
				</div>
			</div>
		     		
		</div>  
	  <footerDiv class="footerMyStyle"></footerDiv>
	</div>

</template>