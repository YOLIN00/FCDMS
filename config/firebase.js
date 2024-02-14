// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
// import { initializeApp } from '@react-native-firebase/app';
// import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
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

// let app
// if(firebase.apps.length==0){
//    app=initializeApp(firebaseConfig);
// }else{
//   app=
// }
const app = initializeApp(firebaseConfig);
// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

// const auth = getAuth(app);

// export default auth;
export { app, auth, getApp, getAuth };
