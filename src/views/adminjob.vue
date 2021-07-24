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
                <div class="col-lg-3">
               </div>
              <div class="col-lg-6">
                  <div class="card">
                     <div class="card-block accordion-block">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                           <div class="accordion-panel" v-for="job in jobs" :key="job.id">
                              <div class="accordion-heading" role="tab" id="headingTwo">
                                 <h2 class="card-title accordion-title">
                                <a  class="accordion-msg" data-toggle="collapse" data-parent="#accordion"   :href="'#collapseTwo'+index" aria-expanded="true" aria-controls="collapseOne">
                                    <div class="row">
                                       <div class="col-md-10"> <h3>{{job.title}}</h3></div>
                                       <div class="col-md-2"><small style="color:#fff" type="button" class="btn btn-danger waves-effect waves-light disabled">Delete</small></div>
                                    </div>
                                   
                                    
                                </a>
                              </h2>
                              </div>
                              <div :id="'collapseTwo'+index" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                 <div class="accordion-content accordion-desc">
                                  <div class="row">
                                    <div class="col-md-8">
                                     <h6> <span> Company:</span> <br>{{job.company}}</h6>
                                    </div>
                                     <div class="col-md-4">
                                       <h6><span >GHS</span>{{job.salary}}</h6>
                                    </div>
                                 </div>
                                  <div class="row" style="margin-top:15px; margin-bottom:15px">
                                     <div class="col-md-4">
                                       <h6><span>Apply Email </span> {{job.email}}</h6>
                                    </div>
                                     <div class="col-md-4">
                                       <h6><span>Company Location </span>{{job.venue}}</h6>
                                    </div>
                                      <div class="col-md-4">
                                       <h6><span>Deadline </span> {{job.date}}</h6>
                                    </div>
                                 </div>
                                    <p>
                                    <span>Job Decription </span> <br>  {{job.description}}
                                    </p> <br>
                                    <p><span>Date Posted</span> {{dateNow}}</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- Multiple Open Accordion ends -->
                <!-- Multiple Open Accordion start -->
               <div class="col-lg-3">
               </div>
               <!-- Multiple Open Accordion ends -->

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
    mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.email = user.email

       db.collection("job").get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.jobs.push(doc.data());
              const serverDate = doc.data().createdAt
             this.dateNow = moment(serverDate).format('LLLL')
          });
        });
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