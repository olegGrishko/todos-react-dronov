// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQmw0H2uSlHXnWQTbBPxe9h-9KkosVBV0",
    authDomain: "todos2-e8c59.firebaseapp.com",
    projectId: "todos2-e8c59",
    storageBucket: "todos2-e8c59.firebasestorage.app",
    messagingSenderId: "292490362700",
    appId: "1:292490362700:web:4636306a85a0a5556a19e9",
    databaseURL: "https://console.firebase.google.com/project/todos2-e8c59/database/todos2-e8c59-default-rtdb/data/~2F"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;