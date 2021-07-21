<template>
	<div>
		<section class="login common-img-bg">
			<!-- Container-fluid starts -->
			<div class="container-fluid">
				<div class="row">
						<div class="col-sm-12">
							<div class="login-card card-block bg-white">
								<form class="md-float-material" action="index.html">
									<div class="text-center">
										<img src="assets/images/logo-black.png" alt="logo">
									</div>
									<h3 class="text-center txt-primary">Create an account </h3>
										<form @submit.prevent="register">
												<div class="row">
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="firstname" required="">
												<label>First Name</label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="lastname" required="">
												<label>Last Name</label>
											</div>
										</div>
									</div>
										<div class="row">
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="id" required="">
												<label>School ID</label>
											</div>
										</div>
										<div class="col-md-6">
											<div class="md-input-wrapper">
												<input type="text" class="md-form-control" v-model="course" required="">
												<label>Course Study</label>
											</div>
										</div>
									</div>
									<div class="md-input-wrapper">
										<input type="text" class="md-form-control" v-model="year" required="required">
										<label>Completion Year</label>
									</div>
									<div class="md-input-wrapper">
										<input type="email" class="md-form-control" v-model="email" required="required">
										<label>Email Address</label>
									</div>
									<div class="md-input-wrapper">
										<input type="password" class="md-form-control" v-model="password" required="required">
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
			password:''
		}
	},
	methods: {
		register(){
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
				console.log(err)
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