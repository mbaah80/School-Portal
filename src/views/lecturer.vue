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
                     <h4>Lecturers</h4>
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
                                       <th>Eamil</th>
                                       <th>Contact</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr v-for="user in users" :key="user.id">
                                       <td>{{user.firstname}} {{user.lastname}}</td>
                                       <td>{{user.position}}</td>
                                       <td>{{user.department}}</td>
                                       <td>{{user.email}}</td>
                                       <td>{{user.contact}}</td>
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
           users:[]
       }
   },
   mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.email = user.email

       db.collection("admin").get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.users.push(doc.data());
          });
        });
   },
}
</script>