import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyCuHRvcQJi5PLljbSaz1L1m1HqGWjZYiHI",
  authDomain: "intel-robotics.firebaseapp.com",
  databaseURL: "https://intel-robotics-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "intel-robotics",
  storageBucket: "intel-robotics.appspot.com",
  messagingSenderId: "852657305561",
  appId: "1:852657305561:web:3c39e496ae8edecf5f0bc8"
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase();