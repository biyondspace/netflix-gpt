// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJOTRbQRt73ef4gTj_86IM18lX0R43JlM",
  authDomain: "netflixgpt-e24a8.firebaseapp.com",
  projectId: "netflixgpt-e24a8",
  storageBucket: "netflixgpt-e24a8.firebasestorage.app",
  messagingSenderId: "607520427490",
  appId: "1:607520427490:web:ea6c501b6492afe9f93dbb",
  measurementId: "G-TR3D8CDC1D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
