// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "wheels-marketplace.firebaseapp.com",
  projectId: "wheels-marketplace",
  storageBucket: "wheels-marketplace.appspot.com",
  messagingSenderId: "321614789932",
  appId: "1:321614789932:web:1ce90003312df1f6b58089",
  measurementId: "G-7K67GC3VTT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
