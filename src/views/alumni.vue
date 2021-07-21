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
                     <h4>Alumni List</h4>
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
                                       <th>School ID</th>
                                       <th>Department</th>
                                       <th>Course</th>
                                       <th>Completion Year</th>
                                       <th>Option</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr>
                                       <td>Mark</td>
                                       <td>Otto</td>
                                       <td>@mdo</td>
                                       <td>Ducky</td>
                                       <td>2017</td>
                                       <td><button type="button" class="btn btn-primary waves-effect waves-light">View</button></td>
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