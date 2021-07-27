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
                                       <th>Course</th>
                                       <th>Completion Year</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr v-for="alumni in alumnis" :key="alumni.id">
                                       <td>{{alumni.firstname}} {{alumni.lastname}}</td>
                                       <td>{{alumni.id}}</td>
                                       <td>{{alumni.course}}</td>
                                       <td>{{alumni.year}}</td>
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
import {fb,db} from '../firebase'
export default {
   components:{
      Header
   },
   data() {
      return {
         alumnis:[]
      }
   },
    mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.email = user.email

       db.collection("users").get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.alumnis.push(doc.data());
          });
        });
   },
}
</script>