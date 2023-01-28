// Import the functions you need from the SDKs you need
import { initializeApp, FirebaseApp } from "firebase/app";
import {Auth, getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

interface FirebaseConfig {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

const firebaseConfig: FirebaseConfig = {
  apiKey: "AIzaSyBAMAqIoxh3QAH61X27zRz8qowYYV9A7Lc",
  authDomain: "chat-app-pedrotech.firebaseapp.com",
  projectId: "chat-app-pedrotech",
  storageBucket: "chat-app-pedrotech.appspot.com",
  messagingSenderId: "400284695912",
  appId: "1:400284695912:web:fe1f4ae26ce88b1c672add"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);
export const auth: Auth = getAuth(app);
export const provider: GoogleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);