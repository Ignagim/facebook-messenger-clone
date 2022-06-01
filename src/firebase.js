import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRUdU9czUl_lWpNCNAjx71RbYcT5n07dE",
  authDomain: "messenger-clone-e8a48.firebaseapp.com",
  projectId: "messenger-clone-e8a48",
  storageBucket: "messenger-clone-e8a48.appspot.com",
  messagingSenderId: "122628026664",
  appId: "1:122628026664:web:bf9e670871eff8fe7aa01d",
  measurementId: "G-XRP1NWKMLJ",
};

initializeApp(firebaseConfig);

const db = getFirestore();

export const colRef = collection(db, "messages");

export const q = query(colRef, orderBy("timestamp", "desc"));
