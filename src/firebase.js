import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCRUjgIcVrTxIH-CuQoU_7Up-oaQEXspUQ",
  authDomain: "clone-54b9c.firebaseapp.com",
  databaseURL: "https://clone-54b9c.firebaseio.com",
  projectId: "clone-54b9c",
  storageBucket: "clone-54b9c.appspot.com",
  messagingSenderId: "715806305556",
  appId: "1:715806305556:web:0dcbd4cc19b833ff41e601",
  measurementId: "G-NELYFN86C6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
