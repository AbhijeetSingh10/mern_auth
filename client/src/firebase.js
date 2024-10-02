// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e16d0.firebaseapp.com",
  projectId: "mern-auth-e16d0",
  storageBucket: "mern-auth-e16d0.appspot.com",
  messagingSenderId: "138130239911",
  appId: "1:138130239911:web:8e57b01845d6d6008c8682"
};

// Initialize Firebase
export 
const app = initializeApp(firebaseConfig);