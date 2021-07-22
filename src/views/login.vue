<template>

<div>
<section class="login p-fixed d-flex text-center bg-primary common-img-bg">
	<!-- Container-fluid starts -->
	<div class="container-fluid">
		<div class="row">

			<div class="col-sm-12">
				<div class="login-card card-block">
					<form class="md-float-material">
						<div class="text-center">
							<img src="assets/images/logo-black.png" alt="logo">
						</div>
						<h3 class="text-center txt-primary">
							Sign In to your account
						</h3>
						<form @submit.prevent="login">
							<div class="row">
							<div class="col-md-12">
								<div class="md-input-wrapper">
									<input type="email" v-model="email" class="md-form-control"/>
									 <span v-if="msg.email" style="color:red;  margin-top:5px">{{msg.email}}</span>
									<label>Email</label>
								</div>
							</div>
							<div class="col-md-12">
								<div class="md-input-wrapper">
									<input type="password" v-model="password" class="md-form-control"/>
									<span v-if="msg.password" style="color:red; margin-top:5px">{{msg.password}}</span>
									<label>Password</label>
								</div>
							</div>
							<div class="col-sm-6 col-xs-12">
							<div class="rkmd-checkbox checkbox-rotate checkbox-ripple m-b-25">
								<label class="input-checkbox checkbox-primary">
									<input type="checkbox" id="checkbox">
									<span class="checkbox"></span>
								</label>
								<div class="captions">Remember Me</div>

							</div>
								</div>
							<div class="col-sm-6 col-xs-12 forgot-phone text-right">
								<router-link to="/forgot-password" class="text-right f-w-600"> Forget Password?</router-link>
								</div>
						</div>
						<div class="row">
							<div class="col-xs-10 offset-xs-1">
								<button type="submit" class="btn btn-primary btn-md btn-block waves-effect waves-light m-b-20"> <span id="hideText">Login</span><i class="icofont icofont-refresh" id="spinner" style="color:#fff; margin-left:10px; display:none"> Loading...</i>
										</button>
							</div>
						</div>
						</form>
						<!-- <div class="card-footer"> -->
						<div class="col-sm-12 col-xs-12 text-center">
							<span class="text-muted">Don't have an account?</span>
							<router-link to="/register" class="f-w-600 p-l-5">Sign up Now</router-link>
						</div>

						<!-- </div> -->
					</form>
					<!-- end of form -->
				</div>
				<!-- end of login-card -->
			</div>
			<!-- end of col-sm-12 -->
		</div>
		<!-- end of row -->
	</div>
	<!-- end of container-fluid -->
</section>

</div>
</template>

<script>
import {fb, db} from '../firebase'
export default {
	data() {
		return {
			email:'',
			password:'',
			 msg:[],
		}
	},
	
	methods: {
		login(){
			 const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email);
           
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
			fb.auth().signInWithEmailAndPassword(this.email, this.password)
			.then((res)=>{
				
				if(res.admin){
					this.$router.push('/admin')
					 this.$toast.success('Admin Logging In');
				}else{
					this.$router.push('/studentHome')
					 this.$toast.success('Alumni Logging In');
				}
				this.email = ""
				this.password = ""
			}).catch((err)=>{
				this.email = ""
				this.password = ""
			$('#spinner').hide()
			$('#hideText').show()
				 this.$toast.error(err.message);
			})
		}
	},
}
</script>