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
                     <h4>Job Posting</h4>
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
                              <form  @submit.prevent="jobAdd()">
                                                                  
                                <div class="form-group row">
                                    <label for="h-email" class="col-md-2 col-form-label form-control-label">Job Heading</label>
                                    <div class="col-md-10">
                                        <input type="text" id="h-email" v-model="title" class="form-control" >
                                    </div>
                                </div>
                                  <div class="form-group row">
                                    <label for="c-email" class="col-md-2 col-form-label form-control-label">Company</label>
                                    <div class="col-md-10">
                                        <input type="text" id="c-email" v-model="company" class="form-control" >
                                    </div>
                                </div>
                                  <div class="form-group row">
                                    <label for="e-email" class="col-md-2 col-form-label form-control-label">Apply Email</label>
                                    <div class="col-md-10">
                                        <input type="text" id="e-email" v-model="email" class="form-control" >
                                    </div>
                                </div>
                                   <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Location</label>
                                    <div class="col-md-10">
                                        <input id="h-pwd" type="text" v-model="venue" class="form-control" >
                                    </div>
                                </div>
                                   <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Job Description</label>
                                    <div class="col-md-10">
                                        <textarea v-model="description" id="" cols="30" rows="10" class="form-control"></textarea>
                                    </div>
                                </div>
                                            
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Salary</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="number" v-model="salary" class="form-control" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Deadline</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="date" v-model="date" class="form-control" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-md-9">
                                        <button type="submit" class="btn btn-warning waves-effect waves-light" style="margin-top:20px; margin-left:90%; width:300px">
                                             <span id="hideText">Post</span><i class="icofont icofont-refresh" id="spinner" style="color:#fff; margin-left:10px; display:none"> Loading...</i>
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
import {fb,db} from '../firebase'
import Header from '../components/header.vue'
export default {
   components:{
      Header
   },
   data() {
       return {
           title:'',
           company:'',
           email:'',
           salary:'',
           date:'',
           venue:'',
           description:''
       }
   },
   methods: {
       jobAdd(){
          $('#spinner').show()
			$('#hideText').hide()
            let user = fb.auth().currentUser;
            let uid = user.uid;
          db.collection('job').add({
              uid:user.uid,
              title:this.title,
              company:this.company,
              email:this.email,
              salary:this.salary,
              date:this.date,
              venue:this.venue,
              description:this.description
          }).then((res)=>{
              this.company=""
              this.title = ""
              this.email = ""
              this.salary = ""
              this.venue =""
              this.date = ""
              this.description = ""
              $('#spinner').hide()
			$('#hideText').show()
             this.$toast.success('Job Posted Successful');
          }).catch((err)=>{
              this.$toast.error('Internal Server Error');
              $('#spinner').hide()
			$('#hideText').show()
            this.company =""
             this.title = ""
              this.email = ""
              this.salary = ""
              this.venue =""
              this.date = ""
              this.description = ""
          })
       }
   },
}
</script>