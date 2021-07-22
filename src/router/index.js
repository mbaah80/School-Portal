import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/login.vue'
import Admin from '../views/admin.vue'
import studentHome from '../views/studentHome.vue'
import Transcript from '../views/transcript.vue'
import TranscriptRequest from '../views/transcriptRequested.vue'
import Jobs from '../views/jobs.vue'
import Events  from '../views/events.vue'
import addEvent from '../views/addevents.vue'
import addJob from '../views/addjob.vue'
import addUser from '../views/adduser.vue'
import adminEvent from '../views/adminevents.vue'
import adminJob from '../views/adminjob.vue'
import alumni from '../views/alumni.vue'
import users from '../views/users.vue'
import Register from '../views/register.vue'
import forgotPassword from '../views/forgot-password.vue'
import lecturer from '../views/lecturer.vue'
import request from '../views/request.vue'
import Profile from '../views/profile.vue'
import {fb} from '../firebase'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes:[
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/forgot-password',
      name: 'forgotPassword',
      component: forgotPassword
    },
    {
      path:'/profile',
      name:'Profile',
      component:Profile
    },
    {
      path:'/admin',
      name:'Admin',
      component:Admin,
      meta:{requiresAuth: true},
    },
    {
      path:'/addevents',
      name:'addEvents',
      component:addEvent,
      meta:{requiresAuth: true},
    },
    {
      path:'/adminevents',
      name:'adminEvents',
      component:adminEvent,
      meta:{requiresAuth: true},
    },
    {
      path:'/addjob',
      name:'addJob',
      component:addJob
    },
    {
      path:'/adminjob',
      name:'adminJob',
      component:adminJob,
      meta:{requiresAuth: true},
    },
    {
      path:'/adduser',
      name:'addUser',
      component:addUser,
      meta:{requiresAuth: true},
    },
    {
      path:'/users',
      name:'users',
      component:users,
      meta:{requiresAuth: true},
    },
    {
      path:'/lecturer',
      name:'lecturer',
      component:lecturer,
      meta:{requiresAuth: true},
    },
    {
      path:'/alumni',
      name:'alumni',
      component:alumni,
      meta:{requiresAuth: true},
    },
    {
      path:'/studentHome',
      name:'studentHome',
      component:studentHome,
      meta:{requiresAuth: true},
    },
    {
      path:'/transcript',
      name:'Transcript',
      component:Transcript,
      meta:{requiresAuth: true},
    },
    {
      path:'/request',
      name:'request',
      component:request,
      meta:{requiresAuth: true},
    },
    {
      path:'/transcriptRequest',
      name:'TranscriptRequest',
      component:TranscriptRequest,
      meta:{requiresAuth: true},
    },
    {
      path:'/jobs',
      name:'Jobs',
      component:Jobs,
      meta:{requiresAuth: true},
    },
    {
      path:'/events',
      name:'Events',
      component:Events,
      meta:{requiresAuth: true},
    }
  ]
})

router.beforeEach((to, from, next)=>{
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  const currentUser = fb.auth().currentUser

  if(requiresAuth && !currentUser){
    next('/')
  }else if(requiresAuth && currentUser){
    next()
  }else{
    next()
  }
})


export default router
