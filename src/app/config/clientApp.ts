import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const apiKey = 'AIzaSyCfLRBWmrmuZJhKZK3q87IDbk5FqMv_-bk';
const authDomain = 'infocaff-d871e.firebaseapp.com';
const projectId = 'infocaff-d871e';
const storageBucket = 'infocaff-d871e.appspot.com';
const messagingSenderId = '320564662684';
const appId = '1:320564662684:web:85b551a42e48f2f38b7859';

const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
};

const app = initializeApp(firebaseConfig);

const firestore = getFirestore(app);

export { firestore };
