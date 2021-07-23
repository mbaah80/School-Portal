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
                                <div >
                                   <div v-for="message in messages" :key="message.id">
                                         <div class="media chat-inner-header">
                            
                                        </div>
                                        <div class="media chat-messages">
                                            <a class="media-left photo-table" href="#!">
                                           
                                            </a>
                                            <div class="media-body chat-menu-content">
                                            <div class="">
                                             <p class="chat-cont">[{{message.name}}] <span>{{message.newMessage}}</span> {{dateNow}}</p>
                                            </div>
                                            </div>
                                        </div>
                                   </div>

                                </div>

                               <div>
                                 <CreateMessage  :name="name"> </CreateMessage>
                               </div>
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
import CreateMessage from '../components/createchat.vue'
import { db} from '../firebase'
import moment from 'moment'
export default {
    components:{
          studentHeader,
          CreateMessage
    },
   name:"Chat",
   props:['name'],
   data() {
       return {
           messages:[],
           dateNow:{}
       }
   },
   created() {
        db.collection('message').get()
        .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.messages.push(doc.data());
             const serverDate = doc.data().createdAt
             this.dateNow = moment(serverDate).format('LLL')
          });
        });
   },
}
</script>
<style scoped>
span{
    color:rgb(224, 114, 24);
    font-weight: bolder;
}
</style>