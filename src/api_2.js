// src/api.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Ваша конфигурация Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCQmw0H2uSlHXnWQTbBPxe9h-9KkosVBV0",
    authDomain: "todos2-e8c59.firebaseapp.com",
    projectId: "todos2-e8c59",
    storageBucket: "todos2-e8c59.firebasestorage.app",
    messagingSenderId: "292490362700",
    appId: "1:292490362700:web:4636306a85a0a5556a19e9",
    databaseURL: "https://console.firebase.google.com/project/todos2-e8c59/database/todos2-e8c59-default-rtdb/data/~2F"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспорт сервисов
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;