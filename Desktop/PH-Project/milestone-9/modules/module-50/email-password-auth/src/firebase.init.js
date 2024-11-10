// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlcum2xT3U8GUXgAR3bY-AhK4IGV850lA",
  authDomain: "email-password-auth-c7aab.firebaseapp.com",
  projectId: "email-password-auth-c7aab",
  storageBucket: "email-password-auth-c7aab.firebasestorage.app",
  messagingSenderId: "556090133102",
  appId: "1:556090133102:web:a596a9d1a652e69a74347f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);