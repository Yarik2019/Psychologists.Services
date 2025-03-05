// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoNpO5xgYqnhFPpkiLLYrIBQkoJ6tiTxs",
  authDomain: "psychologists-e7453.firebaseapp.com",
  databaseURL: "https://psychologists-e7453-default-rtdb.firebaseio.com",
  projectId: "psychologists-e7453",
  storageBucket: "psychologists-e7453.firebasestorage.app",
  messagingSenderId: "793753074264",
  appId: "1:793753074264:web:dc5891a7f6902ce8d0682d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
console.log(db);
