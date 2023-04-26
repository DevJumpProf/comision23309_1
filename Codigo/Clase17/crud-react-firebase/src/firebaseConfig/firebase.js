// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore}from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZPyGy9XuqISl7rrt68BFCQOoEcfWBPZo",
  authDomain: "cac-b5371.firebaseapp.com",
  projectId: "cac-b5371",
  storageBucket: "cac-b5371.appspot.com",
  messagingSenderId: "1070608230823",
  appId: "1:1070608230823:web:a1a330ccb07ff369daae82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)