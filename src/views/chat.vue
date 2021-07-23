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
                              <div class="showChat_inner" style="display: inline; height:70%;width:70%; margin-top:5%; margin-right:8%">
                                <form @submit.prevent="chat">
                                    <div class="media chat-inner-header">
                            
                            </div>
                            <div class="media chat-messages">
                                <a class="media-left photo-table" href="#!">
                                <img class="media-object img-circle m-t-5" src="assets/images/avatar-1.png" alt="Generic placeholder image">
                                <div class="live-status bg-success"></div>
                                </a>
                                <div class="media-body chat-menu-content">
                                <div class="">
                                    <p class="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                                    <p class="chat-time">8:20 a.m.</p>
                                </div>
                                </div>
                            </div>
                            <div class="media chat-reply-box">
                                <div class="md-input-wrapper">
                                <input type="text" class="md-form-control" id="inputEmail" name="inputEmail">
                                <label>Share your thoughts</label>
                                <span class="highlight"></span>
                                <span class="bar"></span> 
                                <button type="button" class="chat-send waves-effect waves-light">
                                        <i class="icofont icofont-location-arrow f-20 "></i>
                                    </button>

                                <span class="md-line"></span></div>

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
}
</script>