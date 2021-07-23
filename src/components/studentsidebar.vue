<template>
 <div>
            <!-- Navbar-->
      <header class="main-header-top hidden-print">
         <router-link to="/studentHome"  class="logo">Alumni Portal</router-link>
         <nav class="navbar navbar-static-top">
            <!-- Sidebar toggle button-->
         
            <!-- Navbar Right Menu-->
            <div class="navbar-custom-menu">
               <ul class="top-nav">
                 
                  <!-- User Menu-->
                  <li class="dropdown">
                     <a href="#!" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" class="dropdown-toggle drop icon-circle drop-image">
                        <span><img class="img-circle " src="assets/images/avatar-1.png" style="width:40px; margin-right:5px" alt="User Image"></span>
                        <span><b>{{email}}</b> <i class=" icofont icofont-simple-down"></i></span>

                     </a>
                     <ul class="dropdown-menu settings-menu">
                        <li><router-link to="/profile"><i class="icon-user"></i> Profile</router-link></li>
                        <li class="p-0">
                           <div class="dropdown-divider m-0"></div>
                        </li>
                        <li><a href="#" @click="logout()"><i class="icon-logout"></i> Logout</a></li>

                     </ul>
                  </li>
               </ul>

            
            </div>
         </nav>
      </header>
      <!-- Side-Nav-->
      <aside class="main-sidebar hidden-print ">
         <section class="sidebar" id="sidebar-scroll">
            <!-- Sidebar Menu-->
            <ul class="sidebar-menu">
                
                <li class="treeview active" style="margin-top:50px">
                    <router-link class="waves-effect waves-dark" to="/studentHome">
                        <i class="icon-home"></i><span> Dashboard</span>
                    </router-link>                
                </li>
                 <li class="treeview">
                    <router-link class="waves-effect waves-dark" to="/transcript">
                      <i class="icon-book-open"></i><span> Files</span>
                    </router-link>                
                </li>
                 <li class="treeview">
                    <router-link class="waves-effect waves-dark" to="/lecturer">
                      <i class="icon-user"></i><span> Lecturers</span>
                    </router-link>                
                </li>
                  <li class="treeview">
                    <router-link class="waves-effect waves-dark" to="/request">
                      <i class="icon-speedometer"></i><span> Request</span>
                    </router-link>                
                </li>
              <li class="treeview">
                    <router-link class="waves-effect waves-dark" to="/events">
                        <i class="icon-list"></i><span> Events</span>
                    </router-link>                
                </li>
                 <li class="treeview">
                    <router-link class="waves-effect waves-dark" to="/jobs">
                     <i class="icon-briefcase"></i><span> Jobs</span>
                    </router-link>                
                </li>
                 <li class="treeview">
                    <router-link class="waves-effect waves-dark" to="/enterChat">
                      <i class="icon-bubbles"></i><span>Forum</span>
                    </router-link>                
                </li>
            </ul>
         </section>
      </aside>
 </div>
</template>
<script>
import {fb} from '../firebase'
export default {
    data() {
       return {
          
       }
    },
    methods: {
       logout(){
          fb.auth().signOut()
          this.$router.push('/')
       }
    },
    created(){
        let user = fb.auth().currentUser
        let uid = user.uid;
        this.email = user.email
        
    }
}
</script>
