import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZ9lnDfdHQfVX6YKxPO2nEKLkK9cHRaEw",
  authDomain: "be-like-water.firebaseapp.com",
  projectId: "be-like-water",
  storageBucket: "be-like-water.appspot.com",
  messagingSenderId: "919042393398",
  appId: "1:919042393398:web:b153ce627ec67dc7b81f97",
  measurementId: "G-RNFVYKZ0VF",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;
