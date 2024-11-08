// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvjV_PH8bF_cIMgKiL1IhGH5qF3DFW4kA",
  authDomain: "simple-firebase-2e585.firebaseapp.com",
  projectId: "simple-firebase-2e585",
  storageBucket: "simple-firebase-2e585.firebasestorage.app",
  messagingSenderId: "972476870794",
  appId: "1:972476870794:web:d0c09da04cc779b7623d73",
  measurementId: "G-BRW1BWYXK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;