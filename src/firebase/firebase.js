import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAsnJRAMj49vTZ5IzqcSVGiWHvu2SnmO4o",
  authDomain: "melloup.firebaseapp.com",
  projectId: "melloup",
  storageBucket: "melloup.appspot.com",
  messagingSenderId: "953407234599",
  appId: "1:953407234599:web:9016fb423703b756aba402",
  measurementId: "G-7GGNB66HY6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);