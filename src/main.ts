import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './style.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoLopb64xBkWgRCh_Dvi8XzZqWe5oNxxs",
  authDomain: "flutter-material-theme-editor.firebaseapp.com",
  projectId: "flutter-material-theme-editor",
  storageBucket: "flutter-material-theme-editor.firebasestorage.app",
  messagingSenderId: "1054394532073",
  appId: "1:1054394532073:web:746ab4cb577e87daa0b078",
  measurementId: "G-NTEECM7G3T"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(FirebaseApp);

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');