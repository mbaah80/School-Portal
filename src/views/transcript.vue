<template>
    <div>
        <body class="sidebar-mini fixed">
   <div class="wrapper">
    <studentHeader></studentHeader>
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
                     <h4>Files Recieved</h4>
                     <router-link to="/transcriptRequest" type="button" class="btn btn-warning waves-effect waves-light" style="margin-left:80%">Request Files </router-link>
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
                                       <th>#</th>
                                       <th>First Name</th>
                                       <th>Last Name</th>
                                       <th>Username</th>
                                       <th>Date</th>
                                       <th>Option</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>1</td>
                                       <td>Mark</td>
                                       <td>Otto</td>
                                       <td>@mdo</td>
                                       <td>Ducky</td>
                                       <td><button type="button" class="btn btn-primary waves-effect waves-light">Download</button></td>
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
import studentHeader from '../components/studentsidebar.vue'
export default {
   components:{
      studentHeader
   }
}
</script>