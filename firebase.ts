// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUior_9mM-p1kJR451fsSDqi19AgFw_1E",
  authDomain: "hybrid-text-compression.firebaseapp.com",
  projectId: "hybrid-text-compression",
  storageBucket: "hybrid-text-compression.firebasestorage.app",
  messagingSenderId: "395591607467",
  appId: "1:395591607467:web:8c8378198a7ab470e303ee",
  measurementId: "G-TG7DGKB1ZF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
