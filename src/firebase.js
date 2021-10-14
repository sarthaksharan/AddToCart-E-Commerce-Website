import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"





// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHe1_6XnM5c0rJwFuhhu1m51bZkvVlyGE",
    authDomain: "e-commerce-website-a51c5.firebaseapp.com",
    projectId: "e-commerce-website-a51c5",
    storageBucket: "e-commerce-website-a51c5.appspot.com",
    messagingSenderId: "743809918728",
    appId: "1:743809918728:web:0b0da034d773db922d2ebd",
    measurementId: "G-PG7N5PY0D6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);



const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };