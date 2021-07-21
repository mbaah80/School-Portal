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
            <div class="col-lg-2">
               </div>
               <!-- Multiple Open Accordion start -->
               <div class="col-lg-8">
                  <div class="card" >
                    
                     <div class="card-block accordion-block">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                           <div class="accordion-panel" v-for="event in events" :key="event.id">
                              <div class="accordion-heading" role="tab" id="headingOne">
                                 <h3 class="card-title accordion-title">
                                    <a  class="accordion-msg" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                       {{event.title}}
                                    </a>
                              </h3>
                              </div>
                              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                 <div class="accordion-content accordion-desc">
                                 <div class="row">
                                    <div class="col-md-4">
                                       <p>{{event.time}}</p>
                                    </div>
                                     <div class="col-md-4">
                                       <p>{{event.date}}</p>
                                    </div>
                                     <div class="col-md-4">
                                       <p>{{event.vunue}}</p>
                                    </div>
                                 </div>
                                    <p>
                                     {{event.description}}
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
               <div class="col-lg-2">
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
export default {
   components:{
      Header
   },
   data() {
      return {
         events:[]
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
          });
        });
   },
}
</script>