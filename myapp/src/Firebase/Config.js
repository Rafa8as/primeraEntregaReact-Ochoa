
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBq3nO0w3oRwrYhfZk_dgwJ7_TkOBOYQgk",
  authDomain: "supermercaditorafa.firebaseapp.com",
  projectId: "supermercaditorafa",
  storageBucket: "supermercaditorafa.appspot.com",
  messagingSenderId: "1075941056735",
  appId: "1:1075941056735:web:cafba3792ec6e82b00c96a"
};


const app = initializeApp(firebaseConfig);

export const initFirebase = ( )=>app