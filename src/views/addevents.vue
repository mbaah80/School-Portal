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
                     <h4>Event Posting</h4>
                  </div>
               </div>
            </div>
            <!-- Header end -->

            <!-- Tables start -->
            <!-- Row start -->
            <div class="row">
                <div class="col-md-2"></div>
               <div class="col-sm-8">
                  <!-- Basic Table starts -->
                  <div class="card">
                     <div class="card-block">
                        <div class="row">
                           <div class="col-sm-12 table-responsive">
                              <form  @submit.prevent="eventAdd()">
                                                                  
                                <div class="form-group row">
                                    <label for="h-email" class="col-md-2 col-form-label form-control-label">Event Title</label>
                                    <div class="col-md-10">
                                        <input type="text" id="h-email" v-model="title" class="form-control" >
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Time</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="time" v-model="time" class="form-control" >
                                    </div>
                                </div>
                               
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Date</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="date" v-model="date" class="form-control" >
                                    </div>
                                </div>
                                   <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Venue</label>
                                    <div class="col-md-10">
                                        <input id="h-pwd" type="text" v-model="venue" class="form-control" >
                                    </div>
                                </div>
                                   <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Event Description</label>
                                    <div class="col-md-10">
                                        <textarea v-model="description" id="" cols="30" rows="10" class="form-control"></textarea>
                                    </div>
                                </div>
                                    
                                <div class="form-group row">
                                    <div class="col-md-9">
                                        <button type="submit" class="btn btn-warning waves-effect waves-light" style="margin-top:20px; margin-left:90%; width:300px">
                                             <span id="hideText">Submit</span><i class="icofont icofont-refresh" id="spinner" style="color:#fff; margin-left:10px; display:none"> Loading...</i>
                                        </button>
                                    </div>
                                </div>
                                
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
               
               </div>
               <div class="col-md-2"></div>
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
import {fb,db} from '../firebase'
export default {
   components:{
      Header
   },
   data() {
       return {
           title:'',
           time:'',
           date:'',
           venue:'',
           description:''
       }
   },
   methods: {
       eventAdd(){
           $('#spinner').show()
			$('#hideText').hide()
            let user = fb.auth().currentUser;
            let uid = user.uid;
          db.collection('event').add({
              uid:user.uid,
              title:this.title,
              time:this.time,
              date:this.date,
              venue:this.venue,
              description:this.description
          }).then((res)=>{

              this.title = ""
              this.time = ""
              this.venue =""
              this.date = ""
              this.description = ""
              $('#spinner').hide()
			$('#hideText').show()
             this.$toast.success('Event Posted Successful');
          }).catch((err)=>{
              this.$toast.error('Internal Server Error');
              $('#spinner').hide()
			$('#hideText').show()
             this.title = ""
              this.time = ""
              this.venue =""
              this.date = ""
              this.description = ""
          })
       }
   },
}
</script>