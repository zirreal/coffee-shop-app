import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDtAy4LkwCCstjGDIiFzRhFBxkxa-apWXE",
  authDomain: "coffee-shop-b8071.firebaseapp.com",
  projectId: "coffee-shop-b8071",
  storageBucket: "coffee-shop-b8071.appspot.com",
  messagingSenderId: "231591382120",
  appId: "1:231591382120:web:54c2871857369175807fdd"
};


// init firebase
firebase.initializeApp(firebaseConfig);

// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore};