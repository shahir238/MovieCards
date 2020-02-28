import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyAJtbSe6Tt2YU-Y42NnADUxA2sdraGzGhI",
    authDomain: "cards-e7199.firebaseapp.com",
    databaseURL: "https://cards-e7199.firebaseio.com",
    projectId: "cards-e7199",
    storageBucket: "cards-e7199.appspot.com",
    messagingSenderId: "949570040290",
    appId: "1:949570040290:web:8db69a5cf36f54f05749bb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const auth =firebase.auth();
  export const db =firebase.firestore();
  export const storage = firebase.storage();
  export default firebase;