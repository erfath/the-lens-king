// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrWBApjhxl1ZCI8U9kqfvYA1Z2CTTBCAo",
  authDomain: "the-lens-king.firebaseapp.com",
  projectId: "the-lens-king",
  storageBucket: "the-lens-king.appspot.com",
  messagingSenderId: "59820683668",
  appId: "1:59820683668:web:4db27c61a6494dfc9d1f81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;