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
                     <h4>Requests</h4>
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
                                       <th>Department</th>
                                       <th>Course</th>
                                       <th>Document Type</th>
                                       <th>Completed Year</th>
                                       <th>Request Date</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr v-for="req in request" :key="req.id">
                                       <td>{{req.name}}</td>
                                       <td>{{req.department}}</td>
                                       <td>{{req.course}}</td>
                                       <td>{{req.fileType}}</td>
                                       <td>{{req.date}}</td>
                                       <td>{{req.date}}</td>
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
import {fb,db} from '../firebase'
export default {
   components:{
      studentHeader
   },
   data() {
       return {
           request:[]
       }
   },
   mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.email = user.email

       db.collection("alumniRequest").where("uid", "==", user.uid).get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.request.push(doc.data());
          });
        });
   },
}
</script>