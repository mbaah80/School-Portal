<template>
    <div>
       
            
         <div class="media chat-reply-box">
                <form @submit.prevent="chat">
                          <div class="md-input-wrapper">
                                                        <input type="text" class="md-form-control"  v-model="newMessage" name="newMessage">
                                                        <span v-if="msg.newMessage" style="color:red;  margin-top:5px">{{msg.newMessage}}</span>
                                                        <label>Share your thoughts</label>
                                                        <span class="highlight"></span>
                                                        <span class="bar"></span> 
                                                        <button type="submit" class="chat-send waves-effect waves-light" >
                                                                <i class="icofont icofont-location-arrow f-20 "></i>
                                                        </button>

                                                        <span class="md-line"></span>
                             </div>                         
                </form>
            </div>

                                                 
      </div>
</template>
<script>
import {db} from '../firebase'
export default {
     props:['name'],
   data() {
       return {
          
           newMessage:'',
           createdAt:Date.now(),
            msg:[],
       }
   },
   methods: {
       chat(){
          if(this.newMessage){
              db.collection('message').add({
                 newMessage: this.newMessage,
                 name:this.name,
                createdAt:this.createdAt

              }).catch((err)=>{
                  console.log(err)
              });
              this.newMessage = ""
              this.msg = ""
          }else{
               this.msg['newMessage']="Say Something!!";
          }
       }
   },
}
</script>