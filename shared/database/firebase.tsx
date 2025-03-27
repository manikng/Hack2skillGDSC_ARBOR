import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { createContext ,useContext } from "react";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};


export const FirebaseContext = createContext(null);

export const useFirebase = ()=> useContext(FirebaseContext);


const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 const database = getDatabase(app);

 export  { app ,db ,database};





// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// import { createContext, useContext, } from "react";

// import {
//   getFirestore,
// } from "firebase/firestore";
// import {  getDatabase } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyAS6SmDT21sDYh2kSYgI5QOpd_U9HZjZGM",
//   authDomain: "rentit-b4555.firebaseapp.com",
//   databaseURL: "https://rentit-b4555-default-rtdb.firebaseio.com",
//   projectId: "rentit-b4555",
//   storageBucket: "rentit-b4555.firebasestorage.app",
//   messagingSenderId: "866324838598",
//   appId: "1:866324838598:web:0f618cb51aa1a9e227bfc7",
//   measurementId: "G-PLNG6E31P1",
// };


// export const FirebaseContext = createContext(null);

// export const useFirebase = ()=> useContext(FirebaseContext);


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// const database = getDatabase(app);


// export  { app ,db ,database};