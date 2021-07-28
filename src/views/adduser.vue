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
import {fb, db} from '../firebase'
export default {
   components:{
      Header
   },
   data() {
       return {
           name:'',
           lastname:'',
           department:'',
           email:'',
           contact:'',
           position:'',
           password:'',
           createdAt:Date.now()
       }
   },
   methods: {
       addUser(){
        	$('#spinner').show()
			$('#hideText').hide()

            //  let admin = {
            //     role: {
            //         admin: true,
            //         },
            // }
			fb.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then((res)=>{
				//    if (res) {
                //         const setAdmin = firebase.functions().httpsCallable("setAdmin");
                //         const data = { uid: res.user.uid, role: admin.role };
                //         setAdmin(data)
                //     }
				db.collection('admin').doc(res.user.uid).set({
                    email:this.email,
					name:this.name,
					department:this.department,
					contact:this.contact,
					position:this.position,
                    createdAt:this.createdAt
					
				})
				this.email = ""
				this.password = ""
				this.name = ""
				this.department = ""
				this.contact = ""
                this.position=""
                this.$toast.success('User Account Added',{
            position: "top",
          });
			}).catch((err)=>{
				
				this.$toast.error(err.message,{
            position: "top",
          });
			    this.email = ""
				this.password = ""
				this.name = ""
				this.lastname = ""
				this.department = ""
				this.contact = ""
                this.position=""
				$('#spinner').hide()
				$('#hideText').show()
			})
       }
   },
}
</script>