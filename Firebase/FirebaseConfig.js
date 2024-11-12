import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBenZxCrJ-YoBhMZDZOaKy1gcwjrGEPYmQ",
  authDomain: "graficos-dd1ec.firebaseapp.com",
  projectId: "graficos-dd1ec",
  storageBucket: "graficos-dd1ec.firebasestorage.app",
  messagingSenderId: "905970568663",
  appId: "1:905970568663:web:d775d150752c005ca34f92"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;