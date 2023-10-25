// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-heGUZuzsrSDWs46iB-zBvHYrFf1FW-I",
  authDomain: "authtest-293b3.firebaseapp.com",
  projectId: "authtest-293b3",
  storageBucket: "authtest-293b3.appspot.com",
  messagingSenderId: "1009589325071",
  appId: "1:1009589325071:web:8769c280084fc493cd027a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);