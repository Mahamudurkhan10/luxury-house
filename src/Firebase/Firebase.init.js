// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCoCgnd_VK-VOS_PPcipqrhwg2EepK4n4",
  authDomain: "luxury-house-f1f2e.firebaseapp.com",
  projectId: "luxury-house-f1f2e",
  storageBucket: "luxury-house-f1f2e.appspot.com",
  messagingSenderId: "180619136089",
  appId: "1:180619136089:web:ff1ffc98a177d8c3e47548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)