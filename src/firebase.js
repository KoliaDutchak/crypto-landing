// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfseB3B0SeeE3d5FM6TZxTZTSF6CenSNc",
  authDomain: "crypto-landing-e202c.firebaseapp.com",
  projectId: "crypto-landing-e202c",
  storageBucket: "crypto-landing-e202c.firebasestorage.app",
  messagingSenderId: "695941422320",
  appId: "1:695941422320:web:c4ef380390b51bbabab635",
  measurementId: "G-XR0DNQ1KCG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 