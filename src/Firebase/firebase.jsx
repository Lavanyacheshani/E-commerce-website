// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUYJL-wb5ohG2Zki3wg8taSNpvr5S0IFk",
  authDomain: "lavsan-store.firebaseapp.com",
  projectId: "lavsan-store",
  storageBucket: "lavsan-store.firebasestorage.app",
  messagingSenderId: "939774346792",
  appId: "1:939774346792:web:0d59a3a80e563dccc3971d"
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth };
export default db;