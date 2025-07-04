// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlXzcIqaZ-ewRwTJZCwwjIOsPxR3gXPmQ",
  authDomain: "my-diary-a3900.firebaseapp.com",
  projectId: "my-diary-a3900",
  storageBucket: "my-diary-a3900.firebasestorage.app",
  messagingSenderId: "329986863549",
  appId: "1:329986863549:web:d9f3fe4e1a9057ce0022d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the initialized app
export const auth = getAuth(app);
export const db = getFirestore(app);
