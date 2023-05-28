// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_ehNJuSZfZYYKHGx9_fAa6uF0c7NF0-Q",
  authDomain: "pobo-d41ef.firebaseapp.com",
  projectId: "pobo-d41ef",
  storageBucket: "pobo-d41ef.appspot.com",
  messagingSenderId: "164951019638",
  appId: "1:164951019638:web:9229cd90def3f49d664f57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
