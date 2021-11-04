import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyAGDHmt2jbRCpWx6AG5IcKfeZ6Wj_hlsfg",
    authDomain: "todo-test-3db5f.firebaseapp.com",
    projectId: "todo-test-3db5f",
    storageBucket: "todo-test-3db5f.appspot.com",
    messagingSenderId: "483395557058",
    appId: "1:483395557058:web:7cf20fabb692258db48d5b",
    measurementId: "G-YJSF45XS28"
  };
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()

export default db