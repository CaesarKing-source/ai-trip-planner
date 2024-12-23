import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDMfuUuhv5J740DS657dvp0oP_Y5c-Qys",
  authDomain: "ai-travel-planner-46534.firebaseapp.com",
  projectId: "ai-travel-planner-46534",
  storageBucket: "ai-travel-planner-46534.firebasestorage.app",
  messagingSenderId: "898811322425",
  appId: "1:898811322425:web:c0053bc519fcb926caade8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);