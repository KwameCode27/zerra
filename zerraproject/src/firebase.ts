// Firebase configuration and initialization for authentication
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD2Pm3HNA-Br1DN-P1wPYzWWWKXkxVOIFI",
  authDomain: "zerraproject.firebaseapp.com",
  projectId: "zerraproject",
  storageBucket: "zerraproject.firebasestorage.app",
  messagingSenderId: "608246068461",
  appId: "1:608246068461:web:9fa1e379af1b7f0af048e4",
  measurementId: "G-8KDXBQRBP0"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);