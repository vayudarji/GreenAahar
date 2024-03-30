import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyC5BovQDMyK-kwesKmU0I24Gn97LDbIN1g",
    authDomain: "greenaaharr.firebaseapp.com",
    projectId: "greenaaharr",
    storageBucket: "greenaaharr.appspot.com",
    messagingSenderId: "840944223474",
    appId: "1:840944223474:web:eff8980b30e36e723d3c6b",
    databaseURL: "https://greenaaharr-default-rtdb.firebaseio.com/"
  };

  export const app = initializeApp(firebaseConfig)
  export const database = getDatabase(app)
  