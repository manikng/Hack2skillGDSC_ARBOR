import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
import { createContext, useContext } from "react";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

export const FirebaseContext = createContext({
  app: null,
  database: null,
});

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (!context) {
    throw new Error("useFirebase must be used within a FirebaseProvider");
  }
  return context;
};

// export const useFirebase = () => useContext(FirebaseContext);

// Safe initialization for both client and server environments
let app;
let db;
let database;

app =  initializeApp(firebaseConfig);
db = getFirestore(app);
database = getDatabase(app);

export { app, db, database };
