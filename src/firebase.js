
import firebase, { firestore } from 'firebase'
import 'firebase/storage'
import 'firebase/auth'
import 'firebase/firestore'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCyyYoTfmDhgqL2PvVfmLNh33W4-uoD0nI",
    authDomain: "alumni-350de.firebaseapp.com",
    projectId: "alumni-350de",
    storageBucket: "alumni-350de.appspot.com",
    messagingSenderId: "814101334721",
    appId: "1:814101334721:web:2ce0461d33b51b5f79e240"
  };
  // In
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const st = firebase.storage();

  export {fb,db,st}