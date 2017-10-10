<template>
    <div id="warning">
    
        <div class="panel-heading " style="background-color:#00BBBB;color:white">የማስጠንቀቂያ ወር የደረሰ</div>
    
        <div style="padding:30px">
    
    
    
            <table class="table" style="color:white" v-for="tekeray in data.late">
    
                <tr>
    
                    <th>Name</th>
    
                    <th>Father Name</hd>
    
                        <th>ID</th>
    
                        <th>Identification type</th>
    
                        <th>PhoneNumber</th>
    
                </tr>
    
    
    
                <tr>
    
                    <td>{{tekeray.Name}}</td>
    
                </tr>
    
                <td>{{tekeray.FatherName}}</td>
    
                </tr>
    
                <td>{{tekeray.ID}}</td>
    
                </tr>
    
                <td>{{tekeray.IDType}}</td>
    
                <td>{{tekeray.PhoneNumber}}</td>
    
                </tr>
    
    
    
            </table>
    
    
    
        </div>
    
    
    
    
    
    </div>
</template>