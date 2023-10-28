// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAQhjwwA7QQOY3ANn-Oh_B6TismANspQYk",
	authDomain: "final-webcup-2023-madagascar.firebaseapp.com",
	projectId: "final-webcup-2023-madagascar",
	storageBucket: "final-webcup-2023-madagascar.appspot.com",
	messagingSenderId: "259860784003",
	appId: "1:259860784003:web:80183c9b392d596b31ccb6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
