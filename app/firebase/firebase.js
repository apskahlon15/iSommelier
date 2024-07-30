// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAluYjiHKvNZp3fpg4J0NZIuME3hy_fsOU",
  authDomain: "isommelier-407eb.firebaseapp.com",
  projectId: "isommelier-407eb",
  storageBucket: "isommelier-407eb.appspot.com",
  messagingSenderId: "743577851125",
  appId: "1:743577851125:web:170abc6a978d532c15e1bc",
  measurementId: "G-B6N1MXBQTG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
