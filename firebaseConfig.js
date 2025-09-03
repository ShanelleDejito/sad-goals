
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAn3uAyWQInAH-kkbU0Qnvrc_21axvnH78",
  authDomain: "daily-habit-2004.firebaseapp.com",
  projectId: "daily-habit-2004",
  storageBucket: "daily-habit-2004.firebasestorage.app",
  messagingSenderId: "872163122644",
  appId: "1:872163122644:web:a0c8e561f75e7b570eca41"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
