// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu__FU90E2lO7lC595rTHMb69-1Bkr0DM",
  authDomain: "cac-75c62.firebaseapp.com",
  projectId: "cac-75c62",
  storageBucket: "cac-75c62.appspot.com",
  messagingSenderId: "33307439892",
  appId: "1:33307439892:web:976ea5d2074a5d7ca7c801"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)