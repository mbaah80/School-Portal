<template>
    <div>
        <body class="sidebar-mini fixed">
   <div class="loader-bg">
      <div class="loader-bar">
      </div>
   </div>
   <div class="wrapper">
      <Header></Header>
      <div class="content-wrapper">
         <!-- Container-fluid starts -->
         <div class="container-fluid">
            <!-- Main content starts -->

            <!-- Header starts -->
            <div class="row">
               <div class="col-sm-12 p-0">
                  <div class="main-header">
                     <h4>Jobs</h4>
                     <router-link to="/addjob" type="button" class="btn btn-warning waves-effect waves-light" style="margin-left:80%">Post Job </router-link>
                  </div>
               </div>
            </div>
            <!-- Header ends -->

         
            <!-- Row start -->
            <div class="row">
               <!-- Multiple Open Accordion start -->
             
              <div class="col-lg-12">
                  <div class="card">
                     <div class="card-block accordion-block">
                        <div class="row" style="padding:30px">
                           <div class="col-md-6" v-for="job in jobs" :key="job.id" style="background-color:#39444E; color:#fff; padding-right:50px; ">
                             <div class="col-md-12" style="padding:30px"> <h3>{{job.id}}</h3></div>

                              <div class="row">
                                    <div class="col-md-8">
                                     <h6 style="color:#fff"> <span> Company:</span> <br>{{job.company}}</h6>
                                    </div>
                                     <div class="col-md-4">
                                       <h6 style="color:#fff"><span >GHS</span>{{job.salary}}</h6>
                                    </div>
                                 </div>
                                  <div class="row" style="margin-top:15px; margin-bottom:15px">
                                     <div class="col-md-4">
                                       <h6 style="color:#fff"><span>Apply Email </span> {{job.email}}</h6>
                                    </div>
                                     <div class="col-md-4">
                                       <h6 style="color:#fff"><span>Company Location </span>{{job.venue}}</h6>
                                    </div>
                                      <div class="col-md-4">
                                       <h6 style="color:#fff"><span>Deadline </span> {{job.date}}</h6>
                                    </div>
                                 </div>
                                    <p style="color:#fff">
                                    <span>Job Decription </span> <br>  {{job.description}}
                                    </p> <br>
                                    <p style="color:#fff"><span>Date Posted</span> {{dateNow}}</p>
                                      <div class="col-md-8" style="margin-top:30px; margin-bottom:30px"><small style="color:#fff" type="submit" class="btn btn-danger waves-effect waves-light" @click="deleteJob(job)">Delete</small></div>
                           </div>
                        </div>

                       
                     </div>
                  </div>
               </div>
              

            </div>
            <!-- Row end -->

            <!-- Main content ends -->
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
import moment from 'moment'
export default {
   components:{
      Header
   },
    data() {
      return {
         jobs:[],
         dateNow:{}
      }
   },
   methods: {
      deleteJob(doc){
      alert(doc)
        db.collection("job").doc(doc.id).delete().then(() => {
                  this.$toast.success("Delete Operation Done Successful",{ position: "top",})
            }).catch((error) => {
                this.$toast.error("Internal Server Error, Check Your Internet",{position: "top", });
            });
      }
   },
   
   //  firestore(){
   //     let user = fb.auth().currentUser;
   //      let uid = user.uid;
   //    return{
   //      jobs: db.collection('job').where("uid", "==", user.uid),
   //    }
   //  },

     firestore(){
       let user = fb.auth().currentUser;
        let uid = user.uid;
      return{
        places: db.collection('place').where("uid", "==", user.uid),
      }
    },

}
</script>
<style scoped>
span{
color: rgb(221, 157, 19);
font-weight: bolder;
}
small{
font-weight: bolder;
color: rgb(221, 157, 19);
}
</style>