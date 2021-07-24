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
                                       <th>Department</th>
                                       <th>Course</th>
                                       <th>Document Type</th>
                                       <th>Completed Year</th>
                                       <th>Request Date</th>
                                       <th>Upload File</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr v-for="alumni in alumnis" :key="alumni.id">
                                       <td>{{alumni.name}}</td>
                                       <td>{{alumni.department}}</td>
                                       <td>{{alumni.course}}</td>
                                       <td>{{alumni.fileType}}</td>
                                       <td>{{alumni.date}}</td>
                                       <td>{{dateNow}}</td>
                                       <td><router-link to="" type="button" class="btn btn-primary waves-effect waves-light">Upload</router-link></td>
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
import moment from 'moment'
export default {
   components:{
      Header
   },
   data() {
      return {
         alumnis:[],
         dateNow:{}
      }
   },
    mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.email = user.email

       db.collection("alumniRequest").get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.alumnis.push(doc.data());
              const serverDate = doc.data().createdAt
             this.dateNow = moment(serverDate).format('LL')
          });
        });
   },
}
</script>