<template>

<div class="sidebar-mini fixed">
   <div class="loader-bg">
      <div class="loader-bar">
      </div>
   </div>
   <div class="wrapper">
   <Header></Header>
     
      <div class="content-wrapper">
         <!-- Container-fluid starts -->
         <!-- Main content starts -->
         <div class="container-fluid">
            <div class="row">
               <div class="main-header">
                  <h4>Dashboard</h4>
               </div>
            </div>
            <!-- 4-blocks row start -->
            <div class="row dashboard-header">
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Students Total</span>
                     <h2 class="dashboard-total-products">4500</h2>
                     <div class="side-box">
                        <i class="ti-signal text-warning-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Male</span>
                     <h2 class="dashboard-total-products">37,500</h2>
                     <div class="side-box ">
                        <i class="ti-gift text-primary-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Female</span>
                     <h2 class="dashboard-total-products">$<span>30,780</span></h2>
                     <div class="side-box">
                        <i class="ti-direction-alt text-success-color"></i>
                     </div>
                  </div>
               </div>
               <div class="col-lg-3 col-md-6">
                  <div class="card dashboard-product">
                     <span>Total Dues Collected </span>
                     <h2 class="dashboard-total-products">$<span>30,780</span></h2>
                     <div class="side-box">
                        <i class="ti-rocket text-danger-color"></i>
                     </div>
                  </div>
               </div>
            </div>
            <!-- 4-blocks row end -->

            <!-- 1-3-block row start -->
            <div class="row">
               <div class="col-lg-4">
                  <div class="card">
                     <div class="user-block-2">
                        <img class="img-fluid" src="assets/images/widget/user-1.png" alt="user-header">
                        <h5>Josephin Villa</h5>
                        <h6>School admin</h6>
                     </div>
                  </div>
               </div>
               <div class="col-lg-8">
                  <div class="card">
                     <div class="card-header">
                        <h5 class="card-header-text">Bar chart</h5>
                     </div>
                     <div class="card-block">
                        <div id="barchart" style="min-width: 250px; height: 330px; margin: 0 auto"></div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- 1-3-block row end -->

            <!-- 2-1 block start -->
            <div class="row">
               <div class="col-xl-12 col-lg-12">
                  <div class="card">
                     <div class="card-block">
                        <div class="table-responsive">
                           <table class="table m-b-0 photo-table">
                              <thead>
                                 <tr class="text-uppercase">
                                    <th>Photo</th>
                                    <th>Name</th>
                                    <th>Department</th>
                                    <th>Course</th>
                                    <th>Completed Year</th>
                                 </tr>
                              </thead>
                              <tbody>
                                 <tr>
                                    <th>
                                       <img class="img-fluid img-circle" src="assets/images/avatar-2.png" alt="User">
                                    </th>
                                    <td>Appestia Project
                                       <p><i class="icofont icofont-clock-time"></i>Created 14.9.2016</p>
                                    </td>
                                    <td>
                                       <span class="pie" style="display: none;">226,134</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 1 1 4.209902994920235 25.41987555688496 L 15 15" fill="#2196F3"></path><path d="M 4.209902994920235 25.41987555688496 A 15 15 0 0 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                    </td>
                                    <td>50%</td>
                                    <td>October 21, 2015</td>
                                 </tr>
                                 <tr>
                                    <th>
                                       <img class="img-fluid img-circle" src="assets/images/avatar-4.png" alt="User">
                                    </th>
                                    <td>Contract with belife Company
                                       <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                    </td>
                                    <td>
                                       <span class="pie" style="display: none;">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                    </td>
                                    <td>70%</td>
                                    <td>November 21, 2015</td>
                                 </tr>
                                 <tr>
                                    <th>
                                       <img class="img-fluid img-circle" src="assets/images/avatar-1.png" alt="User">
                                    </th>
                                    <td>Web Consultancy project
                                       <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                    </td>
                                    <td>
                                       <span class="pie" style="display: none;">1,4</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 29.265847744427305 10.36474508437579 L 15 15" fill="#2196F3"></path><path d="M 29.265847744427305 10.36474508437579 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                    </td>
                                    <td>40%</td>
                                    <td>September 21, 2015</td>
                                 </tr>
                                 <tr>
                                    <th>
                                       <img class="img-fluid img-circle" src="assets/images/avatar-3.png" alt="User">
                                    </th>
                                    <td>Contract with belife Company
                                       <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                    </td>
                                    <td>
                                       <span class="pie" style="display: none;">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                    </td>
                                    <td>70%</td>
                                    <td>November 21, 2015</td>
                                 </tr>
                                 <tr>
                                    <th>
                                       <img class="img-fluid img-circle" src="assets/images/avatar-1.png" alt="User">
                                    </th>
                                    <td>Contract with belife Company
                                       <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                    </td>
                                    <td>
                                       <span class="pie" style="display: none;">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                    </td>
                                    <td>70%</td>
                                    <td>November 21, 2015</td>
                                 </tr>
                                 <tr>
                                    <th>
                                       <img class="img-fluid img-circle" src="assets/images/avatar-2.png" alt="User">
                                    </th>
                                    <td>Contract with belife Company
                                       <p><i class="icofont icofont-clock-time"></i>Created 20.10.2016</p>
                                    </td>
                                    <td>
                                       <span class="pie" style="display: none;">0.52/1.561</span><svg class="peity" height="30" width="30"><path d="M 15.000000000000002 0 A 15 15 0 0 1 28.00043211809656 22.482564048691025 L 15 15" fill="#2196F3"></path><path d="M 28.00043211809656 22.482564048691025 A 15 15 0 1 1 14.999999999999996 0 L 15 15" fill="#ccc"></path></svg>
                                    </td>
                                    <td>70%</td>
                                    <td>November 21, 2015</td>
                                 </tr>

                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>
               </div>
             
            </div>
            <!-- 2-1 block end -->
         </div>
         <!-- Main content ends -->
         <!-- Container-fluid ends -->
         <div class="fixed-button">
            <a href="#!" class="btn btn-md btn-primary">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i> Upgrade To Pro
            </a>
         </div>
      </div>
   </div>


</div>

</template>
<script>
import Header from '../components/header.vue'
export default {
   components:{
      Header
   }
}
</script>
  