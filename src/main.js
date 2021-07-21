import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'


var firebaseConfig = {
    apiKey: "AIzaSyCyyYoTfmDhgqL2PvVfmLNh33W4-uoD0nI",
    authDomain: "alumni-350de.firebaseapp.com",
    projectId: "alumni-350de",
    storageBucket: "alumni-350de.appspot.com",
    messagingSenderId: "814101334721",
    appId: "1:814101334721:web:2ce0461d33b51b5f79e240"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



createApp(App).use(store).use(router).mount('#app')
