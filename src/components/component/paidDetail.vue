<template>
    <div id="paidDetail">
    
        <div class="panel-heading " style="background-color:#00BBBB;color:white">ያልከፈሉ ተከራይ </div>
    
    
    
        <div style="padding:30px">
    
            <table class="table" style="color:white" v-for="tekeray in data.unpaid">
    
    
    
                <tr>
    
                    <th>Name</th>
    
                    <th>Father Name</th>
    
                    <th>Identification</th>
    
                    <th>Identification type</th>
    
                    <th>PhoneNumber</th>
    
                </tr>
    
    
    
                <tr>
    
                    <td>{{tekeray.Name}}</td>
    
                </tr>
    
                <td>{{tekeray.FatherName}}</td>
    
                <td>{{tekeray.ID}}</td>
    
                </tr>
    
                <td>{{tekeray.IDType}}</td>
    
                </tr>
    
                <td>{{tekeray.PhoneNumber}}</td>
    
                </tr>
    
    
    
            </table>
    
    
    
        </div>
    
    
    
    
    
    </div>
</template>