import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAgb2J7kaAttkmbm1C0U6L9HS6LGqRiuek",
  authDomain: "talktrails.firebaseapp.com",
  databaseURL: "https://talktrails-default-rtdb.firebaseio.com/",
  projectId: "talktrails",
  storageBucket: "",
  messagingSenderId: "182684416332"
};

// const firebaseApp = firebase.initializeApp(config);
// export default firebaseApp;

// https://github.com/zeit/next.js/issues/1999
export default !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();
