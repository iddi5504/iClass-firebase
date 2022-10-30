// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth
  
  
 } from "firebase/auth";
 import {
  getFirestore
  
  
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLT7CbsnmH480mQlaHe-K9QftzxW0pRBQ",
  authDomain: "iclass-e3645.firebaseapp.com",
  projectId: "iclass-e3645",
  storageBucket: "iclass-e3645.appspot.com",
  messagingSenderId: "351310996224",
  appId: "1:351310996224:web:99d99d4f6e615eb06ec9e5"
};

// Initialize Firebase
initializeApp(firebaseConfig);
// initialize authentication
const auth = getAuth()
// set up authentication emulator
// connectAuthEmulator(auth ,"http://localhost:9099")


const firestore=getFirestore()
// connectFirestoreEmulator(firestore,"localhost",4001)

export {
  auth,
  firestore
}