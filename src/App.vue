<template  style="width: 100%">
     <div id="app" class="container">

       <div class="row">
          <menus></menus>
       </div>

       <div class="row">

       <div class="row" style="padding:12px;margin:1px">
            <div class="jumbotron col-lg-12" style="margin:3px">
               <h1>Glass</h1>
              <router-view></router-view>
             </div>
        </div>
        <div class="row" style="padding:12px;margin:1px">
            <div class="jumbotron col-lg-4" style="margin:3px">
               <h4>Glass</h4>
               <h5>Professional freelancers and the essentials to find them.</h5>
               <p><a class="btn btn-primary btn-lg" role="button"> Sign Up</a> </p>
             </div>

             <div class="jumbotron col-lg-4 padJumbotron" style="margin:3px">
                <h4>Glass Pro</h4>
                <h5>Premium talent, pre-vetted and handpicked for you.Full Details</h5>
                <p><a class="btn btn-primary btn-lg" role="button">Sign Up</a> </p>
              </div>

              <div class="jumbotron col-lg-3 padJumbotron" style="margin:3px">
                 <h4>Glass Enterprise</h4>
                 <h5>End-to-end Freelancer Management System.</h5>
                 <p><a class="btn btn-primary btn-lg" role="button">Sign Up</a> </p>
               </div>

           </div>

         </div>
        <div class="row" style="position:static;bottom:0px;z-index:10;opacity:1;background-color:#eee">

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
import Login from './components/component/Login.vue'
import SignUp from './components/component/SignUp.vue'
import router from './router'
import axios from 'axios'

export default {
  beforeCreate: function () { },
  name: 'app',
  components: {axios, router, menus, Login, SignUp},
  router,
  methods: {}
}
</script>

<style scoped>
  bod{
    padding:0px;
    background-color:red;
  }
  padJumbotron{
    margin:15px
  }
</style>
