// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  "projectId": "wk8lab1",
  "appId": "1:410910775372:web:d1bda46704a4380d33bce9",
  "storageBucket": "wk8lab1.firebasestorage.app",
  "apiKey": "AIzaSyA0V_OCmvsIf32LhKXk6uD5uIXgSnhdlCE",
  "authDomain": "wk8lab1.firebaseapp.com",
  "messagingSenderId": "410910775372",
  "projectNumber": "410910775372",
  "version": "2"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
