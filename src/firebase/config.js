import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const key = process.env.REACT_APP_KEY;
const domain = process.env.REACT_APP_AUTH_DOMAIN;
const project = process.env.REACT_APP_PROJECTID;
const bucket = process.env.REACT_APP_STORAGE_BUCKET;
const message = process.env.REACT_APP_MESSAGING_SENDER_ID;
const id = process.env.REACT_APP_APP_ID;

const firebaseConfig = {
  apiKey: key,
  authDomain: domain,
  projectId: project,
  storageBucket: bucket,
  messagingSenderId: message,
  appId: id,
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
