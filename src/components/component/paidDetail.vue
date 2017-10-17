<script>
export default {
  name: 'paidDetail',
  beforeCreate: function () {},
  components: {},
  data: function () {
    return {}
  },
  methods: {},
  computed: {
    paid: function () {
      return [{'Name': '', 'FatherName': '', 'ID': '', 'IDType': '', 'PhoneNumber': '', 'ShopNumber': ''}]
    },
    id: function () {}
  }
}
</script>
<style scoped>
 .theme{
     
 }

</scope>

<template>

    <div id="paidDetail">
    
        <div class="panel-heading" style="background-color:#00BBBB; color:white">ያልከፈሉ ተከራዮች</div>
    
        <div style="padding:30px">
    
            <table class="table" style="color:white" v-for="data in paid">
    
                <tr>
        
                    <th>ስም</th>
    
                    <th>የአባት ስም</hd>
                    
                    <th>ስልክ ቁጥር</th>

                    <th>የሱቅ ቁጥር</th>
    
                </tr>
    
                <tr>
            
                    <td>{{data.Name}}</td>
        
                    <td>{{data.FatherName}}</td>
        
                    <td>{{data.PhoneNumber}}</td>
                    
                    <td>{{data.ShopNumber}}</td>
            
                </tr>
    
            </table>
    
        </div>
    
    </div>

</template>
