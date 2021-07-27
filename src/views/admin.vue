<template>

<div class="sidebar-mini fixed">
   <div class="loader-bg">
      <div class="loader-bar">
      </div>
   </div>
   <div class="wrapper">
   <Header></Header>
     
      <div class="content-wrapper">
         <!-- Container-fluid starts -->
         <!-- Main content starts -->
         <div class="container-fluid">
            <div class="row">
               <div class="main-header">
                  <h4>Dashboard</h4>
               </div>
            </div>
            <!-- 4-blocks row start -->
            <div class="row dashboard-header">
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Total Alumni</span>
                     <h2 class="dashboard-total-products">{{studentTotal}}</h2>
                     <div class="side-box">
                        <i class="ti-signal text-warning-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Total Lecturers</span>
                     <h2 class="dashboard-total-products">{{lecTotal}}</h2>
                     <div class="side-box ">
                        <i class="ti-gift text-primary-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Total Document Send</span>
                     <h2 class="dashboard-total-products"><span>{{doc}}</span></h2>
                     <div class="side-box">
                        <i class="ti-direction-alt text-success-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Total File Request </span>
                     <h2 class="dashboard-total-products"><span>{{request}}</span></h2>
                     <div class="side-box">
                        <i class="ti-rocket text-danger-color"></i>
                     </div>
                  </div>
               </div>
            </div>
            <!-- 4-blocks row end -->


            <!-- 2-1 block start -->
            <div class="row">
              <div class="main-header">
                  <h4>Alumni Request</h4>
               </div>
               <div class="col-xl-12 col-lg-12">
                  <div class="card">

                     <div class="card-block">
                        <div class="table-responsive">
                           <table class="table m-b-0 photo-table">
                              <thead>
                                    <tr>
                                       <th>Full Name</th>
                                       <th>School ID</th>
                                       <th>Department</th>
                                       <th>Course</th>
                                       <th>Document Type</th>
                                       <th>Completed Year</th>
                                       <th>Request Date</th>
                                    </tr>  
                              </thead>
                              <tbody>
                                <tr v-for="alumni in alumnis" :key="alumni.id">
                                       <td>{{alumni.name}}</td>
                                       <td>{{alumni.id}}</td>
                                       <td>{{alumni.department}}</td>
                                       <td>{{alumni.course}}</td>
                                       <td>{{alumni.fileType}}</td>
                                       <td>{{alumni.date}}</td>
                                       <td>{{dateNow}}</td>
                                    </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
             
            </div>
            <!-- 2-1 block end -->
         </div>
         <!-- Main content ends -->
         <!-- Container-fluid ends -->
         <div class="fixed-button">
            <a href="#!" class="btn btn-md btn-primary">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i> Upgrade To Pro
            </a>
         </div>
      </div>
   </div>


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
         dateNow:{},
         studentTotal:{},
         lecTotal:{},
         doc:{},
         request:{}
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

        db.collection('users').get().then(snap => {
           this.studentTotal =  snap.size // will return the collection size
         });
         db.collection('admin').get().then(snap => {
           this.lecTotal =  snap.size // will return the collection size
         });
          db.collection('documents').get().then(snap => {
           this.doc =  snap.size // will return the collection size
         });
          db.collection('alumniRequest').get().then(snap => {
           this.request =  snap.size // will return the collection size
         });
   },
}
</script>
  