import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADU4Jfwy9UBWDHp-XOkiinVf6ZO0e4e2g",
  authDomain: "addissoftware-reactapp.firebaseapp.com",
  databaseURL: "https://addissoftware-reactapp-default-rtdb.firebaseio.com",
  projectId: "addissoftware-reactapp",
  storageBucket: "addissoftware-reactapp.appspot.com",
  messagingSenderId: "157907501022",
  appId: "1:157907501022:web:cae293d868b3f746a2e74f",
  measurementId: "G-XEQ4GGL3KF",
};
// Initialize Firebase
const fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
