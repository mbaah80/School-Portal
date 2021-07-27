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
               <div class="main-header" >
                  <h4>Profile Page</h4>
               </div>
            </div>
          

            <!-- 1-3-block row start -->
            <div class="row" style="margin-top:150px">
                <div class="col-md-3"></div>
               <div class="col-lg-6">
                  <div class="card" v-for="user in userProfile" :key="user.id">
                     <div class="card-block">
                      <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-user"></i> Name
                              <label class="label label-primary">{{user.name}}</label>
                           </div>
                        </div>
                        <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-user"></i> Department
                              <label class="label label-primary">{{user.department}}</label>
                           </div>
                        </div>

                        <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-users"></i> Contact
                              <label class="label label-primary">{{user.contact}}</label>
                           </div>

                        </div>
                         <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-users"></i> Email
                              <label class="label label-primary">{{user.email}}</label>
                           </div>

                        </div>
                        <div class="user-block-2-activities">
                           <div class="user-block-2-active">
                              <i class="icofont icofont-picture"></i> Position
                              <label class="label label-primary">{{user.position}}</label>
                           </div>
                        </div>
                        <!--<div class="text-center">
                           <button type="button" class="btn btn-primary waves-effect waves-light text-uppercase">
                                    Update Password
                                </button>
                        </div>-->
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
import Header from '../components/header.vue'
import {fb,db} from '../firebase'
export default {
   components:{
      Header
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

       db.collection("admin").doc(user.uid).get()
         .then((doc)=>{
             this.userProfile.push(doc.data());
        });
   },
 
}
</script>
  