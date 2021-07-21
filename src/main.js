import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {fb} from './firebase';
import Toaster from "@incuca/vue3-toaster";



let app;

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App).use(store).use(router).use(Toaster).mount('#app')
  }
})
