// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCz6R4QCVXg87ZRY5AZzUAdpqd3dUjrrGo",
  authDomain: "stayinyourpj-jobs.firebaseapp.com",
  projectId: "stayinyourpj-jobs",
  storageBucket: "stayinyourpj-jobs.appspot.com",
  messagingSenderId: "189083239009",
  appId: "1:189083239009:web:f7d87b8eb154e77c42a020",
  measurementId: "G-8YPHH1SS9E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;