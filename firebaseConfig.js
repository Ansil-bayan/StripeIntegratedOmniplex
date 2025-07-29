import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyDrBuk9U421335359ihjElj9aNfoeCnXkM",
  authDomain: "omniplex-8ece9.firebaseapp.com",
  projectId: "omniplex-8ece9",
  storageBucket: "omniplex-8ece9.firebasestorage.app",
  messagingSenderId: "57179654923",
  appId: "1:57179654923:web:734b4937e718b60437700e",
  measurementId: "G-DZF9MW61MJ",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

export const initializeFirebase = () => {
  return app;
};
