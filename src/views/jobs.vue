<template>
    <div>
        <body class="sidebar-mini fixed">
   <div class="loader-bg">
      <div class="loader-bar">
      </div>
   </div>
   <div class="wrapper">
      <studentHeader></studentHeader>
      <div class="content-wrapper">
         <!-- Container-fluid starts -->
         <div class="container-fluid">
            <!-- Main content starts -->

            <!-- Header starts -->
            <div class="row">
               <div class="col-sm-12 p-0">
                  <div class="main-header">
                     <h4>Jobs</h4>
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
                                 <h3 class="card-title accordion-title">
                                <a  class="accordion-msg" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                    {{job.title}}
                                </a>
                            </h3>
                              </div>
                              <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                 <div class="accordion-content accordion-desc">
                                  <div class="row">
                                    <div class="col-md-4">
                                       <p>{{job.company}}</p>
                                    </div>
                                     <div class="col-md-4">
                                       <p>{{job.salary}}</p>
                                    </div>
                                 </div>
                                  <div class="row">
                                     <div class="col-md-4">
                                       <p><span>Apply Email</span>{{job.email}}</p>
                                    </div>
                                     <div class="col-md-4">
                                       <p><span>Company Location </span>{{job.vunue}}</p>
                                    </div>
                                      <div class="col-md-4">
                                       <p><span>Deadline</span> {{job.date}}</p>
                                    </div>
                                 </div>
                                    <p>
                                    <span>Job Decription</span>  {{job.description}}
                                    </p>
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
import studentHeader from '../components/studentsidebar.vue'
import {fb, db} from '../firebase'
export default {
   components:{
      studentHeader
   },
    data() {
      return {
         jobs:[]
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
</style>