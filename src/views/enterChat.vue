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
                     <h4>Welcome To Forum</h4>
                  </div>
               </div>
            </div>
            <!-- Header end -->

            <!-- Tables start -->
            <!-- Row start -->
            <div class="row">
               <div class="col-sm-12">
                  <!-- Basic Table starts -->
                  <div class="row">
                           <div class="col-sm-12 table-responsive">
                             <div class="login-card card-block" style="margin:200px; width:40%; margin-left:30%">
                                        <form @submit.prevent="enterChat">
                                            <div class="row">
                                            <div class="col-md-12">
                                                <div class="md-input-wrapper">
                                                    <input type="text" v-model="name" class="md-form-control" placeholder="John Doe"/>
                                                    <label>Enter Fullname</label>
                                                     <span v-if="msg.name" style="color:red;  margin-top:5px">{{msg.name}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-xs-10 offset-xs-1">
                                                <button type="submit" class="btn btn-primary btn-md btn-block waves-effect waves-light m-b-20"> <span id="hideText">Enter Chatroom</span><i class="icofont icofont-refresh" id="spinner" style="color:#fff; margin-left:10px; display:none"> Loading...</i>
                                                </button>
                                            </div>
                                        </div>
						</form>
				            </div>
                           </div>
                        </div>
               
               </div>
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
            msg:[],
       }
   },
   methods: {
       enterChat(){
             //email
           if(this.name ==""){
              this.msg['name']="Enter your name";
              return false
          }else{
              this.msg['name']=""
          }

          if(this.name){
              this.$router.push({name: 'Chat', params:{name:this.name}})
          }{
               this.msg['name']="Enter your name";
          }
       }
   },
}
</script>