// js/firebase-config.js

// Firebase SDK (Pastikan versi yang Anda gunakan adalah yang terbaru)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getDatabase, ref, push, set, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCXh5UlpwWyIhO0pzJkVUA7vz2yssfZBks",
  authDomain: "matematika-455da.firebaseapp.com",
  projectId: "matematika-455da",
  storageBucket: "matematika-455da.firebasestorage.app",
  messagingSenderId: "1005585815508",
  appId: "1:1005585815508:web:ed0013e7e81c677fec6841",
  databaseURL: "https://matematika-455da-default-rtdb.firebaseio.com" // Penting untuk Realtime Database
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, signInWithEmailAndPassword, signOut, onAuthStateChanged, createUserWithEmailAndPassword, ref, push, set, onValue, remove, update };