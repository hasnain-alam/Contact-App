// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
//  https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvdlpzNRo-raNuQXT7AdyUawuklAOH14E",
  authDomain: "vit-contact-87c61.firebaseapp.com",
  projectId: "vit-contact-87c61",
  storageBucket: "vit-contact-87c61.appspot.com",
  messagingSenderId: "881392831722",
  appId: "1:881392831722:web:912d3f6e415fcb8cc91b93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);
