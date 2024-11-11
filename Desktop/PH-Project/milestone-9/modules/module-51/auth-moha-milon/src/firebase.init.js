// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDAPNMfdrfbtFlkXc3KxMzjr0eO9-UDqyA",
    authDomain: "auth-moha-milon-c9aec.firebaseapp.com",
    projectId: "auth-moha-milon-c9aec",
    storageBucket: "auth-moha-milon-c9aec.firebasestorage.app",
    messagingSenderId: "983243240203",
    appId: "1:983243240203:web:cab1d82ecf9a7f05b7e80e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);