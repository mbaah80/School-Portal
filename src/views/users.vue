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
                     <h4>Users</h4>
                     <router-link to="/adduser" type="button" class="btn btn-warning waves-effect waves-light" style="margin-left:80%">Add User</router-link>
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
                                       <th>Email</th>
                                       <th>Contact</th>
                                       <th>Option</th>
                                    </tr>
                                 </thead>
                                 <tbody>
                                    <tr v-for="user in users" :key="user.id">
                                       <td>{{user.name}}</td>
                                       <td>{{user.position}}</td>
                                       <td>{{user.department}}</td>
                                       <td>{{user.email}}</td>
                                       <td>{{user.contact}}</td>
                                       <td><button type="submit" class="btn btn-danger waves-effect waves-light" @click="del()">X</button></td>
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
import {fb, db} from '../firebase'
export default {
   components:{
      Header
   },
     data() {
      return {
         users:[]
      }
   },
   methods: {
      del(){
         console.log('click')
           db.collection('admin').where('id','==', this.users)
                    .get().then(function(querySnapshot) {
                        querySnapshot.forEach(function(doc) {
                           doc.ref.delete();
                             this.$toast.error("Lecturer Delete Successful");
                  });
                  });
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