import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmQ1gyPMeEUwprh87GdGie70_zAf_bzes",
  authDomain: "angastore-1c823.firebaseapp.com",
  projectId: "angastore-1c823",
  storageBucket: "angastore-1c823.appspot.com",
  messagingSenderId: "770819631477",
  appId: "1:770819631477:web:9660abbbb9731552590b3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
      <App />  
)
