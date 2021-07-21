<template>
    <div>
        <body class="sidebar-mini fixed">
   <div class="wrapper">
    <Header></Header>
      <div class="loader-bg">
         <div class="loader-bar">
         </div>
      </div>

      <div class="content-wrapper">
         <!-- Container-fluid starts -->
         <div class="container-fluid">

            <!-- Header Starts -->
            <div class="row">
               <div class="col-sm-12 p-0">
                  <div class="main-header">
                     <h4>Transcript</h4>
                     <router-link to="/adduser" type="button" class="btn btn-warning waves-effect waves-light" style="margin-left:80%">Add User</router-link>
                  </div>
               </div>
            </div>
            <!-- Header end -->

            <!-- Tables start -->
            <!-- Row start -->
            <div class="row">
               <div class="col-sm-12">
                  <!-- Basic Table starts -->
                  <div class="card">
                     <div class="card-block">
                        <div class="row">
                           <div class="col-sm-12 table-responsive">
                              <table class="table">
                                 <thead>
                                    <tr>
                                       <th>Full Name</th>
                                       <th>Position</th>
                                       <th>Department</th>
                                       <th>Date</th>
                                       <th>Contact</th>
                                       <th>Option</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>Mark</td>
                                       <td>Otto</td>
                                       <td>@mdo</td>
                                       <td>Ducky</td>
                                       <td>024565673</td>
                                       <td><button type="button" class="btn btn-danger waves-effect waves-light">X</button></td>
                                    </tr>
                                   
                                 </tbody>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
               
               </div>
            </div>
            <!-- Row end -->
            <!-- Tables end -->
         </div>

         <!-- Container-fluid ends -->
      </div>
   </div>

</body>
    </div>
</template>
<script>
import Header from '../components/header.vue'
export default {
   components:{
      Header
   }
}
</script>