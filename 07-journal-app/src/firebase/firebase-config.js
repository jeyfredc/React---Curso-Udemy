import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDYAApyi8BbpThsORzAYy6Lv62jL48tGfk",
    authDomain: "jorunalapp-1eb82.firebaseapp.com",
    projectId: "jorunalapp-1eb82",
    storageBucket: "jorunalapp-1eb82.appspot.com",
    messagingSenderId: "67664483135",
    appId: "1:67664483135:web:05fbcab3ead19f3b01798a"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}