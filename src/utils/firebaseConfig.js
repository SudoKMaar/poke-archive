// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3BqP0ac975PhbSCjeS6YiN_tL6F8Hxxk",
  authDomain: "poke-archive.firebaseapp.com",
  projectId: "poke-archive",
  storageBucket: "poke-archive.appspot.com",
  messagingSenderId: "366929751939",
  appId: "1:366929751939:web:c943306007c57f081550b6",
  measurementId: "G-30PPYTPJK5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const pokemonListRef = collection(firebaseDB, "pokemonList");
