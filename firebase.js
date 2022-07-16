// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc3coMPdEdSbp-qktLO3l0ReU2v9eVTt4",
  authDomain: "learn-firebase-app-de8b9.firebaseapp.com",
  projectId: "learn-firebase-app-de8b9",
  storageBucket: "learn-firebase-app-de8b9.appspot.com",
  messagingSenderId: "611399566710",
  appId: "1:611399566710:web:fd1a2b2689d40d7476e657"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);