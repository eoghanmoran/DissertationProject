import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAz1m-CnM42RLjBxUYRGu3j3tjDejGcPlE",
    authDomain: "forward-south.firebaseapp.com",
    databaseURL: "https://forward-south-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "forward-south",
    storageBucket: "forward-south.appspot.com",
    messagingSenderId: "148774866256",
    appId: "1:148774866256:web:d08452cc4d18a9097eb055",
    measurementId: "G-BK799ZG0X9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

