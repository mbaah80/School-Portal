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
                     <h4>Events</h4>
                      <router-link to="/addevents" type="button" class="btn btn-warning waves-effect waves-light" style="margin-left:80%">Post Event </router-link>
                  </div>
               </div>
            </div>
            <!-- Header ends -->

   <!-- Row start -->
            <div class="row">
            <div class="col-lg-3">
               </div>
               <!-- Multiple Open Accordion start -->
               <div class="col-lg-6">
                  <div class="card" >                   
                     <div class="card-block accordion-block">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                         <div class="accordion-panel" v-for="ev in events" :key="ev.id">
                              <div class="accordion-heading" role="tab" id="headingTwo">
                                 <h2 class="card-title accordion-title">
                                <a  class="accordion-msg" data-toggle="collapse" data-parent="#accordion"   :href="'#collapseTwo'+index" aria-expanded="true" aria-controls="collapseOne">
                                    <div class="row">
                                       <div class="col-md-8"> <h3>{{ev.title}}</h3></div>
                                       <div class="col-md-8"> <h3>{{dateNow}}</h3></div>
                                        <div class="col-md-2"><small style="color:#fff" type="button" class="btn btn-danger waves-effect waves-light disabled">Delete</small></div>
                                    </div>
                                </a>
                              </h2>
                              </div>
                              <div :id="'collapseTwo'+index" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                 <div class="accordion-content accordion-desc">
                                  <div class="row" style="margin-top:15px; margin-bottom:15px">
                                     <div class="col-md-4">
                                       <h6><span>Event Time </span> {{ev.time}}</h6>
                                    </div>
                                     <div class="col-md-4">
                                       <h6><span>Event Date </span>{{ev.date}}</h6>
                                    </div>
                                      <div class="col-md-4">
                                       <h6><span>Event Venue </span> {{ev.venue}}</h6>
                                    </div>
                                 </div>
                                    <p>
                                    <span>Job Decription </span> <br>  {{ev.description}}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- Multiple Open Accordion ends -->

               <!-- Single Open Accordion start -->
               <div class="col-lg-3">
               </div>
               <!-- Single Open Accordion ends -->
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
         events:[],
         dateNow:{}
      }
   },
    mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.email = user.email

       db.collection("event").get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.events.push(doc.data());
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