// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.AUTH_DOMAIN,
  // projectId: import.meta.env.PROJECT_ID,
  // storageBucket: import.meta.env.STORAGE_BUCKET,
  // messagingSenderId: import.meta.env.MESSAGING_SENDERID,
  // appId: import.meta.env.APP_ID
  apiKey: "AIzaSyAD4HYsdDWElZA4Heha68gB-sEi9gp9mLo",
  authDomain: "libary-manage.firebaseapp.com",
  projectId: "libary-manage",
  storageBucket: "libary-manage.appspot.com",
  messagingSenderId: "539196310347",
  appId: "1:539196310347:web:dd4f14ece2cbf8b8cfdece"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;