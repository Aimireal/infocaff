import { getApps, initializeApp } from "firebase/app";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

let firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export { firebaseApp };
