// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwhqHDTrNSMalbb0fVJm_Ex554Sp6JbhM",
  authDomain: "netflix-gpt-29b39.firebaseapp.com",
  projectId: "netflix-gpt-29b39",
  storageBucket: "netflix-gpt-29b39.appspot.com",
  messagingSenderId: "933069244269",
  appId: "1:933069244269:web:ddd71e8749b3c384f27c64",
  measurementId: "G-G5M6XGD0YS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();