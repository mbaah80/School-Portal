<template>

<div class="sidebar-mini fixed">
   <div class="loader-bg">
      <div class="loader-bar">
      </div>
   </div>
   <div class="wrapper">
   <studentHeader></studentHeader>
     
      <div class="content-wrapper">
         <!-- Container-fluid starts -->
         <!-- Main content starts -->
         <div class="container-fluid">
            <div class="row">
               <div class="main-header" v-for="user in userProfile" :key="user.id">
                  <h4> 🗣 {{user.firstname}} {{user.lastname}}</h4>
               </div>
            </div>
            <!-- 4-blocks row start -->
            <div class="row dashboard-header">
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Events</span>
                     <h2 class="dashboard-total-products">4500</h2>
                     <div class="side-box">
                        <i class="ti-signal text-warning-color"></i>
                     </div>
                  </div>
               </div>
                 <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Jobs</span>
                     <h2 class="dashboard-total-products">$<span>30,780</span></h2>
                     <div class="side-box">
                        <i class="ti-direction-alt text-success-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Requested Transcript</span>
                     <h2 class="dashboard-total-products">37,500</h2>
                     <div class="side-box ">
                        <i class="ti-gift text-primary-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Total Dues Paid </span>
                     <h2 class="dashboard-total-products">$<span>30,780</span></h2>
                     <div class="side-box">
                        <i class="ti-rocket text-danger-color"></i>
                     </div>
                  </div>
               </div>
            </div>
            <!-- 4-blocks row end -->

            <div class="row">
               <div class="col-xl-12 col-lg-12">
                  <div class="card">
                     <div class="card-block">
                        <div class="table-responsive">
                           <table class="table m-b-0 photo-table">
                              <thead>
                                 <tr class="text-uppercase">
                                    <th>Officer Name</th>
                                    <th>Department</th>
                                    <th>Course</th>
                                    <th>Recieved Date</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th>
                                       Danniel
                                    </th>
                                    <td>Appestia Project
                                       <p><i class="icofont icofont-clock-time"></i>Created 14.9.2016</p>
                                    </td>
                                    <td>
                                       <span class="pie" style="display: none;">226,134</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 1 1 4.209902994920235 25.41987555688496 L 15 15" fill="#2196F3"></path><path d="M 4.209902994920235 25.41987555688496 A 15 15 0 0 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                    </td>
                                    <td>October 21, 2015</td>
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
      </div>
   </div>


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
          userProfile:[]
       }
    },
    methods: {
       logout(){
          fb.auth().signOut()
          this.$router.push('/')
       }
    },

     mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.name = user.email

       db.collection("users").doc(user.uid).get()
         .then((doc)=>{
            this.userProfile.push(doc.data())
        });
   },
 
}
</script>
  