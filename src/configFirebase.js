import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBksXTplXLQjTIJNWs-3w-K94loniXBjBk",
  authDomain: "my-project-vuso.firebaseapp.com",
  databaseURL: "https://my-project-vuso.firebaseio.com",
  projectId: "my-project-vuso",
  storageBucket: "my-project-vuso.appspot.com",
  messagingSenderId: "843241435185",
  appId: "1:843241435185:web:a4e866c48975f8958d6510",
  measurementId: "G-BT00YBZ685"
};
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, db, googleProvider };
