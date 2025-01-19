// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import 'firebase/auth';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn05i69I4QvHLIHdYT1LoBf53Ni30nyxs",
  authDomain: "handover-ebc43.firebaseapp.com",
  projectId: "handover-ebc43",
  storageBucket: "handover-ebc43.firebasestorage.app",
  messagingSenderId: "30280189070",
  appId: "1:30280189070:web:f0b18b1f76bf7f5cd175df",
  measurementId: "G-GJXB8FQSF1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };