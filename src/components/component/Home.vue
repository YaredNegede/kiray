<script>
import Turbo from 'turbo'

export default {
  name: 'home',
  beforeCreate: function () {
    this.$router.push('login')
  },
  data: function () {
    return {show: true}
  },
  components: {Turbo},
  computed: {
    name () {
      return (typeof this.data.Name === 'undefined' || this.data.Name === null) ? '' : this.data.Name
    },
    fatherName () {
      return (typeof this.data.FatherName === 'undefined' || this.data.FatherName === null) ? '' : this.data.FatherName
    },
    id () {
      return (typeof this.data.ID === 'undefined' || this.data.ID === null) ? '' : this.data.ID
    },
    IDType () {
      return (typeof this.data.IDType === 'undefined' || this.data.IDType === null) ? '' : this.data.IDType
    },
    phoneNumber () {
      return (typeof this.data.PhoneNumber === 'undefined' || this.data.PhoneNumber === null) ? '' : this.data.PhoneNumber
    },
    shopNumber () {
      return (typeof this.data.ShopNumber === 'undefined' || this.data.ShopNumber === null) ? '' : this.data.ShopNumber
    }
  },
  methods: {
    addInfo () {
      console.log('add information')
      if (this.$store.getters.getUser.authenticated) {
        this.show = false
        this.$router.push('/addInformation')
      } else {
        this.$store.state.surf.rediretTo = '/addInformation'
        this.$router.push('/home/login')
      }
    },
    viewInfo () {
      console.log('veiw information')
      if (this.$store.getters.getUser.authenticated) {
        this.show = false
        this.$router.push('/contractDetail')
      } else {
        this.$store.getters.getSurf.rediretTo = '/contractDetail'
        this.$router.push('/home/login')
      }
    }
  }
}
</script>

<style scoped>

	.home{
		padding: 100px;
		color:white;
	}  
	h1{
		color:white
	}
	h2{
		color:white
	}

	p{
		color:white
	}

	input{
		background-color:#00AAAA
	}

</style>
 
  <template >
    
      <div id="home">
        <div class="col-md-1"></div>
            
                  <div class="jumbotron" style="background-color:#00AAAA;">
                  
                  <div class="row">
                     <div class="col-md-2"></div>
                      <div class="col-md-6">
                        <h1><b>ባላሱር ሕንጻ</b></h1>
                      
                      </div>
                  </div>
                    
                    
                  <p>
                  <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-6">
                          <router-view class="row">

                          </router-view>
                    </div>
                    <div class="col-md-1"></div>
                </div>

          </p>
      
          <div class="col-md-1"></div>
      
          
            </div>
          
        </div>
   	  </div>

  </template>
