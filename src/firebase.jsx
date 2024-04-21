// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtfEPW5R-eBdGDmn4vYxwJVi7tQ4eZpzM",
  authDomain: "tmdbapp-1305a.firebaseapp.com",
  projectId: "tmdbapp-1305a",
  storageBucket: "tmdbapp-1305a.appspot.com",
  messagingSenderId: "755090553163",
  appId: "1:755090553163:web:3a540ae83b4e5497a110ce",
  measurementId: "G-NZ6V4P6BKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);