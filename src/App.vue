<template >
     <div id="app" class="container app"  style="width: 100%;background-color:#cccccc">

       <div class="row">
          <menus></menus>
       </div>

       <div class="row" style="margin:5px">

       <div class="row" >
            <div class="jumbotron col-lg-6" style="border: solid 2px gray;margin-left:12px">
              <Home></Home>
             </div>
		   <div class="jumbotron col-lg-5" style="border: solid 2px gray;margin-left:12px">
                
              <router-view></router-view>
             </div>
        </div>
        <div class="row">
            <div class="jumbotron col-lg-3 "  style="border: solid 2px gray;margin-left:12px">
               <h4>9to5</h4>
               <h5>Professional freelancers and the essentials to find them.</h5>
               <p><a class="btn btn-primary btn-lg" role="button"> Sign Up</a> </p>
             </div>

             <div class="jumbotron col-lg-3 " style="border: solid 2px gray;margin-left:12px">
                <h4>9to5 Pro</h4>
                <h5>Premium talent, pre-vetted and handpicked for you.Full Details</h5>
                <p><a class="btn btn-primary btn-lg" role="button">Sign Up</a> </p>
              </div>

              <div class="jumbotron col-lg-3 " style="border: solid 2px gray;margin-left:12px">
                 <h4>9to5 Enterprise</h4>
                 <h5>End-to-end Freelancer Management System.</h5>
                 <p><a class="btn btn-primary btn-lg " role="button">Sign Up</a> </p>
               </div>

           </div>

         </div>
        <div class="row" >

          <div class="col-lg-4">
              <h4>COMPANY INFO</h4>
              <ul class="list-unstyled">
                <li>About Us</li>
                <li>Customer Stories</li>
                <li>Press</li>
                <li>Careers</li>
                <li>Glass Blog</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Trust & Safety</li>
                <li>Hiring Headquarters</li>
                <li>Online Work Report</li>
              </ul>
          </div>

          <div class="col-lg-4">
             <h4>ADDITIONAL SERVICES</h4>
             <ul  class="list-unstyled">
                <li>Glass Pro</li>
                <li>Enterprise Solutions</li>
                <li>Enterprise Summit</li>
                <li>Local Business Resources</li>
              </ul>
          </div>
<!---->
          <div class="col-lg-3 list-unstyled ">
             <h4>Follow us</h4>
           <ul class="list-unstyled pull-left">
              <li>Add</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
              <li>YouTube</li>
              <li>Instagram</li>
            </ul>
          </div>

       </div>
   	</div>

</template>
<script>

import menus from './components/component/menus.vue'
import Home from './components/component/Home.vue'
import router from './router'
import axios from 'axios'

export default {
  beforeCreate: function () { },
  name: 'app',
  components: {axios, router, menus, Home},
  router,
  methods: {}
}
</script>

<style scoped>
  
</style>
