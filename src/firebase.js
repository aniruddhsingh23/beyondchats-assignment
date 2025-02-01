import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, sendEmailVerification, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZz7mK6olTYXqiuhNBpEaBTFXPP_kKuAA",
  authDomain: "beyondchats-83806.firebaseapp.com",
  projectId: "beyondchats-83806",
  storageBucket: "beyondchats-83806.appspot.com",
  messagingSenderId: "354006646405",
  appId: "1:354006646405:web:7c3cf2a7f6d905289c33ec",
  measurementId: "G-Z9T0M1ZNX9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

export { auth, db, provider, signInWithPopup, signOut, sendEmailVerification, createUserWithEmailAndPassword };