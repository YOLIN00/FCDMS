// Import the functions you need from the SDKs you need
import { initializeApp, getApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

// import { initializeApp } from '@react-native-firebase/app';
// import { getAuth, onAuthStateChanged } from '@react-native-firebase/auth';
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: ,
  authDomain: ,
  projectId: ,
  storageBucket: ,
  messagingSenderId: ,
  appId: ,
  databaseURL:
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
const db=getDatabase(app);


// const auth = getAuth(app);

// export default auth;
export { app, auth, getApp, getAuth ,db};
