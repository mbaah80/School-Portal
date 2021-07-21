<template>
    <div>
        <body class="sidebar-mini fixed">
   <div class="wrapper">
    <studentHeader></studentHeader>
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
                     <h4>Files Request</h4>
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
                              <form  @submit.prevent="requestFile">
                                                                  
                                <div class="form-group row">
                                    <label for="h-email" class="col-md-2 col-form-label form-control-label">Full Name</label>
                                    <div class="col-md-10">
                                        <input type="text" id="h-email" v-model="name" class="form-control" >
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Department</label>
                                    <div class="col-md-10">
                                        <input id="h-pwd" type="text" v-model="department" class="form-control" >
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Course</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="text" v-model="course" class="form-control" >
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                  <label for="exampleSelect1" class="col-md-2 col-form-label form-control-label">Document Type</label>
                                 <div class="col-md-10">
                                         <select class="form-control" id="exampleSelect1" v-model="fileType">
                                            <option>Transcript</option>
                                            <option>Recommendation</option>
                                            <option>English Proficiency</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>

                               
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Date Completed</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="date" v-model="date" class="form-control" >
                                    </div>
                                </div>
                                    
                                <div class="form-group row">
                                    <div class="col-md-9">
                                        <button type="submit" class="btn btn-warning waves-effect waves-light" style="margin-top:20px; margin-left:90%; width:300px">
                                            Submit
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
import studentHeader from '../components/studentsidebar.vue'
export default {
   components:{
      studentHeader
   },
   data() {
       return {
           name:'',
           department:'',
           course:'',
           fileType:'',
           date:''
       }
   },
   methods: {
       requestFile(){
           if(this.name =="" && this.department == "" && this.course =="" && this.fileType == null && this.date ==null){

           }else{

           }
       }
   },
}
</script>