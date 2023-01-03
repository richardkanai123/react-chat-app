// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyA1anGPf_-2J-XiQWfO7nVHCApgQKKgv-g",
    authDomain: "chatapptuit-e75eb.firebaseapp.com",
    projectId: "chatapptuit-e75eb",
    storageBucket: "chatapptuit-e75eb.appspot.com",
    messagingSenderId: "846599301887",
    appId: "1:846599301887:web:a1f1b510cff7c50a183aca"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)