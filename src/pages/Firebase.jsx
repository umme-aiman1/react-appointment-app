// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsDmyA2DtUVb5nLzJMAQc0gIsNMaoBduA",
  authDomain: "appointment-app-fab53.firebaseapp.com",
  projectId: "appointment-app-fab53",
  storageBucket: "appointment-app-fab53.appspot.com",
  messagingSenderId: "850878006328",
  appId: "1:850878006328:web:e673293f75227ca51c52cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore()

export default app;