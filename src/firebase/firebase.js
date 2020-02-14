import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD3E0th-mBNYu5TMHGbezDuzKJC1tz69SA",
  authDomain: "search-f4722.firebaseapp.com",
  databaseURL: "https://search-f4722.firebaseio.com",
  projectId: "search-f4722",
  storageBucket: "search-f4722.appspot.com",
  messagingSenderId: "216675960592",
  appId: "1:216675960592:web:f876f30123acd9f6dfc795",
  measurementId: "G-55Z6FQTENT"
}; 

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };