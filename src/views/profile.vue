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
               <div class="main-header" >

               </div>
            </div>
          

            <!-- 1-3-block row start -->
            <div class="row" style="margin-top:150px">
                <div class="col-md-3"></div>
               <div class="col-lg-6">
                  <div class="card" v-for="user in userProfile" :key="user.id">
                     <div class="user-block-2">
                        <img class="img-fluid" src="assets/images/widget/user-1.png" alt="user-header">
                        <h5> {{user.firstname}} {{user.lastname}}</h5>
                     </div>
                     <div class="card-block">
                        <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-user"></i> School Identification
                              <label class="label label-primary">{{user.id}}</label>
                           </div>
                        </div>

                        <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-users"></i> Course
                              <label class="label label-primary">{{user.course}}</label>
                           </div>

                        </div>
                        <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-picture"></i> Year Completed
                              <label class="label label-primary">{{user.year}}</label>
                           </div>
                        </div>
                        <div class="text-center">
                           <button type="button" class="btn btn-primary waves-effect waves-light text-uppercase">
                                    Update Password
                                </button>
                        </div>
                     </div>
                  </div>
               </div>
                <div class="col-md-3"></div>
            </div>
            
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
             this.userProfile.push(doc.data());
        });
   },
 
}
</script>
  