//configuraciones de firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPADiAFgA-dxKikiMfvAjF2yuSUR4LKOo",
  authDomain: "vicbooksa.firebaseapp.com",
  projectId: "vicbooksa",
  storageBucket: "vicbooksa.firebasestorage.app",
  messagingSenderId: "439308385223",
  appId: "1:439308385223:web:6eabb9dfbadf4be30bb7e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//puede ser cualquier nombre, pero es una convención usar db
export const db = getFirestore(app);