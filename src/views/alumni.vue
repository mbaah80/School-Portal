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
                     <h4>Document Uploading Lab</h4>
                  </div>
               </div>
            </div>
            <!-- Header end -->

            <!-- Tables start -->
            <!-- Row start -->
            <div class="row" style="margin-top:50px">
            <div class="col-sm-2"></div>
               <div class="col-sm-8">
                  <!-- Basic Table starts -->
                  <div class="card">
                     <div class="card-block">
                        <div class="row">
                           <div class="col-sm-12 table-responsive">
                            <form  @submit.prevent="uploadFile()">
                                                                  
                                <div class="form-group row">
                                    <label for="h-email" class="col-md-2 col-form-label form-control-label">File Type</label>
                                    <div class="col-md-10">
                                       <select class="form-control" v-model="fileType">
                                          <option >Transcript</option>
                                          <option >Recommendation Letter</option>
                                          <option >English Proficiency</option>
                                          <option >Other File</option>
                                       </select>
                                        <span v-if="msg.fileType" style="color:red;  margin-top:5px">{{msg.fileType}}</span>
                                    </div>
                                </div>
                                
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Alumni ID</label>
                                    <div class="col-md-10">
                                         <select class="form-control" v-model="id" @change="Idselect($event)">
                                          <option v-for="alumni in alumnis" :key="alumni.id">{{alumni.id}}</option>
                                       </select>
                                        <span v-if="msg.id" style="color:red;  margin-top:5px">{{msg.id}}</span>
                                    </div>
                                </div>
                               
                                <div class="form-group row">
                                    <label for="h-re-pwd" class="col-md-2 col-form-label form-control-label">Date</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" type="date" v-model="date" class="form-control" >
                                         <span v-if="msg.date" style="color:red;  margin-top:5px">{{msg.date}}</span>
                                    </div>
                                </div>
                              
                                   <div class="form-group row">
                                    <label for="h-pwd" class="col-md-2 col-form-label form-control-label">Choose Document</label>
                                    <div class="col-md-10">
                                        <input id="h-re-pwd" ref="fileInput" name="file"  type="file" @change="docPick($event)" class="form-control"  accept="pdf/*">
                                         <span v-if="msg.selectedFile" style="color:red;  margin-top:5px">{{msg.selectedFile}}</span>
                                    </div>
                                </div>
                                    
                                <div class="form-group row">
                                    <div class="col-md-9">
                                        <button type="submit" class="btn btn-warning waves-effect waves-light" style="margin-top:20px; margin-left:90%; width:200px">
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
               <div class="col-sm-2"></div>
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
import {fb,db,st} from '../firebase'
export default {
   components:{
      Header
   },
   data() {
      return {
         alumnis:[],
         date:'',
         id:'',
         fileType:'',
         uploadTask: '',
         selectedFile:'',
         msg:[]
        
      }
   },
   methods: {
         docPick(e){
         this.selectedFile = e.target.files[0]
      },

      uploadFile(file){
           //fileType
           if(this.fileType ==""){
              this.msg['fileType']="Select File Type";
              return false
          }else{
              this.msg['fileType']=""
          }
             //id
           if(this.id ==""){
              this.msg['id']="Select Student ID";
              return false
          }else{
              this.msg['id']=""
          }
              //date
           if(this.date ==""){
              this.msg['date']="Select Date";
              return false
          }else{
              this.msg['date']=""
          }
              //file
           if(this.selectedFile ==""){
              this.msg['selectFile']="Select File ";
              return false
          }else{
              this.msg['selectFile']=""
          }
         $('#spinner').show()
			$('#hideText').hide()
            db.collection('documents').add({
               date:this.date,
               id:this.id,
               fileType:this.fileType
               
            }).then((res)=>{
              
                this.uploadTask = st.ref('pdf/' + this.selectedFile.name).put(file)
                 db.collection('alumniRequest').where('id','==', this.id)
                    .get().then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {
                     doc.ref.delete();
                  });
                  });
               this.date = ""
               this.fileType = ""
               this.uploadTask = ""
               this.id = ""
               this.selectedFile = ""
               this.$toast.success("Data Upload successful",{
            position: "top",
          });
               $('#spinner').hide()
			      $('#hideText').show()
            }).catch((err)=>{
                this.date = ""
               this.fileType = ""
               this.uploadTask = ""
               this.id = ""
               this.selectedFile = ""
                this.$toast.error(err,{
            position: "top",
          });
            })
      },

      Idselect(e){
        
       db.collection("alumniRequest" + this.id).get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
           console.log(doc.data());
          });
        });
      }
},
    mounted() {
       let user = fb.auth().currentUser;
        let uid = user.uid;
        this.email = user.email

       db.collection("alumniRequest").get()
         .then((querySnapshot)=>{
          querySnapshot.forEach((doc)=>{
             this.alumnis.push(doc.data());
          });
        });
   },
}
</script>