// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app"s Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAV2O6ESI4KP2t2Y7YcyDf1X96cCbG7_Zc",
    authDomain: "electroshop-d1d39.firebaseapp.com",
    projectId: "electroshop-d1d39",
    storageBucket: "electroshop-d1d39.appspot.com",
    messagingSenderId: "1097712011377",
    appId: "1:1097712011377:web:14a16908fdd2cc3015f3d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;