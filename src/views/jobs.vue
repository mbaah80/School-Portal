<template>
    <div>
        <body class="sidebar-mini fixed">
   <div class="loader-bg">
      <div class="loader-bar">
      </div>
   </div>
   <div class="wrapper">
      <studentHeader></studentHeader>
      <div class="content-wrapper">
         <!-- Container-fluid starts -->
         <div class="container-fluid">
            <!-- Main content starts -->

            <!-- Header starts -->
            <div class="row">
               <div class="col-sm-12 p-0">
                  <div class="main-header">
                     <h4>Jobs</h4>
                  </div>
               </div>
            </div>
            <!-- Header ends -->

            <!-- Row start -->
            <div class="row">
               <!-- Multiple Open Accordion start -->
              <div class="col-lg-6">
                  <div class="card">
                     <div class="card-block accordion-block">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                           <div class="accordion-panel">
                              <div class="accordion-heading" role="tab" id="headingTwo">
                                 <h3 class="card-title accordion-title">
                                <a  class="accordion-msg" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                                Lorem Message 1
                                </a>
                            </h3>
                              </div>
                              <div id="collapseTwo" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                 <div class="accordion-content accordion-desc">
                                    <p>
                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                       survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- Multiple Open Accordion ends -->
                <!-- Multiple Open Accordion start -->
               <div class="col-lg-6">
                  <div class="card">
                     <div class="card-block accordion-block">
                        <div id="accordion" role="tablist" aria-multiselectable="true">
                           <div class="accordion-panel">
                              <div class="accordion-heading" role="tab" id="headingOne">
                                 <h3 class="card-title accordion-title">
                                <a  class="accordion-msg" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Lorem Message 1
                                </a>
                            </h3>
                              </div>
                              <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                 <div class="accordion-content accordion-desc">
                                    <p>
                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                       survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- Multiple Open Accordion ends -->

            </div>
            <!-- Row end -->

            <!-- Main content ends -->
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
   }
}
</script>