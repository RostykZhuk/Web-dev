// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBzFOZo6bhdT-kOaaSbz_luMakOmKHm1I',
  authDomain: 'myprojectauth-a32b2.firebaseapp.com',
  projectId: 'myprojectauth-a32b2',
  storageBucket: 'myprojectauth-a32b2.appspot.com',
  messagingSenderId: '283854360736',
  appId: '1:283854360736:web:176d3880da012d4f44b9c5',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const googleAuthProvider = new GoogleAuthProvider();
