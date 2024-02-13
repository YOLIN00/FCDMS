// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_2J9ADB8o4LNpuEqL1nUnd1mN61dyUrM",
  authDomain: "fcdms-4ef89.firebaseapp.com",
  projectId: "fcdms-4ef89",
  storageBucket: "fcdms-4ef89.appspot.com",
  messagingSenderId: "505373318844",
  appId: "1:505373318844:web:a1e5e1849bcf0ce21f7ab9",
};

let app;
if (firebase.apps.length == 0) {
  // Initialize Firebase
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
