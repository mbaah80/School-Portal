<template>
	<div>
		<section class="login common-img-bg">
			<!-- Container-fluid starts -->
			<div class="container-fluid">
				<div class="row">
						<div class="col-sm-12">
							<div class="login-card card-block bg-white">
								<form class="md-float-material" action="index.html">
									<div class="text-center txt-primary">
										<h4>OPTUS</h4>
									</div>
									<h3 class="text-center txt-primary">Create an account </h3>
										 <span v-if="msg.loginError" class="alert alert-danger" role="alert" style="margin-bottom:20px">{{msg.loginError}}</span>
										<form @submit.prevent="register">
												<div class="row">
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="firstname" >
												<span v-if="msg.firstname" style="color:red; margin-top:5px">{{msg.firstname}}</span>
												<label>First Name</label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="lastname" >
												<span v-if="msg.lastname" style="color:red; margin-top:5px">{{msg.lastname}}</span>
												<label>Last Name</label>
											</div>
										</div>
									</div>
										<div class="row">
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="id" >
												<span v-if="msg.id" style="color:red; margin-top:5px">{{msg.id}}</span>
												<label>School ID</label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="course" >
												<span v-if="msg.course" style="color:red; margin-top:5px">{{msg.course}}</span>
												<label>Course Study</label>
											</div>
										</div>
									</div>
									<div class="md-input-wrapper">
										<input type="text" class="md-form-control" v-model="year" >
										<span v-if="msg.year" style="color:red; margin-top:5px">{{msg.year}}</span>
										<label>Completion Year</label>
									</div>
									<div class="md-input-wrapper">
										<input type="email" class="md-form-control" v-model="email" >
										<span v-if="msg.email" style="color:red; margin-top:5px">{{msg.email}}</span>
										<label>Email Address</label>
									</div>
									<div class="md-input-wrapper">
										<input type="password" class="md-form-control" v-model="password" >
										<span v-if="msg.password" style="color:red; margin-top:5px">{{msg.password}}</span>
										<label>Password</label>
									</div>
								
									<div class="col-xs-10 offset-xs-1">
										<button type="submit" class="btn btn-primary btn-md btn-block waves-effect waves-light m-b-20"><span id="hideText">Sign up</span><i class="icofont icofont-refresh" id="spinner" style="color:#fff; margin-left:10px; display:none"> Loading...</i>
										</button>
									</div>
										</form>
									<div class="row">
										<div class="col-xs-12 text-center">
											<span class="text-muted">Already have an account?</span>
											<router-link to="/" class="f-w-600 p-l-5"> Sign In Here</router-link>
	
										</div>
									</div>
								</form>
								<!-- end of form -->
							</div>
							<!-- end of login-card -->
						</div>
						<!-- end of col-sm-12 -->
					</div>
					<!-- end of row-->
				</div>
				<!-- end of container-fluid -->
		</section>
	</div>
</template>
<script>
import {fb,db} from '../firebase'
import $ from 'jquery'
export default {
	data() {
		return {
			firstname:'',
			lastname:'',
			id:'',
			course:'',
			year:'',
			email:'',
			password:'',
				 msg:[],
		}
	},
	methods: {
		
		register(){
			 const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
			 //fname
           if(this.firstname ==""){
              this.msg['firstname']="Enter Your firstname";
              return false
          }else{
              this.msg['firstname']=""
          }
		  	 //fname
           if(this.lastname ==""){
              this.msg['lastname']="Enter Your lastname";
              return false
          }else{
              this.msg['lastname']=""
          }
		  	 //id
           if(this.id ==""){
              this.msg['id']="Enter Your school id";
              return false
          }else{
              this.msg['id']=""
          }
		  	 //course
           if(this.course ==""){
              this.msg['course']="Enter Your course";
              return false
          }else{
              this.msg['course']=""
          }
		  	 //year
           if(this.year ==""){
              this.msg['year']="Enter Year completed";
              return false
          }else{
              this.msg['year']=""
          }
          //email
           if(this.email ==""){
              this.msg['email']="Enter email address";
              return false
          }else if(!emailRegex){
              this.msg['email']="Invalid email address";
              return false
          }else{
              this.msg['email']=""
          }
          //password
           if(this.password ==""){
              this.msg['password']="Enter password";
              return false
          }else if(this.password.length < 8){
			  this.msg['password']=" Password must have 8 characters or more.";
			  return false
		  }else{
              this.msg['password']=""
          }
			$('#spinner').show()
			$('#hideText').hide()
			fb.auth().createUserWithEmailAndPassword(this.email, this.password)
			.then((res)=>{
				
				db.collection('users').doc(res.user.uid).set({
					firstname:this.firstname,
					lastname:this.lastname,
					id:this.id,
					course:this.course,
					year:this.year
					
				})

				this.$router.push('/studentHome')
				this.email = ""
				this.password = ""
				this.firstname = ""
				this.lastname = ""
				this.id = ""
				this.year = ""
			}).catch((err)=>{
				 this.msg['loginError'] = err.message
				this.$toast.error(err.message);
				this.email = ""
				this.password = ""
				this.firstname = ""
				this.lastname = ""
				this.id = ""
				this.year = ""
				$('#spinner').hide()
				$('#hideText').show()
			})
		}
	},
}
</script>