// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtXHe_qNVIkx_-egHUgBc9feWlrUMpfHg",
  authDomain: "netflixgpt-d76f4.firebaseapp.com",
  projectId: "netflixgpt-d76f4",
  storageBucket: "netflixgpt-d76f4.appspot.com",
  messagingSenderId: "387821603083",
  appId: "1:387821603083:web:c621a4a5ace3342d267a0e",
  measurementId: "G-RJRR56Q9VR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
