<script>
import turbo from 'turbo'

export default {
  name: 'warning',
  beforeCreate: function () {
    console.log('Payement warninig')
    turbo.do.payementStat()
    console.log('Payement warninig')
  },
  components: {turbo},
  data: function () {
    return {late: [{'Name': '', 'FatherName': '', 'PhoneNumber': '', 'ShopNumber': ''}]}
  },
  methods: {},
  computed: {}
}
</script>
<style scoped>

</scope>
<template>
    <div id="warning">
    
        <div class="panel-heading " style="background-color:#00BBBB;color:white">የማስጠንቀቂያ ወር የደረሰባቸው</div>
    
        <div style="padding:30px">
    
            <table class="table" style="color:white" v-for="tekeray in late">
    
                <tr>
    
                        <th>ስም</th>
        
                        <th>የአባት ስም</hd>
                        
                        <th>ስልክ ቁጥር</th>

                        <th>የሱቅ ቁጥር</th>
    
                </tr>
    
                <tr>
            
                        <td>{{tekeray.Name}}</td>
            
                        <td>{{tekeray.FatherName}}</td>
            
                        <td>{{tekeray.PhoneNumber}}</td>

                        <td>{{tekeray.ShopNumber}}</td>
    
                </tr>
    
    
    
            </table>
    
    
    
        </div>
    
    
    
    
    
    </div>
</template>
