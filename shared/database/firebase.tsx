import { initializeApp, getApps, getApp } from "firebase/app";
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
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

export const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

// Safe initialization for both client and server environments
let app;
let db;
let database;

// Check if we're in a browser environment
if (typeof window !== 'undefined') {
  // Client-side initialization
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    database = getDatabase(app);
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
} else {
  // Server-side initialization
  try {
    app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
    db = getFirestore(app);
    database = getDatabase(app);
  } catch (error) {
    console.error("Server-side Firebase initialization error:", error);
    // Initialize with empty objects to prevent null reference errors
    app = {};
    db = {};
    database = {};
  }
}

export { app, db, database };