import firebase from 'firebase';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCSyjLFdmjeHadEWZp_odOXVeWSEYX--wc",
  authDomain: "pnck-dev-app.firebaseapp.com",
  databaseURL: "https://pnck-dev-app-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "pnck-dev-app",
  storageBucket: "pnck-dev-app.appspot.com",
  messagingSenderId: "66416636425",
  appId: "1:66416636425:web:227d018ef03ec5eabe3ed8",
  measurementId: "G-L959PNZS72"
};

// Initialize Firebase
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app();
}

export const auth = firebase.auth();
export const db = firebase.database();
