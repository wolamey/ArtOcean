// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-88fyErRTtLKtg-sCYpVbDspuCowuDtU",
  authDomain: "artocean-8eee9.firebaseapp.com",
  projectId: "artocean-8eee9",
  storageBucket: "artocean-8eee9.appspot.com",
  messagingSenderId: "315408492011",
  appId: "1:315408492011:web:05d05d6ed73b217dba25ae",
  measurementId: "G-Y1VZ1DM8W8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);