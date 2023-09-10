import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const databaseURL = process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: "AIzaSyCfLRBWmrmuZJhKZK3q87IDbk5FqMv_-bk",
  authDomain: "infocaff-d871e.firebaseapp.com",
  databaseURL: "https://infocaff-d871e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "infocaff-d871e",
  storageBucket: "infocaff-d871e.appspot.com",
  messagingSenderId: "320564662684",
  appId: "1:320564662684:web:85b551a42e48f2f38b7859"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = initializeFirestore(firebaseApp, {
  experimentalForceLongPolling: true,
});

export { auth, db };