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
                                        <input type="text" id="h-email" v-model="name" class="form-control" required>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Department</label>
                                    <div class="col-md-10">
                                        <input id="h-pwd" type="text" v-model="department" class="form-control" required>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Course</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="text" v-model="course" class="form-control" required>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                  <label for="exampleSelect1" class="col-md-2 col-form-label form-control-label">Document Type</label>
                                 <div class="col-md-10">
                                         <select class="form-control" id="exampleSelect1" v-model="fileType" required>
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
import {db} from '../firebase'
import studentHeader from '../components/studentsidebar.vue'
import $ from 'jquery'
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
           $('#spinner').show()
			$('#hideText').hide()
            let user = fb.auth().currentUser;
            let uid = user.uid;
          db.collection('alumniRequest').add({
              uid:user.uid,
              name:this.name,
              department:this.department,
              course:this.course,
              fileType:this.fileType,
              date:this.date
          }).then((res)=>{

              this.name = ""
              this.department = ""
              this.course = ""
              this.fileType =""
              this.date = ""
              $('#spinner').hide()
			$('#hideText').show()
              console.log(res)
          }).catch((err)=>{
              console.log(err)
              $('#spinner').hide()
			$('#hideText').show()
            this.name = ""
              this.department = ""
              this.course = ""
              this.fileType =""
              this.date = ""
          })
       }
   },
}
</script>