// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArsd0Wmj32QQnl0qVpAlA_m94e1xZ-yL4",
  authDomain: "myapp-25758.firebaseapp.com",
  databaseURL: "https://myapp-25758-default-rtdb.firebaseio.com",
  projectId: "myapp-25758",
  storageBucket: "myapp-25758.firebasestorage.app",
  messagingSenderId: "529889547453",
  appId: "1:529889547453:web:29c91052f3e9a4e88d13d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export { auth }