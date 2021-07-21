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
                     <h4>Add User</h4>
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
                              <form  @submit.prevent="addUser">
                                                                  
                                <div class="form-group row">
                                    <label for="h-email" class="col-md-2 col-form-label form-control-label">Full Name</label>
                                    <div class="col-md-10">
                                        <input type="text" id="h-email" v-model="name" class="form-control" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="email" class="col-md-2 col-form-label form-control-label">Email</label>
                                    <div class="col-md-10">
                                        <input type="email" id="email" v-model="email" class="form-control" >
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Department</label>
                                    <div class="col-md-10">
                                        <input id="h-pwd" type="text" v-model="department" class="form-control" >
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Contact</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="text" v-model="contact" class="form-control" >
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                  <label for="exampleSelect1" class="col-md-2 col-form-label form-control-label">Position</label>
                                 <div class="col-md-10">
                                         <select class="form-control" id="exampleSelect1" v-model="position">
                                            <option>Registrar</option>
                                            <option>Hed Of Department</option>
                                            <option>Senior Lecturer</option>
                                            <option>Lecturer</option>
                                            <option>Administrator</option>
                                        </select>
                                    </div>
                                </div>

                               
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Password</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="password" v-model="password" class="form-control" >
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
import Header from '../components/header.vue'
export default {
   components:{
      Header
   },
   data() {
       return {
           name:'',
           department:'',
           email:'',
           contact:'',
           position:'',
           password:''
       }
   },
   methods: {
       addUser(){
           if(this.name ==""  && this.email =="" && this.department == "" && this.email =="" && this.position == null && this.password ==null){

           }else{

           }
       }
   },
}
</script>