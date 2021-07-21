<template>
	<div>
		<section class="login p-fixed d-flex text-center bg-primary common-img-bg">
			<div class="container-fluid">
				<div class="row">
					   <div class="col-xs-12">
							<div class="login-card card-block">
								<form class="md-float-material">
									<div class="text-center">
										<img src="assets/images/logo-black.png" alt="logo">
									</div>
									<h3 class="text-primary text-center m-b-25">Recover your password</h3>
	
									<form @submit.prevent="ResetPassword">
										<div class="md-group">
										<div class="md-input-wrapper">
											<input type="text" v-model="email" class="md-form-control" />
											<label>Email</label>
										</div>
									</div>
									<div class="btn-forgot">
										<button type="reset" class="btn btn-primary btn-md waves-effect waves-light text-center">SEND RESET LINK
										</button>
									</div>
									</form>
									<div class="row">
										<div class="col-xs-12 text-center m-t-25">
	
											<router-link to="/" class="f-w-600 p-l-5"> Sign In Here</router-link>
	
										</div>
									</div>
							<!-- end of btn-forgot class-->
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
export default {
	data() {
		return {
			email:''
		}
	},
	methods: {
		ResetPassword(){
			
		}
	},
}
</script>