
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDj1yLBK8DC0NmMKzy6Prog_I0-mnFI5x8",
    authDomain: "todo-app-ff7a6.firebaseapp.com",
    databaseURL: "https://todo-app-ff7a6.firebaseio.com",
    projectId: "todo-app-ff7a6",
    storageBucket: "todo-app-ff7a6.appspot.com",
    messagingSenderId: "943325972213",
    appId: "1:943325972213:web:5e8a46f23e9ca1b02de7bc",
    measurementId: "G-Z0W2WNW6BD"
});

const db = firebaseApp.firestore();

export default db;