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
                     <h4>Events</h4>
                  </div>
               </div>
            </div>
            <!-- Header ends -->

            <!-- Row start -->
            <div class="row">
               <!-- Multiple Open Accordion start -->
               <div class="col-lg-6">
                  <div class="card">
                     <div class="card-header">
                        <h5 class="card-header-text">MULTIPLE OPEN ACCORDION</h5>
                     </div>
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
                           <div class="accordion-panel">
                              <div class="accordion-heading" role="tab" id="headingTwo">
                                 <h3 class="card-title accordion-title">
                    <a class="accordion-msg" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Lorem Message 2
                    </a>
                  </h3>
                              </div>
                              <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                 <div class="accordion-content accordion-desc">
                                    <p>
                                       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                       survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                       and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                    </p>
                                 </div>
                              </div>
                           </div>
                           <div class="accordion-panel">
                              <div class=" accordion-heading" role="tab" id="headingThree">
                                 <h3 class="card-title accordion-title">
                    <a class="accordion-msg" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Lorem Message 3
                    </a>
                  </h3>
                              </div>
                              <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
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

               <!-- Single Open Accordion start -->
               <div class="col-lg-6">
                  <div class="card">
                     <div class="card-header">
                        <h5 class="card-header-text">Single Open Accordion</h5>
                     </div>
                     <div class="card-block accordion-block">
                        <div class="accordion-box" id="single-open">
                           <a class="accordion-msg">Lorem Message 1</a>
                           <div class="accordion-desc">
                              <p>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                 survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                                 more .
                              </p>
                           </div>
                           <a class="accordion-msg">Lorem Message 2</a>
                           <div class="accordion-desc">
                              <p>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                 survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                                 more .
                              </p>
                           </div>
                           <a class="accordion-msg">Lorem Message 3</a>
                           <div class="accordion-desc">
                              <p>
                                 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                                 survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                                 more .
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <!-- Single Open Accordion ends -->
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