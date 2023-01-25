import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const key = import.meta.env.VITE_APP_KEY;
const domain = import.meta.env.VITE_APP_AUTH_DOMAIN;
const project = import.meta.env.VITE_APP_PROJECTID;
const bucket = import.meta.env.VITE_APP_STORAGE_BUCKET;
const message = import.meta.env.VITE_APP_MESSAGING_SENDER_ID;
const id = import.meta.env.VITE_APP_APP_ID;

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
