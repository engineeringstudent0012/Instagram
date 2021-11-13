import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5-Tz7J4v6j0Qkiw9Y4n0wdBcbAO7GE2Q",
  authDomain: "instagram-4340b.firebaseapp.com",
  projectId: "instagram-4340b",
  storageBucket: "instagram-4340b.appspot.com",
  messagingSenderId: "637052348620",
  appId: "1:637052348620:web:78e66bf377260ab8d87a69"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };