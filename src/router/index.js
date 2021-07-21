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

const routes = [
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
    path:'/admin',
    name:'Admin',
    component:Admin
  },
  {
    path:'/addevents',
    name:'addEvents',
    component:addEvent
  },
  {
    path:'/adminevents',
    name:'adminEvents',
    component:adminEvent
  },
  {
    path:'/addjob',
    name:'addJob',
    component:addJob
  },
  {
    path:'/adminjob',
    name:'adminJob',
    component:adminJob
  },
  {
    path:'/adduser',
    name:'addUser',
    component:addUser
  },
  {
    path:'/users',
    name:'users',
    component:users
  },
  {
    path:'/alumni',
    name:'alumni',
    component:alumni
  },
  {
    path:'/studentHome',
    name:'studentHome',
    component:studentHome
  },
  {
    path:'/transcript',
    name:'Transcript',
    component:Transcript
  },
  {
    path:'/transcriptRequest',
    name:'TranscriptRequest',
    component:TranscriptRequest
  },
  {
    path:'/jobs',
    name:'Jobs',
    component:Jobs
  },
  {
    path:'/events',
    name:'Events',
    component:Events
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
